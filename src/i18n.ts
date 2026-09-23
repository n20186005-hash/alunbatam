export const LOCALES = ['id', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'id';

export const HTML_LANG: Record<Locale, string> = {
  id: 'id',
  en: 'en',
};

export const OG_LOCALE: Record<Locale, string> = {
  id: 'id_ID',
  en: 'en_US',
};

/** Kode hreflang yang dikirim ke mesin pencari. */
export const HREFLANG: Record<Locale, string> = {
  id: 'id-ID',
  en: 'en',
};

export const LANGUAGE_LABEL: Record<Locale, string> = {
  id: 'Bahasa Indonesia',
  en: 'English',
};

/** Peta rute antarbahasa: halaman yang sama dalam dua bahasa. */
export const ROUTE_MAP: Record<string, Record<Locale, string>> = {
  home: { id: '/', en: '/en/' },
  privacy: { id: '/kebijakan-privasi/', en: '/en/privacy-policy/' },
  terms: { id: '/ketentuan-layanan/', en: '/en/terms-of-service/' },
  cookies: { id: '/pengaturan-cookie/', en: '/en/cookie-settings/' },
};

export function localizedPath(route: keyof typeof ROUTE_MAP | string, locale: Locale): string {
  const entry = ROUTE_MAP[route];
  return entry ? entry[locale] : locale === DEFAULT_LOCALE ? '/' : '/en/';
}

/** Mengubah jalur bahasa default menjadi jalur bahasa lain. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const clean = pathname.replace(/\/+$/, '') || '/';

  // Jika path saat ini cocok dengan salah satu bahasa di ROUTE_MAP,
  // kembalikan path bahasa target (berlaku dua arah: id↔en).
  for (const [, paths] of Object.entries(ROUTE_MAP)) {
    if (LOCALES.some((loc) => paths[loc].replace(/\/+$/, '') === clean)) {
      return paths[target];
    }
  }

  // Fallback untuk rute di luar ROUTE_MAP: terjemahkan awalan /en/ menjadi
  // akar (id) atau sebaliknya.
  if (clean.startsWith('/en')) {
    const rest = clean.slice(3) || '/';
    return target === DEFAULT_LOCALE ? rest : `/en${rest}`;
  }
  return target === DEFAULT_LOCALE ? clean : `/en${clean}`;
}

export function localeFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : DEFAULT_LOCALE;
}
