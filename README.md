# 🔍 Cascading Search Engine - Teori Bahasa dan Automata

Aplikasi Cascading Search untuk UAS Teori Bahasa dan Automata Semester 3.

## 📋 Deskripsi Aplikasi

Aplikasi ini adalah **search engine bertingkat (cascading search)** yang mirip dengan Google's search suggestions. Ketika user mengetik satu karakter, sistem akan langsung menampilkan saran kata-kata yang dimulai dengan karakter tersebut.

### Fitur Utama:
- ✅ **Real-time Search Suggestions** - Saran muncul saat user mengetik
- ✅ **Hierarchical Database** - Struktur: Karakter → Kata Dasar → Kalimat → Informasi
- ✅ **Multi-character Support** - Database untuk karakter A, N, B (mudah diperluas)
- ✅ **Rich Content Display** - Menampilkan deskripsi, gambar, dan video
- ✅ **Responsive Design** - Bekerja baik di desktop dan mobile

## 🏗️ Struktur Proyek

```
TeoriBahasaAutomata/
├── index.html                 # File utama HTML
├── js/
│   ├── database.js           # Database dengan struktur hierarki
│   └── cascading-search.js   # Logika search engine
├── LICENSE
└── README.md
```

## 🚀 Cara Menggunakan

1. **Buka file `index.html`** di browser (double-click atau buka dengan browser)
2. **Mulai mengetik** di kotak pencarian
3. **Pilih saran** yang muncul di bawah input
4. **Pilih kalimat** dari kata dasar yang dipilih
5. **Lihat detail lengkap** dengan deskripsi, gambar, dan video

### Contoh Pencarian:
- Ketik `A` → Akan muncul: AKU, AIR, API
- Ketik `N` → Akan muncul: NASI, NAMA, NENEK
- Ketik `B` → Akan muncul: BUKU, BULAN
- Ketik `AK` → Akan muncul: AKU (lebih spesifik)
- Ketik `NA` → Akan muncul: NAMA, NASIHAT

## 📊 Struktur Database

### Format Data:
```javascript
DATABASE = {
    'A': {                          // Karakter
        karakter: 'A',
        kata_dasar: [
            {
                id: 'aku',
                nama: 'AKU',        // Kata Dasar
                kalimat: [
                    {
                        id: 'aku_1',
                        teks: '...',
                        info: {
                            deskripsi: '...',
                            gambar: 'URL',
                            video: 'YOUTUBE_EMBED_URL'
                        }
                    },
                    // ... lebih banyak kalimat
                ]
            },
            // ... lebih banyak kata dasar
        ]
    },
    // ... karakter lainnya
}
```

## 🔧 Cara Menambah Data

### Menambah Kata Dasar Baru:

Buka file `js/database.js` dan tambahkan di bagian karakter yang diinginkan:

```javascript
{
    id: 'anak',
    nama: 'ANAK',
    kalimat: [
        {
            id: 'anak_1',
            teks: 'Anak adalah generasi penerus bangsa yang harus dijaga dengan baik.',
            info: {
                deskripsi: 'Anak adalah individu muda yang memerlukan pendidikan dan kasih sayang. Anak memiliki potensi tak terbatas untuk berkembang dan memberikan kontribusi bagi masyarakat...',
                gambar: 'https://via.placeholder.com/300x200?text=Anak',
                video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
            }
        },
        // ... kalimat lainnya
    ]
}
```

### Menambah Karakter Baru:

Tambahkan objek baru di dalam `DATABASE`:

```javascript
'M': {
    karakter: 'M',
    nama_karakter: 'M',
    kata_dasar: [
        // Struktur sama seperti di atas
    ]
}
```

## 💻 Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan animasi
- **JavaScript Vanilla** - Logika search engine (tanpa framework)
- **Placeholder API** - Untuk gambar sementara
- **YouTube Embed** - Untuk video

## ⚙️ Cara Kerja Aplikasi

### Flow Pencarian:

1. **User mengetik** di search input
2. **Event listener menangkap** input
3. **Fungsi `searchKataDasar()`** mencari di database
4. **Suggestions ditampilkan** dalam dropdown
5. **User memilih** salah satu saran
6. **Daftar kalimat** ditampilkan
7. **User memilih** kalimat
8. **Detail lengkap** ditampilkan dengan gambar dan video

### Teknologi Pencarian:

- Menggunakan `String.startsWith()` untuk matching
- Case-insensitive search (otomatis uppercase)
- Real-time tanpa delay
- Efficient filtering dari database

## 📱 Fitur Responsif

Aplikasi dirancang untuk bekerja di:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobile (< 768px)

## 🎨 Desain UI

- **Gradient Background** - Warna ungu (667eea - 764ba2)
- **Card-based Layout** - Clean dan modern
- **Hover Effects** - Interaktif dan responsif
- **Color Scheme** - Biru (#4ba3c3) sebagai primary color
- **Typography** - Segoe UI untuk readability

## 📚 Contoh Data yang Tersedia

### Karakter A:
- **AKU** (5 kalimat) - Tentang kata ganti orang pertama
- **AIR** (5 kalimat) - Tentang zat cair dan kebutuhan hidup
- **API** (5 kalimat) - Tentang elemen panas dan cahaya

### Karakter N:
- **NASI** (5 kalimat) - Makanan pokok
- **NAMA** (5 kalimat) - Identitas dan penamaan
- **NENEK** (5 kalimat) - Keluarga dan warisan budaya

### Karakter B:
- **BUKU** (5 kalimat) - Sumber pengetahuan
- **BULAN** (5 kalimat) - Waktu dan satelit

## 🐛 Troubleshooting

### Tidak ada suggestions saat mengetik?
- Pastikan karakter atau kata ada di database
- Cek console untuk error messages
- Pastikan file `database.js` dan `cascading-search.js` terbuka dengan benar

### Gambar atau video tidak muncul?
- Cek URL gambar dan video di database
- Pastikan internet connection aktif
- Gunakan HTTPS URL jika memungkinkan

### Search tidak case-sensitive?
- Fitur ini disengaja untuk kemudahan user
- Semua input otomatis dikonversi ke uppercase

## 📖 Konsep Teori Bahasa

Aplikasi ini mengimplementasikan konsep:

1. **Finite Automata** - Setiap karakter input mengaktifkan state baru
2. **Lexical Analysis** - Membaca karakter input secara sekuensial
3. **String Matching** - Mencocokkan input dengan kata dasar
4. **Hierarchical Structure** - Organisasi data bertingkat

## 🎓 Persyaratan Dosen

✅ Aplikasi Search Engine seperti Google
✅ Cascading/Bertingkat
✅ Database lokal untuk setiap karakter
✅ Menampilkan hasil dengan informasi lengkap
✅ User-friendly interface

## 📝 Lisensi

Lihat file `LICENSE` untuk detail.

## 👨‍💻 Developer

- **Nama**: Gary Andreas
- **Mata Kuliah**: Teori Bahasa dan Automata
- **Semester**: 3
- **Tahun**: 2025

---

**Happy Searching! 🚀**
