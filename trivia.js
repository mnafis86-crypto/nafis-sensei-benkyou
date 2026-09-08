/* ============================================================
   TRIVIA_DATA — Bank soal Mode Trivia (menu utama tersendiri).
   Campuran 2 kategori:
     - "budaya" : fakta umum Jepang (sejarah, makanan, tradisi, dll)
     - "bahasa" : trivia ringan seputar bahasa Jepang (di luar JLPT)
   Format tiap soal: { category, qText, options[4], correctAns, explanation }
   Field "explanation" ditampilkan setelah siswa menjawab (mirip mode Dokkai).
   ============================================================ */
const TRIVIA_DATA = [

/* ================= BUDAYA (fakta umum Jepang) ================= */
{ category:"budaya", qText:"Apa nama ibu kota Jepang saat ini?", options:["Osaka","Kyoto","Tokyo","Nagoya"], correctAns:"Tokyo",
  explanation:"Tokyo menjadi ibu kota Jepang sejak tahun 1868, menggantikan Kyoto yang sebelumnya menjadi ibu kota selama lebih dari 1000 tahun." },
{ category:"budaya", qText:"Gunung apa yang menjadi gunung tertinggi sekaligus simbol Jepang?", options:["Gunung Aso","Gunung Fuji","Gunung Tate","Gunung Haku"], correctAns:"Gunung Fuji",
  explanation:"Gunung Fuji (富士山) memiliki ketinggian 3.776 meter dan merupakan gunung berapi yang masih aktif, meski letusan terakhirnya terjadi tahun 1707." },
{ category:"budaya", qText:"Apa nama mata uang resmi Jepang?", options:["Won","Yuan","Ringgit","Yen"], correctAns:"Yen",
  explanation:"Yen (円) telah menjadi mata uang resmi Jepang sejak tahun 1871." },
{ category:"budaya", qText:"Tradisi melihat/menikmati bunga sakura mekar di musim semi disebut apa?", options:["Hanabi","Hanami","Matsuri","Momiji"], correctAns:"Hanami",
  explanation:"Hanami (花見) secara harfiah berarti 'melihat bunga'. Orang Jepang biasa piknik di bawah pohon sakura saat musim semi." },
{ category:"budaya", qText:"Apa nama olahraga gulat tradisional khas Jepang?", options:["Judo","Karate","Sumo","Kendo"], correctAns:"Sumo",
  explanation:"Sumo adalah olahraga gulat tradisional Jepang yang usianya sudah ratusan tahun, dengan aturan dan ritual yang sangat khas." },
{ category:"budaya", qText:"Apa nama kereta peluru (kereta cepat) khas Jepang?", options:["Maglev","Shinkansen","Bullet Rail","Tokaido Line"], correctAns:"Shinkansen",
  explanation:"Shinkansen (新幹線) pertama kali beroperasi tahun 1964, menghubungkan Tokyo dan Osaka, dan terkenal karena kecepatan serta ketepatan waktunya." },
{ category:"budaya", qText:"Apa nama pakaian tradisional Jepang yang biasa dipakai pada acara formal?", options:["Hanbok","Kimono","Ao Dai","Sari"], correctAns:"Kimono",
  explanation:"Kimono (着物) secara harfiah berarti 'sesuatu yang dipakai'. Ada berbagai jenis kimono tergantung acara dan status pemakainya." },
{ category:"budaya", qText:"Seni melipat kertas khas Jepang disebut?", options:["Ikebana","Origami","Shodou","Bonsai"], correctAns:"Origami",
  explanation:"Origami (折り紙) berasal dari kata 'oru' (melipat) dan 'kami' (kertas)." },
{ category:"budaya", qText:"Kota mana yang menjadi ibu kota Jepang selama lebih dari 1000 tahun sebelum Tokyo?", options:["Osaka","Nagoya","Kyoto","Sapporo"], correctAns:"Kyoto",
  explanation:"Kyoto menjadi ibu kota Jepang dari tahun 794 hingga 1868, dan sampai sekarang dikenal sebagai pusat budaya tradisional Jepang." },
{ category:"budaya", qText:"Boneka bulat yang salah satu matanya diwarnai saat membuat harapan, lalu diwarnai lagi kalau harapan terkabul, disebut?", options:["Daruma","Kokeshi","Maneki-neko","Teru teru bozu"], correctAns:"Daruma",
  explanation:"Boneka Daruma melambangkan ketekunan dan diyakini membawa keberuntungan. Matanya digambar satu dulu saat membuat harapan/tujuan." },
{ category:"budaya", qText:"Perayaan Tahun Baru dalam bahasa Jepang disebut?", options:["Obon","Oshougatsu","Setsubun","Tanabata"], correctAns:"Oshougatsu",
  explanation:"Oshougatsu (お正月) adalah perayaan Tahun Baru, salah satu hari raya terpenting dalam budaya Jepang." },
{ category:"budaya", qText:"Apa nama upacara minum teh tradisional Jepang?", options:["Chanoyu","Ikebana","Shodou","Kabuki"], correctAns:"Chanoyu",
  explanation:"Chanoyu (茶の湯), atau disebut juga Sadou (茶道), adalah ritual penyajian dan minum teh matcha yang sarat filosofi dan tata krama." },
{ category:"budaya", qText:"Roh atau dewa dalam kepercayaan tradisional Shinto disebut?", options:["Yokai","Oni","Kami","Tengu"], correctAns:"Kami",
  explanation:"Dalam Shinto, kami (神) bisa berupa roh yang menghuni alam, benda, atau leluhur, dan dihormati di kuil-kuil (jinja)." },
{ category:"budaya", qText:"Apa julukan Jepang dalam bahasa Jepang sendiri, yang berarti 'asal matahari'?", options:["Wakoku","Nihon","Yamato","Edo"], correctAns:"Nihon",
  explanation:"Nihon (日本) atau Nippon secara harfiah berarti 'asal-usul matahari', sering diterjemahkan sebagai 'Negeri Matahari Terbit'." },
{ category:"budaya", qText:"Festival musim panas yang diramaikan dengan kembang api di Jepang disebut apa?", options:["Hanabi Taikai","Hanami Matsuri","Yuki Matsuri","Momiji Gari"], correctAns:"Hanabi Taikai",
  explanation:"Hanabi Taikai (花火大会) adalah festival kembang api musim panas yang sangat populer di berbagai kota Jepang." },
{ category:"budaya", qText:"Apa nama boneka kucing yang sering ditaruh di depan toko Jepang sambil melambaikan tangan sebagai simbol keberuntungan?", options:["Kokeshi","Maneki-neko","Daruma","Kappa"], correctAns:"Maneki-neko",
  explanation:"Maneki-neko (招き猫) berarti 'kucing pengundang', dipercaya membawa keberuntungan dan rezeki bagi pemiliknya." },

/* ================= BAHASA (trivia ringan bahasa Jepang) ================= */
{ category:"bahasa", qText:"Apa arti dari kata sapaan \"Arigatou\"?", options:["Selamat pagi","Terima kasih","Maaf","Sampai jumpa"], correctAns:"Terima kasih",
  explanation:"\"Arigatou\" (ありがとう) adalah ungkapan terima kasih yang paling umum digunakan sehari-hari." },
{ category:"bahasa", qText:"Berapa jumlah huruf dasar dalam sistem tulisan Hiragana?", options:["26","36","46","52"], correctAns:"46",
  explanation:"Hiragana memiliki 46 huruf dasar (gojuuon), yang menjadi fondasi utama membaca dan menulis bahasa Jepang." },
{ category:"bahasa", qText:"Sistem tulisan Jepang yang paling sering dipakai untuk kata serapan dari bahasa asing disebut?", options:["Kanji","Hiragana","Katakana","Romaji"], correctAns:"Katakana",
  explanation:"Katakana (カタカナ) umumnya dipakai untuk menulis kata-kata serapan asing, nama negara, dan kadang untuk penekanan." },
{ category:"bahasa", qText:"Sapaan \"Ohayou\" biasanya diucapkan pada waktu apa?", options:["Pagi","Siang","Sore","Malam"], correctAns:"Pagi",
  explanation:"\"Ohayou (gozaimasu)\" adalah sapaan selamat pagi dalam bahasa Jepang." },
{ category:"bahasa", qText:"Apa arti dari kata \"Sayonara\"?", options:["Selamat tinggal","Selamat datang","Selamat malam","Sampai nanti"], correctAns:"Selamat tinggal",
  explanation:"\"Sayonara\" (さようなら) berarti selamat tinggal, meski dalam percakapan sehari-hari orang Jepang lebih sering memakai ungkapan lain yang lebih santai seperti \"jaa ne\"." },
{ category:"bahasa", qText:"Kata \"Neko\" dalam bahasa Jepang berarti hewan apa?", options:["Anjing","Kucing","Burung","Kelinci"], correctAns:"Kucing",
  explanation:"\"Neko\" (猫) berarti kucing." },
{ category:"bahasa", qText:"Ungkapan \"Sumimasen\" biasa dipakai untuk maksud apa?", options:["Permisi/maaf","Terima kasih banyak","Selamat ulang tahun","Tolong bantu saya"], correctAns:"Permisi/maaf",
  explanation:"\"Sumimasen\" (すみません) fleksibel dipakai untuk minta maaf, permisi, atau bahkan memanggil pelayan di restoran." },
{ category:"bahasa", qText:"Sistem tulisan Kanji pada dasarnya berasal dari negara mana?", options:["Korea","Tiongkok","Thailand","Vietnam"], correctAns:"Tiongkok",
  explanation:"Kanji diadaptasi dari aksara Tiongkok yang masuk ke Jepang sekitar abad ke-5, kemudian berkembang dengan cara baca dan makna khas Jepang." },
{ category:"bahasa", qText:"Ungkapan \"Ganbatte\" biasa diucapkan untuk maksud apa?", options:["Memberi semangat","Mengucapkan selamat","Meminta maaf","Menyapa di pagi hari"], correctAns:"Memberi semangat",
  explanation:"\"Ganbatte\" (がんばって) sering diterjemahkan sebagai 'semangat!' atau 'lakukan yang terbaik!'." },
{ category:"bahasa", qText:"Bagaimana cara membaca angka \"1\" dalam bahasa Jepang (bacaan umum)?", options:["Ni","San","Ichi","Yon"], correctAns:"Ichi",
  explanation:"\"Ichi\" adalah bacaan on'yomi untuk angka 1 (一), paling umum dipakai saat berhitung." },
{ category:"bahasa", qText:"Apa arti dari kata \"Oishii\"?", options:["Enak","Mahal","Panas","Dingin"], correctAns:"Enak",
  explanation:"\"Oishii\" (おいしい) berarti enak/lezat, sering diucapkan saat makan makanan yang disukai." },
{ category:"bahasa", qText:"Akhiran \"-san\" yang ditambahkan setelah nama orang (mis. \"Tanaka-san\") berfungsi sebagai apa?", options:["Panggilan sayang","Sebutan sopan/hormat","Gelar bangsawan","Nama keluarga"], correctAns:"Sebutan sopan/hormat",
  explanation:"\"-san\" adalah sufiks kehormatan netral yang dipakai untuk menyapa orang lain secara sopan, mirip 'Bapak/Ibu/Saudara' dalam bahasa Indonesia." },
{ category:"bahasa", qText:"Partikel apa yang biasanya menandai topik dalam sebuah kalimat bahasa Jepang?", options:["を (wo)","は (wa)","に (ni)","と (to)"], correctAns:"は (wa)",
  explanation:"Partikel は (dibaca 'wa' saat jadi partikel) menandai topik kalimat, misalnya \"わたしは学生です\" (Saya adalah pelajar)." },
{ category:"bahasa", qText:"Kata \"Konnichiwa\" paling tepat digunakan untuk menyapa pada waktu apa?", options:["Pagi hari","Siang/sore hari","Tengah malam","Dini hari"], correctAns:"Siang/sore hari",
  explanation:"\"Konnichiwa\" (こんにちは) umumnya dipakai sebagai sapaan di siang hingga sore hari." },
{ category:"bahasa", qText:"Apa arti dari kata \"Tomodachi\"?", options:["Keluarga","Guru","Teman","Tetangga"], correctAns:"Teman",
  explanation:"\"Tomodachi\" (友達) berarti teman/sahabat." }

];
