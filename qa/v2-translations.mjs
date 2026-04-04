import fs from 'fs';
import path from 'path';
import { LOCALES } from './page-mapping.mjs';

const MESSAGES_DIR = path.resolve('C:/Users/Sasa/.gemini/antigravity/scratch/Euroclubv2/messages');

/**
 * Load V2 translation JSON for a locale
 */
export function loadV2Translations(locale) {
  const filepath = path.join(MESSAGES_DIR, `${locale}.json`);
  if (!fs.existsSync(filepath)) return null;
  return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

/**
 * Flatten a nested JSON object into dot-notation keys with string values
 * e.g. { Navbar: { about: "About" } } => { "Navbar.about": "About" }
 */
export function flattenTranslations(obj, prefix = '') {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      result[fullKey] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (typeof item === 'string') {
          result[`${fullKey}[${i}]`] = item;
        } else if (typeof item === 'object' && item !== null) {
          Object.assign(result, flattenTranslations(item, `${fullKey}[${i}]`));
        }
      });
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(result, flattenTranslations(value, fullKey));
    }
  }
  return result;
}

/**
 * Extract all text values from the flattened translations
 */
export function getAllTranslationValues(locale) {
  const translations = loadV2Translations(locale);
  if (!translations) return [];
  const flat = flattenTranslations(translations);
  return Object.values(flat);
}

/**
 * Get translation namespace keys (e.g. "Navbar", "Home", "About")
 */
export function getTranslationNamespaces(locale) {
  const translations = loadV2Translations(locale);
  if (!translations) return [];
  return Object.keys(translations);
}

/**
 * Count total translation keys per locale
 */
export function getTranslationStats(locale) {
  const translations = loadV2Translations(locale);
  if (!translations) return { totalKeys: 0, totalValues: 0, namespaces: 0 };

  const flat = flattenTranslations(translations);
  return {
    totalKeys: Object.keys(flat).length,
    totalValues: Object.values(flat).length,
    namespaces: Object.keys(translations).length,
    fileSize: JSON.stringify(translations).length,
  };
}
