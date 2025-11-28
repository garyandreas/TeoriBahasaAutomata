# 📁 Panduan Media Lokal - Cascading Search Engine

## Struktur Folder

```
TeoriBahasaAutomata/
├── index.html
├── js/
│   ├── database.js
│   └── cascading-search.js
└── media/
    ├── images/       (Gambar: jpg, png)
    ├── videos/       (Video: mp4, webm)
    └── audio/        (Audio: mp3, wav)
```

---

## 📋 Konvensi Nama File

### Format Umum
```
[kata_dasar]_[nomor].[extension]
```

### Contoh

**Untuk kata dasar "CINTA":**
- Gambar: `cinta_1.jpg`, `cinta_2.png`, `cinta_3.jpg`, `cinta_4.jpg`, `cinta_5.jpg`
- Video: `cinta_1.mp4`, `cinta_1.webm` (bisa double format)
- Audio: `cinta_1.mp3`, `cinta_1.wav`

**Untuk kata dasar "CAHAYA":**
- Gambar: `cahaya_1.jpg`, `cahaya_2.jpg`, `cahaya_3.jpg`, `cahaya_4.jpg`, `cahaya_5.jpg`
- Video: `cahaya_1.mp4`, `cahaya_1.webm`
- Audio: `cahaya_1.mp3`

---

## 📝 Update Database

Setelah menyiapkan file media, update path di `js/database.js`:

### Sebelum (Placeholder):
```javascript
info: {
    deskripsi: '...',
    gambar: 'https://via.placeholder.com/300x200?text=Cinta',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
}
```

### Sesudah (Media Lokal):
```javascript
info: {
    deskripsi: '...',
    gambar: './media/images/cinta_1.jpg',
    video: './media/videos/cinta_1.mp4',
    audio: './media/audio/cinta_1.mp3'
}
```

---

## 🎬 Format & Rekomendasi

### Gambar (Images)
- **Format**: JPG (compressed), PNG (lossless)
- **Ukuran**: 300-800px width (aspect ratio 4:3 atau 16:9)
- **Ukuran file**: 100-500 KB per file
- **Rekomendasi**: JPG untuk foto, PNG untuk graphics

### Video
- **Format Utama**: MP4 (h.264 codec, AAC audio)
- **Format Alternatif**: WebM (VP8/VP9 codec)
- **Durasi**: 30 detik - 2 menit per video
- **Resolution**: 720p (1280x720) optimal
- **Bitrate**: 500-1500 kbps
- **Ukuran file**: 5-20 MB per video

### Audio
- **Format Utama**: MP3 (128 kbps, 44.1 kHz)
- **Format Alternatif**: WAV (lossless, untuk backup)
- **Durasi**: 5-15 detik per audio (pronunsiasi/narasi)
- **Ukuran file**: 100-500 KB per file

---

## 💾 Estimasi Ukuran Total

Dengan 52 kata dasar × 5 kalimat = 260 items

| Item | Per File | Total | Catatan |
|------|----------|-------|---------|
| Gambar | 200 KB | ~52 GB | Jika 1 gambar per kata dasar |
| Video | 10 MB | ~130 GB | Jika 1 video per kata dasar |
| Audio | 300 KB | ~15.6 GB | Jika 1 audio per kata dasar |
| **TOTAL** | - | **~200 GB** | Jika semua media 3 item per kalimat |

### Optimasi Ukuran
- **Minimal**: 1 gambar per kata dasar (52 × 200KB = ~10 MB)
- **Medium**: 1 gambar + 1 video per kata dasar (~5-10 GB)
- **Full**: 1 gambar + 1 video + 1 audio per kata dasar (~20-30 GB)

---

## 🔧 Setup Media Secara Batch

### Menggunakan FFmpeg (Video)
```bash
# Kompres video MP4
ffmpeg -i input.mov -codec:v libx264 -crf 23 -codec:a aac -b:a 128k output.mp4

# Convert ke WebM
ffmpeg -i input.mp4 -codec:v libvpx -crf 10 -codec:a libopus output.webm
```

### Menggunakan ImageMagick (Gambar)
```bash
# Batch resize gambar
magick mogrify -resize 800x600 -quality 85 media/images/*.jpg
```

### Menggunakan FFmpeg (Audio)
```bash
# Compress audio MP3
ffmpeg -i input.wav -codec:a libmp3lame -q:a 4 output.mp3
```

---

## 🎯 Langkah-Langkah Implementasi

1. **Persiapkan file media**
   - Siapkan folder untuk setiap jenis media
   - Namai sesuai konvensi `[kata_dasar]_[nomor].ext`

2. **Upload ke folder yang sesuai**
   - Gambar → `media/images/`
   - Video → `media/videos/`
   - Audio → `media/audio/`

3. **Update database.js**
   - Ganti URL placeholder dengan path lokal
   - Format: `./media/[tipe]/[nama_file]`

4. **Test di browser**
   - Buka `index.html` di browser
   - Cek apakah semua media load dengan baik
   - Gunakan DevTools untuk lihat error jika ada

5. **Upload ke server** (opsional)
   - Compress folder media
   - Upload ke hosting/server
   - Pastikan struktur folder terjaga

---

## ⚠️ Troubleshooting

### Gambar tidak muncul
- Pastikan path benar: `./media/images/nama_file.jpg`
- Periksa nama file (case-sensitive di Linux/Mac)
- Pastikan file ada di folder yang tepat

### Video tidak play
- Pastikan format codec compatible
- Coba double format (MP4 + WebM)
- Check browser console untuk error messages

### Audio tidak terdengar
- Pastikan audio format supported
- Cek volume dan audio mute setting
- Periksa browser permissions

### File tidak ditemukan
- Reload page (Ctrl+F5 atau Cmd+Shift+R)
- Clear browser cache
- Cek path di DevTools Network tab

---

## 📊 Checklist Media

```markdown
### Karakter A
- [ ] Kata Dasar 1 (AKU)
  - [ ] 5 Gambar ready
  - [ ] 5 Video ready
  - [ ] 5 Audio ready
  - [ ] Database updated

- [ ] Kata Dasar 2 (AIR)
  - [ ] 5 Gambar ready
  - [ ] 5 Video ready
  - [ ] 5 Audio ready
  - [ ] Database updated

... (repeat untuk 26 karakter)
```

---

## 💡 Tips Efisiensi

1. **Share media antar kalimat**: Jika suitable, gunakan 1 gambar untuk multiple kalimat
2. **Use compression tools**: Kurangi file size tanpa kehilangan kualitas
3. **Organize dengan baik**: Gunakan script untuk rename file batch
4. **Version control**: Jika ukuran besar, gunakan Git LFS
5. **Backup**: Selalu backup media di storage terpisah

---

**Selamat mengumpulkan media! Good luck! 🎉**
