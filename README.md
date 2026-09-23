# Panduan Alun-Alun Batam Centre

Situs informasi wisata independen dan nirlaba untuk **Alun-Alun Batam Centre / Dataran Engku Putri**, Batam, Kepulauan Riau. Seluruh antarmuka publik menggunakan Bahasa Indonesia dan berfokus pada konteks sejarah, akses, fasilitas publik, transportasi, etika berkunjung, serta perencanaan kunjungan tanpa rekomendasi komersial kepada pedagang tertentu.

## Tumpukan teknologi

- Astro 7 + TypeScript
- Tailwind CSS 4 melalui `@tailwindcss/vite`
- `@astrojs/cloudflare` untuk Cloudflare Workers
- pnpm dengan versi dipatok melalui `packageManager`
- Tanpa basis data, login, CMS, atau penyimpanan sesi

Versi dependensi di `package.json` ditulis sebagai versi tepat, bukan rentang mengambang. Versi Node dipatok melalui `engines.node` dan `.node-version`.

## Kanonisasi URL (wajib di Cloudflare)

Tag `<link rel="canonical">` sudah diterbitkan otomatis di setiap halaman dari `Astro.site`. Pengalihan tingkat domain **tidak** bisa dilakukan dari `_redirects` pada Workers static assets, jadi selesaikan dua hal berikut di dasbor Cloudflare:

1. **HTTP → HTTPS**: SSL/TLS → Edge Certificates → aktifkan **Always Use HTTPS** (301).
2. **www → apex**: pastikan ada record DNS `www` berstatus proxied, lalu buat **Redirect Rule**:
   - kondisi: `http.host eq "www.alunbatam.com"`
   - aksi: **Forwarding URL, status 301** → `https://alunbatam.com/<path>` (query string dipertahankan).

Halaman dokumen (`/kebijakan-privasi/`, `/ketentuan-layanan/`, `/pengaturan-cookie/`) memakai `noindex, follow` dan otomatis dikeluarkan dari sitemap supaya anggaran perayapan terkonsentrasi ke halaman panduan.

## Domain hanya di satu tempat

Domain final diisi pada konstanta `SITE_URL` di `astro.config.mjs`.

```js
const SITE_URL = 'https://alunbatam.com';
```

Selama kosong:

- proyek tetap dapat dibangun;
- tag canonical dan `og:url` yang membutuhkan URL absolut tidak diterbitkan;
- URL gambar Open Graph menggunakan jalur relatif;
- URL JSON-LD yang membutuhkan domain tidak diterbitkan;
- integrasi `@astrojs/sitemap` tidak diaktifkan;
- tidak ada domain contoh atau localhost yang disisipkan sebagai cadangan.

Setelah domain final tersedia, isi `SITE_URL` sekali lalu bangun ulang. Canonical, Open Graph, JSON-LD, dan sitemap akan mengikuti nilai `Astro.site`.

## Entitas atraksi terpusat

Fakta entitas—nama resmi, nama alternatif (`Batam Centre Park`, `Dataran Engku Putri`), alamat, Plus Code, koordinat, tautan peta, landmark sekitar, cuplikan rating, dan sumber resmi—didefinisikan sekali di `src/data/site.ts`. Nilai tersebut dipakai bersama oleh JSON-LD, judul/deskripsi, breadcrumb, peta tertanam, galeri, dan blok sumber. Pembangun JSON-LD berada di `src/lib/schema.ts`: `breadcrumbSchema`, `websiteSchema`, `webPageSchema`.

## PWA

- `public/site.webmanifest` — `start_url` `/`, `display: standalone`, tema `#0a4147`
- `public/sw.js` — permintaan navigasi network-first, aset statis cache-first
- Ikon `public/icons/icon-192.png`, `icon-512.png`, `icon-512-maskable.png` dibuat ulang dengan `python scripts/gen-pwa-icons.py`
- `public/_headers` menetapkan `no-cache` untuk `/sw.js`

## Modul cuaca

Prakiraan diambil di sisi server oleh Komponen Server (`server:defer`), lalu disimpan sementara di cache runtime sebelum ditampilkan. Antarmuka hanya menyajikan ringkasan praktis—suhu, terasa seperti, kelembapan, angin, curah hujan, indeks UV, prakiraan harian, serta saran kunjungan yang diturunkan dari angka tersebut—tanpa menyebut penyedia data atau detail teknis apa pun. Bila data tidak tersedia, halaman menampilkan pesan netral dan mengarahkan pembaca ke kanal peringatan dini resmi BMKG.

Berkas terkait: `src/lib/weather.ts` (pengambilan, pemetaan kode cuaca, skala Beaufort, penyusun saran) dan `src/components/WeatherSection.astro` (tampilan).

Saran disusun dengan aturan bersyarat—hujan, panas, angin, kabut, dan sinar ultraviolet—lalu dibagi ke empat blok: peringatan (hanya muncul bila relevan), pakaian, pengaturan kunjungan, dan barang bawaan. Bila ada peringatan, saran umum otomatis dipangkas agar pesan keselamatan tidak tenggelam. Kalimat diupayakan bebas istilah teknis: kelembapan dan peluang hujan diterjemahkan ke bahasa sehari-hari.

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

Perintah di atas menjalankan `astro build` lalu `wrangler deploy` dari direktori proyek. Konfigurasi Worker yang dipakai adalah berkas yang dihasilkan adapter pada saat build (`dist/server/wrangler.json`, direferensikan melalui `.wrangler/deploy/config.json`)—karena itu `wrangler.jsonc` di root sengaja dibiarkan minimal dan tidak perlu diisi `main` atau `assets` secara manual.

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
