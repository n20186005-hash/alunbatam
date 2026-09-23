import { getContent } from '../content';
import type { Locale } from '../i18n';
import {
  ATTRACTION_FULL_NAME,
  ATTRACTION_ID,
  ATTRACTION_LOCAL_NAME,
  ATTRACTION_SHORT_NAME,
  CITY_NAME,
  COUNTRY_CODE_2LETTER,
  DISTRICT_NAME,
  GOVT_TOURISM_URL,
  HERO_IMAGE,
  LATITUDE,
  LONGITUDE,
  MAPS_SHARE_URL,
  NATIONAL_TOURISM_URL,
  PLUS_CODE,
  POSTAL_CODE,
  RATING_COUNT,
  RATING_VALUE,
  STATE_PROVINCE,
  SITE_URL,
} from '../data/site';

export interface BreadcrumbItem {
  name: string;
  /** Opsional: tingkat hierarki geografis tidak selalu punya halaman sendiri. */
  url?: string;
}

/** BreadcrumbList untuk setiap halaman: memperjelas hierarki situs bagi perayap. */
export function breadcrumbSchema(trail: BreadcrumbItem[], id?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    ...(id ? { '@id': id } : {}),
    itemListElement: trail.map((item, index) => {
      const entry: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      if (item.url) entry.item = item.url;
      return entry;
    }),
  };
}

/** FAQPage dari daftar pertanyaan yang sama dengan yang ditampilkan di halaman. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** WebSite + Organization: mengikat nama situs, bahasa, dan penerbit. */
export function websiteSchema(locale: Locale = 'id') {
  const t = getContent(locale);
  const siteId = `${SITE_URL}/#website`;
  const orgId = `${SITE_URL}/#organization`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': siteId,
        url: locale === 'en' ? `${SITE_URL}/en/` : `${SITE_URL}/`,
        name: t.meta.siteName,
        alternateName: [t.logo.name, `${ATTRACTION_FULL_NAME} ${CITY_NAME}`],
        description: t.meta.intro,
        inLanguage: locale === 'en' ? 'en' : 'id',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: t.meta.siteName,
        url: `${SITE_URL}/`,
        logo: { '@type': 'ImageObject', url: new URL(HERO_IMAGE, SITE_URL).toString() },
      },
    ],
  };
}

/** Entitas atraksi: satu definisi untuk kedua bahasa, @id tetap sama. */
export function attractionSchema(locale: Locale = 'id') {
  const t = getContent(locale);
  const pageUrl = locale === 'en' ? `${SITE_URL}/en/` : `${SITE_URL}/`;
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': ATTRACTION_ID,
    name: ATTRACTION_FULL_NAME,
    alternateName: [
      ATTRACTION_SHORT_NAME,
      ATTRACTION_LOCAL_NAME,
      `${CITY_NAME} ${ATTRACTION_FULL_NAME}`,
      `${ATTRACTION_LOCAL_NAME} ${CITY_NAME}`,
    ],
    description: t.meta.description,
    url: pageUrl,
    image: [new URL(HERO_IMAGE, SITE_URL).toString()],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `Jl. Engku Putri, ${DISTRICT_NAME} (${PLUS_CODE})`,
      addressLocality: CITY_NAME,
      addressRegion: STATE_PROVINCE,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE_2LETTER,
    },
    geo: { '@type': 'GeoCoordinates', latitude: LATITUDE, longitude: LONGITUDE },
    hasMap: MAPS_SHARE_URL,
    sameAs: [MAPS_SHARE_URL, GOVT_TOURISM_URL, NATIONAL_TOURISM_URL],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Lintasan lari / jogging', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Lapangan olahraga', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Area bermain anak', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Area duduk berteduh', value: true },
    ],
    isAccessibleForFree: true,
    publicAccess: true,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: RATING_VALUE,
      reviewCount: RATING_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/** Seluruh JSON-LD yang dibutuhkan halaman beranda pada satu bahasa. */
export function homeSchemas(locale: Locale = 'id') {
  const t = getContent(locale);
  const pageUrl = locale === 'en' ? `${SITE_URL}/en/` : `${SITE_URL}/`;
  const trail = [
    { name: t.hero.breadcrumbHome, url: pageUrl },
    { name: t.meta.geo.country },
    { name: t.meta.geo.province },
    { name: t.meta.geo.city },
    { name: ATTRACTION_FULL_NAME },
  ];
  return [
    websiteSchema(locale),
    attractionSchema(locale),
    breadcrumbSchema(trail, `${pageUrl}#breadcrumb`),
    faqSchema(t.faq.items),
  ];
}

/** WebPage generik untuk halaman dokumen. */
export function webPageSchema(input: { name: string; url: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: input.url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': ATTRACTION_ID },
    breadcrumb: { '@id': `${input.url}#breadcrumb` },
  };
}
