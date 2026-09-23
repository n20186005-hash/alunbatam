/** Bentuk seluruh teks situs. Bahasa id dan en harus mengikuti struktur ini. */

export interface IconCard {
  icon: string;
  title: string;
  body: string;
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface LinkItem {
  label: string;
  href: string;
  note?: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
    siteName: string;
    intro: string;
    geo: { country: string; province: string; city: string };
  };

  nav: {
    tentang: string;
    cuaca: string;
    transportasi: string;
    faq: string;
    map: string;
    languageLabel: string;
    languageSwitch: string;
  };

  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    cityLine: string;
    lede: string;
    photoCredit: string;
    ctaPlan: string;
    ctaHistory: string;
    factsTitle: string;
    facts: LabelValue[];
    factsNote: string;
    breadcrumbHome: string;
  };

  factsStrip: { n: string; heading: string; copy: string }[];

  tentang: {
    eyebrow: string;
    h2: string;
    lede: string;
    welcome: string;
    hierarchy: string;
    quote: string;
    cards: IconCard[];
  };

  sejarah: {
    eyebrow: string;
    h2: string;
    paragraphs: string[];
    note: string;
  };

  history: {
    eyebrow: string;
    h2: string;
    lede: string;
    timeline: { era: string; text: string }[];
    notes: { title: string; text: string }[];
    disclaimer: string;
  };

  gallery: {
    eyebrow: string;
    h2: string;
    note: string;
    images: { src: string; alt: string; caption: string }[];
  };

  plan: {
    eyebrow: string;
    h2: string;
    lede: string;
    cards: IconCard[];
  };

  weather: {
    eyebrow: string;
    h2: string;
    intro: string;
    updatedPrefix: string;
    todayRange: string;
    feelsLike: string;
    rainChance: string;
    wind: string;
    windUnit: string;
    precipitation: string;
    uvIndex: string;
    forecastTitle: string;
    today: string;
    rainPrefix: string;
    riskTitle: string;
    riskNote: string;
    outfitTitle: string;
    planTitle: string;
    itemsTitle: string;
    fallback: string;
    footerNote: string;
  };

  services: {
    eyebrow: string;
    h2: string;
    lede: string;
    groups: { title: string; note: string; items: IconCard[] }[];
    commercialNote: string;
  };

  transport: {
    eyebrow: string;
    h2: string;
    lede: string;
    modesTitle: string;
    modes: { mode: string; best: string; note: string }[];
    routes: { icon: string; title: string; body: string }[];
    tipsTitle: string;
    tips: string[];
  };

  location: {
    eyebrow: string;
    h2: string;
    lede: string;
    hierarchy: string;
    mapBtn: string;
    govBtn: string;
    govNote: string;
  };

  season: {
    eyebrow: string;
    h2: string;
    lede: string;
    headers: string[];
    rows: { period: string; weather: string; strategy: string; gear: string }[];
    notes: string[];
    footnote: string;
    official: string;
  };

  itineraries: {
    eyebrow: string;
    h2: string;
    lede: string;
    audiences: {
      kicker: string;
      title: string;
      audience: string;
      paceLabel: string;
      pace: string;
      stopsLabel: string;
      stops: string[];
      caution: string;
    }[];
    halfDay: { label: string; title: string; lede: string; steps: string[] };
    fullDay: { label: string; title: string; lede: string; steps: string[] };
  };

  events: {
    eyebrow: string;
    h2: string;
    lede: string;
    checks: { title: string; body: string }[];
    kindsTitle: string;
    kinds: string[];
    channelsTitle: string;
    channels: LinkItem[];
    footnote: string;
  };

  surroundings: {
    kuliner: {
      eyebrow: string;
      h2: string;
      lede: string;
      pills: string[];
      note: string;
    };
    landmarks: {
      eyebrow: string;
      h2: string;
      lede: string;
      items: { name: string; copy: string }[];
      note: string;
    };
  };

  ethics: {
    eyebrow: string;
    h2: string;
    items: { kicker: string; title: string; body: string }[];
  };

  responsibility: {
    eyebrow: string;
    h2: string;
    lede: string;
    topics: IconCard[];
    summary: string;
  };

  faq: {
    eyebrow: string;
    h2: string;
    lede: string;
    items: FaqItem[];
  };

  sources: {
    eyebrow: string;
    h2: string;
    lede: string;
    principle: string;
    intro: string;
    items: LinkItem[];
    ratingNote: string;
    refsTitle: string;
    refsText: string;
  };

  footer: {
    tagline: string;
    guideTitle: string;
    guideLinks: LinkItem[];
    legalTitle: string;
    legalLinks: LinkItem[];
    statusTitle: string;
    status: string;
    credits: string[];
    copyright: string;
  };

  logo: { name: string; tagline: string; homeAria: string; markAria: string };

  legal: {
    privacy: LegalDoc;
    terms: LegalDoc;
    cookies: LegalDoc;
  };

  cookieForm: {
    requiredTitle: string;
    requiredBody: string;
    requiredBadge: string;
    analyticsTitle: string;
    analyticsBody: string;
    analyticsNote: string;
    preferencesTitle: string;
    preferencesBody: string;
    marketingTitle: string;
    marketingBody: string;
    marketingBadge: string;
    save: string;
    reject: string;
    saved: string;
    rejected: string;
  };
}

export interface LegalBlock {
  h2?: string;
  h3?: string;
  paragraphs?: string[];
  list?: string[];
  highlight?: string;
}

export interface LegalDoc {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  blocks: LegalBlock[];
}
