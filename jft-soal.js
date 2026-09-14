/* ============================================================
   JFT-SOAL.JS — Data soal untuk mode "Tryout JFT" (paket soal TETAP,
   TIDAK diacak & TIDAK dipisah/dibagi paket — ditampilkan sebagai
   1 set utuh persis seperti lembar kerja aslinya).

   Sumber: 2 lembar kerja latihan JFT (level dasar N5) + 3 paket
   simulasi JFT A2 (level N4).
   - JFT_SOAL_1  <- "JFT New 1"                    (30 soal, tata bahasa dasar N5)
   - JFT_SOAL_2  <- "LATIHAN SOAL JFT 24"           (35 dari 40 soal asli)
   - JFT_SOAL_3  <- "Simulasi JFT A2 Paket 1"       (50 soal)
   - JFT_SOAL_4  <- "Simulasi JFT A2 Paket 3"       (50 soal)
   - JFT_SOAL_5  <- "Simulasi JFT A2 Paket 16"      (50 soal)
   - JFT_SOAL_6  <- "Simulasi JFT A2 Paket 17"      (50 soal)
   - JFT_SOAL_7  <- "Simulasi JFT A2 Paket 18"      (50 soal)
   - JFT_SOAL_8  <- "Simulasi JFT A2 Paket 19"      (50 soal)
   - JFT_SOAL_9  <- "Simulasi JFT A2 Paket 20"      (50 soal)

   CATATAN PENTING soal No.36-40 di "LATIHAN SOAL JFT 24" SENGAJA
   TIDAK dimasukkan: soal-soal itu adalah bagian mendengarkan (ada
   dialog audio yang tidak tercantum di lembar kerja PDF-nya), jadi
   jawaban yang benar tidak bisa dipastikan hanya dari teks/gambar
   yang ada. Kalau nanti punya audio atau kunci jawabannya, 5 soal
   itu bisa ditambahkan menyusul.

   Bentuk tiap butir soal SAMA PERSIS dengan format soal JLPT_TEST
   yang sudah dipakai sistem ini: { qText, options, correctAns,
   section, level } — supaya bisa dirender pakai mesin kuis pilihan-
   ganda yang sudah ada (lihat makeQuestionForJFT di index.html).
   ============================================================ */

const JFT_SOAL_1 = [
  { level:'N5', section:'SOAL JFT 1', qText:'1. わたし＿＿アミンです。', options:['に','の','は','を'], correctAns:'は' },
  { level:'N5', section:'SOAL JFT 1', qText:'2. にちようび＿＿ともだちとあそびました。', options:['に','へ','で','を'], correctAns:'に' },
  { level:'N5', section:'SOAL JFT 1', qText:'3. バス＿＿がっこうへいきます。', options:['に','で','を','へ'], correctAns:'で' },
  { level:'N5', section:'SOAL JFT 1', qText:'4. にほんご＿＿べんきょうします。', options:['に','が','を','の'], correctAns:'を' },
  { level:'N5', section:'SOAL JFT 1', qText:'5. ともだち＿＿うちにいきました。', options:['を','に','から','と'], correctAns:'と' },
  { level:'N5', section:'SOAL JFT 1', qText:'6. ぎんこう＿＿まえに　ひとがいます。', options:['の','に','を','が'], correctAns:'の' },
  { level:'N5', section:'SOAL JFT 1', qText:'7. やさい＿＿くだものをたべます。', options:['と','に','や','を'], correctAns:'と' },
  { level:'N5', section:'SOAL JFT 1', qText:'8. えき＿＿でんしゃにのります。', options:['を','に','の','で'], correctAns:'で' },
  { level:'N5', section:'SOAL JFT 1', qText:'9. わたし＿＿かぞくは　５にんです。', options:['の','が','は','を'], correctAns:'の' },
  { level:'N5', section:'SOAL JFT 1', qText:'10. スーパーへかいもの＿＿いきます。', options:['に','の','を','と'], correctAns:'に' },
  { level:'N5', section:'SOAL JFT 1', qText:'11. あした、かいしゃ＿＿いきます。', options:['に','の','が','と'], correctAns:'に' },
  { level:'N5', section:'SOAL JFT 1', qText:'12. パーティーは　６じ＿＿はじまります。', options:['を','まで','に','で'], correctAns:'に' },
  { level:'N5', section:'SOAL JFT 1', qText:'13. としょかんで　ほんを＿＿。', options:['ききます','よみます','のみます','たべます'], correctAns:'よみます' },
  { level:'N5', section:'SOAL JFT 1', qText:'14. きのう　えいがを　＿＿。', options:['のみました','よみました','みました','かきました'], correctAns:'みました' },
  { level:'N5', section:'SOAL JFT 1', qText:'15. まいあさ　６じに　＿＿。', options:['ねます','おきます','のります','はなします'], correctAns:'おきます' },
  { level:'N5', section:'SOAL JFT 1', qText:'16. いま　ともだちと　レストランで　＿＿。', options:['はなします','はなして','はなしてます','はなしています'], correctAns:'はなしています' },
  { level:'N5', section:'SOAL JFT 1', qText:'17. でんしゃに　＿＿ください。', options:['のる','のって','のり','のっても'], correctAns:'のって' },
  { level:'N5', section:'SOAL JFT 1', qText:'18. せんせいは　いま　しょくどうで　＿＿います。', options:['たべ','たべて','たべてる','たべています'], correctAns:'たべて' },
  { level:'N5', section:'SOAL JFT 1', qText:'19. ごはんを　たべて、テレビを＿＿。', options:['みます','みて','みる','みました'], correctAns:'みました' },
  { level:'N5', section:'SOAL JFT 1', qText:'20. これは　わたし＿＿ほんです。', options:['を','に','の','が'], correctAns:'の' },
  { level:'N5', section:'SOAL JFT 1', qText:'21. これは　＿＿ですか。', options:['いくら','いくつ','なんにん','どこ'], correctAns:'いくら' },
  { level:'N5', section:'SOAL JFT 1', qText:'22. ＿＿にほんへいきますか。', options:['どう','なに','いつ','どこ'], correctAns:'いつ' },
  { level:'N5', section:'SOAL JFT 1', qText:'23. あの方は＿＿ですか。', options:['なに','どれ','どこ','どなた'], correctAns:'どなた' },
  { level:'N5', section:'SOAL JFT 1', qText:'24. うちで　ほんを　よみました。＿＿　えいがを　みました。', options:['それから','でも','だから','けど'], correctAns:'それから' },
  { level:'N5', section:'SOAL JFT 1', qText:'25. この　レストランは　やすいです。＿＿、おいしいです。', options:['そして','だから','けど','でも'], correctAns:'そして' },
  { level:'N5', section:'SOAL JFT 1', qText:'26. あつい＿＿、エアコンをつけます。', options:['けど','だから','それに','それで'], correctAns:'だから' },
  { level:'N5', section:'SOAL JFT 1', qText:'27. これは　にほんご＿＿ざっしです。', options:['の','に','が','と'], correctAns:'の' },
  { level:'N5', section:'SOAL JFT 1', qText:'28. すみません、コーヒーを　＿＿。', options:['ほしいです','みます','のみます','おねがいします'], correctAns:'おねがいします' },
  { level:'N5', section:'SOAL JFT 1', qText:'29. かのじょは　せんせい＿＿　はたらいて　います。', options:['の','に','として','を'], correctAns:'として' },
  { level:'N5', section:'SOAL JFT 1', qText:'30. まいにち　にほんごを　＿＿。', options:['べんきょうしまった','べんきょうして','べんきょうします','べんきょうした'], correctAns:'べんきょうします' }
];

const JFT_SOAL_2 = [
  // --- Bagian A: Kosakata bergambar (gambar dijelaskan dalam teks soal) ---
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'1. Gambar: sepasang pengantin (pria berjas & wanita bergaun putih) di depan gereja. Kata yang tepat untuk gambar ini adalah...', options:['合格（ごうかく）','結婚（けっこん）','出産（しゅっさん）'], correctAns:'結婚（けっこん）' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'2. Gambar: seseorang terkejut melihat ponselnya berbunyi/ada notifikasi masuk. Kata yang tepat untuk gambar ini adalah...', options:['見つかる（みつかる）','届く（とどく）','なくす'], correctAns:'届く（とどく）' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'3. Gambar: sebuah kotak/persegi berwarna biru polos. Kata yang tepat untuk gambar ini adalah...', options:['青（あお）','赤（あか）','緑（みどり）'], correctAns:'青（あお）' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'4. Gambar: pegawai toko menyerahkan sebuah kartu kecil kepada pembeli yang sedang memegang dompet di meja kasir. Kata yang tepat untuk gambar ini adalah...', options:['レシート','スタンプ','ポイントカード'], correctAns:'ポイントカード' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'5. Gambar: seseorang bingung membandingkan dua jenis penyedot debu dalam pikirannya. Kata yang tepat untuk gambar ini adalah...', options:['動かす（うごかす）','比べる（くらべる）','売れる（うれる）'], correctAns:'比べる（くらべる）' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'6. Gambar: sama seperti soal No.5 — seseorang bingung membandingkan dua jenis penyedot debu. Kata yang tepat untuk gambar ini adalah...', options:['動かす（うごかす）','比べる（くらべる）','売れる（うれる）'], correctAns:'比べる（くらべる）' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'7. Gambar: sebuah pemanas air listrik / termos listrik (electric pot). Kata yang tepat untuk gambar ini adalah...', options:['電子レンジ（でんしレンジ）','テレビ','ポット'], correctAns:'ポット' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'8. Gambar: seseorang membungkuk kesusahan membawa kardus yang berat. Kata yang tepat untuk gambar ini adalah...', options:['安い（やすい）','軽い（かるい）','重い（おもい）'], correctAns:'重い（おもい）' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'9. Gambar: sebuah penyedot debu (vacuum cleaner) berdiri sendiri. Kata yang tepat untuk gambar ini adalah...', options:['洗濯機（せんたくき）','掃除機（そうじき）','冷蔵庫（れいぞうこ）'], correctAns:'掃除機（そうじき）' },
  { level:'N5', section:'SOAL JFT 2 — Kosakata Bergambar', qText:'10. Gambar: koin-koin mengalir masuk ke sebuah kartu poin (point card). Kata yang tepat untuk gambar ini adalah...', options:['動かす（うごかす）','貯まる（たまる）','比べる（くらべる）'], correctAns:'貯まる（たまる）' },

  // --- Bagian B: Membaca kata bergaris bawah ---
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'11. レストランは、夜11時まで<u>営業</u>しています。', options:['だんせい','えいぎょう','じょせい'], correctAns:'えいぎょう' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'12. この店は、女性にも<u>男性</u>にも人気があります。', options:['あんない','じょせい','だんせい'], correctAns:'だんせい' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'13. レジまで<u>ご案内</u>します。', options:['あんない','じょせい','だんせい'], correctAns:'あんない' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'14. 買い物とき、<u>急</u>にお腹が痛くなりました。', options:['きゅう','いろ','くろ'], correctAns:'きゅう' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'15. このセーター、ほかの<u>色</u>ありますか？', options:['きゅう','くろ','いろ'], correctAns:'いろ' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'16. <u>店員</u>がとても親切でした。', options:['しょうひぜい','しょうひん','てんいん'], correctAns:'てんいん' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'17. このボタンを押すと、エコモードに<u>変わります</u>。', options:['うわります','かわります','すわります'], correctAns:'かわります' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'18. この掃除機、とても<u>軽い</u>ですね。', options:['かるい','くろい','おもい'], correctAns:'かるい' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'19. この<u>商品</u>の値段、消費税は入っていますか？', options:['しんせつ','しょうひん','しょうほう'], correctAns:'しょうひん' },
  { level:'N5', section:'SOAL JFT 2 — Membaca Kanji', qText:'20. <u>必要</u>な本を図書館で借りました。', options:['おかね','かかく','ひつよう'], correctAns:'ひつよう' },

  // --- Bagian C: Tata bahasa (lengkapi kalimat) ---
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'21. フードコートに傘を＿＿＿しまいました。', options:['忘れた','忘れて','忘れる'], correctAns:'忘れて' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'22. このくつ、白い＿＿＿、ありますか？', options:['の','もの','こと'], correctAns:'の' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'23. このバッグは、ちょっと＿＿＿すぎます。', options:['小さい','小さく','小さ'], correctAns:'小さ' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'24. あれ？財布がない！もしかしたら、＿＿＿かもしれません。', options:['とれた','とった','とられた'], correctAns:'とられた' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'25. この色は、＿＿＿すぎると思います。', options:['派手','派手な','派手だ'], correctAns:'派手' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'26. もしかしたら、カードをなくした＿＿＿。', options:['でしょう','かもしれません','つもりです'], correctAns:'かもしれません' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'27. デパートで財布を＿＿＿しまいました。', options:['落とす','落とした','落として'], correctAns:'落として' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'28. パソコンの修理が＿＿＿まで、3日しかかかりませんでした。', options:['終わった','終わる','終わって'], correctAns:'終わる' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'29. このポットは、シンプルだし、＿＿＿やすいです。', options:['使い','使って','使う'], correctAns:'使い' },
  { level:'N5', section:'SOAL JFT 2 — Tata Bahasa', qText:'30. 商品が＿＿＿、どのぐらいかかりますか？', options:['届くとき','届いたら','届くまで'], correctAns:'届くまで' },

  // --- Bagian D: Percakapan ---
  { level:'N5', section:'SOAL JFT 2 — Percakapan', qText:'31. 🎤：自転車がなくなったんですか。<br>🙂：はい。＿＿＿とられたかもしれません。', options:['もしかしたら','できれば','よろしければ'], correctAns:'もしかしたら' },
  { level:'N5', section:'SOAL JFT 2 — Percakapan', qText:'32. 🎤：＿＿＿？スマホがない！<br>🙂：え、どこかで落とした？', options:['あれ','さあ','ほら'], correctAns:'あれ' },
  { level:'N5', section:'SOAL JFT 2 — Percakapan', qText:'33. 🎤：「セーシバ」も「スギシタ」も、よく売れてますよ。<br>🙂：＿＿＿が使いやすいですか？', options:['どんな','どの','どっち'], correctAns:'どっち' },
  { level:'N5', section:'SOAL JFT 2 — Percakapan', qText:'34. 🎤：この電子レンジ、いいですね。これ、＿＿＿？<br>🙂：うーん、そうですね…。1000円引きはどうですか？', options:['どのぐらい溜まってますか','やすくなりますか','持ち帰りですか'], correctAns:'やすくなりますか' },
  { level:'N5', section:'SOAL JFT 2 — Percakapan', qText:'35. 🎤：どちらが使いやすいですか？<br>🙂：このモデル＿＿＿、軽いですよ。', options:['によって','のほうが','より'], correctAns:'のほうが' }
];

/* ============================================================
   JFT_SOAL_3, 4, 5, 6, 7, 8, 9 — dari 7 paket "Simulasi JFT A2" (50 soal/paket,
   struktur: 文字・語彙 15 soal, 文法 20 soal, 読解 15 soal).
   Level soal ini setara A2 (kurang lebih N4), diberi tag level:'N4'.

   CATATAN soal yang jawabannya ambigu di sumber (beberapa pilihan
   sama-sama masuk akal secara tata bahasa, tanpa konteks tambahan
   seperti gambar/angka spesifik) ditandai dengan komentar "// AMBIGU"
   di baris itu — saya pilih jawaban yang paling umum dipakai di buku
   teks, tapi ini layak dicek ulang kalau ada kunci jawaban resminya.

   CATATAN KHUSUS Paket 16 (JFT_SOAL_5): bagian 読解 di lembar kerja
   aslinya HANYA berisi 5 bacaan unik yang diulang 3x (nomor 36-40
   sama persis dengan 41-45 dan 46-50). Diikuti apa adanya sesuai
   sumber demi keutuhan paket 50 soal.
   ============================================================ */

const JFT_SOAL_3 = [
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'1. つぎのことばの よみかたを えらんでください。「学校」', options:['がっこう','がくこう','がっこ','がくこ'], correctAns:'がっこう' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'2. つぎのことばの よみかたを えらんでください。「先生」', options:['せんせ','せんせい','さんせい','せいせい'], correctAns:'せんせい' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'3. つぎのことばの よみかたを えらんでください。「電車」', options:['でんしゃ','てんしゃ','でんちゃ','てんちゃ'], correctAns:'でんしゃ' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'4. つぎのことばの よみかたを えらんでください。「食べる」', options:['のべる','たべる','まべる','かべる'], correctAns:'たべる' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'5. つぎのことばの よみかたを えらんでください。「飲み物」', options:['のみもの','いみもの','よみもの','ぬみもの'], correctAns:'のみもの' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'6. （　）に なにを いれますか。まいあさ コーヒーを（　）ます。', options:['のみ','たべ','みせ','あそび'], correctAns:'のみ' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'7. （　）に なにを いれますか。えきまで あるいて（　）ふんかかります。', options:['じゅう','よん','に','さん'], correctAns:'じゅう' }, // AMBIGU: semua pilihan angka valid tanpa konteks tambahan
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'8. つぎのことばの よみかたを えらんでください。「病院」', options:['びょういん','びょうえん','べいいん','べいえん'], correctAns:'びょういん' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'9. （　）に なにを いれますか。きのう ともだちと（　）へ いきました。', options:['えいが','えいが','えいか','えいが'], correctAns:'えいが' }, // catatan: 3 pilihan sama persis di lembar asli, 1 pilihan (えいか) typo/salah
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'10. つぎのことばの よみかたを えらんでください。「図書館」', options:['としょかん','としょがん','とじょかん','とじょがん'], correctAns:'としょかん' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'11. （　）に なにを いれますか。あした（　）が あります。', options:['しけん','しごと','しぜん','しょくじ'], correctAns:'しけん' }, // AMBIGU: beberapa pilihan lain juga masuk akal
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'12. つぎのことばの よみかたを えらんでください。「天気」', options:['てんき','てんぎ','でんき','でんぎ'], correctAns:'てんき' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'13. （　）に なにを いれますか。にほんごが すこし（　）。', options:['わかります','おきます','かきます','よみます'], correctAns:'わかります' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'14. つぎのことばの よみかたを えらんでください。「仕事」', options:['しごと','しこと','じごと','じこと'], correctAns:'しごと' },
  { level:'N4', section:'SOAL JFT 3 — Moji/Goi', qText:'15. （　）に なにを いれますか。この みせは くだものが（　）です。', options:['やすい','たかい','おおい','すくない'], correctAns:'やすい' }, // AMBIGU: tanpa konteks harga, pilihan lain juga masuk akal

  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'16. （　）に なにを いれますか。わたしは まいにち ６じ（　）おきます。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'17. （　）に なにを いれますか。とうきょう（　）おおさかまで しんかんせんで いきます。', options:['から','まで','で','に'], correctAns:'から' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'18. （　）に なにを いれますか。これは だれ（　）かばんですか。', options:['の','が','を','に'], correctAns:'の' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'19. （　）に なにを いれますか。あした あめ（　）ふるかもしれません。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'20. （　）に なにを いれますか。もっと ゆっくり はなして（　）。', options:['ください','みます','います','あります'], correctAns:'ください' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'21. （　）に なにを いれますか。てを あらって（　） たべます。', options:['から','ので','のに','けど'], correctAns:'から' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'22. （　）に なにを いれますか。この えいがは みた（　）がありません。', options:['こと','もの','ほう','とき'], correctAns:'こと' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'23. （　）に なにを いれますか。かれは にほんご（　）じょうずです。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'24. （　）に なにを いれますか。あの たてもの（　）びょういんです。', options:['が','は','を','に'], correctAns:'は' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'25. （　）に なにを いれますか。もっと べんきょうすれ（　）よかった。', options:['ば','たら','ても','なら'], correctAns:'ば' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'26. （　）に なにを いれますか。このみせで かいもの（　）できます。', options:['が','を','に','は'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'27. （　）に なにを いれますか。わたしは やきゅう（　）すきです。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'28. （　）に なにを いれますか。へやを きれい（　）してください。', options:['に','を','が','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'29. （　）に なにを いれますか。えを かく（　）が すきです。', options:['こと','もの','とき','ほう'], correctAns:'こと' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'30. （　）に なにを いれますか。あめが ふって（　） かさを もってきました。', options:['いたので','いたから','いたのに','いたけど'], correctAns:'いたので' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'31. （　）に なにを いれますか。にほんへ いった（　）、にほんごを べんきょうしました。', options:['とき','ころ','から','まえに'], correctAns:'とき' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'32. （　）に なにを いれますか。かれは しんせつ（　）、やさしいひとです。', options:['で','に','が','を'], correctAns:'で' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'33. （　）に なにを いれますか。この ほんは やさしすぎ（　）つまらない。', options:['て','で','に','が'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'34. （　）に なにを いれますか。ちかてつ（　）のって、みっつめで おります。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 3 — Bunpo', qText:'35. （　）に なにを いれますか。この もんだいは むずかし（　）、わかりません。', options:['すぎて','すぎに','すぎで','すぎが'], correctAns:'すぎて' },

  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'36. 「わたしは まいにち でんしゃで かいしゃへ いきます。でんしゃは あさ８じに のります。かいしゃは えきから あるいて５ふんです。」<br>このひとは まいにち なんで かいしゃへ いきますか。', options:['でんしゃ','バス','じてんしゃ','あるいて'], correctAns:'でんしゃ' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'37. 「スーパーは げつようびから きんようびまで あいています。どようびと にちようびは やすみです。」<br>どようびに スーパーへ いくことが できますか。', options:['はい、できます','いいえ、できません','わかりません','きいていません'], correctAns:'いいえ、できません' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'38. 「きょうは てんきが わるいです。そらが くもって います。あとで あめが ふるかもしれません。」<br>きょうの てんきは どうですか。', options:['はれています','くもっています','あめです','ゆきです'], correctAns:'くもっています' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'39. 「やまださん、きょう２じに てれびかいぎが あります。じぶんの へやで はいって ください。」<br>やまださんは どこで かいぎを しますか。', options:['じぶんの へや','かいぎしつ','ロビー','そとで'], correctAns:'じぶんの へや' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'40. 「わたしの しゅみは りょうりです。まいしゅう あたらしい りょうりを つくります。きのうは カレーを つくりました。」<br>きのう なにを つくりましたか。', options:['カレー','すし','てんぷら','うどん'], correctAns:'カレー' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'41. 「にほんごきょうしつ　ひ：もくようび　じかん：ごご６じ〜８じ　ばしょ：コミュニティセンター２かい」<br>にほんごきょうしつは なんじから はじまりますか。', options:['ごご４じ','ごご６じ','ごご８じ','ごぜん６じ'], correctAns:'ごご６じ' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'42. 「レストランに はいったら、みぎに せきが あります。まどの そばの せきに すわってください。」<br>どの せきに すわりますか。', options:['ひだりの せき','まどの そばの せき','まんなかの せき','いりぐちの そばの せき'], correctAns:'まどの そばの せき' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'43. 「このみせは まいにち あいています。ただし、ねんまつねんし（１２がつ３１にちから１がつ３にちまで）は やすみます。」<br>このみせは いつ やすみですか。', options:['まいしゅう にちようび','まいつき さいごの にちようび','１２がつ３１にちから１がつ３にちまで','まいにち あいています'], correctAns:'１２がつ３１にちから１がつ３にちまで' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'44. 「わたしは たなかです。かいしゃへは あるいて いきます。じかんは やく２０ふんです。でんしゃより やすいし、けんこうにも いいです。」<br>たなかさんが あるいて かいしゃへ いく りゆうは なんですか。', options:['ちかいから','やすくて けんこうに いいから','でんしゃが きらいだから','じかんが あるから'], correctAns:'やすくて けんこうに いいから' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'45. 「おかあさんへ　きょうは ゆうがた おそく かえります。ごはんは つくらなくて いいです。そとで たべます。」<br>このひとは きょう どこで ごはんを たべますか。', options:['いえ','がっこう','かいしゃ','そと'], correctAns:'そと' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'46. 「としょかんでは しずかに してください。けいたいでんわは マナーモードに してください。たべたり のんだりしないで ください。」<br>としょかんで してはいけないことは なんですか。', options:['ほんを よむこと','しずかに すること','たべたり のんだりすること','けいたいを もつこと'], correctAns:'たべたり のんだりすること' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'47. 「なつやすみに かぞくと うみへ いきました。こどもたちは うみで およぎました。わたしは しゃしんを とりました。とても たのしかったです。」<br>このひとは うみで なにを しましたか。', options:['およいだ','しゃしんを とった','つりを した','すなで あそんだ'], correctAns:'しゃしんを とった' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'48. 「わたしの まちに あたらしい こうえんが できました。こうえんには おおきい き が たくさん あります。こどもが あそべる ところも あります。」<br>あたらしい こうえんに あるものは なんですか。', options:['いけ','おおきい き','はな','すべりだい'], correctAns:'おおきい き' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'49. 「みなさんへ　らいしゅうの どようびに パーティーを します。じかんは ごご３じからです。ばしょは わたしのいえです。きてください。」<br>パーティーは いつですか。', options:['こんしゅうの どようび','らいしゅうの どようび','らいしゅうの にちようび','こんしゅうの にちようび'], correctAns:'らいしゅうの どようび' },
  { level:'N4', section:'SOAL JFT 3 — Dokkai', qText:'50. 「わたしは にほんに きて３ねんに なります。さいしょは にほんごが ぜんぜん わかりませんでした。でも、まいにち べんきょうして、いまは すこし はなせます。」<br>いま、このひとは にほんごが どのくらい わかりますか。', options:['ぜんぜん わからない','すこし わかる','ぜんぶ わかる','まったく はなせない'], correctAns:'すこし わかる' }
];

const JFT_SOAL_4 = [
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'1. つぎのことばの よみかたを えらんでください。「山」', options:['やま','かわ','うみ','そら'], correctAns:'やま' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'2. つぎのことばの よみかたを えらんでください。「白い」', options:['くろい','しろい','あおい','あかい'], correctAns:'しろい' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'3. （　）に なにを いれますか。まどを（　）ください。あつい です。', options:['あけて','しめて','こわして','はいって'], correctAns:'あけて' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'4. つぎのことばの よみかたを えらんでください。「午後」', options:['ごご','ごぜん','よる','あさ'], correctAns:'ごご' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'5. （　）に なにを いれますか。きのうは（　）かったので、コートを きました。', options:['さむ','あつ','たの','かな'], correctAns:'さむ' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'6. つぎのことばの よみかたを えらんでください。「赤い」', options:['しろい','あかい','くろい','きいろい'], correctAns:'あかい' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'7. （　）に なにを いれますか。えきで ともだちを（　）。', options:['まちました','あいました','みました','いきました'], correctAns:'まちました' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'8. つぎのことばの よみかたを えらんでください。「林」', options:['はやし','もり','こうえん','にわ'], correctAns:'はやし' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'9. （　）に なにを いれますか。かれは とても（　）ひとです。', options:['やさしい','かたい','つよい','よわい'], correctAns:'やさしい' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'10. つぎのことばの よみかたを えらんでください。「音楽」', options:['おんがく','おとがく','おんらく','おとらく'], correctAns:'おんがく' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'11. （　）に なにを いれますか。この ふくは（　）が わるくて かいません。', options:['いろ','かたち','ねだん','デザイン'], correctAns:'デザイン' }, // AMBIGU: いろ/ねだん juga masuk akal tergantung konteks
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'12. つぎのことばの よみかたを えらんでください。「地下鉄」', options:['ちかてつ','ちかてし','じかてつ','じかてし'], correctAns:'ちかてつ' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'13. （　）に なにを いれますか。へやを（　）したいです。', options:['そうじ','りょうり','うんどう','べんきょう'], correctAns:'そうじ' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'14. つぎのことばの よみかたを えらんでください。「花」', options:['はな','き','くさ','はっぱ'], correctAns:'はな' },
  { level:'N4', section:'SOAL JFT 4 — Moji/Goi', qText:'15. （　）に なにを いれますか。びょういんへ いって、（　）を もらいました。', options:['くすり','にく','くだもの','やさい'], correctAns:'くすり' },

  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'16. （　）に なにを いれますか。たなかさん（　）いいましたか。', options:['に','が','を','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'17. （　）に なにを いれますか。わたしは にほん（　）すんでいます。', options:['に','が','を','で'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'18. （　）に なにを いれますか。れいぞうこに たまご（　）あります。', options:['が','を','に','は'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'19. （　）に なにを いれますか。もう ちょっと まって（　）ください。', options:['いて','から','して','いる'], correctAns:'いて' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'20. （　）に なにを いれますか。きょう（　）あした（　） どちらが いいですか。', options:['と・が','か・が','も・が','に・が'], correctAns:'と・が' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'21. （　）に なにを いれますか。この みせは ９じ（　） あきます。', options:['に','が','を','で'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'22. （　）に なにを いれますか。かれは きょねん にほん（　）きました。', options:['に','が','を','で'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'23. （　）に なにを いれますか。この えいがは２じかん（　）あります。', options:['ぐらい','ほど','だけ','ばかり'], correctAns:'ぐらい' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'24. （　）に なにを いれますか。にほんごが はなせ（　）、べんきょうします。', options:['るように','るので','るから','るのに'], correctAns:'るように' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'25. （　）に なにを いれますか。この しごとは３にん（　）できません。', options:['でないと','がないと','でないか','ではないと'], correctAns:'でないと' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'26. （　）に なにを いれますか。かぜ（　）ひきました。', options:['を','が','に','で'], correctAns:'を' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'27. （　）に なにを いれますか。にほん（　）きて２ねんに なります。', options:['に','が','へ','で'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'28. （　）に なにを いれますか。もっと はやく おき（　）よかった。', options:['れば','たら','ても','ならば'], correctAns:'れば' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'29. （　）に なにを いれますか。あのひと（　）だれですか。', options:['は','が','を','に'], correctAns:'は' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'30. （　）に なにを いれますか。つくえの うえ（　）ほんが あります。', options:['に','が','を','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'31. （　）に なにを いれますか。にほんりょうり（　）つくりかたを おしえてください。', options:['の','が','を','に'], correctAns:'の' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'32. （　）に なにを いれますか。かれは まだ わかい（　）、しっかりして います。', options:['のに','ので','けど','から'], correctAns:'のに' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'33. （　）に なにを いれますか。えいごで はな（　）ことが できますか。', options:['す','す','せ','し'], correctAns:'す' }, // catatan: 2 pilihan sama persis "す" di lembar asli
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'34. （　）に なにを いれますか。バス（　）のって、３つめで おります。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 4 — Bunpo', qText:'35. （　）に なにを いれますか。きょうは ねつ（　）あって、がっこうを やすみました。', options:['が','を','に','で'], correctAns:'が' },

  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'36. 「わたしは サッカーが すきです。こどものときから サッカーを して います。いま まいしゅう どようびに チームで れんしゅうします。」<br>このひとは いつ れんしゅうしますか。', options:['まいにち','まいしゅう もくようび','まいしゅう どようび','まいしゅう にちようび'], correctAns:'まいしゅう どようび' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'37. 「きゅうじつのおしらせ　こんど のはちがつみっかはっぴゃくのこうじのため このどうろを おつかいになれません。うえのどうろをおつかいください。」<br>なにが あるために どうろが つかえませんか。', options:['じしん','こうじ','じこ','てんき'], correctAns:'こうじ' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'38. 「わたしの かいしゃでは まいとし はる と あきに しゃいん りょこうが あります。ことしの はるは きょうとへ いきました。」<br>ことしの はるの りょこうは どこでしたか。', options:['とうきょう','おおさか','きょうと','なら'], correctAns:'きょうと' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'39. 「やまもとさんへ　すみません、きょうの ランチは いけません。あしたは どうですか。１２じに あのカフェは どうですか。 さくらより」<br>さくらさんは あした なんじに あいたいですか。', options:['11じ','12じ','１じ','２じ'], correctAns:'12じ' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'40. 「このプールは まいにち あさ７じから よる10じまで あいています。ただし げつようびは そうじのため やすみます。」<br>げつようびに プールへ いけますか。', options:['はい、７じから','はい、10じから','いいえ、やすみです','いいえ、10じまで'], correctAns:'いいえ、やすみです' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'41. 「きのう いもうとの たんじょうびでした。わたしは ケーキを かいました。かぞくみんなで たべました。いもうとは とても よろこんで いました。」<br>だれの たんじょうびでしたか。', options:['わたし','おかあさん','いもうと','おとうと'], correctAns:'いもうと' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'42. 「このレストランは ランチと ディナーが あります。ランチは11じ30ぷんから２じまで、ディナーは６じから10じまでです。」<br>ランチを たべられる じかんは いつですか。', options:['10じから２じ','11じ30ぷんから２じ','６じから10じ','24じかん'], correctAns:'11じ30ぷんから２じ' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'43. 「わたしは にほんに きて まず げんごがっこうで にほんごを べんきょうしました。それから だいがくに はいりました。いま さんねんせいです。」<br>いま、このひとは どこに いますか。', options:['げんごがっこう','だいがく','かいしゃ','としょかん'], correctAns:'だいがく' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'44. 「わたしのまちでは まいとし なつに おまつりが あります。ことしは8がつ15にちに あります。やきそばや たこやきなど たくさんの たべものが あります。」<br>おまつりは いつですか。', options:['7がつ15にち','8がつ5にち','8がつ15にち','9がつ15にち'], correctAns:'8がつ15にち' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'45. 「けんじさんへ　ひさしぶりです。おげんきですか。らいげつ にほんへ いきます。１しゅうかん にほんに います。ぜひ あいたいです。 マリアより」<br>マリアさんは にほんに なんにちかん いますか。', options:['３にちかん','５にちかん','１しゅうかん','２しゅうかん'], correctAns:'１しゅうかん' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'46. 「このくすりは しょくじの あとで のんでください。ねむくなる ことが あるので、くるまを うんてんするときは きをつけてください。」<br>このくすりを のんだあと、きをつけなければ ならないことは なんですか。', options:['しょくじをすること','うんどうすること','くるまをうんてんすること','ねること'], correctAns:'くるまをうんてんすること' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'47. 「としょかん へんきゃくのおねがい　ほんの かしだし きかんは２しゅうかんです。おそくなる ばあいは、れんらくして ください。えんちょうは１かいだけ できます。」<br>ほんを かりた ばあい、えんちょうは なんかいできますか。', options:['０かい','１かい','２かい','３かい'], correctAns:'１かい' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'48. 「わたしは にほんごを べんきょうしています。きいたり よんだりは できますが、かくのが まだ むずかしいです。」<br>このひとに むずかしいのは なんですか。', options:['きくこと','よむこと','かくこと','はなすこと'], correctAns:'かくこと' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'49. 「わたしの かいしゃは とうきょうに あります。でも らいねんから おおさかに うつります。わたしも おおさかへ いかなければ なりません。」<br>このひとは らいねんから どこに すみますか。', options:['とうきょう','おおさか','なごや','きょうと'], correctAns:'おおさか' },
  { level:'N4', section:'SOAL JFT 4 — Dokkai', qText:'50. 「にほんでは スーパーの ふくろは ゆうりょうです。かいものに いく ときは マイバッグを もっていくと べんりです。」<br>にほんで スーパーの ふくろは どうですか。', options:['むりょうです','ゆうりょうです','もらえます','かくれています'], correctAns:'ゆうりょうです' }
];

const JFT_SOAL_5 = [
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'1. つぎのことばの よみかたを えらんでください。「写真」', options:['しゃしん','しゃいん','しゃほん','しゃとん'], correctAns:'しゃしん' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'2. つぎのことばの よみかたを えらんでください。「家族」', options:['かぞく','かそく','いえぞく','いえそく'], correctAns:'かぞく' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'3. つぎのことばの よみかたを えらんでください。「旅行」', options:['りょこう','たびこう','りょかん','たびかん'], correctAns:'りょこう' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'4. つぎのことばの よみかたを えらんでください。「温泉」', options:['おんせん','あつせん','おんえん','あつえん'], correctAns:'おんせん' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'5. つぎのことばの よみかたを えらんでください。「空気」', options:['くうき','そらき','くき','そらけ'], correctAns:'くうき' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'6. つぎのことばの よみかたを えらんでください。「海外」', options:['かいがい','うみがい','かいそと','うみそと'], correctAns:'かいがい' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'7. つぎのことばの よみかたを えらんでください。「朝食」', options:['ちょうしょく','あさしょく','ちょうしき','あさしき'], correctAns:'ちょうしょく' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'8. つぎのことばの よみかたを えらんでください。「昼食」', options:['ちゅうしょく','ひるしょく','ちゅうしき','ひるしき'], correctAns:'ちゅうしょく' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'9. つぎのことばの よみかたを えらんでください。「夕食」', options:['ゆうしょく','よるしょく','ゆうしき','よるしき'], correctAns:'ゆうしょく' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'10. つぎのことばの よみかたを えらんでください。「病気」', options:['びょうき','びょうけ','やまいき','やまいけ'], correctAns:'びょうき' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'11. つぎのことばの よみかたを えらんでください。「薬」', options:['くすり','くすれ','やく','やくり'], correctAns:'くすり' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'12. つぎのことばの よみかたを えらんでください。「医者」', options:['いしゃ','いじゃ','いしゃい','いじゃい'], correctAns:'いしゃ' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'13. つぎのことばの よみかたを えらんでください。「看護師」', options:['かんごし','かんごじ','かんごさ','かんござ'], correctAns:'かんごし' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'14. つぎのことばの よみかたを えらんでください。「郵便局」', options:['ゆうびんきょく','ゆうびんく','ゆびんきょく','ゆびんく'], correctAns:'ゆうびんきょく' },
  { level:'N4', section:'SOAL JFT 5 — Moji/Goi', qText:'15. つぎのことばの よみかたを えらんでください。「交番」', options:['こうばん','こうはん','こばん','こはん'], correctAns:'こうばん' },

  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'16. （　）に なにを いれますか。この バスは 駅（　）通ります。', options:['を','で','に','が'], correctAns:'を' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'17. （　）に なにを いれますか。毎日 自転車（　）会社へ 行きます。', options:['で','を','に','が'], correctAns:'で' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'18. （　）に なにを いれますか。ここ（　）たばこを 吸わないでください。', options:['では','には','でが','にが'], correctAns:'では' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'19. （　）に なにを いれますか。彼に 電話（　）みましたが、出ませんでした。', options:['して','に','で','を'], correctAns:'して' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'20. （　）に なにを いれますか。子供が 庭で 遊んで（　）。', options:['います','あります','できます','なります'], correctAns:'います' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'21. （　）に なにを いれますか。電車（　）乗って、3つ目で降ります。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'22. （　）に なにを いれますか。もっと ゆっくり 話して（　）。', options:['ください','います','あります','なります'], correctAns:'ください' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'23. （　）に なにを いれますか。ここ（　）入らないでください。', options:['に','を','が','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'24. （　）に なにを いれますか。もし 雨（　）ふったら、中止です。', options:['が','に','を','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'25. （　）に なにを いれますか。彼女は 歌（　）上手です。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'26. （　）に なにを いれますか。この 映画は 見た（　）があります。', options:['こと','もの','ほう','とき'], correctAns:'こと' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'27. （　）に なにを いれますか。駅まで 歩いて（　）分かかります。', options:['十','五','三','二'], correctAns:'五' }, // AMBIGU: semua pilihan angka valid tanpa konteks tambahan
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'28. （　）に なにを いれますか。明日（　）晴れれば、ピクニックに 行きます。', options:['が','に','で','を'], correctAns:'が' }, // AMBIGU: pola ini biasanya tanpa partikel; "が" dipilih sbg yg paling mendekati
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'29. （　）に なにを いれますか。この 問題は 難しすぎ（　）わかりません。', options:['て','に','で','が'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'30. （　）に なにを いれますか。彼は まだ 来て（　）。', options:['いません','あります','なります','できます'], correctAns:'いません' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'31. （　）に なにを いれますか。ご飯を 食べてから（　）出かけます。', options:['、','で','に','が'], correctAns:'、' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'32. （　）に なにを いれますか。もっと 早く 来れ（　）、間に合いました。', options:['ば','たら','ても','なら'], correctAns:'ば' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'33. （　）に なにを いれますか。日本語が 話せる（　）に なりたいです。', options:['よう','こと','もの','ほう'], correctAns:'よう' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'34. （　）に なにを いれますか。宿題を し（　）から、遊びます。', options:['て','た','で','に'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 5 — Bunpo', qText:'35. （　）に なにを いれますか。部屋を きれい（　）してください。', options:['に','が','を','は'], correctAns:'に' },

  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'36. 「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'37. 「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'38. 「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'39. 「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'40. 「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'41. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'42. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'43. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'44. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'45. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'46. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'47. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'48. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'49. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 5 — Dokkai', qText:'50. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' }
];

const JFT_SOAL_6 = [
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'1. つぎのことばの よみかたを えらんでください。「家族」', options:['かぞく','かそく','いえぞく','いえそく'], correctAns:'かぞく' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'2. つぎのことばの よみかたを えらんでください。「旅行」', options:['りょこう','たびこう','りょかん','たびかん'], correctAns:'りょこう' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'3. つぎのことばの よみかたを えらんでください。「温泉」', options:['おんせん','あつせん','おんえん','あつえん'], correctAns:'おんせん' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'4. つぎのことばの よみかたを えらんでください。「空気」', options:['くうき','そらき','くき','そらけ'], correctAns:'くうき' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'5. つぎのことばの よみかたを えらんでください。「海外」', options:['かいがい','うみがい','かいそと','うみそと'], correctAns:'かいがい' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'6. つぎのことばの よみかたを えらんでください。「朝食」', options:['ちょうしょく','あさしょく','ちょうしき','あさしき'], correctAns:'ちょうしょく' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'7. つぎのことばの よみかたを えらんでください。「昼食」', options:['ちゅうしょく','ひるしょく','ちゅうしき','ひるしき'], correctAns:'ちゅうしょく' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'8. つぎのことばの よみかたを えらんでください。「夕食」', options:['ゆうしょく','よるしょく','ゆうしき','よるしき'], correctAns:'ゆうしょく' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'9. つぎのことばの よみかたを えらんでください。「病気」', options:['びょうき','びょうけ','やまいき','やまいけ'], correctAns:'びょうき' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'10. つぎのことばの よみかたを えらんでください。「薬」', options:['くすり','くすれ','やく','やくり'], correctAns:'くすり' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'11. つぎのことばの よみかたを えらんでください。「医者」', options:['いしゃ','いじゃ','いしゃい','いじゃい'], correctAns:'いしゃ' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'12. つぎのことばの よみかたを えらんでください。「看護師」', options:['かんごし','かんごじ','かんごさ','かんござ'], correctAns:'かんごし' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'13. つぎのことばの よみかたを えらんでください。「郵便局」', options:['ゆうびんきょく','ゆうびんく','ゆびんきょく','ゆびんく'], correctAns:'ゆうびんきょく' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'14. つぎのことばの よみかたを えらんでください。「交番」', options:['こうばん','こうはん','こばん','こはん'], correctAns:'こうばん' },
  { level:'N4', section:'SOAL JFT 6 — Moji/Goi', qText:'15. つぎのことばの よみかたを えらんでください。「消防署」', options:['しょうぼうしょ','しょうぼうじょ','しょぼうしょ','しょぼうじょ'], correctAns:'しょうぼうしょ' },

  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'16. （　）に なにを いれますか。毎日 自転車（　）会社へ 行きます。', options:['で','を','に','が'], correctAns:'で' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'17. （　）に なにを いれますか。ここ（　）たばこを 吸わないでください。', options:['では','には','でが','にが'], correctAns:'では' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'18. （　）に なにを いれますか。彼に 電話（　）みましたが、出ませんでした。', options:['して','に','で','を'], correctAns:'して' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'19. （　）に なにを いれますか。子供が 庭で 遊んで（　）。', options:['います','あります','できます','なります'], correctAns:'います' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'20. （　）に なにを いれますか。電車（　）乗って、3つ目で降ります。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'21. （　）に なにを いれますか。もっと ゆっくり 話して（　）。', options:['ください','います','あります','なります'], correctAns:'ください' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'22. （　）に なにを いれますか。ここ（　）入らないでください。', options:['に','を','が','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'23. （　）に なにを いれますか。もし 雨（　）ふったら、中止です。', options:['が','に','を','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'24. （　）に なにを いれますか。彼女は 歌（　）上手です。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'25. （　）に なにを いれますか。この 映画は 見た（　）があります。', options:['こと','もの','ほう','とき'], correctAns:'こと' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'26. （　）に なにを いれますか。駅まで 歩いて（　）分かかります。', options:['十','五','三','二'], correctAns:'五' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'27. （　）に なにを いれますか。明日（　）晴れれば、ピクニックに 行きます。', options:['が','に','で','を'], correctAns:'が' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'28. （　）に なにを いれますか。この 問題は 難しすぎ（　）わかりません。', options:['て','に','で','が'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'29. （　）に なにを いれますか。彼は まだ 来て（　）。', options:['いません','あります','なります','できます'], correctAns:'いません' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'30. （　）に なにを いれますか。ご飯を 食べてから（　）出かけます。', options:['、','で','に','が'], correctAns:'、' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'31. （　）に なにを いれますか。もっと 早く 来れ（　）、間に合いました。', options:['ば','たら','ても','なら'], correctAns:'ば' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'32. （　）に なにを いれますか。日本語が 話せる（　）に なりたいです。', options:['よう','こと','もの','ほう'], correctAns:'よう' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'33. （　）に なにを いれますか。宿題を し（　）から、遊びます。', options:['て','た','で','に'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'34. （　）に なにを いれますか。部屋を きれい（　）してください。', options:['に','が','を','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 6 — Bunpo', qText:'35. （　）に なにを いれますか。この バスは 駅（　）通ります。', options:['を','で','に','が'], correctAns:'を' },

  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'36. 「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'37. 「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'38. 「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'39. 「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'40. 「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'41. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'42. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'43. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'44. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'45. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'46. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'47. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'48. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'49. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 6 — Dokkai', qText:'50. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' }
];

const JFT_SOAL_7 = [
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'1. つぎのことばの よみかたを えらんでください。「旅行」', options:['りょこう','たびこう','りょかん','たびかん'], correctAns:'りょこう' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'2. つぎのことばの よみかたを えらんでください。「温泉」', options:['おんせん','あつせん','おんえん','あつえん'], correctAns:'おんせん' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'3. つぎのことばの よみかたを えらんでください。「空気」', options:['くうき','そらき','くき','そらけ'], correctAns:'くうき' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'4. つぎのことばの よみかたを えらんでください。「海外」', options:['かいがい','うみがい','かいそと','うみそと'], correctAns:'かいがい' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'5. つぎのことばの よみかたを えらんでください。「朝食」', options:['ちょうしょく','あさしょく','ちょうしき','あさしき'], correctAns:'ちょうしょく' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'6. つぎのことばの よみかたを えらんでください。「昼食」', options:['ちゅうしょく','ひるしょく','ちゅうしき','ひるしき'], correctAns:'ちゅうしょく' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'7. つぎのことばの よみかたを えらんでください。「夕食」', options:['ゆうしょく','よるしょく','ゆうしき','よるしき'], correctAns:'ゆうしょく' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'8. つぎのことばの よみかたを えらんでください。「病気」', options:['びょうき','びょうけ','やまいき','やまいけ'], correctAns:'びょうき' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'9. つぎのことばの よみかたを えらんでください。「薬」', options:['くすり','くすれ','やく','やくり'], correctAns:'くすり' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'10. つぎのことばの よみかたを えらんでください。「医者」', options:['いしゃ','いじゃ','いしゃい','いじゃい'], correctAns:'いしゃ' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'11. つぎのことばの よみかたを えらんでください。「看護師」', options:['かんごし','かんごじ','かんごさ','かんござ'], correctAns:'かんごし' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'12. つぎのことばの よみかたを えらんでください。「郵便局」', options:['ゆうびんきょく','ゆうびんく','ゆびんきょく','ゆびんく'], correctAns:'ゆうびんきょく' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'13. つぎのことばの よみかたを えらんでください。「交番」', options:['こうばん','こうはん','こばん','こはん'], correctAns:'こうばん' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'14. つぎのことばの よみかたを えらんでください。「消防署」', options:['しょうぼうしょ','しょうぼうじょ','しょぼうしょ','しょぼうじょ'], correctAns:'しょうぼうしょ' },
  { level:'N4', section:'SOAL JFT 7 — Moji/Goi', qText:'15. つぎのことばの よみかたを えらんでください。「花見」', options:['はなみ','かみ','はなけ','かじ'], correctAns:'はなみ' },

  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'16. （　）に なにを いれますか。ここ（　）たばこを 吸わないでください。', options:['では','には','でが','にが'], correctAns:'では' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'17. （　）に なにを いれますか。彼に 電話（　）みましたが、出ませんでした。', options:['して','に','で','を'], correctAns:'して' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'18. （　）に なにを いれますか。子供が 庭で 遊んで（　）。', options:['います','あります','できます','なります'], correctAns:'います' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'19. （　）に なにを いれますか。電車（　）乗って、3つ目で降ります。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'20. （　）に なにを いれますか。もっと ゆっくり 話して（　）。', options:['ください','います','あります','なります'], correctAns:'ください' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'21. （　）に なにを いれますか。ここ（　）入らないでください。', options:['に','を','が','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'22. （　）に なにを いれますか。もし 雨（　）ふったら、中止です。', options:['が','に','を','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'23. （　）に なにを いれますか。彼女は 歌（　）上手です。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'24. （　）に なにを いれますか。この 映画は 見た（　）があります。', options:['こと','もの','ほう','とき'], correctAns:'こと' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'25. （　）に なにを いれますか。駅まで 歩いて（　）分かかります。', options:['十','五','三','二'], correctAns:'五' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'26. （　）に なにを いれますか。明日（　）晴れれば、ピクニックに 行きます。', options:['が','に','で','を'], correctAns:'が' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'27. （　）に なにを いれますか。この 問題は 難しすぎ（　）わかりません。', options:['て','に','で','が'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'28. （　）に なにを いれますか。彼は まだ 来て（　）。', options:['いません','あります','なります','できます'], correctAns:'いません' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'29. （　）に なにを いれますか。ご飯を 食べてから（　）出かけます。', options:['、','で','に','が'], correctAns:'、' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'30. （　）に なにを いれますか。もっと 早く 来れ（　）、間に合いました。', options:['ば','たら','ても','なら'], correctAns:'ば' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'31. （　）に なにを いれますか。日本語が 話せる（　）に なりたいです。', options:['よう','こと','もの','ほう'], correctAns:'よう' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'32. （　）に なにを いれますか。宿題を し（　）から、遊びます。', options:['て','た','で','に'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'33. （　）に なにを いれますか。部屋を きれい（　）してください。', options:['に','が','を','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'34. （　）に なにを いれますか。この バスは 駅（　）通ります。', options:['を','で','に','が'], correctAns:'を' },
  { level:'N4', section:'SOAL JFT 7 — Bunpo', qText:'35. （　）に なにを いれますか。毎日 自転車（　）会社へ 行きます。', options:['で','を','に','が'], correctAns:'で' },

  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'36. 「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'37. 「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'38. 「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'39. 「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'40. 「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'41. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'42. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'43. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'44. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'45. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'46. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'47. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'48. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'49. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 7 — Dokkai', qText:'50. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' }
];

const JFT_SOAL_8 = [
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'1. つぎのことばの よみかたを えらんでください。「温泉」', options:['おんせん','あつせん','おんえん','あつえん'], correctAns:'おんせん' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'2. つぎのことばの よみかたを えらんでください。「空気」', options:['くうき','そらき','くき','そらけ'], correctAns:'くうき' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'3. つぎのことばの よみかたを えらんでください。「海外」', options:['かいがい','うみがい','かいそと','うみそと'], correctAns:'かいがい' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'4. つぎのことばの よみかたを えらんでください。「朝食」', options:['ちょうしょく','あさしょく','ちょうしき','あさしき'], correctAns:'ちょうしょく' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'5. つぎのことばの よみかたを えらんでください。「昼食」', options:['ちゅうしょく','ひるしょく','ちゅうしき','ひるしき'], correctAns:'ちゅうしょく' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'6. つぎのことばの よみかたを えらんでください。「夕食」', options:['ゆうしょく','よるしょく','ゆうしき','よるしき'], correctAns:'ゆうしょく' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'7. つぎのことばの よみかたを えらんでください。「病気」', options:['びょうき','びょうけ','やまいき','やまいけ'], correctAns:'びょうき' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'8. つぎのことばの よみかたを えらんでください。「薬」', options:['くすり','くすれ','やく','やくり'], correctAns:'くすり' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'9. つぎのことばの よみかたを えらんでください。「医者」', options:['いしゃ','いじゃ','いしゃい','いじゃい'], correctAns:'いしゃ' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'10. つぎのことばの よみかたを えらんでください。「看護師」', options:['かんごし','かんごじ','かんごさ','かんござ'], correctAns:'かんごし' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'11. つぎのことばの よみかたを えらんでください。「郵便局」', options:['ゆうびんきょく','ゆうびんく','ゆびんきょく','ゆびんく'], correctAns:'ゆうびんきょく' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'12. つぎのことばの よみかたを えらんでください。「交番」', options:['こうばん','こうはん','こばん','こはん'], correctAns:'こうばん' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'13. つぎのことばの よみかたを えらんでください。「消防署」', options:['しょうぼうしょ','しょうぼうじょ','しょぼうしょ','しょぼうじょ'], correctAns:'しょうぼうしょ' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'14. つぎのことばの よみかたを えらんでください。「花見」', options:['はなみ','かみ','はなけ','かじ'], correctAns:'はなみ' },
  { level:'N4', section:'SOAL JFT 8 — Moji/Goi', qText:'15. つぎのことばの よみかたを えらんでください。「雨」', options:['あめ','ゆき','くも','かぜ'], correctAns:'あめ' },

  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'16. （　）に なにを いれますか。彼に 電話（　）みましたが、出ませんでした。', options:['して','に','で','を'], correctAns:'して' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'17. （　）に なにを いれますか。子供が 庭で 遊んで（　）。', options:['います','あります','できます','なります'], correctAns:'います' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'18. （　）に なにを いれますか。電車（　）乗って、3つ目で降ります。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'19. （　）に なにを いれますか。もっと ゆっくり 話して（　）。', options:['ください','います','あります','なります'], correctAns:'ください' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'20. （　）に なにを いれますか。ここ（　）入らないでください。', options:['に','を','が','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'21. （　）に なにを いれますか。もし 雨（　）ふったら、中止です。', options:['が','に','を','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'22. （　）に なにを いれますか。彼女は 歌（　）上手です。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'23. （　）に なにを いれますか。この 映画は 見た（　）があります。', options:['こと','もの','ほう','とき'], correctAns:'こと' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'24. （　）に なにを いれますか。駅まで 歩いて（　）分かかります。', options:['十','五','三','二'], correctAns:'五' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'25. （　）に なにを いれますか。明日（　）晴れれば、ピクニックに 行きます。', options:['が','に','で','を'], correctAns:'が' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'26. （　）に なにを いれますか。この 問題は 難しすぎ（　）わかりません。', options:['て','に','で','が'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'27. （　）に なにを いれますか。彼は まだ 来て（　）。', options:['いません','あります','なります','できます'], correctAns:'いません' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'28. （　）に なにを いれますか。ご飯を 食べてから（　）出かけます。', options:['、','で','に','が'], correctAns:'、' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'29. （　）に なにを いれますか。もっと 早く 来れ（　）、間に合いました。', options:['ば','たら','ても','なら'], correctAns:'ば' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'30. （　）に なにを いれますか。日本語が 話せる（　）に なりたいです。', options:['よう','こと','もの','ほう'], correctAns:'よう' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'31. （　）に なにを いれますか。宿題を し（　）から、遊びます。', options:['て','た','で','に'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'32. （　）に なにを いれますか。部屋を きれい（　）してください。', options:['に','が','を','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'33. （　）に なにを いれますか。この バスは 駅（　）通ります。', options:['を','で','に','が'], correctAns:'を' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'34. （　）に なにを いれますか。毎日 自転車（　）会社へ 行きます。', options:['で','を','に','が'], correctAns:'で' },
  { level:'N4', section:'SOAL JFT 8 — Bunpo', qText:'35. （　）に なにを いれますか。ここ（　）たばこを 吸わないでください。', options:['では','には','でが','にが'], correctAns:'では' },

  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'36. 「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'37. 「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'38. 「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'39. 「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'40. 「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'41. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'42. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'43. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'44. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'45. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'46. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'47. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'48. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'49. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 8 — Dokkai', qText:'50. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' }
];

const JFT_SOAL_9 = [
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'1. つぎのことばの よみかたを えらんでください。「空気」', options:['くうき','そらき','くき','そらけ'], correctAns:'くうき' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'2. つぎのことばの よみかたを えらんでください。「海外」', options:['かいがい','うみがい','かいそと','うみそと'], correctAns:'かいがい' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'3. つぎのことばの よみかたを えらんでください。「朝食」', options:['ちょうしょく','あさしょく','ちょうしき','あさしき'], correctAns:'ちょうしょく' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'4. つぎのことばの よみかたを えらんでください。「昼食」', options:['ちゅうしょく','ひるしょく','ちゅうしき','ひるしき'], correctAns:'ちゅうしょく' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'5. つぎのことばの よみかたを えらんでください。「夕食」', options:['ゆうしょく','よるしょく','ゆうしき','よるしき'], correctAns:'ゆうしょく' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'6. つぎのことばの よみかたを えらんでください。「病気」', options:['びょうき','びょうけ','やまいき','やまいけ'], correctAns:'びょうき' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'7. つぎのことばの よみかたを えらんでください。「薬」', options:['くすり','くすれ','やく','やくり'], correctAns:'くすり' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'8. つぎのことばの よみかたを えらんでください。「医者」', options:['いしゃ','いじゃ','いしゃい','いじゃい'], correctAns:'いしゃ' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'9. つぎのことばの よみかたを えらんでください。「看護師」', options:['かんごし','かんごじ','かんごさ','かんござ'], correctAns:'かんごし' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'10. つぎのことばの よみかたを えらんでください。「郵便局」', options:['ゆうびんきょく','ゆうびんく','ゆびんきょく','ゆびんく'], correctAns:'ゆうびんきょく' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'11. つぎのことばの よみかたを えらんでください。「交番」', options:['こうばん','こうはん','こばん','こはん'], correctAns:'こうばん' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'12. つぎのことばの よみかたを えらんでください。「消防署」', options:['しょうぼうしょ','しょうぼうじょ','しょぼうしょ','しょぼうじょ'], correctAns:'しょうぼうしょ' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'13. つぎのことばの よみかたを えらんでください。「花見」', options:['はなみ','かみ','はなけ','かじ'], correctAns:'はなみ' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'14. つぎのことばの よみかたを えらんでください。「雨」', options:['あめ','ゆき','くも','かぜ'], correctAns:'あめ' },
  { level:'N4', section:'SOAL JFT 9 — Moji/Goi', qText:'15. つぎのことばの よみかたを えらんでください。「本屋」', options:['ほんや','ほんて','もとや','もとて'], correctAns:'ほんや' },

  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'16. （　）に なにを いれますか。子供が 庭で 遊んで（　）。', options:['います','あります','できます','なります'], correctAns:'います' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'17. （　）に なにを いれますか。電車（　）乗って、3つ目で降ります。', options:['に','で','を','が'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'18. （　）に なにを いれますか。もっと ゆっくり 話して（　）。', options:['ください','います','あります','なります'], correctAns:'ください' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'19. （　）に なにを いれますか。ここ（　）入らないでください。', options:['に','を','が','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'20. （　）に なにを いれますか。もし 雨（　）ふったら、中止です。', options:['が','に','を','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'21. （　）に なにを いれますか。彼女は 歌（　）上手です。', options:['が','を','に','で'], correctAns:'が' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'22. （　）に なにを いれますか。この 映画は 見た（　）があります。', options:['こと','もの','ほう','とき'], correctAns:'こと' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'23. （　）に なにを いれますか。駅まで 歩いて（　）分かかります。', options:['十','五','三','二'], correctAns:'五' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'24. （　）に なにを いれますか。明日（　）晴れれば、ピクニックに 行きます。', options:['が','に','で','を'], correctAns:'が' }, // AMBIGU: semua pilihan valid tanpa konteks tambahan lain di lembar asli
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'25. （　）に なにを いれますか。この 問題は 難しすぎ（　）わかりません。', options:['て','に','で','が'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'26. （　）に なにを いれますか。彼は まだ 来て（　）。', options:['いません','あります','なります','できます'], correctAns:'いません' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'27. （　）に なにを いれますか。ご飯を 食べてから（　）出かけます。', options:['、','で','に','が'], correctAns:'、' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'28. （　）に なにを いれますか。もっと 早く 来れ（　）、間に合いました。', options:['ば','たら','ても','なら'], correctAns:'ば' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'29. （　）に なにを いれますか。日本語が 話せる（　）に なりたいです。', options:['よう','こと','もの','ほう'], correctAns:'よう' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'30. （　）に なにを いれますか。宿題を し（　）から、遊びます。', options:['て','た','で','に'], correctAns:'て' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'31. （　）に なにを いれますか。部屋を きれい（　）してください。', options:['に','が','を','は'], correctAns:'に' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'32. （　）に なにを いれますか。この バスは 駅（　）通ります。', options:['を','で','に','が'], correctAns:'を' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'33. （　）に なにを いれますか。毎日 自転車（　）会社へ 行きます。', options:['で','を','に','が'], correctAns:'で' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'34. （　）に なにを いれますか。ここ（　）たばこを 吸わないでください。', options:['では','には','でが','にが'], correctAns:'では' },
  { level:'N4', section:'SOAL JFT 9 — Bunpo', qText:'35. （　）に なにを いれますか。彼に 電話（　）みましたが、出ませんでした。', options:['して','に','で','を'], correctAns:'して' },

  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'36. 「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'37. 「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'38. 「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'39. 「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'40. 「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'41. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'42. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'43. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'44. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'45. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'46. （同じ文章の再掲）「このくすりは 食後に 2錠 飲んでください。1日3回まで。」<br>このくすりは 1日 最大 何錠 飲めますか。', options:['2錠','4錠','6錠','8錠'], correctAns:'6錠' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'47. （同じ文章の再掲）「わたしの 趣味は 料理です。特に 和食が 好きで、毎週 新しい 料理を 作ります。」<br>この人の 趣味は 何ですか。', options:['料理','音楽','スポーツ','旅行'], correctAns:'料理' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'48. （同じ文章の再掲）「このスーパーは 月曜から 土曜まで 開いています。日曜日は 休みです。」<br>このスーパーは いつ 休みですか。', options:['月曜','土曜','日曜','毎日'], correctAns:'日曜' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'49. （同じ文章の再掲）「駅から 徒歩5分の ところに コンビニが あります。24時間 営業です。」<br>このコンビニは いつ 開いていますか。', options:['朝だけ','昼だけ','夜だけ','24時間'], correctAns:'24時間' },
  { level:'N4', section:'SOAL JFT 9 — Dokkai', qText:'50. （同じ文章の再掲）「パーティーは 土曜日の 午後3時から 始まります。場所は 市民ホールです。」<br>パーティーは どこで ありますか。', options:['学校','市民ホール','公園','駅前'], correctAns:'市民ホール' }
];
