import type { Locale } from '../i18n';
import { en } from './en';
import { id } from './id';
import type { Content } from './types';

const bundles: Record<Locale, Content> = { id, en };

/** Mengambil seluruh teks untuk satu bahasa. */
export function getContent(locale: Locale): Content {
  return bundles[locale] ?? bundles.id;
}

export type { Content };
