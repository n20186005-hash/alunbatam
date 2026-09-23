import { faqId } from './faq';
import type { Content } from './types';

/**
 * Seluruh teks bahasa Indonesia. Nilai实体 (nama, alamat, koordinat, tautan)
 * tetap dibaca dari src/data/site.ts agar hanya ada satu sumber kebenaran.
 */
export const id: Content = {
  meta: {
    title: 'Alun Alun Batam Centre Batam — Panduan Wisata: Jam Buka, Fasilitas & Cara ke Sana',
    description:
      'Panduan Alun Alun Batam Centre (Batam Centre Park / Dataran Engku Putri) di Kota Batam, Kepulauan Riau: jam buka, lintasan lari dan fasilitas rekreasi, agenda acara, lokasi & peta, transportasi, serta prakiraan cuaca. Ruang publik gratis & terbuka.',
    siteName: 'Alun Alun Batam Centre Batam — Panduan Wisata',
    intro:
      'Panduan kunjungan Alun Alun Batam Centre (Batam Centre Park / Dataran Engku Putri) di Kota Batam.',
    geo: { country: 'Indonesia', province: 'Kepulauan Riau', city: 'Kota Batam' },
  },

  nav: {
    tentang: 'Tentang',
    cuaca: 'Cuaca',
    transportasi: 'Transportasi',
    faq: 'Pertanyaan umum',
    map: 'Buka peta',
    languageLabel: 'Bahasa',
    languageSwitch: 'Ganti bahasa',
  },

  hero: {
    eyebrow: 'Ruang publik · Batam Kota',
    titleLine1: 'Alun Alun Batam Centre',
    titleLine2: '(Batam Centre Park)',
    cityLine: 'Kota Batam · Kepulauan Riau · Indonesia',
    lede: 'Dataran Engku Putri (Batam Centre Park) adalah ruang temu warga di jantung pusat pemerintahan Batam—tempat olahraga, acara kota, rekreasi keluarga, dan jejak sejarah Melayu bertemu dalam satu bentang perkotaan.',
    photoCredit: 'Foto utama: Kementerian Pariwisata Republik Indonesia / Indonesia.travel.',
    ctaPlan: 'Rencanakan kunjungan',
    ctaHistory: 'Baca latar sejarah',
    factsTitle: 'Ringkas sebelum berangkat',
    facts: [
      { label: 'Nama lain', value: 'Dataran Engku Putri · Batam Centre Park' },
      { label: 'Karakter', value: 'Ruang publik kota' },
      { label: 'Akses peta', value: 'Tercantum sepanjang hari*' },
      { label: 'Tiket reguler', value: 'Tidak ditemukan' },
      { label: 'Saran durasi', value: '1–2 jam' },
      { label: 'Rating peta*', value: '4,5 · 5.811 ulasan' },
    ],
    factsNote:
      '*Jam fasilitas, acara, dan pembatasan akses dapat berbeda dari akses ruang terbuka. Rating berasal dari cuplikan ulasan pada layanan peta publik (September 2026) dan bersifat indikatif.',
    breadcrumbHome: 'Beranda',
  },

  factsStrip: [
    { n: '01', heading: 'Ruang kota', copy: 'Pusat pertemuan warga, olahraga, dan acara publik.' },
    { n: '02', heading: 'Jejak Melayu', copy: 'Nama Engku Putri mengingatkan pada tokoh Engku Hamidah.' },
    {
      n: '03',
      heading: 'Mudah dipadukan',
      copy: 'Berada di kawasan Batam Centre yang terhubung dengan moda kota dan dekat Batam Centre Ferry Terminal.',
    },
    {
      n: '04',
      heading: 'Nonkomersial',
      copy: 'Panduan ini tidak menerima komisi dan tidak merekomendasikan pedagang tertentu.',
    },
  ],

  tentang: {
    eyebrow: 'Mengenal tempat',
    h2: 'Alun Alun Batam Centre: bukan sekadar lapangan di Kota Batam.',
    lede: 'Alun Alun Batam Centre (Batam Centre Park) bekerja sebagai halaman bersama kota: terbuka, mudah dibaca, dan terus berubah mengikuti ritme masyarakat Batam.',
    welcome:
      'Selamat datang di Alun Alun Batam Centre, ruang publik yang dikenal luas sebagai Batam Centre Park atau Dataran Engku Putri. Berada di jantung Kota Batam, Kepulauan Riau, Indonesia, kawasan ini menjadi titik temu utama warga sekaligus pengunjung di pusat pemerintahan Batam.',
    hierarchy: 'Hierarki lokasi: Alun Alun Batam Centre → Kota Batam → Kepulauan Riau → Indonesia',
    quote:
      'Portal pariwisata nasional Indonesia menyebut Alun Alun Batam Centre (Batam Centre Park)—juga dikenal sebagai Dataran Engku Putri—sebagai ruang publik utama Kota Batam. Letaknya berada di pusat pemerintahan, dengan fungsi untuk berkumpul, bersantai, berolahraga, kegiatan keluarga, serta acara budaya, hiburan, dan olahraga.',
    cards: [
      {
        icon: '◎',
        title: 'Fungsi sipil yang hidup',
        body: 'Berita Pemerintah Kota Batam sepanjang 2026 menunjukkan Alun Alun Batam Centre (Batam Centre Park) / Dataran Engku Putri tetap dipakai untuk peluncuran layanan publik, kegiatan olahraga, dan pertemuan warga berskala besar.',
      },
      {
        icon: '◇',
        title: 'Ruang yang terus diperbarui',
        body: 'Lapangan olahraga di kawasan ini direvitalisasi pada 2026. Artinya, kondisi fisik dapat berubah dari foto lama; utamakan kondisi di lapangan ketika berkunjung.',
      },
    ],
  },

  sejarah: {
    eyebrow: 'Jejak nama',
    h2: 'Sejarah & makna Alun Alun Batam Centre: Engku Putri, nama dengan ingatan sejarah.',
    paragraphs: [
      'Publikasi Kecamatan Batam Kota menjelaskan bahwa sosok Engku Putri bernama Engku Hamidah, putri Raja Haji dalam tradisi Kerajaan Melayu Riau–Lingga. Ia dikenang sebagai tokoh yang berwibawa, memahami urusan ekonomi dan politik, serta memegang peran adat kerajaan.',
      'Nama itu membuat alun-alun memiliki lapisan makna yang lebih dalam daripada sekadar ruang terbuka: ia menghubungkan pusat pemerintahan Batam masa kini dengan memori sejarah Melayu–Bugis di Kepulauan Riau.',
    ],
    note: 'Catatan sumber: bagian sejarah ini mengikuti publikasi resmi Kecamatan Batam Kota. Kami tidak menambahkan legenda atau detail biografis yang tidak dapat dilacak ke sumber publik yang jelas.',
  },

  history: {
    eyebrow: 'Latar sejarah kota',
    h2: 'Dari jalur pelayaran Melayu ke halaman kota modern.',
    lede: 'Bagian ini merangkum lapisan sejarah yang membuat nama dan posisi alun-alun dapat dipahami: mengapa ia berada di pusat pemerintahan, dan mengapa namanya merujuk pada tokoh Melayu.',
    timeline: [
      {
        era: 'Masa kesultanan Melayu',
        text: 'Kepulauan Riau berada dalam jaringan kesultanan Melayu yang menguasai jalur pelayaran dan perdagangan di sekitar Selat Malaka. Nama-nama bangsawan dari periode ini, termasuk tokoh yang dikenang sebagai Engku Putri dan Raja Haji, terus dipakai dalam penamaan ruang publik masa kini.',
      },
      {
        era: 'Era pelabuhan & kawasan industri',
        text: 'Pada paruh akhir abad ke-20, Batam dikembangkan sebagai kawasan industri dan pelabuhan. Pertumbuhan pesat menghadirkan pendatang dari berbagai daerah, sehingga kota ini menjadi masyarakat urban yang majemuk.',
      },
      {
        era: 'Pembentukan pusat pemerintahan',
        text: 'Batam Centre dirancang sebagai pusat pemerintahan: kantor-kantor daerah, masjid agung, museum, dan ruang terbuka ditempatkan dalam satu kawasan yang saling berdekatan. Desain seperti ini membuat urusan administratif dan ruang publik warga berada pada poros yang sama.',
      },
      {
        era: 'Masa kini',
        text: 'Dataran Engku Putri (Batam Centre Park) berfungsi sebagai ruang harian warga: olahraga pagi, kegiatan keluarga, peluncuran program pemerintah, hingga konser dan perayaan kota.',
      },
    ],
    notes: [
      {
        title: 'Mengapa nama Melayu dipakai untuk ruang modern',
        text: 'Penamaan Dataran Engku Putri bukan sekadar label: ia menghubungkan pusat pemerintahan yang serba baru dengan memori sejarah Melayu di Kepulauan Riau. Dalam banyak kota di Nusantara, alun-alun memang ditempatkan dekat pusat kekuasaan sebagai penanda bahwa ruang itu milik bersama.',
      },
      {
        title: 'Alun-alun sebagai perangkat kota',
        text: 'Di kota tropis, ruang terbuka berfungsi ganda: menampung kegiatan massal, memberi teduh dan sirkulasi udara, serta menjadi titik kumpul yang aman saat ada perayaan. Karena itu wajar bila fasilitasnya terus direvitalisasi mengikuti kebutuhan warga.',
      },
      {
        title: 'Konteks Museum Batam Raja Ali Haji',
        text: 'Museum kota di kawasan ini menyimpan konteks sejarah Kepulauan Riau—dari tradisi Melayu sampai periode kolonial. Mengunjunginya sebelum atau sesudah Alun Alun Batam Centre membuat kunjungan Anda memiliki alur cerita, bukan hanya foto.',
      },
      {
        title: 'Konteks Masjid Agung Batam',
        text: 'Masjid agung kota berdiri sebagai penanda kawasan sekaligus pengingat bahwa sekitar alun-alun terdapat fungsi keagamaan aktif. Waktu ibadah dan kegiatan keagamaan memengaruhi kepadatan serta kebisingan yang pantas di sekitarnya.',
      },
    ],
    disclaimer:
      'Catatan penulisan: uraian di atas disusun dari publikasi resmi dan rujukan sejarah kota yang dapat dilacak. Cerita rakyat dan versi tuturan yang tidak memiliki rujukan tertulis tidak kami tambahkan sebagai fakta; bila suatu waktu terdapat versi lain, kami mencantumkannya sebagai tradisi lisan, bukan kepastian sejarah.',
  },

  gallery: {
    eyebrow: 'Galeri lapangan',
    h2: 'Galeri Alun Alun Batam Centre: wajah ruang publik Batam.',
    note: 'Foto sengaja disimpan lokal agar halaman cepat dan tidak bergantung pada pemuat gambar pihak ketiga. Hak foto tetap pada pemilik masing-masing.',
    images: [
      {
        src: '/images/engku-putri-panorama.jpg',
        alt: 'Dataran Engku Putri (Alun Alun Batam Centre) — panorama kawasan ruang publik di Kota Batam, Indonesia',
        caption: 'Panorama kawasan · sumber editorial: WowKeren',
      },
      {
        src: '/images/engku-putri-senja.jpg',
        alt: 'Dataran Engku Putri (Batam Centre Park) — suasana menjelang senja di Kota Batam',
        caption: 'Suasana senja · arsip pariwisata lokal',
      },
      {
        src: '/images/engku-putri-udara.jpg',
        alt: 'Alun Alun Batam Centre (Batam Centre Park) — tampak udara kawasan Batam Centre, Kota Batam',
        caption: 'Tampak udara · arsip editorial detikInet',
      },
    ],
  },

  plan: {
    eyebrow: 'Rencana kunjungan',
    h2: 'Datang dengan ekspektasi yang tepat.',
    lede: 'Ini adalah ruang publik aktif, bukan objek wisata berpagar. Pengalaman terbaik datang dari membaca cuaca, kegiatan kota, dan fasilitas yang tersedia pada hari kunjungan.',
    cards: [
      { icon: '◷', title: 'Waktu terbaik', body: 'Pagi sebelum terik atau menjelang senja. Malam lebih hidup, terutama saat ada kegiatan publik.' },
      { icon: '⌛', title: 'Durasi', body: 'Saran 1–2 jam untuk berjalan santai, berfoto, dan memahami kawasan.' },
      { icon: 'Rp', title: 'Tiket / biaya', body: 'Tidak ditemukan tiket masuk reguler. Acara, parkir, atau layanan pihak ketiga dapat berbayar.' },
      { icon: 'P', title: 'Parkir', body: 'Ikuti rambu dan petugas. Saat acara besar, zona parkir dan akses kendaraan dapat diatur khusus.' },
    ],
  },

  weather: {
    eyebrow: 'Cuaca & prakiraan',
    h2: 'Perlu bawa payung hari ini?',
    intro:
      'Ringkasan kondisi terkini dan prakiraan beberapa hari ke depan untuk kawasan Batam Centre, diterjemahkan menjadi keputusan yang bisa langsung dilakukan.',
    updatedPrefix: 'Diperbarui',
    todayRange: 'Suhu hari ini',
    feelsLike: 'Terasa seperti',
    rainChance: 'Peluang hujan',
    wind: 'Angin',
    precipitation: 'Curah hujan',
    uvIndex: 'Indeks UV hari ini',
    forecastTitle: 'Prakiraan harian',
    today: 'Hari ini',
    rainPrefix: 'hujan',
    riskTitle: '⚠ Perlu diperhatikan',
    riskNote:
      'Catatan ini diturunkan dari prakiraan, bukan peringatan dini resmi. Untuk peringatan resmi, rujuk kanal informasi BMKG.',
    outfitTitle: '✅ Pakaian',
    planTitle: '🗓 Pengaturan kunjungan',
    itemsTitle: '🎒 Barang bawaan',
    fallback:
      'Prakiraan cuaca belum dapat ditampilkan saat ini. Untuk perencanaan perjalanan, periksa prakiraan pada kanal resmi BMKG atau aplikasi cuaca tepercaya sebelum berangkat.',
    footerNote:
      'Peluang hujan bukan kepastian hujan; angka prakiraan diperbarui berkala sepanjang hari dan dapat berubah. Untuk peringatan dini cuaca resmi, gunakan kanal informasi BMKG.',
  },

  services: {
    eyebrow: 'Fasilitas & kebutuhan praktis',
    h2: 'Yang perlu dicari, bukan diasumsikan.',
    lede: 'Karena fasilitas ruang publik dapat berganti, daftar berikut memakai pendekatan konservatif: kami memberi tahu jenis layanan yang perlu dicari tanpa mengiklankan operator tertentu.',
    groups: [
      {
        title: 'Sanitasi & air minum',
        note: 'Fasilitas dasar yang paling sering dicari pengunjung.',
        items: [
          { icon: '🚻', title: 'Toilet umum', body: 'Periksa fasilitas sanitasi publik terdekat saat tiba; jam akses dapat berbeda.' },
          { icon: '💧', title: 'Air minum', body: 'Bawa botol isi ulang sendiri. Keberadaan titik isi ulang dapat berubah, jadi jangan menjadikannya satu-satunya sumber air.' },
          { icon: '🧼', title: 'Kebersihan tangan', body: 'Sediakan tisu basah atau pembersih tangan, terutama setelah menggunakan fasilitas umum atau bermain di area terbuka.' },
        ],
      },
      {
        title: 'Akses & parkir',
        note: 'Ruang publik aktif: pengaturan bisa berubah saat ada kegiatan.',
        items: [
          { icon: '♿', title: 'Aksesibilitas', body: 'Permukaan alun-alun relatif terbuka, tetapi kondisi jalur landai, trotoar, dan penyeberangan perlu dicek di lapangan.' },
          { icon: '🅿', title: 'Parkir kendaraan pribadi', body: 'Ikuti rambu dan petugas. Saat acara besar, zona parkir dan akses kendaraan dapat diatur khusus.' },
          { icon: '🚐', title: 'Turunkan penumpang & rombongan', body: 'Tentukan titik turun yang tidak menghalangi jalur lalu lintas atau akses darurat sebelum kendaraan berhenti.' },
          { icon: '🚶', title: 'Trotoar & penyeberangan', body: 'Gunakan penyeberangan resmi. Arus kendaraan di jalan sekitar kawasan pemerintahan dapat meningkat pada jam kerja.' },
        ],
      },
      {
        title: 'Makan, belanja & menginap',
        note: 'Kami menjelaskan jenis layanan, bukan nama usaha tertentu.',
        items: [
          { icon: '🍽', title: 'Makan & minum', body: 'Cari kios UMKM saat acara, warung, rumah makan lokal, atau area makan umum di kawasan Batam Centre.' },
          { icon: '⌂', title: 'Akomodasi', body: 'Pilih hotel, penginapan kota, atau apartemen sewa yang legal di area Batam Centre sesuai kebutuhan mobilitas.' },
          { icon: '▣', title: 'Belanja kebutuhan', body: 'Minimarket, pasar swalayan, dan pusat kebutuhan harian tersedia di kawasan perkotaan sekitar.' },
          { icon: '✚', title: 'Apotek & kebutuhan harian', body: 'Apotek dan toko perlengkapan dasar berada di jaringan komersial kota; simpan obat pribadi di tas Anda sendiri.' },
        ],
      },
      {
        title: 'Olahraga & rekreasi',
        note: 'Menjawab pertanyaan pencarian: tempat lari, jogging, dan rekreasi terdekat.',
        items: [
          { icon: '🏃', title: 'Lintasan lari / jogging', body: 'Tepian lapangan membentuk lintasan mengelilingi ruang terbuka yang biasa dipakai untuk lari santai dan senam pagi. Periksa kondisi permukaan dan penerangan sebelum memulai.' },
          { icon: '⚽', title: 'Lapangan olahraga', body: 'Fasilitas lapangan di kawasan ini direvitalisasi pada 2026. Jam pakai dapat diatur untuk kegiatan komunitas, jadi cek situasi di tempat.' },
          { icon: '🧒', title: 'Area bermain anak', body: 'Portal pariwisata nasional menyebut tersedianya area bermain. Awasi anak dan pilih jam yang tidak terlalu terik.' },
          { icon: '🪑', title: 'Tempat duduk & teduh', body: 'Cari bangku atau tepi area berteduh untuk jeda. Bila tidak menemukan yang kosong, alas duduk sendiri bisa menjadi cadangan.' },
        ],
      },
      {
        title: 'Kendaraan & keadaan darurat',
        note: 'Rencanakan lebih awal sebelum bergantung pada satu titik layanan.',
        items: [
          { icon: '⛽', title: 'Bahan bakar', body: 'SPBU berada di jaringan jalan kota; cek rute sebelum berkendara karena arus lalu lintas sekitar pusat kota dapat berubah.' },
          { icon: '⚡', title: 'Pengisian kendaraan listrik', body: 'Ketersediaan pengisian publik berkembang; periksa aplikasi atau peta jaringan resmi sebelum bergantung pada satu titik.' },
          { icon: '🏥', title: 'Layanan kesehatan', body: 'Kenali fasilitas kesehatan terdekat dan nomor darurat setempat sebelum berangkat, terutama bila membawa lansia atau anak.' },
          { icon: '☎', title: 'Keamanan & titik bantuan', body: 'Saat acara besar, catat pos petugas atau titik informasi yang terlihat sebagai rujukan bila membutuhkan bantuan.' },
        ],
      },
    ],
    commercialNote:
      'Sikap nonkomersial: panduan ini tidak menerima komisi, tidak menjual pemesanan, dan tidak menyebut nama usaha tertentu. Pilihan terbaik tetap berasal dari pengecekan Anda sendiri terhadap kebersihan, harga, jam buka, dan keamanan pada hari kunjungan.',
  },

  transport: {
    eyebrow: 'Transportasi rinci',
    h2: 'Transportasi ke Alun Alun Batam Centre: menuju pusat Batam tanpa tebakan.',
    lede: 'Gunakan nama “Alun Alun Batam Centre (Batam Centre Park)” atau “Dataran Engku Putri” pada aplikasi peta. Titik berada di Jl. Engku Putri, Teluk Tering, Kecamatan Batam Kota—berdekatan dengan kawasan Batam Centre Ferry Terminal.',
    modesTitle: 'Pilihan moda',
    modes: [
      { mode: 'Taksi resmi / angkutan berbasis aplikasi', best: 'Pengunjung pertama kali, rombongan kecil, bawaan banyak', note: 'Paling mudah ditunjuk titiknya; tetap tentukan titik turun yang aman.' },
      { mode: 'Trans Batam (bus kota)', best: 'Perjalanan hemat, tidak terburu-buru', note: 'Beberapa koridor berujung atau melintasi Batam Centre; jadwal dapat berubah.' },
      { mode: 'Kendaraan pribadi / sewa', best: 'Keluarga, perjalanan lanjut ke objek lain', note: 'Perhatikan pengaturan parkir saat ada kegiatan kota.' },
      { mode: 'Jalan kaki dari Batam Centre', best: 'Datang dengan feri, tanpa bawaan berat', note: 'Cocok bila cuaca teduh dan trotoar tidak sedang tertutup kegiatan.' },
      { mode: 'Antar-jemput rombongan', best: 'Kegiatan sekolah, komunitas, atau kantor', note: 'Koordinasikan titik turun dan waktu kumpul sebelum berangkat.' },
    ],
    routes: [
      {
        icon: '✈',
        title: 'Dari Bandara Internasional Hang Nadim',
        body: 'Taksi resmi atau angkutan berbasis aplikasi adalah pilihan langsung. Pemerintah Kota Batam pada Mei 2026 menyatakan Koridor Nongsa–Batam Centre sedang disiapkan untuk terintegrasi dengan bandara. Karena statusnya merupakan pengembangan layanan, periksa rute dan halte terbaru sebelum berangkat. Bandara berada di sisi timur Pulau Batam, sehingga waktu tempuh darat sangat bergantung pada arus lalu lintas jam sibuk.',
      },
      {
        icon: '▰',
        title: 'Dengan Trans Batam',
        body: 'Profil transportasi kota mencatat sejumlah koridor berujung atau melintasi Batam Centre, termasuk dari Sekupang, Tanjung Uncang, Jodoh, Tanjung Piayu, dan Nongsa. Cocok untuk perjalanan yang tidak terburu-buru; cek jadwal, halte, dan pembayaran terkini pada kanal resmi sebelum naik. Siapkan uang kecil dan waktu tunggu tambahan bila bepergian pada jam kerja.',
      },
      {
        icon: '●',
        title: 'Taksi & angkutan berbasis aplikasi',
        body: 'Tetapkan titik turun di sisi jalan yang aman, hindari berhenti di jalur lalu lintas, dan konfirmasi identitas kendaraan sebelum naik. Untuk taksi, gunakan antrean atau operator resmi dan pastikan skema tarif dipahami sebelum perjalanan. Bila sinyal seluler lemah, sebutkan patokan yang jelas: nama alun-alun atau gedung pemerintahan terdekat.',
      },
      {
        icon: '≈',
        title: 'Dari Batam Centre Ferry Terminal',
        body: 'Batam Centre Ferry Terminal dan Alun Alun Batam Centre (Batam Centre Park) sama-sama berada di kawasan inti Batam Centre. Pilihan perjalanan dapat berupa perjalanan singkat dengan taksi/angkutan aplikasi atau berjalan bila kondisi cuaca, barang bawaan, trotoar, dan kemampuan fisik memungkinkan. Gunakan peta untuk memilih penyeberangan yang aman menuju Dataran Engku Putri.',
      },
      {
        icon: '▣',
        title: 'Kendaraan pribadi & parkir',
        body: 'Datang lebih awal bila ingin parkir dekat dengan pintu masuk lapangan. Saat ada kegiatan berskala besar, petugas dapat menutup sebagian ruas jalan atau mengatur zona parkir khusus; ikuti rambu dan arahan di tempat. Hindari memarkir kendaraan pada bahu jalan, jalur pejalan kaki, atau akses darurat.',
      },
      {
        icon: '⌖',
        title: 'Jalan kaki & aksesibilitas',
        body: 'Kawasan ini berada di pusat pemerintahan dengan jalan berarus sedang. Gunakan trotoar dan penyeberangan resmi; bila membawa kursi roda atau kereta bayi, cek dulu kondisi jalur landai dan ramp di titik yang Anda lewati. Untungnya, jarak antar-titik di Batam Centre relatif pendek sehingga perjalanan singkat dapat dipecah dengan jeda berteduh.',
      },
      {
        icon: '◷',
        title: 'Waktu tempuh & jam sibuk',
        body: 'Pagi dan sore hari kerja membawa arus kendaraan lebih padat di jalan utama menuju pusat pemerintahan. Untuk kunjungan santai, datanglah di luar jam tersebut atau menjelang senja. Bila jadwal Anda terkait feri, tambahkan margin waktu untuk penyeberangan jalan dan antrean kendaraan.',
      },
    ],
    tipsTitle: 'Tips praktis perjalanan',
    tips: [
      'Simpan nama “Alun Alun Batam Centre (Batam Centre Park)” dan “Dataran Engku Putri” sebagai dua kata kunci pencarian—keduanya merujuk titik yang sama.',
      'Unduh peta luring atau tangkap layar rute sebelum berangkat bila sinyal seluler di perjalanan tidak stabil.',
      'Konfirmasi identitas kendaraan dan tujuan sebelum naik; sebutkan patokan gedung pemerintahan bila nama alun-alun kurang dikenal pengemudi.',
      'Siapkan uang kecil untuk parkir, air minum, atau kios kecil yang mungkin tidak menerima pembayaran nontunai.',
      'Bila hujan deras tiba-tiba, tunda penyeberangan jalan dan berteduh di bangunan sekitar sampai arus air di tepi jalan turun.',
    ],
  },

  location: {
    eyebrow: 'Peta lokasi',
    h2: 'Lokasi & cara berkunjung ke Alun Alun Batam Centre di Kota Batam: titik rujukan di Teluk Tering.',
    lede: 'Peta berasal dari layanan peta publik Google Maps dan dimuat hanya pada bagian ini. Bahasa serta wilayah peta tertanam disetel ke Indonesia.',
    hierarchy: 'Alun Alun Batam Centre → Kota Batam → Kepulauan Riau → Indonesia',
    mapBtn: 'Buka di Google Maps',
    govBtn: 'Dinas Kebudayaan dan Pariwisata Kota Batam',
    govNote:
      'Untuk pembaruan resmi dan informasi pariwisata daerah setempat, rujuk portal ini atau portal nasional Pemerintah Indonesia.',
  },

  season: {
    eyebrow: 'Strategi musim',
    h2: 'Empat pola musim, satu pendekatan kunjungan.',
    lede: 'Tabel berikut merangkum karakter cuaca yang lazim ditemui di pesisir Kepulauan Riau sepanjang tahun. Ini gambaran rata-rata jangka panjang, bukan ramalan hari tertentu—tahun tertentu dapat menyimpang dari pola umum.',
    headers: ['Periode', 'Karakter cuaca', 'Strategi kunjungan', 'Perlengkapan'],
    rows: [
      {
        period: 'Januari – Maret',
        weather: 'Awal tahun masih lembap; hujan singkat dapat muncul pada sore hari, diselingi langit cerah.',
        strategy: 'Datang pagi untuk aktivitas lapangan; simpan rencana dalam ruangan sebagai cadangan bila hujan turun.',
        gear: 'Payung lipat, alas kaki cepat kering',
      },
      {
        period: 'April – Juni',
        weather: 'Periode peralihan: terik di siang hari, curah hujan mulai berkurang dibanding awal tahun.',
        strategy: 'Fokus pada kunjungan menjelang senja; siang hari cocok untuk mampir singkat ke museum atau ruang tertutup.',
        gear: 'Tabir surya, air minum, topi',
      },
      {
        period: 'Juli – September',
        weather: 'Biasanya termasuk periode yang lebih kering dengan angin cukup terasa di area terbuka.',
        strategy: 'Waktu terbaik untuk berjalan jauh, fotografi lanskap, dan kegiatan keluarga; tetap waspada terhadap hujan mendadak.',
        gear: 'Pelindung matahari, jaket tipis untuk ruang ber-AC',
      },
      {
        period: 'Oktober – Desember',
        weather: 'Curah hujan cenderung meningkat; hujan deras dapat turun bersama angin kencang.',
        strategy: 'Pantau prakiraan pada hari yang sama, hindari area terbuka saat badai petir, dan pilih rute dengan banyak titik berteduh.',
        gear: 'Jas hujan, pelindung tas, alas kaki anti-selip',
      },
    ],
    notes: [
      'Batam beriklim tropis pesisir: suhu harian bergerak di kisaran hangat sepanjang tahun, dengan kelembapan tinggi yang membuat siang terasa lebih terik daripada angka suhu.',
      'Hujan di kawasan ini umumnya turun singkat dan deras, bukan berhari-hari. Karena itu, rencana harian lebih berguna dibanding rencana musiman.',
      'Angin dan ombak dapat memengaruhi jadwal feri; bila kunjungan Anda terkait penyeberangan, periksa pengumuman operator sebelum berangkat.',
    ],
    footnote: 'Pola musim di atas disusun sebagai ringkasan umum untuk perencanaan. Untuk prakiraan dan peringatan dini resmi, rujuk kanal informasi',
    official: 'BMKG',
  },

  itineraries: {
    eyebrow: 'Rute tematik',
    h2: 'Tiga cara mengunjungi ruang yang sama.',
    lede: 'Rute berikut disusun berdasarkan kebutuhan rombongan, bukan urutan yang baku. Pilih yang paling dekat dengan komposisi dan ritme perjalanan Anda.',
    audiences: [
      {
        kicker: '01',
        title: 'Keluarga dengan anak',
        audience: 'Membawa balita hingga anak usia sekolah',
        paceLabel: 'Ritme',
        pace: '60–90 menit dengan jeda',
        stopsLabel: 'Alur',
        stops: [
          'Pintu masuk lapangan',
          'Area lapang terbuka',
          'Titik bermain yang sedang dibuka',
          'Area teduh untuk snack',
          'Museum Batam Raja Ali Haji sebagai cadangan hujan',
        ],
        caution: 'Awasi anak di dekat jalan dan kendaraan; siapkan air minum serta pelindung matahari.',
      },
      {
        kicker: '02',
        title: 'Fotografi & lanskap kota',
        audience: 'Pengunjung yang mengejar cahaya dan komposisi',
        paceLabel: 'Ritme',
        pace: '90–150 menit, pagi atau menjelang senja',
        stopsLabel: 'Alur',
        stops: [
          'Sumbu pandang lapangan',
          'Tepi kawasan pemerintahan',
          'Garis langit gedung dan masjid',
          'Keramaian saat ada kegiatan',
          'Titik tinggi sekitar Batam Centre',
        ],
        caution: 'Minta izin sebelum memotret orang; periksa aturan setempat sebelum menerbangkan drone.',
      },
      {
        kicker: '03',
        title: 'Kunjungan rendah tenaga',
        audience: 'Lansia, pengguna kursi roda, atau pemulihan cedera',
        paceLabel: 'Ritme',
        pace: '45–60 menit, banyak jeda duduk',
        stopsLabel: 'Alur',
        stops: [
          'Titik turun kendaraan',
          'Jalur utama yang paling rata',
          'Area berbangku teduh',
          'Ruang dalam ruangan',
          'Kembali ke titik turun',
        ],
        caution: 'Periksa kondisi ramp dan trotoar di tempat; hindari jam terik dan bawa obat pribadi.',
      },
    ],
    halfDay: {
      label: 'Rute setengah hari',
      title: '2–3 jam di pusat kota',
      lede: 'Cocok bila Anda datang dengan feri dan hanya punya jeda singkat sebelum melanjutkan perjalanan.',
      steps: [
        'Tiba, orientasi, dan cek kondisi lapangan (15 menit)',
        'Berjalan memutari Alun Alun Batam Centre sambil membaca penanda lokasi (30 menit)',
        'Duduk, berfoto, dan menikmati aktivitas warga (30 menit)',
        'Museum Batam Raja Ali Haji atau ruang tertutup terdekat (45 menit)',
        'Makan/minum di sekitar Batam Centre lalu kembali (30 menit)',
      ],
    },
    fullDay: {
      label: 'Rute sehari penuh',
      title: '5–7 jam alun-alun + sekitarnya',
      lede: 'Menggabungkan ruang publik dengan museum dan landmark keagamaan dalam satu hari, dengan jeda saat matahari paling terik.',
      steps: [
        'Pagi: Alun Alun Batam Centre saat udara masih sejuk (60 menit)',
        'Museum Batam Raja Ali Haji untuk konteks sejarah kota (60–90 menit)',
        'Makan siang; pilih sendiri tempatnya sesuai kebutuhan (60 menit)',
        'Masjid Agung Batam dan landmark kota sekitarnya (45–60 menit)',
        'Siang terik: jeda di ruang tertutup atau berteduh (30–60 menit)',
        'Menjelang senja: kembali ke alun-alun untuk suasana malam (60 menit)',
      ],
    },
  },

  events: {
    eyebrow: 'Agenda & acara',
    h2: 'Ada acara hari ini? Begini cara memastikannya.',
    lede: 'Jadwal kegiatan di ruang publik berubah cepat. Karena itu kami tidak menyalin daftar acara harian; kami merangkum jenis kegiatan yang lazim digelar dan menunjukkan kanal resmi untuk mengecek tanggal serta jam pastinya.',
    checks: [
      {
        title: 'Jenis kegiatan yang lazim digelar',
        body: 'Dataran Engku Putri berfungsi sebagai panggung kota: pemerintah daerah memakainya untuk program layanan publik, kegiatan olahraga, sampai perayaan berskala besar.',
      },
      {
        title: 'Dampaknya bagi pengunjung',
        body: 'Saat ada acara, zona parkir dan akses kendaraan diatur khusus, sebagian area dapat tertutup panggung atau tenda, dan tingkat kebisingan meningkat—terutama menjelang malam.',
      },
      {
        title: 'Cara datang saat ada acara',
        body: 'Datang lebih awal dari jadwal, ikuti arahan petugas, tentukan titik kumpul bersama rombongan, dan simpan jalur keluar yang tidak menghalangi akses darurat.',
      },
    ],
    kindsTitle: 'Contoh jenis kegiatan',
    kinds: [
      'Peluncuran program dan layanan publik pemerintah kota',
      'Kegiatan olahraga massal: senam, lari, dan turnamen lapangan',
      'Pertunjukan, konser, dan perayaan hari besar',
      'Nonton bareng pertandingan besar yang diselenggarakan pemerintah daerah',
      'Kegiatan UMKM, bazar, dan pameran komunitas',
    ],
    channelsTitle: 'Kanal resmi untuk jadwal pasti',
    channels: [
      { label: 'Dinas Kebudayaan dan Pariwisata Kota Batam', href: 'https://disbudpar.batam.go.id/', note: 'pengumuman kegiatan dan pariwisata kota' },
      { label: 'Portal Pemerintah Kota Batam', href: 'https://batam.go.id/', note: 'agenda resmi dan pengumuman layanan publik' },
    ],
    footnote:
      'Kami hanya merangkum pola umum kegiatan berdasarkan pemberitaan resmi. Untuk tanggal, jam, dan ketentuan masuk—termasuk bila acara tertentu berbayar atau memerlukan pendaftaran—selalu rujuk pengumuman penyelenggara.',
  },

  surroundings: {
    kuliner: {
      eyebrow: 'Kuliner sekitar',
      h2: 'Kenali jenisnya, pilih sendiri tempatnya.',
      lede: 'Sebagai panduan nirlaba, kami tidak mengarahkan pengunjung ke pedagang tertentu. Di Batam Centre, cari kategori yang sesuai kebutuhan dan cek kebersihan, harga, serta jam buka sendiri.',
      pills: ['Warung lokal', 'Kios UMKM saat acara', 'Rumah makan keluarga', 'Pusat jajanan', 'Hidangan laut', 'Makanan Melayu Kepulauan'],
      note: 'Jenis hidangan khas Kepulauan Riau yang dapat dicari antara lain mie tarempa, olahan gonggong, hidangan laut, dan ragam masakan Melayu. Ketersediaan tergantung tempat dan hari.',
    },
    landmarks: {
      eyebrow: 'Sekitar alun-alun',
      h2: 'Landmark & atraksi di sekitar Batam Centre Park: tiga konteks publik untuk memperpanjang kunjungan.',
      lede: 'Saat mengunjungi Alun Alun Batam Centre, pengunjung dapat dengan mudah menjelajahi landmark bersejarah dan titik menarik di sekitarnya, termasuk Museum Batam Raja Ali Haji, Masjid Agung Batam, serta Batam Centre Ferry Terminal.',
      items: [
        { name: 'Museum Batam Raja Ali Haji', copy: 'Museum publik untuk menambah konteks sejarah kota dan Kepulauan Riau.' },
        { name: 'Landmark Welcome to Batam', copy: 'Tanda kota yang menjadi titik orientasi visual di kawasan Batam Centre.' },
        { name: 'Masjid Agung Batam', copy: 'Landmark keagamaan dan arsitektur kota; hormati tata tertib serta waktu ibadah.' },
      ],
      note: 'Jarak, jam buka, dan akses dapat berubah. Periksa kanal resmi atau peta sebelum menggabungkan beberapa tempat dalam satu kunjungan.',
    },
  },

  ethics: {
    eyebrow: 'Etika ruang bersama',
    h2: 'Datang sebagai tamu, gunakan sebagai warga.',
    items: [
      { kicker: '01', title: 'Jaga fungsi publik', body: 'Jangan menutup jalur pejalan kaki, lapangan olahraga, akses darurat, atau area yang sedang dipakai kegiatan masyarakat.' },
      { kicker: '02', title: 'Bawa pulang sampah', body: 'Gunakan tempat sampah yang tersedia. Bila penuh, simpan sampah hingga menemukan fasilitas pembuangan yang layak.' },
      { kicker: '03', title: 'Hormati acara & ibadah', body: 'Patuhi pengaturan petugas dan jaga volume suara, terutama bila kawasan sekitar sedang digunakan untuk kegiatan resmi atau keagamaan.' },
    ],
  },

  responsibility: {
    eyebrow: 'Edukasi & tanggung jawab pengunjung',
    h2: 'Ruang publik bekerja bila pengunjung ikut menjaganya.',
    lede: 'Bagian ini menjelaskan alasan di balik aturan yang sering dianggap sepele—dari genangan air hingga volume musik—supaya keputusan di lapangan bisa diambil dengan pemahaman, bukan sekadar mengikuti larangan.',
    topics: [
      {
        icon: '◍',
        title: 'Mengapa kota menyediakan alun-alun',
        body: 'Ruang terbuka publik bekerja sebagai “ruang tamu” kota: tempat kelompok yang berbeda bertemu tanpa harus membayar, tempat olahraga pagi, area teduh yang menurunkan panas permukaan, sekaligus ruang berkumpul aman saat ada kegiatan berskala besar. Memahami fungsi ini membuat kunjungan terasa lebih bermakna daripada sekadar berfoto.',
      },
      {
        icon: '≈',
        title: 'Air hujan, genangan, dan drainase',
        body: 'Hujan tropis turun cepat dan deras. Genangan singkat di titik rendah adalah hal yang wajar, dan biasanya surut setelah saluran air bekerja. Sampah kecil—bungkus, sedotan, puntung—adalah penyumbat utama saluran; karena itu jangan membuang apa pun ke selokan atau kolam di sekitar kawasan.',
      },
      {
        icon: '❀',
        title: 'Pohon peneduh & satwa perkotaan',
        body: 'Pohon di sekeliling lapangan memberi teduh yang menentukan nyaman tidaknya kunjungan siang hari. Kawasan ini juga menjadi habitat burung perkotaan dan serangga penyerbuk. Nikmati dari jauh: jangan memetik tanaman, mengganggu sarang, atau memberi makan satwa liar.',
      },
      {
        icon: '◔',
        title: 'Berbagi suara dengan tetangga kawasan',
        body: 'Alun-alun dikelilingi kantor pemerintahan, tempat ibadah, dan permukiman. Jaga volume musik dan pengeras suara, terutama menjelang waktu ibadah dan pada jam kerja. Kegiatan berskala besar umumnya memerlukan izin dan pengaturan petugas.',
      },
      {
        icon: '♺',
        title: 'Sampah & jejak kunjungan',
        body: 'Gunakan tempat sampah yang tersedia; bila penuh, simpan sampah Anda sampai menemukan titik pembuangan lain. Memisahkan sampah kering dan basah membantu petugas kebersihan kota yang bekerja setelah acara selesai.',
      },
      {
        icon: '⚑',
        title: 'Keamanan pribadi & kesiapan',
        body: 'Simpan barang berharga di tas tertutup, terutama saat kawasan ramai acara. Pada malam hari, pilih jalur yang terang dan ramai. Nomor darurat terpadu di Indonesia adalah 112; simpan juga kontak pendamping perjalanan Anda sebelum berangkat.',
      },
    ],
    summary:
      'Ringkasnya: datang sebagai tamu, gunakan sebagai warga. Bila suatu fasilitas sedang tidak tersedia atau suatu area sedang dipakai kegiatan warga, anggap itu bagian dari fungsi ruang publik—bukan kekurangan layanan wisata.',
  },

  faq: {
    eyebrow: 'Pertanyaan umum',
    h2: 'Pertanyaan sebelum berangkat.',
    lede: 'Jawaban disusun konservatif. Jika sumber publik tidak memastikan suatu fasilitas, kami menyatakannya sebagai hal yang perlu diperiksa, bukan membuat asumsi.',
    items: faqId,
  },

  sources: {
    eyebrow: 'Metodologi & sumber',
    h2: 'Sumber terbuka, klaim yang bisa dilacak.',
    lede: 'Setiap fakta entitas—nama, alamat, koordinat, dan akses—diperiksa silang antara kanal pemerintah, portal pariwisata nasional, dan data peta publik sebelum ditulis.',
    principle:
      'Prinsip editorial: bila data bisa cepat berubah—misalnya jam fasilitas, tarif, halte, parkir, atau jadwal acara—kami menyarankan verifikasi melalui kanal resmi pada hari perjalanan.',
    intro:
      'Kami memprioritaskan sumber pemerintah dan lembaga pariwisata nasional, lalu membandingkannya dengan data peta untuk alamat, koordinat, serta informasi akses. Informasi komersial tidak dipakai sebagai rekomendasi.',
    items: [
      { label: 'Kementerian Pariwisata RI — Indonesia.travel', href: 'https://www.indonesia.travel/id/id/destination/sumatra/riau-islands/alun-alun-batam', note: 'deskripsi destinasi dan fungsi ruang publik' },
      { label: 'Pemerintah Kota Batam', href: 'https://batam.go.id/trans-batam-tambah-19-armada-baru-koridor-nongsa-batam-centre-diintegrasikan-dengan-bandara-hang-nadim/', note: 'perkembangan Trans Batam dan koneksi bandara' },
      { label: 'Dinas Komunikasi dan Informatika Kota Batam', href: 'https://kominfo.batam.go.id/lapangan-olahraga-engku-putri-direvitalisasi-lewat-csr-amsakar-dorong-lebih-banyak-perusahaan-ikut-membangun-batam/', note: 'kondisi dan revitalisasi fasilitas olahraga' },
      { label: 'Kecamatan Batam Kota', href: 'https://kecbatamkota.batam.go.id/2020/06/26/manifestasi-ketokohan-engku-hamidah/', note: 'latar nama Engku Putri / Engku Hamidah' },
      { label: 'Dinas Kebudayaan dan Pariwisata Kota Batam', href: 'https://disbudpar.batam.go.id/2026/07/23/piala-dunia-2026-jadi-momentum-penggerak-umkm-batam-siapkan-nobar-akbar-di-engku-putri/', note: 'penggunaan alun-alun untuk kegiatan publik' },
    ],
    ratingNote:
      'Cuplikan ulasan bersifat indikatif. Rating 4,5 dari 5.811 ulasan pada Google Maps (September 2026) hanya dipakai sebagai gambaran persepsi pengunjung, bukan penilaian resmi. Jumlah ulasan dapat bertambah sewaktu-waktu.',
    refsTitle: 'Rujukan resmi untuk pembaruan',
    refsText:
      'Untuk pembaruan resmi dan informasi pariwisata daerah, rujuk {gov} serta portal {city}. Halaman ini membahas Alun Alun Batam Centre (Batam Centre Park) sebagai ruang publik Kota Batam dan tidak mewakili instansi mana pun.',
  },

  footer: {
    tagline: 'Panduan lapangan yang menempatkan konteks sejarah, akses, fasilitas publik, dan etika berkunjung di atas promosi komersial.',
    guideTitle: 'Bagian panduan',
    guideLinks: [
      { label: 'Latar sejarah kota', href: '/#latar-sejarah' },
      { label: 'Cuaca & prakiraan', href: '/#cuaca' },
      { label: 'Fasilitas & layanan', href: '/#fasilitas' },
      { label: 'Agenda & acara', href: '/#acara' },
      { label: 'Transportasi', href: '/#transportasi' },
      { label: 'Strategi musim', href: '/#musim' },
      { label: 'Rute kunjungan', href: '/#rute' },
      { label: 'Tanggung jawab pengunjung', href: '/#tanggung-jawab' },
    ],
    legalTitle: 'Informasi hukum',
    legalLinks: [
      { label: 'Kebijakan Privasi', href: '/kebijakan-privasi/' },
      { label: 'Ketentuan Layanan', href: '/ketentuan-layanan/' },
      { label: 'Pengaturan Kuki', href: '/pengaturan-cookie/' },
    ],
    statusTitle: 'Status situs',
    status: 'Situs ini merupakan proyek panduan informasi wisata independen dan nirlaba, tanpa hubungan afiliasi dengan instansi pemerintah maupun organisasi resmi mana pun.',
    credits: [
      'Informasi destinasi disusun dengan merujuk dan memeriksa silang materi publik dari Pemerintah Kota Batam, Dinas Kebudayaan dan Pariwisata Kota Batam, serta Kementerian Pariwisata Republik Indonesia; situs ini tidak memuat rekomendasi komersial.',
      'Hak gambar: seluruh foto yang ditampilkan tetap menjadi hak pemotret dan/atau pemegang hak masing-masing. Foto digunakan sebagai materi editorial dan selalu disertai keterangan sumber pada halaman.',
    ],
    copyright: '© 2026 Panduan Alun-Alun Batam Centre. Hak cipta dilindungi.',
  },

  logo: {
    name: 'Alun-Alun Batam Centre',
    tagline: 'Panduan independen',
    homeAria: 'Beranda Panduan Alun-Alun Batam Centre',
    markAria: 'Lambang Alun-Alun Batam Centre',
  },

  legal: {
    privacy: {
      eyebrow: 'Dokumen situs',
      title: 'Kebijakan Privasi',
      updated: 'Pembaruan terakhir: September 2026',
      intro:
        'Kami mengelola situs ini sebagai panduan informasi wisata independen dan nirlaba. Prinsip kami adalah mengumpulkan data seminimal mungkin, menjelaskan tujuan pemrosesan dengan bahasa yang jelas, dan tidak menjual data pribadi pengguna.',
      blocks: [
        {
          h2: 'Informasi yang kami kumpulkan',
          paragraphs: [
            'Data yang dapat diproses saat Anda menggunakan situs ini terbatas pada data yang diperlukan untuk operasi, keamanan, dan—hanya bila Anda menyetujuinya—analisis penggunaan.',
            'Saat ini situs tidak memiliki akun pengguna, basis data pengguna, sistem pemesanan, pembayaran, atau fitur masuk.',
          ],
          list: [
            'Data teknis dasar: alamat IP, jenis peramban, perangkat, halaman yang diakses, waktu permintaan, dan data log lain yang secara normal diproses oleh penyedia hosting atau jaringan untuk mengirimkan halaman dan menjaga keamanan layanan.',
            'Kuki dan penyimpanan lokal: preferensi persetujuan disimpan pada peramban agar situs mengingat pilihan Anda.',
            'Data analitik: hanya diproses melalui Google Analytics bila Anda secara aktif mengaktifkan kategori analitik pada halaman Pengaturan Kuki.',
            'Informasi yang Anda berikan secara sukarela: bila suatu saat situs menyediakan kanal kontak, data yang Anda kirim melalui kanal tersebut akan digunakan hanya untuk menanggapi permintaan terkait.',
          ],
        },
        {
          h2: 'Bagaimana kami menggunakan informasi',
          list: [
            'menyediakan dan mengamankan halaman situs;',
            'memahami kinerja serta penggunaan konten setelah persetujuan analitik diberikan;',
            'memperbaiki struktur, aksesibilitas, dan pengalaman pengguna;',
            'menanggapi permintaan yang Anda kirim secara sukarela apabila kanal kontak tersedia;',
            'memenuhi kewajiban hukum yang berlaku.',
          ],
          paragraphs: ['Kami tidak menggunakan data situs ini untuk membangun profil pemasaran, menjual data, atau menjalankan iklan yang dipersonalisasi.'],
        },
        {
          h2: 'Dasar persetujuan dan pilihan Anda',
          paragraphs: [
            'Kategori analitik bersifat opsional. Pengaturan awalnya tidak aktif. Anda dapat mengaktifkan atau menonaktifkannya kapan saja melalui Pengaturan Kuki. Kuki atau penyimpanan yang benar-benar diperlukan untuk mengingat pilihan privasi dan menjalankan fungsi dasar tidak dapat dinonaktifkan melalui kontrol situs.',
          ],
        },
        {
          h2: 'Layanan pihak ketiga',
          h3: 'Peta',
          paragraphs: [
            'Halaman utama memuat peta dalam bingkai tertanam dari penyedia peta publik. Ketika bagian peta dimuat, peramban Anda berkomunikasi langsung dengan penyedia tersebut, yang dapat menerima data jaringan dan perangkat sesuai kebijakannya sendiri. Peta digunakan semata-mata untuk konteks lokasi.',
          ],
        },
        {
          h2: 'Analitik',
          paragraphs: [
            'Analitik hanya dimuat bila Anda memberikan persetujuan kategori analitik. Konfigurasi situs mengaktifkan opsi anonimisasi IP.',
          ],
        },
        {
          h2: 'Penyimpanan dan keamanan',
          paragraphs: [
            'Kami tidak menetapkan periode penyimpanan tunggal untuk log infrastruktur karena retensi dapat bergantung pada konfigurasi penyedia layanan dan kebutuhan keamanan. Kami berupaya memilih retensi yang wajar dan hanya sepanjang diperlukan untuk tujuan yang sah. Tidak ada metode transmisi internet yang sepenuhnya bebas risiko.',
          ],
        },
        {
          h2: 'Hak Anda',
          paragraphs: [
            'Tergantung hukum yang berlaku pada Anda, Anda dapat memiliki hak untuk mengakses, mengoreksi, menghapus, membatasi, atau mengajukan keberatan atas pemrosesan data, serta menarik persetujuan. Penarikan persetujuan tidak memengaruhi keabsahan pemrosesan yang telah berlangsung sebelumnya.',
          ],
        },
        {
          h2: 'Perubahan kebijakan',
          paragraphs: ['Kebijakan dapat diperbarui bila teknologi, layanan pihak ketiga, atau kewajiban hukum berubah. Versi yang berlaku akan ditampilkan di halaman ini bersama bulan pembaruan.'],
        },
        { highlight: 'Ringkasnya: situs dapat berfungsi tanpa analitik. Anda dapat menolak semua kategori yang tidak diperlukan dan tetap membaca panduan destinasi.' },
      ],
    },
    terms: {
      eyebrow: 'Dokumen situs',
      title: 'Ketentuan Layanan',
      updated: 'Pembaruan terakhir: September 2026',
      intro: 'Dengan mengakses dan menggunakan situs Panduan Alun-Alun Batam Centre, Anda menyetujui ketentuan berikut. Bila Anda tidak setuju, Anda dapat berhenti menggunakan situs.',
      blocks: [
        {
          h2: 'Status independen dan nirlaba',
          paragraphs: [
            'Situs ini merupakan proyek informasi wisata independen dan nirlaba. Situs tidak dikelola, disahkan, atau mewakili Pemerintah Kota Batam, Pemerintah Provinsi Kepulauan Riau, Kementerian Pariwisata Republik Indonesia, pengelola objek wisata, operator transportasi, atau organisasi komersial apa pun.',
          ],
        },
        {
          h2: 'Penggunaan konten',
          paragraphs: [
            'Konten disediakan untuk kebutuhan informasi pribadi. Anda dapat mengutip sebagian dengan menyebut sumber dan tautan ke halaman terkait. Kami tidak memberikan izin untuk memuat ulang situs secara keseluruhan, menjual kembali konten, atau menyajikannya seolah-olah berasal dari instansi resmi.',
          ],
        },
        {
          h2: 'Informasi dan akurasi',
          paragraphs: [
            'Fakta yang mudah berubah—jam fasilitas, tarif, halte, parkir, dan jadwal acara—disusun dengan penanda ketidakpastian. Kami menyarankan verifikasi pada kanal resmi sebelum perjalanan dan tidak bertanggung jawab atas keputusan yang diambil hanya dari informasi situs ini.',
          ],
        },
        {
          h2: 'Tanpa rekomendasi komersial',
          paragraphs: ['Panduan ini tidak menerima komisi dan tidak merekomendasikan usaha tertentu. Penyebutan jenis layanan bersifat netral.'],
        },
        {
          h2: 'Konten pihak ketiga',
          paragraphs: ['Peta tertanam dan gambar editorial tunduk pada hak dan ketentuan pemiliknya masing-masing.'],
        },
        { highlight: 'Ringkasnya: gunakan situs ini sebagai bahan pertimbangan, bukan sebagai pengganti pengumuman resmi pada hari perjalanan.' },
      ],
    },
    cookies: {
      eyebrow: 'Kontrol privasi',
      title: 'Pengaturan Kuki',
      updated: 'Pembaruan terakhir: September 2026',
      intro: 'Kami menggunakan penyimpanan peramban seminimal mungkin. Anda dapat mengatur kategori opsional di bawah. Pilihan disimpan di perangkat Anda dan dapat diubah kapan saja.',
      blocks: [
        {
          h2: 'Apa yang dimaksud kuki?',
          paragraphs: [
            'Kuki adalah data kecil yang dapat disimpan oleh situs atau layanan pihak ketiga pada peramban. Situs ini juga menggunakan penyimpanan lokal untuk mengingat preferensi. Dalam halaman ini, istilah “kuki” digunakan secara praktis untuk mencakup keduanya ketika fungsinya serupa.',
          ],
        },
        {
          h2: 'Kategori yang kami gunakan',
          list: [
            'Sangat diperlukan: menyimpan pilihan persetujuan Anda agar situs tidak meminta ulang pada setiap kunjungan.',
            'Analitik (opsional): hanya aktif bila Anda mengaktifkannya, lalu digunakan untuk memahami penggunaan konten secara anonim.',
          ],
        },
        {
          h2: 'Cara mengubah pilihan',
          paragraphs: ['Gunakan formulir pada halaman ini untuk menyimpan pilihan. Anda juga dapat menghapus data situs melalui pengaturan peramban, yang akan mengembalikan preferensi ke kondisi awal.'],
        },
        { highlight: 'Ringkasnya: Anda dapat membaca seluruh panduan tanpa mengaktifkan kategori analitik.' },
      ],
    },
  },

  cookieForm: {
    requiredTitle: 'Kuki yang diperlukan',
    requiredBody: 'Diperlukan untuk fungsi dasar dan menyimpan pilihan privasi. Kategori ini tidak dapat dinonaktifkan.',
    requiredBadge: 'Selalu aktif',
    analyticsTitle: 'Kuki analitik',
    analyticsBody: 'Mengizinkan Google Analytics membantu kami memahami pola penggunaan situs. Dinonaktifkan secara bawaan dan tidak diperlukan untuk membaca panduan.',
    analyticsNote: 'Google Analytics · G-HXM22WWPKP',
    preferencesTitle: 'Preferensi situs',
    preferencesBody: 'Mengizinkan situs mengingat pengaturan antarmuka nonesensial yang mungkin ditambahkan di kemudian hari. Saat ini tidak digunakan untuk personalisasi konten.',
    marketingTitle: 'Pemasaran dan iklan personal',
    marketingBody: 'Situs ini tidak menjalankan iklan personal dan tidak mengaktifkan kategori pemasaran.',
    marketingBadge: 'Tidak digunakan',
    save: 'Simpan preferensi',
    reject: 'Tolak yang tidak perlu',
    saved: 'Preferensi tersimpan. Halaman akan dimuat ulang bila status analitik berubah.',
    rejected: 'Kategori opsional dinonaktifkan. Halaman akan dimuat ulang bila status analitik berubah.',
  },
};
