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
  },
  {
    level: "N4",
    id: "dokkai-mezamashi-dokei",
    title: "目覚まし時計",
    passage:
`さとう　「今月から仕事の時間が早くなったそうだね。」
すずき　「ええ。でも、朝仕事の時間に間に合わなくて……。」
さとう　「えっ、間に合わない？」
すずき　「［　１　］。」
さとう　「ふん、どんな時計？」
すずき　「大きな音が出る時計です。ベッドのそばに四つおきました。」
さとう　「へえ、四つも！いっしょに音が出たら、とても大きいね。」
すずき　「ええ、妹に［　２　］とおこられました。わたしも音は聞こえるんですが、すぐ止めてまたねてしまうんです。」
さとう　「そうか。」
すずき　「妹におこられてもいいから、早く起きたいんです。どうしたらいいでしょうか。」
さとう　「そうだね。まず、時計は［　３　］ようにするといいよ。たとえば、6時に起きたかったら5時50分に。」
すずき　「10分前ですね。」
さとう　「そう。それから、時計をいろいろな場所におくといいよ。四つの時計がぜんぶちがう場所にあったら、音を止めるために起きなければならないから。」
すずき　「なるほど！そうですね。すぐにやってみます。」`,
    questions: [
      {
        qText: "［　１　］には何を入れますか。",
        options: [
          "時計を買ったから、だいじょうぶです",
          "時計を買ったのに、起きられないんです",
          "お金がないから、時計が買えないんです",
          "店に行ったのに、いい時計がなかったんです"
        ],
        correctAns: "時計を買ったのに、起きられないんです",
        explanation: "Setelah kalimat ini, Suzuki tetap menjelaskan soal jamnya (jam besar, ditaruh 4 buah di dekat ranjang) — jadi dia SUDAH punya jam, tapi tetap tidak bisa bangun tepat waktu. Itu sebabnya さとう heran ('えっ、間に合わない？').",
        evidence: "すずき「大きな音が出る時計です。ベッドのそばに四つおきました。」"
      },
      {
        qText: "［　２　］には何を入れますか。",
        options: [
          "音がうるさくてこまる",
          "音が小さくて聞こえない",
          "なかなか起きられない",
          "もっと時間を早くしてください"
        ],
        correctAns: "音がうるさくてこまる",
        explanation: "Empat jam berbunyi bersamaan (さとう bilang 'とても大きいね' = pasti sangat berisik). Yang wajar membuat adik marah adalah BUNYINYA yang berisik/mengganggu, bukan soal jam kecil tak terdengar (itu kebalikannya) atau soal waktu.",
        evidence: "さとう「へえ、四つも！いっしょに音が出たら、とても大きいね。」"
      },
      {
        qText: "［　３　］には何を入れますか。",
        options: [
          "音が大きいものだけ使う",
          "時間が見やすいものを使う",
          "一つずつちがう時間に音が出る",
          "起きたい時間の少し前に音が出る"
        ],
        correctAns: "起きたい時間の少し前に音が出る",
        explanation: "Contoh yang diberikan さとう langsung menjelaskan ini: mau bangun jam 6, maka jam disetel 5:50 (10 menit sebelumnya). Jadi sarannya adalah menyetel alarm sedikit SEBELUM waktu bangun yang diinginkan.",
        evidence: "たとえば、6時に起きたかったら5時50分に。"
      },
      {
        qText: "これからすずきさんは時計をどこにおきますか。（Ilustrasi asli berupa 4 diagram kamar; di sini diringkas menjadi pilihan teks.）",
        options: [
          "4個の時計を全部、ベッドのそばの同じ机の上に並べておく",
          "2個の時計だけをベッドの頭の近くにまとめておく",
          "全部の時計をドアの近くの一か所に集めておく",
          "4個の時計を部屋のあちこち、ちがう場所にバラバラにおく"
        ],
        correctAns: "4個の時計を部屋のあちこち、ちがう場所にバラバラにおく",
        explanation: "さとう menyarankan menaruh jam di berbagai tempat yang BERBEDA-beda supaya Suzuki terpaksa bangun dan berjalan untuk mematikan tiap jam. Jadi ke depannya jam-jamnya akan disebar ke sudut-sudut kamar yang berlainan, bukan dikumpulkan jadi satu.",
        evidence: "それから、時計をいろいろな場所におくといいよ。四つの時計がぜんぶちがう場所にあったら、音を止めるために起きなければならないから。"
      }
    ]
  },
  {
    level: "N4",
    id: "dokkai-pet-apartment",
    title: "ペットと住めるアパート",
    passage:
`さいきん犬やねこなどのペットといっしょに住めるアパートがふえてきています。10年前、この町にはペットと住めるアパートがほとんどありませんでしたが、去年はぜんぶのアパートの半分以上になりました。そして、今もふえつづけているそうです。
先月花田さんとおくさんがこの町のアパートにひっこしてきました。ひっこしてから、犬2ひきといっしょに住んでいます。花田さんは65さいで仕事をやめてから元気がありませんでしたが、犬といっしょにいて気持ちが明るくなったそうです。おくさんは体がじょうぶになりました。ひっこす前は足が悪くて、ほとんど家の中にいましたが、今は毎日犬といっしょにさんぽしています。二人は、いやなことがあっても、かわいい2ひきを見ると気持ちがやさしくなって、毎日楽しくせいかつできると言っています。
わたしは今までペットがほしいと思ったことがありませんでした。ペットは毎日世話がたいへんです。食べ物やトイレの世話があるし、病気のときは病院につれて行かなければなりません。でも、花田さんの話を聞いて、わたしもペットと住んでみたいと思いました。`,
    questions: [
      {
        qText: "この町のアパートの説明で正しいものはどれですか。",
        options: [
          "今はペットといっしょに住めるアパートのほうが多い。",
          "今はペットといっしょに住めないアパートのほうが多い。",
          "今はほとんどのアパートでペットといっしょに住めない。",
          "今はどんなアパートでもペットといっしょに住める。"
        ],
        correctAns: "今はペットといっしょに住めるアパートのほうが多い。",
        explanation: "Tahun lalu jumlahnya sudah 半分以上 (lebih dari setengah) dari seluruh apartemen, dan terus bertambah (今もふえつづけている). Jadi sekarang apartemen yang MEMPERBOLEHKAN hewan peliharaan sudah lebih banyak.",
        evidence: "去年はぜんぶのアパートの半分以上になりました。そして、今もふえつづけているそうです。"
      },
      {
        qText: "花田さんのおくさんの説明で正しいものはどれですか。",
        options: [
          "仕事をやめたので、せいかつが楽しくなりました。",
          "足が悪くて、ほとんど家の中にいます。",
          "10年前から犬2ひきといっしょに住んでいます。",
          "この町にひっこしてから前より元気になりました。"
        ],
        correctAns: "この町にひっこしてから前より元気になりました。",
        explanation: "Istri Hanada dulu jarang keluar rumah karena kakinya sakit (ひっこす前), tapi SETELAH pindah ke kota ini dan tinggal dengan anjing, dia jadi bisa jalan-jalan tiap hari — badannya jadi sehat/kuat (じょうぶになりました). Jadi memang jadi lebih sehat SETELAH pindah, bukan sebelumnya.",
        evidence: "おくさんは体がじょうぶになりました。ひっこす前は足が悪くて、ほとんど家の中にいましたが、今は毎日犬といっしょにさんぽしています。"
      },
      {
        qText: "「ペットと住んでみたい」と思ったのはどうしてですか。",
        options: [
          "ペットの世話が10年前よりかんたんになったから",
          "ペットといっしょにせいかつするのは楽しそうだから",
          "ペットと住めるアパートがさいきんふえてきたから",
          "ペットは食べ物やトイレの世話があるから"
        ],
        correctAns: "ペットといっしょにせいかつするのは楽しそうだから",
        explanation: "Penulis awalnya berpikir memelihara hewan itu repot (世話がたいへん), tapi setelah dengar cerita keluarga Hanada yang jadi bahagia dan sehat bersama anjingnya, dia jadi ingin ikut memelihara — karena kelihatannya HIDUP BERSAMA HEWAN itu MENYENANGKAN, bukan karena alasan praktis lainnya.",
        evidence: "でも、花田さんの話を聞いて、わたしもペットと住んでみたいと思いました。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-tabeawase",
    title: "食べ合わせと飲み合わせ",
    passage:
`日本には「食べ合わせ」と言う言葉がある。食べ合わせとは食事のときに一緒に食べると体にいいとか、体に悪いという組み合わせのことである。少し前の時代なら子供でも一つや二つは必ず言えるような常識だった。うっかり食べ合わせの悪いものを食べてしまって、ものすごく悪いことをしたかのように親に怒られたという人もいる。
最も有名な例として、うなぎと梅干を一緒に食べるとよくないと言われている。天ぷらとスイカを一緒に食べるのは本当にお腹を壊す原因になるし、きゅうりとトマトはお互いの栄養を弱くしてしまうのだそうだ。（中略）
でも、医者の友人は食べ合わせよりもっと気をつけなければならないのは薬の飲み合わせだと言っていた。ちゃんと医者の説明を聞かずにいろんな薬を一緒に飲むと、予想しない効果が現れてしまうこともあるという。実際に、それが原因で別の病気になってしまった人もいるという。最近では、もらった薬の成分表や、飲み合わせの悪いものなどを書いたものが医者からもらえるし、ネットには専門のサイトもある。`,
    questions: [
      {
        qText: "食べ合わせの悪い例として、正しいのはどれか。",
        options: ["うなぎとてんぷら", "天ぷらと梅干", "トマトと天ぷら", "きゅうりとトマト"],
        correctAns: "きゅうりとトマト",
        explanation: "Teks menyebutkan 3 pasangan buruk secara eksplisit: うなぎ×梅干, 天ぷら×スイカ, dan きゅうり×トマト. Dari pilihan yang ada, hanya きゅうりとトマト yang persis disebutkan di teks.",
        evidence: "きゅうりとトマトはお互いの栄養を弱くしてしまうのだそうだ。"
      },
      {
        qText: "食べ合わせよりもっと気をつけなければならないのは薬の飲み合わせだとあるが、どうしてか。",
        options: [
          "常識として薬の飲み合わせは子どもの頃からよく知られているから。",
          "薬の飲み合わせが悪くておなかを壊してしまうことになるから。",
          "薬の飲み合わせが悪いと、別の病気になってしまう可能性があるから。",
          "薬の飲み合わせの悪いものは医者しか分からないから。"
        ],
        correctAns: "薬の飲み合わせが悪いと、別の病気になってしまう可能性があるから。",
        explanation: "Teman dokter bilang minum obat sembarangan bisa menimbulkan 予想しない効果 (efek tak terduga), dan disebutkan langsung ada orang yang jadi sakit lain (別の病気) gara-gara itu — itulah alasan kenapa飲み合わせ lebih perlu diwaspadai.",
        evidence: "実際に、それが原因で別の病気になってしまった人もいるという。"
      },
      {
        qText: "この文章を書いた人が一番伝えたいことは何か。",
        options: [
          "食べ合わせが悪いと、お腹を壊す原因になるので気をつけたほうがいい。",
          "薬の飲み合わせが悪いと、予想しない効果が現れてしまうこともある。",
          "薬の飲み合わせの悪いものを書いたものは医者からもらわなければならない。",
          "最近は、ネットには薬の飲み合わせについての専門のサイトも出てきた。"
        ],
        correctAns: "薬の飲み合わせが悪いと、予想しない効果が現れてしまうこともある。",
        explanation: "Seluruh paragraf terakhir (bagian paling penting, ditandai dengan 'でも' yang membalik topik dari makanan ke obat) berpusat pada peringatan soal 飲み合わせ obat yang bisa menimbulkan efek tak terduga — ini inti pesan penulis, bukan sekadar detail soal makanan atau website.",
        evidence: "薬の飲み合わせよりもっと気をつけなければならないのは薬の飲み合わせだと言っていた。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-tanoshinde-benkyou",
    title: "楽しんで勉強する人",
    passage:
`学校では、難しい顔をしていると一生懸命に勉強していると見てくれる。険しい表情をして、額に汗を流して勉強していると「偉いね」と言われる。
しかし、これは、本当によい勉強法ではない。難しくて面白くないと感じることは、身につかないことが目に見えている。勉強は、楽しいと感じる人ほど、身につき、成績もよくなるのだ。
中学生のころ、西岡君という友人がいった。彼は数学や理科は誰にも負けないくらい、いつも成績がよかった。そんな西岡君は、いつも楽しそうな表情をして勉強をしているのだ。難しい顔をして勉強することがよいことだと思っていた私は、いつも不思議だった。数学や理科の話をすると、笑いながら教えてくれる。
ある日、西岡君に「なぜそんなに成績がいいの」と聞いてみたことがある。すると「楽しいからだよ」というあっさりした返事が返ってきた。
学生のころに聞いた言葉は、そのとき軽く聞き流していた。しかし、実際に社会に出て、仕事のできる人や頭の切れる人は、決まって「楽しんでいる人」だ。難しく険しい表情をしている人は、仕事が遅くて、質が悪い。嫌いだという感情があると、スピードが落ちて、熱心さ、集中力、根気が欠けてしまう。
私は昔、難しい顔をしている人が頑張っている人だと思っていたが、大きな間違いだったのだ。本当に頑張って成果を発揮できる人は、楽しんでいる人なのだ。`,
    questions: [
      {
        qText: "険しい表情とあるが、どのような表情か。",
        options: ["悲しい顔", "難しい顔", "怒った顔", "迷った顔"],
        correctAns: "難しい顔",
        explanation: "Kalimat pertama teks membandingkan '難しい顔をしている' dengan '険しい表情をして' sebagai dua penyebutan untuk hal yang sama (murid yang terlihat sedang belajar keras), jadi 険しい表情 = 難しい顔.",
        evidence: "学校では、難しい顔をしていると一生懸命に勉強していると見てくれる。険しい表情をして、額に汗を流して勉強していると「偉いね」と言われる。"
      },
      {
        qText: "いつも不思議だったとあるが、何を指しているか。",
        options: [
          "西岡君がクラスの中で成績が一番よかったこと",
          "西岡君が笑いながら勉強を教えてくれたこと",
          "成績のいい西岡君がいつも楽しそうに勉強していたこと",
          "成績のいい西岡君が険しい表情をして勉強していたこと"
        ],
        correctAns: "成績のいい西岡君がいつも楽しそうに勉強していたこと",
        explanation: "Penulis percaya belajar itu harus dengan wajah serius/susah (難しい顔), tapi Nishioka yang nilainya bagus justru SELALU terlihat senang saat belajar — kontradiksi inilah yang bikin penulis heran (いつも不思議だった).",
        evidence: "そんな西岡君は、いつも楽しそうな表情をして勉強をしているのだ。難しい顔をして勉強することがよいことだと思っていた私は、いつも不思議だった。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-wagasa-shokunin",
    title: "和傘職人",
    passage:
`先日、友人を訪ねて岐阜に行きました。待ち合わせの時間まで少し時間があったので古い和傘の店があったので入ってみると、「いらっしゃいませ」と元気な声で店の主人が迎えてくれました。
和傘作りは江戸時代から続く技術で、明治時代まではどこの町にも必ず1人や2人職人（注）がいたそうです。しかし、日本に西洋文化が入ってくると、今私たちが日頃使っているような、作るのも簡単で値段も安い洋傘がいっきに全国に広まりました。
今年79歳になる主人の加藤さんはいま、各県に1人か2人いるかいないかという和傘職人（注）の1人です。和傘づくりをやめようと思ったことがあります。そんなある日、たまたま店の前を通りかかった外国のお客さんが「和傘は日本人の性格をとてもよくあらわしているね」と言ったのを聞いて、「ああ、やめちゃだめだ」と、考え直したそうです。
加藤さんは、「まだまだ元気だから、あと10年は大丈夫。」と笑顔を見せてくれましたが、わたしはとてもさびしい気持ちになりました。
（注）職人：身につけた技術によって物を作り出したりする職業の人。`,
    questions: [
      {
        qText: "どうして明治時代以降、洋傘は全国に広まりましたか。",
        options: [
          "和傘より質がよいし、もっと丈夫だし",
          "和傘より値段が安いし、作り方も簡単だし",
          "和傘より材料が高級だし、作り方も簡単だし",
          "和傘よりデザインがいいし、美しく見えるし"
        ],
        correctAns: "和傘より値段が安いし、作り方も簡単だし",
        explanation: "Teks secara langsung menyebut ciri payung Barat yang menyebar itu: '作るのも簡単で値段も安い' (mudah dibuat dan murah harganya). Bukan soal kualitas, bahan mewah, atau desain.",
        evidence: "作るのも簡単で値段も安い洋傘がいっきに全国に広まりました。"
      },
      {
        qText: "「ああ、やめちゃだめだ」と、考え直したとあるが、その理由は何か。",
        options: [
          "日本では和傘職人は1人か2人しか残らないから",
          "和傘の好きな外国人がどんどん増えてきたから",
          "和傘作りの必要な技術はあまり高くないから",
          "和傘作りの伝統を守り続けたいと思うから"
        ],
        correctAns: "和傘作りの伝統を守り続けたいと思うから",
        explanation: "Ucapan turis asing bahwa payung tradisional 'とてもよく表わしている' karakter orang Jepang membuat Kato menyadari nilai budaya/tradisi kerajinannya, sehingga ia berubah pikiran untuk terus melestarikan tradisi itu, bukan karena alasan lain.",
        evidence: "外国のお客さんが「和傘は日本人の性格をとてもよくあらわしているね」と言ったのを聞いて、「ああ、やめちゃだめだ」と、考え直したそうです。"
      },
      {
        qText: "本文と合っているものはどれか。",
        options: [
          "和傘作りの伝統を守るのは大切だが、難しいことだ。",
          "和傘作りの職人はたくさんいるが、一人前のは少ない。",
          "職人の加藤さんが和傘作りを続けるのは幸い。",
          "職人の加藤さんは和傘作りの伝統を守るのに自信がある。"
        ],
        correctAns: "和傘作りの伝統を守るのは大切だが、難しいことだ。",
        explanation: "Sekarang di tiap prefektur cuma ada 1-2 pengrajin (和傘職人), dan penulis merasa さびしい気持ち (sedih) saat mendengar Kato bilang cuma bisa bertahan 10 tahun lagi — menunjukkan bahwa melestarikan tradisi ini penting tapi terancam punah/sulit dipertahankan.",
        evidence: "今年79歳になる主人の加藤さんはいま、各県に1人か2人いるかいないかという和傘職人の1人です。"
      }
    ]
  },
  {
    level: "N3",
    id: "dokkai-paris-inu-fun",
    title: "犬のフンとマナー",
    passage:
`フランスのパリでは犬を飼っている人が多いが、散歩につれていく犬がアパートの玄関を出たところでフンをしても、それをかたづける人はだれもいないと、パリに長く住んでいる日本人が書いています。東京の住宅地を歩いていると、私がよく見る犬の散歩には、わりばし（注１）と紙袋を持っている人が多いので、フンで道路を汚すことを悪いと考えている人は日本のほうが多いのではないかと思います。フランスでは犬を散歩させる人がフンをかたづけるのは、掃除をする人の仕事をとってしまうのだというのがふつうの考えのように思えるからです。
しかし、その考えはおかしいと思います。町の中で犬をつれて歩くには、町の美しさを守るという気持ちが必要なのではないでしょうか。なぜかそう思ったかというと、「パリの歩道には犬のフンがとても多く、それをかたづけるためには年間7000万フラン（注２）（約12億円）かかる」という新聞記事を読んだからです。そのお金はだれが出しているのでしょうか。
（注１）わりばし：使うときに二つに割るはし。
（注２）フラン：フランス・ベルギーなどの旧通貨単位。`,
    questions: [
      {
        qText: "何が日本のほうが多いのか。",
        options: [
          "犬を散歩につれていく人",
          "犬のフンをかたづけようとしない人",
          "わりばしと紙袋を持っている人",
          "フンで道を汚すことを悪いと考えている人"
        ],
        correctAns: "フンで道を汚すことを悪いと考えている人",
        explanation: "Kalimat ini muncul persis setelah penulis menjelaskan banyak orang Jepang bawa sumpit+kantong kertas untuk membersihkan kotoran anjing — kesimpulannya adalah orang yang MENGANGGAP mengotori jalan itu buruk (bukan sekadar yang bawa alat) lebih banyak di Jepang.",
        evidence: "フンで道路を汚すことを悪いと考えている人は日本のほうが多いのではないかと思います。"
      },
      {
        qText: "ふつうの考えとは、ここではどんな考えか。",
        options: [
          "フンで道路を汚すことを悪いと考える必要はない",
          "犬を散歩させる人が犬のフンをかたづける必要はない",
          "掃除をする人が町の美しさを守る必要はない",
          "フンをかたづけるのはお金がかかると考える必要はない"
        ],
        correctAns: "犬を散歩させる人が犬のフンをかたづける必要はない",
        explanation: "Kalimat menjelaskan bahwa di Paris, membersihkan kotoran anjing dianggap 'mengambil alih pekerjaan petugas kebersihan' — artinya pandangan umum di sana adalah PEMILIK ANJING TIDAK PERLU membersihkan sendiri kotoran anjingnya.",
        evidence: "フランスでは犬を散歩させる人がフンをかたづけるのは、掃除をする人の仕事をとってしまうのだというのがふつうの考えのように思えるからです。"
      }
    ]
  },
  {
    level: "N2",
    id: "dokkai-bunshou-tanoshisa",
    title: "文章を書く楽しさ",
    passage:
`これはビジネス文書に限ったことではないのだが、何であれ文書を書いていると、少しばかり緊張感を覚えるものだ。書きながら、頭の中でこんなことを考えている。
この書き方でいいのかな。
これ、ひどく下手な書き方じゃないだろうか。
これでわかるかな。
そういう気がしきりに（注１）して、ちょっとしたプレッシャーになっている。だからこそ、文章を書くのは苦手だ、と思っている人もいるのじゃないだろうか。
しかし、その逆もまた真である。文章を書く面白さとは、そういうプレッシャーを感じながら、なんとか諸問題をクリアして、一応のものを書き上げることにあるのだ。
テレビゲームが楽しいのと同じ理屈（りくつ）（注２）である。あれは、攻略（こうりゃく）する（注３）のが簡単ではない様々な障害をかわしながら（注４）、次々に問題を解決していって、なんとかクリアしていくところが面白いのである。むずかしいからこそ、うまくやったときに楽しいのだ。
文章を書くのも、そういうことである。これでいいのかな、と一抹の（注５）不安を抱えながら、なんとか書いていくってことを楽しまなければならない。
別の言い方にすると、文章というものは、書く人に対して、うまく書いてくれ、と要求してくるのである。なぜなら、文章とは人と人とのコミュニケーションの道具だからだ。この例外は、自分だけにわかればいいメモと、絶対に他人に見せない日記だけである。
それ以外の文章は、必ず、書く人間のほかに、読む人間がいて完成されるのだ。そして、書いた人の伝えたかったことが、読んだ人にちゃんとわかってこそ、文章は役をはたしたことになる。
（清水義範『スラスラ書ける！ビジネス文書』による）
（注１） しきりに：何度も
（注２） 理屈：ここでは、考え方
（注３） 攻略する：うまく解決する
（注４） かわしながら：避けながら
（注５） 一抹の：ほんの少しの`,
    questions: [
      {
        qText: "筆者は、文章を書くときに何がプレッシャーになっていると述べているか。",
        options: [
          "このまま最後まで書き上げられるか不安だという気持ち",
          "読む人が期待する書き方をしているかという気持ち",
          "自分は字を書くのが下手だから嫌だという気持ち",
          "書きたいことがうまく書けているかという気持ち"
        ],
        correctAns: "読む人が期待する書き方をしているかという気持ち",
        explanation: "Tekanan yang disebut penulis adalah pikiran berulang 'apa cara menulis ini sudah benar/dimengerti' (この書き方でいいのかな、これでわかるかな) — itu semua soal apakah tulisannya sudah sesuai harapan PEMBACA, bukan soal selesai/tidaknya atau bakat menulis.",
        evidence: "この書き方でいいのかな。これ、ひどく下手な書き方じゃないだろうか。これでわかるかな。そういう気がしきりにして、ちょっとしたプレッシャーになっている。"
      },
      {
        qText: "そういうことであるとはどういうことか。",
        options: [
          "様々な障害をクリアしていくことがむずかしい。",
          "プレッシャーを忘れ、いろいろ考えるのが楽しい。",
          "苦労して問題を片付け、課題を仕上げるのが楽しい。",
          "不安を抱えたままでは問題を解決するのがむずかしい。"
        ],
        correctAns: "苦労して問題を片付け、課題を仕上げるのが楽しい。",
        explanation: "Kalimat ini merujuk pada perbandingan dengan game: keseruan justru muncul dari menyelesaikan rintangan yang sulit satu per satu sampai berhasil (クリアしていくところが面白い) — menulis juga begitu, susahnya justru bagian yang bikin seru saat berhasil diselesaikan.",
        evidence: "むずかしいからこそ、うまくやったときに楽しいのだ。文章を書くのも、そういうことである。"
      },
      {
        qText: "読む人間がいて完成されるとはどういうことか。",
        options: [
          "文章の価値を決めるのは読み手の存在だ。",
          "文章が成立するには読み手の存在が必要だ。",
          "文章は人に読まれることでよりよいものになる。",
          "文章は読み手の要求にこたえることでできあがる"
        ],
        correctAns: "文章は読み手の要求にこたえることでできあがる",
        explanation: "Paragraf sebelumnya bilang tulisan itu 'menuntut' penulisnya menulis dengan baik karena fungsinya adalah komunikasi ANTAR-orang — jadi tulisan baru benar-benar 'selesai/berfungsi' (役をはたした) kalau pesan penulis berhasil dipahami pembaca, yaitu memenuhi tuntutan si pembaca.",
        evidence: "文章というものは、書く人に対して、うまく書いてくれ、と要求してくるのである……書いた人の伝えたかったことが、読んだ人にちゃんとわかってこそ、文章は役をはたしたことになる。"
      }
    ]
  },
  {
    level: "N2",
    id: "dokkai-hamburger-henkin",
    title: "返金キャンペーン",
    passage:
`大手ハンバーガー店が今月16日から30日まで、新商品がまずかったら全額返金するというキャンペーン（注）を実施する。通信販売などでは、注文した商品が気に入らなければその代金を客に返金するという保証制度は一般的だが、ハンバーガー店のような外食産業では非常に珍しい試みだ。味への自信を示すことが目的で、全国で一斉に行われる。返金は当日限りで、期間中1人1回のみ、それから商品を半分以上食べていないことが条件だ。
（注）キャンペーン：ここでは、販売方法`,
    questions: [
      {
        qText: "大手ハンバーガー店が今月16日から実施するのは次のどれか。",
        options: [
          "新商品がまずければいつでも全額返金する。",
          "どの商品でもまずければ条件つきで全額返金する。",
          "新商品の味が気に入らなければ条件つきで全額返金する。",
          "どの商品でも味が気に入らなければ1回だけ全額返金する。"
        ],
        correctAns: "新商品の味が気に入らなければ条件つきで全額返金する。",
        explanation: "Yang diberi jaminan uang kembali hanyalah 新商品 (produk BARU) saja — bukan semua produk — dan ada syarat tambahan (当日限り, 1人1回のみ, belum dimakan setengahnya), jadi ini pengembalian dana BERSYARAT khusus produk baru.",
        evidence: "新商品がまずかったら全額返金するというキャンペーン……返金は当日限りで、期間中1人1回のみ、それから商品を半分以上食べていないことが条件だ。"
      }
    ]
  },
  {
    level: "N2",
    id: "dokkai-mori-no-kaori",
    title: "森の香りの物質",
    passage:
`森はいつも独特な香りに包まれ、さわやかに感じられるが、それはある物質の効果によるものだ。その物質は、木々が動けない体を守るために自ら作り出すもので、木につく虫や細菌（注）の増加を防いだり、落ち葉や枯れ木が腐ったときなどに生じる嫌なにおいを消したりする働きを持っている。さらにその物質には、人間の神経を安定させる効果もあるという。私たちが森林に入るとリラックスした気分になるのは、このためだ。
（注）細菌：非常に小さくて目に見えない生物`,
    questions: [
      {
        qText: "ある物質の働きについて、この文章からわかることは何か。",
        options: [
          "人間の持つ嫌なにおいを防ぐ。",
          "人々の気持ちを落ち着かせる。",
          "落ち葉や枯れ木を腐りにくくする。",
          "木々がもともと持っているにおいを消す。"
        ],
        correctAns: "人々の気持ちを落ち着かせる。",
        explanation: "Teks menyebut zat itu punya '人間の神経を安定させる効果' (efek menenangkan saraf manusia), yang menjelaskan kenapa orang merasa rileks di hutan — itulah efek terhadap MANUSIA yang ditanyakan, bukan efek pada daun/kayu yang membusuk (itu efek ke lingkungan, bukan ke perasaan orang).",
        evidence: "その物質には、人間の神経を安定させる効果もあるという。私たちが森林に入るとリラックスした気分になるのは、このためだ。"
      }
    ]
  },
  {
    level: "N2",
    id: "dokkai-inu-aisatsu",
    title: "イヌの挨拶行動",
    passage:
`イヌの散歩をしていると、最近ではイヌも挨拶の仕方を忘れてしまったのではないかと思ってしまいます。集団行動を経験したことがあるイヌ、もしくは（注１）、飼い主からイヌらしい教育を受けて順位制（注２）を感じることができるようになったイヌは、道でほかのイヌにすれ違い近づいたときには挨拶らしいことをします。ところが、集団行動の経験もなく、家でも甘やかされて育ったイヌは、現代のヒト社会のように挨拶をしないように見えます。挨拶をするイヌが、ほかの挨拶なしのイヌに対して威嚇する（注３）ことが観察されます。ところが、この挨拶犬が子イヌと遭遇したときには、子イヌが挨拶をできなくても威嚇をしないことが多いのです。挨拶犬にとって子イヌであるというシグナルがなんなのかわかりませんが、とにかく子イヌと成犬とを区別したうえで挨拶のあるなしを判断しているようです。
イヌの挨拶行動は、生得的（注４）あるいは習得的（学習的）のどちらでしょうか？順位制にしたがった行動ができるようになったイヌでは、イヌ社会での経験がなくてもある程度の挨拶行動ができることから、生得的であるといえます。また、より儀式的な挨拶行動が円滑に（注５）実行されるためには、ほかのイヌとの集団生活があったほうがよいことから、習得的な部分もあるといえるでしょう。
（注1）もしくは：または
（注2）順位制：上下関係にもとづいてできた順序の決まり
（注3）威嚇する：ここでは、ほえて相手を怖がらせる
（注4）生得的：生まれたときから持っている
（注5）円滑に：スムーズに、滑らかに`,
    questions: [
      {
        qText: "この文章によると、挨拶をしない、またはできないイヌはどれか。",
        options: [
          "子イヌと成犬を区別できないイヌ",
          "挨拶をしない親イヌに育てられた子イヌ",
          "他のイヌと一緒に生活をしたことがあるイヌ",
          "イヌ社会の経験も飼い主による教育もないイヌ"
        ],
        correctAns: "イヌ社会の経験も飼い主による教育もないイヌ",
        explanation: "Teks menyebut anjing yang挨拶をしない adalah yang tidak punya 集団行動の経験 DAN tidak dapat pendidikan dari pemilik (家でも甘やかされて育った) — jadi persis kombinasi 'tanpa pengalaman sosial + tanpa pendidikan pemilik'.",
        evidence: "集団行動の経験もなく、家でも甘やかされて育ったイヌは、現代のヒト社会のように挨拶をしないように見えます。"
      },
      {
        qText: "この文章によると、どんなイヌがどんなイヌにほえて、怖がらせるか。",
        options: [
          "挨拶できるイヌが挨拶しない成犬に",
          "挨拶できるイヌが挨拶しない子イヌに",
          "挨拶できないイヌが挨拶する成犬に",
          "挨拶できないイヌ挨拶する子イヌに"
        ],
        correctAns: "挨拶できるイヌが挨拶しない成犬に",
        explanation: "Teks bilang anjing yang bisa menyapa (挨拶をするイヌ) akan mengancam anjing lain yang TIDAK menyapa (威嚇する), TAPI pengecualiannya adalah kalau lawannya anak anjing (子イヌ) — jadi yang diancam itu anjing DEWASA yang tidak menyapa, bukan anak anjing.",
        evidence: "挨拶をするイヌが、ほかの挨拶なしのイヌに対して威嚇することが観察されます。ところが、この挨拶犬が子イヌと遭遇したときには……威嚇をしないことが多いのです。"
      },
      {
        qText: "筆者は、イヌの挨拶行動についてどのように述べているか。",
        options: [
          "イヌ社会での経験より飼い主の教育があったほうが、スムーズにできる。",
          "イヌ社会での経験は必ずしも必要ではないが、あればスムーズにできる。",
          "イヌ社会での集団生活と飼い主の教育によって初めて習得できるものだ。",
          "イヌ社会での集団生活を経験することによって始めて習得できるものだ。"
        ],
        correctAns: "イヌ社会での経験は必ずしも必要ではないが、あればスムーズにできる。",
        explanation: "Paragraf terakhir menyimpulkan perilaku ini SEBAGIAN bawaan lahir (生得的 — bisa muncul tanpa pengalaman sosial, asal paham 順位制), dan SEBAGIAN lagi terlatih (習得的 — akan lebih lancar/円滑 kalau pernah hidup berkelompok). Jadi pengalaman sosial bukan syarat MUTLAK, tapi membantu kelancarannya.",
        evidence: "順位制にしたがった行動ができるようになったイヌでは、イヌ社会での経験がなくてもある程度の挨拶行動ができることから、生得的であるといえます。また、より儀式的な挨拶行動が円滑に実行されるためには、ほかのイヌとの集団生活があったほうがよいことから、習得的な部分もあるといえるでしょう。"
      }
    ]
  },
  {
    level: "N2",
    id: "dokkai-shinshakaijin-advice",
    title: "新社会人へのアドバイス（A・B）",
    passage:
`A
関係の複雑さに驚いているのではないでしょうか。こんなはずではなかったと、抱いていた理想が崩れそうになることがあるかもしれません。特に、自分とは異なる価値観を持った上司や先輩から無理な仕事を頼まれたときなど、強くそう感じることでしょう。時には先輩の言葉につい反発（注１）したくなることもあるでしょう。しかし、そんなときにはまず相手の考え方を受け入れてみてください。信頼関係を築くにはある程度の時間が必要であり、その後で自分の考えを述べればよいのです。それまでは自分を抑えることも大切で、それが社会人としての訓練でもあります。

B
人間にとって心身ともに健康であることが理想的だが、新しく社会に出た若者たちは、時にはうまくいかないことに出会い、自信を失うこともあるだろう。経験から言うと、同僚や先輩の温かい言葉が耳に入らなくなってしまうのは、そういう、自分に自信がなくなったときであることが多い。その結果、今まで築いてきた人間関係まで壊してしまうことさえある。自分の周りの人たちを大切にして、助言（注２）を生かしていく気持ちを持つためには、まず自分のこれまでの努力を肯定的にとらえてみよう。結果が完璧でなくても、「よくやった」と自分自身に言えると、他の人の言葉も素直に聞くことができるようになる。
（注１）反発する：言い返す
（注２）助言：アドバイス`,
    questions: [
      {
        qText: "AとBに共通して述べられていることは何か。",
        options: [
          "職場での人間関係を大事にするにはどうすればいいか。",
          "職場で自分の努力を認めてもらうにはどうすればいいか。",
          "社会人になって職場で自信をなくした時、どうすればいいか。",
          "社会に出て周囲の人と自分の考えが違った時、どうすればいいか。"
        ],
        correctAns: "職場での人間関係を大事にするにはどうすればいいか。",
        explanation: "A membahas cara menghadapi atasan/senior yang beda nilai (menerima dulu sebelum bicara pendapat sendiri) dan B membahas cara menjaga hubungan dengan rekan kerja saat kehilangan percaya diri (menghargai diri sendiri dulu supaya bisa menerima nasihat orang). Keduanya sama-sama soal MENJAGA HUBUNGAN di tempat kerja, dari sudut berbeda.",
        evidence: "A: 信頼関係を築くにはある程度の時間が必要であり…… / B: 自分の周りの人たちを大切にして、助言を生かしていく気持ちを持つためには……"
      },
      {
        qText: "AとBでは新社会人にどのようにアドバイスをしているか。",
        options: [
          "Aでは自分の価値観を重視することが大切だと述べ、Bでは自分の努力してきた姿を振り返ることが大切だと述べている。",
          "Aでは周りの人に自分の考えを伝えることが大切だと述べ、Bでは相手に認めてもらうことが大切だと述べている。",
          "Aでは相手の考えを尊重することが大切だと述べ、Bでは自分の努力を認めることが大切だと述べている。",
          "Aでは相手の意見を認めることが大切だと述べ、Bでは周りの人の言葉を聞くことが大切だと述べている。"
        ],
        correctAns: "Aでは相手の意見を認めることが大切だと述べ、Bでは周りの人の言葉を聞くことが大切だと述べている。",
        explanation: "A menyarankan menerima dulu cara berpikir lawan bicara (まず相手の考え方を受け入れてみてください) sebelum menyampaikan pendapat sendiri. B menyarankan mengakui usaha diri sendiri dulu supaya bisa mendengarkan kata-kata orang lain dengan tulus (他の人の言葉も素直に聞くことができるようになる) — jadi B berujung pada MENDENGARKAN kata-kata sekitar, bukan hanya soal mengakui diri sendiri saja.",
        evidence: "A: まず相手の考え方を受け入れてみてください。 / B: 他の人の言葉も素直に聞くことができるようになる。"
      }
    ]
  },
{level:"N5", id:"dokkai-keiko-toshokan", title:"ケイコさんが住む町",
passage:"わたしは小さな町にすんでいます。この町には2つのこうえんと大きなとしょかんがあります。わたしは本がすきだからよくとしょかんで本を読みます。",
questions:[{qText:"ケイコさんはよく何をしますか。",options:["こうえんで本を読む。","小さなとしょかんに行く。","としょかんで本を読む。","こうえんで本を書く。"],correctAns:"としょかんで本を読む。",explanation:"「わたしは本がすきだからよくとしょかんで本を読みます」と直接書かれています。",evidence:"わたしは本がすきだからよくとしょかんで本を読みます。"}]},
{level:"N5", id:"dokkai-kouki-eigo", title:"コウキさんのすきなこと",
passage:"わたしはべんきょうがすきです。今はえいごのべんきょうをしています。なぜかというと、わたしはえいごでじょうずに話したいからです。えいごはむずかしいですが、もっとべんきょうしたいです。",
questions:[{qText:"コウキさんはどうしてえいごをべんきょうしていますか。",options:["えいごのべんきょうはむずかしいから。","えいごをじょうずに話したいから。","学校でべんきょうしたいから。","えいごのべんきょうがきらいだから。"],correctAns:"えいごをじょうずに話したいから。",explanation:"「なぜかというと」の後に理由が続きます：えいごで上手に話したいから。",evidence:"なぜかというと、わたしはえいごでじょうずに話したいからです。"}]},
{level:"N5", id:"dokkai-rina-ryokou", title:"リナさんがあしたすること",
passage:"わたしは今日は友だちとえいがをみました。とてもおもしろかったです。あしたはかぞくでりょこうに行きます。うみのちかくに行くからおいしいさかなを食べたいです。",
questions:[{qText:"リナさんはあした何をしますか。",options:["かぞくとりょこうに行く。","かぞくとえいがをみる。","友だちとさかなを食べる。","友だちとえいがをみる。"],correctAns:"かぞくとりょこうに行く。",explanation:"映画は今日の話で、明日は「かぞくでりょこうに行きます」と書かれています。",evidence:"あしたはかぞくでりょこうに行きます。"}]},
{level:"N5", id:"dokkai-natsuki-yuuko", title:"きっさてんに行く相談",
passage:"ナツキ「こんにちは。ひるごはんはもう食べましたか」\nユウコ「はい、いえで食べてきました。でも何かのみたいです」\nナツキ「わたしもコーヒーをのみたいです。きっさてんに行きますか」\nユウコ「そうしましょう。おちゃをのみながらあまいものを食べましょう」\nナツキ「きっさてんはちかくに2つあります。どちらに行きますか」\nユウコ「ちかいほうのきっさてんがいいです。あの学校のとなりにあります」\nナツキ「きっさてんに行ったあとはふくをかいに行きたいです」\nユウコ「わかりました。では先におちゃをのみに行きましょう」",
questions:[{qText:"ナツキさんとユウコさんは今から何をしますか。",options:["ユウコさんのいえでひるごはんを食べる。","学校のとなりのきっさてんに行く。","きっさてんのとなりにある学校に行く。","ちかくのみせにふくをかいに行く。"],correctAns:"学校のとなりのきっさてんに行く。",explanation:"ユウコさんが選んだのは「学校のとなり」にある近い方の喫茶店で、最後に「先にお茶を飲みに行きましょう」と決めています。",evidence:"ちかいほうのきっさてんがいいです。あの学校のとなりにあります"}]},
{level:"N5", id:"dokkai-sora-guitar", title:"ソラさんのおんがく",
passage:"先生「ソラさんがすきなことは何ですか」\nソラ「わたしはおんがくがすきです」\n先生「どんなおんがくがすきですか」\nソラ「日本のうたをよくききます。あと、ギターをひくのもすきです」\n先生「わたしも日本のうたがすきです。ギターはならっていますか」\nソラ「はい、小さいときからならっています。今日もかえったらいえでれんしゅうします」\n先生「ギターをひきながらうたをうたいますか」\nソラ「それはまだむずかしいです」\n先生「そうですか。いつかききたいです」",
questions:[{qText:"ソラさんは今日何をしますか。",options:["ギターをれんしゅうする。","あたらしいギターをかいに行く。","日本のうたをうたう。","ギターをならいに行く。"],correctAns:"ギターをれんしゅうする。",explanation:"「今日もかえったらいえでれんしゅうします」と直接言っています。",evidence:"今日もかえったらいえでれんしゅうします。"}]},
{level:"N5", id:"dokkai-nihongo-event", title:"日本語で話そうイベント",
passage:"みんなで日本語で話そう！\n土よう日にイベントがあります。みんなで日本語で話しましょう！日本語で話したい人ならだれでも来てください。\nイベントのこと\nとき：12月21日（日）午前11時から午後2時まで\nあけぼの公園に来てください\n・日本語をじょうずに話すことができない人も来ていいです。\n・来たい人は20日までに電話してください。（れんらく先：090-xxxx-2212）\n・ひるごはんをもってきてください。\n・雨の日はあけぼのカルチャーセンター1かいロビーに来てください。",
questions:[{qText:"イベントのきまりは何ですか。",options:["ひるごはんはもってこなくていいです。","日本語がじょうずな人に来てほしいです。","雨がふったらイベントはなくなります。","イベントに行きたい人は電話をします。"],correctAns:"イベントに行きたい人は電話をします。",explanation:"「来たい人は20日までに電話してください」という決まりがあります。お昼ご飯は持参必須、日本語が下手でも参加OK、雨の日は場所を変えるだけで中止にはなりません。",evidence:"来たい人は20日までに電話してください。"}]},

{level:"N4", id:"dokkai-jishin-tsukue", title:"地震のときの行動",
passage:"家や学校の中にいるときに地震が起きたら、つくえの下などに入るのがよいです。重い物があたまの上におちてきたらあぶないからです。でも、私が生まれた国では地震がほとんど起きないので、私はそのことを知りませんでした。だから、きのう地震が起きたときに、教室にいた人がつくえの下に入るのを見ておどろきました。",
questions:[{qText:"なぜ私はつくえの下に入ることを知らなかったのですか。",options:["重い物がおちてきたらあぶないから。","日本で地震が起きることを知らなかったから。","私の生まれた国にはあまり地震がないから。","みんながつくえの下に入るのを見ておどろいたから。"],correctAns:"私の生まれた国にはあまり地震がないから。",explanation:"「私が生まれた国では地震がほとんど起きないので、私はそのことを知りませんでした」と直接理由が書かれています。",evidence:"私が生まれた国では地震がほとんど起きないので、私はそのことを知りませんでした。"}]},
{level:"N4", id:"dokkai-ryouri-shumi", title:"料理がすきな理由",
passage:"私のしゅみは料理をすることです。子どものときから両親がご飯を作るのをよくてつだっていました。両親が作るご飯はとてもおいしいので、私も上手に作れるようになりたくてたくさんれんしゅうしました。なぜ料理をするのがすきかというと、上手に作れたときに食べた人がおいしかったと言ってくれるのがうれしいからです。",
questions:[{qText:"正しくないものはどれですか。",options:["私は料理のれんしゅうをたくさんした。","子どものときは料理をするのがきらいだった。","作った料理をほめてもらえるとうれしくなる。","父と母が作る料理はとてもおいしい。"],correctAns:"子どものときは料理をするのがきらいだった。",explanation:"子どもの頃から両親を手伝っていたと書かれており、嫌いだったとは述べられていません。他の3つは本文と一致します。",evidence:"子どものときから両親がご飯を作るのをよくてつだっていました。"}]},
{level:"N4", id:"dokkai-eigakan-michi", title:"映画館への行き方",
passage:"Ａ「ここからいちばん近い、映画館はどこですか」\nＢ「この道をまっすぐ歩いていくと、Ｃ駅があります。Ｃ駅から5分電車に乗ってＤ駅でおりると、駅を出てすぐ、映画館があります」\nＡ「ありがとうございます。Ｄ駅までは、バスでも行けますか」\nＢ「はい、行けます。Ｃ駅前のバス乗り場から1番バスに乗ると、10分でＤ駅に着きます。でも、バスの方がお金がかかります」\nＡ「わかりました。では、電車で行きます」",
questions:[{qText:"Ａさんは、このあと何をしますか。",options:["Ｃ駅までバスで行く。","Ｃ駅からバスに乗る。","Ｃ駅まで電車で行く。","Ｃ駅から電車に乗る。"],correctAns:"Ｃ駅から電車に乗る。",explanation:"Ａさんは「電車で行きます」と決めましたが、そもそも道をまっすぐ歩いてＣ駅まで行き、そこから電車に乗る手順です。",evidence:"では、電車で行きます"}]},
{level:"N4", id:"dokkai-hokkaido-ryokou", title:"北海道旅行の話",
passage:"Ａ「先週は学校が休みでしたが、何をしていましたか」\nＢ「家族で北海道に旅行してきました。とてもさむかったです」\nＡ「私は北海道に行ったことがないです。東京からとおいですか」\nＢ「少しとおいですが、東京から飛行機で2時間もかかりませんでした。」\nＡ「もっととおいと思っていました。北海道では何をしましたか」\nＢ「おいしい料理を食べました。魚を使った料理がおいしかったです」\nＡ「私も魚がすきなので行ってみたいです。何がいちばん楽しかったですか」\nＢ「大きな動物園に行ったのが楽しかったです。ペンギンがさんぽをしていたのがかわいかったです」",
questions:[{qText:"正しいものはどれですか。",options:["東京から北海道まで2時間以上かかった。","Ａさんは北海道に行ったときに魚の料理を食べた。","Ａさんは北海道が東京から近いと思っていた。","Ｂさんは北海道で大きな動物園に行った。"],correctAns:"Ｂさんは北海道で大きな動物園に行った。",explanation:"魚料理を食べたのはＢさん、飛行機は2時間もかからず、Ａさんは「もっと遠いと思っていた」＝実際は近いと思っていなかった、が全て他の選択肢を否定します。",evidence:"大きな動物園に行ったのが楽しかったです。"}]},
{level:"N4", id:"dokkai-fukushuu", title:"復習の大切さ",
passage:"みなさんは、新しいことを勉強したあとに「復習」をしていますか。何か新しいことを習ったあとは、復習をすることが大切です。復習をしないと、人は新しく習ったことをすぐにわすれてしまいます。\n人がどれくらいの間、新しく知ったことをおぼえていられるかを研究した人がいます。エビングハウスという人です。彼の研究から、人は一度新しいことをおぼえてもおぼえてからすぐにそのことをわすれ始めて、20分もするとおぼえたことの半分くらいはわすれてしまっているということがわかりました。そして1か月もすると、ほとんどわすれてしまうそうです。\nそうならないためには、復習をしなければなりません。何回も復習をしていくうちに、新しく習ったことをわすれにくくなっていきます。\n私は高校生のとき、勉強ができませんでした。文章を書いたり読んだりすることはよくできたのですが、授業で新しく習ったことをなかなかおぼえられなかったのです。しかし、先生に言われて授業のあとに何回も復習をするようにしたら、少しずつ勉強ができるようになっていきました。\n新しいことを勉強してもすぐにわすれてしまう人は、しっかり復習をするように気をつけるとよいでしょう。",
questions:[
{qText:"「復習」のせつめいとして正しいものはどれですか。",options:["何回もすることで新しく習ったことをおぼえていられるようになる。","これをしても、人は1か月もすると習ったことをわすれてしまう。","一度これをするだけで、新しく習ったことをずっとおぼえていられる。","これを何回もしてしまうと、勉強ができなくなる。"],correctAns:"何回もすることで新しく習ったことをおぼえていられるようになる。",explanation:"「何回も復習をしていくうちに、新しく習ったことをわすれにくくなっていきます」と書かれています。",evidence:"何回も復習をしていくうちに、新しく習ったことをわすれにくくなっていきます。"},
{qText:"エビングハウスの研究から何がわかりましたか。",options:["復習を何回もしても、習ったことを長い間おぼえていられないこと。","復習をしないと新しく習ったことをすぐにわすれてしまうこと。","復習をしなくても、長い間習ったことをおぼえていられること。","20分もすると、新しく習ったことをぜんぶわすれてしまうこと。"],correctAns:"復習をしないと新しく習ったことをすぐにわすれてしまうこと。",explanation:"20分で半分、1か月でほとんど忘れる、という研究結果は「復習しないと忘れる」ことを示しています（全部ではなく「ほとんど」なので④は不正確）。",evidence:"20分もするとおぼえたことの半分くらいはわすれてしまっている"},
{qText:"「私」についてのせつめいとして正しいものはどれですか。",options:["今は高校の先生だ。","今は高校生だ。","文章を書くのがきらいだ。","勉強ができないときがあった。"],correctAns:"勉強ができないときがあった。",explanation:"「私は高校生のとき、勉強ができませんでした」と過去の経験として書かれています（今は高校生でも先生でもありません）。",evidence:"私は高校生のとき、勉強ができませんでした。"}
]},
{level:"N4", id:"dokkai-pool-ryoukin", title:"あけぼのプールの利用案内",
passage:"あけぼのプールのご利用について\nプールをいつもきれいにご利用いただき、ありがとうございます。ルールと料金をかくにんしてください。\n※65歳以上の方は、18歳までの方と同じ料金で利用できます。\n【注意点】\n・あぶないので、プールのまわりを走ってはいけません。\n・12歳以下の人は、19歳以上の人といっしょでないとプールを利用できません。\n・食べ物や飲み物を持ってプールに入ってはいけません。\n・12月の最後の1週間と1月の最初の1週間は利用できません。\n・入り口でボールなどを借りることができます。\n\n【料金表】月曜日から金曜日／土曜日と日曜日\n5歳まで：0円／0円\n18歳まで：1,000円／1,200円\n19歳以上：1,500円／1,800円",
questions:[
{qText:"3歳、15歳、67歳の3人で水曜日に利用すると、料金はあわせていくらですか。",options:["2,000円","2,400円","2,500円","3,000円"],correctAns:"2,000円",explanation:"水曜日（平日）：3歳は5歳までなので0円、15歳は18歳までの1,000円、67歳は65歳以上なので18歳までと同料金の1,000円。合計0+1,000+1,000=2,000円。",evidence:"65歳以上の方は、18歳までの方と同じ料金で利用できます。"},
{qText:"あけぼのプールについてのせつめいとして正しいものはどれですか。",options:["どの日に利用しても料金は同じである。","飲み物を飲みながらプールでおよぐことができる。","プールは一年間いつでも利用することができる。","15歳の人は大人といっしょでなくても利用できる。"],correctAns:"15歳の人は大人といっしょでなくても利用できる。",explanation:"同伴が必要なのは「12歳以下」のみなので、15歳は一人で利用できます。平日/週末で料金は異なり、飲食物持込禁止、年末年始は休業です。",evidence:"12歳以下の人は、19歳以上の人といっしょでないとプールを利用できません。"}
]},

{level:"N3", id:"dokkai-cafe-shift", title:"アルバイトのメール",
passage:"2023年10月20日 15:00\n田中さん\nお疲れ様です。カフェ・プロヴァンスの川野です。\n明日、日曜日ですが、出勤するはずだったアルバイトの方が風邪をひいたため、来られなくなってしまいました。そこで、急なお願いで申し訳ありませんが、代わりに出勤していただけないでしょうか。\nもし田中さんに出勤していただけるようでしたら、明日は特別に時給を1,100円から1,200円にしようと思います。\nまた、日曜日に出勤していただけたら、代わりに平日を休みにしていただいてもかまいません。\n代わりの出勤が可能かどうか、メールか電話でお返事をいただけますか。\nよろしくお願いいたします。\n川野",
questions:[{qText:"このメールについて正しいのはどれか。",options:["明日出勤すれば、代わりに平日を休みにすることができる。","出勤するはずだったアルバイトの人が事故にあってしまった。","日曜日に出勤すればいつも、時給が1,100円から1,200円に上がる。","田中さんは元々、明日出勤することになっていた。"],correctAns:"明日出勤すれば、代わりに平日を休みにすることができる。",explanation:"「日曜日に出勤していただけたら、代わりに平日を休みにしていただいてもかまいません」と明記されています。欠勤理由は風邪、時給アップは明日限定の特別対応、田中さんは元々休みでした。",evidence:"日曜日に出勤していただけたら、代わりに平日を休みにしていただいてもかまいません。"}]},
{level:"N3", id:"dokkai-arigatou-gogen", title:"「ありがとう」の語源",
passage:"日本語の「ありがとう」という言葉は、二つの言葉から生まれました。「そこにあります」のような意味で使われる「ある」という言葉と、「難しい」という意味をもつ「難い」という言葉がひとつになったのです。\nそして「そこにある」のが「難しい」、つまり「簡単にはいかない」という意味が変化して、「簡単ではないことをしてくれたときのうれしい気持ち」をあらわす言葉になりました。\nだれかがあなたに、簡単にはできないようなうれしいことをしてくれたとき、「ありがとう」と言って、感謝の気持ちを伝えることが大事です。",
questions:[{qText:"筆者は「ありがとう」という言葉について何を言っているか。",options:["簡単なことでも、何かしてもらったら「ありがとう」と言うべきだ。","「ありがとう」は、ありえないという意味でも使われる。","「ありがとう」は簡単ではないことをしたことをすごいと思う気持ちを表す。","「ありがとう」は「ある」という言葉と「難い」という言葉からできている。"],correctAns:"「ありがとう」は「ある」という言葉と「難い」という言葉からできている。",explanation:"文章冒頭で語源として直接説明されています。",evidence:"「ある」という言葉と、「難しい」という意味をもつ「難い」という言葉がひとつになったのです。"}]},
{level:"N3", id:"dokkai-valentine", title:"バレンタインデー",
passage:"毎年、2月14日は「バレンタインデー」です。日本では、この日に主に女性が男性へチョコレートを渡したり、愛を伝えたりします。\nバレンタインデーは、もともとは欧米の国の文化でしたが、欧米ではチョコレート以外のプレゼントを渡すことが多く、「バレンタインデーといったらチョコレート」というのは日本独特の文化のようです。\nまた、日本では、3月14日に、バレンタインデーにチョコレートをくれた相手にお返しをする「ホワイトデー」という日もあります。",
questions:[{qText:"本文の内容と合っているものはどれか。",options:["欧米では、バレンタインデーはチョコレートをプレゼントする日である。","バレンタインデーは、もともとはヨーロッパやアメリカの文化である。","バレンタインデーには、主に男性が女性にチョコレートを渡す。","欧米では、チョコレートをくれた相手にお返しをするホワイトデーという日がある。"],correctAns:"バレンタインデーは、もともとはヨーロッパやアメリカの文化である。",explanation:"「もともとは欧米の国の文化でした」と明記。チョコレート中心なのは日本独特、渡すのは主に女性、ホワイトデーは日本の文化です。",evidence:"バレンタインデーは、もともとは欧米の国の文化でしたが"}]},
{level:"N3", id:"dokkai-kekkonshiki", title:"結婚式の案内",
passage:"結婚式のご案内\nこのたび、私たちは結婚式をあげることとなりました。お世話になっているみなさまには、ぜひとも私たちの結婚式に参加していただければと思います。お忙しいとは思いますが、ぜひご出席ください。\n■結婚式について\n・日時：11月20日（日） 10：00〜15：00\n・会場：タナカ・グランドホテル\n・内容：結婚式・お食事会\n■注意点\n・お食事会がございますので、アレルギーがある方は11月10日までにご連絡ください。\n・その他、ご希望やわからない点などがある方も、お早めにご連絡ください。\n谷山一郎　由紀恵",
questions:[{qText:"この案内の内容と合っているものはどれか。",options:["食事会は、11月10日に行われる。","結婚式は、11月20日の夜に行われる。","アレルギーがある場合には、結婚式の10日前までに連絡する必要がある。","希望やわからない点がある場合は、11月10日までに連絡する必要がある。"],correctAns:"アレルギーがある場合には、結婚式の10日前までに連絡する必要がある。",explanation:"結婚式は11月20日、アレルギー連絡期限は11月10日（10日前）です。希望・不明点の連絡は「お早めに」とあるだけで11月10日という期限は明記されていません。式は10:00〜15:00で夜ではありません。",evidence:"アレルギーがある方は11月10日までにご連絡ください。"}]},
{level:"N3", id:"dokkai-food-delivery", title:"フードデリバリーサービス",
passage:"フードデリバリーサービスを使ったことはありますか？フードデリバリーサービスとは、スマートフォンなどを使って注文した食べ物をお店から家までとどけてくれるサービスのことですが、日本では近年、このようなサービスが急速に広まっています。\nフードデリバリーサービスを用いると、お店にいかなくても、家にいながら好きなお店の美味しい料理を食べることができます。新型コロナウイルスが流行した2020年以降の時期には、政府や県、市町村が外出しないように呼びかけたこともあり、このようなサービスを利用する人が大きく増えたようです。\n利用者が増えたことで、サービスに協力する店も増えました。そして料理を届ける配達員として仕事をする人も増えているようです。こうした市場の広がりにともない、初めて利用する人にはかかるお金が安くなるしくみを作るなど、いくつものサービスが利用者を増やそうとしています。",
questions:[
{qText:"この文章からわかる「フードデリバリーサービス」について正しいものはどれか。",options:["利用者は増えている一方で、配達員はへっている。","フードデリバリーサービスは、食べ物以外の商品も運んでくれる。","日本では最近、フードデリバリーサービスの利用者が増えている。","初めて利用するときには、追加料金を支払わなくてはならない。"],correctAns:"日本では最近、フードデリバリーサービスの利用者が増えている。",explanation:"「近年、このようなサービスが急速に広まっています」と明記。配達員も増加、初回はむしろ安くなる仕組みです。",evidence:"日本では近年、このようなサービスが急速に広まっています。"},
{qText:"この文章と合っているのはどれか。",options:["新型コロナウイルスが流行した時期には、外出しないように政府に呼びかけられた。","スマートフォンを通してフードデリバリーサービスを利用することはできない。","フードデリバリーサービスは、法律の制限がなくなったことで広まった。","フードデリバリーサービスの利用には、ウイルスに感染するリスクがある。"],correctAns:"新型コロナウイルスが流行した時期には、外出しないように政府に呼びかけられた。",explanation:"「政府や県、市町村が外出しないように呼びかけた」と明記されています。",evidence:"政府や県、市町村が外出しないように呼びかけたこともあり"}
]},
{level:"N3", id:"dokkai-ongaku-haishin", title:"音楽の楽しみ方の変化",
passage:"音楽をききたくなったら、どのような方法できいていますか？以前であれば、カセットテープ、レコードやCDを買うことが、音楽をきく主な方法でした。しかし、現在ではこれらの商品の数は減り、インターネット上の音楽配信サービスを利用して音楽をきくのが当たり前になっています。\nさらに、インターネット上の音楽サービスの中でも、以前は好きな曲だけをお金を払って買うというサービスが中心でした。しかし最近では、毎月決まった金額を支払うことで、どんな音楽でも好きなだけきくことができる「定額制」の音楽サービスを利用して音楽をきく人が増えています。\nその一方で、日本やアメリカでは、レコードの売上がふたたび上がってきているという報告があります。音楽をきくまでの準備が楽しいこと、レコードの見た目、音のやわらかさがあるなどの点から、若い人がふたたびレコードを買うようになったのです。",
questions:[
{qText:"本文の内容として、正しくないものはどれか。",options:["最近では、インターネットを通して音楽をきく人が多い。","音楽をきくために準備が必要なことが、レコードの良い点のひとつである。","最近では、定額制の音楽サービスが人々に広がっている。","定額制のサービスでは、好きな曲だけをお金を払って買うことができる。"],correctAns:"定額制のサービスでは、好きな曲だけをお金を払って買うことができる。",explanation:"定額制は「毎月決まった金額を支払うことで、どんな音楽でも好きなだけきく」仕組みで、曲ごとに買う方式は定額制以前の古いサービスです。",evidence:"毎月決まった金額を支払うことで、どんな音楽でも好きなだけきくことができる「定額制」の音楽サービス"},
{qText:"この文章で述べられていることで、正しいものはどれか。",options:["カセットテープ、レコード、CDのような商品の数は現在では減っている。","レコードの良い点のひとつとして、値段の安さがある。","音楽の楽しみ方がこれ以上変化することはないだろう。","定額制のサービスでは、毎月決まった金額で決まった曲数をきくことができる。"],correctAns:"カセットテープ、レコード、CDのような商品の数は現在では減っている。",explanation:"「現在ではこれらの商品の数は減り」と明記。レコードの良い点は準備の楽しさや音の柔らかさで値段の話ではなく、定額制は「好きなだけ」＝曲数無制限です。",evidence:"現在ではこれらの商品の数は減り"}
]},
{level:"N3", id:"dokkai-ganseihirou", title:"眼精疲労",
passage:"私たちは、一日の大部分の時間を、書類や本、パソコン、スマートフォンなどを見て過ごしています。このように目を長時間使い続けると、目の痛み、頭痛などの症状が現れます。目の疲れからこのような症状が現れることを「眼精疲労」といいます。\n眼精疲労を治すためには、目の血行を良くすることが必要です。目の血行が良くなると、目のまわりがほぐれ、目を休ませることができます。そのためには、あたためたタオルなどを目に当ててみるのがよいでしょう。目のまわりをもむのもおすすめです。\nまた、遠くの場所を見るのも効果があります。遠くの場所を見ることで、目の運動につながり、これによって目をほぐすことができます。\nさらに、顔を動かさずに目だけを上下左右に動かすことも、目にとってとても良い運動になります。\nそして、目を使う作業をいったんやめて、休むことがとても重要です。パソコン作業など、近くを見る作業を長い時間続けなくてはならない場合には、1時間に10分程度の休憩をとるとよいとされています。",
questions:[
{qText:"「眼精疲労」について、正しいものはどれか。",options:["目を使う仕事を長い時間続けると、目の痛みや頭痛などが起こる。","目を休めることは、眼精疲労には効果がない。","眼精疲労の主な原因は、バランスの悪い食事である。","社会が変わっていくとともに、眼精疲労になることは少なくなっている。"],correctAns:"目を使う仕事を長い時間続けると、目の痛みや頭痛などが起こる。",explanation:"冒頭で「目を長時間使い続けると、目の痛み、頭痛などの症状が現れます」と説明されています。",evidence:"このように目を長時間使い続けると、目の痛み、頭痛などの症状が現れます。"},
{qText:"「眼精疲労を治す方法」の例として正しくないものはどれか。",options:["目のまわりをもむこと。","目をあたためること。","遠くを見ること。","目に弱い光をあてること。"],correctAns:"目に弱い光をあてること。",explanation:"文章で紹介されているのは温タオル・目のマッサージ・遠くを見る・目を上下左右に動かす・休憩の5つで、光を当てる方法は書かれていません。",evidence:"あたためたタオルなどを目に当ててみるのがよいでしょう。目のまわりをもむのもおすすめです。"},
{qText:"「眼精疲労の原因」として正しいものはどれか。",options:["目の血行がよくなりすぎること。","目の運動によって目が疲れること。","長時間のパソコンやスマートフォンなどの使用。","目のまわりをもむこと。"],correctAns:"長時間のパソコンやスマートフォンなどの使用。",explanation:"冒頭で書類・本・パソコン・スマホを長時間見ることが原因と説明されています。血行改善や目の運動、マッサージはむしろ「治す方法」です。",evidence:"書類や本、パソコン、スマートフォンなどを見て過ごしています。このように目を長時間使い続けると"},
{qText:"この文章で述べられている内容として、正しいものはどれか。",options:["テレビや映画、ゲームなどによる必要のない目の使用はやめるべきだ。","近くを見る作業では、1時間に10分程度の休憩をとるべきである。","目が疲れたとしても、目以外の調子が悪くなることはない。","眼精疲労をおさえることはできるが、治すことはできない。"],correctAns:"近くを見る作業では、1時間に10分程度の休憩をとるべきである。",explanation:"「1時間に10分程度の休憩をとるとよいとされています」と明記されています。",evidence:"1時間に10分程度の休憩をとるとよいとされています。"}
]},
{level:"N3", id:"dokkai-gym-nyuukai", title:"ジムの入会案内",
passage:"ラシードさんと彼の息子は、友人の紹介で、友人が通っているジムに登録することにしました。ラシードさんは仕事の休みが月曜日と火曜日で、休みの日にジムに行きたいと思っています。ラシードさんは仕事の関係で、4か月後に家族で遠くに引っ越してしまうので、ジムに通いたいのは今から3か月の間です。また、ラシードさんの息子は高校生で、父と同じ日にジムに通いたいと言っています。そのうえで、ラシードさんは合計の料金ができるだけ安くなるコースとプランで申し込むことにしました。\n\nオリエンタル・ジム入会のご案内\nコース／内容／毎日プラン（1か月あたり）／平日プラン（1か月あたり）\n3か月コース／3か月間自由に利用／5,980円／5,580円\n6か月コース／6か月間自由に利用／4,280円／3,880円\n12か月コース／12か月間自由に利用／2,980円／2,580円\n個人メニューコース(3ヶ月)／トレーナーと相談のメニュー／12,980円／-\n・平日プランは、平日のみジムをご利用いただけるプランです。\n★友人のご紹介で3か月半額サービス実施中！会員の方からご紹介いただいた場合には、最初の3か月の料金が半額になります。\n・全プランで、高校生以下の方は表の料金の半額となります。(この場合、友人紹介の3か月半額サービスは同時には使えません。)\n・初めてご登録のとき、プランの料金とは別に、一人につき登録料1,000円をいただいております。",
questions:[
{qText:"ラシードさんの希望に合ったコースとプランはどれですか。",options:["12か月コース、平日プラン","個人メニューコース（3か月）","6か月コース、平日プラン","3か月コース、平日プラン"],correctAns:"3か月コース、平日プラン",explanation:"ラシードさんが通いたいのは3か月間だけ（4か月後に引っ越し）、休みは月・火（平日）なので「3か月コース・平日プラン」が最適です。",evidence:"ジムに通いたいのは今から3か月の間です。"},
{qText:"ラシードさんと息子の1か月あたりの料金は、登録料を除いて考えると、合わせていくらですか。",options:["3,548円","4,850円","5,580円","6,490円"],correctAns:"5,580円",explanation:"3か月コース平日プランの通常料金は5,580円。父は友人紹介の3か月半額サービスで2,790円。息子は高校生なので半額の2,790円（学生割引と友人紹介は併用不可だが、息子は学生割引を使うため問題なし）。合計2,790+2,790=5,580円。",evidence:"友人のご紹介で3か月半額サービス実施中！／高校生以下の方は表の料金の半額となります。"}
]},

{level:"N2", id:"dokkai-metaverse", title:"メタバースの発展",
passage:"2021年から、「メタバース」とよばれる仮想世界の開発が世界的に進められている。利用者は、インターネット上につくられる仮想世界に「アバター」とよばれる自分自身のイメージを反映させたキャラクターで参加し、そこで、他の利用者のアバターとコミュニケーションをとることができるのである。また、コミュケーションをとるだけではなく、将来的には、商品の売買など、「メタバース」を通じて経済活動を行うことなども考えられており、もうひとつの現実世界として新たな生活を送ることができるのではないかと期待されている。",
questions:[{qText:"この文章の内容に合うものはどれか。",options:["「メタバース」の開発は進んでおり、今では世界中で普及している。","「メタバース」では、「アバター」を通じてコミュニケーションがとられる。","先進国では「メタバース」を通じて商品の売買を行うのが当たり前になっている。","「メタバース」は現実世界と変わらない機能をもっている。"],correctAns:"「メタバース」では、「アバター」を通じてコミュニケーションがとられる。",explanation:"「アバターとよばれる…キャラクターで参加し、そこで…アバターとコミュニケーションをとることができる」と明記。開発は「進められている」段階で普及済みではなく、商品売買は「将来的に考えられている」段階です。",evidence:"他の利用者のアバターとコミュニケーションをとることができるのである。"}]},
{level:"N2", id:"dokkai-100yen-shop", title:"100円ショップ",
passage:"「100円ショップ」とは、食器や文房具など、さまざまなものが100円で売られている店である。質の良い商品が安く手に入るため、日本人だけでなく外国人観光客にも人気である。\n100円ショップの中には、300円、500円、それ以上など、実は100円よりも高く売られている商品もある。しかし、それはおどろくことに、500円のヘッドホンや、1,000円のテントなど、普通なら1万円以上してもおかしくない商品が、100円という安さまではいかないものの、数百円という値段で売られているのである。",
questions:[{qText:"この文章の内容に合うものはどれか。",options:["100円ショップは外国人には知られていない。","100円ショップでは食器やテントなどのさまざまな商品が売られている。","100円ショップはすべての商品が100円で売られている。","100円ショップの中には1万円以上の商品が売られている。"],correctAns:"100円ショップでは食器やテントなどのさまざまな商品が売られている。",explanation:"食器・文房具に加え、テントやヘッドホンなど多様な商品が売られていることが書かれています。外国人観光客にも人気、100円より高い商品もあり、1万円以上の商品はむしろ「1万円以上してもおかしくない」品質の商品が数百円で売られているという話です。",evidence:"食器や文房具など、さまざまなものが100円で売られている店である"}]},
{level:"N2", id:"dokkai-live-chuusen", title:"音楽ライブの抽選結果",
passage:"【スーパーミュージックサマーライブ2023 抽選結果のお知らせ】\n田中様\nこの度は、8/2(水)〜8/4(金)公演の「スーパーミュージックサマーライブ2023」の抽選にお申し込みいただきありがとうございました。公正な抽選の結果、お客様はご当選されました。\n【当選内容】\n・公演タイトル：スーパーミュージックサマーライブ2023\n・公演日時：2023年8月3日(木)（2日目）18:00〜\n・座席番号：1階Ｅ列19番\n・予約番号：00718443\n・支払期限：2023年7月3日(月) 23:00まで\n※支払期限が過ぎますとご当選が無効となりますので、ご注意ください。\n・支払方法：お近くのコンビニの各種機械にて払込票を出力後、30分以内にレジにてご入金ください。\n・チケット代金入金後のチケット発券期間：2023年6月29日(木) 10:00〜8月4日(金) 23:00",
questions:[{qText:"この案内について合っているものはどれか。",options:["公演時に自分が座る席はすでに決まっている。","チケットは、支払い後に自宅まで郵送される。","公演は3日間行われ、すべてに参加できる。","チケットの発券期間は公演日1ヶ月前までである。"],correctAns:"公演時に自分が座る席はすでに決まっている。",explanation:"「座席番号：1階Ｅ列19番」とすでに指定されています。チケットはコンビニで発券（郵送ではない）、当選したのは8月3日の1日分のみ、発券期間は8月4日までです。",evidence:"座席番号：1階Ｅ列19番"}]},
{level:"N2", id:"dokkai-japan-toilet", title:"日本のトイレ",
passage:"日本のトイレはすばらしいと、外国から高く評価されている。温水でお尻を洗うことができる「温水洗浄便座」の普及率が全国で80%を超えていることや、多くのトイレで座る所に暖房機能がついており、冬の寒い日であってもトイレの冷たさに悩む必要がないことは、日本のトイレの大きな特色である。それだけではなく、日本のトイレの中には、前に立つだけで自動でふたが開くものもある。",
questions:[{qText:"この文章の内容に合うものはどれか。",options:["前に立つとトイレのふたが自動で開く機能を「温水洗浄便座」という。","日本のトイレは、使用後、座る所が毎回温水で洗われている。","海外のトイレには、「温水洗浄便座」は見られない。","日本の多くのトイレには座る所に暖房機能がついている。"],correctAns:"日本の多くのトイレには座る所に暖房機能がついている。",explanation:"「多くのトイレで座る所に暖房機能がついており」と明記。自動でふたが開くのは別の機能、温水洗浄便座はお尻を洗う機能で座席を洗うものではなく、海外に無いとは書かれていません。",evidence:"多くのトイレで座る所に暖房機能がついており"}]},
{level:"N2", id:"dokkai-natsubate", title:"夏バテ",
passage:"季節ごとの気温や湿度の差がはげしい日本では、暑い夏の季節に「夏バテ」とよばれる症状がみられることがある。夏バテとは夏の急激な気温や湿度の上昇に体が対応できず、体内の水分や栄養が不足し、さまざまな体調不良を起こしてしまう症状のことである。夜遅くまで起きるなど不規則な生活をしている人や、普段から部屋の冷房の温度を低くしている人がこの症状にかかりやすい。季節が変わる頃には注意が必要である。",
questions:[{qText:"この文章の内容に合わないものはどれか。",options:["「夏バテ」は急激な気温や湿度の上昇が原因で起こる。","生活のリズムが整っていないと、「夏バテ」になりやすくなってしまう。","普段から冷房を使わなければ、「夏バテ」にはならない。","日本では、季節ごとに気温や湿度が大きく変化する。"],correctAns:"普段から冷房を使わなければ、「夏バテ」にはならない。",explanation:"文章は「冷房の温度を低くしている人」がなりやすいと言っているだけで、冷房を使わなければ絶対にならないとは書かれていません（不規則な生活など他の原因もあります）。",evidence:"普段から部屋の冷房の温度を低くしている人がこの症状にかかりやすい。"}]},
{level:"N2", id:"dokkai-mynumber", title:"マイナンバー制度",
passage:"日本では2016年1月1日より、「マイナンバー」制度が開始されている。マイナンバー制度とは、国民ひとりひとりにマイナンバーとよばれる番号が登録されるという制度だ。カードの発行を申請した人には、マイナンバーと顔写真が記載されたマイナンバーカードが送付される。この番号およびカードが日常のさまざまな場面で活用され、面倒な手続きが省略されることが期待されている。\nすでに活用されている例として、まず、コンビニの自動機械で住民票などの各種証明書が発行できるようになった。今まで証明書を発行するためには、役所で発行までの長い時間を待つ必要があったが、それが無くなったのである。また、マイナンバーカードには顔写真の記載もあるため、銀行口座の開設や携帯電話の契約の際に、本人確認書類として利用できる。そのほか、病院などでは健康保険証の代わりとしても利用できるようになっている。\nしかし、いくつかの課題もみられる。番号ひとつで個人情報の証明書が発行できてしまうため、カードの盗難や紛失などによって番号が流出し、不正利用されるという、今までにないリスクが生まれている。また、マイナンバーの発行には住所登録が必要なため、住所登録ができないホームレス層などは、今後さまざまなサービスが利用できなくなっていくおそれがある。",
questions:[
{qText:"さまざまな場面について、文章の内容と合わないものはどれか。",options:["証明書を発行するとき。","役所で待ち時間を過ごすとき。","さまざまな契約をするとき。","病院で受診するとき。"],correctAns:"役所で待ち時間を過ごすとき。",explanation:"マイナンバーカードは「役所で長時間待つ必要」を無くした（＝コンビニで発行できるようになった）ものであり、「役所で待ち時間を過ごすとき」自体はマイナンバーの活用場面ではありません。",evidence:"役所で発行までの長い時間を待つ必要があったが、それが無くなったのである。"},
{qText:"この文章の内容と合うものはどれか。",options:["マイナンバーカードはすべての国民に送付されている。","マイナンバー登録の手続きはコンビニでできる。","マイナンバーの登録条件は日本の国民であることのみである。","マイナンバー制度は安全性に課題を抱えている。"],correctAns:"マイナンバー制度は安全性に課題を抱えている。",explanation:"カード盗難・紛失による番号流出と不正利用リスクが課題として述べられています。カードは「申請した人」に送付、コンビニでできるのは証明書発行、住所登録も必要条件です。",evidence:"カードの盗難や紛失などによって番号が流出し、不正利用されるという、今までにないリスクが生まれている。"}
]},
{level:"N2", id:"dokkai-sanpai", title:"神社の参拝の作法",
passage:"神社を訪れ、その神社にいる神様に祈ることを「参拝」もしくは「お参り」という。日本に住む人々は、めでたいときや困ったことがあったときに、神社に参拝する。参拝とは、ただ神社へ行って自由に祈ればよいわけではなく、決まった方法がある。\n神社に着いて鳥居を抜けたら、まず、「手水」をおこなう。手水とは、水で手と口を洗う行為である。これは、神様に会う前に自分の体、そして心をきれいにするという意味をもつ。神社の中には「手水舎」という、水が用意されている場所があるため、参拝をするときにはそこで手水をおこなうことができる。\n手水をおこなった後、拝殿に着き、賽銭箱の前に立ったら、いよいよ神様へ祈る。まず、賽銭箱に賽銭を投げ入れる。その後、その場で「二礼二拍手一礼」をおこなうのが一般的だ。「二礼」は2回連続でおじぎをすることである。その後の「二拍手」は、2回連続で拍手をおこなうことである。この拍手の後、手を合わせたまま、目を閉じて頭の中で神様へのあいさつや願い事を述べるのが一般的となっている。述べ終わったあと、最後に「一礼」、つまり1回おじぎをして、参拝完了である。\nそのほか、参拝時はタバコを吸ってはいけない、ペットを連れて神社に入ってはいけないといったルールがある。",
questions:[
{qText:"決まった方法について、文章の内容と合わないものはどれか。",options:["体と心をきれいにするために、「手水」をおこなう。","「二礼」の後、賽銭箱に賽銭を投げ入れる。","拍手をした後は、一度おじぎをしてから立ち去る。","ペットを連れて神社の中に入ってはいけない。"],correctAns:"「二礼」の後、賽銭箱に賽銭を投げ入れる。",explanation:"正しい順序は「賽銭を入れる→二礼二拍手→願い事→一礼」で、賽銭は二礼の前におこないます。",evidence:"まず、賽銭箱に賽銭を投げ入れる。その後、その場で「二礼二拍手一礼」をおこなうのが一般的だ。"},
{qText:"この文章の内容と合うものはどれか。",options:["日本の人々はめでたいことや困ったことがあったときなどに「参拝」をする。","「手水舎」の先に鳥居があり、鳥居を抜けた先に拝殿がある。","「参拝」は、困っていることの解決を神社に依頼する行為である。","賽銭は「参拝」に際して神社に支払わなければならない手数料である。"],correctAns:"日本の人々はめでたいことや困ったことがあったときなどに「参拝」をする。",explanation:"「めでたいときや困ったことがあったときに、神社に参拝する」と冒頭で明記されています。順序は鳥居→手水舎、賽銭は「感謝を示すお金」であり手数料ではありません。",evidence:"めでたいときや困ったことがあったときに、神社に参拝する。"}
]},
{level:"N2", id:"dokkai-seijinshiki", title:"成人式の年齢引き下げ",
passage:"2022年4月、日本における成人年齢を18歳に引き下げる法が適用され、そして2023年1月、日本で初めて18歳の成人を対象とする成人式が全国的に開かれる時期となった。成人式とは、成人年齢をむかえる男女を祝うため、各地の自治体が開く式である。日本各地で、18歳の新成人を祝う式が開かれるはずであった。しかし、実際に18歳の新成人を対象として成人式をおこなったのは、全国でわずか3つの自治体のみであった。\nその理由はいくつかある。日本では、18歳の1月といえば大学受験を直前にひかえた時期であり、受験生は式に出席している時間すら惜しんで勉強をすることであろう。また、18歳を対象とした成人式に切り替えることで、2023年1月に19歳、20歳となっている世代のための成人式が開かれないことになってしまう。こうした理由から、ほとんどの自治体で18歳を対象とした成人式が開かれなかった。\nまた20歳を対象とした式を開いた自治体の中には、式の名前を「成人式」ではなく「20歳のつどい」に変更する自治体もみられた。",
questions:[
{qText:"「成人式」の説明で正しいのはどれか。",options:["全国3か所の自治体のみで実施されている。","成人式を実施しなければならないことが法律で定められている。","毎年1月に実施される。","「新成人が家族や地域の人々に感謝する」という目的で開かれる式である。"],correctAns:"全国3か所の自治体のみで実施されている。",explanation:"文脈は「18歳対象の成人式」が全国でわずか3つの自治体のみだったという話で、これが最も文章と一致します。法律による義務化・目的についての記述はありません。",evidence:"実際に18歳の新成人を対象として成人式をおこなったのは、全国でわずか3つの自治体のみであった。"},
{qText:"この文章の内容と合うものはどれか。",options:["2023年1月は、新たに18歳が成人年齢となってから初めてむかえる成人式の時期であった。","18歳を対象とした成人式を開くと、大学入試と日程が重なり、志望大学を受験できない受験生が出てしまう。","今後、全国で「成人式」の名前が使われなくなり、「20歳のつどい」という名前が使われるようになる。","2023年1月には、日本全国で18歳を対象とした成人式が開かれることはなかった。"],correctAns:"2023年1月は、新たに18歳が成人年齢となってから初めてむかえる成人式の時期であった。",explanation:"冒頭で「2023年1月、日本で初めて18歳の成人を対象とする成人式が全国的に開かれる時期となった」と明記。大学入試とは「日程が重なる」のではなく「直前の時期」、3自治体では実際に開催、名称変更は一部自治体のみの話です。",evidence:"2023年1月、日本で初めて18歳の成人を対象とする成人式が全国的に開かれる時期となった。"}
]},
{level:"N2", id:"dokkai-kaso-kamitsu", title:"過疎と過密の問題",
passage:"「過疎」とは、地域に住む人が少なくなり過ぎてしまうことを意味する言葉である。過疎が進むとさまざまな問題が生じてしまう。まず、地域の住民が少なくなることで会社や店が運営できなくなる。それにともない、地域に残る人の生活は不便になり、また、地域の働く場が減ることで新たな住人も移住してこなくなる。税金による自治体の収入も減り、行政サービスの質が落ち、それがまた人口の減少につながる……と、一度過疎が進みだすと、止めることは難しい。\n日本の地方部では、この過疎が深刻な問題となっている。法律にしたがうと、2020年には過疎地域が日本全国の自治体のうちの半数を超えており、こうした自治体では、行政サービスの向上や雇用の増大などによる人口増加が緊急の課題となっている。そのため、国は過疎地域に指定されている自治体を支援し、地域を活性化させるための事業の展開を進めている。\n長年、全国から多くの人々が転入していた大都市・東京だが、2021年の政府の発表では、東京都から別の地域へ移住していく人が増加し、転入者数との差がなくなってきていることがわかった。その理由は新型コロナウイルスの流行による「リモートワーク」の拡大であると言われている。都市に住んでいる人のうち、職場に行かずとも、インターネット環境さえあればできる仕事をしている人が、自然が多くて土地も広く、家賃などの物価も安い地方へと移住する動きが多くみられるのである。東京をはじめとする都市では、人口が増え過ぎてしまう「過密」問題になやまされているが、リモートワークの拡大が、都市の過密と地方の過疎をまとめて解決するヒントになりそうである。",
questions:[
{qText:"AとBのどちらの文章にも触れられている内容は何か。",options:["東京都には多くの人が移住してきている。","地方では移住者が少ない地域が多くみられる。","都市では「過密」が問題となっている。","地方では「過疎」が問題となっている。"],correctAns:"地方では「過疎」が問題となっている。",explanation:"文章全体を通して、地方の「過疎」問題が一貫して中心テーマとして扱われています。",evidence:"日本の地方部では、この過疎が深刻な問題となっている。"},
{qText:"内容について、正しいのはどれか。",options:["都市と地方の差は雇用の場が多いか少ないかの差だけであり、仕事さえあれば、都市と地方で生活環境の差はほとんどない。","地方の過疎を止めることを目的に、政府による積極的な支援の下、都市ではリモートワークの拡大が進められている。","人口によって起こる問題を解決するためには、都市に住む人に地方に移住してもらえるような対策が必要である。","全国的にみれば、過疎問題を抱える地域よりも、過密問題を抱える地域の方が多くなっている。"],correctAns:"人口によって起こる問題を解決するためには、都市に住む人に地方に移住してもらえるような対策が必要である。",explanation:"「リモートワークの拡大が、都市の過密と地方の過疎をまとめて解決するヒントになりそう」という結論から、都市住民の地方移住が両方の問題解決の鍵だとわかります。過疎地域は自治体の半数超で過密より多く、リモートワーク拡大は個人の選択によるもので政府の直接的な後押しではありません。",evidence:"リモートワークの拡大が、都市の過密と地方の過疎をまとめて解決するヒントになりそうである。"}
]},
{level:"N2", id:"dokkai-jisho", title:"紙の辞書と電子辞書",
passage:"わからないものごとがあったときには、インターネットですぐに調べることが当たり前の世の中になった。しかし、インターネットは経歴や職業、立場などに関わらず、だれもが情報を発信することができる場であるため、数多くの情報があふれており、また、調べた情報が正確かどうかもわからない。\nでは、信用できる情報を得たいときには何を調べるか。そう考えたとき、最初に出てくるのは辞書ではないだろうか。辞書はその分野の専門家たちによってつくられたものであり、辞書以上にくわしく、信頼できる情報元はないだろう。\nひと昔前であれば、「辞書」と言われたら、一般的には何枚ものページが重なった紙の辞書が想像されていただろう。しかし近年では、「電子辞書」とよばれる、小さなパソコンのような辞書が普及してきている。分厚い紙の辞書に対して、電子辞書は小さく、軽く、薄い。また、紙の辞書は、「漢字」の辞書であれば「漢字」についての情報のみというように、ひとつの分野の情報だけをまとめたものであるのに対し、電子辞書は英語、漢字、歴史、化学、動物、植物……と、手帳のような大きさの機械ひとつで、大量の情報が調べられる。\nしかし、紙の辞書にも電子辞書にはない良いところがある。ひとつは、あるひとつの言葉を調べたときに、同じページ内にある別の言葉も目に入るため、一度に得られる情報量が多いというところである。もうひとつは、調べたい言葉を見つけようとするときには紙を何ページもめくって時間をかけて探すために、電子辞書に比べて、調べた言葉をより強く覚えていられるというところである。\n電子辞書がすばやく手軽で便利なのに対し、紙の辞書は、1ページに多くの情報が詰まっていて、調べたこともより強く覚えていられる。状況によって、どちらを使うのが良いか考えるのが大事であろう。",
questions:[
{qText:"その分野とは具体的に何を指しているか。",options:["辞書をつくる技術などに関する分野","辞書が情報として載せている分野","さまざまな情報の情報元を調べる分野","辞書の活用方法について考える分野"],correctAns:"辞書が情報として載せている分野",explanation:"直後の例「『漢字』の辞書であれば『漢字』についての情報」からもわかるように、辞書が扱う内容（掲載分野）の専門家という意味です。",evidence:"辞書はその分野の専門家たちによってつくられたものであり"},
{qText:"この文章で述べられている電子辞書の良いところは何か。",options:["一度調べるだけで、紙の辞書よりも大量の情報をすばやく得ることができる。","すばやく気軽に調べられるため、調べた物事をより強く覚えていられる。","経歴や職業に関係なく、すばやく気軽に情報を発信することができる。","数多くの情報が載っていて、その中から調べたい物事だけをすばやく調べられる。"],correctAns:"数多くの情報が載っていて、その中から調べたい物事だけをすばやく調べられる。",explanation:"「英語、漢字、歴史…と、機械ひとつで、大量の情報が調べられる」「気軽にひとつ持ち歩くだけで…すばやく調べられる」と説明されています。「より強く覚えていられる」のはむしろ紙の辞書の利点です。",evidence:"気軽にひとつ持ち歩くだけで、大抵のことを、その場ですばやく調べられてしまうのである。"},
{qText:"この文章の筆者の主張と合っているものはどれか。",options:["電子辞書と紙の辞書はそれぞれに良いところがあるので、使う場面によって、どちらを使うか選ぶのが良い。","情報の量の多さと、その場ですばやく調べられるというところから、電子辞書の方が辞書として優れていると言える。","一度調べた物事をより強く覚えていられるというところから、紙の辞書の方が辞書として優れていると言える。","インターネット上に書かれている情報は情報元が信用できないため、インターネットで物事を調べてはいけない。"],correctAns:"電子辞書と紙の辞書はそれぞれに良いところがあるので、使う場面によって、どちらを使うか選ぶのが良い。",explanation:"最終段落で「状況によって、どちらを使うのが良いか考えるのが大事であろう」と結論づけています。",evidence:"状況によって、どちらを使うのが良いか考えるのが大事であろう。"}
]},
{level:"N2", id:"dokkai-karaoke-ryoukin", title:"カラオケ店の料金表",
passage:"カラオケ店「グッドサウンド」料金表 ※すべておひとり様あたりの税込料金です。\n【通常料金】\n11:00〜18:00：30分60円（土・日・祝日は+40円）\n18:00以降：30分250円（金・土・日・祝日は+100円）\n【フリータイム（利用時間に制限がないこと、2名様以上で利用可）】\n11:00〜18:00：500円（土・日・祝日は+300円）\n18:00〜翌朝5:00：1,300円（金・土・日・祝日は+500円）\n【学割サービス（フリータイムのみ、2名様以上で利用可）】\n11:00〜18:00：250円（土・日・祝日は+400円）\n18:00〜翌朝5:00：800円（金・土・日・祝日は+400円）\n※ドリンクオーダー制：ご入室のお客様全員が必ずドリンクバーを注文してください。ドリンクバー500円",
questions:[
{qText:"大学生のカズキさんは水曜日の16時から3時間、一人でカラオケ店を利用することにしました。最も安くなる利用方法をとったとき、カズキさんが支払う料金はいくらになりますか。",options:["250円","500円","740円","1,240円"],correctAns:"1,240円",explanation:"一人利用のためフリータイム（2名様以上）は使えず、通常料金のみ利用可。16:00〜18:00（4×30分）=60円×4=240円、18:00〜19:00（2×30分）=250円×2=500円、水曜日は平日なので追加料金なし。合計740円＋ドリンクバー500円＝1,240円。",evidence:"フリータイム（※）500円　※2名様以上でご利用できます。"},
{qText:"会社員のユウキさんは金曜日に仕事が終わったあと、会社の同僚3人と一緒に19時から3時間、カラオケ店を利用することにしました。ユウキさん含めて4人が最も安くなる利用方法をとったとき、ユウキさんたち4人が支払う料金は合計でいくらになりますか。",options:["6,800円","7,200円","9,200円","10,400円"],correctAns:"9,200円",explanation:"4人（学生ではない）、金曜19時〜22時（18:00以降枠）。フリータイム18:00〜：1,300円＋金曜料金+500円＝1,800円/人。4人分＝7,200円。ドリンクバー500円×4人＝2,000円。合計7,200+2,000=9,200円。",evidence:"フリータイム 1,300円　金・土・日・祝日は+500円"}
]}
];
