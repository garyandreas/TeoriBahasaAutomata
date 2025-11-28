# 🚀 QUICK START GUIDE

## Struktur Aplikasi

```
TeoriBahasaAutomata/
├── index.html                    # File utama yang dibuka di browser
├── js/
│   ├── database.js              # Database dengan 5 karakter (A, N, B, M, P)
│   └── cascading-search.js      # Logika search engine
├── README.md                     # Dokumentasi lengkap
├── TESTING.md                    # Panduan testing
└── LICENSE
```

## ⚡ Cara Menjalankan

1. Buka folder `TeoriBahasaAutomata`
2. Double-click file `index.html`
3. Atau buka dengan browser favorit Anda

## 🎯 Fitur yang Diimplementasikan

### ✅ Cascading Search (Bertingkat)
- **Level 1**: Input karakter → Menampilkan saran kata dasar
- **Level 2**: Pilih kata dasar → Menampilkan daftar kalimat
- **Level 3**: Pilih kalimat → Menampilkan detail lengkap

### ✅ Database Lokal
- Struktur hierarki: Karakter → Kata Dasar → Kalimat → Info
- 5 karakter tersedia: A, N, B, M, P
- Setiap kata dasar memiliki 5 kalimat
- Setiap kalimat memiliki: Teks, Deskripsi, Gambar, Video

### ✅ UI/UX Modern
- Gradient background yang menarik
- Suggestions dropdown yang responsive
- Real-time search tanpa delay
- Hover effects dan animasi halus
- Mobile-friendly design

### ✅ Implementasi Konsep Teori Bahasa
- Finite State Automata (FSA)
- Lexical Analysis
- String Pattern Matching
- Hierarchical Data Structure

## 📝 Contoh Penggunaan

### Skenario 1: Cari dengan Karakter Tunggal
```
User ketik: A
System tampilkan: AKU, AIR, API

User memilih: AKU
System tampilkan: [5 kalimat tentang AKU]

User memilih: Kalimat 1
System tampilkan: Detail lengkap kalimat pertama
```

### Skenario 2: Cari dengan Partial Match
```
User ketik: AK
System tampilkan: AKU (hanya kata yang dimulai dengan AK)

User memilih: AKU
System tampilkan: [5 kalimat tentang AKU]
```

### Skenario 3: Cari Kata Lengkap
```
User ketik: NASI
System tampilkan: NASI (hanya satu hasil yang cocok)

User memilih: NASI
System tampilkan: [5 kalimat tentang NASI]
```

## 📊 Data yang Tersedia

### Karakter A
- **AKU** - Kata ganti orang pertama (5 kalimat)
- **AIR** - Zat cair dan kebutuhan hidup (5 kalimat)
- **API** - Elemen panas dan cahaya (5 kalimat)

### Karakter N
- **NASI** - Makanan pokok (5 kalimat)
- **NAMA** - Identitas dan penamaan (5 kalimat)
- **NENEK** - Keluarga dan warisan budaya (5 kalimat)

### Karakter B
- **BUKU** - Sumber pengetahuan (5 kalimat)
- **BULAN** - Waktu dan satelit (5 kalimat)

### Karakter M
- **MAKAN** - Aktivitas konsumsi makanan (5 kalimat)
- **MOBIL** - Kendaraan transportasi (5 kalimat)

### Karakter P
- **PADI** - Tanaman penghasil beras (5 kalimat)
- **POHON** - Tumbuhan yang memberikan manfaat (5 kalimat)

## 🔍 Testing Checklist

- [ ] Aplikasi terbuka tanpa error
- [ ] Ketik "A" → Muncul 3 saran
- [ ] Ketik "N" → Muncul 3 saran
- [ ] Ketik "B" → Muncul 2 saran
- [ ] Ketik "M" → Muncul 2 saran
- [ ] Ketik "P" → Muncul 2 saran
- [ ] Pilih salah satu saran
- [ ] Daftar kalimat muncul dengan benar
- [ ] Pilih salah satu kalimat
- [ ] Detail dengan gambar dan video ditampilkan
- [ ] Tombol "← Cari Lagi" berfungsi
- [ ] Search case-insensitive berfungsi dengan baik
- [ ] Responsive di mobile

## 💡 Tips Penggunaan

1. **Pencarian otomatis uppercase** - Anda bisa mengetik huruf kecil
2. **Partial matching** - Anda bisa mengetik 2-3 huruf untuk filter
3. **Clear results** - Setiap pencarian baru akan clear hasil sebelumnya
4. **Multiple searches** - Anda bisa melakukan banyak pencarian berturut-turut

## 🔧 Customization

### Mengubah Warna
Edit bagian style di `index.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Ganti hex color codes sesuai keinginan */
```

### Menambah Data
1. Buka `js/database.js`
2. Tambahkan karakter baru atau kata dasar baru
3. Ikuti struktur yang sudah ada
4. Refresh browser

### Mengubah Pesan
Search untuk text yang ingin diubah di:
- `index.html` (untuk UI text)
- `js/cascading-search.js` (untuk console messages)

## ⚠️ Troubleshooting

### Masalah: Tidak ada suggestions
**Solusi**: Cek apakah kata ada di database, buka console (F12) untuk melihat error

### Masalah: Gambar tidak muncul
**Solusi**: URL placeholder berfungsi jika ada internet connection

### Masalah: Video tidak play
**Solusi**: Pastikan YouTube embed URL valid atau ganti dengan video lain

## 📚 File Penting

| File | Deskripsi |
|------|-----------|
| index.html | Structure HTML + CSS styling |
| js/database.js | Database hierarki (600+ lines) |
| js/cascading-search.js | Logika search engine |
| README.md | Dokumentasi lengkap |
| TESTING.md | Panduan testing ini |

## 🎓 Konsep yang Diimplementasikan

✅ **Finite Automata** - Setiap state input
✅ **Lexical Analysis** - Parse karakter input
✅ **Pattern Matching** - String matching algorithm
✅ **Hierarchical Data** - Struktur bertingkat
✅ **Real-time Processing** - Event-driven

## 📞 Support

Jika ada masalah:
1. Buka console browser (F12)
2. Lihat error messages
3. Pastikan semua file `.js` terbuka dengan benar
4. Reload halaman browser

---

**Happy Searching! 🚀**

Dibuat untuk: **Teori Bahasa dan Automata - UAS Semester 3**
Oleh: **Gary Andreas**
