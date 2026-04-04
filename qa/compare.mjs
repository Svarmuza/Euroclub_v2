import { normalizeText } from './extract-v1.mjs';
import { flattenTranslations, loadV2Translations } from './v2-translations.mjs';

/**
 * Check if a V1 text string appears somewhere in the V2 rendered page text
 */
function findV1TextInV2(v1Text, v2Text) {
  const normalized = normalizeText(v1Text);
  if (normalized.length < 4) return true; // Skip very short strings
  const v2Lower = normalizeText(v2Text);
  return v2Lower.includes(normalized);
}

/**
 * Find partial matches: check if key words from V1 text appear in V2 text
 */
function findPartialMatch(v1Text, v2Text) {
  const v1Words = normalizeText(v1Text).split(/\s+/).filter(w => w.length > 3);
  if (v1Words.length === 0) return { matched: true, score: 1 };

  const v2Lower = normalizeText(v2Text);
  const matchedWords = v1Words.filter(w => v2Lower.includes(w));
  const score = matchedWords.length / v1Words.length;

  return {
    matched: score >= 0.5,
    score,
    matchedWords,
    totalWords: v1Words.length,
  };
}

/**
 * Compare V1 texts against V2 rendered text for a single page.
 */
export function comparePageTexts(v1Texts, v2RenderedText) {
  const results = {
    total: v1Texts.length,
    exactMatches: 0,
    partialMatches: 0,
    missing: 0,
    details: [],
  };

  for (const v1Text of v1Texts) {
    if (normalizeText(v1Text).length < 4) continue; // Skip short noise

    const exactMatch = findV1TextInV2(v1Text, v2RenderedText);
    if (exactMatch) {
      results.exactMatches++;
      results.details.push({ text: v1Text, status: 'exact', match: v1Text });
    } else {
      const partial = findPartialMatch(v1Text, v2RenderedText);
      if (partial.matched) {
        results.partialMatches++;
        results.details.push({
          text: v1Text,
          status: 'partial',
          score: partial.score,
          matchedWords: partial.matchedWords,
        });
      } else {
        results.missing++;
        results.details.push({ text: v1Text, status: 'missing' });
      }
    }
  }

  results.total = results.exactMatches + results.partialMatches + results.missing;
  results.matchRate = results.total > 0
    ? ((results.exactMatches + results.partialMatches) / results.total * 100).toFixed(1)
    : '100.0';

  return results;
}

/**
 * Compare V2 translation JSON completeness vs English (reference).
 * Returns missing keys per locale.
 */
export function compareTranslationCompleteness(referenceLocale = 'en') {
  const reference = loadV2Translations(referenceLocale);
  if (!reference) return {};

  const refFlat = flattenTranslations(reference);
  const refKeys = new Set(Object.keys(refFlat));
  const results = {};

  for (const locale of ['hr', 'de', 'fr', 'it', 'sl', 'pl', 'cs', 'hu', 'ru']) {
    if (locale === referenceLocale) continue;

    const translations = loadV2Translations(locale);
    if (!translations) {
      results[locale] = { error: 'Translation file not found' };
      continue;
    }

    const localeFlat = flattenTranslations(translations);
    const localeKeys = new Set(Object.keys(localeFlat));

    const missingKeys = [...refKeys].filter(k => !localeKeys.has(k));
    const extraKeys = [...localeKeys].filter(k => !refKeys.has(k));

    results[locale] = {
      referenceKeys: refKeys.size,
      localeKeys: localeKeys.size,
      coverage: ((localeKeys.size / refKeys.size) * 100).toFixed(1),
      missingKeys,
      extraKeys,
    };
  }

  return results;
}

/**
 * Full comparison: V1 texts vs V2 rendered content for all locales and pages.
 */
export function compareAll(v1Texts, crawlResults) {
  const results = {};

  for (const locale of Object.keys(crawlResults)) {
    results[locale] = {};

    for (const route of Object.keys(crawlResults[locale])) {
      const crawl = crawlResults[locale][route];
      const v1TextsForPage = v1Texts[locale]?.[route] || [];

      results[locale][route] = {
        // Crawl results
        url: crawl.url,
        status: crawl.status,
        title: crawl.title,
        crawlSuccess: crawl.success,
        crawlError: crawl.error || null,
        // Text comparison
        v1TextCount: v1TextsForPage.length,
        comparison: v1TextsForPage.length > 0
          ? comparePageTexts(v1TextsForPage, crawl.text || '')
          : { total: 0, exactMatches: 0, partialMatches: 0, missing: 0, matchRate: 'N/A', note: 'No V1 texts to compare' },
      };
    }
  }

  return results;
}
