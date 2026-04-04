import fs from 'fs';
import path from 'path';
import { PAGE_MAP, LOCALES } from './page-mapping.mjs';

const V1_PAGES_DIR = path.resolve('C:/Users/Sasa/.gemini/antigravity/scratch/Euroclub/client/src/pages');

/**
 * Normalize text for comparison: lowercase, collapse whitespace, trim
 */
export function normalizeText(text) {
  return text
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * Extract text strings from a TSX/JSX file content.
 */
export function extractTextFromTsx(content) {
  const texts = [];

  // 1. JSX text content: text between > and < that looks like natural language
  const jsxTextRegex = />\s*([A-Za-z\u00C0-\u024F\u1E00-\u1EFF][^<{]*[A-Za-z\u00C0-\u024F\u1E00-\u1EFF0-9.!?:])\s*</g;
  let match;
  while ((match = jsxTextRegex.exec(content)) !== null) {
    const text = match[1].replace(/\s+/g, ' ').trim();
    if (text.length > 2 && !text.startsWith('{') && !text.startsWith('import')) {
      texts.push(text);
    }
  }

  // 2. String props: title="...", alt="...", placeholder="...", aria-label="..."
  const propRegex = /(?:title|alt|placeholder|aria-label|label|heading|text|description|content)=["']([^"']{3,})["']/gi;
  while ((match = propRegex.exec(content)) !== null) {
    texts.push(match[1].trim());
  }

  // 3. Const string declarations: const FOO = "..." 
  const constRegex = /const\s+\w+\s*=\s*["'`]([^"'`]{5,})["'`]/g;
  while ((match = constRegex.exec(content)) !== null) {
    const val = match[1].trim();
    if (!val.startsWith('http') && !val.startsWith('/') && !val.includes('className') && !val.includes('import')) {
      texts.push(val);
    }
  }

  // 4. Button/link text
  const btnRegex = /<(?:Button|a|Link|button)[^>]*>\s*([A-Za-z\u00C0-\u024F][^<{]{1,100})\s*<\/(?:Button|a|Link|button)>/gi;
  while ((match = btnRegex.exec(content)) !== null) {
    const text = match[1].replace(/\s+/g, ' ').trim();
    if (text.length > 1 && !text.startsWith('{')) {
      texts.push(text);
    }
  }

  // Deduplicate
  return [...new Set(texts)];
}

/**
 * Get available V1 page files for a locale
 */
function getV1PageFiles(locale) {
  const dir = locale === 'hr'
    ? V1_PAGES_DIR
    : path.join(V1_PAGES_DIR, locale);

  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.tsx') && !f.startsWith('_') && f !== 'not-found.tsx' && f !== 'language-redirect.tsx')
    .map(f => ({
      filename: f.replace('.tsx', ''),
      filepath: path.join(dir, f),
    }));
}

/**
 * Extract all texts from V1 for a specific locale.
 * Returns: { [v2Route]: string[] }
 */
export function extractV1TextsForLocale(locale) {
  const files = getV1PageFiles(locale);
  const result = {};

  for (const { filename, filepath } of files) {
    const v2Route = PAGE_MAP[filename];
    if (!v2Route) continue;

    const content = fs.readFileSync(filepath, 'utf-8');
    const texts = extractTextFromTsx(content);

    if (texts.length > 0) {
      if (!result[v2Route]) {
        result[v2Route] = [];
      }
      result[v2Route].push(...texts);
    }
  }

  // Deduplicate per route
  for (const route of Object.keys(result)) {
    result[route] = [...new Set(result[route])];
  }

  return result;
}

/**
 * Extract all V1 texts for all locales.
 * Returns: { [locale]: { [v2Route]: string[] } }
 */
export function extractAllV1Texts() {
  const result = {};
  for (const locale of LOCALES) {
    result[locale] = extractV1TextsForLocale(locale);
  }
  return result;
}
