import { LATITUDE, LONGITUDE } from '../data/site';
import type { WeatherText } from '../content/weather-text';

/**
 * Pengambilan prakiraan cuaca dilakukan di sisi server.
 * Hasil disimpan sementara di cache runtime agar setiap kunjungan tidak
 * memicu permintaan baru ke penyedia data cuaca.
 */

const ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
const TIMEZONE = 'Asia/Jakarta';
const CACHE_TTL_SECONDS = 600;
const FORECAST_DAYS = 7;

export interface WeatherCurrent {
  temperature: number;
  apparent: number;
  humidity: number;
  windKmh: number;
  gustKmh: number;
  precipitation: number;
  code: number;
  isDay: boolean;
  time: string;
}

export interface WeatherDay {
  date: string;
  code: number;
  max: number;
  min: number;
  precipitation: number;
  rainChance: number | null;
  windMax: number;
  uvMax: number | null;
}

export interface WeatherSnapshot {
  current: WeatherCurrent;
  daily: WeatherDay[];
  timezone: string;
}

export interface WeatherAdvice {
  /** Ringkasan satu baris: kondisi, rentang suhu, peluang hujan, dan angin. */
  summary: string;
  /** Terjemahan kelembapan menjadi kalimat sehari-hari. */
  humidityNote: string;
  risk: string[];
  outfit: string[];
  plan: string[];
  items: string[];
}

export function buildWeatherUrl(): string {
  const params = new URLSearchParams({
    latitude: LATITUDE.toFixed(5),
    longitude: LONGITUDE.toFixed(5),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m,wind_gusts_10m',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,uv_index_max',
    timezone: TIMEZONE,
    forecast_days: String(FORECAST_DAYS),
  });
  return `${ENDPOINT}?${params.toString()}`;
}

const WMO_ICON: Record<number, string> = {
  0: '☀️',
  1: '🌤',
  2: '⛅',
  3: '☁️',
  45: '🌫',
  48: '🌫',
  51: '🌦',
  53: '🌦',
  55: '🌧',
  56: '🌧',
  57: '🌧',
  61: '🌦',
  63: '🌧',
  65: '🌧',
  66: '🌧',
  67: '🌧',
  71: '🌨',
  73: '🌨',
  75: '🌨',
  77: '🌨',
  80: '🌧',
  81: '🌧',
  82: '⛈',
  85: '🌨',
  86: '🌨',
  95: '⛈',
  96: '⛈',
  99: '⛈',
};

/** Label kondisi mengikuti bahasa halaman; ikon tetap netral. */
export function wmoToText(code: number, text: WeatherText): { label: string; icon: string } {
  return {
    label: text.wmo[String(code)] ?? text.wmo.fallback ?? 'Mixed conditions',
    icon: WMO_ICON[code] ?? '⛅',
  };
}

/** Konversi km/jam ke skala Beaufort (0–12). */
export function kmhToBeaufort(kmh: number): number {
  const thresholds = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  let level = 0;
  while (level < thresholds.length && kmh >= thresholds[level]) level += 1;
  return level;
}

export function beaufortLabel(level: number, text: WeatherText): string {
  return text.beaufort[level] ?? text.beaufort[4] ?? 'Moderate breeze';
}

export function uvLabel(uv: number | null, text: WeatherText): string {
  if (uv === null) return text.uv.unavailable;
  if (uv < 3) return text.uv.low;
  if (uv < 6) return text.uv.moderate;
  if (uv < 8) return text.uv.high;
  if (uv < 11) return text.uv.veryHigh;
  return text.uv.extreme;
}

/* ---------- Kelompok kode cuaca ---------- */
const STORM_CODES = [95, 96, 99];
const HEAVY_RAIN_CODES = [63, 65, 66, 67, 80, 81, 82];
const LIGHT_RAIN_CODES = [51, 53, 55, 56, 57, 61];
const FOG_CODES = [45, 48];
const CLEAR_CODES = [0, 1];
const OVERCAST_CODES = [2, 3];

const includesCode = (list: number[], ...codes: (number | undefined)[]) =>
  codes.some((code) => code !== undefined && list.includes(code));

/** Mengubah angka kelembapan menjadi kalimat yang mudah dipahami. */
export function humidityNote(humidity: number, text: WeatherText): string {
  if (humidity < 60) return text.humidity.dry;
  if (humidity < 80) return text.humidity.humid;
  return text.humidity.veryHumid;
}

/** Kata untuk peluang hujan, tanpa menyatakan pasti hujan. */
export function chanceWord(chance: number | null, text: WeatherText): string {
  if (chance === null) return text.chance.unavailable;
  if (chance >= 70) return `${text.chance.high} (${chance}%)`;
  if (chance >= 40) return `${text.chance.medium} (${chance}%)`;
  if (chance >= 20) return `${text.chance.low} (${chance}%)`;
  return `${text.chance.veryLow} (${chance}%)`;
}

/**
 * Menyusun saran yang bisa langsung dilakukan pengunjung.
 * Hanya aturan yang kondisinya terpenuhi yang dimasukkan ke hasil.
 */
export function buildAdvice(weather: WeatherSnapshot, text: WeatherText): WeatherAdvice {
  const current = weather.current;
  const today = weather.daily[0];
  const a = text.advice;

  const max = today?.max ?? current.temperature;
  const min = today?.min ?? current.temperature;
  const range = max - min;
  const chance = today?.rainChance ?? 0;
  const uv = today?.uvMax ?? null;

  const windLevel = kmhToBeaufort(current.windKmh);
  const gustLevel = kmhToBeaufort(current.gustKmh);
  // Angin untuk pertimbangan keamanan memakai hembusan terkuat, satu tingkat lebih rendah.
  const windSafetyLevel = Math.max(windLevel, gustLevel - 1);

  const storm = includesCode(STORM_CODES, current.code, today?.code);
  const heavyRain =
    !storm &&
    (includesCode(HEAVY_RAIN_CODES, current.code, today?.code) || (today?.precipitation ?? 0) >= 10);
  const lightRain = !storm && !heavyRain && includesCode(LIGHT_RAIN_CODES, current.code, today?.code);
  const foggy = includesCode(FOG_CODES, current.code, today?.code);
  const clear = includesCode(CLEAR_CODES, current.code);
  const overcast = includesCode(OVERCAST_CODES, current.code);
  // Suhu terik dinilai dari suhu maksimum atau suhu yang dirasakan—di kota pesisir
  // angka yang dirasakan sering lebih tinggi daripada angka resmi.
  const hot = max >= 32 || current.apparent >= 34;
  const veryHot = max >= 35;
  const cold = max <= 10;

  const risk: string[] = [];
  const outfit: string[] = [];
  const plan: string[] = [];
  const items: string[] = [];

  /* --- Peringatan (prioritas tertinggi) --- */
  if (storm) risk.push(a.riskStorm);
  if (heavyRain || chance >= 80) risk.push(a.riskHeavyRain);
  if (windSafetyLevel >= 7) risk.push(a.riskWind);
  if (foggy) risk.push(a.riskFog);
  if (veryHot) risk.push(a.riskVeryHot);

  /* --- Rencana kunjungan (keamanan lebih dulu) --- */
  if (storm || heavyRain) {
    plan.push(a.planStorm);
  } else if (chance >= 60) {
    plan.push(a.planChance);
  } else if (lightRain) {
    plan.push(a.planLight);
  }

  if (windSafetyLevel >= 5) plan.push(a.planWind);
  if (veryHot || hot) plan.push(a.planHot);
  if (clear) plan.push(a.planClear);
  if (overcast && !storm && !heavyRain) plan.push(a.planOvercast);
  if (foggy) plan.push(a.planFog);
  if (!storm && !heavyRain && chance < 40 && windSafetyLevel < 5) plan.push(a.planCalm);
  // Saat ada peringatan, saran umum dipangkas supaya pesan keselamatan tidak tenggelam.
  const planFinal = risk.length ? plan.slice(0, 2) : plan.slice(0, 4);

  /* --- Pakaian --- */
  if (cold) {
    outfit.push(a.outfitCold);
  } else if (range > 8) {
    outfit.push(a.outfitRange);
  }
  if (storm || heavyRain || chance >= 60) {
    outfit.push(a.outfitRain);
  } else if (hot) {
    outfit.push(a.outfitHot);
  } else {
    outfit.push(a.outfitDefault);
  }
  if (windSafetyLevel >= 5) outfit.push(a.outfitWind);
  if (uv !== null && uv >= 5 && !storm && !heavyRain) outfit.push(a.outfitUv);

  /* --- Barang bawaan --- */
  if (storm || heavyRain) {
    items.push(a.itemRaincoat);
    items.push(a.itemBagCover);
  } else if (chance >= 60) {
    items.push(a.itemUmbrella);
  } else if (lightRain) {
    items.push(a.itemFoldingUmbrella);
  }
  if (hot || veryHot) items.push(a.itemWater);
  if (uv !== null && uv >= 5) {
    items.push(a.itemSunscreen);
    items.push(a.itemSunglasses);
    items.push(a.itemHat);
  }
  if (cold) items.push(a.itemCold);
  if (foggy) items.push(a.itemMask);
  if (windSafetyLevel >= 5) items.push(a.itemHairTie);

  const chanceText = chanceWord(today?.rainChance ?? null, text);
  const condition = wmoToText(current.code, text);
  const summary = [
    condition.label,
    `${Math.round(min)}–${Math.round(max)}°C`,
    chanceText,
    beaufortLabel(windLevel, text),
  ].join(' · ');

  return {
    summary,
    humidityNote: humidityNote(current.humidity, text),
    risk,
    outfit,
    plan: planFinal,
    items: [...new Set(items)],
  };
}

interface CacheRuntime {
  default: {
    match(request: Request): Promise<Response | undefined>;
    put(request: Request, response: Response): Promise<void>;
  };
}

interface CfRequestInit extends RequestInit {
  cf?: { cacheTtl?: number; cacheEverything?: boolean };
}

function toNumber(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function parseWeather(raw: unknown): WeatherSnapshot | null {
  if (!raw || typeof raw !== 'object') return null;
  const data = raw as Record<string, any>;
  const current = data.current;
  const daily = data.daily;
  if (!current || !daily || !Array.isArray(daily.time)) return null;

  const days: WeatherDay[] = [];
  for (let i = 0; i < daily.time.length; i += 1) {
    const date = typeof daily.time[i] === 'string' ? daily.time[i] : '';
    if (!date) continue;
    days.push({
      date,
      code: toNumber(daily.weather_code?.[i]) ?? 0,
      max: toNumber(daily.temperature_2m_max?.[i]) ?? 0,
      min: toNumber(daily.temperature_2m_min?.[i]) ?? 0,
      precipitation: toNumber(daily.precipitation_sum?.[i]) ?? 0,
      rainChance: toNumber(daily.precipitation_probability_max?.[i]),
      windMax: toNumber(daily.wind_speed_10m_max?.[i]) ?? 0,
      uvMax: toNumber(daily.uv_index_max?.[i]),
    });
  }
  if (!days.length) return null;

  return {
    current: {
      temperature: toNumber(current.temperature_2m) ?? days[0].max,
      apparent: toNumber(current.apparent_temperature) ?? days[0].max,
      humidity: toNumber(current.relative_humidity_2m) ?? 0,
      windKmh: toNumber(current.wind_speed_10m) ?? 0,
      gustKmh: toNumber(current.wind_gusts_10m) ?? 0,
      precipitation: toNumber(current.precipitation) ?? 0,
      code: toNumber(current.weather_code) ?? days[0].code,
      isDay: current.is_day !== 0,
      time: typeof current.time === 'string' ? current.time : days[0].date,
    },
    daily: days,
    timezone: typeof data.timezone === 'string' ? data.timezone : TIMEZONE,
  };
}

/** Mengambil prakiraan terbaru, memanfaatkan cache runtime bila tersedia. */
export async function getWeather(): Promise<WeatherSnapshot | null> {
  const url = buildWeatherUrl();
  const request = new Request(url, { method: 'GET' });
  const runtimeCaches = (globalThis as unknown as { caches?: CacheRuntime }).caches;

  if (runtimeCaches?.default) {
    try {
      const hit = await runtimeCaches.default.match(request);
      if (hit) {
        const parsed = parseWeather(await hit.json());
        if (parsed) return parsed;
      }
    } catch (_) {
      /* lanjut mengambil data baru */
    }
  }

  try {
    const init: CfRequestInit = {
      cf: { cacheTtl: CACHE_TTL_SECONDS, cacheEverything: true },
    };
    const response = await fetch(request, init as RequestInit);
    if (!response.ok) return null;
    const parsed = parseWeather(await response.clone().json());
    if (parsed && runtimeCaches?.default) {
      runtimeCaches.default.put(request, response.clone()).catch(() => undefined);
    }
    return parsed;
  } catch (_) {
    return null;
  }
}

/** Format tanggal ramah pembaca untuk zona waktu setempat. */
export function formatDayLabel(date: string, localeTag: string = 'id-ID'): string {
  const parsed = new Date(`${date}T00:00:00+07:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return new Intl.DateTimeFormat(localeTag, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: TIMEZONE,
  }).format(parsed);
}

export function formatTimeLabel(value: string, localeTag: string = 'id-ID'): string {
  // Waktu dari penyedia data sudah dalam zona setempat, jadi dikunci ke +07:00.
  const match = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2})/.exec(value);
  if (!match) return value;
  const parsed = new Date(`${match[1]}T${match[2]}:00+07:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat(localeTag, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: TIMEZONE,
  }).format(parsed);
}
