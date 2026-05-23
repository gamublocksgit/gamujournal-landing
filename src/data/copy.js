/* Gamu Journal landing page localization data.
 * Source of truth for all per-locale copy.
 * Exports: LANGUAGES, COPY. Keyed by legacy locale keys (en, ja, pt_BR, ru, fr, es, ko).
 */

export const LANGUAGES = [
  { key: "en", label: "English", name: "English", htmlLang: "en" },
  { key: "ja", label: "日本語", name: "日本語", htmlLang: "ja" },
  { key: "pt_BR", label: "Português (Brasil)", name: "Português (Brasil)", htmlLang: "pt-BR" },
  { key: "ru", label: "Русский", name: "Русский", htmlLang: "ru" },
  { key: "fr", label: "Français", name: "Français", htmlLang: "fr" },
  { key: "es", label: "Español", name: "Español", htmlLang: "es" },
  { key: "ko", label: "한국어", name: "한국어", htmlLang: "ko" },
];

const baseAssets = {
  showcaseAlts: [
    "Writing screen with title, tags and free-flow text",
    "PIN, biometric and password unlock screen",
    "Mood tracker with slider and affecting factors",
    "Browse prompts grid with categories and journeys",
    "Search entries by keyword, weather, mood and attachments",
    "Choose sticker sheet with heart, sun, plant and more",
    "Export backup sheet with Share Backup and Save to Device",
    "Same editor in light mode for daytime writing",
  ],
  featureAlts: [
    "Editor with formatted entry and inline tags",
    "Welcome Back PIN screen with biometric option",
    "How are you mood slider on Awesome with affecting tags",
    "Browse Prompts categories grid",
    "Search results for Morning with Weather filter active",
    "Sticker chooser with heart, star, sun and more",
    "Export Backup sheet with Share and Save to Device options",
    "Dark mode editor - true black background",
  ],
};

export const COPY = {
  en: {
    meta: {
      title: "Gamu Journal | Private Offline Diary and Mood Tracker",
      description: "Write privately with an offline diary built for calm reflection. Gamu Journal keeps entries on your device with local protection, mood tracking, prompts, search, and backups you control.",
      ogTitle: "Gamu Journal | A private diary that stays on your device",
      ogDescription: "Offline diary, mood tracker, prompts, search and backups. No accounts. No cloud sync. No subscription pressure.",
      offerFree: "Free",
      offerPro: "Pro (one-time purchase)",
    },
    a11y: {
      skip: "Skip to content",
      brandHome: "Gamu Journal home",
      primaryNav: "Primary",
      language: "Language",
      heroChips: "Why Gamu Journal",
      googlePlay: "Get Gamu Journal on Google Play",
      appStore: "Download Gamu Journal on the App Store",
      googlePlayBadge: "Get it on Google Play",
      appStoreBadge: "Download on the App Store",
      installTerms: "Install terms",
      heroPreview: "App preview: writing, lock, and mood screens",
      trustFacts: "Trust facts",
      stickyInstall: "Install Gamu Journal",
    },
    nav: ["Features", "Privacy", "Pricing", "FAQ"],
    navCta: "Get the app",
    hero: {
      h1: "A private diary that stays on your device.",
      sub: "Write, reflect, and track your mood in an offline journal built for calm, encrypted privacy, without accounts, cloud sync, ads, or subscription pressure.",
      chips: ["Offline-first", "No account", "AES-256 local storage", "PIN - password - biometrics"],
      seePrivacy: "See how privacy works",
      micro: ["Free to install", "No account required", "Your entries stay on your device"],
      tags: ["01<br>Lock", "03<br>Mood", "// Encrypted on device", "// No account ever"],
      phoneAlts: [
        "PIN unlock screen - Welcome Back, your journal is locked on this device",
        "Writing screen - A quiet Morning entry with Life and Weather tags",
        "Mood tracker - How are you? Awesome mood with affecting tags",
      ],
    },
    trust: ["100% offline by default", "Zero accounts, zero tracking", "AES-256 local encryption", "You own the backup file", "Built by a 2-person studio in Osaka"],
    showcase: {
      eyebrow: "/ Inside the app",
      h2: "Eight screens. One quiet habit.",
      p: "From your first PIN to your hundredth entry, every surface is built around one idea: this is yours, on this device, nobody else's.",
      cards: [
        ["01 · WRITE", "Write privately", "An uncluttered editor that gets out of your way."],
        ["02 · LOCK", "Lock your journal", "PIN, password, or fingerprint - your call."],
        ["03 · MOOD", "Understand your mood", "Five steps, a soft slider, and tags for what's affecting you."],
        ["04 · PROMPTS", "Keep the habit", "Daily prompts, gentle reminders, and a streak that won't shame you."],
        ["05 · SEARCH", "Organize memories", "Folders, tags, and instant search across years of entries."],
        ["06 · CAPTURE", "Capture more than text", "Photos, voice notes, and small stickers when words aren't enough."],
        ["07 · BACKUP", "Stay in control", "Export an encrypted .gamu file. Restore it when you need to."],
        ["08 · THEME", "Write any time", "OLED-friendly black at night. Warm paper by day."],
      ],
    },
    features: {
      eyebrow: "/ The whole app",
      h2: "Built like a notebook, not a feed.",
      p: "No streak guilt, no friend requests, no features you didn't ask for. Just the parts of a journal you actually use.",
      cards: [
        { tag: "01 · Write", h3: "A blank page that respects your time.", p: "Open the app, pick up where you left off. Markdown-friendly, with tags, dates, and a quiet word counter. No distracting AI suggestions, no banner ads in your thoughts.", bullets: ["Sentence-case titles with optional stickers", "Inline tags like Life, Weather, Health", "Word, character and read-time counters", "Per-entry calendar navigation"] },
        { tag: "02 · Lock", h3: "Protected before anyone can read it.", p: "Choose how you unlock: a PIN, a password, or your fingerprint and face. The whole journal is encrypted at rest with AES-256 - locking the screen also locks the data.", bullets: ["PIN, password or biometric unlock", "Auto-lock on app background", "No recovery email because no account exists", "Hidden app preview when you switch apps"] },
        { tag: "03 · Mood", h3: "Track how you feel over time.", p: "A five-step slider from Rough to Awesome, with optional tags for what's affecting you today. Patterns surface gently in the history view - no leaderboards, no scores.", bullets: ["One-tap daily mood entry", "Affecting-factor tags: Work, Family, Sleep, Weather", "Calendar heatmap and weekly average", "Mood and writing combine into one entry"] },
        { tag: "04 · Prompts", h3: "Never start from a blank page.", p: "Multiple built-in prompt categories - Gratitude, Self-Reflection, Creativity, Goals - plus longer themed Journeys. Or set a daily reminder and pick when it appears.", bullets: ["200+ curated prompts across several categories", "Themed multi-day Journeys", "Custom reminder times", "Streaks that count, not pressure"] },
        { tag: "05 · Search", h3: "Find old thoughts and memories quickly.", p: "Type a word - morning, Tokyo, mom - and Gamu Journal scans the entries on your device only. Filter by weather, mood, date range, or attachments.", bullets: ["Full-text local search", "Filter by date, mood, weather, tags, attachments", "Folders for chapters, trips, projects", "Pinned and favorited entries"] },
        { tag: "06 · Capture", h3: "Capture more than text.", p: "Attach a photo, record a voice note, or drop a small sticker into your entry. Everything lives inside the encrypted journal file - never uploaded, never indexed by anyone else.", bullets: ["Photo and image attachments", "Voice memos for your journal entries", "Hand-drawn stickers: heart, sun, plant", "Stored inside the encrypted .gamu file"] },
        { tag: "07 · Backup", h3: "Keep backups under your control.", p: "Export the whole journal as a single encrypted .gamu file. Send it to your own cloud drive, your laptop, or an external SD card - wherever you trust. Restore takes one tap.", bullets: ["One-tap encrypted export", "Save to device or share to any app", "Import on a new phone in seconds", "No backup server, ever - there isn't one"] },
        { tag: "08 · Theme", h3: "Comfortable private writing, any time.", p: "A true-black OLED theme for late-night entries, a warm paper theme for mornings. Both with the same tag pills, the same legibility, the same calm.", bullets: ["OLED-true black for late nights", "Warm paper theme for daytime", "Adjustable type size and line height", "Follows your system theme automatically"] },
      ],
    },
    privacy: {
      eyebrow: "/ The deal",
      h2: "Privacy you can <em>understand</em>.",
      p: "No legal-page novella. No industry-leading security badges. Here is what actually happens to your words - in four short sentences.",
      note: "<strong>What we don't claim:</strong> end-to-end encryption (there are no ends - there is just your device), third-party audits, or zero-knowledge certifications.",
      cards: [
        ["01 · No account", "You don't sign up.", "There is no email, no username, no Sign in with Google. The app opens. You write. That's it."],
        ["02 · No cloud sync", "Your entries never leave your phone.", "We don't run a server for your journal because we don't have one. The data lives in the app's encrypted storage on your device."],
        ["03 · Local protection", "Lock it with PIN, password or biometrics.", "The journal is encrypted at rest. Unlocking it requires whatever you set - and only on this device, in this app."],
        ["04 · You own backups", "Backups are a file, not a service.", "Export an encrypted <code>.gamu</code> file. Put it wherever you want - or nowhere. Import it onto a new phone in seconds."],
      ],
    },
    pricing: {
      eyebrow: "/ Pricing",
      h2: "Simple pricing that respects trust.",
      p: "Free is fully usable forever. Pro is a one-time purchase - not a subscription, not a free trial that auto-renews. Pay once, keep it.",
      free: { tier: "Free", name: "Gamu Journal", price: "$0", small: "forever", note: "No credit card · No account", bullets: ["Unlimited entries", "PIN, password, biometric lock", "Daily mood tracker", "Tags and folders", "Random daily prompts", "Local search", "OLED dark + paper themes"], cta: "Install free", foot: "Available on Google Play and the App Store." },
      pro: { tier: "Pro · One-time", name: "Gamu Journal Pro", price: "One-time Pro unlock", small: "purchase details in store", note: "No subscription · No renewals", bullets: ["Everything in Free", "200+ curated prompts and multi-day Journeys", "Voice notes and photo attachments", "Auto-backup scheduling", "Custom reminder times", "Sticker pack", "And more..."], cta: "Unlock Pro", foot: "The store shows all purchase details before any payment." },
    },
    faqHeader: { eyebrow: "/ Honest answers", h2: "Questions, answered like a friend would." },
    faq: [
      ["Does Gamu Journal need an account?", "No. There is no sign-up, no email, no username. You install the app and start writing. We don't have a user database because we don't have any users in the database sense."],
      ["Does my journal sync to the cloud?", "Not by us. Gamu Journal has no cloud sync built in - your entries stay on the device they're written on. If you want a copy somewhere else, you can export an encrypted backup file and put it wherever you trust (Drive, Dropbox, an SD card, a USB stick)."],
      ["How is my journal protected?", "The journal is encrypted at rest using AES-256 with a key derived from your PIN, password, or device biometric. The app auto-locks when backgrounded and never shows your entries in the recent-apps preview."],
      ["What happens if I lose my phone?", "If you haven't exported a backup, your entries are gone with the device. This is the trade-off of a strictly-local design - there's no server for us to restore from. We strongly recommend exporting an encrypted <code>.gamu</code> file periodically and storing it somewhere you trust."],
      ["Is there a subscription?", "No. Free is free forever, and Pro is a one-time purchase through the app stores. No renewals, no free trials that quietly start charging you, no Pro+. Buy once, keep it."],
      ["Is there an iPhone version?", "Yes. Gamu Journal is available on the App Store. Your journal still stays on the device where you write it unless you choose to export a backup yourself."],
    ],
    footer: {
      tagline: "A private offline diary and mood tracker from Gamu Blocks.",
      product: "Product",
      studio: "Studio",
      get: "Get the app",
      baby: "Gamu Baby · Private baby tracker",
      neko: "Gamu Neko · Focus timer",
      gronu: "Gronu · Stopwatch",
      gnit: "Gnit · Knit counter",
      credits: 'Solar Icon Set by 480 Design, licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Built with care, not analytics. Privacy-friendly metrics only.',
    },
    sticky: { title: "Gamu Journal - Free on Google Play", sub: "Offline · No account · No subscription", cta: "Install" },
    assets: baseAssets,
  },
};

COPY.ja = {
  ...COPY.en,
  meta: { title: "Gamu Journal | プライベートなオフライン日記とムードトラッカー", description: "静かに振り返るためのオフライン日記。Gamu Journal は、ローカル保護、気分記録、プロンプト、検索、あなたが管理するバックアップで、記録を端末内に保ちます。", ogTitle: "Gamu Journal | 端末に残るプライベート日記", ogDescription: "オフライン日記、気分記録、プロンプト、検索、バックアップ。アカウントなし。クラウド同期なし。サブスク圧なし。", offerFree: "無料", offerPro: "Pro (買い切り)" },
  a11y: { ...COPY.en.a11y, skip: "本文へスキップ", primaryNav: "メインナビゲーション", language: "言語", heroChips: "Gamu Journal の特徴", googlePlay: "Google Play で Gamu Journal を入手", appStore: "App Store で Gamu Journal をダウンロード", googlePlayBadge: "Google Play で入手", appStoreBadge: "App Store からダウンロード", installTerms: "インストール条件", heroPreview: "執筆、ロック、気分画面のアプリプレビュー", trustFacts: "信頼できるポイント", stickyInstall: "Gamu Journal をインストール" },
  nav: ["機能", "プライバシー", "価格", "FAQ"], navCta: "アプリを入手",
  hero: { h1: "端末に残る、プライベートな日記。", sub: "書く、振り返る、気分を記録する。アカウント、クラウド同期、広告、サブスク圧なしで、落ち着いた暗号化プライバシーを守るオフライン日記です。", chips: ["オフライン優先", "アカウント不要", "AES-256 ローカル保存", "PIN・パスワード・生体認証"], seePrivacy: "プライバシーの仕組みを見る", micro: ["無料でインストール", "アカウント不要", "記録は端末内に保存"], tags: ["01<br>ロック", "03<br>気分", "// 端末内で暗号化", "// アカウント不要"], phoneAlts: ["PINロック画面 - この端末の日記はロックされています", "執筆画面 - Life と Weather タグ付きの静かな朝の記録", "気分記録 - Awesome の気分と要因タグ"] },
  trust: ["初期状態で100%オフライン", "アカウントなし、追跡なし", "AES-256 ローカル暗号化", "バックアップファイルはあなたのもの", "大阪の2人スタジオが制作"],
  showcase: { eyebrow: "/ アプリの中身", h2: "8つの画面。静かな習慣をひとつ。", p: "最初のPINから100回目の記録まで、すべての画面は「これはあなたのもの。この端末の中にあるもの。」という考えで作られています。", cards: [["01 · 書く", "プライベートに書く", "邪魔をしない、すっきりしたエディター。"], ["02 · ロック", "日記をロック", "PIN、パスワード、指紋。選ぶのはあなたです。"], ["03 · 気分", "気分を理解する", "5段階、やさしいスライダー、影響した要因タグ。"], ["04 · プロンプト", "習慣を続ける", "毎日のプロンプト、やさしいリマインダー、責めない連続記録。"], ["05 · 検索", "思い出を整理", "フォルダ、タグ、何年分もの記録をすぐ検索。"], ["06 · 記録追加", "文章以上を残す", "写真、音声メモ、小さなステッカーも。"], ["07 · バックアップ", "自分で管理", "暗号化された .gamu ファイルを書き出し、必要な時に復元。"], ["08 · テーマ", "いつでも書ける", "夜はOLED向けの黒。昼は温かい紙のテーマ。"]] },
  features: { eyebrow: "/ アプリ全体", h2: "フィードではなく、ノートのように。", p: "連続記録の罪悪感も、友達申請も、余計な機能もなし。実際に使う日記の機能だけ。", cards: [
    { tag: "01 · 書く", h3: "時間を尊重する白紙ページ。", p: "アプリを開いて、前回の続きから。Markdownにもなじみ、タグ、日付、静かな文字数カウンターつき。思考に広告やAI提案は入りません。", bullets: ["任意のステッカー付きタイトル", "Life、Weather、Health などのタグ", "単語数、文字数、読了時間", "記録ごとのカレンダー移動"] },
    { tag: "02 · ロック", h3: "読まれる前に守る。", p: "PIN、パスワード、指紋や顔でロック解除。日記全体はAES-256で保存時に暗号化され、画面ロックはデータも守ります。", bullets: ["PIN、パスワード、生体認証", "バックグラウンド時に自動ロック", "アカウントがないので復旧メールもなし", "アプリ切り替え画面で内容を非表示"] },
    { tag: "03 · 気分", h3: "気分の変化を追う。", p: "Rough から Awesome までの5段階スライダーと、その日の要因タグ。履歴で傾向をやさしく確認できます。", bullets: ["ワンタップの毎日気分記録", "仕事、家族、睡眠、天気などの要因タグ", "カレンダーヒートマップと週平均", "気分と文章を1つの記録に"] },
    { tag: "04 · プロンプト", h3: "白紙から始めなくていい。", p: "感謝、内省、創造性、目標などのカテゴリと、長めのテーマ別Journey。毎日の通知時間も選べます。", bullets: ["200以上の厳選プロンプト", "テーマ別の複数日Journey", "カスタム通知時間", "圧ではなく積み重ねを数える連続記録"] },
    { tag: "05 · 検索", h3: "昔の思考や記憶をすばやく探す。", p: "「morning」「Tokyo」「mom」などを入力すると、端末内の記録だけを検索。天気、気分、日付、添付で絞り込み。", bullets: ["ローカル全文検索", "日付、気分、天気、タグ、添付で絞り込み", "章、旅行、プロジェクト用フォルダ", "ピン留めとお気に入り"] },
    { tag: "06 · 記録追加", h3: "文章以上を残す。", p: "写真、音声メモ、小さなステッカーを記録に追加。すべて暗号化された日記ファイル内に保存されます。", bullets: ["写真・画像添付", "日記用の音声メモ", "手描きステッカー", "暗号化された .gamu ファイル内に保存"] },
    { tag: "07 · バックアップ", h3: "バックアップも自分で管理。", p: "日記全体を1つの暗号化 .gamu ファイルとして書き出し。信頼するドライブ、PC、SDカードへ。復元はワンタップ。", bullets: ["ワンタップ暗号化エクスポート", "端末保存または任意アプリに共有", "新しいスマホへ数秒でインポート", "バックアップサーバーは存在しません"] },
    { tag: "08 · テーマ", h3: "いつでも快適に、プライベートに。", p: "夜には真っ黒なOLEDテーマ、朝には温かい紙のテーマ。同じ読みやすさと落ち着きで書けます。", bullets: ["夜向けのOLEDブラック", "昼向けの温かい紙テーマ", "調整できる文字サイズと行間", "システムテーマに自動追従"] },
  ] },
  privacy: { eyebrow: "/ 約束", h2: "理解できる<em>プライバシー</em>。", p: "長い法律文書でも、大げさなセキュリティバッジでもありません。あなたの言葉に何が起こるかを、4つの短い文で説明します。", note: "<strong>主張しないこと:</strong> エンドツーエンド暗号化 (端末だけなので「端」はありません)、第三者監査、ゼロ知識認証。", cards: [["01 · アカウントなし", "登録しません。", "メールもユーザー名も Google ログインもありません。アプリを開く。書く。それだけです。"], ["02 · クラウド同期なし", "記録はスマホから出ません。", "日記用サーバーは運用していません。データは端末上の暗号化ストレージにあります。"], ["03 · ローカル保護", "PIN、パスワード、生体認証でロック。", "日記は保存時に暗号化されます。解除はこの端末、このアプリで、あなたが設定した方法だけです。"], ["04 · バックアップはあなたのもの", "サービスではなくファイルです。", "暗号化された <code>.gamu</code> ファイルを書き出し、好きな場所へ。新しい端末にもすぐ取り込めます。"]] },
  pricing: { eyebrow: "/ 価格", h2: "信頼を守るシンプルな価格。", p: "無料版はずっと使えます。Pro は買い切り。サブスクでも、自動更新される無料体験でもありません。", free: { tier: "無料", name: "Gamu Journal", price: "¥0", small: "ずっと", note: "カード不要・アカウント不要", bullets: ["無制限の記録", "PIN、パスワード、生体認証ロック", "毎日の気分記録", "タグとフォルダ", "ランダムな毎日プロンプト", "ローカル検索", "OLEDダーク + 紙テーマ"], cta: "無料でインストール", foot: "Google Play と App Store で入手できます。" }, pro: { tier: "Pro · 買い切り", name: "Gamu Journal Pro", price: "買い切りPro解除", small: "購入詳細はストアで確認", note: "サブスクなし・更新なし", bullets: ["無料版のすべて", "200以上のプロンプトと複数日Journey", "音声メモと写真添付", "自動バックアップスケジュール", "カスタム通知時間", "ステッカーパック", "その他の機能"], cta: "Proを解除", foot: "支払い前にストアが購入詳細を表示します。" } },
  faqHeader: { eyebrow: "/ 正直な回答", h2: "友達に答えるように、質問に答えます。" },
  faq: [["Gamu Journal にアカウントは必要ですか？", "いいえ。登録、メール、ユーザー名はありません。インストールしてすぐ書き始められます。ユーザーデータベースもありません。"], ["日記はクラウド同期されますか？", "Gamu Journal にクラウド同期はありません。記録は書いた端末に残ります。別の場所に保管したい場合は、暗号化バックアップファイルを書き出して、信頼する場所に保存できます。"], ["日記はどう守られますか？", "日記はPIN、パスワード、または端末の生体認証から派生したキーでAES-256暗号化されます。バックグラウンド時は自動ロックし、アプリ切り替え画面にも内容を出しません。"], ["スマホをなくしたらどうなりますか？", "バックアップを書き出していなければ、記録は端末と一緒に失われます。復元用サーバーはありません。暗号化された <code>.gamu</code> ファイルを定期的に信頼する場所へ保存してください。"], ["サブスクリプションですか？", "いいえ。無料版は無料のまま、Pro はアプリストア経由の買い切りです。更新も、自動課金される無料体験も、Pro+ もありません。"], ["iPhone版はありますか？", "はい。Gamu Journal は App Store で入手できます。バックアップを書き出さない限り、日記は書いた端末に残ります。"]],
  footer: { ...COPY.en.footer, tagline: "Gamu Blocks のプライベートなオフライン日記・気分記録アプリ。", product: "製品", studio: "スタジオ", get: "アプリを入手", baby: "Gamu Baby · プライベート育児記録", neko: "Gamu Neko · 集中タイマー", gronu: "Gronu · ストップウォッチ", gnit: "Gnit · 編み物カウンター", credits: 'Solar Icon Set by 480 Design、<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> ライセンス。分析ではなく、丁寧に作りました。プライバシー配慮の指標のみ。' },
  sticky: { title: "Gamu Journal - Google Playで無料", sub: "オフライン・アカウント不要・サブスクなし", cta: "入手" },
  assets: baseAssets,
};

COPY.pt_BR = {
  ...COPY.en,
  meta: { title: "Gamu Journal | Diário privado offline e monitor de humor", description: "Escreva com privacidade em um diário offline feito para refletir com calma. O Gamu Journal mantém suas entradas no dispositivo com proteção local, humor, prompts, busca e backups sob seu controle.", ogTitle: "Gamu Journal | Um diário privado que fica no seu dispositivo", ogDescription: "Diário offline, monitor de humor, prompts, busca e backups. Sem contas. Sem sincronização na nuvem. Sem pressão de assinatura.", offerFree: "Grátis", offerPro: "Pro (compra única)" },
  a11y: { ...COPY.en.a11y, skip: "Ir para o conteúdo", primaryNav: "Navegação principal", language: "Idioma", heroChips: "Por que Gamu Journal", googlePlay: "Obter Gamu Journal no Google Play", appStore: "Baixar Gamu Journal na App Store", googlePlayBadge: "Disponível no Google Play", appStoreBadge: "Baixar na App Store", installTerms: "Condições de instalação", heroPreview: "Prévia do app: escrita, bloqueio e humor", trustFacts: "Fatos de confiança", stickyInstall: "Instalar Gamu Journal" },
  nav: ["Recursos", "Privacidade", "Preço", "FAQ"], navCta: "Obter app",
  hero: { h1: "Um diário privado que fica no seu dispositivo.", sub: "Escreva, reflita e acompanhe seu humor em um diário offline feito para calma e privacidade criptografada, sem contas, nuvem, anúncios ou pressão de assinatura.", chips: ["Offline primeiro", "Sem conta", "Armazenamento local AES-256", "PIN - senha - biometria"], seePrivacy: "Ver como a privacidade funciona", micro: ["Instalação grátis", "Sem conta obrigatória", "Suas entradas ficam no dispositivo"], tags: ["01<br>Bloqueio", "03<br>Humor", "// Criptografado no dispositivo", "// Sem conta nunca"], phoneAlts: ["Tela de desbloqueio por PIN - seu diário está bloqueado neste dispositivo", "Tela de escrita - entrada tranquila de manhã com tags Life e Weather", "Monitor de humor - humor Awesome com tags de fatores"] },
  trust: ["100% offline por padrão", "Zero contas, zero rastreamento", "Criptografia local AES-256", "O arquivo de backup é seu", "Criado por um estúdio de 2 pessoas em Osaka"],
  showcase: { eyebrow: "/ Dentro do app", h2: "Oito telas. Um hábito tranquilo.", p: "Do primeiro PIN à centésima entrada, cada superfície segue uma ideia: isto é seu, neste dispositivo, de mais ninguém.", cards: [["01 · ESCREVER", "Escreva com privacidade", "Um editor limpo que sai do caminho."], ["02 · BLOQUEIO", "Bloqueie seu diário", "PIN, senha ou impressão digital - você escolhe."], ["03 · HUMOR", "Entenda seu humor", "Cinco níveis, um slider suave e tags do que afeta você."], ["04 · PROMPTS", "Mantenha o hábito", "Prompts diários, lembretes gentis e uma sequência sem culpa."], ["05 · BUSCA", "Organize memórias", "Pastas, tags e busca instantânea por anos de entradas."], ["06 · CAPTURA", "Registre mais que texto", "Fotos, notas de voz e pequenos adesivos quando palavras não bastam."], ["07 · BACKUP", "Fique no controle", "Exporte um arquivo .gamu criptografado. Restaure quando precisar."], ["08 · TEMA", "Escreva a qualquer hora", "Preto para OLED à noite. Papel quente de dia."]] },
  features: { eyebrow: "/ O app inteiro", h2: "Feito como caderno, não como feed.", p: "Sem culpa por sequência, sem pedidos de amizade, sem recursos que você não pediu. Só as partes de um diário que você realmente usa.", cards: [
    { tag: "01 · Escrever", h3: "Uma página em branco que respeita seu tempo.", p: "Abra o app e continue de onde parou. Amigável a Markdown, com tags, datas e contador discreto. Sem sugestões de IA distraindo, sem banners nos seus pensamentos.", bullets: ["Títulos com adesivos opcionais", "Tags como Life, Weather, Health", "Contadores de palavras, caracteres e leitura", "Navegação por calendário por entrada"] },
    { tag: "02 · Bloqueio", h3: "Protegido antes que alguém leia.", p: "Escolha como desbloquear: PIN, senha, impressão digital ou rosto. O diário é criptografado em repouso com AES-256.", bullets: ["PIN, senha ou biometria", "Bloqueio automático em segundo plano", "Sem e-mail de recuperação porque não há conta", "Prévia oculta ao alternar apps"] },
    { tag: "03 · Humor", h3: "Acompanhe como você se sente.", p: "Slider de cinco níveis de Rough a Awesome, com tags opcionais do que afetou seu dia. Padrões aparecem com calma no histórico.", bullets: ["Registro diário de humor em um toque", "Tags de fatores: trabalho, família, sono, clima", "Mapa de calor e média semanal", "Humor e escrita em uma entrada"] },
    { tag: "04 · Prompts", h3: "Nunca comece de uma página vazia.", p: "Categorias integradas como gratidão, autorreflexão, criatividade e metas, além de Journeys temáticas. Defina lembretes no horário que quiser.", bullets: ["Mais de 200 prompts selecionados", "Journeys temáticas de vários dias", "Horários de lembrete personalizados", "Sequências que contam, sem pressão"] },
    { tag: "05 · Busca", h3: "Encontre pensamentos antigos rapidamente.", p: "Digite uma palavra - manhã, Tóquio, mãe - e o app busca apenas nas entradas do seu dispositivo. Filtre por clima, humor, data ou anexos.", bullets: ["Busca local em texto completo", "Filtros por data, humor, clima, tags e anexos", "Pastas para capítulos, viagens e projetos", "Entradas fixadas e favoritas"] },
    { tag: "06 · Captura", h3: "Capture mais que texto.", p: "Anexe uma foto, grave uma nota de voz ou adicione um adesivo. Tudo fica dentro do arquivo criptografado do diário.", bullets: ["Fotos e imagens anexadas", "Notas de voz para suas entradas", "Adesivos desenhados à mão", "Guardado no arquivo .gamu criptografado"] },
    { tag: "07 · Backup", h3: "Mantenha backups sob seu controle.", p: "Exporte o diário como um único arquivo .gamu criptografado. Envie para seu drive, laptop ou cartão SD - onde você confiar. Restaurar leva um toque.", bullets: ["Exportação criptografada em um toque", "Salvar no dispositivo ou compartilhar", "Importar em outro celular em segundos", "Nenhum servidor de backup"] },
    { tag: "08 · Tema", h3: "Escrita privada confortável a qualquer hora.", p: "Tema preto verdadeiro para OLED à noite e papel quente pela manhã, com a mesma legibilidade e calma.", bullets: ["Preto OLED para a noite", "Tema de papel quente para o dia", "Tamanho e altura de linha ajustáveis", "Segue o tema do sistema"] },
  ] },
  privacy: { eyebrow: "/ O acordo", h2: "Privacidade que você <em>entende</em>.", p: "Sem novela jurídica. Sem selos vagos de segurança líder do setor. Aqui está o que acontece com suas palavras em quatro frases curtas.", note: "<strong>O que não prometemos:</strong> criptografia de ponta a ponta (não há pontas - só seu dispositivo), auditorias de terceiros ou certificações de conhecimento zero.", cards: [["01 · Sem conta", "Você não se cadastra.", "Sem e-mail, usuário ou Entrar com Google. O app abre. Você escreve. Só isso."], ["02 · Sem nuvem", "Suas entradas nunca saem do celular.", "Não temos servidor para seu diário. Os dados ficam no armazenamento criptografado do app no seu dispositivo."], ["03 · Proteção local", "Bloqueie com PIN, senha ou biometria.", "O diário é criptografado em repouso. Para desbloquear, vale o método que você definiu neste dispositivo."], ["04 · Backups são seus", "Backup é arquivo, não serviço.", "Exporte um arquivo <code>.gamu</code> criptografado. Coloque onde quiser - ou em lugar nenhum. Importe em um novo celular em segundos."]] },
  pricing: { eyebrow: "/ Preço", h2: "Preço simples que respeita a confiança.", p: "A versão grátis é útil para sempre. Pro é compra única - não assinatura, nem teste grátis com renovação automática.", free: { tier: "Grátis", name: "Gamu Journal", price: "R$0", small: "para sempre", note: "Sem cartão · Sem conta", bullets: ["Entradas ilimitadas", "Bloqueio por PIN, senha e biometria", "Monitor diário de humor", "Tags e pastas", "Prompts diários aleatórios", "Busca local", "Temas OLED escuro + papel"], cta: "Instalar grátis", foot: "Disponível no Google Play e na App Store." }, pro: { tier: "Pro · Compra única", name: "Gamu Journal Pro", price: "Desbloqueio Pro único", small: "detalhes na loja", note: "Sem assinatura · Sem renovações", bullets: ["Tudo do Grátis", "200+ prompts e Journeys", "Notas de voz e fotos", "Agendamento de autobackup", "Horários de lembrete personalizados", "Pacote de adesivos", "E mais..."], cta: "Desbloquear Pro", foot: "A loja mostra todos os detalhes antes do pagamento." } },
  faqHeader: { eyebrow: "/ Respostas honestas", h2: "Perguntas respondidas como um amigo responderia." },
  faq: [["Gamu Journal precisa de conta?", "Não. Não há cadastro, e-mail ou nome de usuário. Você instala o app e começa a escrever. Não temos banco de usuários porque não há usuários nesse sentido."], ["Meu diário sincroniza com a nuvem?", "Não por nós. O Gamu Journal não tem sincronização na nuvem; suas entradas ficam no dispositivo onde foram escritas. Se quiser uma cópia em outro lugar, exporte um backup criptografado e salve onde confiar."], ["Como meu diário é protegido?", "O diário é criptografado em repouso com AES-256 usando uma chave derivada do seu PIN, senha ou biometria. O app bloqueia ao ir para segundo plano e não mostra entradas na prévia de apps recentes."], ["E se eu perder o celular?", "Se você não exportou um backup, as entradas vão embora com o dispositivo. Não há servidor para restaurar. Recomendamos exportar periodicamente um arquivo <code>.gamu</code> criptografado e guardar onde confiar."], ["Existe assinatura?", "Não. O grátis continua grátis, e o Pro é compra única pelas lojas. Sem renovações, testes grátis que começam a cobrar, ou Pro+."], ["Existe versão para iPhone?", "Sim. Gamu Journal está disponível na App Store. Seu diário continua no dispositivo onde você escreve, a menos que você exporte um backup."]],
  footer: { ...COPY.en.footer, tagline: "Um diário offline privado e monitor de humor da Gamu Blocks.", product: "Produto", studio: "Estúdio", get: "Obter app", baby: "Gamu Baby · Rastreador privado de bebê", neko: "Gamu Neko · Timer de foco", gronu: "Gronu · Cronômetro", gnit: "Gnit · Contador de tricô", credits: 'Solar Icon Set por 480 Design, licenciado sob <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Feito com cuidado, não com analytics. Apenas métricas com respeito à privacidade.' },
  sticky: { title: "Gamu Journal - Grátis no Google Play", sub: "Offline · Sem conta · Sem assinatura", cta: "Instalar" },
  assets: baseAssets,
};

const compactLocales = {
  ru: {
    meta: ["Gamu Journal | Приватный офлайн-дневник и трекер настроения", "Пишите приватно в офлайн-дневнике для спокойных размышлений. Gamu Journal хранит записи на вашем устройстве с локальной защитой, настроением, подсказками, поиском и резервными копиями под вашим контролем.", "Gamu Journal | Приватный дневник, который остается на устройстве", "Офлайн-дневник, трекер настроения, подсказки, поиск и резервные копии. Без аккаунтов. Без облачной синхронизации. Без давления подписки.", "Бесплатно", "Pro (разовая покупка)"],
    nav: ["Функции", "Приватность", "Цена", "FAQ"], navCta: "Скачать",
    hero: ["Приватный дневник, который остается на вашем устройстве.", "Пишите, размышляйте и отслеживайте настроение в офлайн-дневнике для спокойной зашифрованной приватности, без аккаунтов, облака, рекламы и давления подписки.", ["Сначала офлайн", "Без аккаунта", "Локальное хранилище AES-256", "PIN - пароль - биометрия"], "Как работает приватность", ["Установка бесплатна", "Аккаунт не нужен", "Записи остаются на устройстве"], ["01<br>Замок", "03<br>Настроение", "// Зашифровано на устройстве", "// Без аккаунта"]],
    trust: ["100% офлайн по умолчанию", "Ноль аккаунтов, ноль трекинга", "Локальное шифрование AES-256", "Файл резервной копии принадлежит вам", "Создано студией из 2 человек в Осаке"],
    heads: [["/ Внутри приложения", "Восемь экранов. Одна спокойная привычка.", "От первого PIN до сотой записи все поверхности построены вокруг идеи: это ваше, на этом устройстве, больше ничье."], ["/ Все приложение", "Как блокнот, а не лента.", "Без чувства вины за серии, заявок в друзья и лишних функций. Только части дневника, которыми вы реально пользуетесь."], ["/ Договор", "Приватность, которую можно <em>понять</em>.", "Без юридического романа и громких значков. Вот что происходит с вашими словами в четырех коротких предложениях."], ["/ Цена", "Простая цена, которая уважает доверие.", "Бесплатная версия полезна навсегда. Pro - разовая покупка, не подписка и не автопродлеваемый пробный период."], ["/ Честные ответы", "Вопросы с ответами как от друга."]],
    cards: [["01 · ПИСАТЬ", "Пишите приватно", "Чистый редактор, который не мешает."], ["02 · ЗАМОК", "Блокируйте дневник", "PIN, пароль или отпечаток - выбираете вы."], ["03 · НАСТРОЕНИЕ", "Понимайте настроение", "Пять шагов, мягкий слайдер и теги факторов."], ["04 · ПОДСКАЗКИ", "Сохраняйте привычку", "Ежедневные подсказки, мягкие напоминания и серия без стыда."], ["05 · ПОИСК", "Организуйте воспоминания", "Папки, теги и быстрый поиск по годам записей."], ["06 · ЗАХВАТ", "Больше чем текст", "Фото, голосовые заметки и стикеры, когда слов мало."], ["07 · БЭКАП", "Все под контролем", "Экспортируйте зашифрованный .gamu и восстановите, когда нужно."], ["08 · ТЕМА", "Пишите в любое время", "Черный OLED ночью, теплая бумага днем."]],
    featureTitles: [["01 · Писать", "Пустая страница, уважающая ваше время."], ["02 · Замок", "Защищено до того, как кто-то прочтет."], ["03 · Настроение", "Отслеживайте самочувствие со временем."], ["04 · Подсказки", "Не начинайте с пустой страницы."], ["05 · Поиск", "Быстро находите старые мысли."], ["06 · Захват", "Сохраняйте больше, чем текст."], ["07 · Бэкап", "Держите резервные копии под контролем."], ["08 · Тема", "Комфортное приватное письмо в любое время."]],
    privacyCards: [["01 · Без аккаунта", "Вы не регистрируетесь.", "Нет email, имени пользователя или входа через Google. Открыли приложение. Пишете. Все."], ["02 · Без облака", "Записи не покидают телефон.", "У нас нет сервера для вашего дневника. Данные живут в зашифрованном хранилище приложения."], ["03 · Локальная защита", "PIN, пароль или биометрия.", "Дневник зашифрован в покое. Разблокировка работает только на этом устройстве."], ["04 · Бэкапы ваши", "Это файл, не сервис.", "Экспортируйте зашифрованный <code>.gamu</code> и храните где хотите."]],
    pricing: [["Бесплатно", "$0", "навсегда", "Без карты · Без аккаунта", "Установить бесплатно"], ["Pro · Разово", "Разовая разблокировка Pro", "детали в магазине", "Без подписки · Без продлений", "Разблокировать Pro"]],
    faq: [["Нужен ли аккаунт?", "Нет. Нет регистрации, email или имени пользователя. Установите приложение и начинайте писать."], ["Дневник синхронизируется с облаком?", "Нет. Встроенной облачной синхронизации нет. Записи остаются на устройстве, где они были написаны."], ["Как защищен дневник?", "Дневник зашифрован AES-256 с ключом от PIN, пароля или биометрии. Приложение блокируется в фоне."], ["Что если я потеряю телефон?", "Без экспортированной резервной копии записи потеряются вместе с устройством. Серверов восстановления нет. Периодически сохраняйте зашифрованный <code>.gamu</code>."], ["Есть подписка?", "Нет. Бесплатная версия остается бесплатной, Pro - разовая покупка через магазины."], ["Есть версия для iPhone?", "Да. Gamu Journal доступен в App Store."]],
    footer: ["Приватный офлайн-дневник и трекер настроения от Gamu Blocks.", "Продукт", "Студия", "Скачать", "Gamu Baby · Приватный трекер малыша", "Gamu Neko · Таймер фокуса", "Gronu · Секундомер", "Gnit · Счетчик вязания", "Gamu Journal - бесплатно в Google Play", "Офлайн · Без аккаунта · Без подписки", "Установить"],
  },
  fr: {
    meta: ["Gamu Journal | Journal privé hors ligne et suivi d'humeur", "Écrivez en privé dans un journal hors ligne pensé pour réfléchir calmement. Gamu Journal garde vos entrées sur votre appareil avec protection locale, humeur, prompts, recherche et sauvegardes sous votre contrôle.", "Gamu Journal | Un journal privé qui reste sur votre appareil", "Journal hors ligne, suivi d'humeur, prompts, recherche et sauvegardes. Sans compte. Sans synchronisation cloud. Sans pression d'abonnement.", "Gratuit", "Pro (achat unique)"],
    nav: ["Fonctions", "Confidentialité", "Prix", "FAQ"], navCta: "Obtenir l'app",
    hero: ["Un journal privé qui reste sur votre appareil.", "Écrivez, réfléchissez et suivez votre humeur dans un journal hors ligne conçu pour une confidentialité calme et chiffrée, sans compte, cloud, publicités ni pression d'abonnement.", ["Hors ligne d'abord", "Sans compte", "Stockage local AES-256", "PIN - mot de passe - biométrie"], "Voir la confidentialité", ["Installation gratuite", "Aucun compte requis", "Vos entrées restent sur l'appareil"], ["01<br>Verrou", "03<br>Humeur", "// Chiffré sur l'appareil", "// Jamais de compte"]],
    trust: ["100% hors ligne par défaut", "Zéro compte, zéro suivi", "Chiffrement local AES-256", "Le fichier de sauvegarde est à vous", "Créé par un studio de 2 personnes à Osaka"],
    heads: [["/ Dans l'app", "Huit écrans. Une habitude calme.", "Du premier PIN à la centième entrée, chaque surface suit une idée: c'est à vous, sur cet appareil, à personne d'autre."], ["/ Toute l'app", "Construit comme un carnet, pas un fil.", "Pas de culpabilité de série, pas de demandes d'amis, pas de fonctions inutiles. Seulement les parties d'un journal que vous utilisez vraiment."], ["/ Le pacte", "Une confidentialité que vous pouvez <em>comprendre</em>.", "Pas de roman juridique. Pas de badges vagues. Voici ce qui arrive à vos mots en quatre phrases courtes."], ["/ Prix", "Un prix simple qui respecte la confiance.", "La version gratuite reste utile pour toujours. Pro est un achat unique, pas un abonnement ni un essai qui se renouvelle."], ["/ Réponses honnêtes", "Des questions, répondues comme par un ami."]],
    cards: [["01 · ÉCRIRE", "Écrivez en privé", "Un éditeur épuré qui s'efface."], ["02 · VERROU", "Verrouillez votre journal", "PIN, mot de passe ou empreinte - à vous de choisir."], ["03 · HUMEUR", "Comprenez votre humeur", "Cinq niveaux, un curseur doux et des tags de facteurs."], ["04 · PROMPTS", "Gardez l'habitude", "Prompts quotidiens, rappels doux et série sans honte."], ["05 · RECHERCHE", "Organisez vos souvenirs", "Dossiers, tags et recherche instantanée sur des années."], ["06 · CAPTURE", "Plus que du texte", "Photos, notes vocales et petits stickers."], ["07 · SAUVEGARDE", "Gardez le contrôle", "Exportez un .gamu chiffré. Restaurez quand il faut."], ["08 · THÈME", "Écrivez à toute heure", "Noir OLED la nuit. Papier chaud le jour."]],
    featureTitles: [["01 · Écrire", "Une page blanche qui respecte votre temps."], ["02 · Verrou", "Protégé avant toute lecture."], ["03 · Humeur", "Suivez ce que vous ressentez."], ["04 · Prompts", "Ne commencez jamais d'une page vide."], ["05 · Recherche", "Retrouvez vite vos anciennes pensées."], ["06 · Capture", "Capturez plus que du texte."], ["07 · Sauvegarde", "Gardez les sauvegardes sous votre contrôle."], ["08 · Thème", "Écriture privée confortable, à tout moment."]],
    privacyCards: [["01 · Sans compte", "Vous ne vous inscrivez pas.", "Pas d'e-mail, pas d'identifiant, pas de connexion Google. L'app s'ouvre. Vous écrivez."], ["02 · Sans cloud", "Vos entrées ne quittent pas le téléphone.", "Nous n'avons pas de serveur pour votre journal. Les données restent dans le stockage chiffré de l'app."], ["03 · Protection locale", "PIN, mot de passe ou biométrie.", "Le journal est chiffré au repos et se déverrouille seulement sur cet appareil."], ["04 · Vos sauvegardes", "Un fichier, pas un service.", "Exportez un <code>.gamu</code> chiffré et placez-le où vous voulez."]],
    pricing: [["Gratuit", "0 €", "toujours", "Sans carte · Sans compte", "Installer gratuitement"], ["Pro · Achat unique", "Déblocage Pro unique", "détails en boutique", "Sans abonnement · Sans renouvellement", "Débloquer Pro"]],
    faq: [["Gamu Journal demande-t-il un compte ?", "Non. Pas d'inscription, d'e-mail ou de nom d'utilisateur. Installez l'app et commencez à écrire."], ["Mon journal se synchronise-t-il avec le cloud ?", "Non. Gamu Journal n'intègre pas de synchronisation cloud. Les entrées restent sur l'appareil où elles sont écrites."], ["Comment mon journal est-il protégé ?", "Il est chiffré au repos avec AES-256 à partir de votre PIN, mot de passe ou biométrie. L'app se verrouille en arrière-plan."], ["Que se passe-t-il si je perds mon téléphone ?", "Sans sauvegarde exportée, les entrées sont perdues avec l'appareil. Il n'y a pas de serveur de restauration. Exportez périodiquement un <code>.gamu</code> chiffré."], ["Y a-t-il un abonnement ?", "Non. La version gratuite reste gratuite et Pro est un achat unique via les boutiques."], ["Existe-t-il une version iPhone ?", "Oui. Gamu Journal est disponible sur l'App Store."]],
    footer: ["Un journal privé hors ligne et suivi d'humeur par Gamu Blocks.", "Produit", "Studio", "Obtenir l'app", "Gamu Baby · Suivi bébé privé", "Gamu Neko · Minuteur de concentration", "Gronu · Chronomètre", "Gnit · Compteur de tricot", "Gamu Journal - gratuit sur Google Play", "Hors ligne · Sans compte · Sans abonnement", "Installer"],
  },
  es: {
    meta: ["Gamu Journal | Diario privado sin conexión y seguimiento de ánimo", "Escribe en privado con un diario sin conexión pensado para reflexionar con calma. Gamu Journal mantiene tus entradas en tu dispositivo con protección local, ánimo, prompts, búsqueda y copias bajo tu control.", "Gamu Journal | Un diario privado que se queda en tu dispositivo", "Diario sin conexión, seguimiento de ánimo, prompts, búsqueda y copias. Sin cuentas. Sin nube. Sin presión de suscripción.", "Gratis", "Pro (pago único)"],
    nav: ["Funciones", "Privacidad", "Precio", "FAQ"], navCta: "Obtener app",
    hero: ["Un diario privado que se queda en tu dispositivo.", "Escribe, reflexiona y registra tu ánimo en un diario sin conexión creado para una privacidad tranquila y cifrada, sin cuentas, nube, anuncios ni presión de suscripción.", ["Primero sin conexión", "Sin cuenta", "Almacenamiento local AES-256", "PIN - contraseña - biometría"], "Ver cómo funciona la privacidad", ["Instalación gratis", "Sin cuenta obligatoria", "Tus entradas se quedan en tu dispositivo"], ["01<br>Bloqueo", "03<br>Ánimo", "// Cifrado en el dispositivo", "// Nunca hay cuenta"]],
    trust: ["100% sin conexión por defecto", "Cero cuentas, cero rastreo", "Cifrado local AES-256", "El archivo de copia es tuyo", "Creado por un estudio de 2 personas en Osaka"],
    heads: [["/ Dentro de la app", "Ocho pantallas. Un hábito tranquilo.", "Desde tu primer PIN hasta tu entrada número cien, cada superficie parte de una idea: esto es tuyo, en este dispositivo, de nadie más."], ["/ Toda la app", "Hecha como un cuaderno, no como un feed.", "Sin culpa por rachas, sin solicitudes de amistad, sin funciones que no pediste. Solo las partes de un diario que realmente usas."], ["/ El trato", "Privacidad que puedes <em>entender</em>.", "Sin novela legal. Sin medallas vagas de seguridad. Esto es lo que pasa con tus palabras en cuatro frases cortas."], ["/ Precio", "Precio simple que respeta la confianza.", "Gratis es útil para siempre. Pro es un pago único, no una suscripción ni una prueba que se renueva."], ["/ Respuestas honestas", "Preguntas respondidas como lo haría un amigo."]],
    cards: [["01 · ESCRIBIR", "Escribe en privado", "Un editor limpio que no estorba."], ["02 · BLOQUEO", "Bloquea tu diario", "PIN, contraseña o huella: tú eliges."], ["03 · ÁNIMO", "Entiende tu ánimo", "Cinco pasos, un deslizador suave y etiquetas de factores."], ["04 · PROMPTS", "Mantén el hábito", "Prompts diarios, recordatorios suaves y una racha sin culpa."], ["05 · BÚSQUEDA", "Organiza recuerdos", "Carpetas, etiquetas y búsqueda instantánea por años."], ["06 · CAPTURA", "Más que texto", "Fotos, notas de voz y stickers cuando faltan palabras."], ["07 · COPIA", "Mantén el control", "Exporta un .gamu cifrado y restaura cuando lo necesites."], ["08 · TEMA", "Escribe a cualquier hora", "Negro OLED de noche. Papel cálido de día."]],
    featureTitles: [["01 · Escribir", "Una página en blanco que respeta tu tiempo."], ["02 · Bloqueo", "Protegido antes de que alguien pueda leerlo."], ["03 · Ánimo", "Registra cómo te sientes con el tiempo."], ["04 · Prompts", "Nunca empieces desde una página vacía."], ["05 · Búsqueda", "Encuentra pensamientos antiguos rápido."], ["06 · Captura", "Captura más que texto."], ["07 · Copia", "Mantén tus copias bajo control."], ["08 · Tema", "Escritura privada cómoda, a cualquier hora."]],
    privacyCards: [["01 · Sin cuenta", "No te registras.", "Sin email, usuario ni Entrar con Google. Abres la app. Escribes. Eso es todo."], ["02 · Sin nube", "Tus entradas no salen del teléfono.", "No tenemos servidor para tu diario. Los datos viven en el almacenamiento cifrado de la app."], ["03 · Protección local", "PIN, contraseña o biometría.", "El diario está cifrado en reposo y se desbloquea solo en este dispositivo."], ["04 · Tus copias", "Un archivo, no un servicio.", "Exporta un <code>.gamu</code> cifrado y guárdalo donde quieras."]],
    pricing: [["Gratis", "$0", "siempre", "Sin tarjeta · Sin cuenta", "Instalar gratis"], ["Pro · Pago único", "Desbloqueo Pro único", "detalles en la tienda", "Sin suscripción · Sin renovaciones", "Desbloquear Pro"]],
    faq: [["¿Gamu Journal necesita una cuenta?", "No. No hay registro, email ni usuario. Instalas la app y empiezas a escribir."], ["¿Mi diario se sincroniza con la nube?", "No. Gamu Journal no tiene sincronización en la nube. Tus entradas se quedan en el dispositivo donde las escribes."], ["¿Cómo se protege mi diario?", "El diario se cifra en reposo con AES-256 usando una clave derivada de tu PIN, contraseña o biometría. La app se bloquea en segundo plano."], ["¿Qué pasa si pierdo el teléfono?", "Si no exportaste una copia, tus entradas se pierden con el dispositivo. No hay servidor para restaurarlas. Exporta periódicamente un <code>.gamu</code> cifrado."], ["¿Hay suscripción?", "No. Gratis sigue siendo gratis y Pro es un pago único en las tiendas."], ["¿Hay versión para iPhone?", "Sí. Gamu Journal está disponible en la App Store."]],
    footer: ["Un diario privado sin conexión y seguimiento de ánimo de Gamu Blocks.", "Producto", "Estudio", "Obtener app", "Gamu Baby · Rastreador privado de bebé", "Gamu Neko · Temporizador de enfoque", "Gronu · Cronómetro", "Gnit · Contador de tejido", "Gamu Journal - gratis en Google Play", "Sin conexión · Sin cuenta · Sin suscripción", "Instalar"],
  },
  ko: {
    meta: ["Gamu Journal | 개인 오프라인 일기와 기분 기록", "차분한 회고를 위한 오프라인 일기에 개인적으로 쓰세요. Gamu Journal은 로컬 보호, 기분 기록, 프롬프트, 검색, 직접 관리하는 백업으로 기록을 기기에 보관합니다.", "Gamu Journal | 기기에 남는 개인 일기", "오프라인 일기, 기분 기록, 프롬프트, 검색, 백업. 계정 없음. 클라우드 동기화 없음. 구독 압박 없음.", "무료", "Pro (1회 구매)"],
    nav: ["기능", "개인정보", "가격", "FAQ"], navCta: "앱 받기",
    hero: ["기기에 남는 개인 일기.", "계정, 클라우드 동기화, 광고, 구독 압박 없이 차분한 암호화 프라이버시를 지키는 오프라인 일기에 쓰고, 돌아보고, 기분을 기록하세요.", ["오프라인 우선", "계정 없음", "AES-256 로컬 저장", "PIN - 비밀번호 - 생체 인증"], "개인정보 보호 방식 보기", ["무료 설치", "계정 필요 없음", "기록은 기기에 보관"], ["01<br>잠금", "03<br>기분", "// 기기에서 암호화", "// 계정 없음"]],
    trust: ["기본 100% 오프라인", "계정 없음, 추적 없음", "AES-256 로컬 암호화", "백업 파일은 당신의 것", "오사카의 2인 스튜디오 제작"],
    heads: [["/ 앱 안쪽", "여덟 화면. 하나의 조용한 습관.", "첫 PIN부터 백 번째 기록까지, 모든 화면은 한 가지 생각으로 만들어졌습니다. 이것은 당신의 것이고, 이 기기에 있습니다."], ["/ 전체 앱", "피드가 아니라 노트처럼.", "연속 기록 압박도, 친구 요청도, 원하지 않은 기능도 없습니다. 실제로 쓰는 일기 기능만."], ["/ 약속", "<em>이해할 수 있는</em> 개인정보 보호.", "긴 법률 문구도, 모호한 보안 배지도 아닙니다. 당신의 글에 무슨 일이 일어나는지 네 문장으로 설명합니다."], ["/ 가격", "신뢰를 지키는 단순한 가격.", "무료는 계속 쓸 수 있습니다. Pro는 구독이 아닌 1회 구매입니다."], ["/ 솔직한 답변", "친구에게 말하듯 답하는 질문들."]],
    cards: [["01 · 쓰기", "개인적으로 쓰기", "방해하지 않는 깔끔한 에디터."], ["02 · 잠금", "일기 잠그기", "PIN, 비밀번호, 지문 중 선택하세요."], ["03 · 기분", "기분 이해하기", "5단계 슬라이더와 영향 요인 태그."], ["04 · 프롬프트", "습관 유지", "매일 프롬프트, 부드러운 알림, 부담 없는 연속 기록."], ["05 · 검색", "기억 정리", "폴더, 태그, 여러 해의 기록 즉시 검색."], ["06 · 캡처", "텍스트 이상 기록", "사진, 음성 메모, 작은 스티커."], ["07 · 백업", "직접 관리", "암호화된 .gamu 파일을 내보내고 필요할 때 복원."], ["08 · 테마", "언제든 쓰기", "밤에는 OLED 블랙, 낮에는 따뜻한 종이."]],
    featureTitles: [["01 · 쓰기", "시간을 존중하는 빈 페이지."], ["02 · 잠금", "누군가 읽기 전에 보호."], ["03 · 기분", "시간에 따른 감정 추적."], ["04 · 프롬프트", "빈 페이지에서 시작하지 않기."], ["05 · 검색", "오래된 생각 빠르게 찾기."], ["06 · 캡처", "텍스트 이상을 담기."], ["07 · 백업", "백업을 직접 관리."], ["08 · 테마", "언제든 편안한 개인 글쓰기."]],
    privacyCards: [["01 · 계정 없음", "가입하지 않습니다.", "이메일, 사용자 이름, Google 로그인 없음. 앱을 열고 쓰면 끝입니다."], ["02 · 클라우드 없음", "기록은 휴대폰을 떠나지 않습니다.", "일기 서버를 운영하지 않습니다. 데이터는 앱의 암호화 저장소에 있습니다."], ["03 · 로컬 보호", "PIN, 비밀번호, 생체 인증.", "일기는 저장 시 암호화되고 이 기기에서만 해제됩니다."], ["04 · 백업은 당신 것", "서비스가 아니라 파일입니다.", "암호화된 <code>.gamu</code> 파일을 내보내 원하는 곳에 보관하세요."]],
    pricing: [["무료", "$0", "계속", "카드 없음 · 계정 없음", "무료 설치"], ["Pro · 1회 구매", "Pro 1회 잠금 해제", "스토어에서 상세 확인", "구독 없음 · 갱신 없음", "Pro 잠금 해제"]],
    faq: [["Gamu Journal에 계정이 필요한가요?", "아니요. 가입, 이메일, 사용자 이름이 없습니다. 앱을 설치하고 바로 쓰면 됩니다."], ["일기가 클라우드에 동기화되나요?", "아니요. Gamu Journal에는 클라우드 동기화가 없습니다. 기록은 작성한 기기에 남습니다."], ["일기는 어떻게 보호되나요?", "일기는 PIN, 비밀번호 또는 생체 인증에서 파생된 키로 AES-256 암호화됩니다. 앱은 백그라운드에서 자동 잠금됩니다."], ["휴대폰을 잃어버리면 어떻게 되나요?", "백업을 내보내지 않았다면 기록은 기기와 함께 사라집니다. 복원 서버는 없습니다. 암호화된 <code>.gamu</code> 파일을 주기적으로 저장하세요."], ["구독인가요?", "아니요. 무료는 계속 무료이고 Pro는 스토어를 통한 1회 구매입니다."], ["iPhone 버전이 있나요?", "네. Gamu Journal은 App Store에서 사용할 수 있습니다."]],
    footer: ["Gamu Blocks의 개인 오프라인 일기 및 기분 기록 앱.", "제품", "스튜디오", "앱 받기", "Gamu Baby · 개인 육아 기록", "Gamu Neko · 집중 타이머", "Gronu · 스톱워치", "Gnit · 뜨개질 카운터", "Gamu Journal - Google Play 무료", "오프라인 · 계정 없음 · 구독 없음", "설치"],
  },
};

const featureBodies = {
  ru: ["Откройте приложение и продолжайте с того места, где остановились. Markdown, теги, даты и тихий счетчик слов - без рекламы и отвлечений.", "Выберите PIN, пароль или биометрию. Дневник шифруется AES-256 в покое.", "Пять уровней настроения и теги того, что повлияло на день. История мягко показывает паттерны.", "Встроенные категории подсказок и тематические Journeys. Настройте ежедневное напоминание.", "Ищите слова только в записях на устройстве. Фильтруйте по погоде, настроению, датам и вложениям.", "Добавляйте фото, голосовые заметки или стикеры. Все остается внутри зашифрованного файла дневника.", "Экспортируйте дневник одним зашифрованным .gamu файлом и храните там, где доверяете.", "Черная OLED-тема для ночи и теплая бумага для утра с той же читаемостью."],
  fr: ["Ouvrez l'app et reprenez où vous étiez. Markdown, tags, dates et compteur discret - sans pubs ni distractions.", "Choisissez PIN, mot de passe ou biométrie. Le journal est chiffré au repos avec AES-256.", "Cinq niveaux d'humeur et des tags pour ce qui vous influence. L'historique montre les tendances doucement.", "Catégories intégrées et Journeys thématiques. Choisissez l'heure du rappel quotidien.", "Cherchez uniquement dans les entrées de votre appareil. Filtrez par météo, humeur, dates ou pièces jointes.", "Ajoutez photo, note vocale ou sticker. Tout reste dans le fichier chiffré du journal.", "Exportez le journal en un fichier .gamu chiffré et gardez-le où vous avez confiance.", "Thème OLED noir pour la nuit et papier chaud pour le matin, avec la même lisibilité."],
  es: ["Abre la app y continúa donde te quedaste. Markdown, etiquetas, fechas y contador discreto, sin anuncios ni distracciones.", "Elige PIN, contraseña o biometría. Todo el diario se cifra en reposo con AES-256.", "Cinco niveles de ánimo y etiquetas para lo que influyó en tu día. El historial muestra patrones suavemente.", "Categorías integradas y Journeys temáticos. Elige la hora de tu recordatorio diario.", "Busca palabras solo en las entradas del dispositivo. Filtra por clima, ánimo, fechas o adjuntos.", "Añade foto, nota de voz o sticker. Todo queda dentro del archivo cifrado del diario.", "Exporta el diario como un único archivo .gamu cifrado y guárdalo donde confíes.", "Tema negro OLED para la noche y papel cálido para la mañana con la misma legibilidad."],
  ko: ["앱을 열고 이어서 쓰세요. Markdown, 태그, 날짜, 조용한 글자 수 카운터가 있고 광고나 방해가 없습니다.", "PIN, 비밀번호, 생체 인증 중 선택하세요. 전체 일기는 AES-256으로 저장 시 암호화됩니다.", "5단계 기분과 영향 요인 태그. 기록에서 패턴을 부드럽게 보여줍니다.", "내장 프롬프트 카테고리와 테마별 Journey. 매일 알림 시간을 직접 정하세요.", "기기 안의 기록만 검색합니다. 날씨, 기분, 날짜, 첨부로 필터링하세요.", "사진, 음성 메모, 스티커를 추가하세요. 모두 암호화된 일기 파일 안에 남습니다.", "전체 일기를 하나의 암호화된 .gamu 파일로 내보내 신뢰하는 곳에 보관하세요.", "밤에는 OLED 블랙, 아침에는 따뜻한 종이 테마. 같은 읽기 편안함을 유지합니다."],
};

const bulletSets = {
  ru: [["Заголовки и стикеры", "Теги Life, Weather, Health", "Счетчики слов, символов и чтения", "Календарь по записям"], ["PIN, пароль или биометрия", "Автоблокировка в фоне", "Нет email восстановления", "Скрытая превью-карточка приложения"], ["Настроение в один тап", "Факторы: работа, семья, сон, погода", "Тепловая карта и среднее за неделю", "Настроение и текст в одной записи"], ["200+ подсказок", "Многодневные Journeys", "Свое время напоминаний", "Серии без давления"], ["Локальный полнотекстовый поиск", "Фильтры по датам, настроению, погоде, тегам", "Папки для поездок и проектов", "Закрепленные и избранные записи"], ["Фото и изображения", "Голосовые заметки", "Рисованные стикеры", "Внутри зашифрованного .gamu"], ["Экспорт в один тап", "Сохранить или поделиться", "Импорт на новом телефоне", "Сервера бэкапа нет"], ["OLED-черный ночью", "Теплая бумага днем", "Размер и межстрочный интервал", "Следует системной теме"]],
  fr: [["Titres et stickers optionnels", "Tags Life, Weather, Health", "Compteurs mots, caractères et lecture", "Navigation calendrier"], ["PIN, mot de passe ou biométrie", "Verrouillage en arrière-plan", "Pas d'e-mail de récupération", "Aperçu masqué au changement d'app"], ["Humeur en un toucher", "Facteurs: travail, famille, sommeil, météo", "Carte thermique et moyenne hebdo", "Humeur et texte dans une entrée"], ["200+ prompts sélectionnés", "Journeys sur plusieurs jours", "Heures de rappel personnalisées", "Séries sans pression"], ["Recherche locale plein texte", "Filtres date, humeur, météo, tags", "Dossiers pour voyages et projets", "Entrées épinglées et favorites"], ["Photos et images", "Notes vocales", "Stickers dessinés", "Dans le .gamu chiffré"], ["Export chiffré en un toucher", "Sauver ou partager", "Importer sur un nouveau téléphone", "Aucun serveur de sauvegarde"], ["Noir OLED la nuit", "Papier chaud le jour", "Taille et interligne réglables", "Suit le thème système"]],
  es: [["Títulos y stickers opcionales", "Etiquetas Life, Weather, Health", "Contadores de palabras, caracteres y lectura", "Navegación por calendario"], ["PIN, contraseña o biometría", "Autobloqueo en segundo plano", "Sin email de recuperación", "Vista previa oculta al cambiar apps"], ["Ánimo diario en un toque", "Factores: trabajo, familia, sueño, clima", "Mapa de calor y promedio semanal", "Ánimo y texto en una entrada"], ["200+ prompts seleccionados", "Journeys de varios días", "Horas de recordatorio personalizadas", "Rachas sin presión"], ["Búsqueda local de texto completo", "Filtros por fecha, ánimo, clima y tags", "Carpetas para viajes y proyectos", "Entradas fijadas y favoritas"], ["Fotos e imágenes", "Notas de voz", "Stickers dibujados", "Dentro del .gamu cifrado"], ["Exportación cifrada en un toque", "Guardar o compartir", "Importar en nuevo teléfono", "Sin servidor de copias"], ["Negro OLED de noche", "Papel cálido de día", "Tamaño e interlineado ajustables", "Sigue el tema del sistema"]],
  ko: [["선택 스티커가 있는 제목", "Life, Weather, Health 태그", "단어, 글자, 읽기 시간 카운터", "기록별 캘린더 이동"], ["PIN, 비밀번호, 생체 인증", "백그라운드 자동 잠금", "복구 이메일 없음", "앱 전환 미리보기 숨김"], ["원탭 일일 기분 기록", "요인 태그: 일, 가족, 수면, 날씨", "히트맵과 주간 평균", "기분과 글을 한 기록에"], ["200개 이상 프롬프트", "여러 날 Journey", "맞춤 알림 시간", "압박 없는 연속 기록"], ["로컬 전체 텍스트 검색", "날짜, 기분, 날씨, 태그 필터", "여행과 프로젝트용 폴더", "고정 및 즐겨찾기 기록"], ["사진 및 이미지 첨부", "음성 메모", "손그림 스티커", "암호화된 .gamu 안에 저장"], ["원탭 암호화 내보내기", "기기에 저장 또는 공유", "새 폰에서 가져오기", "백업 서버 없음"], ["밤에는 OLED 블랙", "낮에는 따뜻한 종이", "글자 크기와 줄간격 조절", "시스템 테마 따라가기"]],
};

const priceBullets = {
  ru: [["Безлимитные записи", "PIN, пароль, биометрия", "Ежедневное настроение", "Теги и папки", "Случайные подсказки", "Локальный поиск", "OLED-темная и бумажная темы"], ["Все из Free", "200+ подсказок и Journeys", "Голосовые заметки и фото", "Автобэкап по расписанию", "Свое время напоминаний", "Пакет стикеров", "И многое другое..."]],
  fr: [["Entrées illimitées", "PIN, mot de passe, biométrie", "Suivi d'humeur quotidien", "Tags et dossiers", "Prompts quotidiens aléatoires", "Recherche locale", "Thèmes OLED sombre + papier"], ["Tout dans Gratuit", "200+ prompts et Journeys", "Notes vocales et photos", "Sauvegarde auto planifiée", "Rappels personnalisés", "Pack de stickers", "Et plus encore..."]],
  es: [["Entradas ilimitadas", "PIN, contraseña, biometría", "Seguimiento diario de ánimo", "Etiquetas y carpetas", "Prompts diarios aleatorios", "Búsqueda local", "Temas OLED oscuro + papel"], ["Todo en Gratis", "200+ prompts y Journeys", "Notas de voz y fotos", "Autocopia programada", "Recordatorios personalizados", "Pack de stickers", "Y más..."]],
  ko: [["무제한 기록", "PIN, 비밀번호, 생체 잠금", "매일 기분 기록", "태그와 폴더", "무작위 일일 프롬프트", "로컬 검색", "OLED 다크 + 종이 테마"], ["무료의 모든 것", "200개 이상 프롬프트와 Journey", "음성 메모와 사진", "자동 백업 예약", "맞춤 알림 시간", "스티커 팩", "그 외 기능"]],
};

const compactA11y = {
  ru: { skip: "Перейти к содержанию", primaryNav: "Основная навигация", language: "Язык", heroChips: "Почему Gamu Journal", googlePlay: "Скачать Gamu Journal в Google Play", appStore: "Скачать Gamu Journal в App Store", googlePlayBadge: "Доступно в Google Play", appStoreBadge: "Загрузить в App Store", installTerms: "Условия установки", heroPreview: "Превью приложения: письмо, замок и настроение", trustFacts: "Факты доверия", stickyInstall: "Установить Gamu Journal" },
  fr: { skip: "Aller au contenu", primaryNav: "Navigation principale", language: "Langue", heroChips: "Pourquoi Gamu Journal", googlePlay: "Obtenir Gamu Journal sur Google Play", appStore: "Télécharger Gamu Journal sur l'App Store", googlePlayBadge: "Disponible sur Google Play", appStoreBadge: "Télécharger dans l'App Store", installTerms: "Conditions d'installation", heroPreview: "Aperçu de l'app: écriture, verrou et humeur", trustFacts: "Faits de confiance", stickyInstall: "Installer Gamu Journal" },
  es: { skip: "Ir al contenido", primaryNav: "Navegación principal", language: "Idioma", heroChips: "Por qué Gamu Journal", googlePlay: "Obtener Gamu Journal en Google Play", appStore: "Descargar Gamu Journal en App Store", googlePlayBadge: "Disponible en Google Play", appStoreBadge: "Descargar en App Store", installTerms: "Condiciones de instalación", heroPreview: "Vista previa: escritura, bloqueo y ánimo", trustFacts: "Datos de confianza", stickyInstall: "Instalar Gamu Journal" },
  ko: { skip: "본문으로 건너뛰기", primaryNav: "기본 내비게이션", language: "언어", heroChips: "Gamu Journal을 선택하는 이유", googlePlay: "Google Play에서 Gamu Journal 받기", appStore: "App Store에서 Gamu Journal 다운로드", googlePlayBadge: "Google Play에서 받기", appStoreBadge: "App Store에서 다운로드", installTerms: "설치 조건", heroPreview: "앱 미리보기: 쓰기, 잠금, 기분 화면", trustFacts: "신뢰 포인트", stickyInstall: "Gamu Journal 설치" },
};

const localizedNotes = {
  ru: "<strong>Чего мы не обещаем:</strong> сквозное шифрование (нет сторон - есть только ваше устройство), сторонние аудиты или сертификаты zero-knowledge.",
  fr: "<strong>Ce que nous ne prétendons pas:</strong> chiffrement de bout en bout (il n'y a pas de bouts - seulement votre appareil), audits tiers ou certifications zero-knowledge.",
  es: "<strong>Lo que no prometemos:</strong> cifrado de extremo a extremo (no hay extremos, solo tu dispositivo), auditorías externas ni certificaciones de conocimiento cero.",
  ko: "<strong>우리가 주장하지 않는 것:</strong> 종단 간 암호화(끝점은 없고 당신의 기기만 있습니다), 제3자 감사, 제로 지식 인증.",
};

const localizedPriceFoot = {
  ru: ["Доступно в Google Play и App Store.", "Магазин покажет все детали покупки перед оплатой."],
  fr: ["Disponible sur Google Play et l'App Store.", "La boutique affiche tous les détails avant le paiement."],
  es: ["Disponible en Google Play y App Store.", "La tienda muestra todos los detalles antes del pago."],
  ko: ["Google Play와 App Store에서 사용할 수 있습니다.", "결제 전에 스토어에서 모든 구매 정보를 보여줍니다."],
};

const localizedCredits = {
  ru: 'Solar Icon Set от 480 Design, лицензия <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Сделано с заботой, не ради аналитики. Только приватные метрики.',
  fr: 'Solar Icon Set par 480 Design, sous licence <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Fait avec soin, pas pour l’analytics. Mesures respectueuses de la vie privée uniquement.',
  es: 'Solar Icon Set de 480 Design, con licencia <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>. Hecho con cuidado, no para analytics. Solo métricas respetuosas con la privacidad.',
  ko: 'Solar Icon Set by 480 Design, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> 라이선스. 분석이 아니라 정성으로 만들었습니다. 개인정보를 존중하는 지표만 사용합니다.',
};

function buildCompact(locale, data) {
  const built = JSON.parse(JSON.stringify(COPY.en));
  built.meta = { title: data.meta[0], description: data.meta[1], ogTitle: data.meta[2], ogDescription: data.meta[3], offerFree: data.meta[4], offerPro: data.meta[5] };
  built.a11y = { ...built.a11y, ...compactA11y[locale] };
  built.nav = data.nav; built.navCta = data.navCta;
  built.hero = { ...built.hero, h1: data.hero[0], sub: data.hero[1], chips: data.hero[2], seePrivacy: data.hero[3], micro: data.hero[4], tags: data.hero[5] };
  built.hero.phoneAlts = [data.cards[1][1], data.cards[0][1], data.cards[2][1]];
  built.trust = data.trust;
  built.showcase = { eyebrow: data.heads[0][0], h2: data.heads[0][1], p: data.heads[0][2], cards: data.cards };
  built.features.eyebrow = data.heads[1][0]; built.features.h2 = data.heads[1][1]; built.features.p = data.heads[1][2];
  built.features.cards = built.features.cards.map((card, i) => ({ tag: data.featureTitles[i][0], h3: data.featureTitles[i][1], p: featureBodies[locale][i], bullets: bulletSets[locale][i] }));
  built.privacy = { eyebrow: data.heads[2][0], h2: data.heads[2][1], p: data.heads[2][2], note: localizedNotes[locale], cards: data.privacyCards };
  built.pricing.eyebrow = data.heads[3][0]; built.pricing.h2 = data.heads[3][1]; built.pricing.p = data.heads[3][2];
  built.pricing.free = { ...built.pricing.free, tier: data.pricing[0][0], price: data.pricing[0][1], small: data.pricing[0][2], note: data.pricing[0][3], cta: data.pricing[0][4], foot: localizedPriceFoot[locale][0], bullets: priceBullets[locale][0] };
  built.pricing.pro = { ...built.pricing.pro, tier: data.pricing[1][0], price: data.pricing[1][1], small: data.pricing[1][2], note: data.pricing[1][3], cta: data.pricing[1][4], foot: localizedPriceFoot[locale][1], bullets: priceBullets[locale][1] };
  built.faqHeader = { eyebrow: data.heads[4][0], h2: data.heads[4][1] };
  built.faq = data.faq;
  built.footer = { ...built.footer, tagline: data.footer[0], product: data.footer[1], studio: data.footer[2], get: data.footer[3], baby: data.footer[4], neko: data.footer[5], gronu: data.footer[6], gnit: data.footer[7], credits: localizedCredits[locale] };
  built.sticky = { title: data.footer[8], sub: data.footer[9], cta: data.footer[10] };
  built.assets = {
    showcaseAlts: data.cards.map((card) => `${card[1]} - ${card[2]}`),
    featureAlts: data.featureTitles.map((card) => card[1]),
  };
  return built;
}

Object.keys(compactLocales).forEach((locale) => {
  COPY[locale] = buildCompact(locale, compactLocales[locale]);
});
