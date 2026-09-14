/* ============================================================
   JFT-SOAL.JS — Data soal untuk mode "Tryout JFT" (paket soal TETAP,
   TIDAK diacak & TIDAK dipisah/dibagi paket — ditampilkan sebagai
   1 set utuh persis seperti lembar kerja aslinya).

   Sumber: 2 lembar kerja latihan JFT dari Wayground/Quizizz.
   - JFT_SOAL_1  <- "JFT New 1"            (30 soal, tata bahasa dasar N5)
   - JFT_SOAL_2  <- "LATIHAN SOAL JFT 24"   (35 dari 40 soal asli)

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
  { level:'N5', section:'JFT New 1', qText:'1. わたし＿＿アミンです。', options:['に','の','は','を'], correctAns:'は' },
  { level:'N5', section:'JFT New 1', qText:'2. にちようび＿＿ともだちとあそびました。', options:['に','へ','で','を'], correctAns:'に' },
  { level:'N5', section:'JFT New 1', qText:'3. バス＿＿がっこうへいきます。', options:['に','で','を','へ'], correctAns:'で' },
  { level:'N5', section:'JFT New 1', qText:'4. にほんご＿＿べんきょうします。', options:['に','が','を','の'], correctAns:'を' },
  { level:'N5', section:'JFT New 1', qText:'5. ともだち＿＿うちにいきました。', options:['を','に','から','と'], correctAns:'と' },
  { level:'N5', section:'JFT New 1', qText:'6. ぎんこう＿＿まえに　ひとがいます。', options:['の','に','を','が'], correctAns:'の' },
  { level:'N5', section:'JFT New 1', qText:'7. やさい＿＿くだものをたべます。', options:['と','に','や','を'], correctAns:'と' },
  { level:'N5', section:'JFT New 1', qText:'8. えき＿＿でんしゃにのります。', options:['を','に','の','で'], correctAns:'で' },
  { level:'N5', section:'JFT New 1', qText:'9. わたし＿＿かぞくは　５にんです。', options:['の','が','は','を'], correctAns:'の' },
  { level:'N5', section:'JFT New 1', qText:'10. スーパーへかいもの＿＿いきます。', options:['に','の','を','と'], correctAns:'に' },
  { level:'N5', section:'JFT New 1', qText:'11. あした、かいしゃ＿＿いきます。', options:['に','の','が','と'], correctAns:'に' },
  { level:'N5', section:'JFT New 1', qText:'12. パーティーは　６じ＿＿はじまります。', options:['を','まで','に','で'], correctAns:'に' },
  { level:'N5', section:'JFT New 1', qText:'13. としょかんで　ほんを＿＿。', options:['ききます','よみます','のみます','たべます'], correctAns:'よみます' },
  { level:'N5', section:'JFT New 1', qText:'14. きのう　えいがを　＿＿。', options:['のみました','よみました','みました','かきました'], correctAns:'みました' },
  { level:'N5', section:'JFT New 1', qText:'15. まいあさ　６じに　＿＿。', options:['ねます','おきます','のります','はなします'], correctAns:'おきます' },
  { level:'N5', section:'JFT New 1', qText:'16. いま　ともだちと　レストランで　＿＿。', options:['はなします','はなして','はなしてます','はなしています'], correctAns:'はなしています' },
  { level:'N5', section:'JFT New 1', qText:'17. でんしゃに　＿＿ください。', options:['のる','のって','のり','のっても'], correctAns:'のって' },
  { level:'N5', section:'JFT New 1', qText:'18. せんせいは　いま　しょくどうで　＿＿います。', options:['たべ','たべて','たべてる','たべています'], correctAns:'たべて' },
  { level:'N5', section:'JFT New 1', qText:'19. ごはんを　たべて、テレビを＿＿。', options:['みます','みて','みる','みました'], correctAns:'みました' },
  { level:'N5', section:'JFT New 1', qText:'20. これは　わたし＿＿ほんです。', options:['を','に','の','が'], correctAns:'の' },
  { level:'N5', section:'JFT New 1', qText:'21. これは　＿＿ですか。', options:['いくら','いくつ','なんにん','どこ'], correctAns:'いくら' },
  { level:'N5', section:'JFT New 1', qText:'22. ＿＿にほんへいきますか。', options:['どう','なに','いつ','どこ'], correctAns:'いつ' },
  { level:'N5', section:'JFT New 1', qText:'23. あの方は＿＿ですか。', options:['なに','どれ','どこ','どなた'], correctAns:'どなた' },
  { level:'N5', section:'JFT New 1', qText:'24. うちで　ほんを　よみました。＿＿　えいがを　みました。', options:['それから','でも','だから','けど'], correctAns:'それから' },
  { level:'N5', section:'JFT New 1', qText:'25. この　レストランは　やすいです。＿＿、おいしいです。', options:['そして','だから','けど','でも'], correctAns:'そして' },
  { level:'N5', section:'JFT New 1', qText:'26. あつい＿＿、エアコンをつけます。', options:['けど','だから','それに','それで'], correctAns:'だから' },
  { level:'N5', section:'JFT New 1', qText:'27. これは　にほんご＿＿ざっしです。', options:['の','に','が','と'], correctAns:'の' },
  { level:'N5', section:'JFT New 1', qText:'28. すみません、コーヒーを　＿＿。', options:['ほしいです','みます','のみます','おねがいします'], correctAns:'おねがいします' },
  { level:'N5', section:'JFT New 1', qText:'29. かのじょは　せんせい＿＿　はたらいて　います。', options:['の','に','として','を'], correctAns:'として' },
  { level:'N5', section:'JFT New 1', qText:'30. まいにち　にほんごを　＿＿。', options:['べんきょうしまった','べんきょうして','べんきょうします','べんきょうした'], correctAns:'べんきょうします' }
];

const JFT_SOAL_2 = [
  // --- Bagian A: Kosakata bergambar (gambar dijelaskan dalam teks soal) ---
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'1. Gambar: sepasang pengantin (pria berjas & wanita bergaun putih) di depan gereja. Kata yang tepat untuk gambar ini adalah...', options:['合格（ごうかく）','結婚（けっこん）','出産（しゅっさん）'], correctAns:'結婚（けっこん）' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'2. Gambar: seseorang terkejut melihat ponselnya berbunyi/ada notifikasi masuk. Kata yang tepat untuk gambar ini adalah...', options:['見つかる（みつかる）','届く（とどく）','なくす'], correctAns:'届く（とどく）' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'3. Gambar: sebuah kotak/persegi berwarna biru polos. Kata yang tepat untuk gambar ini adalah...', options:['青（あお）','赤（あか）','緑（みどり）'], correctAns:'青（あお）' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'4. Gambar: pegawai toko menyerahkan sebuah kartu kecil kepada pembeli yang sedang memegang dompet di meja kasir. Kata yang tepat untuk gambar ini adalah...', options:['レシート','スタンプ','ポイントカード'], correctAns:'ポイントカード' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'5. Gambar: seseorang bingung membandingkan dua jenis penyedot debu dalam pikirannya. Kata yang tepat untuk gambar ini adalah...', options:['動かす（うごかす）','比べる（くらべる）','売れる（うれる）'], correctAns:'比べる（くらべる）' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'6. Gambar: sama seperti soal No.5 — seseorang bingung membandingkan dua jenis penyedot debu. Kata yang tepat untuk gambar ini adalah...', options:['動かす（うごかす）','比べる（くらべる）','売れる（うれる）'], correctAns:'比べる（くらべる）' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'7. Gambar: sebuah pemanas air listrik / termos listrik (electric pot). Kata yang tepat untuk gambar ini adalah...', options:['電子レンジ（でんしレンジ）','テレビ','ポット'], correctAns:'ポット' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'8. Gambar: seseorang membungkuk kesusahan membawa kardus yang berat. Kata yang tepat untuk gambar ini adalah...', options:['安い（やすい）','軽い（かるい）','重い（おもい）'], correctAns:'重い（おもい）' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'9. Gambar: sebuah penyedot debu (vacuum cleaner) berdiri sendiri. Kata yang tepat untuk gambar ini adalah...', options:['洗濯機（せんたくき）','掃除機（そうじき）','冷蔵庫（れいぞうこ）'], correctAns:'掃除機（そうじき）' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Kosakata Bergambar', qText:'10. Gambar: koin-koin mengalir masuk ke sebuah kartu poin (point card). Kata yang tepat untuk gambar ini adalah...', options:['動かす（うごかす）','貯まる（たまる）','比べる（くらべる）'], correctAns:'貯まる（たまる）' },

  // --- Bagian B: Membaca kata bergaris bawah ---
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'11. レストランは、夜11時まで<u>営業</u>しています。', options:['だんせい','えいぎょう','じょせい'], correctAns:'えいぎょう' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'12. この店は、女性にも<u>男性</u>にも人気があります。', options:['あんない','じょせい','だんせい'], correctAns:'だんせい' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'13. レジまで<u>ご案内</u>します。', options:['あんない','じょせい','だんせい'], correctAns:'あんない' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'14. 買い物とき、<u>急</u>にお腹が痛くなりました。', options:['きゅう','いろ','くろ'], correctAns:'きゅう' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'15. このセーター、ほかの<u>色</u>ありますか？', options:['きゅう','くろ','いろ'], correctAns:'いろ' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'16. <u>店員</u>がとても親切でした。', options:['しょうひぜい','しょうひん','てんいん'], correctAns:'てんいん' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'17. このボタンを押すと、エコモードに<u>変わります</u>。', options:['うわります','かわります','すわります'], correctAns:'かわります' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'18. この掃除機、とても<u>軽い</u>ですね。', options:['かるい','くろい','おもい'], correctAns:'かるい' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'19. この<u>商品</u>の値段、消費税は入っていますか？', options:['しんせつ','しょうひん','しょうほう'], correctAns:'しょうひん' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Membaca Kanji', qText:'20. <u>必要</u>な本を図書館で借りました。', options:['おかね','かかく','ひつよう'], correctAns:'ひつよう' },

  // --- Bagian C: Tata bahasa (lengkapi kalimat) ---
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'21. フードコートに傘を＿＿＿しまいました。', options:['忘れた','忘れて','忘れる'], correctAns:'忘れて' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'22. このくつ、白い＿＿＿、ありますか？', options:['の','もの','こと'], correctAns:'の' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'23. このバッグは、ちょっと＿＿＿すぎます。', options:['小さい','小さく','小さ'], correctAns:'小さ' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'24. あれ？財布がない！もしかしたら、＿＿＿かもしれません。', options:['とれた','とった','とられた'], correctAns:'とられた' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'25. この色は、＿＿＿すぎると思います。', options:['派手','派手な','派手だ'], correctAns:'派手' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'26. もしかしたら、カードをなくした＿＿＿。', options:['でしょう','かもしれません','つもりです'], correctAns:'かもしれません' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'27. デパートで財布を＿＿＿しまいました。', options:['落とす','落とした','落として'], correctAns:'落として' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'28. パソコンの修理が＿＿＿まで、3日しかかかりませんでした。', options:['終わった','終わる','終わって'], correctAns:'終わる' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'29. このポットは、シンプルだし、＿＿＿やすいです。', options:['使い','使って','使う'], correctAns:'使い' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Tata Bahasa', qText:'30. 商品が＿＿＿、どのぐらいかかりますか？', options:['届くとき','届いたら','届くまで'], correctAns:'届くまで' },

  // --- Bagian D: Percakapan ---
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Percakapan', qText:'31. 🎤：自転車がなくなったんですか。<br>🙂：はい。＿＿＿とられたかもしれません。', options:['もしかしたら','できれば','よろしければ'], correctAns:'もしかしたら' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Percakapan', qText:'32. 🎤：＿＿＿？スマホがない！<br>🙂：え、どこかで落とした？', options:['あれ','さあ','ほら'], correctAns:'あれ' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Percakapan', qText:'33. 🎤：「セーシバ」も「スギシタ」も、よく売れてますよ。<br>🙂：＿＿＿が使いやすいですか？', options:['どんな','どの','どっち'], correctAns:'どっち' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Percakapan', qText:'34. 🎤：この電子レンジ、いいですね。これ、＿＿＿？<br>🙂：うーん、そうですね…。1000円引きはどうですか？', options:['どのぐらい溜まってますか','やすくなりますか','持ち帰りですか'], correctAns:'やすくなりますか' },
  { level:'N5', section:'LATIHAN SOAL JFT 24 — Percakapan', qText:'35. 🎤：どちらが使いやすいですか？<br>🙂：このモデル＿＿＿、軽いですよ。', options:['によって','のほうが','より'], correctAns:'のほうが' }
];
