/**
 * TEMPLATE UPDATE DATABASE UNTUK MEDIA LOKAL
 * 
 * Gunakan template ini untuk update path media di database.js
 * Copy-paste dan sesuaikan dengan nama file media Anda
 */

// ===== TEMPLATE UNTUK 1 KALIMAT DENGAN MEDIA LOKAL =====
{
    id: 'cinta_1',
    teks: 'Cinta adalah perasaan mendalam yang menyatukan dua jiwa.',
    info: {
        deskripsi: 'Cinta adalah emosi positif yang paling kuat dalam kehidupan manusia...',
        
        // GAMBAR - Format: JPG, PNG
        gambar: './media/images/cinta_1.jpg',
        
        // VIDEO - Format: MP4 atau YouTube Embed
        // Pilihan 1: Video lokal
        video: './media/videos/cinta_1.mp4',
        // Pilihan 2: YouTube embed (jika tidak ada video lokal)
        // video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        
        // AUDIO - Format: MP3 (opsional)
        audio: './media/audio/cinta_1.mp3'
    }
}

// ===== TEMPLATE LENGKAP 1 KATA DASAR (2 KALIMAT CONTOH) =====
{
    id: 'cinta',
    nama: 'CINTA',
    kalimat: [
        {
            id: 'cinta_1',
            teks: 'Cinta adalah perasaan mendalam yang menyatukan dua jiwa.',
            info: {
                deskripsi: 'Deskripsi tentang cinta...',
                gambar: './media/images/cinta_1.jpg',
                video: './media/videos/cinta_1.mp4',
                audio: './media/audio/cinta_1.mp3'
            }
        },
        {
            id: 'cinta_2',
            teks: 'Cinta sejati tidak pernah meminta balasan tetapi memberikan dengan sepenuh hati.',
            info: {
                deskripsi: 'Deskripsi tentang cinta sejati...',
                gambar: './media/images/cinta_2.jpg',
                video: './media/videos/cinta_2.mp4',
                audio: './media/audio/cinta_2.mp3'
            }
        },
        // ... (kalimat 3, 4, 5)
    ]
}

// ===== KONVENSI PENAMAAN FILE MEDIA =====
/*
GAMBAR:
  - cinta_1.jpg (gambar untuk kalimat 1)
  - cinta_2.jpg (gambar untuk kalimat 2)
  - cinta_3.jpg
  - cinta_4.jpg
  - cinta_5.jpg

VIDEO:
  - cinta_1.mp4 (video untuk kalimat 1)
  - cinta_2.mp4 (video untuk kalimat 2)
  - cinta_1.webm (alternative format untuk compatibility)
  - cinta_2.webm

AUDIO:
  - cinta_1.mp3 (audio untuk kalimat 1)
  - cinta_2.mp3 (audio untuk kalimat 2)
  - cinta_1.wav (backup format lossless)
*/

// ===== SCRIPT BATCH UPDATE DATABASE =====
/*
Jika ingin mengupdate banyak item sekaligus, gunakan Find & Replace di text editor:

Find:    'https://via.placeholder.com/300x200?text=
Replace: './media/images/

Find:    'https://www.youtube.com/embed/dQw4w9WgXcQ'
Replace: './media/videos/[nama_video].mp4'

Atau gunakan script ini di browser console:
*/

// Copy ke browser console untuk preview path
let word = 'cinta'; // ganti dengan kata dasar
for(let i = 1; i <= 5; i++) {
    console.log(`Kalimat ${i}:`);
    console.log(`  Gambar: ./media/images/${word}_${i}.jpg`);
    console.log(`  Video:  ./media/videos/${word}_${i}.mp4`);
    console.log(`  Audio:  ./media/audio/${word}_${i}.mp3`);
}

// ===== VALIDASI PATH =====
/*
Pastikan:
1. Path dimulai dengan './' (relative path)
2. Folder ada: media/images, media/videos, media/audio
3. File extension sesuai: .jpg/.png untuk gambar, .mp4/.webm untuk video, .mp3/.wav untuk audio
4. Nama file lowercase dan underscore (cinta_1, bukan Cinta_1 atau cinta-1)
5. Tidak ada spasi dalam nama file
*/

// ===== TESTING MEDIA =====
/*
Untuk test apakah media link bekerja:

1. Di HTML element (gambar):
   <img src="./media/images/cinta_1.jpg" onerror="alert('Gambar tidak ditemukan')">

2. Di HTML element (video):
   <video controls>
     <source src="./media/videos/cinta_1.mp4" type="video/mp4">
     Browser tidak support
   </video>

3. Di HTML element (audio):
   <audio controls>
     <source src="./media/audio/cinta_1.mp3" type="audio/mpeg">
     Browser tidak support
   </audio>

4. Di browser console:
   fetch('./media/images/cinta_1.jpg')
     .then(r => console.log(r.status === 200 ? 'OK' : 'NOTFOUND'))
     .catch(e => console.log('Error:', e.message))
*/

// ===== CONTOH IMPLEMENTASI PARTIAL (HYBRID) =====
/*
Jika media tidak lengkap, bisa mix antara lokal dan online:
*/
{
    id: 'cinta_1',
    teks: 'Cinta adalah perasaan mendalam yang menyatukan dua jiwa.',
    info: {
        deskripsi: 'Deskripsi tentang cinta...',
        
        // Gambar dari media lokal
        gambar: './media/images/cinta_1.jpg',
        
        // Video dari YouTube (fallback jika tidak ada video lokal)
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        
        // Audio dari media lokal
        audio: './media/audio/cinta_1.mp3'
    }
}

// ===== TOOLS YANG DIREKOMENDASIKAN =====
/*
1. IMAGE COMPRESSION:
   - TinyPNG / TinyJPG (online)
   - ImageMagick (command-line)
   - ffmpeg (video + image)

2. VIDEO COMPRESSION:
   - HandBrake (GUI, MP4/WebM)
   - ffmpeg (command-line, powerful)
   - Adobe Media Encoder (professional)

3. AUDIO COMPRESSION:
   - ffmpeg (command-line)
   - Audacity (GUI)
   - Adobe Audition (professional)

4. FILE MANAGEMENT:
   - Git LFS (untuk large files)
   - 7-Zip / WinRAR (compression)
   - rsync / rclone (backup)
*/
