/**
 * CASCADING SEARCH ENGINE
 * Teori Bahasa dan Automata - UAS Semester 3
 * 
 * Fitur:
 * - Real-time search suggestions saat user mengetik
 * - Cascading hierarchy: Karakter → Kata Dasar → Kalimat → Informasi
 * - Display hasil dengan deskripsi, gambar, dan video
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== DOM ELEMENTS =====
    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    
    // ===== STATE MANAGEMENT =====
    let currentSearch = '';
    let currentSelectedKata = null;
    
    // ===== EVENT LISTENERS =====
    
    // Event listener untuk input search
    searchInput.addEventListener('input', handleSearchInput);
    
    // Event listener untuk menutup suggestions saat click di luar
    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) {
            suggestionsContainer.classList.remove('active');
        }
    });
    
    // ===== MAIN FUNCTIONS =====
    
    /**
     * Handle input search - tampilkan suggestions
     */
    function handleSearchInput(e) {
        currentSearch = e.target.value.trim().toUpperCase();
        
        if (currentSearch.length === 0) {
            suggestionsContainer.classList.remove('active');
            resetResults();
            return;
        }
        
        // Cari kata dasar yang sesuai dengan query
        const suggestions = searchKataDasar(currentSearch);
        
        if (suggestions.length === 0) {
            displayNoSuggestions();
        } else {
            displaySuggestions(suggestions);
        }
    }
    
    /**
     * Tampilkan daftar suggestions
     */
    function displaySuggestions(suggestions) {
        suggestionsContainer.innerHTML = '';
        
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.innerHTML = `
                <div class="suggestion-text">${suggestion.nama}</div>
                <div class="suggestion-count">${suggestion.jumlah_kalimat} kalimat</div>
            `;
            
            suggestionItem.addEventListener('click', function() {
                selectKataDasar(suggestion);
            });
            
            suggestionsContainer.appendChild(suggestionItem);
        });
        
        suggestionsContainer.classList.add('active');
    }
    
    /**
     * Tampilkan pesan ketika tidak ada suggestions
     */
    function displayNoSuggestions() {
        suggestionsContainer.innerHTML = `
            <div class="suggestions-empty">
                Tidak ada hasil untuk "${currentSearch}"
            </div>
        `;
        suggestionsContainer.classList.add('active');
    }
    
    /**
     * Handle ketika user memilih kata dasar dari suggestions
     */
    function selectKataDasar(suggestion) {
        currentSelectedKata = suggestion;
        
        // Update search input
        searchInput.value = suggestion.nama;
        
        // Tutup suggestions
        suggestionsContainer.classList.remove('active');
        
        // Tampilkan daftar kalimat
        displayKalimatList(suggestion);
    }
    
    /**
     * Tampilkan daftar kalimat untuk kata dasar yang dipilih
     */
    function displayKalimatList(kata) {
        let resultsHTML = `
            <div class="selected-info">
                <div class="selected-info-title">📚 Kata Dasar: ${kata.nama}</div>
                <div class="info-item">
                    <div class="info-label-title">Pilih Kalimat:</div>
                    <div style="margin-top: 15px;">
        `;
        
        kata.kalimat.forEach((kalimat, index) => {
            resultsHTML += `
                <div style="margin-bottom: 10px;">
                    <button class="kalimat-btn" data-char="${kata.char}" data-kata-id="${kata.id}" data-kalimat-id="${kalimat.id}" style="
                        width: 100%;
                        padding: 12px;
                        background-color: #f0f0f0;
                        border: 1px solid #b3d9e8;
                        border-radius: 6px;
                        cursor: pointer;
                        text-align: left;
                        transition: all 0.2s ease;
                        font-size: 14px;
                        color: #333;
                    ">
                        ${index + 1}. ${kalimat.teks.substring(0, 60)}...
                    </button>
                </div>
            `;
        });
        
        resultsHTML += `
                    </div>
                </div>
            </div>
        `;
        
        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.classList.add('active');
        
        // Add event listeners ke semua kalimat buttons
        const kalimatButtons = document.querySelectorAll('.kalimat-btn');
        kalimatButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const char = this.getAttribute('data-char');
                const kataDasarId = this.getAttribute('data-kata-id');
                const kalimatId = this.getAttribute('data-kalimat-id');
                
                displayKalimatDetail(char, kataDasarId, kalimatId);
            });
            
            // Add hover effect
            btn.addEventListener('mouseover', function() {
                this.style.backgroundColor = '#e8f4f8';
                this.style.borderColor = '#4ba3c3';
            });
            
            btn.addEventListener('mouseout', function() {
                this.style.backgroundColor = '#f0f0f0';
                this.style.borderColor = '#b3d9e8';
            });
        });
    }
    
    /**
     * Tampilkan detail lengkap dari kalimat yang dipilih
     */
    function displayKalimatDetail(char, kataDasarId, kalimatId) {
        const detail = getKalimatDetail(char, kataDasarId, kalimatId);
        
        if (!detail) {
            resultsContainer.innerHTML = '<div class="empty-state">Data tidak ditemukan</div>';
            return;
        }
        
        let detailHTML = `
            <div class="selected-info">
                <div class="selected-info-title">
                    ✨ ${currentSelectedKata.nama}
                </div>
                
                <div class="info-item">
                    <div class="info-label-title">📝 Kalimat</div>
                    <div class="info-content" style="font-style: italic; color: #4ba3c3; margin-top: 8px;">
                        "${detail.teks}"
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-label-title">📖 Deskripsi</div>
                    <div class="info-content" style="margin-top: 8px;">
                        ${detail.info.deskripsi}
                    </div>
                </div>
        `;
        
        // ===== MEDIA LOKAL / GAMBAR =====
        const gambarPath = detail.info.gambar;
        if (gambarPath && gambarPath.startsWith('./media/')) {
            detailHTML += `
                <div class="media-container">
                    <div class="media-title">🎨 Gambar</div>
                    <img 
                        src="${gambarPath}" 
                        alt="Gambar ${currentSelectedKata.nama}"
                        onerror="this.src='./media/images/placeholder.jpg'; this.style.opacity='0.5';"
                        style="max-width: 100%; border-radius: 8px; border: 2px solid #b3d9e8; margin-bottom: 20px; cursor: pointer;"
                        title="Klik untuk melihat gambar full-size"
                    >
                    <small style="color: #999; display: block; text-align: center;">Path: ${gambarPath}</small>
            `;
        } else if (gambarPath) {
            detailHTML += `
                <div class="media-container">
                    <div class="media-title">🎨 Gambar</div>
                    <img 
                        src="${gambarPath}" 
                        alt="Gambar ${currentSelectedKata.nama}"
                        onerror="this.parentElement.innerHTML='<div style=\"padding: 20px; background: #f0f0f0; text-align: center; color: #999;\">Gambar tidak tersedia</div>';"
                        style="max-width: 100%; border-radius: 8px; border: 2px solid #b3d9e8; margin-bottom: 20px;"
                    >
            `;
        }
        
        // ===== MEDIA VIDEO =====
        const videoPath = detail.info.video;
        if (videoPath) {
            if (videoPath.startsWith('./media/')) {
                // Video lokal (.mp4, .webm)
                detailHTML += `
                    <div class="media-title" style="margin-top: 20px;">🎬 Video</div>
                    <video width="100%" height="400" controls style="border-radius: 8px; border: 2px solid #b3d9e8; background: #000;">
                        <source src="${videoPath}" type="video/mp4">
                        <source src="${videoPath.replace('.mp4', '.webm')}" type="video/webm">
                        Browser Anda tidak mendukung pemutaran video.
                    </video>
                    <small style="color: #999; display: block; text-align: center; margin-top: 5px;">Path: ${videoPath}</small>
                `;
            } else if (videoPath.includes('youtube.com') || videoPath.includes('youtu.be')) {
                // YouTube embed
                detailHTML += `
                    <div class="media-title" style="margin-top: 20px;">🎬 Video (YouTube)</div>
                    <iframe 
                        width="100%" 
                        height="400" 
                        src="${videoPath}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen 
                        style="border-radius: 8px; border: 2px solid #b3d9e8;">
                    </iframe>
                `;
            }
        }
        
        // ===== MEDIA AUDIO =====
        const audioPath = detail.info.audio;
        if (audioPath && audioPath.startsWith('./media/')) {
            detailHTML += `
                <div class="media-title" style="margin-top: 20px;">🔊 Audio (Pronunsiasi)</div>
                <audio width="100%" controls style="width: 100%; margin-bottom: 10px;">
                    <source src="${audioPath}" type="audio/mpeg">
                    Browser Anda tidak mendukung pemutaran audio.
                </audio>
                <small style="color: #999; display: block; text-align: center;">Path: ${audioPath}</small>
            `;
        }
        
        detailHTML += `
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button onclick="location.reload()" style="
                        padding: 10px 20px;
                        background-color: #4ba3c3;
                        color: white;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    ">
                        ← Cari Lagi
                    </button>
                </div>
            </div>
        `;
        
        resultsContainer.innerHTML = detailHTML;
        resultsContainer.classList.add('active');
    }
    
    /**
     * Reset hasil pencarian
     */
    function resetResults() {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📝</div>
                <div class="empty-state-text">Mulai mengetik untuk mencari...</div>
                <div class="empty-state-hint">Contoh: ketik "N", "NA", "AKU", "AIR"...</div>
            </div>
        `;
        resultsContainer.classList.remove('active');
    }
    
    // ===== INITIALIZATION =====
    
    // Display karakter yang tersedia
    console.log('📚 Database Tersedia - Karakter:', getAvailableCharacters().join(', '));
    console.log('💡 Coba ketik: A, N, B atau AKU, AIR, NASI, NAMA, BUKU, BULAN, dll');
});
