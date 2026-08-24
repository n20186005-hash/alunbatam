# Panduan Alun-Alun Batam Centre

Situs informasi wisata independen dan nirlaba untuk **Alun-Alun Batam Centre / Dataran Engku Putri**, Batam, Kepulauan Riau. Seluruh antarmuka publik menggunakan Bahasa Indonesia dan berfokus pada konteks sejarah, akses, fasilitas publik, transportasi, etika berkunjung, serta perencanaan kunjungan tanpa rekomendasi komersial kepada pedagang tertentu.

## Tumpukan teknologi

- Astro 7 + TypeScript
- Tailwind CSS 4 melalui `@tailwindcss/vite`
- `@astrojs/cloudflare` untuk Cloudflare Workers
- pnpm dengan versi dipatok melalui `packageManager`
- Tanpa basis data, login, CMS, atau penyimpanan sesi

Versi dependensi di `package.json` ditulis sebagai versi tepat, bukan rentang mengambang. Versi Node dipatok melalui `engines.node` dan `.node-version`.

## Domain hanya di satu tempat

Domain final diisi pada konstanta `SITE_URL` di `astro.config.mjs`.

```js
const SITE_URL = '';
```

Selama kosong:

- proyek tetap dapat dibangun;
- tag canonical dan `og:url` yang membutuhkan URL absolut tidak diterbitkan;
- URL gambar Open Graph menggunakan jalur relatif;
- URL JSON-LD yang membutuhkan domain tidak diterbitkan;
- integrasi `@astrojs/sitemap` tidak diaktifkan;
- tidak ada domain contoh atau localhost yang disisipkan sebagai cadangan.

Setelah domain final tersedia, isi `SITE_URL` sekali lalu bangun ulang. Canonical, Open Graph, JSON-LD, dan sitemap akan mengikuti nilai `Astro.site`.

## Pengembangan

```bash
corepack enable
corepack prepare pnpm@11.23.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

## Pemeriksaan sebelum rilis

Jalankan dari lingkungan bersih:

```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm verify:dist
```

`pnpm verify:dist` memeriksa hasil build untuk domain contoh, `localhost`, `chrome-extension://`, serta memeriksa sitemap bila memang dihasilkan. Karena sitemap hanya aktif setelah `SITE_URL` diisi, tidak adanya sitemap ketika domain masih kosong adalah perilaku yang disengaja.

## Cloudflare Workers

Konfigurasi Worker sengaja minimal. Astro Cloudflare adapter menghasilkan konfigurasi server yang diperlukan pada saat build. Setelah akun Cloudflare terautentikasi, gunakan:

```bash
pnpm deploy
```

Proyek menetapkan `session: false` karena tidak menggunakan login atau sesi pengguna.

## Privasi dan Google Analytics

ID pengukuran GA4 adalah `G-HXM22WWPKP`. Skrip Google Analytics **tidak dimuat secara bawaan**. Pengguna harus mengaktifkan kategori analitik pada `/pengaturan-cookie/`. Preferensi disimpan secara lokal di peramban.

Google Maps tertanam adalah layanan pihak ketiga terpisah dan dijelaskan dalam Kebijakan Privasi serta Pengaturan Kuki.

## Foto

Berkas foto destinasi disimpan lokal untuk menghindari pemuatan gambar pihak ketiga saat halaman dibuka. Hak foto tidak dialihkan ke proyek ini. Sumber editorial dicantumkan pada halaman; untuk penggunaan produksi jangka panjang, pemilik situs tetap perlu memastikan dasar izin penggunaan setiap foto sesuai yurisdiksi dan kebutuhan penerbitannya.

## Sumber editorial utama

Konten destinasi memprioritaskan dan memeriksa silang sumber publik dari:

- Pemerintah Kota Batam — `batam.go.id`
- Dinas Kebudayaan dan Pariwisata Kota Batam — `disbudpar.batam.go.id`
- Kecamatan Batam Kota — `kecbatamkota.batam.go.id`
- Kementerian Pariwisata Republik Indonesia / Indonesia.travel — `indonesia.travel`

Informasi yang mudah berubah—transportasi, parkir, fasilitas, akses acara, dan biaya khusus—ditulis dengan penanda ketidakpastian dan anjuran verifikasi melalui kanal resmi sebelum perjalanan.
