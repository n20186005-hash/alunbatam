/**
 * Satu-satunya sumber kebenaran untuk fakta entitas Alun Alun Batam Centre.
 * Semua nilai di bawah ini dipakai oleh: JSON-LD, TDK, OG, breadcrumb,
 * konten semantik, peta, dan tautan sumber resmi.
 */

/* ---------- Domain & identitas situs ---------- */
export const DOMAIN_NAME = 'alunbatam.com';
export const SITE_URL = `https://${DOMAIN_NAME}`;

/** Format nama SEO situs: nama atraksi + kota + panduan wisata. */
export const SITE_NAME = 'Alun Alun Batam Centre Batam — Panduan Wisata';
export const SITE_NAME_SHORT = 'Panduan Alun-Alun Batam Centre';

/** Menambahkan sufiks "| SITE_NAME" untuk halaman non-beranda. */
export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

/* ---------- Entitas atraksi ---------- */
export const ATTRACTION_FULL_NAME = 'Alun Alun Batam Centre';
export const ATTRACTION_SHORT_NAME = 'Batam Centre Park';
export const ATTRACTION_LOCAL_NAME = 'Dataran Engku Putri';
export const ATTRACTION_KIND = 'Taman / ruang publik kota';
export const ATTRACTION_ID = `${SITE_URL}/#attraction`;

/* ---------- Hierarki geografis ---------- */
export const CITY_NAME = 'Batam';
export const CITY_LONG_NAME = 'Kota Batam';
export const DISTRICT_NAME = 'Teluk Tering, Kec. Batam Kota';
export const STATE_PROVINCE = 'Kepulauan Riau';
export const COUNTRY_NAME = 'Indonesia';
export const COUNTRY_CODE_2LETTER = 'ID';
export const POSTAL_CODE = '29444';
export const PLUS_CODE = '43H3+CRQ';
export const STREET_ADDRESS = `${PLUS_CODE}, Jl. Engku Putri`;

/* ---------- Koordinat ---------- */
export const LATITUDE = 1.1285985988558445;
export const LONGITUDE = 104.05203871243594;

/* ---------- Peta ---------- */
export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/t2RNgQw92cCG7Yh18';
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6897.722464829787!2d104.05203871243594!3d1.1285985988558445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d9890456e5474d%3A0xee8d00d5385ae78e!2sAlun%20Alun%20Batam%20Centre!5e1!3m2!1sid!2sid!4v1787145062295!5m2!1sid!2sid';

/* ---------- Landmark sekitar ---------- */
export const NEARBY_LANDMARK_1 = 'Museum Batam Raja Ali Haji';
export const NEARBY_LANDMARK_2 = 'Masjid Agung Batam';
export const NEARBY_LANDMARK_3 = 'Batam Centre Ferry Terminal';

/* ---------- Sumber resmi ---------- */
export const GOVT_TOURISM_URL = 'https://disbudpar.batam.go.id/';
export const GOVT_TOURISM_LABEL = 'Dinas Kebudayaan dan Pariwisata Kota Batam';
export const NATIONAL_TOURISM_URL =
  'https://www.indonesia.travel/id/id/destination/sumatra/riau-islands/alun-alun-batam';
export const NATIONAL_TOURISM_LABEL = 'Kementerian Pariwisata RI — Indonesia.travel';
export const CITY_GOV_URL = 'https://batam.go.id/';

/* ---------- Cuplikan rating publik (indikatif, bukan klaim resmi) ---------- */
export const RATING_VALUE = 4.5;
export const RATING_COUNT = 5811;
export const RATING_SOURCE = 'Google Maps';
export const RATING_AS_OF = 'September 2026';

/* ---------- Aset visual ---------- */
export const HERO_IMAGE = '/images/hero-alun-alun-batam.webp';
export const HERO_IMAGE_ALT = `${ATTRACTION_FULL_NAME} (${ATTRACTION_SHORT_NAME}) — tampak utama ruang publik di ${CITY_LONG_NAME}, ${COUNTRY_NAME}`;
export const THEME_COLOR = '#0a4147';
