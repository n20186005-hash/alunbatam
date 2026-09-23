/** Teks turunan cuaca: label kode, skala angin, dan kalimat saran per bahasa. */
export interface WeatherText {
  wmo: Record<string, string>;
  beaufort: string[];
  uv: { unavailable: string; low: string; moderate: string; high: string; veryHigh: string; extreme: string };
  humidity: { dry: string; humid: string; veryHumid: string };
  chance: { unavailable: string; high: string; medium: string; low: string; veryLow: string };
  advice: {
    riskStorm: string;
    riskHeavyRain: string;
    riskWind: string;
    riskFog: string;
    riskVeryHot: string;
    planStorm: string;
    planChance: string;
    planLight: string;
    planWind: string;
    planHot: string;
    planClear: string;
    planOvercast: string;
    planFog: string;
    planCalm: string;
    outfitCold: string;
    outfitRange: string;
    outfitRain: string;
    outfitHot: string;
    outfitDefault: string;
    outfitWind: string;
    outfitUv: string;
    itemRaincoat: string;
    itemBagCover: string;
    itemUmbrella: string;
    itemFoldingUmbrella: string;
    itemWater: string;
    itemSunscreen: string;
    itemSunglasses: string;
    itemHat: string;
    itemCold: string;
    itemMask: string;
    itemHairTie: string;
  };
}

const WMO_ID: Record<string, string> = {
  '0': 'Cerah',
  '1': 'Sebagian besar cerah',
  '2': 'Berawan sebagian',
  '3': 'Berawan',
  '45': 'Berkabut',
  '48': 'Kabut tebal',
  '51': 'Gerimis ringan',
  '53': 'Gerimis',
  '55': 'Gerimis lebat',
  '56': 'Gerimis dingin',
  '57': 'Gerimis dingin lebat',
  '61': 'Hujan ringan',
  '63': 'Hujan sedang',
  '65': 'Hujan lebat',
  '66': 'Hujan dingin',
  '67': 'Hujan dingin lebat',
  '71': 'Hujan salju ringan',
  '73': 'Hujan salju',
  '75': 'Hujan salju lebat',
  '77': 'Butiran salju',
  '80': 'Hujan deras',
  '81': 'Hujan deras',
  '82': 'Hujan sangat deras',
  '85': 'Hujan salju',
  '86': 'Hujan salju lebat',
  '95': 'Badai petir',
  '96': 'Badai petir dengan hujan es',
  '99': 'Badai petir dengan hujan es',
  fallback: 'Kondisi beragam',
};

const WMO_EN: Record<string, string> = {
  '0': 'Clear',
  '1': 'Mainly clear',
  '2': 'Partly cloudy',
  '3': 'Overcast',
  '45': 'Foggy',
  '48': 'Dense fog',
  '51': 'Light drizzle',
  '53': 'Drizzle',
  '55': 'Heavy drizzle',
  '56': 'Freezing drizzle',
  '57': 'Heavy freezing drizzle',
  '61': 'Light rain',
  '63': 'Moderate rain',
  '65': 'Heavy rain',
  '66': 'Freezing rain',
  '67': 'Heavy freezing rain',
  '71': 'Light snow',
  '73': 'Snow',
  '75': 'Heavy snow',
  '77': 'Snow grains',
  '80': 'Heavy rain showers',
  '81': 'Heavy rain showers',
  '82': 'Violent rain showers',
  '85': 'Snow showers',
  '86': 'Heavy snow showers',
  '95': 'Thunderstorm',
  '96': 'Thunderstorm with hail',
  '99': 'Thunderstorm with hail',
  fallback: 'Mixed conditions',
};

const BEAUFORT_ID = [
  'Tenang', 'Angin lembut', 'Angin ringan', 'Angin sepoi', 'Angin sedang', 'Angin segar',
  'Angin kencang', 'Angin sangat kencang', 'Angin galak', 'Angin sangat galak', 'Badai',
  'Badai hebat', 'Badai topan',
];

const BEAUFORT_EN = [
  'Calm', 'Light air', 'Light breeze', 'Gentle breeze', 'Moderate breeze', 'Fresh breeze',
  'Strong breeze', 'Near gale', 'Gale', 'Strong gale', 'Storm', 'Violent storm', 'Hurricane force',
];

export const weatherTextId: WeatherText = {
  wmo: WMO_ID,
  beaufort: BEAUFORT_ID,
  uv: { unavailable: 'Tidak tersedia', low: 'Rendah', moderate: 'Sedang', high: 'Tinggi', veryHigh: 'Sangat tinggi', extreme: 'Ekstrem' },
  humidity: {
    dry: 'Udara terasa cukup kering untuk ukuran kota pesisir.',
    humid: 'Udara cukup lembap—gerah bisa terasa lebih kuat dari angka suhu.',
    veryHumid: 'Udara sangat lembap; keringat sulit menguap, jadi jeda berteduh lebih sering diperlukan.',
  },
  chance: {
    unavailable: 'Peluang hujan tidak tersedia',
    high: 'Kemungkinan hujan tinggi',
    medium: 'Kemungkinan hujan sedang',
    low: 'Kemungkinan hujan kecil',
    veryLow: 'Kemungkinan hujan rendah',
  },
  advice: {
    riskStorm: 'Ada potensi badai petir. Hindari area terbuka dan tepi laut, jangan berteduh di bawah pohon, dan tunda aktivitas air sampai cuaca reda.',
    riskHeavyRain: 'Hujan deras bisa turun. Permukaan lapangan menjadi licin dan titik rendah mudah tergenang—hindari area terbuka saat hujan lebat.',
    riskWind: 'Angin kencang. Jauhi papan reklame, tiang, dan tepi laut; aktivitas perairan kemungkinan dihentikan operator.',
    riskFog: 'Jarak pandang menurun. Perjalanan feri dan penerbangan berpotensi tertunda, dan rencana yang bergantung pada pemandangan jauh sebaiknya ditunda.',
    riskVeryHot: 'Suhu sangat terik. Batasi aktivitas siang hari, perbanyak minum, dan segera berteduh bila mulai pusing.',
    planStorm: 'Kunjungan luar ruangan sebaiknya ditunda; jadikan museum, galeri, atau ruang tertutup di sekitar Batam Centre sebagai rencana utama.',
    planChance: 'Bawa rencana cadangan ke dalam ruangan. Hujan di kawasan ini biasanya singkat namun deras, jadi jeda 30–60 menit sering sudah cukup.',
    planLight: 'Hujan ringan masih memungkinkan jalan santai, tetapi permukaan bisa licin—pilih jalur yang rata dan beraspal.',
    planWind: 'Angin cukup kuat: jadwal feri dan aktivitas perairan dapat berubah. Cek pengumuman operator sebelum berangkat.',
    planHot: 'Hindari berlama-lama di lapangan antara pukul 11.00–15.00; bagi kunjungan menjadi sesi pendek dengan jeda berteduh.',
    planClear: 'Cuaca cerah cocok untuk jalan santai, foto lanskap, dan menikmati senja di tepi kawasan.',
    planOvercast: 'Cahaya lembut tanpa bayangan keras—waktu yang bagus untuk berfoto dan berjalan lebih lama.',
    planFog: 'Fokus pada aktivitas jarak dekat; simpan rencana menikmati pemandangan jauh untuk hari lain.',
    planCalm: 'Pagi dan jelang senja tetap menjadi waktu paling nyaman untuk ruang terbuka.',
    outfitCold: 'Suhu rendah: siapkan jaket tebal, syal, dan pelindung tangan.',
    outfitRange: 'Suhu siang dan malam berbeda jauh—bawa satu lapisan tipis yang mudah dilepas.',
    outfitRain: 'Gunakan jas hujan dan alas kaki tertutup yang tidak licin; hindari pakaian panjang yang mudah menyerap air.',
    outfitHot: 'Pakaian tipis dan menyerap keringat paling nyaman; hindari warna gelap saat siang.',
    outfitDefault: 'Pakaian kasual berbahan ringan sudah memadai untuk berkeliling kawasan.',
    outfitWind: 'Angin cukup kuat: hindari topi longgar dan pakaian yang mudah terbang.',
    outfitUv: 'Tambahkan pelindung matahari: topi, kacamata hitam, dan tabir surya.',
    itemRaincoat: 'Jas hujan—lebih aman daripada payung panjang saat angin kencang',
    itemBagCover: 'Pelindung tas dan gawai dari air',
    itemUmbrella: 'Payung lipat atau jas hujan ringan',
    itemFoldingUmbrella: 'Payung lipat kecil',
    itemWater: 'Air minum yang cukup',
    itemSunscreen: 'Tabir surya',
    itemSunglasses: 'Kacamata hitam',
    itemHat: 'Topi atau pelindung kepala',
    itemCold: 'Jaket tebal dan syal',
    itemMask: 'Masker',
    itemHairTie: 'Ikat rambut atau penjepit topi',
  },
};

export const weatherTextEn: WeatherText = {
  wmo: WMO_EN,
  beaufort: BEAUFORT_EN,
  uv: { unavailable: 'Not available', low: 'Low', moderate: 'Moderate', high: 'High', veryHigh: 'Very high', extreme: 'Extreme' },
  humidity: {
    dry: 'The air feels fairly dry for a coastal city.',
    humid: 'The air is fairly humid—the heat can feel stronger than the temperature suggests.',
    veryHumid: 'The air is very humid; sweat evaporates slowly, so you will need more frequent shade breaks.',
  },
  chance: {
    unavailable: 'Rain chance not available',
    high: 'High chance of rain',
    medium: 'Moderate chance of rain',
    low: 'Small chance of rain',
    veryLow: 'Low chance of rain',
  },
  advice: {
    riskStorm: 'Thunderstorms are possible. Avoid open areas and the shoreline, do not shelter under trees, and postpone water activities until the weather settles.',
    riskHeavyRain: 'Heavy rain may fall. The field surface becomes slippery and low spots flood easily—avoid open areas during downpours.',
    riskWind: 'Strong wind. Stay away from billboards, poles and the shoreline; water activities will likely be stopped by operators.',
    riskFog: 'Visibility is reduced. Ferry and flight journeys may be delayed, and plans that depend on distant views are better postponed.',
    riskVeryHot: 'Very hot conditions. Limit midday activity, drink plenty of water, and find shade immediately if you feel dizzy.',
    planStorm: 'Postpone outdoor plans; make the museum, a gallery or another indoor space around Batam Centre your main plan.',
    planChance: 'Keep an indoor backup plan. Rain here is usually brief but heavy, so a 30–60 minute pause is often enough.',
    planLight: 'Light rain still allows an easy walk, but surfaces can be slippery—choose flat, paved routes.',
    planWind: 'The wind is fairly strong: ferry schedules and water activities may change. Check operator announcements before departure.',
    planHot: 'Avoid long stretches on the field between 11.00 and 15.00; split the visit into short sessions with shade breaks.',
    planClear: 'Clear weather suits easy walks, landscape photos and enjoying sunset at the edge of the district.',
    planOvercast: 'Soft light without harsh shadows—a good time for photos and longer walks.',
    planFog: 'Focus on close-range activities; save distant-view plans for another day.',
    planCalm: 'Early morning and the hours before sunset remain the most comfortable times in the open space.',
    outfitCold: 'Cold conditions: pack a thick jacket, a scarf and gloves.',
    outfitRange: 'Day and night temperatures differ a lot—bring one thin layer that is easy to remove.',
    outfitRain: 'Wear a raincoat and closed, non-slip footwear; avoid long clothing that soaks up water.',
    outfitHot: 'Light, breathable clothing is most comfortable; avoid dark colours at midday.',
    outfitDefault: 'Light casual clothing is enough for walking around the district.',
    outfitWind: 'The wind is fairly strong: avoid loose hats and clothing that catches the wind.',
    outfitUv: 'Add sun protection: a hat, sunglasses and sunscreen.',
    itemRaincoat: 'A raincoat—safer than a long umbrella in strong wind',
    itemBagCover: 'A cover for your bag and devices',
    itemUmbrella: 'A folding umbrella or light raincoat',
    itemFoldingUmbrella: 'A small folding umbrella',
    itemWater: 'Plenty of drinking water',
    itemSunscreen: 'Sunscreen',
    itemSunglasses: 'Sunglasses',
    itemHat: 'A hat or head covering',
    itemCold: 'A thick jacket and scarf',
    itemMask: 'A face mask',
    itemHairTie: 'A hair tie or hat clip',
  },
};
