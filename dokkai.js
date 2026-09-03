/* ============================================================
   DOKKAI.JS — Master data bacaan (dokkai / reading comprehension)
   File ini dipisah dari HTML utama, mengikuti pola patterns.js
   dan vocab.js, supaya mudah ditambah bacaan baru tanpa buka
   file HTML.

   STRUKTUR SATU ENTRI:
   {
     level: "N5" | "N4" | "N3" | "N2",
     id: "kode-unik",           // dipakai utk seed acak & histori
     title: "Judul singkat bacaan (muncul di panel bacaan)",
     passage: "Teks bacaan bahasa Jepang, boleh multi-baris",
     questions: [
       {
         qText: "Pertanyaan (boleh HTML <b> dst)",
         options: ["pilihan 1", "pilihan 2", "pilihan 3", "pilihan 4"],
         correctAns: "pilihan yang benar (harus SAMA PERSIS dgn salah satu options)",
         explanation: "Penjelasan singkat + kutip bagian teks yg jadi bukti jawaban",
         evidence: "Potongan kalimat asli dari passage yg jadi bukti (opsional, akan di-highlight)"
       },
       ...
     ]
   }

   CATATAN: satu entri = SATU "paket bacaan" yang akan menghasilkan
   BEBERAPA soal beruntun (semua soal ttg bacaan yg sama muncul
   berurutan, panel bacaan tetap tampil di atas tiap soal).
   ============================================================ */

const DOKKAI = [
  {
    level: "N4",
    id: "dokkai-apato-elevator",
    title: "アパートのお知らせ",
    passage:
`アパートの皆さんへ

来週の月曜日と火曜日の午前１０時から午後５時までエレベーターを使わないでください。階段を使ってください。`,
    questions: [
      {
        qText: "アパートの人は、来週の月曜日と火曜日には、外に出る時、どうしますか。",
        options: [
          "来週の月曜日の午前１１時には、階段を使います。",
          "来週の月曜日の午後３時には、エレベーターを使います。",
          "来週の火曜日の午前１１時には、エレベーターを使います。",
          "来週の火曜日の午後３時には、階段を使いません。"
        ],
        correctAns: "来週の月曜日の午前１１時には、階段を使います。",
        explanation: "Larangan berlaku pada rentang 午前１０時〜午後５時 di hari Senin dan Selasa. Jam 11 pagi Senin ada di dalam rentang itu, jadi harus pakai tangga.",
        evidence: "来週の月曜日と火曜日の午前１０時から午後５時までエレベーターを使わないでください。階段を使ってください。"
      }
    ]
  },
  {
    level: "N4",
    id: "dokkai-denwa",
    title: "友だちへの電話",
    passage:
`きのうのよる１０時に友だちのうちに電話をしましたが、友だちはいませんでした。１時間あとでもういちどかけました。でも友だちはまだかえっていませんでした。わたしは１１時ごろねました。`,
    questions: [
      {
        qText: "この文しょうと合っているのはどれですか。",
        options: [
          "わたしはきのうのよる友だちと話したあとでねました。",
          "わたしはきのうのよる友だちに１かいしか電話しませんでした。",
          "わたしはきのうのよる友だちと２かい電話で話しました。",
          "わたしはきのうのよる友だちと電話で話しませんでした。"
        ],
        correctAns: "わたしはきのうのよる友だちと電話で話しませんでした。",
        explanation: "Dua kali menelepon (jam 10 dan jam 11), tapi kedua kali temannya tidak ada di rumah, jadi tidak pernah benar-benar berbicara dengannya.",
        evidence: "友だちはいませんでした。１時間あとでもういちどかけました。でも友だちはまだかえっていませんでした。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-okinawa",
    title: "おきなわ旅行",
    passage:
`先月わたしは学校の友達といっしょに、おきなわへ旅行に行きました。わたしたちは、旅行の前に、おきなわから来た日本人の友達にいろいろ（ア）。友達は、「おきなわはとうきょうよりずっと南だから、とても暑いよ。（イ）、夏の服をたくさん持っていったほうがいい」と言いました。そのころとうきょうはまだ４月だったので、きおんが１４どぐらいでした。（ウ）、わたしはおしいれのおくから、夏の洋服を出して、かばんにいっぱい入れて出かけることにしました。２はく３日の旅行ですが、一日中、おきなわの町をけんぶつしたり、海で泳いだりするので、ようふくはたくさんあったほうがいいと思ったのです。`,
    questions: [
      {
        qText: "（ア）には何を入れますか。",
        options: ["話しました", "答えました", "呼びました", "聞きました"],
        correctAns: "聞きました",
        explanation: "「〜に いろいろ聞きました」= bertanya/menanyakan berbagai hal KEPADA teman. Karena diikuti partikel に (kepada), kata kerja yang pas adalah 聞く (bertanya), bukan 話す/答える yang biasanya berpasangan dengan と atau を.",
        evidence: "おきなわから来た日本人の友達にいろいろ（ア）。"
      },
      {
        qText: "（イ）には何を入れますか。",
        options: ["だから", "それから", "すると", "だけど"],
        correctAns: "だから",
        explanation: "Kalimat sebelum (イ) adalah SEBAB (おきなわは暑い), dan sesudahnya adalah AKIBAT/saran (bawa baju musim panas). Hubungan sebab-akibat searah seperti ini pakai だから, bukan だけど (kebalikan/kontras).",
        evidence: "とても暑いよ。（イ）、夏の服をたくさん持っていったほうがいい"
      },
      {
        qText: "（ウ）には何を入れますか。",
        options: ["そうすると", "ところが", "それで", "それに"],
        correctAns: "それで",
        explanation: "それで menghubungkan alasan/situasi (suhu Tokyo saat itu cuma 14°C) dengan TINDAKAN yang diambil penulis (mengeluarkan baju musim panas dari lemari). ところが dipakai untuk hal yang di luar dugaan/berlawanan, yang tidak cocok di sini.",
        evidence: "きおんが１４どぐらいでした。（ウ）、わたしはおしいれのおくから、夏の洋服を出して"
      }
    ]
  },

  /* ============================================================
     N5 — Level pemula
     ============================================================ */
  {
    level: "N5",
    id: "dokkai-toshokan",
    title: "としょかんで本をかりる",
    passage:
`学生: すみません。この本をかりたいです。
としょかんの人: この学校の学生ですか。
学生: はい。
としょかんの人: では、はじめにこのかみに名前とじゅうしょと電話ばんごうを書いてぐださい。
学生: はい。
としょかんの人: 書きましたか。
学生: はい。
としょかんの人: これはじしょですね。としょかんの中でつかってぐださい。
学生: はい、わかりました。では、この７さつをかしてぐださい。
としょかんの人: ああ、学生は４さつまでです。
学生: そうですか。では、この３さつはかりません。
としょかんの人: わかりました。では、こちらの本は２しゅうかん、ざっしは1しゅうかんでかえしてぐださい。きょうは１５日ですから、[_______]
学生: はい、わかりました。`,
    questions: [
      {
        qText: "[_______] には何を入れますか。",
        options: ["本は２９日、ざっしは２２日です。", "本は２２日、ざっしは２９日です。", "本もざっしも２９日です。", "本もざっしも２２日です。"],
        correctAns: "本は２９日、ざっしは２２日です。",
        explanation: "Hari ini tanggal 15. Buku boleh dipinjam 2 minggu (14 hari) → 15+14=29. Majalah boleh dipinjam 1 minggu (7 hari) → 15+7=22. Jadi buku kembali tgl 29, majalah tgl 22 — bukan sebaliknya.",
        evidence: "こちらの本は２しゅうかん、ざっしは1しゅうかんでかえしてぐださい。きょうは１５日ですから"
      },
      {
        qText: "この学生は何さつかりましたか。",
        options: ["３さつ", "４さつ", "５さつ", "６さつ"],
        correctAns: "４さつ",
        explanation: "Awalnya siswa mau pinjam 7 buku, tapi petugas bilang maksimal 4 buku per siswa. Siswa lalu bilang '3 buku ini tidak jadi dipinjam' — jadi 7−3=4 yang benar-benar dipinjam.",
        evidence: "学生は４さつまでです。\n学生: そうですか。では、この３さつはかりません。"
      },
      {
        qText: "この学生はとしょかんで何をしましたか。",
        options: ["本に名前を書きました。", "かみに本の名前を書きました。", "じしょをかりました。", "本とざっしをかりました。"],
        correctAns: "本とざっしをかりました。",
        explanation: "Siswa menulis nama/alamat/no. telepon di KERTAS (bukan di buku), dan kamus (じしょ) TIDAK BOLEH dipinjam — hanya boleh dipakai di dalam perpustakaan. Yang benar-benar dipinjam adalah buku dan majalah (terlihat dari aturan pengembalian yang menyebut keduanya).",
        evidence: "これはじしょですね。としょかんの中でつかってぐださい。"
      },
      {
        qText: "このとしょかんで学生ができることは何ですか。",
        options: ["ざっしを２しゅうかんかりること", "本を５さつかりること", "本やざっしを４さつまでかりること", "本とじしょを１しゅうかんかりること"],
        correctAns: "本やざっしを４さつまでかりること",
        explanation: "Aturan jelas: maksimal 4 buah (buku/majalah campur) per siswa. Majalah masa pinjamnya 1 minggu (bukan 2 minggu), buku maksimal bukan 5, dan kamus tidak bisa dipinjam sama sekali — jadi 3 pilihan lain semuanya salah.",
        evidence: "学生は４さつまでです。"
      }
    ]
  },
  {
    level: "N5",
    id: "dokkai-rin-murata",
    title: "リンさんとむらたさん",
    passage:
`リン「むらたさん、ちょっといいですか。」
むらた「はい、なんですか。」
リン「明日病院へ行きますから、じゅぎょうに出ません。明日の夜電話しますから、宿題をおしえてください。」
むらた「はい、わかりました。」`,
    questions: [
      {
        qText: "ただしいものはどれですか。",
        options: ["むらたさんはきょうしゅくだいをおしえます。", "りんさんはきょうじゅぎょうを休みます。", "むらたさんはあしたびょういんへ行きます。", "りんさんはむらたさんに電話します。"],
        correctAns: "りんさんはむらたさんに電話します。",
        explanation: "Yang pergi ke rumah sakit BESOK (bukan hari ini) dan yang tidak masuk kelas adalah Rin, bukan Murata. Rin bilang akan menelepon Murata besok malam untuk minta diajari PR — jadi jawaban yang cocok adalah 'Rin akan menelepon Murata'.",
        evidence: "明日病院へ行きますから、じゅぎょうに出ません。明日の夜電話しますから、宿題をおしえてください。"
      }
    ]
  },

  /* ============================================================
     N4 — Level menengah bawah
     ============================================================ */
  {
    level: "N4",
    id: "dokkai-curry-ramen",
    title: "日本人の昼ごはん",
    passage:
`A「日本人が昼ごはんによく食べるものは何だと思いますか。」
B「そうですね。日本人なら [ 1 ] おすしでしょう。」
A「いいえ、ちがうんですよ。」
B「じゃあ、てんぷらですか。」
A「いいえ、てんぷらでもないんです。ちょっとからい食べ物です。」
B「わかった！カレ－でしょう。」
A「そうです。この間ざっしで読んだんですが、カレ－だそうです。」
B「じゃあ、２ばんめはおすしですか。」
A「 [ 2 ] 。でも、２ばんめもすしじゃないです。ラ－メンなんです。」
B「そうなんですか。日本人はおすしとてんぷらをよく食べると思っていました。」
A「私はすしが大好きで、日本にいたときよく食べました。」
B「いいですね。わたしも日本へ行っておすしをたくさん食べたいです。」
A「いつか行けるといいですね。日本のすしはほんとうにおいしいですから。」`,
    questions: [
      {
        qText: "[ 1 ] には何を入れますか。",
        options: ["とても", "しっかり", "やっぱり", "たいへん"],
        correctAns: "やっぱり",
        explanation: "やっぱり (= 'seperti dugaan/sudah pasti') cocok dipakai saat B menebak jawaban klise/umum ('orang Jepang pasti sushi, kan'). とても/しっかり/たいへん tidak bisa dipakai sebelum kata benda seperti おすし dalam pola ini.",
        evidence: "日本人なら [ 1 ] おすしでしょう。"
      },
      {
        qText: "[ 2 ] には何を入れますか。",
        options: ["そう思いませんね。", "そう思うでしょう。", "そう思いましょうか。", "そう思っていませんよ。"],
        correctAns: "そう思うでしょう。",
        explanation: "Kalimat setelah blank diawali でも ('tapi'), tandanya A dulu MENGAKUI dugaan B ('kamu pasti mengira begitu, ya') sebelum membantahnya. そう思うでしょう pas untuk pola 'mengiyakan dulu, baru koreksi'.",
        evidence: "２ばんめはおすしですか。」\nA「 [ 2 ] 。でも、２ばんめもすしじゃないです。"
      },
      {
        qText: "日本人は昼ごはんによく食べるものは何ですか。",
        options: ["カレ－とラ－メン", "カレ－とすし", "すしとてんぷら", "ラ－メンとてんぷら"],
        correctAns: "カレ－とラ－メン",
        explanation: "Urutan pertama terungkap 'カレー' (bukan sushi/tempura), urutan kedua terungkap 'ラーメン' (bukan sushi juga). Jadi dua makanan yang benar adalah kare dan ramen.",
        evidence: "２ばんめもすしじゃないです。ラ－メンなんです。"
      },
      {
        qText: "正しいものはどれですか。",
        options: ["AさんもBさんも日本へ行ったことがあります。", "AさんもBさんも日本へ行ったことがありません。", "Bさんは日本へ行ったことがありますが、Aさんはありません。", "Aさんは日本へ行ったことがありますが、Bさんはありません。"],
        correctAns: "Aさんは日本へ行ったことがありますが、Bさんはありません。",
        explanation: "A bilang 'dulu waktu di Jepang sering makan sushi' (berarti A pernah tinggal/pergi ke Jepang). B bilang 'saya juga ingin PERGI ke Jepang dan makan sushi banyak-banyak' (berarti B BELUM pernah ke sana).",
        evidence: "私はすしが大好きで、日本にいたときよく食べました。」\nB「いいですね。わたしも日本へ行っておすしをたくさん食べたいです。"
      }
    ]
  },
  {
    level: "N4",
    id: "dokkai-john-manga",
    title: "ジョンさんからのメール",
    passage:
`たけしくん
メ－ル、ありがとう。前のメ－ルに「英語の勉強はつまらない」と書いてありましたが。まず好きなことから始めたらどうですか。
ぼくが日本語の勉強を始めたのは中学１年のときです。友だちの家ではじめて日本のまんがを見ました。そのときは日本語がぜんぜんわからなかったのですが、えがあるから話はだいたいわかりました。日本語で読めるようになりたいと思って、自分で勉強を始めました。かんじは、むずかしかったですが、まんがを何さつも読んでいたら、かんたんなかんじはおぼえていました。
まんがはよくないと言う人もいますが、どんなものにもいいものと悪いものがあると思います。だから、まんがもえらんで読めばいいと思います。人をいじめるようなまんがはよくないですが、サッカ－やバスケットボ－ルなどスポ－ツのまんがはおもしろいし、読むと元気になります。
たけしくんは、何かきょうみがありますか。音楽ですか、映画ですか。（　　　　）
じゃ、またメ－ルします。
ジョン`,
    questions: [
      {
        qText: "ジョンさんが日本語の勉強を始めたのはどうしてですか。",
        options: ["漢字をたくさんおぼえたかったから", "日本語でまんがを読みたいと思ったから", "友だちに日本のまんがをもらったから", "日本のまんががぜんぜんわからなかったから"],
        correctAns: "日本語でまんがを読みたいと思ったから",
        explanation: "John awalnya tidak paham bahasa Jepang saat lihat manga temannya, tapi mengerti garis besarnya lewat gambar. Dari situ ia INGIN BISA membaca bahasa Jepang, sehingga mulai belajar sendiri.",
        evidence: "日本語で読めるようになりたいと思って、自分で勉強を始めました。"
      },
      {
        qText: "ジョンさんはまんがについてどう思っていますか。",
        options: ["日本語の勉強のためにどんなまんがでも読んだほうがいい", "サッカ－やバスケットボ－ルのまんが以外は読んではいけない。", "いろいろなまんががあるので、いいものだけえらんで読んだらいい。", "まんがばかり読むと人をいじめるようになるので、読まないほうがいい。"],
        correctAns: "いろいろなまんががあるので、いいものだけえらんで読んだらいい。",
        explanation: "John bilang setiap hal punya sisi baik & buruk, jadi manga pun sebaiknya DIPILIH-PILIH yang bagus untuk dibaca — bukan semua boleh, tapi juga bukan semua dilarang.",
        evidence: "どんなものにもいいものと悪いものがあると思います。だから、まんがもえらんで読めばいいと思います。"
      },
      {
        qText: "（　　　）には何を入れますか。",
        options: ["映画がきらいでも、毎日見ればわかるようになりますよ。", "日本語のまんがを読めば、漢字がおぼえられるようになりますよ。", "毎日れんしゅうすれば、サッカ－やバスケットボ－ルがじょうずになりますよ。", "英語を使って好きなことをすれば、勉強が楽しくなりますよ。"],
        correctAns: "英語を使って好きなことをすれば、勉強が楽しくなりますよ。",
        explanation: "Bagian ini menutup surat dengan mengulang saran di AWAL surat: mulai dari hal yang disukai (musik/film) sambil pakai bahasa Inggris, supaya belajarnya jadi menyenangkan — sesuai tema utama emailnya.",
        evidence: "まず好きなことから始めたらどうですか。"
      }
    ]
  },
  {
    level: "N4",
    id: "dokkai-isha",
    title: "びょういんで",
    passage:
`医者「どうしましたか。川田(かわだ)さん。」
川田「[ 1 ]。」
医者「そうですか。いつからですか。」
川田「きのう、ばんごはんを食べてからです。」
医者「ばんごはんは何でしたか。」
川田「魚と野菜です。自分で魚をやいて、サラダを作りました。」
医者「魚は古くありませんでしたか。」
川田「[ 2 ]。でも、とてもおいしかったです。」
医者「そうですか。じゃあ、そこのベッドにねて、おなかをみせてください。」
川田「はい、ちょっと待ってください。……[ 3 ]。」
医者「ええ、けっこうです。ここを おしますよ。どうですか。いたいですか。」
川田「はい。」
医者「そうですか。川田さん、ばんごはんを食べすぎませんでしたか。」
川田「ああ……。おいしかったから、ごはんを５はい食べました。」
医者「ああ、それでいたくなったんですよ。薬を出しますから、飲んでください。」
川田「わかりました。どうもありがとうございました。」`,
    questions: [
      {
        qText: "[ 1 ] には何を入れますか。",
        options: ["おなかがいたいんです", "おなかがいたいでしょう", "おなかがいたいんですから", "おなかがいたくなりますか"],
        correctAns: "おなかがいたいんです",
        explanation: "Dokter bertanya 'ada keluhan apa', lalu langsung tanya 'sejak kapan' — jadi jawaban pertama harus berupa KELUHAN itu sendiri (bentuk pernyataan biasa 'んです'), bukan bentuk pertanyaan/perkiraan.",
        evidence: "医者「そうですか。じゃあ、そこのベッドにねて、おなかをみせてください。」"
      },
      {
        qText: "[ 2 ] には何を入れますか。",
        options: ["ええと、ありました", "あのう、よく食べました", "ええ、そうします", "さあ、わかりません"],
        correctAns: "さあ、わかりません",
        explanation: "Ditanya 'ikannya tidak basi kan?', jawaban yang pas adalah 'entahlah, tidak tahu' (さあ、わかりません) — karena kalimat berikutnya bilang 'tapi rasanya enak', menunjukkan Kawada tidak yakin soal kesegaran ikannya, cuma tahu rasanya enak.",
        evidence: "魚は古くありませんでしたか。」\n川田「[ 2 ]。でも、とてもおいしかったです。"
      },
      {
        qText: "[ 3 ] には何を入れますか。",
        options: ["これがいいですか", "これでいいですか", "それからいいですか", "それならいいですか"],
        correctAns: "これでいいですか",
        explanation: "Setelah diminta berbaring & memperlihatkan perut, Kawada mengecek posisinya dengan bertanya 'begini sudah benar?' — dijawab dokter 'ええ、けっこうです' (ya, sudah pas). Pola 'これでいいですか' = 'apakah begini sudah cukup/benar'.",
        evidence: "医者「ええ、けっこうです。ここを おしますよ。"
      },
      {
        qText: "医者は、川田さんの病気のげんいんは何だと言っていますか。",
        options: ["食べすぎたこと", "おなかをおされたこと", "古い魚を食べたこと", "ばんごはんを食べなかったこと"],
        correctAns: "食べすぎたこと",
        explanation: "Kawada mengaku makan nasi sampai 5 mangkuk karena enak, dan dokter langsung menyimpulkan itulah penyebab sakit perutnya — bukan soal ikan basi (yang tidak terbukti).",
        evidence: "おいしかったから、ごはんを５はい食べました。」\n医者「ああ、それでいたくなったんですよ。"
      }
    ]
  },
  {
    level: "N4",
    id: "dokkai-kaigishitsu",
    title: "かいぎ室のよやく",
    passage:
`かいぎ室を利用する人へ
このビルには、三つの大きさのかいぎ室があります。
大かいぎ室
５かいに一つあります。100人入れます。
【よやくのしかた】
３か月前から１週間前までよやくできます。ここを使いたいときは、よやくの紙に使う日や時間を書いて、じむしょに出してください。よやくの紙はじむしょでもらえます。毎月１日になると、その月のよやくを書いたカレンダーがじむしょの前にはられます。
中かいぎ室
６かいに一つあります。50人入れます。
【よやくのしかた】
２か月前から前の日までよやくできます。毎月１日に、このかいぎ室の前に２か月後の大きいカレンダーをはります。
たとえば、３月１日には５月のカレンダーをはります。使いたい日の使いたい時間のところに名前を書いてください。
小かいぎ室
２かいから４かいまで一つずつあります。一つのかいぎ室に20人入れます。
【よやくのしかた】
１週間からよやくできます。利用する日でもよやくできます。
使いたいときはじむしょの人に言ってください。`,
    questions: [
      {
        qText: "このビルにはかいぎ室がぜんぶでいくつありますか。",
        options: ["三つ", "四つ", "五つ", "六つ"],
        correctAns: "五つ",
        explanation: "'３つの大きさ' berarti 3 UKURAN (besar/sedang/kecil), bukan 3 RUANGAN. Ruang kecil ada di lantai 2, 3, dan 4 masing-masing satu (=3 ruang), ditambah 1 ruang besar dan 1 ruang sedang → total 1+1+3 = 5 ruang.",
        evidence: "小かいぎ室\n２かいから４かいまで一つずつあります。"
      },
      {
        qText: "３日前によやくできるかいぎ室はどれですか。",
        options: ["大かいぎ室と中かいぎ室", "中かいぎ室と小かいぎ室", "大かいぎ室と小かいぎ室", "ぜんぶのかいぎ室"],
        correctAns: "中かいぎ室と小かいぎ室",
        explanation: "Ruang besar hanya bisa dipesan sampai 1 MINGGU sebelumnya (tidak bisa 3 hari sebelum). Ruang sedang bisa sampai sehari sebelumnya, ruang kecil bahkan bisa di hari-H — jadi keduanya masih bisa dipesan 3 hari sebelumnya, tapi ruang besar sudah tidak bisa.",
        evidence: "３か月前から１週間前までよやくできます。"
      },
      {
        qText: "４月５日に80人でかいぎをします。正しくよやくしているのはどれですか。",
        options: ["２月１日にかいぎ室の前のカレンダーによていを書きます。", "４月１日にかいぎ室の前のカレンダーによていを書きます。", "２月１日にじむしょへ行って、よやくの紙に書いて出します。", "４月１日にじむしょへ行って、よやくの紙に書いて出します。"],
        correctAns: "２月１日にじむしょへ行って、よやくの紙に書いて出します。",
        explanation: "80 orang hanya muat di ruang BESAR (kapasitas 100; ruang sedang cuma 50, ruang kecil cuma 20). Ruang besar dipesan dgn cara ISI KERTAS FORMULIR ke kantor (bukan tulis di kalender), dan bisa dipesan 3 bulan sampai 1 minggu sebelumnya — jadi 1 Februari (2 bulan sebelum 5 April) masih dalam rentang itu.",
        evidence: "大かいぎ室\n５かいに一つあります。100人入れます。\n【よやくのしかた】\n３か月前から１週間前までよやくできます。ここを使いたいときは、よやくの紙に使う日や時間を書いて、じむしょに出してください。"
      }
    ]
  },

  /* ============================================================
     N3 — Level menengah
     ============================================================ */
  {
    level: "N3",
    id: "dokkai-bounenkai",
    title: "忘年会のご案内",
    passage:
`拝啓　時下ますますご健勝のこととお喜び申し上げます。
さて、この一年を振り返り、下記により忘年会を開催いたします。ご参加くださいますようお願いいたします。

敬具

記

1. 日時： 平成25年12月28日（土）　午後15時～午後19時
2. 場所： ミドリホテル　東京都品川区広町1-2-3
3. 会費：　お一人様　5000円
4. 担当者： 山田太郎
5. 連絡先： 0123-456-789

※参加を希望される方は12月20日までに弊社担当者にご連絡くださいますようお願いいたします。
以上`,
    questions: [
      {
        qText: "この案内書の内容と合っているものはどれか。",
        options: ["参加しない人が山田さんに連絡しなければならない。", "参加する人が山田さんに連絡しなければならない。", "参加しなくても会費を払わなければならない。", "参加する人が12月20日までに会費を払わなければならない。"],
        correctAns: "参加する人が山田さんに連絡しなければならない。",
        explanation: "Yang perlu menghubungi penanggung jawab (Yamada) sebelum 20 Desember adalah orang yang MAU IKUT (希望される方 = pihak yang berharap/ingin ikut), bukan yang tidak ikut. Soal bayar biaya, tidak disebutkan harus dibayar duluan sebelum tanggal itu.",
        evidence: "※参加を希望される方は12月20日までに弊社担当者にご連絡くださいますようお願いいたします。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-kinku",
    title: "会話の禁句",
    passage:
`好きな人と会話をするのなら、禁句（注1）にしたい言葉がある。それは「はい」と「いいえ」だ。例えば、「海外旅行に行ったことある？」という質問に「いいえ」で返してしまうと、終わりだ。別に相手の話に肯定も否定もするな、と言っているわけではない。「はい」と「いいえ」は使わず、別の表現に言い換えてみよう。「海外旅行に行ったことある？」という質問に「行ったことはないけど行ってみたい。一番行ってみたいのは中国。万里の長城を実際に見てみたい」そう言うと、相手は興味を引かれ、会話がさらに続くことだろう。

（注1）禁句（きんく）：使わないほうがいい言葉`,
    questions: [
      {
        qText: "筆者が「はい」と「いいえ」を禁句にしたがる理由は何か。",
        options: ["相手の話を肯定しても否定してもいけないからだ。", "いつも同じ返事をしたらつまらないと思われるからだ。", "このような返事で会話が一瞬で終わってしまうからだ。", "短すぎて、相手のことが嫌いだと思われるからだ。"],
        correctAns: "このような返事で会話が一瞬で終わってしまうからだ。",
        explanation: "Penulis secara eksplisit bilang kalau dijawab 'いいえ' saja, percakapannya langsung 終わり (berakhir/mati). Bukan soal boleh/tidak boleh menyetujui, tapi soal jawaban pendek itu MEMUTUS percakapan.",
        evidence: "「いいえ」で返してしまうと、終わりだ。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-bungakukan",
    title: "文庫大賞の応募案内",
    passage:
`第5回　日本文学館文庫大賞
作家になる夢、叶えませんか？作家志望の方の作品募集中。

原稿用紙50枚以上300枚以下の文章作品を募集します。小説、エッセイ、詩、童話などどれもご応募いただけます。また横書き、縦書き、どちらでもいいです。
大賞　3名　　無料で出版
最終締め切り　2013年7月15日

＊氏名・年齢・郵便番号・住所・電話番号・連絡可能時間帯を書いた別紙（注1）を添えてください。
＊作品の返却（注2）はいたしません。コピーでの応募をおすすめいたします。

詳しくはホームページ（http://www.nihonbungakukan.co.jp）をご覧ください。
ご不明の場合は、お気軽にお問い合わせください（0120-71-5050・通話無料）。

（注1）：別紙（べっし）：別の紙
（注2）：返却（へんきゃく）：借りていた物や預かっていた物を返すこと`,
    questions: [
      {
        qText: "応募する人は、どうしなければならないか。",
        options: ["決められた字数で文章を縦書きで書いて送る。", "連絡先などを書いた別紙を作品と一緒に送る。", "作品の原稿を２部コピーして送る。", "電話で問い合わせた後で作品を送る。"],
        correctAns: "連絡先などを書いた別紙を作品と一緒に送る。",
        explanation: "Panitia jelas minta melampirkan kertas terpisah berisi nama/usia/kode pos/alamat/no.telp/waktu bisa dihubungi. Arah tulisan (縦書き/横書き) BEBAS keduanya boleh (bukan wajib tegak), dan yang disarankan cuma FOTOKOPI (bukan wajib 2 rangkap), telepon hanya opsi kalau ada yang tidak jelas — bukan syarat wajib sebelum kirim.",
        evidence: "氏名・年齢・郵便番号・住所・電話番号・連絡可能時間帯を書いた別紙（注1）を添えてください。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-midori-denki",
    title: "みどり電気からのメール",
    passage:
`みどり電気の川崎さんから次のメールが届いた。

件名：みどり電気の新製品のご説明について
丸友商事（株）
香川　竜　様
メールを拝読いたしました。
弊社の新製品にご質問をいただき、心から感謝いたします。

早速ですが、製品の説明に伺いたいと思います。
来週、以下のどちらかで貴社に伺わせていただきたいのですが、いかがでしょうか。

日時：　4月17日（水）　14：00～15：00
4月18日（木）　10：00～11：00
ご連絡をお待ちしております。

みどり電気（株）
川崎　裕太`,
    questions: [
      {
        qText: "メールの用件は何か。",
        options: ["みどり電気で、二回の説明会を開きたい。", "みどり電気で、製品の説明をしたい。", "丸友商事で、二回の説明会を開きたい。", "丸友商事で、製品の説明をしたい。"],
        correctAns: "丸友商事で、製品の説明をしたい。",
        explanation: "Kawasaki dari Midori Denki menawarkan datang KE PERUSAHAAN Marutomo Shoji (貴社に伺わせていただきたい) untuk menjelaskan produk. Dua pilihan waktu itu bukan '2 kali sesi penjelasan', melainkan 2 OPSI jadwal untuk 1 kali kunjungan.",
        evidence: "来週、以下のどちらかで貴社に伺わせていただきたいのですが"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-muzukashii-kao",
    title: "楽しんで勉強すること",
    passage:
`学校では、難しい顔をしていると一生懸命に勉強していると見てくれる。険しい表情をして、額に汗を流して勉強していると「偉いね」と言われる。

しかし、これは、本当によい勉強法ではない。難しくて面白くないと感じることは、身につかないことが目に見えている。勉強は、楽しいと感じる人ほど、身につき、成績もよくなるのだ。

中学生のころ、西岡君という友人がいった。彼は数学や理科は誰にも負けないくらい、いつも成績がよかった。そんな西岡君は、いつも楽しそうな表情をして勉強をしているのだ。難しい顔をして勉強することがよいことだと思っていた私は、いつも不思議だった。数学や理科の話をすると、笑いながら教えてくれる。

ある日、西岡君に「なぜそんなに成績がいいの」と聞いてみたことがある。すると「[3]」というあっさりした返事が返ってきた。

学生のころに聞いた言葉は、そのとき軽く聞き流していた。しかし、実際に社会に出て、仕事のできる人や頭の切れる人は、決まって「楽しんでいる人」だ。難しく険しい表情をしている人は、仕事が遅くて、質が悪い。嫌いだという感情があると、スピードが落ちて、熱心さ、集中力、根気が欠けてしまう。

私は昔、難しい顔をしている人が頑張っている人だと思っていたが、大きな間違いだったのだ。本当に頑張って成果を発揮できる人は、楽しんでいる人なのだ。`,
    questions: [
      {
        qText: "[3]に入る適当な言葉はどれか。",
        options: ["易いから", "頑張っているから", "頭がいいから", "楽しいから"],
        correctAns: "楽しいから",
        explanation: "Tema utama seluruh bacaan: orang yang menikmati (楽しむ) belajar/pekerjaannya itulah yang hasilnya paling bagus. Nishioka selalu terlihat senang saat belajar, jadi jawaban singkatnya pasti berkaitan dgn 'karena menyenangkan', selaras dgn kesimpulan akhir penulis.",
        evidence: "本当に頑張って成果を発揮できる人は、楽しんでいる人なのだ。"
      }
    ]
  },

  /* ============================================================
     N2 — Level menengah atas
     ============================================================ */
  {
    level: "N2",
    id: "dokkai-jikan-dorobou",
    title: "時間どろぼう",
    passage:
`現代は、時間がどんどん加速されているとも言われます。何事にも「早く、早く」とせかされ（注１）、時間と競争するかのように忙しさに追われていることを、大人たちはこういう言い方をしているのです。いつも同じ速さで時間が流れているはずなのに、時間の間隔（かんかく）が短くなったような気分で追い立てられて（注２）いるためでしょう。それをエンデ（注３）は『モモ』という作品の中で「時間どろぼう」と呼びました。ゆっくり花を見たり音楽を楽しんだりする、そんなゆったりした時間が盗まれていく、という話でした。

いつも何かしていないと気が落ち着かない、現代人はそんなふうになっています。
その一つの原因は、世の中が便利になり、能率的になって、より早く仕事を仕上げることがより優れていると評価されるようになっているためと思われます。競争が激しくなって、人より早くしなければ負けてしまうという恐れを心に抱くようになったためでしょう。「時間は金なり」となってしまったのです。

しかし、それでは心が貧しくなってしまいそうです。何も考えずにひたすら決められたことをしていて人生が楽しいはずがありません。ゆっくり歩むからこそ、道ばたに咲く花に気づいたり、きれいな夕日を楽しむ気分になれるのです。私たちは、時間を取り返し、もっとゆったりした時間を生きる必要がありそうですね。
（池内了『時間とは何か』による）

（注１） せかされる：急がされる
（注２） 追い立てられる：ここでは、何かをしないではいられない気持ちにさせられる
（注３） エンデ：ドイツの児童文学者`,
    questions: [
      {
        qText: "時間がどんどん加速されているとはどういうことか。",
        options: ["しなければならないことが多くて時間が短く感じられる。", "何かに夢中になっていると一日の時間が短く感じられる。", "作業能率が上がって一日の仕事の時間が短くなっている。", "技術の進歩によって仕事にかかる時間が短くなっている。"],
        correctAns: "しなければならないことが多くて時間が短く感じられる。",
        explanation: "Penulis menjelaskan 'dikejar-kejar早く早く' dan 'seperti balapan dengan waktu' karena kesibukan — jadi yang dimaksud 'waktu makin cepat' adalah PERASAAN terburu-buru akibat banyak tuntutan, bukan soal teknologi atau efisiensi kerja yang benar-benar memendekkan waktu.",
        evidence: "何事にも「早く、早く」とせかされ（注１）、時間と競争するかのように忙しさに追われている"
      },
      {
        qText: "いつも何かしていないと気が落ち着かない原因を筆者はどう考えているか。",
        options: ["何もしないと心が貧しくなってしまうと感じること", "早く何かを仕上げないと他の人に勝てないと思うこと", "失った時間を取り戻さないと競争に負けてしまうと思うこと", "奪（うば）われた時間を取り戻さないと人生を楽しめないと感じること"],
        correctAns: "早く何かを仕上げないと他の人に勝てないと思うこと",
        explanation: "Penulis langsung menyebut penyebabnya: persaingan makin ketat, dan muncul rasa takut kalah kalau tidak lebih cepat dari orang lain. Pilihan lain (soal hati jadi miskin / soal 'waktu yg hilang') adalah opini penulis di paragraf LAIN, bukan jawaban untuk pertanyaan penyebab ini.",
        evidence: "競争が激しくなって、人より早くしなければ負けてしまうという恐れを心に抱くようになったためでしょう。"
      },
      {
        qText: "筆者は、時間の使い方についてどのように考えているか。",
        options: ["時間は貴重なので、休むときにも能率的に過ごしたほうがよい。", "忙しい中にも、のんびり過ごす時間をできるだけ持ったほうがよい。", "人生を楽しむためには、ひたすらゆっくり時間を過ごしたほうがよい。", "人との競争に勝つためには、時間をもっと有効に使うようにしたほうがよい。"],
        correctAns: "忙しい中にも、のんびり過ごす時間をできるだけ持ったほうがよい。",
        explanation: "Kesimpulan penulis di paragraf terakhir: kita perlu MENGAMBIL KEMBALI waktu yang santai, bukan berhenti sibuk sepenuhnya ('ひたすらゆっくり' terlalu ekstrem) maupun soal menang kompetisi/efisiensi waktu semata.",
        evidence: "私たちは、時間を取り返し、もっとゆったりした時間を生きる必要がありそうですね。"
      }
    ]
  },
  {
    level: "N2",
    id: "dokkai-renshuu",
    title: "休養も練習のうち",
    passage:
`“練習のための練習”が行われているというチームがたくさんあります。練習は本番（ほんばん）の試合のために存在すべきものです。本番で最高の実力を発揮（はっき）させるためにすることを、練習と呼びます。すなわち、休養することが試合にとって、今、最もするべきことだとすれば、休養こそ勝つための練習といえるときがあるのです。休養はサボることではなく、時として練習なのです。`,
    questions: [
      {
        qText: "筆者は、試合で実力を出すために何が大事だと述べているか。",
        options: ["“練習のための練習”をすること", "練習でも最高の力を出すこと", "必要であれば休養を取ること", "試合の前に休養を取ること"],
        correctAns: "必要であれば休養を取ること",
        explanation: "Inti tulisan: kalau memang saat itu yang paling dibutuhkan tim adalah ISTIRAHAT, maka istirahat itu sendiri termasuk 'latihan untuk menang' — bukan bolos. '練習のための練習' justru dikritik penulis di awal sebagai hal yang salah arah.",
        evidence: "休養することが試合にとって、今、最もするべきことだとすれば、休養こそ勝つための練習といえるときがあるのです。"
      }
    ]
  },
  {
    level: "N2",
    id: "dokkai-kaishazutome",
    title: "会社勤めの気楽さ",
    passage:
`会社勤めの生活は楽だった。
楽しくはないが、楽だった。
ずっと一人で生きてきた後で、集団に入ってみると、その居心地（いごこち）の良さ、安楽さに驚くのである。一人の時は、朝目覚めて寝るまで「何をすべきか」という判断、決定を自分でしなければならない。つまり、それを「自由」というのだが、実力のない者には自由は重すぎる。一日中、選択（せんたく）と決断をし、その結果を自分一人でひき受けねばならない。`,
    questions: [
      {
        qText: "筆者によると、なぜ会社勤めが楽だったのか。",
        options: ["実力があれば、自由にできる部分もあるから", "周囲の協力が得られれば、時間を自由に使えるから", "自分の能力に適した仕事が与えられ無理がないから", "自分一人で決めることも責任を取ることもしなくてすむから"],
        correctAns: "自分一人で決めることも責任を取ることもしなくてすむから",
        explanation: "Penulis menjelaskan bahwa saat sendiri, SEMUA keputusan dan tanggung jawabnya harus dipikul sendirian sepanjang hari — itu terasa berat ('自由は重すぎる'). Bekerja di perusahaan (masuk kelompok) terasa nyaman & mudah justru karena beban mengambil-keputusan-sendiri itu berkurang.",
        evidence: "一日中、選択（せんたく）と決断をし、その結果を自分一人でひき受けねばならない。"
      }
    ]
  }
];
