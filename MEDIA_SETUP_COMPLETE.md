# ✅ SETUP MEDIA LOKAL - COMPLETE

## 🎯 Apa yang sudah disiapkan?

### 1️⃣ Folder Struktur
```
media/
├── images/   ← Tempat simpan gambar (.jpg, .png)
├── videos/   ← Tempat simpan video (.mp4, .webm)
└── audio/    ← Tempat simpan audio (.mp3, .wav)
```

### 2️⃣ JavaScript Updated
✅ **cascading-search.js** - Sudah support:
- Media lokal (images, videos, audio)
- YouTube embed (video alternative)
- Graceful fallback jika file tidak ada
- Error handling yang baik

### 3️⃣ Documentation Lengkap
- ✅ `MEDIA_GUIDE.md` - Panduan detail media lokal
- ✅ `MEDIA_QUICK_START.md` - Quick start (3 langkah)
- ✅ `DATABASE_TEMPLATE.js` - Template & tips
- ✅ `EXAMPLE_MEDIA_TEST.txt` - Contoh & test command

---

## 🚀 Langkah Implementasi

### Tahap 1: Kumpulkan Media (10% - 30% effort)
```
Untuk SETIAP kata dasar, persiapkan:
- 5 gambar (opsional: bisa 1 per kata dasar)
- 5 video atau YouTube embed
- 5 audio (untuk pronunsiasi/narasi)
```

**Format & Konvensi:**
```
Gambar:  media/images/cinta_1.jpg, cinta_2.jpg, ..., cinta_5.jpg
Video:   media/videos/cinta_1.mp4, cinta_1.webm
Audio:   media/audio/cinta_1.mp3
```

### Tahap 2: Update Database (60% effort)
Edit `js/database.js` - ganti path untuk setiap item:
```javascript
// Dari:
gambar: 'https://via.placeholder.com/300x200?text=Cinta',
video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'

// Ke:
gambar: './media/images/cinta_1.jpg',
video: './media/videos/cinta_1.mp4',
audio: './media/audio/cinta_1.mp3'
```

### Tahap 3: Test & Verify (10% effort)
1. Buka `index.html` di browser
2. Cari kata dan pastikan media load
3. Check browser console untuk error

---

## 📊 Rekomendasi Media

### Minimal Setup (Recommended Start)
- 1 gambar per kata dasar (52 × 200KB = ~10 MB)
- 1 video per kata dasar (52 × 10MB = ~520 MB) **OR** YouTube embed
- Ukuran total: **~500 MB - 1 GB**

### Medium Setup
- 5 gambar per kata dasar (260 × 200KB = ~52 MB)
- 5 video per kata dasar **OR** 1 video + 4 YouTube embed
- Ukuran total: **~5-10 GB**

### Full Setup (Kalo dosenmu super demanding!)
- 5 gambar per kata dasar: ~52 MB
- 5 video per kata dasar: ~2.6 GB
- 5 audio per kata dasar: ~780 MB
- Ukuran total: **~3-4 GB**

---

## 🔧 Tools Yang Helpful

### Untuk Compress Media
```bash
# Gambar
ffmpeg -i input.jpg -resize 800x600 -quality 85 output.jpg

# Video
ffmpeg -i input.mov -codec:v libx264 -crf 23 output.mp4

# Audio
ffmpeg -i input.wav -codec:a libmp3lame -q:a 4 output.mp3
```

### Untuk Batch Rename
Windows:
```powershell
Get-ChildItem | Rename-Item -NewName {$_.BaseName -replace ' ','_'} # remove spaces
```

---

## ⚠️ GOTCHAS - Jangan Lupa!

1. **Path harus pakai `./`** (dot slash)
   - ✅ `./media/images/cinta_1.jpg`
   - ❌ `media/images/cinta_1.jpg`
   - ❌ `./media/images/Cinta_1.jpg` (case sensitive!)

2. **File extension harus correct**
   - Gambar: `.jpg`, `.png` ✅
   - Video: `.mp4`, `.webm` ✅
   - Audio: `.mp3`, `.wav` ✅

3. **Pastikan folder exist**
   ```
   media/
   ├── images/
   ├── videos/
   └── audio/
   ```

4. **Test sebelum submit**
   - Buka DevTools (F12)
   - Network tab - check 404 errors
   - Console tab - check JS errors

---

## 📝 Database Update Strategy

### Opsi 1: Update Manual (Safest)
- Edit database.js per item
- Guaranteed correct
- Time-consuming untuk 260 items

### Opsi 2: Find & Replace Batch
- Ctrl+H di VS Code
- Find: `https://via.placeholder`
- Replace: `./media/images/`
- Faster tapi risky jika format tidak konsisten

### Opsi 3: Script Automation (Advanced)
- Write Node.js script untuk generate database dari folder
- Scan folder media, match dengan database
- Auto-generate paths
- Paling efisien tapi butuh coding skills

---

## 📊 Current Status

| Komponen | Status | Notes |
|----------|--------|-------|
| Folder struktur | ✅ Ready | media/{images,videos,audio} |
| JavaScript support | ✅ Ready | cascading-search.js updated |
| Database template | ✅ Ready | DATABASE_TEMPLATE.js |
| Documentation | ✅ Complete | 4 files ready |
| Media collection | ⏳ Pending | Kamu yang ngumpulin |
| Database update | ⏳ Pending | Update path sesuai media |
| Testing | ⏳ Pending | Test di browser |

---

## 🎬 Next: What To Do Now

### Immediate (1-2 jam):
1. Read `MEDIA_QUICK_START.md`
2. Prepare 1 media set untuk test (gambar + video + audio untuk 1 kata dasar)
3. Update database item pertama
4. Test di browser

### Short-term (1-3 hari):
1. Kumpulkan media untuk 10-20 kata dasar
2. Update database untuk kata-kata tersebut
3. Test & verify setiap kategori

### Long-term (1-2 minggu):
1. Kumpulkan media untuk semua 52 kata dasar
2. Update seluruh database
3. Optimize ukuran file
4. Final testing & submit

---

## 💡 Pro Tips

1. **Reuse media**: Kalau sama gambarnya, pakai path yang sama di kalimat lain
2. **Use YouTube**: Untuk video, bisa YouTube link (no download needed)
3. **Compress aggressively**: 1 MB gambar > 10 KB setelah compress
4. **Organize dengan script**: Batch rename files dengan PowerShell/bash
5. **Version control**: Commit database.js changes, media dalam .gitignore (kalau besar)

---

## 📞 Troubleshooting

### Media tidak muncul?
1. Check path: `./media/images/nama.jpg`
2. File exist di folder?
3. Console error (F12)?
4. File permission ok?

### Video tidak play?
1. Format supported? (MP4 h.264 atau WebM VP8)
2. Coba fallback YouTube?
3. Browser support? (modern browser required)

### Audio tidak dengar?
1. Volume mute?
2. File ok? (check manual play)
3. Browser permission?

---

## 🎉 SELESAI!

Sekarang kamu siap untuk:
- ✅ Integrate media lokal ke aplikasi
- ✅ Support gambar, video, audio
- ✅ Maintain ukuran yang reasonable
- ✅ Submit project dengan media lengkap

**Good luck! Semoga dosenmu puas! 🚀**
