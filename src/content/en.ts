import { faqEn } from './faq';
import type { Content } from './types';

/** Teks bahasa Inggris dengan struktur yang sama persis dengan src/content/id.ts. */
export const en: Content = {
  meta: {
    title: 'Alun Alun Batam Centre Batam — Travel Guide: Hours, Facilities & How to Get There',
    description:
      'Visitor guide to Alun Alun Batam Centre (Batam Centre Park / Dataran Engku Putri) in Kota Batam, Riau Islands: opening hours, running track and recreation facilities, event agenda, location and map, transport, plus a live weather forecast. A free, open public space.',
    siteName: 'Alun Alun Batam Centre Batam — Travel Guide',
    intro:
      'Visitor guide to Alun Alun Batam Centre (Batam Centre Park / Dataran Engku Putri) in Kota Batam.',
    geo: { country: 'Indonesia', province: 'Riau Islands', city: 'Kota Batam' },
  },

  nav: {
    tentang: 'About',
    cuaca: 'Weather',
    transportasi: 'Transport',
    faq: 'FAQ',
    map: 'Open map',
    languageLabel: 'Language',
    languageSwitch: 'Switch language',
  },

  hero: {
    eyebrow: 'Public space · Batam Kota',
    titleLine1: 'Alun Alun Batam Centre',
    titleLine2: '(Batam Centre Park)',
    cityLine: 'Kota Batam · Riau Islands · Indonesia',
    lede: 'Dataran Engku Putri (Batam Centre Park) is the meeting point of the city at the heart of Batam’s government district—where sport, city events, family recreation and Malay heritage meet in one urban landscape.',
    photoCredit: 'Lead photo: Ministry of Tourism of the Republic of Indonesia / Indonesia.travel.',
    ctaPlan: 'Plan your visit',
    ctaHistory: 'Read the history',
    factsTitle: 'Quick facts before you go',
    facts: [
      { label: 'Also known as', value: 'Dataran Engku Putri · Batam Centre Park' },
      { label: 'Character', value: 'City public space' },
      { label: 'Map access', value: 'Listed as all day*' },
      { label: 'Regular ticket', value: 'None found' },
      { label: 'Suggested duration', value: '1–2 hours' },
      { label: 'Map rating*', value: '4.5 · 5,811 reviews' },
    ],
    factsNote:
      '*Facility hours, events and access restrictions can differ from open-space access. The rating is a snapshot of public map reviews (September 2026) and is indicative only.',
    breadcrumbHome: 'Home',
  },

  factsStrip: [
    { n: '01', heading: 'City space', copy: 'A meeting point for residents, sport and public events.' },
    { n: '02', heading: 'Malay heritage', copy: 'The name Engku Putri recalls the figure of Engku Hamidah.' },
    {
      n: '03',
      heading: 'Easy to combine',
      copy: 'Located in the Batam Centre district, connected to city transport and close to Batam Centre Ferry Terminal.',
    },
    {
      n: '04',
      heading: 'Non-commercial',
      copy: 'This guide takes no commission and recommends no specific vendors.',
    },
  ],

  tentang: {
    eyebrow: 'Getting to know the place',
    h2: 'Alun Alun Batam Centre: more than just a field in Kota Batam.',
    lede: 'Alun Alun Batam Centre (Batam Centre Park) works as the shared front yard of the city: open, easy to read, and constantly changing with the rhythm of Batam’s community.',
    welcome:
      'Welcome to Alun Alun Batam Centre, the public space widely known as Batam Centre Park or Dataran Engku Putri. At the heart of Kota Batam, Riau Islands, Indonesia, this area is the main meeting point for residents and visitors alike in Batam’s government district.',
    hierarchy: 'Location hierarchy: Alun Alun Batam Centre → Kota Batam → Riau Islands → Indonesia',
    quote:
      'Indonesia’s national tourism portal describes Alun Alun Batam Centre (Batam Centre Park)—also known as Dataran Engku Putri—as the main public space of Kota Batam. It sits within the government district and serves as a place to gather, relax, exercise, enjoy family activities, and host cultural, entertainment and sporting events.',
    cards: [
      {
        icon: '◎',
        title: 'A living civic function',
        body: 'Batam City Government reports throughout 2026 show Alun Alun Batam Centre (Batam Centre Park) / Dataran Engku Putri still being used for public service launches, sporting activities and large community gatherings.',
      },
      {
        icon: '◇',
        title: 'A space that keeps being renewed',
        body: 'The sports field in this area was revitalised in 2026. Physical conditions may therefore differ from older photos; rely on what you find on site when you visit.',
      },
    ],
  },

  sejarah: {
    eyebrow: 'Traces of a name',
    h2: 'History & meaning of Alun Alun Batam Centre: Engku Putri, a name that keeps memory alive.',
    paragraphs: [
      'A publication of Batam Kota district explains that Engku Putri was named Engku Hamidah, a daughter of Raja Haji in the tradition of the Malay Riau–Lingga kingdom. She is remembered as an authoritative figure who understood economic and political affairs and held a role in royal custom.',
      'That name gives the square a deeper layer of meaning than a mere open space: it links today’s Batam government centre with the Malay–Bugis historical memory of the Riau Islands.',
    ],
    note: 'Source note: this section follows the official publication of Batam Kota district. We do not add legends or biographical details that cannot be traced to a clear public source.',
  },

  history: {
    eyebrow: 'City history background',
    h2: 'From Malay shipping lanes to a modern city square.',
    lede: 'This section summarises the historical layers that make the name and the position of the square understandable: why it sits in the government centre, and why its name refers to a Malay figure.',
    timeline: [
      {
        era: 'The Malay sultanate era',
        text: 'The Riau Islands were part of a network of Malay sultanates controlling shipping and trade routes around the Strait of Malacca. Names of nobility from this period—including figures remembered as Engku Putri and Raja Haji—continue to be used for public spaces today.',
      },
      {
        era: 'Port and industrial era',
        text: 'In the later part of the twentieth century Batam was developed as an industrial and port area. Rapid growth brought migrants from many regions, turning the city into a plural urban society.',
      },
      {
        era: 'Building the government centre',
        text: 'Batam Centre was designed as the administrative core: regional offices, the grand mosque, the museum and open space were placed close to one another. Such a layout puts government business and the public space of residents on the same axis.',
      },
      {
        era: 'Today',
        text: 'Dataran Engku Putri (Batam Centre Park) serves as an everyday space for residents: morning exercise, family activities, government programme launches, concerts and city celebrations.',
      },
    ],
    notes: [
      {
        title: 'Why a Malay name is used for a modern space',
        text: 'Naming it Dataran Engku Putri is not just a label: it connects a brand-new government district with the Malay historical memory of the Riau Islands. In many Indonesian towns, the alun-alun is indeed placed near the seat of power as a sign that the space belongs to everyone.',
      },
      {
        title: 'The square as a piece of city infrastructure',
        text: 'In a tropical city, open space does double duty: it hosts mass gatherings, provides shade and airflow, and offers a safe meeting point during celebrations. It is therefore natural that its facilities keep being revitalised to follow residents’ needs.',
      },
      {
        title: 'Context from Museum Batam Raja Ali Haji',
        text: 'The city museum in this district holds the historical context of the Riau Islands—from Malay tradition to the colonial period. Visiting it before or after Alun Alun Batam Centre gives your trip a storyline, not just photographs.',
      },
      {
        title: 'Context from Masjid Agung Batam',
        text: 'The city’s grand mosque stands as a marker of the district and a reminder that active religious functions surround the square. Prayer times and religious activities influence how crowded and how noisy the surroundings should be.',
      },
    ],
    disclaimer:
      'Writing note: the above is compiled from official publications and traceable city history references. Folklore and oral versions without written references are not presented as fact; if other versions exist, we list them as oral tradition rather than historical certainty.',
  },

  gallery: {
    eyebrow: 'Field gallery',
    h2: 'Alun Alun Batam Centre gallery: the face of Batam’s public space.',
    note: 'Photos are stored locally so pages load fast and do not depend on third-party image hosts. Copyright remains with the respective owners.',
    images: [
      {
        src: '/images/engku-putri-panorama.jpg',
        alt: 'Dataran Engku Putri (Alun Alun Batam Centre) — panorama of the public space area in Kota Batam, Indonesia',
        caption: 'Area panorama · editorial source: WowKeren',
      },
      {
        src: '/images/engku-putri-senja.jpg',
        alt: 'Dataran Engku Putri (Batam Centre Park) — atmosphere before sunset in Kota Batam',
        caption: 'Late afternoon · local tourism archive',
      },
      {
        src: '/images/engku-putri-udara.jpg',
        alt: 'Alun Alun Batam Centre (Batam Centre Park) — aerial view of the Batam Centre district, Kota Batam',
        caption: 'Aerial view · detikInet editorial archive',
      },
    ],
  },

  plan: {
    eyebrow: 'Visit planning',
    h2: 'Arrive with the right expectations.',
    lede: 'This is an active public space, not a fenced attraction. The best experience comes from reading the weather, the city’s event calendar and the facilities available on your visiting day.',
    cards: [
      { icon: '◷', title: 'Best time', body: 'Early morning before the heat or around sunset. Evenings are livelier, especially during public events.' },
      { icon: '⌛', title: 'Duration', body: 'Allow 1–2 hours for an easy walk, photos and getting to know the area.' },
      { icon: 'Rp', title: 'Tickets / costs', body: 'No regular entrance ticket found. Events, parking or third-party services may charge a fee.' },
      { icon: 'P', title: 'Parking', body: 'Follow signage and officers. During large events, parking zones and vehicle access may be arranged differently.' },
    ],
  },

  weather: {
    eyebrow: 'Weather & forecast',
    h2: 'Do you need an umbrella today?',
    intro:
      'A summary of current conditions and the forecast for the days ahead in the Batam Centre area, translated into decisions you can act on immediately.',
    updatedPrefix: 'Updated',
    todayRange: 'Temperature today',
    feelsLike: 'Feels like',
    rainChance: 'Chance of rain',
    wind: 'Wind',
    precipitation: 'Rainfall',
    uvIndex: 'UV index today',
    forecastTitle: 'Daily forecast',
    today: 'Today',
    rainPrefix: 'rain',
    riskTitle: '⚠ Worth noting',
    riskNote:
      'These notes are derived from the forecast, not an official early warning. For official warnings, refer to the BMKG information channels.',
    outfitTitle: '✅ What to wear',
    planTitle: '🗓 Planning your visit',
    itemsTitle: '🎒 What to bring',
    fallback:
      'The weather forecast cannot be displayed right now. For trip planning, check the forecast on the official BMKG channel or a trusted weather app before you leave.',
    footerNote:
      'A chance of rain is not a certainty of rain; forecast figures are refreshed throughout the day and may change. For official early weather warnings, use the BMKG information channels.',
  },

  services: {
    eyebrow: 'Facilities & practical needs',
    h2: 'What to look for, not what to assume.',
    lede: 'Because facilities in public spaces can change, the list below takes a conservative approach: we tell you the type of service to look for without advertising any particular operator.',
    groups: [
      {
        title: 'Sanitation & drinking water',
        note: 'The basic facilities visitors look for most often.',
        items: [
          { icon: '🚻', title: 'Public toilets', body: 'Check the nearest public sanitation facility on arrival; opening hours can differ.' },
          { icon: '💧', title: 'Drinking water', body: 'Bring your own refillable bottle. Refill points can change, so do not make one your only water source.' },
          { icon: '🧼', title: 'Hand hygiene', body: 'Carry wet wipes or hand sanitiser, especially after using public facilities or playing in the open area.' },
        ],
      },
      {
        title: 'Access & parking',
        note: 'An active public space: arrangements can change during events.',
        items: [
          { icon: '♿', title: 'Accessibility', body: 'The surface of the square is relatively open, but ramps, pavements and crossings should be checked on site.' },
          { icon: '🅿', title: 'Private vehicle parking', body: 'Follow signage and officers. During large events, parking zones and vehicle access can be arranged differently.' },
          { icon: '🚐', title: 'Drop-off & groups', body: 'Choose a drop-off point that does not block traffic lanes or emergency access before the vehicle stops.' },
          { icon: '🚶', title: 'Pavements & crossings', body: 'Use official crossings. Traffic around the government district increases during working hours.' },
        ],
      },
      {
        title: 'Food, shopping & staying over',
        note: 'We describe types of services, not individual businesses.',
        items: [
          { icon: '🍽', title: 'Food & drinks', body: 'Look for MSME stalls during events, local eateries, family restaurants, or public dining areas in the Batam Centre district.' },
          { icon: '⌂', title: 'Accommodation', body: 'Choose a licensed hotel, city guesthouse or rental apartment in the Batam Centre area according to your mobility needs.' },
          { icon: '▣', title: 'Daily shopping', body: 'Convenience stores, supermarkets and daily-needs centres are available in the surrounding urban area.' },
          { icon: '✚', title: 'Pharmacy & daily needs', body: 'Pharmacies and basic supply stores are part of the city’s commercial network; keep personal medication in your own bag.' },
        ],
      },
      {
        title: 'Sport & recreation',
        note: 'Answering common searches: running spots, jogging and nearby recreation.',
        items: [
          { icon: '🏃', title: 'Running / jogging track', body: 'The edges of the field form a loop around the open space used for easy runs and morning exercise. Check the surface condition and lighting before you start.' },
          { icon: '⚽', title: 'Sports field', body: 'The sports field in this area was revitalised in 2026. Usage hours may be arranged for community activities, so check the situation on site.' },
          { icon: '🧒', title: 'Children’s play area', body: 'The national tourism portal mentions a play area. Supervise children and avoid the hottest hours.' },
          { icon: '🪑', title: 'Seating & shade', body: 'Look for benches or shaded edges for a break. If none are free, your own sitting mat can serve as a backup.' },
        ],
      },
      {
        title: 'Vehicles & emergencies',
        note: 'Plan ahead before relying on a single service point.',
        items: [
          { icon: '⛽', title: 'Fuel', body: 'Fuel stations are on the city road network; check your route before driving as traffic around the city centre can change.' },
          { icon: '⚡', title: 'EV charging', body: 'Public charging availability is growing; check the operator app or official network map before relying on one point.' },
          { icon: '🏥', title: 'Health services', body: 'Identify the nearest health facility and local emergency numbers before leaving, especially when travelling with seniors or children.' },
          { icon: '☎', title: 'Security & help points', body: 'During large events, note where officers or information posts are visible so you know where to ask for help.' },
        ],
      },
    ],
    commercialNote:
      'Non-commercial stance: this guide takes no commission, sells no bookings and names no individual businesses. The best choice still comes from your own check of cleanliness, prices, opening hours and safety on the day of your visit.',
  },

  transport: {
    eyebrow: 'Detailed transport',
    h2: 'Getting to Alun Alun Batam Centre: reaching the heart of Batam without guesswork.',
    lede: 'Use the names “Alun Alun Batam Centre (Batam Centre Park)” or “Dataran Engku Putri” in map applications. The spot is on Jl. Engku Putri, Teluk Tering, Batam Kota district—close to the Batam Centre Ferry Terminal area.',
    modesTitle: 'Transport options',
    modes: [
      { mode: 'Official taxi / app-based ride', best: 'First-time visitors, small groups, lots of luggage', note: 'Easiest to point to; still choose a safe drop-off point.' },
      { mode: 'Trans Batam (city bus)', best: 'Budget travel, not in a hurry', note: 'Several corridors end at or pass through Batam Centre; schedules can change.' },
      { mode: 'Private / rental vehicle', best: 'Families, onward travel to other spots', note: 'Watch parking arrangements during city events.' },
      { mode: 'Walking from Batam Centre', best: 'Arriving by ferry, no heavy bags', note: 'Suitable when the weather is mild and pavements are not closed for events.' },
      { mode: 'Group shuttle', best: 'School, community or office trips', note: 'Agree on a drop-off point and meeting time before departure.' },
    ],
    routes: [
      {
        icon: '✈',
        title: 'From Hang Nadim International Airport',
        body: 'An official taxi or app-based ride is the direct option. In May 2026 the Batam City Government stated that the Nongsa–Batam Centre corridor is being prepared for integration with the airport. Because this is still a service development, check the latest route and stops before departure. The airport is on the eastern side of Batam Island, so land travel time depends heavily on rush-hour traffic.',
      },
      {
        icon: '▰',
        title: 'By Trans Batam',
        body: 'The city transport profile lists several corridors that end at or pass through Batam Centre, including from Sekupang, Tanjung Uncang, Jodoh, Tanjung Piayu and Nongsa. Suitable when you are not in a hurry; check the latest schedules, stops and payment methods on official channels before boarding. Carry small change and allow extra waiting time when travelling during working hours.',
      },
      {
        icon: '●',
        title: 'Taxi & app-based rides',
        body: 'Set a drop-off point on the safe side of the road, avoid stopping in traffic lanes, and confirm the vehicle identity before getting in. For taxis, use official queues or operators and make sure you understand the fare scheme before the trip. If mobile signal is weak, name a clear landmark: the square or the nearest government building.',
      },
      {
        icon: '≈',
        title: 'From Batam Centre Ferry Terminal',
        body: 'Batam Centre Ferry Terminal and Alun Alun Batam Centre (Batam Centre Park) are both in the core Batam Centre area. You can take a short taxi or app-based ride, or walk when weather, luggage, pavements and physical ability allow. Use the map to choose a safe crossing towards Dataran Engku Putri.',
      },
      {
        icon: '▣',
        title: 'Private vehicle & parking',
        body: 'Arrive earlier if you want to park close to the field entrance. During large events, officers may close part of the road or set special parking zones; follow the signage and instructions on site. Do not park on the road shoulder, on pedestrian lanes, or on emergency access.',
      },
      {
        icon: '⌖',
        title: 'Walking & accessibility',
        body: 'This district is a government centre with moderate traffic. Use pavements and official crossings; if you use a wheelchair or a pram, check the condition of ramps along your route first. Distances between points in Batam Centre are relatively short, so short trips can be split with shaded breaks.',
      },
      {
        icon: '◷',
        title: 'Travel time & rush hours',
        body: 'Weekday mornings and afternoons bring heavier traffic on the main roads towards the government centre. For a relaxed visit, come outside those hours or around sunset. If your schedule depends on a ferry, add a time margin for road crossings and vehicle queues.',
      },
    ],
    tipsTitle: 'Practical travel tips',
    tips: [
      'Save both “Alun Alun Batam Centre (Batam Centre Park)” and “Dataran Engku Putri” as search keywords—both refer to the same spot.',
      'Download an offline map or screenshot your route before leaving if mobile signal on the way is unstable.',
      'Confirm the vehicle identity and destination before getting in; mention a nearby government building if the driver does not recognise the square’s name.',
      'Carry small change for parking, drinking water or small stalls that may not accept cashless payment.',
      'If heavy rain arrives suddenly, postpone road crossings and shelter in a nearby building until water at the roadside subsides.',
    ],
  },

  location: {
    eyebrow: 'Location map',
    h2: 'Location & how to visit Alun Alun Batam Centre in Kota Batam: the reference point in Teluk Tering.',
    lede: 'The map comes from the Google Maps public service and loads only in this section. The embedded map language and region are set to Indonesia.',
    hierarchy: 'Alun Alun Batam Centre → Kota Batam → Riau Islands → Indonesia',
    mapBtn: 'Open in Google Maps',
    govBtn: 'Batam City Culture and Tourism Office',
    govNote:
      'For official updates and regional tourism information, refer to this portal or the national Indonesian government tourism portal.',
  },

  season: {
    eyebrow: 'Seasonal strategy',
    h2: 'Four seasonal patterns, one approach to visiting.',
    lede: 'The table below summarises weather patterns commonly found on the Riau Islands coast throughout the year. This is a long-term average picture, not a forecast for a specific day—individual years can deviate from the general pattern.',
    headers: ['Period', 'Weather character', 'Visit strategy', 'What to bring'],
    rows: [
      {
        period: 'January – March',
        weather: 'The start of the year is still humid; short rain can appear in the afternoon, alternating with clear skies.',
        strategy: 'Come in the morning for field activities; keep an indoor plan as a backup if rain falls.',
        gear: 'Folding umbrella, quick-drying footwear',
      },
      {
        period: 'April – June',
        weather: 'A transition period: hot at midday, with rainfall beginning to decrease compared with the start of the year.',
        strategy: 'Focus on visits around sunset; midday suits a short stop at the museum or another indoor space.',
        gear: 'Sunscreen, drinking water, hat',
      },
      {
        period: 'July – September',
        weather: 'Usually among the drier periods, with noticeable wind in open areas.',
        strategy: 'The best time for long walks, landscape photography and family activities; stay alert for sudden rain.',
        gear: 'Sun protection, light jacket for air-conditioned rooms',
      },
      {
        period: 'October – December',
        weather: 'Rainfall tends to increase; heavy rain can arrive together with strong wind.',
        strategy: 'Check the forecast on the same day, avoid open areas during thunderstorms, and pick a route with plenty of shelter.',
        gear: 'Raincoat, bag cover, non-slip footwear',
      },
    ],
    notes: [
      'Batam has a tropical coastal climate: daily temperatures stay warm all year, with high humidity that makes midday feel hotter than the number suggests.',
      'Rain here usually falls briefly and heavily rather than for days. For that reason, a daily plan is more useful than a seasonal one.',
      'Wind and waves can affect ferry schedules; if your visit depends on a crossing, check operator announcements before departure.',
    ],
    footnote: 'The seasonal patterns above are a general summary for planning. For official forecasts and early warnings, refer to the',
    official: 'BMKG',
  },

  itineraries: {
    eyebrow: 'Themed routes',
    h2: 'Three ways to visit the same space.',
    lede: 'The routes below are built around the needs of your group, not a fixed order. Choose the one closest to your composition and travel rhythm.',
    audiences: [
      {
        kicker: '01',
        title: 'Families with children',
        audience: 'Travelling with toddlers up to school-age children',
        paceLabel: 'Pace',
        pace: '60–90 minutes with breaks',
        stopsLabel: 'Flow',
        stops: [
          'Field entrance',
          'Open field area',
          'Play point that is currently open',
          'Shaded spot for snacks',
          'Museum Batam Raja Ali Haji as a rainy-day backup',
        ],
        caution: 'Supervise children near roads and vehicles; bring drinking water and sun protection.',
      },
      {
        kicker: '02',
        title: 'Photography & city landscape',
        audience: 'Visitors chasing light and composition',
        paceLabel: 'Pace',
        pace: '90–150 minutes, morning or before sunset',
        stopsLabel: 'Flow',
        stops: [
          'Main axis of the field',
          'Edge of the government district',
          'Skyline of buildings and the mosque',
          'Crowds during events',
          'Higher vantage points around Batam Centre',
        ],
        caution: 'Ask permission before photographing people; check local rules before flying a drone.',
      },
      {
        kicker: '03',
        title: 'Low-effort visit',
        audience: 'Seniors, wheelchair users, or injury recovery',
        paceLabel: 'Pace',
        pace: '45–60 minutes with plenty of seated breaks',
        stopsLabel: 'Flow',
        stops: [
          'Vehicle drop-off point',
          'Flattest main path',
          'Shaded seating area',
          'Indoor space',
          'Back to the drop-off point',
        ],
        caution: 'Check ramp and pavement conditions on site; avoid the hottest hours and carry personal medication.',
      },
    ],
    halfDay: {
      label: 'Half-day route',
      title: '2–3 hours in the city centre',
      lede: 'Suitable if you arrive by ferry and only have a short gap before continuing your journey.',
      steps: [
        'Arrive, orient yourself and check field conditions (15 minutes)',
        'Walk around Alun Alun Batam Centre while reading the location markers (30 minutes)',
        'Sit, take photos and watch local life (30 minutes)',
        'Museum Batam Raja Ali Haji or the nearest indoor space (45 minutes)',
        'Eat or drink around Batam Centre, then head back (30 minutes)',
      ],
    },
    fullDay: {
      label: 'Full-day route',
      title: '5–7 hours: the square and its surroundings',
      lede: 'Combines the public space with the museum and a religious landmark in one day, with a break when the sun is harshest.',
      steps: [
        'Morning: Alun Alun Batam Centre while the air is still cool (60 minutes)',
        'Museum Batam Raja Ali Haji for the city’s historical context (60–90 minutes)',
        'Lunch; choose the place yourself according to your needs (60 minutes)',
        'Masjid Agung Batam and nearby city landmarks (45–60 minutes)',
        'Hot midday: a break indoors or in the shade (30–60 minutes)',
        'Towards sunset: return to the square for the evening atmosphere (60 minutes)',
      ],
    },
  },

  events: {
    eyebrow: 'Agenda & events',
    h2: 'Is there an event today? Here is how to check.',
    lede: 'Event schedules in public spaces change quickly. We therefore do not copy a daily event list; we summarise the kinds of events that are commonly held and point to the official channels where exact dates and times can be confirmed.',
    checks: [
      {
        title: 'The kinds of events usually held',
        body: 'Dataran Engku Putri works as the city’s stage: the local government uses it for public service programmes, sporting activities and large-scale celebrations.',
      },
      {
        title: 'What it means for visitors',
        body: 'During events, parking zones and vehicle access are arranged differently, part of the area may be covered by stages or tents, and noise levels rise—especially towards the evening.',
      },
      {
        title: 'How to arrive when an event is on',
        body: 'Come earlier than the schedule, follow the officers’ directions, agree on a meeting point with your group, and keep an exit route that does not block emergency access.',
      },
    ],
    kindsTitle: 'Examples of event types',
    kinds: [
      'Launches of city government programmes and public services',
      'Mass sport activities: group exercise, running and field tournaments',
      'Performances, concerts and public holiday celebrations',
      'Public screenings of major matches organised by the local government',
      'MSME activities, bazaars and community exhibitions',
    ],
    channelsTitle: 'Official channels for exact schedules',
    channels: [
      { label: 'Batam City Culture and Tourism Office', href: 'https://disbudpar.batam.go.id/', note: 'event and city tourism announcements' },
      { label: 'Batam City Government portal', href: 'https://batam.go.id/', note: 'official agenda and public service announcements' },
    ],
    footnote:
      'We only summarise general event patterns based on official reporting. For dates, times and entry conditions—including whether a specific event is ticketed or requires registration—always refer to the organiser’s announcement.',
  },

  surroundings: {
    kuliner: {
      eyebrow: 'Food nearby',
      h2: 'Know the type, choose the place yourself.',
      lede: 'As a non-profit guide we do not direct visitors to any particular vendor. In Batam Centre, look for the category that suits your needs and check cleanliness, prices and opening hours yourself.',
      pills: ['Local eateries', 'MSME stalls during events', 'Family restaurants', 'Snack centres', 'Seafood', 'Riau Islands Malay cuisine'],
      note: 'Dishes typical of the Riau Islands you can look for include mie tarempa, gonggong dishes, seafood and a range of Malay cooking. Availability depends on the place and the day.',
    },
    landmarks: {
      eyebrow: 'Around the square',
      h2: 'Landmarks & attractions around Batam Centre Park: three public contexts to extend your visit.',
      lede: 'When visiting Alun Alun Batam Centre, visitors can easily explore the surrounding historical landmarks and points of interest, including Museum Batam Raja Ali Haji, Masjid Agung Batam and Batam Centre Ferry Terminal.',
      items: [
        { name: 'Museum Batam Raja Ali Haji', copy: 'A public museum that adds historical context about the city and the Riau Islands.' },
        { name: 'Welcome to Batam landmark', copy: 'A city sign that works as a visual orientation point in the Batam Centre area.' },
        { name: 'Masjid Agung Batam', copy: 'A religious and architectural landmark; respect the rules and prayer times.' },
      ],
      note: 'Distances, opening hours and access can change. Check official channels or the map before combining several places in one visit.',
    },
  },

  ethics: {
    eyebrow: 'Ethics of a shared space',
    h2: 'Arrive as a guest, use it as a resident.',
    items: [
      { kicker: '01', title: 'Protect the public function', body: 'Do not block pedestrian lanes, the sports field, emergency access, or areas being used for community activities.' },
      { kicker: '02', title: 'Take your rubbish home', body: 'Use the bins provided. If they are full, keep your rubbish until you find a proper disposal point.' },
      { kicker: '03', title: 'Respect events & worship', body: 'Follow the officers’ arrangements and keep the volume down, especially when the surroundings are used for official or religious activities.' },
    ],
  },

  responsibility: {
    eyebrow: 'Education & visitor responsibility',
    h2: 'A public space works when visitors help look after it.',
    lede: 'This section explains the reasoning behind rules that are often considered trivial—from puddles to music volume—so decisions on site are made with understanding, not just compliance.',
    topics: [
      {
        icon: '◍',
        title: 'Why a city provides a square',
        body: 'Open public space works as the “living room” of the city: a place where different groups meet without paying, a venue for morning exercise, a shaded area that lowers surface heat, and a safe gathering point for large events. Understanding this function makes a visit more meaningful than a quick photo.',
      },
      {
        icon: '≈',
        title: 'Rainwater, puddles and drainage',
        body: 'Tropical rain falls fast and hard. Short-lived puddles in low spots are normal and usually recede once the drains are working. Small litter—wrappers, straws, cigarette ends—is the main cause of blocked drains, so never throw anything into drains or ponds around the area.',
      },
      {
        icon: '❀',
        title: 'Shade trees & urban wildlife',
        body: 'The trees around the field provide the shade that determines whether a midday visit is comfortable. The area is also habitat for urban birds and pollinating insects. Enjoy them from a distance: do not pick plants, disturb nests, or feed wild animals.',
      },
      {
        icon: '◔',
        title: 'Sharing sound with the neighbourhood',
        body: 'The square is surrounded by government offices, places of worship and housing. Keep music and loudspeaker volume down, especially near prayer times and during working hours. Large-scale events usually require permits and officer arrangements.',
      },
      {
        icon: '♺',
        title: 'Waste & your footprint',
        body: 'Use the bins provided; if they are full, keep your waste until you find another disposal point. Separating dry and wet waste helps the city cleaning crews who work after events finish.',
      },
      {
        icon: '⚑',
        title: 'Personal safety & preparedness',
        body: 'Keep valuables in a closed bag, especially when the area is busy with an event. At night, choose bright and busy routes. The integrated emergency number in Indonesia is 112; also save the contact of your travel companion before leaving.',
      },
    ],
    summary:
      'In short: arrive as a guest, use it as a resident. If a facility is unavailable or an area is being used for community activities, treat that as part of how a public space works—not as a shortfall in tourist services.',
  },

  faq: {
    eyebrow: 'Common questions',
    h2: 'Questions before you go.',
    lede: 'Answers are written conservatively. When public sources cannot confirm a facility, we say it needs checking rather than making an assumption.',
    items: faqEn,
  },

  sources: {
    eyebrow: 'Methodology & sources',
    h2: 'Open sources, traceable claims.',
    lede: 'Every entity fact—name, address, coordinates and access—is cross-checked between government channels, the national tourism portal and public map data before it is written.',
    principle:
      'Editorial principle: when data can change quickly—facility hours, fares, bus stops, parking or event schedules—we recommend verifying through official channels on your travel day.',
    intro:
      'We prioritise government sources and national tourism institutions, then compare them with map data for the address, coordinates and access information. Commercial information is never used as a recommendation.',
    items: [
      { label: 'Ministry of Tourism of the Republic of Indonesia — Indonesia.travel', href: 'https://www.indonesia.travel/id/id/destination/sumatra/riau-islands/alun-alun-batam', note: 'destination description and function of the public space' },
      { label: 'Batam City Government', href: 'https://batam.go.id/trans-batam-tambah-19-armada-baru-koridor-nongsa-batam-centre-diintegrasikan-dengan-bandara-hang-nadim/', note: 'Trans Batam developments and airport connection' },
      { label: 'Batam City Communication and Information Office', href: 'https://kominfo.batam.go.id/lapangan-olahraga-engku-putri-direvitalisasi-lewat-csr-amsakar-dorong-lebih-banyak-perusahaan-ikut-membangun-batam/', note: 'condition and revitalisation of the sports facilities' },
      { label: 'Batam Kota District', href: 'https://kecbatamkota.batam.go.id/2020/06/26/manifestasi-ketokohan-engku-hamidah/', note: 'background of the name Engku Putri / Engku Hamidah' },
      { label: 'Batam City Culture and Tourism Office', href: 'https://disbudpar.batam.go.id/2026/07/23/piala-dunia-2026-jadi-momentum-penggerak-umkm-batam-siapkan-nobar-akbar-di-engku-putri/', note: 'use of the square for public activities' },
    ],
    ratingNote:
      'Review snapshots are indicative only. The rating of 4.5 from 5,811 reviews on Google Maps (September 2026) is used merely to illustrate visitor perception, not as an official assessment. The number of reviews can grow at any time.',
    refsTitle: 'Official references for updates',
    refsText:
      'For official updates and regional tourism information, refer to {gov} and the {city} portal. This page discusses Alun Alun Batam Centre (Batam Centre Park) as a public space of Kota Batam and does not represent any government body.',
  },

  footer: {
    tagline: 'A field guide that puts historical context, access, public facilities and visiting ethics above commercial promotion.',
    guideTitle: 'Guide sections',
    guideLinks: [
      { label: 'City history background', href: '/en/#latar-sejarah' },
      { label: 'Weather & forecast', href: '/en/#cuaca' },
      { label: 'Facilities & services', href: '/en/#fasilitas' },
      { label: 'Agenda & events', href: '/en/#acara' },
      { label: 'Transport', href: '/en/#transportasi' },
      { label: 'Seasonal strategy', href: '/en/#musim' },
      { label: 'Visit routes', href: '/en/#rute' },
      { label: 'Visitor responsibility', href: '/en/#tanggung-jawab' },
    ],
    legalTitle: 'Legal information',
    legalLinks: [
      { label: 'Privacy Policy', href: '/en/privacy-policy/' },
      { label: 'Terms of Service', href: '/en/terms-of-service/' },
      { label: 'Cookie Settings', href: '/en/cookie-settings/' },
    ],
    statusTitle: 'Site status',
    status: 'This site is an independent, non-profit travel information project with no affiliation to any government agency or official organisation.',
    credits: [
      'Destination information is compiled by referring to and cross-checking public material from the Batam City Government, the Batam City Culture and Tourism Office and the Ministry of Tourism of the Republic of Indonesia; the site carries no commercial recommendations.',
      'Image rights: all photographs shown remain the rights of their respective photographers and/or rights holders. Photographs are used as editorial material and always credited on the page.',
    ],
    copyright: '© 2026 Alun-Alun Batam Centre Guide. All rights reserved.',
  },

  logo: {
    name: 'Alun-Alun Batam Centre',
    tagline: 'Independent guide',
    homeAria: 'Home of the Alun-Alun Batam Centre guide',
    markAria: 'Alun-Alun Batam Centre mark',
  },

  legal: {
    privacy: {
      eyebrow: 'Site documents',
      title: 'Privacy Policy',
      updated: 'Last updated: September 2026',
      intro:
        'We run this site as an independent, non-profit travel information guide. Our principles are to collect as little data as possible, explain the purpose of processing in plain language, and never sell users’ personal data.',
      blocks: [
        {
          h2: 'Information we collect',
          paragraphs: [
            'Data that may be processed when you use this site is limited to what is needed for operation, security and—only with your consent—usage analytics.',
            'The site currently has no user accounts, user database, booking system, payment or sign-in feature.',
          ],
          list: [
            'Basic technical data: IP address, browser type, device, pages visited, time of request and other log data normally processed by a hosting or network provider to deliver pages and keep the service secure.',
            'Cookies and local storage: consent preferences are stored in your browser so the site remembers your choice.',
            'Analytics data: processed through Google Analytics only if you actively enable the analytics category on the Cookie Settings page.',
            'Information you provide voluntarily: if the site ever offers a contact channel, data you send through it will be used only to respond to the related request.',
          ],
        },
        {
          h2: 'How we use information',
          list: [
            'to deliver and secure the site pages;',
            'to understand performance and content usage once analytics consent is given;',
            'to improve structure, accessibility and user experience;',
            'to respond to requests you send voluntarily when a contact channel exists;',
            'to meet applicable legal obligations.',
          ],
          paragraphs: ['We do not use data from this site to build marketing profiles, sell data, or run personalised advertising.'],
        },
        {
          h2: 'Legal basis and your choices',
          paragraphs: [
            'The analytics category is optional and off by default. You can enable or disable it at any time via Cookie Settings. Cookies or storage strictly needed to remember privacy choices and run basic functions cannot be disabled through the site controls.',
          ],
        },
        {
          h2: 'Third-party services',
          h3: 'Maps',
          paragraphs: [
            'The main page loads a map in an embedded frame from a public map provider. When the map section loads, your browser communicates directly with that provider, which may receive network and device data under its own policies. The map is used purely for location context.',
          ],
        },
        {
          h2: 'Analytics',
          paragraphs: ['Analytics are loaded only if you consent to the analytics category. The site configuration enables IP anonymisation.'],
        },
        {
          h2: 'Retention and security',
          paragraphs: [
            'We do not set a single retention period for infrastructure logs because retention can depend on provider configuration and security needs. We aim for reasonable retention only as long as necessary for legitimate purposes. No method of transmission over the internet is entirely risk-free.',
          ],
        },
        {
          h2: 'Your rights',
          paragraphs: [
            'Depending on the law that applies to you, you may have the right to access, correct, delete, restrict or object to processing, and to withdraw consent. Withdrawing consent does not affect the lawfulness of processing that took place beforehand.',
          ],
        },
        {
          h2: 'Changes to this policy',
          paragraphs: ['The policy may be updated when technology, third-party services or legal obligations change. The version in force will be shown on this page together with the month of the update.'],
        },
        { highlight: 'In short: the site works without analytics. You can decline every non-essential category and still read the destination guide.' },
      ],
    },
    terms: {
      eyebrow: 'Site documents',
      title: 'Terms of Service',
      updated: 'Last updated: September 2026',
      intro: 'By accessing and using the Alun-Alun Batam Centre guide, you agree to the terms below. If you disagree, you may stop using the site.',
      blocks: [
        {
          h2: 'Independent, non-profit status',
          paragraphs: [
            'This site is an independent, non-profit travel information project. It is not managed, endorsed by, or representative of the Batam City Government, the Riau Islands Provincial Government, the Ministry of Tourism of the Republic of Indonesia, attraction managers, transport operators, or any commercial organisation.',
          ],
        },
        {
          h2: 'Use of content',
          paragraphs: [
            'Content is provided for personal information needs. You may quote parts of it with credit and a link to the relevant page. We do not grant permission to republish the site in full, resell the content, or present it as if it came from an official body.',
          ],
        },
        {
          h2: 'Information and accuracy',
          paragraphs: [
            'Facts that change quickly—facility hours, fares, bus stops, parking and event schedules—are written with uncertainty markers. We recommend verifying on official channels before travelling and accept no responsibility for decisions based solely on this site’s information.',
          ],
        },
        {
          h2: 'No commercial recommendations',
          paragraphs: ['This guide takes no commission and recommends no specific businesses. Mentions of service types are neutral.'],
        },
        {
          h2: 'Third-party content',
          paragraphs: ['The embedded map and editorial photographs are subject to the rights and terms of their respective owners.'],
        },
        { highlight: 'In short: use this site as input for your decision, not as a substitute for official announcements on your travel day.' },
      ],
    },
    cookies: {
      eyebrow: 'Privacy controls',
      title: 'Cookie Settings',
      updated: 'Last updated: September 2026',
      intro: 'We use browser storage as sparingly as possible. You can set the optional categories below. Your choice is stored on your device and can be changed at any time.',
      blocks: [
        {
          h2: 'What do we mean by cookies?',
          paragraphs: [
            'Cookies are small pieces of data that a site or a third-party service can store in your browser. This site also uses local storage to remember preferences. On this page, the term “cookie” is used practically to cover both when their function is similar.',
          ],
        },
        {
          h2: 'Categories we use',
          list: [
            'Strictly necessary: stores your consent choice so the site does not ask again on every visit.',
            'Analytics (optional): active only if you enable it, and then used to understand content usage anonymously.',
          ],
        },
        {
          h2: 'How to change your choice',
          paragraphs: ['Use the form on this page to save your choice. You can also clear site data through your browser settings, which resets preferences to the initial state.'],
        },
        { highlight: 'In short: you can read the entire guide without enabling the analytics category.' },
      ],
    },
  },

  cookieForm: {
    requiredTitle: 'Strictly necessary cookies',
    requiredBody: 'Needed for basic functions and for storing your privacy choice. This category cannot be disabled.',
    requiredBadge: 'Always on',
    analyticsTitle: 'Analytics cookies',
    analyticsBody: 'Allow Google Analytics to help us understand how the site is used. Off by default and not needed to read the guide.',
    analyticsNote: 'Google Analytics · G-HXM22WWPKP',
    preferencesTitle: 'Site preferences',
    preferencesBody: 'Allow the site to remember non-essential interface settings that may be added later. Currently not used for content personalisation.',
    marketingTitle: 'Marketing and personalised advertising',
    marketingBody: 'This site runs no personalised advertising and enables no marketing category.',
    marketingBadge: 'Not used',
    save: 'Save preferences',
    reject: 'Reject non-essential',
    saved: 'Preferences saved. The page will reload if the analytics status changes.',
    rejected: 'Optional categories disabled. The page will reload if the analytics status changes.',
  },
};
