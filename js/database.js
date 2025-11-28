/**
 * DATABASE CASCADING SEARCH
 * Teori Bahasa dan Automata - UAS Semester 3
 * 
 * Struktur: Karakter → Kata Dasar → Kalimat → Informasi (Deskripsi, Gambar, Video, Audio)
 * Setiap karakter memiliki database sendiri untuk kemudahan maintenance
 * 
 * STRUKTUR MEDIA LOKAL:
 * media/
 * ├── images/     (format: jpg, png - nama: [kata_dasar]_[nomor].jpg)
 * ├── videos/     (format: mp4, webm - nama: [kata_dasar]_[nomor].mp4)
 * └── audio/      (format: mp3, wav - nama: [kata_dasar]_[nomor].mp3)
 * 
 * CONTOH PATH LOKAL:
 * gambar: './media/images/cinta_1.jpg'
 * video: './media/videos/cinta_1.mp4'
 * audio: './media/audio/cinta_1.mp3'
 * 
 * VIDEO ALTERNATIF (YouTube Embed):
 * video: 'https://www.youtube.com/embed/videoId'
 */

const DATABASE = {
    // ===== KARAKTER A =====
    'A': {
        karakter: 'A',
        nama_karakter: 'A',
        kata_dasar: [
            {
                id: 'aku',
                nama: 'AKU',
                kalimat: [
                    {
                        id: 'aku_1',
                        teks: 'Aku adalah seorang siswa yang rajin belajar.',
                        info: {
                            deskripsi: 'Aku adalah kata ganti orang pertama tunggal yang digunakan untuk merujuk diri sendiri dalam percakapan sehari-hari. Kata ini memiliki makna yang sama dengan "saya" tetapi lebih informal dan sering digunakan dalam bahasa lisan. Penggunaan "aku" menciptakan keintiman dalam komunikasi.',
                            gambar: './media/images/aku_1.jpg',
                            video: './media/videos/aku_1.mp4',
                            audio: './media/audio/aku_1.mp3'
                        }
                    },
                    {
                        id: 'aku_2',
                        teks: 'Aku mencintai keluargaku dengan sepenuh hati.',
                        info: {
                            deskripsi: 'Penggunaan "aku" dalam konteks emosional menunjukkan kepribadian yang ekspresif dan terbuka. Dalam sastra dan puisi, "aku" sering digunakan untuk menciptakan suasana yang intim dengan pembaca. Kata ini fundamental dalam ekspresi diri manusia.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keluarga',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'aku_3',
                        teks: 'Aku ingin menjadi orang yang bermanfaat bagi masyarakat.',
                        info: {
                            deskripsi: 'Penggunaan "aku" dalam menyatakan aspirasi menunjukkan subjektivitas dan personal motivation. Ini merupakan cara yang kuat untuk mengekspresikan impian dan tujuan hidup seseorang dengan cara yang personal dan autentik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Aspirasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'aku_4',
                        teks: 'Aku telah belajar banyak dari pengalaman hidup.',
                        info: {
                            deskripsi: 'Dalam konteks pembelajaran, "aku" menunjukkan agency dan tanggung jawab personal terhadap pengembangan diri. Pengalaman hidup yang diceritakan dengan "aku" menjadi lebih relatable dan bermakna bagi audiens.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pembelajaran',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'aku_5',
                        teks: 'Aku berharap masa depan akan lebih cerah dan penuh harapan.',
                        info: {
                            deskripsi: 'Penggunaan "aku" dalam mengungkapkan harapan mencerminkan optimisme dan kepercayaan terhadap masa depan. Cara berbicara yang personal ini membuat pesan lebih meyakinkan dan tulus dari hati.',
                            gambar: 'https://via.placeholder.com/300x200?text=Harapan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'air',
                nama: 'AIR',
                kalimat: [
                    {
                        id: 'air_1',
                        teks: 'Air adalah kebutuhan pokok untuk kehidupan semua makhluk hidup.',
                        info: {
                            deskripsi: 'Air adalah zat cair yang terdiri dari hidrogen dan oksigen. Sebagai salah satu unsur alam paling penting, air memiliki peran vital dalam ekosistem dan kehidupan manusia. Tanpa air, semua kehidupan di bumi tidak mungkin terjadi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Air+Minum',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'air_2',
                        teks: 'Air laut mengandung garam yang tinggi dan kadar mineral lainnya.',
                        info: {
                            deskripsi: 'Air laut merupakan air yang menutupi sebagian besar permukaan bumi. Selain garam, air laut juga mengandung berbagai mineral dan nutrisi yang penting. Penelitian modern memanfaatkan air laut untuk berbagai keperluan medis dan industri.',
                            gambar: 'https://via.placeholder.com/300x200?text=Air+Laut',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'air_3',
                        teks: 'Air terjun yang indah menjadi destinasi wisata favorit.',
                        info: {
                            deskripsi: 'Air terjun adalah fenomena alam yang terbentuk dari aliran air yang jatuh dari ketinggian. Keindahan air terjun menjadikannya destinasi wisata yang sangat populer di berbagai negara. Air terjun juga memiliki potensi untuk pembangkit listrik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Air+Terjun',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'air_4',
                        teks: 'Air bersih harus dijaga dan dihemat untuk generasi mendatang.',
                        info: {
                            deskripsi: 'Krisis air bersih menjadi tantangan global yang serius. Konservasi dan pengelolaan air yang baik adalah tanggung jawab setiap individu dan pemerintah. Teknologi modern terus dikembangkan untuk memurnikan dan menghemat air.',
                            gambar: 'https://via.placeholder.com/300x200?text=Air+Bersih',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'air_5',
                        teks: 'Air memiliki sifat unik seperti dapat berubah wujud menjadi es atau uap.',
                        info: {
                            deskripsi: 'Air memiliki properti fisik yang unik di antara zat-zat alam. Siklus air yang melibatkan penguapan, kondensasi, dan presipitasi adalah fondasi dari sistem iklim bumi. Transformasi wujud air ini sangat penting untuk kehidupan planet kita.',
                            gambar: 'https://via.placeholder.com/300x200?text=Siklus+Air',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'api',
                nama: 'API',
                kalimat: [
                    {
                        id: 'api_1',
                        teks: 'Api adalah elemen yang memberikan kehangatan dan cahaya kepada manusia.',
                        info: {
                            deskripsi: 'Api atau api adalah reaksi kimia berupa oksidasi yang cepat dan menghasilkan energi panas serta cahaya. Dalam sejarah manusia, api memiliki peran sangat penting dalam perkembangan peradaban dan teknologi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Api',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'api_2',
                        teks: 'Api unggun di perkemahan menciptakan suasana hangat dan kebersamaan.',
                        info: {
                            deskripsi: 'Api unggun telah menjadi bagian dari budaya manusia sejak zaman purba. Berkumpul di sekitar api menciptakan ikatan sosial yang kuat. Dalam konteks modern, api unggun tetap menjadi simbol persahabatan dan kebersamaan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Api+Unggun',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'api_3',
                        teks: 'Api pembakar sampah harus diatur dengan hati-hati untuk mencegah polusi udara.',
                        info: {
                            deskripsi: 'Kontrol api dalam pembuangan limbah adalah isu lingkungan yang penting. Pembakaran limbah yang tidak teratur dapat menghasilkan polutan berbahaya. Teknologi incinerator modern dirancang untuk meminimalkan dampak lingkungan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Api+Kontrol',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'api_4',
                        teks: 'Api dalam tungku memasak telah digunakan manusia selama ribuan tahun.',
                        info: {
                            deskripsi: 'Memasak dengan api adalah praktek kuno yang mengubah cara manusia makan dan hidup. Teknologi memasak telah berkembang dari api terbuka hingga tungku kompor modern. Namun, beberapa budaya masih mempertahankan cara memasak tradisional dengan api.',
                            gambar: 'https://via.placeholder.com/300x200?text=Memasak',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'api_5',
                        teks: 'Api kebakaran hutan adalah bencana alam yang menghancurkan ekosistem.',
                        info: {
                            deskripsi: 'Kebakaran hutan adalah salah satu bencana alam paling merusak yang dapat terjadi. Penyebabnya bisa alami atau karena aktivitas manusia. Pencegahan dan manajemen kebakaran hutan adalah prioritas penting dalam konservasi lingkungan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kebakaran',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER N =====
    'N': {
        karakter: 'N',
        nama_karakter: 'N',
        kata_dasar: [
            {
                id: 'nasi',
                nama: 'NASI',
                kalimat: [
                    {
                        id: 'nasi_1',
                        teks: 'Saya makan nasi putih setiap hari.',
                        info: {
                            deskripsi: 'Nasi adalah makanan pokok yang terbuat dari beras yang telah dimasak dengan air. Nasi mengandung karbohidrat tinggi dan merupakan sumber energi utama bagi masyarakat Asia. Nasi putih adalah jenis nasi yang paling umum dikonsumsi dan memiliki rasa yang netral, cocok untuk berbagai lauk pauk.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nasi+Putih',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nasi_2',
                        teks: 'Nasi goreng adalah hidangan favorit di Indonesia.',
                        info: {
                            deskripsi: 'Nasi goreng merupakan olahan nasi yang dimasak kembali dengan bumbu-bumbu dan bahan pelengkap seperti telur, sayuran, dan daging. Hidangan ini memiliki rasa yang gurih dan pedas, serta mudah dibuat. Nasi goreng sering dijajakan di pinggir jalan dan menjadi makanan cepat saji yang populer.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nasi+Goreng',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nasi_3',
                        teks: 'Bubur nasi adalah makanan ringan untuk sarapan.',
                        info: {
                            deskripsi: 'Bubur nasi adalah nasi yang dimasak dengan cairan lebih banyak sehingga teksturnya menjadi lembut dan mudah dicerna. Bubur nasi cocok untuk bayi, anak-anak, dan orang-orang yang sakit karena mudah dicerna. Bubur nasi dapat disajikan dengan berbagai topping seperti telur, asin, dan lauk pauk lainnya.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bubur+Nasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nasi_4',
                        teks: 'Nasi kuning dimasak dengan santan dan kunyit.',
                        info: {
                            deskripsi: 'Nasi kuning adalah nasi yang dimasak dengan santan, kunyit, dan rempah-rempah lainnya yang memberikan warna kuning dan aroma khas. Hidangan ini sering disajikan pada acara-acara khusus seperti pernikahan, khitanan, dan perayaan lainnya. Nasi kuning memiliki rasa yang gurih dan aroma yang harum dari rempah-rempahnya.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nasi+Kuning',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nasi_5',
                        teks: 'Nasi uduk adalah hidangan tradisional dari Jakarta.',
                        info: {
                            deskripsi: 'Nasi uduk adalah nasi yang dimasak dengan santan, daun pandan, garam, dan gula yang memberikan rasa gurih dan wangi. Hidangan ini berasal dari Jakarta dan sering dijajakan di pagi hari sebagai sarapan. Nasi uduk biasanya disajikan dengan lauk pauk seperti telur, kacang, dan ikan teri.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nasi+Uduk',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'nama',
                nama: 'NAMA',
                kalimat: [
                    {
                        id: 'nama_1',
                        teks: 'Nama saya adalah Gary Andreas.',
                        info: {
                            deskripsi: 'Nama adalah identitas yang diberikan kepada seseorang untuk membedakannya dengan orang lain. Nama memiliki makna tersendiri dan sering kali dipilih dengan cermat oleh orang tua. Nama dapat terdiri dari satu kata atau lebih dan dapat berasal dari berbagai budaya dan bahasa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nama+Identitas',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nama_2',
                        teks: 'Nama kota ini adalah Pekanbaru.',
                        info: {
                            deskripsi: 'Nama adalah label yang diberikan kepada tempat atau benda untuk mengidentifikasinya. Setiap kota, desa, dan wilayah memiliki nama unik yang membedakannya dari tempat lain. Nama tempat sering kali memiliki arti historis atau budaya yang mendalam.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nama+Kota',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nama_3',
                        teks: 'Apa nama hewan peliharaanmu?',
                        info: {
                            deskripsi: 'Pemberian nama pada hewan peliharaan menunjukkan kedekatan dan kasih sayang pemiliknya. Nama hewan peliharaan biasanya dipilih berdasarkan karakter, penampilan, atau kesukaaan pemiliknya. Nama yang baik untuk hewan peliharaan adalah nama yang mudah diingat dan diucapkan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nama+Hewan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nama_4',
                        teks: 'Nama produk ini sangat menarik dan mudah diingat.',
                        info: {
                            deskripsi: 'Nama produk adalah identitas dari suatu barang atau layanan yang dipasarkan. Nama produk yang baik harus mudah diingat, menarik, dan mencerminkan kualitas atau fungsi produk tersebut. Penamaan produk merupakan strategi pemasaran penting untuk menarik perhatian konsumen.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nama+Produk',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nama_5',
                        teks: 'Nama ilmiah makhluk hidup sangat penting dalam biologi.',
                        info: {
                            deskripsi: 'Nama ilmiah adalah istilah dalam bahasa Latin yang digunakan untuk mengidentifikasi makhluk hidup secara universal. Sistem penamaan ilmiah menggunakan dua bagian: genus dan spesies (sistem binomial). Nama ilmiah memastikan bahwa semua ilmuwan di dunia berbicara tentang organisme yang sama.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nama+Ilmiah',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'nenek',
                nama: 'NENEK',
                kalimat: [
                    {
                        id: 'nenek_1',
                        teks: 'Nenek saya tinggal di rumah yang besar di tepi sungai.',
                        info: {
                            deskripsi: 'Nenek adalah orangtua dari ayah atau ibu seseorang, juga dikenal sebagai kakek perempuan. Nenek memiliki peranan penting dalam keluarga sebagai penyimpan tradisi dan kebijaksanaan. Banyak nenek yang masih aktif membantu dalam mengasuh cucu dan membimbing generasi muda.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nenek',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nenek_2',
                        teks: 'Nenek saya ahli dalam membuat kue tradisional.',
                        info: {
                            deskripsi: 'Banyak nenek yang memiliki keahlian khusus yang diwariskan dari generasi ke generasi. Keterampilan memasak, menenun, atau menjahit adalah beberapa keahlian tradisional yang sering diajarkan nenek kepada cucu-cucunya. Pengetahuan ini sangat berharga dalam melestarikan budaya lokal.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nenek+Memasak',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nenek_3',
                        teks: 'Saya sering mendengarkan cerita dari nenek tentang zaman dahulu.',
                        info: {
                            deskripsi: 'Cerita dari nenek tentang masa lalu merupakan warisan budaya yang berharga. Kisah-kisah ini memberikan perspektif tentang sejarah keluarga dan masyarakat. Mendengarkan cerita nenek juga memperkuat hubungan antar generasi dalam keluarga.',
                            gambar: 'https://via.placeholder.com/300x200?text=Cerita+Nenek',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nenek_4',
                        teks: 'Nenek saya selalu memberikan nasihat yang bijaksana.',
                        info: {
                            deskripsi: 'Pengalaman hidup yang panjang membuat nenek memiliki banyak nasihat berharga. Kebijaksanaan nenek dapat membantu cucu-cucu menghadapi tantangan dalam hidup. Peranan nenek sebagai pemberi nasihat sangat penting dalam membentuk karakter generasi muda.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nasihat+Nenek',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'nenek_5',
                        teks: 'Setiap akhir pekan saya berkunjung ke rumah nenek.',
                        info: {
                            deskripsi: 'Kunjungan rutin ke rumah nenek adalah tradisi yang memperkuat ikatan keluarga. Waktu yang dihabiskan bersama nenek memberikan kehangatan dan kasih sayang yang tak tergantikan. Momen-momen ini menciptakan kenangan indah yang akan diingat sepanjang hidup.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kunjung+Nenek',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER M =====
    'M': {
        karakter: 'M',
        nama_karakter: 'M',
        kata_dasar: [
            {
                id: 'makan',
                nama: 'MAKAN',
                kalimat: [
                    {
                        id: 'makan_1',
                        teks: 'Saya makan tiga kali sehari untuk menjaga kesehatan.',
                        info: {
                            deskripsi: 'Makan adalah aktivitas mengonsumsi makanan untuk memenuhi kebutuhan nutrisi tubuh. Makan secara teratur dan sehat adalah fondasi dari kehidupan yang sehat dan produktif. Kebiasaan makan yang baik membantu tubuh memiliki energi dan daya tahan yang optimal.',
                            gambar: 'https://via.placeholder.com/300x200?text=Makan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'makan_2',
                        teks: 'Makan bersama keluarga menciptakan bonding yang kuat.',
                        info: {
                            deskripsi: 'Waktu makan bersama adalah momen penting untuk berinteraksi dengan keluarga. Rutinitas makan bersama memperkuat hubungan antar anggota keluarga dan memberikan kesempatan untuk berkomunikasi. Momen ini juga membantu anak belajar tentang etika dan sopan santun.',
                            gambar: 'https://via.placeholder.com/300x200?text=Makan+Bersama',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'makan_3',
                        teks: 'Makanan sehat harus dimakan secara rutin untuk mencegah penyakit.',
                        info: {
                            deskripsi: 'Pilihan makanan yang tepat sangat mempengaruhi kesehatan jangka panjang. Makanan yang kaya akan nutrisi seperti sayuran, buah, dan protein membantu tubuh tetap kuat. Menghindari makanan tidak sehat dan berlebihan adalah kunci untuk hidup sehat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Makanan+Sehat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'makan_4',
                        teks: 'Makan terlalu cepat dapat menyebabkan masalah pencernaan.',
                        info: {
                            deskripsi: 'Kecepatan makan mempengaruhi proses pencernaan dan penyerapan nutrisi. Mengunyah makanan dengan baik membantu sistem pencernaan bekerja dengan lebih efisien. Ritual makan yang santai dan penuh perhatian lebih bermanfaat bagi kesehatan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Makan+Sehat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'makan_5',
                        teks: 'Menu makan setiap hari harus bervariasi untuk mendapat nutrisi lengkap.',
                        info: {
                            deskripsi: 'Variasi makanan memastikan tubuh mendapatkan berbagai nutrisi yang dibutuhkan. Menu yang beragam juga membuat makan time lebih menyenangkan dan tidak membosankan. Kombinasi sempurna dari karbohidrat, protein, lemak, vitamin, dan mineral adalah kunci nutrisi seimbang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Menu+Sehat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'mobil',
                nama: 'MOBIL',
                kalimat: [
                    {
                        id: 'mobil_1',
                        teks: 'Mobil adalah kendaraan roda empat yang banyak digunakan untuk transportasi.',
                        info: {
                            deskripsi: 'Mobil adalah alat transportasi darat yang paling umum digunakan di seluruh dunia. Perkembangan mobil dari zaman dahulu hingga sekarang menunjukkan kemajuan teknologi manusia. Mobil modern dilengkapi dengan berbagai fitur keamanan dan kenyamanan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Mobil',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'mobil_2',
                        teks: 'Berkendara mobil memerlukan surat izin mengemudi yang sah.',
                        info: {
                            deskripsi: 'Setiap pengemudi harus memiliki Surat Izin Mengemudi (SIM) yang dikeluarkan oleh pemerintah. SIM adalah bukti bahwa seseorang telah lulus tes kompetensi berkendara. Berkendara tanpa SIM adalah pelanggaran hukum yang dapat dikenakan denda.',
                            gambar: 'https://via.placeholder.com/300x200?text=SIM',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'mobil_3',
                        teks: 'Perawatan mobil secara berkala memperpanjang umur kendaraan.',
                        info: {
                            deskripsi: 'Maintenance rutin seperti penggantian oli, filter, dan pemeriksaan rem sangat penting untuk keselamatan. Mobil yang terawat dengan baik memiliki performa optimal dan biaya perbaikan lebih rendah. Pemilik mobil harus memiliki pengetahuan dasar tentang perawatan kendaraan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Perawatan+Mobil',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'mobil_4',
                        teks: 'Mobil listrik menjadi pilihan transportasi ramah lingkungan di masa depan.',
                        info: {
                            deskripsi: 'Mobil listrik adalah inovasi terbaru dalam industri otomotif yang bertujuan mengurangi emisi karbon. Kendaraan ini menggunakan baterai yang dapat diisi ulang untuk menggerakkan motor listrik. Penggunaan mobil listrik secara massal dapat membantu mengatasi masalah polusi udara.',
                            gambar: 'https://via.placeholder.com/300x200?text=Mobil+Listrik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'mobil_5',
                        teks: 'Keselamatan berkendara adalah prioritas utama setiap pengemudi mobil.',
                        info: {
                            deskripsi: 'Keselamatan di jalan raya melibatkan kepatuhan pada peraturan lalu lintas, penggunaan sabuk pengaman, dan kecepatan yang aman. Kecelakaan lalu lintas adalah penyebab kematian tertinggi di dunia. Setiap pengemudi bertanggung jawab untuk menjaga keselamatan diri dan pengguna jalan lainnya.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keselamatan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER B =====
    'B': {
        karakter: 'B',
        nama_karakter: 'B',
        kata_dasar: [
            {
                id: 'buku',
                nama: 'BUKU',
                kalimat: [
                    {
                        id: 'buku_1',
                        teks: 'Buku adalah sumber pengetahuan yang tak ternilai harganya.',
                        info: {
                            deskripsi: 'Buku adalah kumpulan lembaran kertas yang diikat dan berisi tulisan atau gambar. Buku telah menjadi medium utama untuk menyimpan dan menyebarkan pengetahuan selama berabad-abad. Dalam era digital ini, buku tetap memiliki tempat penting dalam pendidikan dan hiburan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Buku',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'buku_2',
                        teks: 'Membaca buku adalah hobi yang bermanfaat untuk pengembangan diri.',
                        info: {
                            deskripsi: 'Membaca buku dapat membuka wawasan, meningkatkan pengetahuan, dan mengembangkan imajinasi. Setiap buku memiliki pesan unik dan pengalaman belajar yang berbeda. Hobi membaca adalah investasi terbaik untuk pertumbuhan pribadi dan intelektual.',
                            gambar: 'https://via.placeholder.com/300x200?text=Membaca+Buku',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'buku_3',
                        teks: 'Perpustakaan adalah tempat yang penuh dengan berbagai macam buku.',
                        info: {
                            deskripsi: 'Perpustakaan adalah institusi yang menyediakan akses kepada koleksi buku dan sumber informasi lainnya. Perpustakaan memainkan peran penting dalam menyebarkan pengetahuan kepada masyarakat luas. Kunjungan ke perpustakaan dapat memberikan pengalaman belajar yang kaya dan menyenangkan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Perpustakaan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'buku_4',
                        teks: 'Menulis buku memerlukan dedikasi, imajinasi, dan kerja keras yang luar biasa.',
                        info: {
                            deskripsi: 'Proses penulisan buku adalah perjalanan yang panjang dan menantang. Penulis harus mengembangkan ide, melakukan riset, dan merevisi berkali-kali untuk menghasilkan karya yang baik. Setiap buku yang berhasil diterbitkan adalah hasil dari kerja keras dan dedikasi penulis.',
                            gambar: 'https://via.placeholder.com/300x200?text=Menulis+Buku',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'buku_5',
                        teks: 'Buku elektronik atau e-book semakin populer di era digital ini.',
                        info: {
                            deskripsi: 'E-book adalah format digital dari buku yang dapat diakses melalui perangkat elektronik seperti tablet dan smartphone. E-book menawarkan kemudahan dan fleksibilitas dalam membaca, serta dapat mengurangi dampak lingkungan. Namun, banyak pembaca masih lebih suka membaca buku fisik tradisional.',
                            gambar: 'https://via.placeholder.com/300x200?text=E-Book',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'bulan',
                nama: 'BULAN',
                kalimat: [
                    {
                        id: 'bulan_1',
                        teks: 'Bulan adalah satelit alami bumi yang bersinar di malam hari.',
                        info: {
                            deskripsi: 'Bulan adalah satuan waktu yang terdiri dari sekitar 30 hari, dan juga merupakan satelit alami planet Bumi. Bulan memiliki gravitasi yang mempengaruhi pasang surut lautan dan memiliki dampak signifikan pada kehidupan di bumi. Cahaya bulan yang indah telah menginspirasi banyak karya seni dan literatur.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bulan+Malam',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'bulan_2',
                        teks: 'Setiap bulan memiliki karakteristik cuaca yang berbeda.',
                        info: {
                            deskripsi: 'Perubahan musim sepanjang tahun terjadi karena rotasi bumi dan perubahannya terhadap matahari. Setiap bulan memiliki pola cuaca, suhu, dan curah hujan yang berbeda. Pemahaman tentang karakteristik bulanan penting untuk pertanian, navigasi, dan perencanaan aktivitas.',
                            gambar: 'https://via.placeholder.com/300x200?text=Musim',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'bulan_3',
                        teks: 'Bulan purnama menciptakan suasana yang sangat romantis dan mistis.',
                        info: {
                            deskripsi: 'Bulan purnama terjadi ketika bulan berada di posisi berlawanan dengan matahari sehingga seluruh sisinya yang menghadap bumi terlihat terang. Bulan purnama memiliki makna khusus dalam berbagai budaya dan sering menjadi latar belakang cerita-cerita mistis. Cahayanya yang terang memudahkan aktivitas malam hari.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bulan+Purnama',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'bulan_4',
                        teks: 'Bulan Ramadan adalah bulan suci bagi umat Islam di seluruh dunia.',
                        info: {
                            deskripsi: 'Ramadan adalah bulan ke-9 dalam kalender Hijriah yang dipandang sangat suci dalam Islam. Selama bulan ini, umat Muslim berpuasa dari fajar hingga magrib dan melakukan berbagai ibadah. Ramadan adalah waktu untuk refleksi, disiplin diri, dan berkurban untuk sesama.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ramadan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'bulan_5',
                        teks: 'Kalender bulan digunakan untuk menentukan tanggal dan merencanakan aktivitas.',
                        info: {
                            deskripsi: 'Kalender adalah sistem untuk mengorganisir waktu dalam satuan hari, minggu, bulan, dan tahun. Kalender modern umumnya mengikuti kalender Gregorian yang dibuat oleh Paus Gregorius XIII. Kalender membantu manusia untuk mengatur waktu dan merencanakan kehidupan mereka dengan efisien.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kalender',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER P =====
    'P': {
        karakter: 'P',
        nama_karakter: 'P',
        kata_dasar: [
            {
                id: 'padi',
                nama: 'PADI',
                kalimat: [
                    {
                        id: 'padi_1',
                        teks: 'Padi adalah tanaman yang menghasilkan beras sebagai makanan pokok.',
                        info: {
                            deskripsi: 'Padi adalah tanaman serealia yang ditanam di sawah atau ladang. Padi telah menjadi sumber pangan utama bagi miliaran orang di seluruh dunia, terutama di Asia. Hasil panen padi diproses menjadi beras yang merupakan makanan pokok untuk sebagian besar populasi dunia.',
                            gambar: 'https://via.placeholder.com/300x200?text=Padi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'padi_2',
                        teks: 'Petani padi harus bekerja keras di sawah untuk mendapatkan hasil panen yang baik.',
                        info: {
                            deskripsi: 'Proses pertanian padi meliputi persiapan lahan, penanaman, pemeliharaan, dan panen. Petani padi menghadapi berbagai tantangan seperti hama, penyakit, dan perubahan iklim. Kerja keras petani adalah kunci dari ketahanan pangan nasional dan kesejahteraan masyarakat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Petani',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'padi_3',
                        teks: 'Teknologi pertanian modern meningkatkan produktivitas lahan padi.',
                        info: {
                            deskripsi: 'Inovasi teknologi dalam pertanian termasuk penggunaan bibit unggul, mesin pertanian, dan sistem irigasi modern. Teknologi ini membantu petani meningkatkan hasil panen dan mengurangi beban kerja. Pertanian precision memungkinkan pengoptimalan penggunaan air, pupuk, dan pestisida.',
                            gambar: 'https://via.placeholder.com/300x200?text=Teknologi+Padi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'padi_4',
                        teks: 'Hasil panen padi sangat bergantung pada cuaca dan kondisi lahan.',
                        info: {
                            deskripsi: 'Iklim yang tepat, curah hujan yang cukup, dan kualitas tanah yang baik sangat penting untuk pertumbuhan padi. Musim tanam padi umumnya bertepatan dengan musim hujan untuk memastikan ketersediaan air yang cukup. Perubahan iklim global menjadi tantangan baru bagi ketahanan pangan padi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sawah+Padi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'padi_5',
                        teks: 'Padi organik semakin diminati karena lebih aman bagi kesehatan dan lingkungan.',
                        info: {
                            deskripsi: 'Pertanian organik menghindari penggunaan pestisida dan pupuk sintetis yang berbahaya. Beras organik memiliki nilai gizi yang lebih tinggi dan lebih aman untuk dikonsumsi. Gerakan pertanian organik juga membantu melestarikan lingkungan dan biodiversity.',
                            gambar: 'https://via.placeholder.com/300x200?text=Padi+Organik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'pohon',
                nama: 'POHON',
                kalimat: [
                    {
                        id: 'pohon_1',
                        teks: 'Pohon adalah tumbuhan besar yang memberikan banyak manfaat bagi manusia dan lingkungan.',
                        info: {
                            deskripsi: 'Pohon adalah organisme berukuran besar dengan batang kayu yang kuat. Pohon memiliki peran penting dalam ekosistem sebagai penghasil oksigen dan penyerap karbon dioksida. Pohon juga menyediakan makanan, obat-obatan, dan bahan baku untuk industri.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pohon',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'pohon_2',
                        teks: 'Pohon buah memberikan makanan bergizi yang kaya akan vitamin dan mineral.',
                        info: {
                            deskripsi: 'Pohon buah seperti mangga, jeruk, pisang, dan apel menghasilkan buah yang lezat dan bergizi. Buah dari pohon ini kaya akan vitamin C, serat, dan mineral yang penting untuk kesehatan. Pohon buah juga memiliki nilai ekonomi tinggi bagi petani dan pedagang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pohon+Buah',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'pohon_3',
                        teks: 'Penghijauan dengan menanam pohon adalah cara efektif untuk mengatasi pemanasan global.',
                        info: {
                            deskripsi: 'Penanaman pohon secara besar-besaran membantu mengurangi konsentrasi karbon dioksida di atmosfer. Hutan yang lebih luas juga membantu menjaga keseimbangan iklim dan melestarikan keanekaragaman hayati. Program penghijauan menjadi bagian penting dari strategi mitigasi perubahan iklim.',
                            gambar: 'https://via.placeholder.com/300x200?text=Penghijauan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'pohon_4',
                        teks: 'Pohon kayu digunakan untuk bahan baku pembuatan mebel dan material bangunan.',
                        info: {
                            deskripsi: 'Kayu dari pohon digunakan untuk membuat furniture, lantai, pintu, dan berbagai produk kerajinan. Industri kayu memiliki nilai ekonomi yang besar namun harus seimbang dengan konservasi hutan. Penggunaan kayu berkelanjutan adalah kunci untuk menjaga kelestarian hutan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pohon+Kayu',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'pohon_5',
                        teks: 'Pohon yang tertua di dunia memiliki usia ribuan tahun dan menyimpan sejarah panjang.',
                        info: {
                            deskripsi: 'Beberapa pohon kuno seperti pohon baobab dan pohon cemara memiliki usia lebih dari 3000 tahun. Pohon-pohon ini adalah saksi hidup dari sejarah dan perubahan lingkungan sepanjang milenium. Pelestarian pohon kuno penting untuk penelitian ilmiah dan warisan budaya.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pohon+Kuno',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER C =====
    'C': {
        karakter: 'C',
        nama_karakter: 'C',
        kata_dasar: [
            {
                id: 'cinta',
                nama: 'CINTA',
                kalimat: [
                    {
                        id: 'cinta_1',
                        teks: 'Cinta adalah perasaan mendalam yang menyatukan dua jiwa.',
                        info: {
                            deskripsi: 'Cinta adalah emosi positif yang paling kuat dalam kehidupan manusia. Cinta dapat mengubah cara kita melihat dunia dan membuat hidup lebih bermakna. Cinta bukan hanya tentang romantis, tetapi juga tentang kasih sayang, pengorbanan, dan komitmen yang tulus.',
                            gambar: 'https://via.placeholder.com/300x200?text=Cinta',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cinta_2',
                        teks: 'Cinta sejati tidak pernah meminta balasan tetapi memberikan dengan sepenuh hati.',
                        info: {
                            deskripsi: 'Cinta sejati adalah tentang memberi tanpa mengharapkan imbalan. Bentuk cinta ini paling mulia dan mengubah hidup. Cinta sejati mendorong kita untuk menjadi versi terbaik dari diri kita dan berkontribusi untuk kebaikan orang lain.',
                            gambar: 'https://via.placeholder.com/300x200?text=Cinta+Sejati',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cinta_3',
                        teks: 'Cinta kepada keluarga adalah fondasi dari segala cinta lainnya.',
                        info: {
                            deskripsi: 'Cinta keluarga adalah cinta pertama yang kita kenal sejak lahir. Ikatan keluarga yang dibangun atas dasar cinta akan bertahan selamanya. Cinta keluarga mengajarkan kita tentang loyalitas, dukungan, dan pengorbanan tanpa syarat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keluarga',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cinta_4',
                        teks: 'Cinta kepada pekerjaan membuat kita bekerja dengan antusias dan dedikasi.',
                        info: {
                            deskripsi: 'Ketika kita mencintai apa yang kita lakukan, pekerjaan tidak lagi terasa seperti beban. Cinta terhadap pekerjaan membuat kita lebih produktif dan menciptakan karya yang berkualitas. Passion dan cinta adalah kunci kesuksesan dalam karir.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pekerjaan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cinta_5',
                        teks: 'Cinta kepada kehidupan membuat setiap hari menjadi berkah yang berharga.',
                        info: {
                            deskripsi: 'Cinta kehidupan adalah apresiasi terhadap setiap momen yang kita miliki. Dengan mencintai kehidupan, kita menjadi lebih bersyukur dan menemukan kebahagiaan dalam hal-hal sederhana. Cinta kehidupan membuat kita menjalani hari dengan penuh makna dan tujuan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kehidupan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'cahaya',
                nama: 'CAHAYA',
                kalimat: [
                    {
                        id: 'cahaya_1',
                        teks: 'Cahaya matahari memberikan energi dan kehangatan bagi semua kehidupan.',
                        info: {
                            deskripsi: 'Cahaya adalah bentuk energi yang paling penting bagi kehidupan di bumi. Cahaya matahari tidak hanya memberikan panas tetapi juga menggerakkan fotosintesis yang menjadi dasar rantai makanan. Tanpa cahaya matahari, tidak ada kehidupan di planet ini.',
                            gambar: 'https://via.placeholder.com/300x200?text=Cahaya+Matahari',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cahaya_2',
                        teks: 'Cahaya lampu menerangi malam dan membuat hidup lebih nyaman.',
                        info: {
                            deskripsi: 'Penciptaan lampu listrik telah mengubah cara manusia hidup secara fundamental. Cahaya buatan memungkinkan kita untuk bekerja, belajar, dan bermain kapan saja. Teknologi pencahayaan terus berkembang untuk efisiensi energi dan kenyamanan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Lampu',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cahaya_3',
                        teks: 'Cahaya dalam kiasan melambangkan harapan dan kebaikan.',
                        info: {
                            deskripsi: 'Dalam banyak budaya dan literatur, cahaya menjadi simbol harapan, kebaikan, dan kebenaran. Cahaya melawan kegelapan dan membawa optimisme. Frasa seperti "membawa cahaya dalam hidup seseorang" menunjukkan dampak positif yang kita bisa berikan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Harapan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cahaya_4',
                        teks: 'Cahaya lilin menciptakan suasana yang hangat dan romantis.',
                        info: {
                            deskripsi: 'Cahaya lilin telah digunakan manusia selama berabad-abad untuk penerangan dan upacara spiritual. Meskipun sekarang ada teknologi pencahayaan modern, cahaya lilin masih dipilih untuk menciptakan suasana yang intim. Kehangatan cahaya lilin memberikan rasa nyaman dan kedamaian.',
                            gambar: 'https://via.placeholder.com/300x200?text=Lilin',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'cahaya_5',
                        teks: 'Cahaya laser memiliki aplikasi penting dalam teknologi dan medis.',
                        info: {
                            deskripsi: 'Cahaya laser adalah cahaya terkoherensi yang memiliki sifat unik dan aplikasi luas. Laser digunakan dalam operasi medis, manufaktur, komunikasi, dan penelitian ilmiah. Penemuan laser telah membuka kemungkinan baru dalam berbagai bidang teknologi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Laser',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER D =====
    'D': {
        karakter: 'D',
        nama_karakter: 'D',
        kata_dasar: [
            {
                id: 'damai',
                nama: 'DAMAI',
                kalimat: [
                    {
                        id: 'damai_1',
                        teks: 'Damai adalah keadaan tenang tanpa konflik dan kekerasan.',
                        info: {
                            deskripsi: 'Damai adalah salah satu nilai paling berharga dalam kehidupan manusia dan masyarakat. Damai memungkinkan kita untuk hidup dengan aman, berkembang, dan berinovasi. Pencapaian damai dunia memerlukan kerja sama, pemahaman, dan dialog yang tulus dari semua pihak.',
                            gambar: 'https://via.placeholder.com/300x200?text=Damai',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'damai_2',
                        teks: 'Damai jiwa adalah kesejahteraan mental dan emosional yang setiap orang butuhkan.',
                        info: {
                            deskripsi: 'Perdamaian batin adalah keadaan ketika pikiran kita bebas dari kecemasan dan kekhawatiran. Mencapai damai jiwa memerlukan praktik meditasi, mindfulness, dan refleksi diri. Ketika kita memiliki damai jiwa, kita dapat menghadapi tantangan hidup dengan lebih bijak.',
                            gambar: 'https://via.placeholder.com/300x200?text=Damai+Jiwa',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'damai_3',
                        teks: 'Damai sejati datang dari penerimaan dan pengampunan terhadap masa lalu.',
                        info: {
                            deskripsi: 'Untuk mencapai damai, kita perlu melepaskan amarah dan dendam dari masa lalu. Pengampunan bukanlah tanda kelemahan tetapi kekuatan dan kedewasaan spiritual. Dengan melepaskan masa lalu, kita membuka ruang untuk masa depan yang lebih baik dan damai.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pengampunan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'damai_4',
                        teks: 'Damai dalam keluarga dimulai dengan komunikasi yang jujur dan saling menghormati.',
                        info: {
                            deskripsi: 'Keluarga yang damai adalah fondasi masyarakat yang sehat dan berkembang. Komunikasi terbuka, saling menghormati, dan kompromi adalah kunci damai keluarga. Setiap anggota keluarga perlu berkontribusi dalam menjaga ketenangan dan kenyamanan bersama.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keluarga+Damai',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'damai_5',
                        teks: 'Damai dunia dimulai dengan damai di hati setiap individu.',
                        info: {
                            deskripsi: 'Perubahan global dimulai dari perubahan individual. Ketika setiap orang mengusahakan damai dalam diri mereka, dampak positifnya akan meradiar ke seluruh masyarakat. Gerakan perdamaian dimulai dari satu orang yang percaya pada kekuatan perubahan positif.',
                            gambar: 'https://via.placeholder.com/300x200?text=Damai+Dunia',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'doa',
                nama: 'DOA',
                kalimat: [
                    {
                        id: 'doa_1',
                        teks: 'Doa adalah ungkapan hati kepada Tuhan dengan harapan dan kepercayaan.',
                        info: {
                            deskripsi: 'Doa adalah praktik spiritual yang universal di berbagai agama dan budaya. Doa bukan hanya tentang meminta sesuatu tetapi juga tentang berbicara dengan Tuhan, bersyukur, dan mencari bimbingan. Doa memberikan kekuatan, harapan, dan kedamaian kepada mereka yang berdoa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Doa',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'doa_2',
                        teks: 'Doa pagi membuat hari dimulai dengan energi positif dan harapan baru.',
                        info: {
                            deskripsi: 'Tradisi berdoa di pagi hari memiliki manfaat psikologis dan spiritual yang besar. Doa pagi membantu kita untuk fokus, bersyukur, dan mempersiapkan diri menghadapi tantangan hari. Ritual pagi yang melibatkan doa menciptakan momentum positif untuk seluruh hari.',
                            gambar: 'https://via.placeholder.com/300x200?text=Doa+Pagi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'doa_3',
                        teks: 'Doa malam adalah waktu refleksi dan bersyukur atas kehidupan.',
                        info: {
                            deskripsi: 'Berdoa di malam hari memungkinkan kita untuk merenungkan hari yang telah berlalu. Doa malam adalah kesempatan untuk bersyukur atas berkah, memohon pengampunan, dan mempersiapkan diri untuk istirahat. Ritual ini membantu kita tidur dengan damai dan tenang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Doa+Malam',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'doa_4',
                        teks: 'Doa untuk kesehatan adalah permohonan yang paling diinginkan oleh setiap orang.',
                        info: {
                            deskripsi: 'Kesehatan adalah kekayaan sejati yang sering kita ambil begitu saja. Doa untuk kesehatan adalah ungkapan harapan agar kita dan orang tersayang senantiasa sehat dan kuat. Kesehatan fisik dan mental adalah fondasi untuk menjalani hidup yang bermakna.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kesehatan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'doa_5',
                        teks: 'Doa untuk orang lain adalah manifestasi kasih sayang dan kepedulian.',
                        info: {
                            deskripsi: 'Berdoa untuk orang lain adalah tindakan mulia yang menunjukkan empati dan kasih sayang. Ketika kita berdoa untuk kesejahteraan orang lain, kita menunjukkan bahwa kita peduli pada mereka. Doa untuk orang lain dapat membawa perubahan positif dalam hidup mereka.',
                            gambar: 'https://via.placeholder.com/300x200?text=Berbagi+Doa',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER E =====
    'E': {
        karakter: 'E',
        nama_karakter: 'E',
        kata_dasar: [
            {
                id: 'energi',
                nama: 'ENERGI',
                kalimat: [
                    {
                        id: 'energi_1',
                        teks: 'Energi adalah kemampuan untuk melakukan kerja dan menggerakkan perubahan.',
                        info: {
                            deskripsi: 'Energi adalah konsep fundamental dalam fisika yang menggambarkan kapasitas untuk melakukan kerja. Energi ada dalam berbagai bentuk: kinetik, potensial, termal, listrik, dan lainnya. Kehidupan modern kita sangat bergantung pada konversi dan penggunaan energi yang efisien.',
                            gambar: 'https://via.placeholder.com/300x200?text=Energi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'energi_2',
                        teks: 'Energi positif dalam diri membuat kita antusias dan produktif.',
                        info: {
                            deskripsi: 'Energi positif adalah keadaan mental dan emosional yang membuat kita semangat menghadapi hidup. Energi positif menular dan dapat mempengaruhi orang-orang di sekitar kita. Menjaga energi positif memerlukan aktivitas fisik, nutrisi baik, tidur cukup, dan pikiran yang optimis.',
                            gambar: 'https://via.placeholder.com/300x200?text=Energi+Positif',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'energi_3',
                        teks: 'Energi terbarukan seperti matahari dan angin adalah masa depan planet kita.',
                        info: {
                            deskripsi: 'Energi terbarukan adalah sumber energi yang dapat diperbaharui secara alami dan berkelanjutan. Transisi dari bahan bakar fosil ke energi terbarukan adalah keharusan untuk menyelamatkan planet. Teknologi panel surya, turbin angin, dan sumber energi terbarukan lainnya terus berkembang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Energi+Terbarukan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'energi_4',
                        teks: 'Energi makanan adalah bahan bakar yang dibutuhkan tubuh untuk berfungsi.',
                        info: {
                            deskripsi: 'Makanan yang kita konsumsi diubah menjadi energi untuk menjalankan fungsi tubuh. Kalori adalah satuan ukuran energi dalam makanan. Pilihan makanan yang tepat memastikan tubuh mendapatkan energi yang cukup dan nutrisi yang seimbang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nutrisi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'energi_5',
                        teks: 'Energi spiritual memberikan makna dan tujuan dalam hidup kita.',
                        info: {
                            deskripsi: 'Energi spiritual adalah koneksi dengan sesuatu yang lebih besar dari diri kita sendiri. Energi ini dapat datang dari agama, seni, alam, atau hubungan manusiawi. Energi spiritual memberikan kekuatan untuk menghadapi kesulitan dan menjalani hidup dengan tujuan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Spiritual',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'ekspor',
                nama: 'EKSPOR',
                kalimat: [
                    {
                        id: 'ekspor_1',
                        teks: 'Ekspor adalah pengiriman barang atau jasa ke luar negeri untuk dijual.',
                        info: {
                            deskripsi: 'Ekspor adalah bagian penting dari perdagangan internasional yang mendorong pertumbuhan ekonomi. Negara-negara mengekspor produk yang mereka hasilkan dengan efisien untuk mendapatkan penerimaan devisa. Ekspor juga membuka peluang bagi perusahaan lokal untuk berkembang dan bersaing global.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ekspor',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ekspor_2',
                        teks: 'Produk ekspor Indonesia mencakup berbagai komoditas dari pertanian hingga industri.',
                        info: {
                            deskripsi: 'Indonesia adalah pengekspor besar untuk berbagai produk seperti minyak kelapa sawit, kopi, cokelat, dan tekstil. Sektor ekspor berkontribusi signifikan terhadap perekonomian Indonesia. Peningkatan kualitas produk ekspor membantu Indonesia bersaing di pasar global.',
                            gambar: 'https://via.placeholder.com/300x200?text=Produk+Ekspor',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ekspor_3',
                        teks: 'Dokumentasi ekspor yang lengkap dan tepat waktu sangat penting untuk kelancaran perdagangan.',
                        info: {
                            deskripsi: 'Proses ekspor melibatkan berbagai dokumen seperti invoice, packing list, dan sertifikat asal. Keakuratan dan kelengkapan dokumentasi memastikan barang sampai dengan aman dan tepat waktu. Sistem pelacakan dan teknologi blockchain mulai digunakan untuk transparansi ekspor.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dokumentasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ekspor_4',
                        teks: 'Bea cukai dan regulasi mengatur proses ekspor untuk menjaga standar kualitas.',
                        info: {
                            deskripsi: 'Bea cukai adalah lembaga pemerintah yang mengawasi proses ekspor dan impor. Regulasi ekspor dibuat untuk memastikan produk memenuhi standar kualitas dan keamanan internasional. Kepatuhan terhadap regulasi meningkatkan kepercayaan pembeli internasional.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bea+Cukai',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ekspor_5',
                        teks: 'Strategi pemasaran ekspor yang baik membuka pasar baru dan meningkatkan penjualan.',
                        info: {
                            deskripsi: 'Kesuksesan ekspor memerlukan pemahaman tentang pasar target, preferensi konsumen, dan strategi pemasaran yang tepat. Partisipasi dalam pameran internasional dan pembangun hubungan dengan distributor lokal sangat penting. Inovasi produk dan adaptasi terhadap kebutuhan pasar lokal adalah kunci pertumbuhan ekspor.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pemasaran',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER F =====
    'F': {
        karakter: 'F',
        nama_karakter: 'F',
        kata_dasar: [
            {
                id: 'fungsi',
                nama: 'FUNGSI',
                kalimat: [
                    {
                        id: 'fungsi_1',
                        teks: 'Fungsi adalah peran atau kegunaan dari sesuatu dalam sistem yang lebih besar.',
                        info: {
                            deskripsi: 'Fungsi adalah konsep fundamental dalam matematika, biologi, dan berbagai disiplin ilmu lainnya. Setiap elemen dalam suatu sistem memiliki fungsi spesifik yang berkontribusi pada keseluruhan. Pemahaman fungsi membantu kita merancang sistem yang efisien dan efektif.',
                            gambar: 'https://via.placeholder.com/300x200?text=Fungsi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'fungsi_2',
                        teks: 'Fungsi organ dalam tubuh manusia berjalan selaras untuk menjaga kehidupan.',
                        info: {
                            deskripsi: 'Setiap organ dalam tubuh manusia memiliki fungsi spesifik yang penting untuk kelangsungan hidup. Jantung memompa darah, paru-paru bernafas, otak mengontrol semua aktivitas. Ketika satu organ tidak berfungsi baik, seluruh sistem tubuh terpengaruh.',
                            gambar: 'https://via.placeholder.com/300x200?text=Organ+Tubuh',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'fungsi_3',
                        teks: 'Fungsi sosial membantu individu terhubung dan membangun komunitas yang kuat.',
                        info: {
                            deskripsi: 'Fungsi sosial adalah aktivitas yang menyatukan orang-orang dari berbagai latar belakang. Pertemuan sosial seperti pesta, upacara, dan reuni memainkan peran penting dalam memperkuat ikatan komunitas. Fungsi sosial memberikan kesempatan untuk berbagi, belajar, dan saling mendukung.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sosial',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'fungsi_4',
                        teks: 'Fungsi pemerintah adalah memberikan pelayanan publik dan melindungi hak warga.',
                        info: {
                            deskripsi: 'Pemerintah memiliki fungsi fundamental dalam masyarakat termasuk membuat undang-undang, memberikan pelayanan publik, dan melindungi hak asasi manusia. Fungsi pemerintah yang baik menciptakan stabilitas dan kemakmuran. Transparansi dan akuntabilitas pemerintah sangat penting untuk kepercayaan publik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pemerintah',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'fungsi_5',
                        teks: 'Fungsi seni adalah mengekspresikan emosi dan memperkaya kehidupan manusia.',
                        info: {
                            deskripsi: 'Seni memiliki fungsi penting dalam mengekspresikan kreativitas dan emosi manusia. Seni dapat membangkitkan rasa, mengkomunikasikan pesan, dan menciptakan keindahan. Melalui seni, manusia dapat terhubung pada level yang lebih dalam dan bermakna.',
                            gambar: 'https://via.placeholder.com/300x200?text=Seni',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'film',
                nama: 'FILM',
                kalimat: [
                    {
                        id: 'film_1',
                        teks: 'Film adalah seni bercerita menggunakan visual dan suara yang menarik.',
                        info: {
                            deskripsi: 'Film adalah medium hiburan dan seni yang menggunakan kombinasi gambar bergerak, suara, musik, dan cerita. Film memiliki kemampuan unik untuk menggerakkan emosi dan menyampaikan pesan dengan cara yang powerful. Industri film telah berkembang menjadi salah satu industri hiburan terbesar di dunia.',
                            gambar: 'https://via.placeholder.com/300x200?text=Film',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'film_2',
                        teks: 'Film dokumenter mengungkap kebenaran melalui footage nyata dan wawancara.',
                        info: {
                            deskripsi: 'Film dokumenter adalah genre film yang berfokus pada menceritakan kisah nyata dengan cara yang otentik. Dokumenter dapat mengangkat isu sosial, sejarah, dan lingkungan yang penting. Film dokumenter memiliki dampak besar dalam meningkatkan kesadaran publik terhadap berbagai isu.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dokumenter',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'film_3',
                        teks: 'Film drama menyentuh hati dengan cerita karakter yang kompleks dan mendalam.',
                        info: {
                            deskripsi: 'Film drama adalah genre yang berfokus pada kehidupan manusia dengan segala kompleksitasnya. Drama film mengeksplorasi emosi, hubungan, dan dilema moral yang relatable. Film drama yang baik dapat mengubah perspektif dan meninggalkan kesan mendalam pada penonton.',
                            gambar: 'https://via.placeholder.com/300x200?text=Drama',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'film_4',
                        teks: 'Film aksi memberikan hiburan dengan adegan yang menegangkan dan spektakuler.',
                        info: {
                            deskripsi: 'Film aksi adalah genre yang mengandalkan adegan aksi, stunts, dan efek visual yang mengesankan. Film aksi dirancang untuk memberikan adrenalin rush dan hiburan yang menarik. Teknologi CGI modern telah membuat adegan aksi dalam film semakin realistis dan spektakuler.',
                            gambar: 'https://via.placeholder.com/300x200?text=Aksi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'film_5',
                        teks: 'Film animasi membuka dunia imajinasi yang tak terbatas untuk semua usia.',
                        info: {
                            deskripsi: 'Film animasi menggunakan teknik animasi untuk menciptakan karakter dan dunia yang fantastis. Animasi memungkinkan kreativitas tanpa batas dan dapat menyampaikan pesan kompleks dengan cara yang menyenangkan. Film animasi tidak hanya untuk anak-anak tetapi juga dapat dinikmati oleh orang dewasa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Animasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER G =====
    'G': {
        karakter: 'G',
        nama_karakter: 'G',
        kata_dasar: [
            {
                id: 'gaji',
                nama: 'GAJI',
                kalimat: [
                    {
                        id: 'gaji_1',
                        teks: 'Gaji adalah kompensasi finansial yang diterima karyawan atas pekerjaan mereka.',
                        info: {
                            deskripsi: 'Gaji adalah bentuk pembayaran yang diberikan oleh majikan kepada karyawan secara berkala. Gaji adalah hak karyawan dan merupakan bagian penting dari kesepakatan kerja. Tingkat gaji dipengaruhi oleh pengalaman, keterampilan, posisi, dan industri pekerjaan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Gaji',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gaji_2',
                        teks: 'Kenaikan gaji adalah motivasi bagi karyawan untuk meningkatkan performa.',
                        info: {
                            deskripsi: 'Kenaikan gaji adalah bentuk penghargaan atas dedikasi dan performa kerja yang baik. Promosi gaji dapat meningkatkan motivasi dan kepuasan kerja karyawan. Sistem gaji yang adil dan transparan menciptakan lingkungan kerja yang sehat dan produktif.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kenaikan+Gaji',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gaji_3',
                        teks: 'Pengelolaan gaji yang bijak adalah kunci untuk kestabilan finansial pribadi.',
                        info: {
                            deskripsi: 'Mengelola gaji dengan bijak melibatkan budgeting, menabung, dan investasi cerdas. Setiap orang harus membuat rencana keuangan yang sesuai dengan pendapatan dan kebutuhan mereka. Pengelolaan gaji yang baik membantu mencapai kebebasan finansial dan keamanan masa depan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pengelolaan+Gaji',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gaji_4',
                        teks: 'Gaji minimum adalah standar upah terendah yang harus dibayar majikan.',
                        info: {
                            deskripsi: 'Gaji minimum adalah kebijakan pemerintah untuk melindungi pekerja dari eksploitasi. Setiap negara menetapkan gaji minimum yang berbeda berdasarkan kondisi ekonomi. Peningkatan gaji minimum harus mempertimbangkan inflasi dan biaya hidup yang meningkat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Gaji+Minimum',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gaji_5',
                        teks: 'Benefit dan tunjangan adalah bagian penting dari paket kompensasi karyawan.',
                        info: {
                            deskripsi: 'Selain gaji pokok, karyawan juga menerima berbagai benefit seperti asuransi kesehatan, tunjangan keluarga, dan dana pensiun. Benefit yang komprehensif meningkatkan kesejahteraan karyawan dan produktivitas. Perusahaan yang memberikan benefit bagus lebih mudah menarik dan mempertahankan karyawan terbaik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Benefit',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'gunung',
                nama: 'GUNUNG',
                kalimat: [
                    {
                        id: 'gunung_1',
                        teks: 'Gunung adalah bentuk lahan tertinggi yang membentuk medan geografis yang indah.',
                        info: {
                            deskripsi: 'Gunung adalah formasi geologi yang terbentuk dari tekanan tektonik dan vulkanisme. Gunung memiliki peran penting dalam siklus air, iklim, dan ekosistem planet. Banyak gunung di dunia menjadi ikon budaya dan destinasi wisata populer.',
                            gambar: 'https://via.placeholder.com/300x200?text=Gunung',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gunung_2',
                        teks: 'Mendaki gunung adalah petualangan yang menguji fisik dan mental seseorang.',
                        info: {
                            deskripsi: 'Mendaki gunung adalah aktivitas outdoor yang menantang dan memuaskan. Perjalanan mendaki mengajarkan ketekunan, keberanian, dan appreciation terhadap alam. Puncak gunung menawarkan pemandangan spektakuler dan sense of achievement yang besar.',
                            gambar: 'https://via.placeholder.com/300x200?text=Mendaki',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gunung_3',
                        teks: 'Gunung berapi adalah sumber kekuatan alam yang sangat besar dan berbahaya.',
                        info: {
                            deskripsi: 'Gunung berapi adalah gunung yang masih aktif dan dapat meletus dengan lava, abu, dan gas panas. Letusan gunung berapi dapat merusak lingkungan dan mengancam kehidupan manusia. Namun, gunung berapi juga menciptakan tanah subur yang baik untuk pertanian.',
                            gambar: 'https://via.placeholder.com/300x200?text=Gunung+Berapi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gunung_4',
                        teks: 'Gunung adalah habitat penting bagi berbagai spesies hewan dan tumbuhan.',
                        info: {
                            deskripsi: 'Ekosistem gunung memiliki keanekaragaman hayati yang unik dengan spesies yang tidak ditemukan di tempat lain. Vegetasi dan fauna gunung beradaptasi dengan kondisi ekstrem seperti suhu rendah dan udara tipis. Konservasi gunung penting untuk melindungi spesies langka dan ekosistem yang rentan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ekosistem+Gunung',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'gunung_5',
                        teks: 'Gunung dalam spiritualitas sering dianggap sebagai tempat suci dan sakral.',
                        info: {
                            deskripsi: 'Banyak gunung dianggap suci dalam berbagai budaya dan agama di seluruh dunia. Gunung menjadi tempat perenungan, meditasi, dan perjalanan spiritual. Keinginan manusia untuk mendaki gunung mencerminkan pencarian akan kesucian dan kebijaksanaan spiritual.',
                            gambar: 'https://via.placeholder.com/300x200?text=Spiritual+Gunung',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER H =====
    'H': {
        karakter: 'H',
        nama_karakter: 'H',
        kata_dasar: [
            {
                id: 'harapan',
                nama: 'HARAPAN',
                kalimat: [
                    {
                        id: 'harapan_1',
                        teks: 'Harapan adalah kekuatan yang membuat kita terus maju menghadapi masa depan.',
                        info: {
                            deskripsi: 'Harapan adalah perasaan optimis tentang hal baik yang mungkin terjadi di masa depan. Harapan memberikan motivasi dan kekuatan untuk menghadapi tantangan dan kesulitan. Bahkan dalam situasi paling sulit sekalipun, harapan dapat menyelamatkan jiwa dan memberikan makna hidup.',
                            gambar: 'https://via.placeholder.com/300x200?text=Harapan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'harapan_2',
                        teks: 'Harapan orang tua terhadap anak adalah doa untuk masa depan yang cerah.',
                        info: {
                            deskripsi: 'Setiap orang tua memiliki harapan besar untuk masa depan anak-anak mereka. Harapan ini mendorong orang tua untuk memberikan pendidikan, bimbingan, dan dukungan terbaik. Ketika anak-anak mencapai impian mereka, harapan orang tua terpenuhi dan terasa bermakna.',
                            gambar: 'https://via.placeholder.com/300x200?text=Harapan+Orang+Tua',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'harapan_3',
                        teks: 'Harapan untuk dunia yang lebih baik dimulai dari setiap individu yang percaya pada perubahan.',
                        info: {
                            deskripsi: 'Harapan global untuk perdamaian, keadilan, dan keberlanjutan lingkungan adalah tanggung jawab bersama. Setiap orang dapat berkontribusi dengan cara kecil untuk mewujudkan dunia yang lebih baik. Perubahan besar dimulai dari harapan kecil yang dikomunikasikan dan direalisasikan bersama.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dunia+Lebih+Baik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'harapan_4',
                        teks: 'Harapan kesembuhan memberikan semangat kepada pasien untuk terus bertahan.',
                        info: {
                            deskripsi: 'Dalam menghadapi penyakit atau tantangan kesehatan, harapan untuk kesembuhan adalah hal yang paling berharga. Harapan dapat meningkatkan respons imun dan kualitas hidup pasien. Dukungan keluarga dan keyakinan pada kesembuhan sangat penting dalam proses penyembuhan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kesembuhan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'harapan_5',
                        teks: 'Harapan adalah cahaya dalam kegelapan yang membimbing kita ke jalan yang benar.',
                        info: {
                            deskripsi: 'Ketika kita merasa kehilangan arah dan putus asa, harapan adalah cahaya yang memandu kita kembali. Harapan mengingatkan kita bahwa masa depan masih terbuka dengan kemungkinan tak terbatas. Dengan memegang erat pada harapan, kita dapat melampaui ketakutan dan meraih mimpi kita.',
                            gambar: 'https://via.placeholder.com/300x200?text=Cahaya+Harapan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'hidup',
                nama: 'HIDUP',
                kalimat: [
                    {
                        id: 'hidup_1',
                        teks: 'Hidup adalah hadiah berharga yang harus kita syukuri setiap hari.',
                        info: {
                            deskripsi: 'Hidup adalah petualangan yang penuh dengan pengalaman, pembelajaran, dan pertumbuhan. Setiap hari membawa kesempatan baru untuk terhubung dengan orang lain dan membuat dampak positif. Menjalani hidup dengan penuh rasa syukur membuat setiap momen menjadi bermakna.',
                            gambar: 'https://via.placeholder.com/300x200?text=Hidup',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'hidup_2',
                        teks: 'Hidup sehat memerlukan keseimbangan antara nutrisi, olahraga, dan istirahat.',
                        info: {
                            descripsi: 'Gaya hidup sehat adalah investasi terbaik untuk masa depan yang panjang dan berkualitas. Menjaga kesehatan fisik, mental, dan emosional adalah fondasi dari kebahagiaan. Dengan hidup sehat, kita memiliki energi dan vitalitas untuk mengejar impian dan memberikan yang terbaik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Hidup+Sehat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'hidup_3',
                        teks: 'Hidup bermakna adalah tentang menemukan tujuan dan berkontribusi untuk kebaikan bersama.',
                        info: {
                            deskripsi: 'Kehidupan yang bermakna adalah ketika kita menjalani hidup dengan tujuan yang jelas dan berkontribusi pada masyarakat. Menemukan passion dan menggunakannya untuk membantu orang lain memberikan kepuasan yang mendalam. Kehidupan bermakna menciptakan legacy yang akan dikenang generasi mendatang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Makna+Hidup',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'hidup_4',
                        teks: 'Hidup adalah tentang perjalanan, bukan hanya tentang tujuan akhir.',
                        info: {
                            deskripsi: 'Sering kita terlalu fokus pada mencapai tujuan akhir sehingga lupa menikmati perjalanan. Hidup adalah proses berkelanjutan dari belajar, tumbuh, dan berkembang. Menghargai setiap langkah dalam perjalanan hidup membuat pengalaman menjadi lebih kaya dan bermakna.',
                            gambar: 'https://via.placeholder.com/300x200?text=Perjalanan+Hidup',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'hidup_5',
                        teks: 'Hidup bersama orang tersayang menciptakan momen yang paling berharga dan tak terlupakan.',
                        info: {
                            deskripsi: 'Hubungan dengan orang-orang yang kita cintai adalah harta paling berharga dalam hidup. Momen bersama keluarga dan teman menciptakan kenangan indah yang bertahan selamanya. Investasi waktu dan perhatian pada hubungan adalah investasi terbaik yang bisa kita lakukan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bersama+Orang+Terkasih',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER I =====
    'I': {
        karakter: 'I',
        nama_karakter: 'I',
        kata_dasar: [
            {
                id: 'ide',
                nama: 'IDE',
                kalimat: [
                    {
                        id: 'ide_1',
                        teks: 'Ide adalah pemikiran brilian yang dapat mengubah dunia.',
                        info: {
                            deskripsi: 'Ide adalah benih dari setiap inovasi dan perubahan positif. Setiap ide besar dimulai sebagai pemikiran kecil yang kemudian dikembangkan dan direalisasikan. Ide yang bagus memerlukan keberanian untuk dibagikan dan dieksekusi dengan konsisten.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ide',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ide_2',
                        teks: 'Ide bisnis yang inovatif dapat menciptakan peluang ekonomi baru.',
                        info: {
                            deskripsi: 'Entrepreneur sukses dimulai dengan ide bisnis yang unik dan solusi untuk masalah nyata. Ide yang baik dikombinasikan dengan eksekusi yang kuat dapat membangun bisnis yang menguntungkan. Kreativitas dan observasi pasar adalah kunci menemukan ide bisnis yang potensial.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bisnis',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ide_3',
                        teks: 'Ide kreatif dalam seni menghasilkan karya yang unik dan bermakna.',
                        info: {
                            deskripsi: 'Seniman dan kreator mengandalkan ide-ide kreatif untuk menghasilkan karya yang menginspirasi. Ide kreatif berasal dari pengalaman, observasi, dan imajinasi yang luas. Kebebasan berkreasi dan ekspresi diri adalah penting untuk mengembangkan ide-ide artistik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Seni+Kreatif',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ide_4',
                        teks: 'Ide pembelajaran baru membuka perspektif dan memperkaya pengetahuan kita.',
                        info: {
                            deskripsi: 'Setiap ide dan konsep baru yang kita pelajari memperluas wawasan dan kapabilitas kita. Pendidikan adalah proses mengumpulkan dan menyintesis berbagai ide dari berbagai bidang. Terbuka terhadap ide-ide baru adalah kunci untuk terus berkembang dan relevan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pembelajaran',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'ide_5',
                        teks: 'Ide solusi sosial dapat membantu mengatasi masalah masyarakat.',
                        info: {
                            deskripsi: 'Ide-ide sosial yang fokus pada kebaikan bersama dapat membuat perbedaan nyata dalam komunitas. Program sosial yang dirancang dengan ide-ide cemerlang dapat meningkatkan kualitas hidup banyak orang. Ide solusi sosial memerlukan pemahaman mendalam tentang masalah dan kreativitas dalam mencari solusi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sosial',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'impian',
                nama: 'IMPIAN',
                kalimat: [
                    {
                        id: 'impian_1',
                        teks: 'Impian adalah visi yang memotivasi kita untuk bekerja keras mencapai tujuan.',
                        info: {
                            deskripsi: 'Impian adalah aspirasi dan harapan untuk masa depan yang lebih baik. Setiap orang memiliki impian unik yang mencerminkan nilai dan passion mereka. Impian yang jelas memberikan arah dan motivasi dalam mengambil keputusan dan tindakan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Impian',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'impian_2',
                        teks: 'Impian besar memerlukan keberanian, dedikasi, dan ketekunan untuk diwujudkan.',
                        info: {
                            deskripsi: 'Banyak orang memiliki impian besar tetapi sedikit yang berani mengambil tindakan nyata. Mewujudkan impian memerlukan perencanaan strategis, persistensi, dan kesiapan menghadapi kegagalan. Setiap langkah menuju impian adalah kemenangan yang harus dirayakan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Impian+Besar',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'impian_3',
                        teks: 'Impian keluarga adalah tentang membangun masa depan yang aman bersama.',
                        info: {
                            deskripsi: 'Impian keluarga sering kali tentang memiliki rumah yang nyaman, anak-anak yang sukses, dan hidup yang stabil. Impian keluarga memberi makna dan motivasi dalam menjalani kehidupan sehari-hari. Mewujudkan impian keluarga memerlukan kerja sama, dukungan, dan komitmen bersama.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keluarga',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'impian_4',
                        teks: 'Impian karir mendorong kita untuk terus belajar dan mengembangkan kemampuan.',
                        info: {
                            deskripsi: 'Impian karir yang jelas memberi arah dalam pendidikan dan pengembangan profesional. Bekerja menuju impian karir memberikan kepuasan dan sense of purpose. Kesuksesan karir adalah hasil dari perencanaan matang, kerja keras, dan adaptasi terhadap perubahan pasar.',
                            gambar: 'https://via.placeholder.com/300x200?text=Karir',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'impian_5',
                        teks: 'Impian dunia yang lebih baik menginspirasi gerakan sosial dan perubahan global.',
                        info: {
                            deskripsi: 'Banyak pemimpin dan aktivis didorong oleh impian untuk menciptakan dunia yang lebih adil dan berkelanjutan. Impian global untuk perdamaian, kesetaraan, dan lingkungan yang sehat adalah aspirasi universal. Mewujudkan impian besar memerlukan kolaborasi dan komitmen dari banyak orang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dunia+Lebih+Baik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER J =====
    'J': {
        karakter: 'J',
        nama_karakter: 'J',
        kata_dasar: [
            {
                id: 'jalan',
                nama: 'JALAN',
                kalimat: [
                    {
                        id: 'jalan_1',
                        teks: 'Jalan adalah infrastruktur yang menghubungkan komunitas dan memfasilitasi perdagangan.',
                        info: {
                            deskripsi: 'Jalan adalah bagian penting dari infrastruktur yang memungkinkan transportasi dan komunikasi antar tempat. Kualitas jalan mempengaruhi efisiensi ekonomi dan kualitas hidup masyarakat. Pembangunan jalan yang baik adalah investasi pemerintah dalam kemajuan negara.',
                            gambar: 'https://via.placeholder.com/300x200?text=Jalan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'jalan_2',
                        teks: 'Jalan dalam kiasan mewakili perjalanan hidup dan pilihan yang kita buat.',
                        info: {
                            deskripsi: 'Dalam sastra dan filosofi, jalan sering melambangkan perjalanan hidup dengan segala pilihan dan konsekuensinya. Setiap jalan yang kita pilih membawa kita ke tujuan yang berbeda. Keputusan untuk memilih jalan mana yang ditempuh adalah tanggung jawab pribadi kita.',
                            gambar: 'https://via.placeholder.com/300x200?text=Perjalanan+Hidup',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'jalan_3',
                        teks: 'Jalan yang tepat adalah jalan yang sejalan dengan nilai dan prinsip kita.',
                        info: {
                            deskripsi: 'Menemukan jalan hidup yang tepat memerlukan introspeksi dan pemahaman diri yang mendalam. Ketika kita menjalani hidup sesuai dengan nilai-nilai inti kita, kita merasakan kepuasan dan keselarasan. Jalan yang tepat mungkin tidak selalu mudah tetapi membawa makna dan tujuan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nilai+Prinsip',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'jalan_4',
                        teks: 'Jalan buntu mengajarkan kita untuk berbalik dan mencari rute alternatif.',
                        info: {
                            deskripsi: 'Dalam hidup, kita sering menghadapi jalan buntu atau kegagalan yang mengganggu rencana kita. Jalan buntu adalah kesempatan untuk belajar, beradaptasi, dan menemukan solusi alternatif. Fleksibilitas dan ketegaran adalah kunci untuk terus maju ketika menghadapi hambatan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Hambatan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'jalan_5',
                        teks: 'Jalan bersama orang terkasih membuat setiap langkah menjadi lebih bermakna.',
                        info: {
                            deskripsi: 'Berbagi jalan hidup dengan orang yang kita cintai membawa kebahagiaan dan dukungan emosional. Perjalanan bersama menciptakan kenangan berharga dan memperkuat ikatan. Kebersamaan dalam menghadapi tantangan membuat beban terasa lebih ringan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bersama',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'janji',
                nama: 'JANJI',
                kalimat: [
                    {
                        id: 'janji_1',
                        teks: 'Janji adalah komitmen yang menunjukkan integritas dan keandalan seseorang.',
                        info: {
                            deskripsi: 'Janji adalah ungkapan dari niat untuk melakukan sesuatu di masa depan. Menepati janji adalah fundamental dalam membangun kepercayaan dan hubungan yang kuat. Orang yang setia pada janjinya dihormati dan dipercaya oleh orang lain.',
                            gambar: 'https://via.placeholder.com/300x200?text=Janji',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'janji_2',
                        teks: 'Janji pernikahan adalah perjanjian suci antara dua orang yang saling mencintai.',
                        info: {
                            deskripsi: 'Janji pernikahan adalah momen penting ketika dua orang berkomitmen untuk menjalani hidup bersama. Janji ini bukan hanya tentang cinta tetapi juga tentang dukungan, loyalitas, dan komitmen jangka panjang. Mempertahankan janji pernikahan memerlukan kerja keras, komunikasi, dan kompromi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pernikahan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'janji_3',
                        teks: 'Janji kepada diri sendiri adalah yang paling penting untuk pertumbuhan pribadi.',
                        info: {
                            deskripsi: 'Janji kepada diri sendiri tentang perubahan positif adalah langkah pertama menuju pertumbuhan pribadi. Konsistensi dalam menepati janji pada diri sendiri membangun kepercayaan diri dan disiplin. Setiap kali kita menepati janji pada diri sendiri, kita memperkuat karakter dan determinasi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pertumbuhan+Pribadi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'janji_4',
                        teks: 'Janji pemerintah kepada rakyat harus diwujudkan melalui kebijakan yang tepat.',
                        info: {
                            deskripsi: 'Kepercayaan publik terhadap pemerintah bergantung pada kemampuan memenuhi janji kepada rakyat. Janji tentang kesehatan, pendidikan, dan kesejahteraan harus didukung oleh sumber daya dan eksekusi yang baik. Transparansi dan akuntabilitas penting untuk memastikan janji pemerintah terpenuhi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pemerintah',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'janji_5',
                        teks: 'Janji yang tidak ditepati dapat merusak kepercayaan dan hubungan yang dibangun.',
                        info: {
                            deskripsi: 'Membuat janji yang tidak bisa ditepati adalah kesalahan yang dapat merusak kepercayaan orang terhadap kita. Lebih baik jujur tentang kemampuan kita daripada membuat janji kosong. Integritas adalah memenuhi janji atau jujur tentang keterbatasan kita.',
                            gambar: 'https://via.placeholder.com/300x200?text=Integritas',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER K =====
    'K': {
        karakter: 'K',
        nama_karakter: 'K',
        kata_dasar: [
            {
                id: 'keadilan',
                nama: 'KEADILAN',
                kalimat: [
                    {
                        id: 'keadilan_1',
                        teks: 'Keadilan adalah prinsip fundamental dalam masyarakat yang sehat dan berkembang.',
                        info: {
                            deskripsi: 'Keadilan adalah perlakuan yang sama dan fair untuk semua orang tanpa diskriminasi. Sistem hukum yang adil adalah fondasi dari negara yang stabil dan sejahtera. Keadilan bukan hanya tentang hukuman tetapi juga tentang memberikan kesempatan yang sama kepada semua.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keadilan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keadilan_2',
                        teks: 'Keadilan sosial memastikan setiap individu memiliki akses pada sumber daya dan peluang.',
                        info: {
                            deskripsi: 'Keadilan sosial adalah tentang mengurangi ketimpangan dan memberikan akses yang sama kepada pendidikan, kesehatan, dan pekerjaan. Upaya untuk mewujudkan keadilan sosial melibatkan redistribusi sumber daya dan peluang. Masyarakat yang adil adalah masyarakat yang lebih stabil dan sejahtera.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keadilan+Sosial',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keadilan_3',
                        teks: 'Keadilan restoratif fokus pada perbaikan hubungan daripada hanya pemberian hukuman.',
                        info: {
                            deskripsi: 'Keadilan restoratif adalah pendekatan alternatif dalam sistem hukum yang menekankan pemulihan dan rekonsiliasi. Daripada hanya menghukum pelaku, keadilan restoratif berusaha memperbaiki hubungan antara pelaku, korban, dan komunitas. Pendekatan ini terbukti lebih efektif dalam mengurangi kriminalitas berulang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Restoratif',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keadilan_4',
                        teks: 'Keadilan lingkungan adalah hak setiap orang untuk hidup di lingkungan yang sehat.',
                        info: {
                            deskripsi: 'Keadilan lingkungan adalah tentang memastikan bahwa beban polusi dan kerusakan lingkungan tidak jatuh pada komunitas yang rentan. Setiap orang berhak hidup di lingkungan yang bersih dan sehat. Perlindungan lingkungan adalah bentuk keadilan kepada generasi mendatang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Lingkungan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keadilan_5',
                        teks: 'Keadilan adalah tanggung jawab bersama untuk menciptakan masyarakat yang lebih baik.',
                        info: {
                            deskripsi: 'Mewujudkan keadilan memerlukan partisipasi aktif dari semua anggota masyarakat. Individu, institusi, dan pemerintah harus bekerja sama untuk memastikan bahwa sistem hukum berfungsi dengan adil. Komitmen terhadap keadilan adalah investasi dalam masa depan yang lebih baik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Masyarakat+Baik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'keberhasilan',
                nama: 'KEBERHASILAN',
                kalimat: [
                    {
                        id: 'keberhasilan_1',
                        teks: 'Keberhasilan adalah hasil dari kerja keras, perencanaan strategis, dan ketekunan.',
                        info: {
                            deskripsi: 'Keberhasilan tidak datang dengan mudah tetapi merupakan hasil dari usaha konsisten dan strategi yang tepat. Setiap orang sukses telah menghadapi kegagalan dan terus maju. Keberhasilan adalah perjalanan, bukan tujuan akhir.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keberhasilan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keberhasilan_2',
                        teks: 'Keberhasilan akademis membuka pintu ke peluang karir yang lebih baik.',
                        info: {
                            deskripsi: 'Pencapaian akademis adalah fondasi untuk pengembangan profesional yang lebih lanjut. Keberhasilan di sekolah dan universitas membuka akses ke pekerjaan yang lebih baik dan bermakna. Investasi dalam pendidikan adalah investasi terbaik untuk masa depan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Akademis',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keberhasilan_3',
                        teks: 'Keberhasilan bisnis memerlukan inovasi, manajemen yang baik, dan pemahaman pasar.',
                        info: {
                            deskripsi: 'Bisnis yang sukses adalah bisnis yang dapat beradaptasi dengan perubahan pasar dan memenuhi kebutuhan konsumen. Inovasi berkelanjutan dan manajemen yang efisien adalah kunci pertumbuhan bisnis. Keberhasilan bisnis juga berarti memberikan nilai kepada stakeholder.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bisnis',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keberhasilan_4',
                        teks: 'Keberhasilan dalam hubungan adalah tentang komunikasi, empati, dan kompromi.',
                        info: {
                            deskripsi: 'Hubungan yang sukses dibangun atas dasar saling pengertian, komunikasi terbuka, dan kesediaan berkompromi. Keberhasilan dalam hubungan memerlukan upaya berkelanjutan dari kedua belah pihak. Hubungan yang sehat adalah sumber kebahagiaan dan dukungan emosional.',
                            gambar: 'https://via.placeholder.com/300x200?text=Hubungan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'keberhasilan_5',
                        teks: 'Keberhasilan sejati adalah ketika dampak positif kita dirasakan oleh banyak orang.',
                        info: {
                            deskripsi: 'Keberhasilan sejati melampaui pencapaian pribadi dan melibatkan kontribusi positif kepada masyarakat. Ketika kita membantu orang lain mencapai tujuan mereka, itu adalah bentuk keberhasilan tertinggi. Warisan sejati adalah dampak positif yang kita tinggalkan untuk generasi mendatang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dampak+Positif',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER L =====
    'L': {
        karakter: 'L',
        nama_karakter: 'L',
        kata_dasar: [
            {
                id: 'laut',
                nama: 'LAUT',
                kalimat: [
                    {
                        id: 'laut_1',
                        teks: 'Laut adalah ekosistem yang kaya dan kompleks yang mendukung kehidupan jutaan spesies.',
                        info: {
                            deskripsi: 'Laut menutupi sebagian besar permukaan bumi dan memiliki keanekaragaman hayati yang luar biasa. Ekosistem laut sangat penting untuk menjaga keseimbangan iklim dan menghasilkan oksigen. Perlindungan laut adalah tanggung jawab kita kepada planet ini.',
                            gambar: 'https://via.placeholder.com/300x200?text=Laut',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'laut_2',
                        teks: 'Laut memberikan sumber daya pangan, energi, dan transportasi bagi manusia.',
                        info: {
                            deskripsi: 'Laut telah menjadi sumber penghidupan bagi masyarakat pesisir selama berabad-abad. Perikanan, pariwisata, dan energi terbarukan dari laut memberikan kontribusi ekonomi yang signifikan. Pengelolaan sumber daya laut yang berkelanjutan adalah penting untuk generasi mendatang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sumber+Daya',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'laut_3',
                        teks: 'Laut dalam mitologi dan seni melambangkan keindahan, kekuatan, dan misteri.',
                        info: {
                            deskripsi: 'Laut telah menginspirasi seniman, penulis, dan pemikir di seluruh dunia. Keindahan laut yang memukau dan kekuatan ombaknya menciptakan makna simbolis yang mendalam. Laut mewakili kemungkinan tak terbatas dan petualangan yang menanti.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keindahan+Laut',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'laut_4',
                        teks: 'Laut menghadapi ancaman serius dari perubahan iklim dan polusi manusia.',
                        info: {
                            deskripsi: 'Pemanasan global, pengasaman laut, dan plastik telah menciptakan krisis lingkungan laut yang serius. Kematian terumbu karang, penurunan populasi ikan, dan habitat yang rusak mengancam ekosistem laut. Tindakan kolektif untuk mengurangi emisi dan polusi adalah kunci untuk menyelamatkan laut.',
                            gambar: 'https://via.placeholder.com/300x200?text=Krisis+Laut',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'laut_5',
                        teks: 'Berlayar di laut adalah petualangan yang membuat jiwa merasa bebas dan terhubung.',
                        info: {
                            deskripsi: 'Banyak orang menemukan ketenangan dan kebebasan ketika berada di laut. Berlayar, menyelam, atau sekadar berjalan di pantai menciptakan pengalaman yang menyegarkan dan menginspirasi. Koneksi dengan laut mengingatkan kita tentang keajaiban alam dan keterhubungan semua makhluk hidup.',
                            gambar: 'https://via.placeholder.com/300x200?text=Berlayar',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'limbah',
                nama: 'LIMBAH',
                kalimat: [
                    {
                        id: 'limbah_1',
                        teks: 'Limbah adalah produk sampingan dari aktivitas manusia yang perlu dikelola dengan bijak.',
                        info: {
                            deskripsi: 'Limbah adalah material yang tidak diinginkan hasil dari produksi dan konsumsi manusia. Pengelolaan limbah yang baik adalah kunci untuk melindungi lingkungan dan kesehatan publik. Berbagai jenis limbah memerlukan penanganan berbeda untuk meminimalkan dampak negatif.',
                            gambar: 'https://via.placeholder.com/300x200?text=Limbah',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'limbah_2',
                        teks: 'Limbah organik dapat didaur ulang menjadi kompos dan menjadi sumber daya berharga.',
                        info: {
                            deskripsi: 'Limbah organik seperti sisa makanan dan daun adalah bahan yang dapat diubah menjadi kompos berkualitas tinggi. Kompos dapat digunakan untuk memperbaiki tanah dan mendukung pertanian berkelanjutan. Mendaur ulang limbah organik mengurangi volume sampah dan manfaat lingkungan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kompos',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'limbah_3',
                        teks: 'Limbah plastik adalah salah satu masalah lingkungan paling serius saat ini.',
                        info: {
                            deskripsi: 'Plastik yang tidak dapat terurai mengakibatkan akumulasi limbah yang berbahaya bagi lingkungan dan kehidupan laut. Milyaran ton plastik tersebar di seluruh dunia menciptakan pulau sampah raksasa di laut. Mengurangi penggunaan plastik dan meningkatkan daur ulang adalah solusi penting.',
                            gambar: 'https://via.placeholder.com/300x200?text=Plastik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'limbah_4',
                        teks: 'Limbah elektronik mengandung bahan berbahaya yang harus ditangani secara khusus.',
                        info: {
                            deskripsi: 'Limbah elektronik seperti ponsel dan komputer lama mengandung logam berat dan bahan kimia berbahaya. Pembuangan limbah elektronik yang tidak tepat dapat mencemari tanah dan air. Program daur ulang elektronik khusus diperlukan untuk mengelola limbah ini dengan aman.',
                            gambar: 'https://via.placeholder.com/300x200?text=Elektronik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'limbah_5',
                        teks: 'Ekonomi sirkular bertujuan untuk meminimalkan limbah dan memaksimalkan penggunaan sumber daya.',
                        info: {
                            deskripsi: 'Ekonomi sirkular adalah model ekonomi yang dirancang untuk mengurangi limbah dengan mendaur ulang dan menggunakan kembali material. Konsep ini mengubah paradigma dari linear menjadi siklik dan berkelanjutan. Transisi ke ekonomi sirkular adalah kunci untuk keberlanjutan lingkungan jangka panjang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ekonomi+Sirkular',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER O =====
    'O': {
        karakter: 'O',
        nama_karakter: 'O',
        kata_dasar: [
            {
                id: 'olahraga',
                nama: 'OLAHRAGA',
                kalimat: [
                    {
                        id: 'olahraga_1',
                        teks: 'Olahraga adalah aktivitas fisik yang penting untuk kesehatan tubuh dan jiwa.',
                        info: {
                            deskripsi: 'Olahraga memiliki manfaat luar biasa untuk kesehatan fisik dan mental. Aktivitas olahraga secara teratur dapat mengurangi risiko penyakit kronis dan meningkatkan mood. Olahraga juga membangun kedisiplinan, ketangguhan, dan semangat tim.',
                            gambar: 'https://via.placeholder.com/300x200?text=Olahraga',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'olahraga_2',
                        teks: 'Kompetisi olahraga menginspirasi jutaan orang di seluruh dunia.',
                        info: {
                            deskripsi: 'Kompetisi olahraga seperti Olimpiade dan Piala Dunia menunjukkan prestasi manusia pada tingkat tertinggi. Atlet profesional menginspirasi kita dengan dedikasi, kerja keras, dan pencapaian luar biasa mereka. Olahraga menyatukan orang dari berbagai negara dan budaya.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kompetisi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'olahraga_3',
                        teks: 'Olahraga tim mengajarkan kerja sama, kepemimpinan, dan tanggung jawab bersama.',
                        info: {
                            deskripsi: 'Olahraga tim seperti sepak bola, basket, dan bola voli mengajarkan pentingnya kolaborasi dan komunikasi. Setiap anggota tim memiliki peran penting dalam mencapai kesuksesan bersama. Nilai-nilai ini dapat diterapkan dalam kehidupan profesional dan pribadi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Tim',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'olahraga_4',
                        teks: 'Olahraga ekstrem mendorong batas-batas kemampuan manusia dan keberanian.',
                        info: {
                            deskripsi: 'Olahraga ekstrem seperti mendaki gunung, skydiving, dan selancar menantang atlet untuk melampaui batasan pribadi mereka. Olahraga ini memerlukan persiapan fisik dan mental yang intens serta manajemen risiko yang baik. Pengalaman olahraga ekstrem mengajarkan keberanian dan kepercayaan diri.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ekstrem',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'olahraga_5',
                        teks: 'Olahraga untuk semua adalah gerakan untuk membuat olahraga accessible kepada seluruh masyarakat.',
                        info: {
                            deskripsi: 'Olahraga para-atletik dan program komunitas membuat olahraga dapat diakses oleh orang dengan kemampuan berbeda. Inklusi dalam olahraga menciptakan masyarakat yang lebih sehat dan bahagia. Setiap orang berhak merasakan manfaat dan kegembiraan olahraga.',
                            gambar: 'https://via.placeholder.com/300x200?text=Inklusi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'opini',
                nama: 'OPINI',
                kalimat: [
                    {
                        id: 'opini_1',
                        teks: 'Opini adalah pandangan pribadi yang didasarkan pada pemikiran dan pengalaman.',
                        info: {
                            deskripsi: 'Opini adalah interpretasi subyektif dari fakta dan peristiwa. Setiap orang berhak memiliki opini yang berbeda berdasarkan latar belakang dan nilai mereka. Dalam masyarakat yang sehat, berbagai opini didebatkan secara konstruktif.',
                            gambar: 'https://via.placeholder.com/300x200?text=Opini',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'opini_2',
                        teks: 'Opini publik mempengaruhi keputusan pemerintah dan kebijakan sosial.',
                        info: {
                            deskripsi: 'Opini publik yang kuat dapat mendorong perubahan sosial dan kebijakan pemerintah. Media massa dan media sosial memainkan peran penting dalam membentuk opini publik. Demokrasi bergantung pada partisipasi warga dalam membentuk opini publik yang sehat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Publik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'opini_3',
                        teks: 'Opini ahli memberikan wawasan berdasarkan pengetahuan mendalam dan pengalaman.',
                        info: {
                            deskripsi: 'Opini dari para ahli membantu masyarakat membuat keputusan yang lebih baik berdasarkan penelitian dan data. Kredibilitas ahli bergantung pada keahlian dan integritas mereka. Ketika opini ahli bertentangan, penting untuk memahami dasar-dasar perbedaan mereka.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ahli',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'opini_4',
                        teks: 'Opini online dapat tersebar cepat dan mempengaruhi persepsi jutaan orang.',
                        info: {
                            deskripsi: 'Media sosial memungkinkan opini menyebar dengan cepat tetapi juga dapat menyebarkan misinformasi. Literasi digital dan pemikiran kritis adalah penting untuk mengevaluasi opini online. Tanggung jawab pribadi dalam berbagi opini online adalah fundamental.',
                            gambar: 'https://via.placeholder.com/300x200?text=Online',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'opini_5',
                        teks: 'Menghormati opini yang berbeda adalah bagian dari masyarakat yang pluralistik dan inklusif.',
                        info: {
                            deskripsi: 'Dalam masyarakat yang sehat, kita dapat menerima opini yang berbeda sambil tetap menjaga sikap hormat. Perbedaan opini adalah peluang untuk belajar dan mengembangkan pemahaman yang lebih baik. Dialog yang konstruktif antar opini berbeda menciptakan solusi yang lebih baik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Inklusif',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER S =====
    'S': {
        karakter: 'S',
        nama_karakter: 'S',
        kata_dasar: [
            {
                id: 'sains',
                nama: 'SAINS',
                kalimat: [
                    {
                        id: 'sains_1',
                        teks: 'Sains adalah studi sistematis tentang alam melalui observasi dan eksperimen.',
                        info: {
                            deskripsi: 'Sains adalah metode untuk memahami dunia melalui penyelidikan yang ketat dan bukti empiris. Sains telah menghasilkan penemuan dan teknologi yang mengubah peradaban manusia. Pendidikan sains yang baik menumbuhkan pemikiran kritis dan rasa ingin tahu.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sains',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sains_2',
                        teks: 'Ilmu fisika mengungkap hukum-hukum fundamental yang mengatur alam semesta.',
                        info: {
                            deskripsi: 'Fisika adalah cabang sains yang mempelajari energi, materi, dan gaya. Dari teori gravitasi hingga mekanika kuantum, fisika telah memberikan pemahaman mendalam tentang kosmos. Aplikasi fisika dalam teknologi telah menghasilkan inovasi luar biasa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Fisika',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sains_3',
                        teks: 'Biologi mempelajari kehidupan dan proses-proses yang mendukung kehidupan.',
                        info: {
                            deskripsi: 'Biologi adalah studi tentang makhluk hidup, dari sel hingga ekosistem. Pemahaman biologi sangat penting untuk kesehatan, pertanian, dan konservasi lingkungan. Teori evolusi Darwin telah menjadi fondasi biologi modern.',
                            gambar: 'https://via.placeholder.com/300x200?text=Biologi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sains_4',
                        teks: 'Kimia adalah ilmu tentang substansi dan reaksi yang mengubah materi.',
                        info: {
                            deskripsi: 'Kimia mempelajari komposisi, struktur, dan properti materi serta reaksi kimia. Kimia adalah jembatan antara fisika dan biologi. Aplikasi kimia dalam industri, farmasi, dan teknologi material sangat penting.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kimia',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sains_5',
                        teks: 'Sains membantu kita mengatasi tantangan global seperti iklim dan kesehatan.',
                        info: {
                            deskripsi: 'Penelitian sains memberikan solusi untuk masalah lingkungan, penyakit, dan ketahanan pangan. Kolaborasi internasional dalam sains mempercepat pemecahan masalah global. Investasi dalam penelitian sains adalah investasi dalam masa depan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Tantangan+Global',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'sekolah',
                nama: 'SEKOLAH',
                kalimat: [
                    {
                        id: 'sekolah_1',
                        teks: 'Sekolah adalah institusi yang memberikan pendidikan formal kepada generasi muda.',
                        info: {
                            deskripsi: 'Sekolah adalah tempat di mana siswa belajar akademik, sosial, dan mengembangkan karakter. Pendidikan berkualitas di sekolah adalah fondasi untuk masa depan yang cerah. Guru memiliki peran penting dalam membentuk pikiran dan hati siswa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sekolah',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sekolah_2',
                        teks: 'Sahabat sekolah menciptakan kenangan indah dan hubungan yang berlangsung selamanya.',
                        info: {
                            deskripsi: 'Hubungan yang dibangun di sekolah sering menjadi persahabatan terkuat dalam hidup. Berbagi pengalaman belajar, bermain, dan tumbuh bersama menciptakan ikatan yang kuat. Sahabat sekolah sering menjadi dukungan emosional penting dalam kehidupan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sahabat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sekolah_3',
                        teks: 'Ekstrakurikuler di sekolah mengembangkan bakat dan minat di luar akademik.',
                        info: {
                            deskripsi: 'Kegiatan ekstrakurikuler seperti olahraga, seni, dan klub akademik memperkaya pengalaman sekolah. Aktivitas ini membantu mengembangkan kepemimpinan, kreativitas, dan keterampilan sosial. Partisipasi dalam ekstrakurikuler meningkatkan kepercayaan diri siswa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ekstrakurikuler',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sekolah_4',
                        teks: 'Ujian sekolah adalah bentuk penilaian yang mengukur pemahaman dan kemampuan siswa.',
                        info: {
                            deskripsi: 'Ujian adalah alat untuk mengukur sejauh mana siswa telah menguasai materi pelajaran. Meskipun penting, ujian hanya salah satu aspek dari pendidikan yang lengkap. Pembelajaran yang lebih holistic melibatkan berbagai metode penilaian.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ujian',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'sekolah_5',
                        teks: 'Sekolah berkualitas adalah kunci untuk mengatasi kemiskinan dan membuka peluang.',
                        info: {
                            deskripsi: 'Pendidikan berkualitas adalah hak asasi dan kunci untuk mobilitas sosial ekonomi. Sekolah yang baik dapat mengubah nasib siswa dan masyarakat. Akses ke pendidikan berkualitas harus menjadi prioritas pemerintah dan masyarakat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pendidikan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER T =====
    'T': {
        karakter: 'T',
        nama_karakter: 'T',
        kata_dasar: [
            {
                id: 'teknologi',
                nama: 'TEKNOLOGI',
                kalimat: [
                    {
                        id: 'teknologi_1',
                        teks: 'Teknologi adalah aplikasi ilmu pengetahuan untuk memecahkan masalah praktis.',
                        info: {
                            deskripsi: 'Teknologi telah mengubah cara manusia hidup, bekerja, dan berkomunikasi. Dari roda hingga komputer, setiap inovasi teknologi membawa perubahan signifikan. Perkembangan teknologi terus mempercepat dan membuka kemungkinan baru.',
                            gambar: 'https://via.placeholder.com/300x200?text=Teknologi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teknologi_2',
                        teks: 'Teknologi informasi mengubah cara kita berkomunikasi dan berbagi pengetahuan.',
                        info: {
                            deskripsi: 'Internet dan komputer telah merevolusi komunikasi dan akses informasi. Teknologi informasi memungkinkan kolaborasi global dan pembelajaran jarak jauh. Era digital membuka peluang baru tetapi juga tantangan privasi dan keamanan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Informatika',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teknologi_3',
                        teks: 'Teknologi medis menyelamatkan nyawa dan meningkatkan kualitas hidup.',
                        info: {
                            deskripsi: 'Peralatan medis canggih, obat-obatan, dan prosedur operasi telah meningkatkan harapan hidup. Teknologi imaging seperti CT scan dan MRI membantu diagnosis penyakit. Robotika medis membuka kemungkinan baru dalam operasi yang presisi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Medis',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teknologi_4',
                        teks: 'Teknologi ramah lingkungan adalah kunci untuk keberlanjutan planet.',
                        info: {
                            deskripsi: 'Energi terbarukan, efisiensi energi, dan teknologi daur ulang adalah solusi untuk masalah lingkungan. Inovasi dalam teknologi hijau mengurangi jejak karbon manusia. Transisi ke ekonomi hijau memerlukan investasi dalam teknologi berkelanjutan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ramah+Lingkungan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teknologi_5',
                        teks: 'Kecerdasan buatan adalah teknologi masa depan dengan potensi transformatif.',
                        info: {
                            deskripsi: 'AI dan machine learning memiliki aplikasi dalam berbagai bidang dari kesehatan hingga transportasi. Potensi AI untuk meningkatkan efisiensi sangat besar tetapi juga membawa tantangan etika. Persiapan untuk era AI memerlukan pendidikan dan regulasi yang tepat.',
                            gambar: 'https://via.placeholder.com/300x200?text=AI',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'teman',
                nama: 'TEMAN',
                kalimat: [
                    {
                        id: 'teman_1',
                        teks: 'Teman adalah orang yang memberikan dukungan dan kegembiraan dalam hidup kita.',
                        info: {
                            deskripsi: 'Teman adalah bukan hanya orang yang menemani tetapi juga yang memahami, mendukung, dan menginspirasi kita. Hubungan pertemanan yang sehat dibangun atas dasar kepercayaan dan saling menghormati. Teman sejati hadir dalam waktu baik dan sulit.',
                            gambar: 'https://via.placeholder.com/300x200?text=Teman',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teman_2',
                        teks: 'Persahabatan yang tulus memberikan ketenangan hati dan rasa aman.',
                        info: {
                            deskripsi: 'Persahabatan sejati adalah hubungan yang tidak memerlukan syarat atau imbalan. Teman sejati menerima kita apa adanya dan mendukung pertumbuhan pribadi kita. Pertemanan yang dalam menciptakan rasa belonging dan kebermaknaan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Persahabatan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teman_3',
                        teks: 'Berbagi waktu dengan teman menciptakan kenangan yang indah dan berharga.',
                        info: {
                            deskripsi: 'Momen bersama teman seperti bermain, berbicara, dan tertawa menciptakan kenangan seumur hidup. Aktivitas bersama teman tidak hanya menyenangkan tetapi juga penting untuk kesehatan mental. Hubungan sosial yang kuat adalah faktor penting untuk kebahagiaan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bersama',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teman_4',
                        teks: 'Teman yang baik memberikan nasihat jujur dan membantu kita menjadi versi terbaik.',
                        info: {
                            deskripsi: 'Teman sejati tidak hanya memberikan dukungan tetapi juga memberikan kritik yang konstruktif. Nasihat jujur dari teman yang peduli dapat mengubah hidup kita. Keberanian untuk memberikan feedback yang sulit adalah tanda persahabatan yang sebenarnya.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nasihat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'teman_5',
                        teks: 'Persahabatan sejati bertahan melampaui waktu dan jarak.',
                        info: {
                            deskripsi: 'Teman sejati dapat dipisahkan oleh waktu dan jarak tetapi tetap terhubung dalam hati. Komunikasi dan upaya untuk tetap terhubung mempertahankan persahabatan yang bermakna. Pertemanan yang tulus adalah harta yang paling berharga dalam hidup.',
                            gambar: 'https://via.placeholder.com/300x200?text=Jarak',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER U =====
    'U': {
        karakter: 'U',
        nama_karakter: 'U',
        kata_dasar: [
            {
                id: 'universitas',
                nama: 'UNIVERSITAS',
                kalimat: [
                    {
                        id: 'universitas_1',
                        teks: 'Universitas adalah institusi pendidikan tinggi yang mengembangkan pengetahuan dan keterampilan.',
                        info: {
                            deskripsi: 'Universitas adalah pusat pembelajaran dan penelitian yang menarik para cendekiawan terbaik. Pendidikan universitas membuka akses ke karir yang lebih baik dan kualitas hidup yang lebih tinggi. Universitas juga berperan dalam kemajuan ilmu pengetahuan dan inovasi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Universitas',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'universitas_2',
                        teks: 'Dosen di universitas adalah mentor yang membimbing mahasiswa menuju kesuksesan.',
                        info: {
                            deskripsi: 'Dosen yang berpengalaman dan passionate dapat menginspirasi dan membimbing mahasiswa ke arah yang benar. Hubungan guru-murid di universitas sering berkembang menjadi mentoring jangka panjang. Dosen yang baik tidak hanya mengajar tetapi juga mendukung pertumbuhan pribadi mahasiswa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dosen',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'universitas_3',
                        teks: 'Penelitian di universitas menghasilkan penemuan yang mengubah dunia.',
                        info: {
                            deskripsi: 'Universitas adalah tempat di mana penelitian groundbreaking dilakukan oleh profesor dan mahasiswa. Penemuan di universitas telah menghasilkan terobosan dalam sains, teknologi, dan kedokteran. Investasi dalam penelitian universitas adalah investasi dalam kemajuan manusia.',
                            gambar: 'https://via.placeholder.com/300x200?text=Penelitian',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'universitas_4',
                        teks: 'Kehidupan kampus menciptakan pengalaman belajar dan pertumbuhan personal yang unik.',
                        info: {
                            deskripsi: 'Kehidupan mahasiswa di kampus melibatkan pembelajaran akademik, kegiatan sosial, dan pengembangan diri. Organisasi mahasiswa dan kegiatan kampus membantu mengembangkan kepemimpinan dan keterampilan sosial. Pengalaman kampus sering menjadi fondasi untuk kehidupan dewasa yang sukses.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kampus',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'universitas_5',
                        teks: 'Akses ke universitas berkualitas adalah kunci untuk mengatasi ketimpangan sosial.',
                        info: {
                            deskripsi: 'Banyak orang berbakat tidak dapat mengakses pendidikan universitas karena keterbatasan finansial. Beasiswa dan program inklusi di universitas membuka peluang bagi siswa dari latar belakang kurang mampu. Universitas yang inklusif berkontribusi pada pembangunan masyarakat yang lebih adil.',
                            gambar: 'https://via.placeholder.com/300x200?text=Akses',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'usaha',
                nama: 'USAHA',
                kalimat: [
                    {
                        id: 'usaha_1',
                        teks: 'Usaha adalah upaya dan kerja keras yang diperlukan untuk mencapai tujuan.',
                        info: {
                            deskripsi: 'Usaha adalah komitmen dan dedikasi terhadap tujuan yang telah kita tentukan. Tanpa usaha, tidak ada kesuksesan yang bermakna. Usaha yang konsisten, meskipun lambat, pada akhirnya akan membawa hasil.',
                            gambar: 'https://via.placeholder.com/300x200?text=Usaha',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'usaha_2',
                        teks: 'Usaha kecil menengah adalah tulang punggung ekonomi nasional.',
                        info: {
                            deskripsi: 'UKM memberikan lapangan kerja bagi jutaan orang dan berkontribusi signifikan terhadap GDP. Usaha kecil yang dikelola dengan baik dapat berkembang menjadi perusahaan besar. Dukungan pemerintah dan akses modal adalah penting untuk pengembangan UKM.',
                            gambar: 'https://via.placeholder.com/300x200?text=UKM',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'usaha_3',
                        teks: 'Usaha tanpa henti adalah sifat dari semua orang yang sukses.',
                        info: {
                            deskripsi: 'Entrepreneur sukses adalah mereka yang tidak pernah berhenti berusaha meskipun menghadapi kegagalan. Usaha berkelanjutan dan adaptasi terhadap perubahan adalah kunci pertahan dan pertumbuhan bisnis. Grit dan determinasi adalah faktor penting dalam kesuksesan jangka panjang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sukses',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'usaha_4',
                        teks: 'Usaha kolaboratif menghasilkan sinergi yang lebih kuat dari upaya individual.',
                        info: {
                            deskripsi: 'Ketika orang bekerja sama dengan satu tujuan bersama, hasil yang dicapai jauh lebih besar. Kolaborasi dalam tim menciptakan lingkungan yang supportif dan produktif. Kerja tim yang efektif adalah kunci kesuksesan proyek besar.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kolaborasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'usaha_5',
                        teks: 'Usaha untuk kebaikan sosial memberikan makna yang lebih dalam dalam hidup.',
                        info: {
                            deskripsi: 'Usaha sukarela dan kegiatan sosial menciptakan dampak positif pada komunitas. Ketika usaha kita berkontribusi pada kebaikan bersama, hidup menjadi lebih bermakna. Kerja sosial adalah bentuk usaha yang memberi kepuasan dan kebahagiaan sejati.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sosial',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER V =====
    'V': {
        karakter: 'V',
        nama_karakter: 'V',
        kata_dasar: [
            {
                id: 'vaksin',
                nama: 'VAKSIN',
                kalimat: [
                    {
                        id: 'vaksin_1',
                        teks: 'Vaksin adalah obat yang melatih sistem imun untuk melawan penyakit.',
                        info: {
                            deskripsi: 'Vaksin adalah salah satu penemuan medis terpenting dalam sejarah manusia. Vaksin telah menyelamatkan jutaan nyawa dan mengeliminasi penyakit seperti cacar. Sistem imun yang terlatih dengan vaksin dapat melawan infeksi lebih efektif.',
                            gambar: 'https://via.placeholder.com/300x200?text=Vaksin',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'vaksin_2',
                        teks: 'Vaksin COVID-19 telah menjadi alat penting untuk mengendalikan pandemi global.',
                        info: {
                            deskripsi: 'Pengembangan vaksin COVID-19 dalam waktu singkat adalah prestasi luar biasa dalam bioteknologi. Vaksinasi massal telah mengurangi keparahan penyakit dan menyelamatkan jutaan nyawa. Vaksin COVID menunjukkan pentingnya riset kesehatan dan kolaborasi global.',
                            gambar: 'https://via.placeholder.com/300x200?text=COVID',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'vaksin_3',
                        teks: 'Imunisasi rutin anak-anak mencegah penyakit menular yang serius.',
                        info: {
                            deskripsi: 'Program imunisasi anak telah mencegah jutaan kematian anak di seluruh dunia. Vaksin rutin seperti polio, campak, dan hepatitis adalah bagian penting dari kesehatan masyarakat. Vaksinasi lengkap pada anak-anak adalah hak dan tanggung jawab orang tua.',
                            gambar: 'https://via.placeholder.com/300x200?text=Imunisasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'vaksin_4',
                        teks: 'Hesitansi vaksin adalah tantangan penting dalam pencapaian kekebalan komunitas.',
                        info: {
                            deskripsi: 'Meskipun vaksin terbukti aman dan efektif, beberapa orang masih ragu untuk divaksin. Misinformasi dan ketakutan yang tidak berdasar dapat mengurangi tingkat vaksinasi. Komunikasi yang jelas dan transparan tentang keamanan vaksin sangat penting.',
                            gambar: 'https://via.placeholder.com/300x200?text=Edukasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'vaksin_5',
                        teks: 'Vaksin baru terus dikembangkan untuk penyakit yang belum ada obatnya.',
                        info: {
                            deskripsi: 'Penelitian vaksin terus berlanjut untuk menciptakan perlindungan terhadap penyakit baru dan yang resisten. Vaksin kanker dan vaksin dengue adalah contoh inovasi terkini. Investasi dalam penelitian vaksin adalah investasi dalam kesehatan publik masa depan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Inovasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'visi',
                nama: 'VISI',
                kalimat: [
                    {
                        id: 'visi_1',
                        teks: 'Visi adalah gambaran jelas tentang masa depan yang ingin kita ciptakan.',
                        info: {
                            deskripsi: 'Visi adalah aspirasi jangka panjang yang mengarahkan tindakan dan keputusan kita. Visi yang kuat memberikan motivasi dan fokus dalam menghadapi tantangan. Setiap pemimpin dan organisasi sukses memiliki visi yang jelas.',
                            gambar: 'https://via.placeholder.com/300x200?text=Visi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'visi_2',
                        teks: 'Visi pribadi membantu kita menentukan arah hidup dan prioritas yang tepat.',
                        info: {
                            deskripsi: 'Visi pribadi tentang karir, keluarga, dan pertumbuhan adalah panduan untuk membuat keputusan yang selaras. Visi yang jelas mengurangi kebingungan dan meningkatkan produktivitas. Setiap orang harus merefleksikan dan mendefinisikan visi mereka.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pribadi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'visi_3',
                        teks: 'Visi organisasi menginspirasi karyawan dan mengarahkan strategi bisnis.',
                        info: {
                            deskripsi: 'Visi perusahaan yang jelas memberikan arah dan makna bagi karyawan. Ketika semua orang dalam organisasi sejalan dengan visi yang sama, sinergi tercipta. Visi organisasi yang compelling menarik talenta terbaik dan loyalitas pelanggan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Organisasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'visi_4',
                        teks: 'Visi sosial untuk dunia yang lebih adil menginspirasi gerakan perubahan.',
                        info: {
                            deskripsi: 'Pemimpin sosial besar seperti Gandhi dan Martin Luther King memiliki visi yang kuat untuk keadilan. Visi sosial yang inspiratif dapat memobilisasi jutaan orang untuk perubahan. Visi untuk dunia yang lebih baik adalah aspirasi universal.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sosial+Visi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'visi_5',
                        teks: 'Mewujudkan visi memerlukan misi yang jelas, strategi, dan eksekusi yang konsisten.',
                        info: {
                            deskripsi: 'Visi saja tidak cukup tanpa rencana konkret untuk mewujudkannya. Misi adalah langkah-langkah operasional untuk mencapai visi. Komitmen berkelanjutan terhadap visi dan misi adalah kunci kesuksesan jangka panjang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Eksekusi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER W =====
    'W': {
        karakter: 'W',
        nama_karakter: 'W',
        kata_dasar: [
            {
                id: 'wacana',
                nama: 'WACANA',
                kalimat: [
                    {
                        id: 'wacana_1',
                        teks: 'Wacana adalah percakapan atau diskusi tentang topik tertentu dalam masyarakat.',
                        info: {
                            deskripsi: 'Wacana publik membentuk opini dan kebijakan masyarakat. Wacana yang sehat melibatkan berbagai perspektif dan argumen yang berdasarkan fakta. Media massa dan media sosial memainkan peran penting dalam membentuk wacana publik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Wacana',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'wacana_2',
                        teks: 'Wacana sosial tentang kesetaraan mendorong perubahan budaya dan institusional.',
                        info: {
                            deskripsi: 'Wacana tentang gender, ras, dan hak asasi manusia telah menggerakkan perubahan sosial positif. Diskusi terbuka tentang isu sensitif adalah penting untuk memahami dan mengatasi ketidakadilan. Wacana yang inklusif memberi suara kepada mereka yang selama ini terpinggirkan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kesetaraan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'wacana_3',
                        teks: 'Wacana tentang perubahan iklim mempengaruhi kebijakan lingkungan global.',
                        info: {
                            deskripsi: 'Wacana sains tentang perubahan iklim telah mempengaruhi kesadaran dan kebijakan pemerintah. Diskusi tentang keberlanjutan lingkungan mendorong inovasi hijau. Wacana global tentang iklim adalah kritis untuk masa depan planet.',
                            gambar: 'https://via.placeholder.com/300x200?text=Iklim',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'wacana_4',
                        teks: 'Wacana akademik mendorong batas-batas pengetahuan dan pemahaman.',
                        info: {
                            deskripsi: 'Diskusi ilmiah dan akademik adalah cara untuk memvalidasi dan meningkatkan pengetahuan. Wacana peer-review dalam jurnal ilmiah memastikan kualitas penelitian. Wacana akademik yang terbuka pada kritik mendorong perbaikan berkelanjutan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Akademik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'wacana_5',
                        teks: 'Wacana yang sehat memerlukan toleransi terhadap perbedaan pendapat dan kesediaan mendengarkan.',
                        info: {
                            deskripsi: 'Wacana publik yang konstruktif memerlukan empati dan kesadaran akan bias pribadi. Kemampuan mendengarkan dengan terbuka adalah skill penting dalam dialog. Wacana yang sehat memperkaya pemahaman kita tentang isu kompleks.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dialog',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'warisan',
                nama: 'WARISAN',
                kalimat: [
                    {
                        id: 'warisan_1',
                        teks: 'Warisan adalah apa yang diwariskan dari generasi sebelumnya kepada generasi penerus.',
                        info: {
                            deskripsi: 'Warisan dapat berupa materi seperti tanah dan harta, atau non-materi seperti nilai dan budaya. Warisan keluarga membentuk identitas dan nilai-nilai kita. Melestarikan dan meneruskan warisan adalah tanggung jawab setiap generasi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Warisan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'warisan_2',
                        teks: 'Warisan budaya mencerminkan identitas dan sejarah suatu bangsa atau etnis.',
                        info: {
                            deskripsi: 'Warisan budaya seperti seni, musik, dan tradisi adalah cerminan nilai-nilai masyarakat. Pelestarian warisan budaya penting untuk menjaga identitas dan kebanggaan nasional. UNESCO melindungi situs warisan dunia yang bersejarah dan berharga.',
                            gambar: 'https://via.placeholder.com/300x200?text=Budaya',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'warisan_3',
                        teks: 'Warisan pendidikan dan pengetahuan adalah investasi terbesar untuk masa depan.',
                        info: {
                            deskripsi: 'Memberikan pendidikan yang baik kepada generasi muda adalah warisan paling berharga. Pengetahuan dan keterampilan yang diberikan orang tua dan guru dibawa seumur hidup. Warisan pendidikan membuka peluang tak terbatas.',
                            gambar: 'https://via.placeholder.com/300x200?text=Pendidikan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'warisan_4',
                        teks: 'Warisan lingkungan yang sehat adalah tanggung jawab kita kepada generasi mendatang.',
                        info: {
                            deskripsi: 'Generasi saat ini harus melestarikan lingkungan alam untuk generasi masa depan. Degradasi lingkungan adalah mengambil warisan yang seharusnya diwariskan. Keberlanjutan lingkungan adalah bentuk tanggung jawab intergenerasi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Lingkungan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'warisan_5',
                        teks: 'Warisan spiritual dan nilai-nilai moral membentuk karakter manusia yang mulia.',
                        info: {
                            deskripsi: 'Nilai-nilai seperti integritas, kerendahan hati, dan kasih sayang adalah warisan spiritual yang berharga. Warisan moral ditransmisikan melalui contoh, pengajaran, dan praktik. Warisan spiritual memberi makna dan tujuan dalam hidup.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nilai',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER X =====
    'X': {
        karakter: 'X',
        nama_karakter: 'X',
        kata_dasar: [
            {
                id: 'xenofobia',
                nama: 'XENOFOBIA',
                kalimat: [
                    {
                        id: 'xenofobia_1',
                        teks: 'Xenofobia adalah ketakutan atau benci terhadap orang asing atau budaya yang berbeda.',
                        info: {
                            deskripsi: 'Xenofobia adalah bentuk dari diskriminasi yang dapat merusak harmoni sosial dan kemanusiaan. Ketakutan terhadap yang berbeda sering berasal dari ketidakpahaman dan propaganda. Pendidikan dan interaksi positif dapat mengurangi xenofobia.',
                            gambar: 'https://via.placeholder.com/300x200?text=Xenofobia',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xenofobia_2',
                        teks: 'Xenofobia terhadap imigran menciptakan ketegangan sosial dan kekerasan.',
                        info: {
                            deskripsi: 'Imigran sering menjadi target xenofobia meskipun berkontribusi signifikan pada ekonomi. Stereotip negatif tentang imigran tidak berdasarkan pada data atau pengalaman nyata. Xenofobia terhadap imigran membatasi mobilitas tenaga kerja dan inovasi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Imigran',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xenofobia_3',
                        teks: 'Xenofobia agama menyebabkan konflik dan persekusi terhadap kelompok religius tertentu.',
                        info: {
                            deskripsi: 'Ketakutan dan kebencian terhadap agama lain adalah bentuk ekstrem dari xenofobia. Kebebasan beragama adalah hak asasi manusia yang harus dilindungi. Dialog antar agama dapat membangun pemahaman dan toleransi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Agama',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xenofobia_4',
                        teks: 'Mengatasi xenofobia memerlukan pendidikan, kontak sosial positif, dan kebijakan inklusif.',
                        info: {
                            deskripsi: 'Pendidikan multikultural di sekolah dapat mengurangi xenofobia sejak dini. Interaksi positif antara kelompok yang berbeda membangun empati dan pemahaman. Kebijakan pemerintah yang inklusif dan anti-diskriminasi penting untuk mencegah xenofobia.',
                            gambar: 'https://via.placeholder.com/300x200?text=Toleransi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xenofobia_5',
                        teks: 'Diversity dan inklusi adalah antidote terbaik untuk xenofobia.',
                        info: {
                            deskripsi: 'Masyarakat yang diverse dan inklusif lebih kreatif, inovatif, dan tahan banting. Ketika berbagai budaya dan perspektif hidup bersama, kekayaan budaya tercipta. Menghargai keragaman adalah kunci untuk dunia yang lebih damai dan sejahtera.',
                            gambar: 'https://via.placeholder.com/300x200?text=Diversity',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'xanadu',
                nama: 'XANADU',
                kalimat: [
                    {
                        id: 'xanadu_1',
                        teks: 'Xanadu adalah istilah yang merujuk pada tempat atau situasi yang fantastis dan ideal.',
                        info: {
                            deskripsi: 'Xanadu dalam sastra merujuk pada surga dunia atau tempat impian yang sempurna. Istilah ini berasal dari puisi "Kubla Khan" dan telah menjadi simbol utopia. Pencarian manusia untuk Xanadu mencerminkan keinginan akan kehidupan yang ideal.',
                            gambar: 'https://via.placeholder.com/300x200?text=Xanadu',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xanadu_2',
                        teks: 'Xanadu dalam konteks modern mewakili visi futuristik dan inovatif.',
                        info: {
                            deskripsi: 'Kota futuristik dan teknologi canggih sering disebut sebagai Xanadu modern. Visi tentang masa depan yang lebih baik dengan teknologi dan keberlanjutan mencerminkan pencarian Xanadu. Proyek-proyek ambisius untuk menciptakan komunitas ideal adalah upaya mencapai Xanadu.',
                            gambar: 'https://via.placeholder.com/300x200?text=Futuristik',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xanadu_3',
                        teks: 'Pencarian Xanadu adalah perjalanan spiritual untuk menemukan kedamaian dan kebahagiaan.',
                        info: {
                            deskripsi: 'Banyak orang mencari Xanadu dalam bentuk kedamaian batin dan kepuasan hidup. Pencarian spiritual ini adalah perjalanan introspektif yang personal. Xanadu yang sejati mungkin ditemukan dalam kesederhanaan dan apresiasi hidup saat ini.',
                            gambar: 'https://via.placeholder.com/300x200?text=Spiritual',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xanadu_4',
                        teks: 'Xanadu adalah impian bersama tentang masyarakat yang adil dan sejahtera.',
                        info: {
                            deskripsi: 'Utopia sosial atau Xanadu masyarakat adalah visi tentang dunia tanpa kemiskinan dan ketidakadilan. Setiap gerakan sosial dan reformasi adalah usaha mendekati Xanadu yang ideal. Meskipun sempurna tidak tercapai, pergeseran menuju keadilan adalah nilai penting.',
                            gambar: 'https://via.placeholder.com/300x200?text=Masyarakat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'xanadu_5',
                        teks: 'Jangan hanya mencari Xanadu, tetapi ciptakan keindahan dalam kehidupan yang ada sekarang.',
                        info: {
                            deskripsi: 'Filosofi Xanadu mengajarkan bahwa surga dapat ditemukan dalam kehidupan sehari-hari jika kita menghargainya. Kebahagiaan sejati bukanlah dalam pencarian yang panjang tetapi dalam apresiasi momen saat ini. Xanadu terbaik adalah ketika kita puas dengan apa yang kita miliki.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sekarang',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER Y =====
    'Y': {
        karakter: 'Y',
        nama_karakter: 'Y',
        kata_dasar: [
            {
                id: 'yakin',
                nama: 'YAKIN',
                kalimat: [
                    {
                        id: 'yakin_1',
                        teks: 'Yakin adalah kepercayaan diri dan keyakinan dalam kemampuan kita sendiri.',
                        info: {
                            deskripsi: 'Yakin adalah keadaan pikiran positif yang memotivasi kita untuk mengambil tindakan. Kepercayaan diri yang sehat adalah penting untuk kesuksesan dan kebahagiaan. Yakin bukan berarti tidak pernah takut, tetapi percaya pada diri sendiri meskipun menghadapi ketakutan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Yakin',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yakin_2',
                        teks: 'Yakin pada kemampuan diri sendiri adalah langkah pertama menuju kesuksesan.',
                        info: {
                            deskripsi: 'Banyak orang gagal bukan karena kurangnya kemampuan tetapi karena kurangnya kepercayaan diri. Membangun kepercayaan diri memerlukan latihan, pengalaman positif, dan self-affirmation. Ketika kita yakin pada diri sendiri, orang lain juga akan mempercayai kita.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kepercayaan+Diri',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yakin_3',
                        teks: 'Yakin pada keputusan yang telah dibuat membantu kita maju tanpa ragu-ragu.',
                        info: {
                            deskripsi: 'Setiap keputusan penting memerlukan analisis mendalam dan kemudian yakin pada pilihan yang dibuat. Keraguan yang berlebihan dapat melumpuhkan aksi dan menunda kesuksesan. Yakin pada keputusan sambil tetap terbuka untuk pembelajaran adalah keseimbangan yang ideal.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keputusan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yakin_4',
                        teks: 'Yakin pada masa depan yang lebih baik memberikan harapan dan energi positif.',
                        info: {
                            deskripsi: 'Optimisme dan yakin pada masa depan adalah kekuatan yang dapat mengubah realitas. Ketika kita yakin pada masa depan, kita membuat keputusan dan tindakan yang mengarah ke arah yang diinginkan. Harapan dan kepercayaan adalah bahan bakar motivasi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Masa+Depan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yakin_5',
                        teks: 'Yakin adalah keberanian untuk mengambil risiko dan mencoba hal-hal baru.',
                        info: {
                            deskripsi: 'Setiap inovasi dan pencapaian besar dimulai dengan keberanian seseorang yang yakin untuk mencoba hal baru. Rasa takut adalah normal tetapi tidak boleh mencegah kita mencoba. Yakin pada diri sendiri memberi keberanian untuk keluar dari zona nyaman.',
                            gambar: 'https://via.placeholder.com/300x200?text=Berani',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'yatim',
                nama: 'YATIM',
                kalimat: [
                    {
                        id: 'yatim_1',
                        teks: 'Yatim adalah anak yang telah kehilangan salah satu atau kedua orang tua.',
                        info: {
                            deskripsi: 'Anak yatim adalah kelompok yang rentan dan memerlukan perlindungan serta dukungan khusus. Di banyak agama, membantu anak yatim adalah amal yang sangat tinggi nilainya. Setiap masyarakat harus memiliki sistem dukungan untuk anak-anak yatim.',
                            gambar: 'https://via.placeholder.com/300x200?text=Yatim',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yatim_2',
                        teks: 'Membantu anak yatim adalah bentuk kepedulian sosial dan belas kasih.',
                        info: {
                            deskripsi: 'Program yatim piatu dan beasiswa untuk anak yatim membantu mereka mendapatkan akses pendidikan. Mentoring dan dukungan emosional juga sangat penting untuk kesehatan mental anak yatim. Ketika kita membantu anak yatim, kita berinvestasi dalam masa depan masyarakat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Bantuan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yatim_3',
                        teks: 'Kekuatan anak yatim sering terlihat dalam ketangguhan dan determinasi mereka.',
                        info: {
                            deskripsi: 'Banyak anak yatim menunjukkan luar biasa resiliensi dan keberanian dalam menghadapi tantangan hidup. Kisah sukses anak yatim yang mengatasi kesulitan menginspirasi banyak orang. Dukungan sosial dan kepercayaan diri membantu anak yatim mencapai potensi penuh mereka.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kekuatan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yatim_4',
                        teks: 'Program kesejahteraan yatim harus komprehensif mencakup pendidikan, kesehatan, dan dukungan psikis.',
                        info: {
                            deskripsi: 'Program yatim yang efektif tidak hanya memberikan makanan dan tempat tinggal tetapi juga pendidikan berkualitas. Kesehatan mental dan dukungan psikologis sangat penting untuk trauma yang dialami anak yatim. Investasi dalam kesejahteraan yatim adalah investasi dalam pembangunan masyarakat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kesejahteraan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'yatim_5',
                        teks: 'Keluarga asuh dan komunitas dapat memberikan cinta dan dukungan yang dibutuhkan anak yatim.',
                        info: {
                            deskripsi: 'Keluarga asuh memberikan cinta dan kehangatan yang penting bagi perkembangan emosional anak yatim. Komunitas lokal juga dapat memberikan dukungan sosial dan sense of belonging. Tidak semua anak yatim harus tinggal di panti asuhan jika keluarga asuh tersedia.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keluarga+Asuh',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER Z =====
    'Z': {
        karakter: 'Z',
        nama_karakter: 'Z',
        kata_dasar: [
            {
                id: 'zakat',
                nama: 'ZAKAT',
                kalimat: [
                    {
                        id: 'zakat_1',
                        teks: 'Zakat adalah kewajiban umat Islam untuk memberikan sebagian harta kepada yang membutuhkan.',
                        info: {
                            deskripsi: 'Zakat adalah salah satu pilar Islam dan merupakan bentuk pajak sosial yang wajib. Zakat ditujukan untuk membantu mereka yang kurang mampu dan mengurangi ketimpangan ekonomi. Pelaksanaan zakat adalah tanda keimanan dan tanggung jawab sosial.',
                            gambar: 'https://via.placeholder.com/300x200?text=Zakat',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zakat_2',
                        teks: 'Zakat fitrah diberikan menjelang Idul Fitri untuk memastikan semua orang dapat merayakan hari raya.',
                        info: {
                            deskripsi: 'Zakat fitrah adalah kewajiban khusus sebelum sholat Idul Fitri untuk membersihkan diri dari kesalahan. Zakat fitrah memastikan orang-orang miskin dapat merayakan Idul Fitri dengan layak. Besarnya zakat fitrah biasanya sama untuk semua orang tanpa memandang status ekonomi.',
                            gambar: 'https://via.placeholder.com/300x200?text=Idul+Fitri',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zakat_3',
                        teks: 'Zakat maal adalah zakat dari kekayaan yang dikeluarkan setiap tahun.',
                        info: {
                            deskripsi: 'Zakat maal diberikan dari kekayaan yang telah mencapai nishab dan berlalu satu tahun (haul). Zakat maal mencakup harta benda, emas, uang, dan berbagai jenis kekayaan lainnya. Perhitungan zakat maal harus dilakukan dengan teliti dan ikhlas.',
                            gambar: 'https://via.placeholder.com/300x200?text=Maal',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zakat_4',
                        teks: 'Zakat memiliki dampak sosial ekonomi yang signifikan dalam mengurangi kemiskinan.',
                        info: {
                            deskripsi: 'Sistem zakat yang efektif dapat mengurangi ketimpangan ekonomi dan meningkatkan kesejahteraan masyarakat. Zakat bukan hanya tentang memberikan uang tetapi juga pemberdayaan ekonomi penerima. Zakat yang dikelola dengan baik menciptakan ekonomi yang lebih adil.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ekonomi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zakat_5',
                        teks: 'Memberikan zakat dengan niat ikhlas adalah bentuk ibadah dan investasi untuk akhirat.',
                        info: {
                            deskripsi: 'Zakat yang diberikan dengan niat tulus akan membawa berkah dan kebaikan. Memberikan zakat bukan hanya untuk membantu yang membutuhkan tetapi juga untuk membersihkan dan meningkatkan diri. Zakat adalah jembatan antara harta dan kesejahteraan spiritual.',
                            gambar: 'https://via.placeholder.com/300x200?text=Niat+Ikhlas',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'zona',
                nama: 'ZONA',
                kalimat: [
                    {
                        id: 'zona_1',
                        teks: 'Zona adalah area atau wilayah geografis yang memiliki karakteristik dan fungsi tertentu.',
                        info: {
                            deskripsi: 'Zona dapat dibagi berdasarkan berbagai kriteria seperti iklim, perkembangan, atau fungsi sosial. Zona residensial, komersial, dan industri adalah contoh pembagian zona di kota. Perencanaan zona yang baik penting untuk pengembangan kota yang teratur.',
                            gambar: 'https://via.placeholder.com/300x200?text=Zona',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zona_2',
                        teks: 'Zona nyaman adalah keadaan di mana kita merasa aman tetapi tidak berkembang.',
                        info: {
                            deskripsi: 'Zona nyaman adalah kondisi di mana kita tidak ditantang dan cenderung statis. Pertumbuhan pribadi memerlukan keluar dari zona nyaman dan menghadapi tantangan baru. Meskipun tidak nyaman, keluar dari zona nyaman adalah penting untuk perkembangan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Nyaman',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zona_3',
                        teks: 'Zona dampak adalah area yang terkena dampak negatif dari aktivitas manusia atau bencana alam.',
                        info: {
                            deskripsi: 'Zona dampak banjir, gempa, atau polusi memerlukan perhatian khusus dari pemerintah. Perlindungan zona yang rentan adalah tanggung jawab sosial dan lingkungan. Perencanaan mitigasi bencana untuk zona dampak dapat menyelamatkan nyawa.',
                            gambar: 'https://via.placeholder.com/300x200?text=Dampak',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zona_4',
                        teks: 'Zona ekonomi khusus diciptakan untuk mendorong investasi dan pertumbuhan ekonomi.',
                        info: {
                            deskripsi: 'Zona ekonomi khusus menawarkan insentif dan regulasi khusus untuk menarik investor. Zona ini sering menciptakan lapangan kerja dan pertumbuhan ekonomi yang signifikan. Manajemen zona ekonomi yang baik dapat memberikan manfaat maksimal bagi masyarakat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ekonomi+Khusus',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'zona_5',
                        teks: 'Zona waktu membagi dunia menjadi beberapa daerah dengan jam yang berbeda.',
                        info: {
                            deskripsi: 'Zona waktu memungkinkan koordinasi waktu di berbagai belahan dunia. Perbedaan zona waktu mempengaruhi bisnis internasional dan komunikasi global. Pemahaman tentang zona waktu penting dalam era komunikasi digital yang global.',
                            gambar: 'https://via.placeholder.com/300x200?text=Waktu',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    },

    // ===== KARAKTER Q =====
    'Q': {
        karakter: 'Q',
        nama_karakter: 'Q',
        kata_dasar: [
            {
                id: 'qanun',
                nama: 'QANUN',
                kalimat: [
                    {
                        id: 'qanun_1',
                        teks: 'Qanun adalah hukum atau undang-undang dalam sistem hukum Islam.',
                        info: {
                            deskripsi: 'Qanun adalah peraturan yang dibuat oleh lembaga legislatif berdasarkan prinsip syariah. Di Indonesia, Aceh memiliki otoritas untuk membuat qanun sesuai dengan prinsip Islam. Qanun mengatur berbagai aspek kehidupan masyarakat.',
                            gambar: 'https://via.placeholder.com/300x200?text=Qanun',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qanun_2',
                        teks: 'Qanun Aceh mengatur kehidupan sosial, ekonomi, dan hukum berdasarkan syariah Islam.',
                        info: {
                            deskripsi: 'Provinsi Aceh memiliki status khusus untuk menerapkan hukum Islam melalui qanun. Qanun Aceh mencakup berbagai bidang dari pernikahan hingga bisnis. Implementasi qanun harus sesuai dengan peraturan nasional.',
                            gambar: 'https://via.placeholder.com/300x200?text=Aceh',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qanun_3',
                        teks: 'Qanun memiliki peran penting dalam menegakkan keadilan dan tata tertib sosial.',
                        info: {
                            deskripsi: 'Seperti undang-undang lainnya, qanun dirancang untuk mengatur kehidupan bermasyarakat dan menegakkan keadilan. Penegakan qanun memerlukan institusi hukum yang independen dan profesional. Qanun yang baik adalah qanun yang melindungi hak semua orang.',
                            gambar: 'https://via.placeholder.com/300x200?text=Keadilan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qanun_4',
                        teks: 'Qanun harus selaras dengan konstitusi nasional dan hak asasi manusia.',
                        info: {
                            deskripsi: 'Meskipun berbasis syariah, qanun harus tetap menghormati konstitusi negara dan hak asasi manusia. Keseimbangan antara nilai lokal dan standar internasional penting dalam pembuatan qanun. Transparansi dalam proses pembuatan qanun meningkatkan legitimasinya.',
                            gambar: 'https://via.placeholder.com/300x200?text=Konstitusi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qanun_5',
                        teks: 'Sosialisasi dan pemahaman qanun adalah penting untuk implementasi yang efektif.',
                        info: {
                            deskripsi: 'Masyarakat harus memahami qanun untuk dapat mengikuti dan mematuhinya. Program sosialisasi dan edukasi hukum membantu meningkatkan kesadaran masyarakat. Penegakan qanun yang konsisten dan adil membangun kepercayaan publik.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sosialisasi',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            },
            {
                id: 'qada',
                nama: 'QADA',
                kalimat: [
                    {
                        id: 'qada_1',
                        teks: 'Qada adalah takdir atau ketetapan dari Allah yang telah terjadi.',
                        info: {
                            deskripsi: 'Qada dalam konsep Islam merujuk pada keputusan Tuhan yang pasti dan telah terjadi. Qada berbeda dengan qadar yang merupakan takdir yang telah ditetapkan. Menerima qada adalah bentuk dari pasrah dan tawakal kepada Tuhan.',
                            gambar: 'https://via.placeholder.com/300x200?text=Qada',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qada_2',
                        teks: 'Qada ujian adalah kewajiban bagi yang tertinggal dalam melaksanakan shalat.',
                        info: {
                            deskripsi: 'Qada ujian adalah ibadah penebus untuk shalat yang terlewat karena alasan tertentu. Melaksanakan qada ujian adalah bagian dari tanggung jawab spiritual Muslim. Tujuan qada adalah untuk melengkapi ibadah yang belum terlaksana.',
                            gambar: 'https://via.placeholder.com/300x200?text=Ibadah',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qada_3',
                        teks: 'Memahami qada membantu kita bersabar dan menerima cobaan hidup dengan bijak.',
                        info: {
                            deskripsi: 'Konsep qada dalam Islam mengajarkan kesabaran dan penerimaan terhadap takdir. Ketika menghadapi kesulitan, memahami bahwa itu adalah qada dari Tuhan memberikan ketenangan. Qada tidak berarti pasif tetapi tetap berusaha sambil berserah diri.',
                            gambar: 'https://via.placeholder.com/300x200?text=Sabar',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qada_4',
                        teks: 'Qada dan qadar adalah konsep yang saling terkait dalam kepercayaan Islam.',
                        info: {
                            deskripsi: 'Qada dan qadar menggambarkan hubungan antara takdir Tuhan dan kehendak manusia. Qada adalah keputusan final sementara qadar adalah pengetahuan sebelumnya. Keseimbangan antara keduanya adalah bagian dari iman yang sempurna.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kepercayaan',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    },
                    {
                        id: 'qada_5',
                        teks: 'Menjalani kehidupan dengan memahami qada menciptakan kedamaian batin dan keseimbangan emosi.',
                        info: {
                            deskripsi: 'Orang yang memahami qada cenderung lebih tenang dan tidak khawatir berlebihan. Penerimaan terhadap apa yang tidak dapat diubah membawa kedamaian. Qada adalah filosofi hidup yang mengajarkan kebijaksanaan dan kerendahan hati.',
                            gambar: 'https://via.placeholder.com/300x200?text=Kedamaian',
                            video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
                        }
                    }
                ]
            }
        ]
    }
};

// Fungsi helper untuk mendapatkan semua karakter yang tersedia
function getAvailableCharacters() {
    return Object.keys(DATABASE).sort();
}

// Fungsi helper untuk mendapatkan kata dasar dari karakter tertentu
function getKataDasarByCharacter(char) {
    const upperChar = char.toUpperCase();
    if (DATABASE[upperChar]) {
        return DATABASE[upperChar].kata_dasar;
    }
    return [];
}

// Fungsi helper untuk mencari kata dasar yang cocok dengan query
function searchKataDasar(query) {
    const results = [];
    const upperQuery = query.toUpperCase();
    
    for (const [char, charData] of Object.entries(DATABASE)) {
        for (const kata of charData.kata_dasar) {
            if (kata.nama.startsWith(upperQuery)) {
                results.push({
                    char: char,
                    id: kata.id,
                    nama: kata.nama,
                    jumlah_kalimat: kata.kalimat.length,
                    kalimat: kata.kalimat
                });
            }
        }
    }
    
    return results;
}

// Fungsi helper untuk mendapatkan detail kalimat
function getKalimatDetail(char, kataDasarId, kalimatId) {
    const upperChar = char.toUpperCase();
    if (DATABASE[upperChar]) {
        const kataDasar = DATABASE[upperChar].kata_dasar.find(k => k.id === kataDasarId);
        if (kataDasar) {
            return kataDasar.kalimat.find(k => k.id === kalimatId);
        }
    }
    return null;
}
