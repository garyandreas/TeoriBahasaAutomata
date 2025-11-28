# 🚀 QUICK START - Media Lokal Integration

## Apa yang sudah siap?

✅ Folder struktur media sudah dibuat:
```
media/
├── images/   (tempat gambar)
├── videos/   (tempat video)
└── audio/    (tempat audio)
```

✅ JavaScript sudah support media lokal dengan graceful fallback

✅ Template dan panduan lengkap sudah tersedia

---

## 3 Langkah Cepat Setup Media

### Step 1: Persiapkan File Media
Siapkan media sesuai konvensi:
```
media/images/cinta_1.jpg, cinta_2.jpg, ..., cinta_5.jpg
media/videos/cinta_1.mp4, cinta_1.webm
media/audio/cinta_1.mp3
```

### Step 2: Update Database Path
Edit `js/database.js`, ganti path placeholder dengan path lokal:

**Dari:**
```javascript
gambar: 'https://via.placeholder.com/300x200?text=Cinta',
video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
```

**Ke:**
```javascript
gambar: './media/images/cinta_1.jpg',
video: './media/videos/cinta_1.mp4',
audio: './media/audio/cinta_1.mp3'
```

### Step 3: Test di Browser
- Buka `index.html`
- Cari kata dan lihat media load dengan baik

---

## File Panduan

📄 **MEDIA_GUIDE.md** - Panduan lengkap media lokal
- Struktur folder detail
- Rekomendasi format & ukuran
- Tips efisiensi
- Troubleshooting

📄 **DATABASE_TEMPLATE.js** - Template code
- Contoh format data dengan media
- Konvensi penamaan file
- Script testing
- Tools yang direkomendasikan

---

## Estimasi Ukuran

| Skenario | Ukuran | Catatan |
|----------|--------|---------|
| Minimal (1 gambar/kata dasar) | ~50 MB | Rekomendasi awal |
| Medium (gambar + video/kata dasar) | ~5-10 GB | Balanced |
| Full (gambar + video + audio) | ~20-30 GB | Komprehensif |

---

## 🎬 Media Lokal Support

Sekarang aplikasi support:
- ✅ **Gambar lokal** (.jpg, .png) dengan fallback
- ✅ **Video lokal** (.mp4, .webm) dengan player bawaan
- ✅ **Video YouTube** embed (alternatif)
- ✅ **Audio lokal** (.mp3, .wav) dengan player controls

---

## 💾 Update Database Ke Semua Item

Ada 2 cara:

### Cara 1: Manual Update
Edit `js/database.js` file dan ganti path untuk setiap item

### Cara 2: Batch Update (Find & Replace)
Gunakan Find & Replace di text editor:
```
Find:    https://via.placeholder.com/300x200?text=
Replace: ./media/images/

Find:    https://www.youtube.com/embed/dQw4w9WgXcQ
Replace: ./media/videos/[VIDEO_NAME].mp4
```

### Cara 3: Script Otomatis (Advanced)
Gunakan script Node.js untuk generate database dari folder media:
```javascript
// Pseudo-code
const fs = require('fs');
const mediaFolder = './media';
// Auto-generate database dari file yang ada
```

---

## ⚠️ Catatan Penting

1. **Path harus benar**: `./media/images/nama.jpg` (relatif dari root)
2. **File harus exist**: Pastikan file benar-benar ada di folder
3. **Case-sensitive**: Di Linux/Mac, `cinta_1.jpg` ≠ `Cinta_1.jpg`
4. **Tanpa spasi**: Gunakan `cinta_1.jpg` bukan `cinta 1.jpg`
5. **Test sebelum submit**: Pastikan semua media muncul di browser

---

## 🔗 File yang Sudah Di-Update

- ✅ `js/cascading-search.js` - Support media lokal dengan fallback
- ✅ `js/database.js` - Header sudah update dokumentasi media
- ✅ `MEDIA_GUIDE.md` - Panduan lengkap (NEW)
- ✅ `DATABASE_TEMPLATE.js` - Template & tips (NEW)

---

## Next Steps

1. Mulai kumpulkan media (gambar, video, audio)
2. Organize ke folder media yang sudah disiapkan
3. Update database.js dengan path yang benar
4. Test setiap fitur di browser
5. Optimize ukuran sebelum submit

---

**Siap mulai? Good luck! 🎉**
