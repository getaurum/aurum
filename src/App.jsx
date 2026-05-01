import { useState, useEffect, useRef } from "react";

/* ─── TRANSLATIONS ─── */
const T = {
  en: {
    tagline: "Luxury Market Intelligence",
    hero_title_1: "Luxury",
    hero_title_2: "at its true value.",
    hero_sub: "Instant market analysis on every luxury piece — bag, watch, jewellery, clothing. Is it priced right? Is now the right time to buy or sell? Aurum tells you clearly, based on real data.",
    hero_legal: "Market observations only · Not financial advice · Not professional authentication",
    try_free: "Try for free →",
    waitlist_count: "{n} people on the launch list",
    not_financial: "Not financial advice",
    tab_scan: "Scan",
    tab_research: "Research",
    scan_label: "Instant Value",
    scan_title: "What is its real value?\nIs now the right time?",
    scan_sub: "Photograph the piece. Aurum analyses its real value — material, colour, size, condition — and tells you clearly if it's worth buying, worth negotiating, or the right time to sell.",
    scan_free_note: "{n} free scans remaining · Full analysis: €9/month",
    research_label: "Deep Research",
    research_title: "What is the real value of this piece?",
    research_sub: "Enter any piece name. Aurum searches auction records, market reports and public price data to give you a complete picture — what it's worth, where it's heading, and what to check before buying.",
    research_placeholder: 'e.g. "Hermès Birkin 30" or "Chanel Classic Flap"',
    research_btn: "Search",
    buy_mode: "🛍️ Buy",
    sell_mode: "💰 Sell",
    should_buy: "Is this worth buying?",
    should_sell: "Is now the right time to sell?",
    buy_desc: "Photo any piece in-store. Get an instant verdict with real {year} market prices.",
    sell_desc: "Photo your piece. Get a pricing strategy based on current market conditions.",
    upload: "Upload Image",
    take_photo: "📱 Take Photo",
    condition_step: "Step 1 — What is the condition of your piece?",
    photo_step: "Step 2 — Photo your piece",
    analysing: "Analysing...",
    searching: "Searching current market data...",
    searching_sell: "Analysing sell opportunity...",
    search_note: "Searching publicly available market data · Analysing visual signals",
    error_msg: "Analysis failed. Please try with a clearer image.",
    try_again: "Try Again",
    scan_another: "← Scan another piece",
    analyse_another: "← Analyse another piece",
    new_search: "← New search",
    verdict_label: "Aurum · Value Analysis",
    verdict_sell_label: "Aurum · Sale Value",
    market_range: "Estimated Market Range",
    price_context: "Price Context",
    visual_check: "Visual Check",
    auth_signals: "Detailed Authentication Signals",
    auth_locked: "🔒 Full authentication signals",
    join_unlock: "Join Waitlist to Unlock →",
    historical: "Historical Note",
    value_title: "Estimated Value of Your Piece",
    market_mint: "Market (mint condition)",
    your_piece: "Your piece",
    pricing: "Pricing Strategy",
    quick_sale: "⚡ Quick Sale",
    optimal: "💎 Optimal",
    weeks_23: "Within 2-3 weeks",
    weeks_48: "Allow 4-8 weeks",
    best_period: "Best period to list",
    condition_tip: "Condition Tip",
    sources: "SOURCES",
    historical_perf: "Historical Market Performance",
    value_factors: "What Affects Value",
    auth_guide: "Authentication Guide",
    auth_guide_locked: "🔒 Full authentication guide",
    market_context: "Market Context",
    limit_title: "You've used your 3 free scans.",
    limit_sub: "Join the list now and lock in €9/month — the price goes up after launch.",
    limit_research: "Research is always free — no limit.",
    join_waitlist: "Join Waitlist →",
    early_access: "Early Access",
    be_first: "Aurum is launching soon.",
    waitlist_desc: "Be among the first members to access Aurum. Sign up now at the launch price — €9/month.",
    email_placeholder: "Your email address",
    join_btn: "Join the list",
    waitlist_legal: "Launch notification only. Unsubscribe anytime. We never share your data.",
    joined_title: "You're in.",
    joined_sub: "We'll be in touch when Aurum opens.\nWatch your inbox.",
    footer_legal: "Aurum is a luxury market intelligence platform. All content is for informational and educational purposes only. We do not provide financial advice, investment advice, or guarantees of any kind. We do not promise or imply any return on investment. Market observations do not predict future values. Past price behavior is not indicative of future results. Scan and research analyses are indicative only and do not constitute professional authentication. Always verify authenticity with a certified expert before purchasing. Aurum is not affiliated with, endorsed by, or partnered with any luxury house, resale platform, or retailer. Exchange rates via Frankfurter API (European Central Bank). © {year} Aurum. All rights reserved.",
    trip_mode: "Trip Mode",
    trip_desc: "All analysis adapted for this market",
    home_btn: "← Home",
    select_market: "Select your market",
    select_market_sub: "Choose your current city or plan ahead for a trip. Aurum adapts all content to that market.",
    owner_placeholder: "Owner code",
    enter_btn: "Enter",
    condition_mint: "Mint — Never used, with box & receipt",
    condition_excellent: "Excellent — Like new, barely used",
    condition_very_good: "Very Good — Light traces of use",
    condition_good: "Good — Visible wear, fully functional",
    condition_fair: "Fair — Heavy wear, repairs needed",
    value_impact: "{n}% of market value",
    search_data: "Searching auction results, market reports and publicly available price data",
    search_fail: "Search failed. Please try again.",
    data_as_of: "Data as of",
    four_tools: "Four tools. One mission.",
    four_tools_sub: "Everything you need to buy and sell luxury intelligently — at home or anywhere in the world.",
    lang_select: "Language",
    trip_banner: "Trip Mode — {city} · All analysis adapted for this market",
  },
  fr: {
    tagline: "Intelligence du Marché Luxe",
    hero_title_1: "Le luxe",
    hero_title_2: "à sa juste valeur.",
    hero_sub: "Analyse de marché instantanée sur toute pièce de luxe — sac, montre, bijou, vêtement. Est-elle au bon prix ? Est-ce le bon moment pour acheter ou pour vendre ? Aurum vous répond clairement, sur la base de données réelles.",
    hero_legal: "Observations de marché uniquement · Pas un conseil financier · Pas une authentification professionnelle",
    try_free: "Essayer gratuitement →",
    waitlist_count: "{n} personnes sur la liste de lancement",
    not_financial: "Pas un conseil financier",
    tab_scan: "Scanner",
    tab_research: "Rechercher",
    scan_label: "Valeur Instantanée",
    scan_title: "Quelle est sa valeur réelle ?\nEst-ce le bon moment ?",
    scan_sub: "Photographiez la pièce. Aurum analyse sa valeur réelle — matière, couleur, taille, état — et vous dit clairement si elle est au bon prix, si vous devez négocier, ou si c'est le bon moment pour vendre.",
    scan_free_note: "{n} scans gratuits · Analyse complète à 9€/mois",
    research_label: "Recherche Approfondie",
    research_title: "Quelle est la vraie valeur de cette pièce ?",
    research_sub: "Entrez le nom d'une pièce. Aurum analyse les résultats d'enchères, les rapports marché et les données publiques pour vous donner sa valeur réelle — selon la matière, la couleur, la taille et l'état — et ce qu'il faut vérifier avant d'acheter.",
    research_placeholder: 'ex. "Hermès Birkin 30" ou "Chanel Classic Flap"',
    research_btn: "Rechercher",
    buy_mode: "🛍️ Acheter",
    sell_mode: "💰 Vendre",
    should_buy: "Quelle est sa valeur réelle ?",
    should_sell: "Quelle est sa valeur aujourd'hui ?",
    buy_desc: "Photographiez une pièce en boutique. Obtenez un verdict immédiat avec les vrais prix du marché {year}.",
    sell_desc: "Photographiez votre pièce. Obtenez une stratégie de prix basée sur les conditions actuelles du marché.",
    upload: "Uploader une image",
    take_photo: "📱 Prendre une photo",
    condition_step: "Étape 1 — Quel est l'état de votre pièce ?",
    photo_step: "Étape 2 — Photographiez votre pièce",
    analysing: "Analyse en cours...",
    searching: "Recherche des données de marché actuelles...",
    searching_sell: "Analyse de l'opportunité de vente...",
    search_note: "Recherche de données de marché publiques · Analyse des signaux visuels",
    error_msg: "Analyse échouée. Veuillez réessayer avec une image plus nette.",
    try_again: "Réessayer",
    scan_another: "← Scanner une autre pièce",
    analyse_another: "← Analyser une autre pièce",
    new_search: "← Nouvelle recherche",
    verdict_label: "Aurum · Analyse de Valeur",
    verdict_sell_label: "Aurum · Valeur de Vente",
    market_range: "Valeur de Marché Estimée",
    price_context: "Contexte de Prix",
    visual_check: "Vérification Visuelle",
    auth_signals: "Signaux d'Authentification Détaillés",
    auth_locked: "🔒 Signaux d'authentification complets",
    join_unlock: "Rejoindre la liste →",
    historical: "Note Historique",
    value_title: "Valeur Estimée de Votre Pièce",
    market_mint: "Valeur marché (état neuf)",
    your_piece: "Votre pièce",
    pricing: "Stratégie de Prix",
    quick_sale: "⚡ Vente Rapide",
    optimal: "💎 Prix Optimal",
    weeks_23: "Sous 2-3 semaines",
    weeks_48: "Prévoir 4-8 semaines",
    best_period: "Meilleure période pour vendre",
    condition_tip: "Conseil d'état",
    sources: "SOURCES",
    historical_perf: "Performance Historique du Marché",
    value_factors: "Ce qui influence la valeur",
    auth_guide: "Guide d'Authentification",
    auth_guide_locked: "🔒 Guide d'authentification complet",
    market_context: "Contexte de Marché",
    limit_title: "Vos 3 scans gratuits sont utilisés.",
    limit_sub: "Soyez parmi les premiers à accéder à Aurum. Inscrivez-vous au prix de lancement — 9€/mois.",
    limit_research: "La recherche est toujours gratuite — sans limite.",
    join_waitlist: "Rejoindre la liste →",
    early_access: "Accès Anticipé",
    be_first: "Aurum arrive bientôt.",
    waitlist_desc: "Soyez parmi les premiers membres à accéder à Aurum. Inscrivez-vous maintenant au prix de lancement — 9€/mois.",
    email_placeholder: "Votre adresse email",
    join_btn: "Rejoindre la liste",
    waitlist_legal: "Notification de lancement uniquement. Désabonnement à tout moment. Nous ne partageons jamais vos données.",
    joined_title: "C'est noté.",
    joined_sub: "Nous vous contacterons à l'ouverture d'Aurum.\nSurveillez votre boîte mail.",
    footer_legal: "Aurum est une plateforme d'intelligence marché luxe. Tout le contenu est à des fins informatives et éducatives uniquement. Nous ne fournissons pas de conseil financier, de conseil en investissement, ni de garanties d'aucune sorte. Nous ne promettons ni n'impliquons aucun retour sur investissement. Les observations de marché ne prédisent pas les valeurs futures. Le comportement passé du marché n'est pas indicatif des résultats futurs. Les analyses de scan et de recherche sont indicatives uniquement et ne constituent pas une authentification professionnelle. Vérifiez toujours l'authenticité auprès d'un expert certifié avant d'acheter. Aurum n'est affilié à, approuvé par, ni partenaire d'aucune maison de luxe, plateforme de revente ou détaillant. Taux de change via l'API Frankfurter (Banque Centrale Européenne). © {year} Aurum. Tous droits réservés.",
    trip_mode: "Mode Voyage",
    trip_desc: "Toutes les analyses adaptées pour ce marché",
    home_btn: "← Accueil",
    select_market: "Sélectionner votre marché",
    select_market_sub: "Choisissez votre ville actuelle ou préparez un voyage. Aurum adapte tout le contenu à ce marché.",
    owner_placeholder: "Code propriétaire",
    enter_btn: "Entrer",
    condition_mint: "Neuf — Jamais utilisé, avec boîte et reçu",
    condition_excellent: "Excellent — Comme neuf, à peine utilisé",
    condition_very_good: "Très bon — Légères traces d'utilisation",
    condition_good: "Bon — Usure visible, entièrement fonctionnel",
    condition_fair: "Passable — Usure importante, réparations nécessaires",
    value_impact: "{n}% de la valeur marché",
    search_data: "Recherche de résultats d'enchères, rapports de marché et données publiques",
    search_fail: "Recherche échouée. Veuillez réessayer.",
    data_as_of: "Données au",
    four_tools: "Quatre outils. Une mission.",
    four_tools_sub: "Tout ce dont vous avez besoin pour acheter et vendre du luxe intelligemment — chez vous ou partout dans le monde.",
    lang_select: "Langue",
    trip_banner: "Mode Voyage — {city} · Toutes les analyses adaptées pour ce marché",
  },
  ja: {
    tagline: "ラグジュアリー市場インテリジェンス",
    hero_title_1: "ラグジュアリー",
    hero_title_2: "の真の価値を。",
    hero_sub: "すべてのラグジュアリーアイテムの本当の価値を知る — バッグ、時計、ジュエリー、衣類。適正価格？今が買い時？売り時？{year}年のリアルデータでAurumが明確にお答えします。",
    hero_legal: "市場観察のみ · 投資アドバイスではありません · 専門的な鑑定ではありません",
    try_free: "無料で試す →",
    waitlist_count: "{n}人がローンチリストに登録",
    not_financial: "投資アドバイスではありません",
    tab_scan: "スキャン",
    tab_research: "調査",
    scan_label: "即時判定",
    scan_title: "本当の価値は？\n今がその時？",
    scan_sub: "ラグジュアリーアイテムを撮影するだけ。Aurumがリアル市場データと照合し、明確に判定：購入・交渉・見送り。売却の場合は最適価格と最適タイミングをご提案。",
    scan_free_note: "残り{n}回の無料スキャン · 完全な分析：月額€9",
    research_label: "市場インテリジェンス",
    research_title: "ラグジュアリーアイテムを調査。",
    research_sub: "アイテム名を入力。価格履歴、価値要因、真贋ガイドなど深い市場分析を取得。オークション結果と公開市場データを参照。",
    research_placeholder: '例：「エルメス バーキン 30」または「シャネル クラシックフラップ」',
    research_btn: "検索",
    buy_mode: "🛍️ 購入",
    sell_mode: "💰 売却",
    should_buy: "これを購入すべきですか？",
    should_sell: "今売却すべきですか？",
    buy_desc: "店内でアイテムを撮影。{year}年のリアル市場価格で即時判定。",
    sell_desc: "アイテムを撮影。現在の市場状況に基づく価格戦略を取得。",
    upload: "画像をアップロード",
    take_photo: "📱 写真を撮る",
    condition_step: "ステップ1 — アイテムの状態を選択",
    photo_step: "ステップ2 — アイテムを撮影",
    analysing: "分析中...",
    searching: "現在の市場データを検索中...",
    searching_sell: "売却機会を分析中...",
    search_note: "公開市場データを検索中 · ビジュアルシグナルを分析中",
    error_msg: "分析に失敗しました。より鮮明な画像で再試行してください。",
    try_again: "再試行",
    scan_another: "← 別のアイテムをスキャン",
    analyse_another: "← 別のアイテムを分析",
    new_search: "← 新しい検索",
    verdict_label: "Aurum 購入判定",
    verdict_sell_label: "Aurum 売却判定",
    market_range: "推定市場価格レンジ",
    price_context: "価格コンテキスト",
    visual_check: "ビジュアルチェック",
    auth_signals: "詳細な真贋シグナル",
    auth_locked: "🔒 完全な真贋シグナル",
    join_unlock: "ウェイティングリストに参加 →",
    historical: "歴史的メモ",
    value_title: "あなたのアイテムの推定価値",
    market_mint: "市場価値（未使用状態）",
    your_piece: "あなたのアイテム",
    pricing: "価格戦略",
    quick_sale: "⚡ 早期売却",
    optimal: "💎 最適価格",
    weeks_23: "2〜3週間以内",
    weeks_48: "4〜8週間で",
    best_period: "最適な出品時期",
    condition_tip: "状態改善アドバイス",
    sources: "出典",
    historical_perf: "歴史的な市場パフォーマンス",
    value_factors: "価値に影響する要因",
    auth_guide: "真贋ガイド",
    auth_guide_locked: "🔒 完全な真贋ガイド",
    market_context: "市場コンテキスト",
    limit_title: "3回の無料スキャンを使用しました。",
    limit_sub: "ローンチリストに参加してAurumの開始時に通知を受け取りましょう — 創設価格月額€9。",
    limit_research: "調査機能は引き続き無料で無制限。",
    join_waitlist: "ウェイティングリストに参加 →",
    early_access: "早期アクセス ✦",
    be_first: "最初に知る。",
    waitlist_desc: "Aurumはまもなくローンチします。最初にアクセスし、開始時に早期アクセス価格月額€9を維持しましょう。",
    email_placeholder: "メールアドレス",
    join_btn: "通知を受け取る",
    waitlist_legal: "ローンチ通知のみ。いつでも登録解除可能。データを共有しません。",
    joined_title: "リスト登録完了。",
    joined_sub: "Aurumのローンチ時に通知します。\nメールをご確認ください。",
    footer_legal: "Aurumはラグジュアリー市場インテリジェンスプラットフォームです。すべてのコンテンツは情報提供および教育目的のみです。投資アドバイス、財務アドバイス、いかなる保証も提供しません。投資収益を約束または示唆しません。市場観察は将来の価値を予測しません。過去の市場動向は将来の結果を示すものではありません。スキャンおよび調査分析は指標のみで、専門的な鑑定ではありません。購入前に必ず認定専門家に真贋確認してください。Aurumはいかなるラグジュアリーブランド、転売プラットフォーム、小売業者とも提携、推薦、パートナーシップ関係にありません。為替レートはFrankfurter API（欧州中央銀行）提供。© {year} Aurum. 無断転載禁止。",
    trip_mode: "旅行モード",
    trip_desc: "このマーケット向けにすべての分析を調整",
    home_btn: "← ホーム",
    select_market: "マーケットを選択",
    select_market_sub: "現在の都市を選択するか、旅行の準備をしてください。Aurumはすべてのコンテンツをそのマーケットに合わせます。",
    owner_placeholder: "オーナーコード",
    enter_btn: "入力",
    condition_mint: "未使用 — 箱・レシートあり",
    condition_excellent: "エクセレント — ほぼ未使用",
    condition_very_good: "非常に良い — わずかな使用感",
    condition_good: "良い — 使用感あり、完全動作",
    condition_fair: "普通 — かなりの使用感、修理が必要",
    value_impact: "市場価値の{n}%",
    search_data: "オークション結果、市場レポート、公開データを検索中",
    search_fail: "検索に失敗しました。再試行してください。",
    data_as_of: "データ基準日",
    four_tools: "4つのツール。1つのミッション。",
    four_tools_sub: "自宅でも世界中どこでも、ラグジュアリーを賢く売買するために必要なすべて。",
    lang_select: "言語",
    trip_banner: "旅行モード — {city} · このマーケット向けに分析を調整",
  },
};

const LANGUAGES = [
  { id: "en", label: "English", flag: "🇬🇧" },
  { id: "fr", label: "Français", flag: "🇫🇷" },
  { id: "ja", label: "日本語", flag: "🇯🇵" },
];

function t(lang, key, vars = {}) {
  let str = T[lang]?.[key] || T.en[key] || key;
  Object.entries(vars).forEach(([k, v]) => { str = str.split(`{${k}}`).join(String(v)); });
  return str;
}

/* ─── CITIES ─── */
const CITIES = [
  { id: "paris",      name: "Paris",       country: "France",       flag: "🇫🇷", currency: "EUR", symbol: "€",   zone: "europe"     },
  { id: "milan",      name: "Milan",       country: "Italy",        flag: "🇮🇹", currency: "EUR", symbol: "€",   zone: "europe"     },
  { id: "london",     name: "London",      country: "UK",           flag: "🇬🇧", currency: "GBP", symbol: "£",   zone: "europe"     },
  { id: "geneva",     name: "Geneva",      country: "Switzerland",  flag: "🇨🇭", currency: "CHF", symbol: "CHF", zone: "europe"     },
  { id: "madrid",     name: "Madrid",      country: "Spain",        flag: "🇪🇸", currency: "EUR", symbol: "€",   zone: "europe"     },
  { id: "tokyo",      name: "Tokyo",       country: "Japan",        flag: "🇯🇵", currency: "JPY", symbol: "¥",   zone: "asia"       },
  { id: "seoul",      name: "Seoul",       country: "South Korea",  flag: "🇰🇷", currency: "KRW", symbol: "₩",   zone: "asia"       },
  { id: "hongkong",   name: "Hong Kong",   country: "Hong Kong",    flag: "🇭🇰", currency: "HKD", symbol: "HK$", zone: "asia"       },
  { id: "singapore",  name: "Singapore",   country: "Singapore",    flag: "🇸🇬", currency: "SGD", symbol: "S$",  zone: "asia"       },
  { id: "dubai",      name: "Dubai",       country: "UAE",          flag: "🇦🇪", currency: "AED", symbol: "AED", zone: "middleeast" },
  { id: "riyadh",     name: "Riyadh",      country: "Saudi Arabia", flag: "🇸🇦", currency: "SAR", symbol: "SAR", zone: "middleeast" },
  { id: "newyork",    name: "New York",    country: "USA",          flag: "🇺🇸", currency: "USD", symbol: "$",   zone: "americas"   },
  { id: "miami",      name: "Miami",       country: "USA",          flag: "🇺🇸", currency: "USD", symbol: "$",   zone: "americas"   },
  { id: "losangeles", name: "Los Angeles", country: "USA",          flag: "🇺🇸", currency: "USD", symbol: "$",   zone: "americas"   },
  { id: "sydney",     name: "Sydney",      country: "Australia",    flag: "🇦🇺", currency: "AUD", symbol: "A$",  zone: "oceania"    },
];
const ZONES = { europe: "Europe", asia: "Asia", middleeast: "Middle East", americas: "Americas", oceania: "Oceania" };
/* ─── ACCESS CODES ─── */
const ACCESS_CODES = {
  "AURUM-X9K2-MW": { label: "OWNER",  scans: 999 },  // Toi
  "AURUM-F4P7-YL": { label: "FAMILY", scans: 999 },  // Ta maman
};

const CONDITION_IDS = ["mint", "excellent", "very_good", "good", "fair"];
const CONDITION_IMPACTS = { mint: 1.0, excellent: 0.88, very_good: 0.75, good: 0.60, fair: 0.40 };

const BUY_SCORE = {
  buy:       { emoji: "✅", label: { en: "Buy It",    fr: "Achetez",    ja: "購入推奨"   }, color: "#22c55e", bg: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.2)"  },
  negotiate: { emoji: "⚠️", label: { en: "Negotiate", fr: "Négociez",   ja: "交渉を"     }, color: "#eab308", bg: "rgba(234,179,8,0.08)",   border: "rgba(234,179,8,0.2)"  },
  avoid:     { emoji: "❌", label: { en: "Walk Away", fr: "Passez",     ja: "見送り"     }, color: "#ef4444", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.2)"  },
  unknown:   { emoji: "⬜", label: { en: "Unclear",   fr: "Incertain",  ja: "不明"       }, color: "#888",    bg: "rgba(136,136,136,0.08)", border: "rgba(136,136,136,0.2)" },
};
const SELL_SCORE = {
  sell_now:  { emoji: "💰", label: { en: "Sell Now",      fr: "Vendez maintenant", ja: "今すぐ売却"  }, color: "#22c55e", bg: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.2)"  },
  sell_wait: { emoji: "⏳", label: { en: "Wait to Sell",  fr: "Attendez",          ja: "待機推奨"    }, color: "#eab308", bg: "rgba(234,179,8,0.08)",   border: "rgba(234,179,8,0.2)"  },
  sell_drop: { emoji: "📉", label: { en: "Sell Urgently", fr: "Vendez vite",       ja: "早急に売却"  }, color: "#ef4444", bg: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.2)"  },
  unknown:   { emoji: "⬜", label: { en: "Unclear",       fr: "Incertain",         ja: "不明"        }, color: "#888",    bg: "rgba(136,136,136,0.08)", border: "rgba(136,136,136,0.2)" },
};
const TREND = {
  rising:  { arrow: "↑", color: "#22c55e", label: { en: "Rising",  fr: "En hausse", ja: "上昇中" } },
  falling: { arrow: "↓", color: "#ef4444", label: { en: "Falling", fr: "En baisse", ja: "下落中" } },
  stable:  { arrow: "→", color: "#eab308", label: { en: "Stable",  fr: "Stable",    ja: "安定"   } },
};

/* ─── API ─── */
async function callClaudeImageJSON(base64, mimeType, prompt) {
  const compressBase64 = (b64, mime) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const MAX = 1200;
      let w = img.width, h = img.height;
      if (w > MAX || h > MAX) {
        if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
        else { w = Math.round(w * MAX / h); h = MAX; }
      }
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", 0.82).split(",")[1]);
    };
    img.src = `data:${mime};base64,${b64}`;
  });
  const compressed = await compressBase64(base64, mimeType);
  const body = {
    model: "claude-sonnet-4-5",
    max_tokens: 2000,
    messages: [{ role: "user", content: [
      { type: "image", source: { type: "base64", media_type: "image/jpeg", data: compressed } },
      { type: "text", text: prompt }
    ]}],
  };
  const res = await fetch("/api/aurum", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "claude", body }),
  });
  const data = await res.json();
  if (data.error) throw new Error("API_ERROR: " + JSON.stringify(data));
  if (!data.content) throw new Error("NO_CONTENT: " + JSON.stringify(data));
  const textBlocks = data.content.filter(b => b.type === "text");
  if (!textBlocks.length) throw new Error("NO_TEXT_BLOCKS: types=" + data.content.map(b=>b.type).join(","));
  const raw = textBlocks[textBlocks.length - 1]?.text || "{}";
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("NO_JSON_MATCH: raw=" + raw.substring(0, 200));
  return JSON.parse(jsonMatch[0]);
}

async function callClaudeTextJSON(prompt) {
  const body = {
    model: "claude-sonnet-4-5",
max_tokens: 4000,

    messages: [{ role: "user", content: prompt }],
  };
  const res = await fetch("/api/aurum", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "claude", body }),
  });
  const data = await res.json();
  const textBlocks = data.content?.filter(b => b.type === "text") || [];
  const raw = textBlocks[textBlocks.length - 1]?.text || "{}";
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  const clean = jsonMatch ? jsonMatch[0] : "{}";
  return JSON.parse(clean);
}

async function getExchangeRates() {
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=EUR&to=JPY,GBP,USD,AED,KRW,CHF,HKD,SGD,SAR,AUD");
    const data = await res.json();
    return data.rates || {};
  } catch { return {}; }
}

/* ─── CITY SELECTOR ─── */
function CitySelector({ currentCity, onSelect, onClose, lang }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: "#0e0e18", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "32px", maxWidth: 600, width: "100%", maxHeight: "80vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontStyle: "italic", color: "rgba(255,255,255,0.88)", marginBottom: 6 }}>{t(lang, "select_market")}</div>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.92)", marginBottom: 24, lineHeight: 1.5 }}>{t(lang, "select_market_sub")}</p>
        {Object.keys(ZONES).map(zone => (
          <div key={zone} style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 10 }}>{ZONES[zone]}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CITIES.filter(c => c.zone === zone).map(c => (
                <button key={c.id} onClick={() => { onSelect(c); onClose(); }} style={{
                  background: currentCity.id === c.id ? "rgba(200,155,60,0.12)" : "rgba(255,255,255,0.04)",
                  border: currentCity.id === c.id ? "1px solid rgba(200,155,60,0.3)" : "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, padding: "8px 14px", cursor: "pointer",
                  fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300,
                  color: currentCity.id === c.id ? "rgba(200,155,60,0.8)" : "rgba(255,255,255,0.5)",
                  transition: "all 0.2s",
                }}>{c.flag} {c.name}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SCAN SECTION ─── */
function ScanSection({ rates, city, isOwner, lang, maxScansOverride = 999 }) {
  const [mode, setMode] = useState("buy");
  const [phase, setPhase] = useState("idle");
  const [condition, setCondition] = useState(null);
  const [result, setResult] = useState(null);
  const [preview, setPreview] = useState(null);
const [step, setStep] = useState("");
const [errorMsg, setErrorMsg] = useState("");
  const [scansUsed, setScansUsed] = useState(() => parseInt(localStorage.getItem("aurum_scans_total") || "0"));
  const fileRef = useRef(null);
  const cameraRef = useRef(null);
  const MAX_SCANS = isOwner ? maxScansOverride : 3;

  const incrementScan = () => {
    const n = scansUsed + 1;
    localStorage.setItem("aurum_scans_total", n);
    setScansUsed(n);
  };

  const langName = { en: "English", fr: "French", ja: "Japanese" }[lang] || "English";

  const processFile = async (file) => {
    if (!file?.type.startsWith("image/")) return;
    if (scansUsed >= MAX_SCANS && !isOwner) { setPhase("limit"); return; }
    if (mode === "sell" && !condition) return;
    setPhase("scanning"); setResult(null);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target.result;
      setPreview(dataUrl);
      const base64 = dataUrl.split(",")[1];
      const condImpact = CONDITION_IMPACTS[condition] || 0.75;
      const condLabel = condition ? t(lang, `condition_${condition}`) : "";
      const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

      try {
        const buyPrompt = `You are AURUM, a luxury market intelligence agent. RESPOND ENTIRELY IN ${langName.toUpperCase()}.

Analyze this luxury item photo. Search for current market prices as of ${today}.
User is in ${city.name}, ${city.country}.

LEGAL CONSTRAINTS:
- Never recommend specific platforms or sellers
- Never guarantee value or returns
- Frame as market observations only
- Be clear this is indicative only

Return ONLY valid JSON — no markdown. All text values must be in ${langName}:
{
  "house": "brand",
  "piece": "model name",
  "category": "Bag|Jewelry|Watch|Clothing|Shoes|Accessory",
  "estimatedCondition": "condition in ${langName}",
  "verdict": "buy|negotiate|avoid|unknown",
  "verdictStatement": "decisive sentence in ${langName}, max 20 words",
  "verdictReason": "2-3 factual sentences in ${langName}",
  "estimatedMarketRange": "price range",
  "estimatedMarketEUR": number,
  "valueFactors": {
    "material": "identified material e.g. Togo leather, 18k gold, ceramic — impact on value",
    "colour": "identified colour — is it rare or common? impact on value",
    "size": "identified size if applicable — impact on value",
    "condition": "estimated condition from photo",
    "hardware": "hardware type if visible e.g. gold, palladium — impact on value",
    "year": "estimated production year if identifiable — impact on value",
    "marketDemand": "current demand level for this specific piece — high/medium/low",
    "rarity": "how rare is this piece on the market right now",
    "summary": "2 sentences synthesising all factors and their combined impact on value in ${langName}"
  },
  "priceContext": "one sentence in ${langName}",
  "delta": "e.g. +18% below market",
  "priceSource": "source note in ${langName}",
  "trend": "rising|stable|falling",
  "trendNote": "one sentence in ${langName}",
  "visualAuthCheck": "2-3 sentences in ${langName}",
  "authVerdict": "consistent|inconclusive|suspicious",
  "authDetails": ["detail in ${langName}", "detail in ${langName}", "detail in ${langName}"],
  "historicalNote": "one sentence in ${langName}, no promises",
  "disclaimer": "disclaimer in ${langName}"
}`;

        const sellPrompt = `You are AURUM, a luxury market intelligence agent. RESPOND ENTIRELY IN ${langName.toUpperCase()}.

Analyze this luxury item for selling intelligence. Search for current market prices as of ${today}.
Declared condition: ${condLabel} (~${Math.round(condImpact * 100)}% of mint value).
User is in ${city.name}, ${city.country}.

LEGAL CONSTRAINTS:
- Never recommend specific platforms or buyers
- Never guarantee prices or returns
- Frame as market observations only

Return ONLY valid JSON — no markdown. All text values must be in ${langName}:
{
  "house": "brand",
  "piece": "model name",
  "category": "Bag|Jewelry|Watch|Clothing|Shoes|Accessory",
  "sellVerdict": "sell_now|sell_wait|sell_drop|unknown",
  "sellStatement": "decisive sentence in ${langName}, max 20 words",
  "sellReason": "2-3 sentences in ${langName}",
  "currentMarketEUR": number,
  "currentMarketRange": "range",
  "valueFactors": {
    "material": "identified material — impact on resale value",
    "colour": "identified colour — is it rare or common for resale",
    "size": "identified size — impact on resale value",
    "hardware": "hardware type if visible — impact on resale value",
    "marketDemand": "current buyer demand for this specific piece",
    "rarity": "how rare is this piece on the current resale market",
    "summary": "2 sentences on how these factors affect your resale value in ${langName}"
  },
  "conditionAdjustedEUR": number,
  "conditionAdjustedRange": "range adjusted for condition",
  "quickSaleEstimate": "quick sale range in ${city.currency}",
  "optimalSaleEstimate": "optimal sale range in ${city.currency}",
  "bestPeriodToSell": "month or season in ${langName}",
  "trend": "rising|stable|falling",
  "trendNote": "one sentence in ${langName}",
  "conditionTip": "one practical tip in ${langName}",
  "priceSource": "source note in ${langName}",
  "disclaimer": "disclaimer in ${langName}"
}`;

setStep(t(lang, "searching"));
        const visual = await callClaudeImageJSON(base64, file.type, mode === "buy" ? buyPrompt : sellPrompt);
setErrorMsg("VISUAL: " + JSON.stringify(visual) + " | RAW_KEYS: " + Object.keys(visual).join(","));

        const house = visual.house || "";
        const piece = visual.piece || "";

        if (house && piece && house !== "unknown" && piece !== "unknown") {
          setStep(t(lang, "searching_sell"));
const enrichPrompt = mode === "buy"
  ? `You are AURUM, a luxury market intelligence agent. RESPOND ENTIRELY IN ${langName.toUpperCase()}.

Search the web RIGHT NOW for current market data on: "${house} ${piece}".

MANDATORY SOURCES TO SEARCH:
- Vestiaire Collective: current listed prices and sold prices for this exact model
- Chrono24 (if watch): current market prices
- Christie's and Sotheby's: recent auction results
- Knight Frank Luxury Investment Index: performance data
- Rebag, The RealReal: current resale prices

Return ONLY valid JSON — no markdown, no preamble:
{
  "estimatedMarketRange": "real pre-owned price range based on current listings e.g. €8,500 – €14,000",
  "estimatedMarketEUR": number,
  "trend": "rising|stable|falling",
  "trendNote": "one sentence with specific % or data point",
  "priceContext": "one sentence comparing to retail price",
  "priceSource": "list actual sources checked e.g. Vestiaire Collective, Christie's",
  "historicalNote": "one sentence with specific data e.g. +23% over 3 years per Knight Frank 2024",
  "authDetails": ["specific authentication point 1", "specific authentication point 2", "specific authentication point 3"]
}`
  : `You are AURUM, a luxury market intelligence agent. RESPOND ENTIRELY IN ${langName.toUpperCase()}.

Search the web RIGHT NOW for current resale market data on: "${house} ${piece}" in condition: ${condLabel}.

MANDATORY SOURCES TO SEARCH:
- Vestiaire Collective: current listed and sold prices for this exact model
- The RealReal, Rebag: current resale prices
- Christie's, Sotheby's, Artcurial: recent auction results
- Knight Frank Luxury Investment Index: trend data

Return ONLY valid JSON — no markdown, no preamble:
{
  "currentMarketRange": "real range from current listings e.g. €8,500 – €12,000",
  "currentMarketEUR": number,
  "conditionAdjustedRange": "range adjusted for declared condition",
  "conditionAdjustedEUR": number,
  "quickSaleEstimate": "realistic quick sale range in ${city.currency}",
  "optimalSaleEstimate": "optimal price range in ${city.currency}",
  "trend": "rising|stable|falling",
  "trendNote": "one sentence with specific data point",
  "bestPeriodToSell": "specific month or season with reason",
  "priceSource": "list actual sources checked"
}`;

          const enriched = await callClaudeTextJSON(enrichPrompt);
          setResult({ ...visual, ...enriched, mode });
        } else {
          setResult({ ...visual, mode });
        }

        incrementScan();
        setPhase("result");
} catch (err) { setPhase("error"); setErrorMsg(err?.message || JSON.stringify(err) || "Unknown error"); }
    };
    reader.readAsDataURL(file);
  };

  const buyScore = result?.mode === "buy" ? (BUY_SCORE[result.verdict] || BUY_SCORE.unknown) : null;
  const sellScore = result?.mode === "sell" ? (SELL_SCORE[result.sellVerdict] || SELL_SCORE.unknown) : null;
  const sc = buyScore || sellScore;
  const trendConf = result ? (TREND[result.trend] || TREND.stable) : null;
  const scansLeft = MAX_SCANS - scansUsed;

  /* IDLE */
  if (phase === "idle") return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      <div style={{ display: "flex", marginBottom: 28, borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
        <button onClick={() => { setMode("buy"); setCondition(null); }} style={{ flex: 1, padding: "14px 0", border: "none", cursor: "pointer", transition: "all 0.3s", background: mode === "buy" ? "linear-gradient(135deg,#c8923a,#f2cc72)" : "rgba(255,255,255,0.03)", color: mode === "buy" ? "#080810" : "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: mode === "buy" ? 600 : 300, letterSpacing: "0.1em" }}>{t(lang, "buy_mode")}</button>
        <button onClick={() => setMode("sell")} style={{ flex: 1, padding: "14px 0", border: "none", borderLeft: "1px solid rgba(255,255,255,0.08)", cursor: "pointer", transition: "all 0.3s", background: mode === "sell" ? "linear-gradient(135deg,#16a34a,#4ade80)" : "rgba(255,255,255,0.03)", color: mode === "sell" ? "#080810" : "rgba(255,255,255,0.4)", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: mode === "sell" ? 600 : 300, letterSpacing: "0.1em" }}>{t(lang, "sell_mode")}</button>
      </div>

      {mode === "sell" && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", color: "rgba(34,197,94,0.5)", textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>{t(lang, "condition_step")}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {CONDITION_IDS.map(cid => (
              <button key={cid} onClick={() => setCondition(cid)} style={{ background: condition === cid ? "rgba(34,197,94,0.08)" : "rgba(255,255,255,0.03)", border: condition === cid ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 18px", cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: condition === cid ? "rgba(34,197,94,0.9)" : "rgba(255,255,255,0.45)", transition: "all 0.2s", display: "flex", justifyContent: "space-between" }}>
                <span>{t(lang, `condition_${cid}`)}</span>
                <span style={{ fontSize: 10, opacity: 0.5 }}>{t(lang, "value_impact", { n: Math.round(CONDITION_IMPACTS[cid] * 100) })}</span>
              </button>
            ))}
          </div>
          {condition && <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.2em", color: "rgba(34,197,94,0.5)", textTransform: "uppercase", marginTop: 20, marginBottom: 12, textAlign: "center" }}>{t(lang, "photo_step")}</div>}
        </div>
      )}

      {(mode === "buy" || (mode === "sell" && condition)) && (
        <div>
          <div onClick={() => fileRef.current?.click()} style={{ border: `2px dashed ${mode === "sell" ? "rgba(34,197,94,0.25)" : "rgba(200,155,60,0.2)"}`, borderRadius: 20, padding: "48px 24px", textAlign: "center", cursor: "pointer", background: mode === "sell" ? "rgba(34,197,94,0.02)" : "rgba(200,155,60,0.02)", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = mode === "sell" ? "rgba(34,197,94,0.45)" : "rgba(200,155,60,0.4)"; e.currentTarget.style.background = mode === "sell" ? "rgba(34,197,94,0.04)" : "rgba(200,155,60,0.04)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = mode === "sell" ? "rgba(34,197,94,0.25)" : "rgba(200,155,60,0.2)"; e.currentTarget.style.background = mode === "sell" ? "rgba(34,197,94,0.02)" : "rgba(200,155,60,0.02)"; }}
            onDrop={e => { e.preventDefault(); processFile(e.dataTransfer.files[0]); }}
            onDragOver={e => e.preventDefault()}>
            <div style={{ fontSize: 48, marginBottom: 14 }}>{mode === "buy" ? "📷" : "💰"}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontStyle: "italic", color: "rgba(255,255,255,0.92)", marginBottom: 16 }}>{t(lang, mode === "buy" ? "should_buy" : "should_sell")}</div>

            {/* What you get */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, maxWidth: 320, margin: "0 auto 24px", textAlign: "left" }}>
              {(mode === "buy" ? [
                { icon: "✅", text: lang === "fr" ? "Verdict clair : bonne valeur, à négocier ou à éviter" : lang === "ja" ? "明確な判定：良い価値・交渉・見送り" : "Clear verdict: good value, negotiate or avoid" },
                { icon: "💰", text: lang === "fr" ? "Valeur réelle estimée — matière, couleur, taille" : lang === "ja" ? "素材・色・サイズ別の推定実勢価値" : "Real estimated value — material, colour, size" },
                { icon: "🛡️", text: lang === "fr" ? "Vérification visuelle d'authenticité" : lang === "ja" ? "ビジュアル真贋チェック" : "Visual authenticity check" },
                { icon: "📊", text: lang === "fr" ? "Tendance du prix sur 12 mois" : lang === "ja" ? "12ヶ月の価格トレンド" : "12-month price trend" },
              ] : [
                { icon: "💰", text: lang === "fr" ? "Valeur actuelle de votre pièce sur le marché" : lang === "ja" ? "現在の市場価値" : "Current market value of your piece" },
                { icon: "💎", text: lang === "fr" ? "Valeur ajustée selon état, matière et couleur" : lang === "ja" ? "状態・素材・色に応じた調整価値" : "Value adjusted for condition, material and colour" },
                { icon: "📅", text: lang === "fr" ? "Meilleure période pour vendre" : lang === "ja" ? "最適な売却時期" : "Best timing to sell" },
                { icon: "📊", text: lang === "fr" ? "Tendance du marché en ce moment" : lang === "ja" ? "現在の市場トレンド" : "Current market trend" },
              ]).map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontSize: 13, flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", lineHeight: 1.4 }}>{item.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={e => { e.stopPropagation(); fileRef.current?.click(); }} style={{ background: mode === "sell" ? "linear-gradient(135deg,#16a34a,#4ade80)" : "linear-gradient(135deg,#c8923a,#f2cc72)", border: "none", borderRadius: 12, padding: "13px 28px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: "#080810", boxShadow: mode === "sell" ? "0 4px 20px rgba(34,197,94,0.25)" : "0 4px 20px rgba(200,155,60,0.25)" }}>{t(lang, "upload")}</button>
              <button onClick={e => { e.stopPropagation(); cameraRef.current?.click(); }} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "13px 28px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 300, letterSpacing: "0.1em", color: "rgba(255,255,255,0.92)" }}>{t(lang, "take_photo")}</button>
            </div>
            {!isOwner && <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.88)", marginTop: 18 }}>{t(lang, "scan_free_note", { n: scansLeft })}</div>}
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.8)", textAlign: "center", marginTop: 14, fontStyle: "italic" }}>
            {t(lang, "hero_legal")}
          </p>
          <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => processFile(e.target.files[0])} />
          <input ref={cameraRef} type="file" accept="image/*" capture="environment" style={{ display: "none" }} onChange={e => processFile(e.target.files[0])} />
        </div>
      )}
    </div>
  );

  /* LIMIT */
  if (phase === "limit") return (
    <div style={{ textAlign: "center", padding: "52px 24px", maxWidth: 440, margin: "0 auto" }}>
      <div style={{ fontSize: 44, marginBottom: 16 }}>🔒</div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontStyle: "italic", color: "rgba(255,255,255,0.8)", marginBottom: 10 }}>{t(lang, "limit_title")}</div>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.88)", lineHeight: 1.6, marginBottom: 10 }}>{t(lang, "limit_sub")}</p>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontStyle: "italic", color: "rgba(255,255,255,0.88)", marginBottom: 28 }}>{t(lang, "limit_research")}</p>
      <button onClick={() => document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" })} style={{ background: "linear-gradient(135deg,#c8923a,#f2cc72)", border: "none", borderRadius: 12, padding: "14px 32px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", color: "#080810" }}>{t(lang, "join_waitlist")}</button>
    </div>
  );

  /* SCANNING */
  if (phase === "scanning") return (
    <div style={{ textAlign: "center", padding: "52px 24px", maxWidth: 400, margin: "0 auto" }}>
      {preview && <img src={preview} alt="" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 14, marginBottom: 24, border: "1px solid rgba(255,255,255,0.1)" }} />}
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontStyle: "italic", color: "rgba(255,255,255,0.92)", marginBottom: 8 }}>{t(lang, "analysing")}</div>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(200,155,60,0.72)", marginBottom: 20 }}>{step}</div>
      <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
        {[0, 0.2, 0.4].map((d, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(200,155,60,0.6)", animation: `blink 1.4s ease ${d}s infinite` }} />)}
      </div>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.88)", marginTop: 16, lineHeight: 1.6 }}>{t(lang, "search_note")}</p>
    </div>
  );

  /* ERROR */
  if (phase === "error") return (
    <div style={{ textAlign: "center", padding: 40 }}>
<p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(239,68,68,0.7)", marginBottom: 12 }}>{t(lang, "error_msg")}</p>
      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(239,68,68,0.5)", marginBottom: 20, wordBreak: "break-all", padding: "0 20px" }}>{errorMsg}</p>
      <button onClick={() => { setPhase("idle"); setPreview(null); }} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 24px", color: "rgba(255,255,255,0.92)", fontFamily: "'DM Sans',sans-serif", fontSize: 11, cursor: "pointer" }}>{t(lang, "try_again")}</button>
    </div>
  );

  /* RESULT */
  if (phase === "result" && result) {
    const isBuy = result.mode === "buy";
    return (
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 18, marginBottom: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          {preview && <img src={preview} alt="" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }} />}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.3em", color: isBuy ? "rgba(200,155,60,0.5)" : "rgba(34,197,94,0.5)", textTransform: "uppercase", marginBottom: 5 }}>
              {result.house} · {result.category}
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: "rgba(255,255,255,0.9)", lineHeight: 1.2, marginBottom: 10 }}>{result.piece}</div>
            {trendConf && <div style={{ display: "inline-flex", alignItems: "center", gap: 5, background: `${trendConf.color}10`, border: `1px solid ${trendConf.color}25`, borderRadius: 20, padding: "4px 12px" }}>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: trendConf.color }}>{trendConf.arrow} {trendConf.label[lang] || trendConf.label.en}</span>
            </div>}
          </div>
        </div>

        {sc && <div style={{ background: sc.bg, border: `2px solid ${sc.border}`, borderRadius: 16, padding: "22px 26px", marginBottom: 14 }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, letterSpacing: "0.25em", color: sc.color, textTransform: "uppercase", marginBottom: 8, opacity: 0.7 }}>
            {t(lang, isBuy ? "verdict_label" : "verdict_sell_label")}
          </div>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: sc.color, marginBottom: 10 }}>
            {sc.emoji} {sc.label[lang] || sc.label.en}
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.92)", margin: "0 0 8px", lineHeight: 1.5 }}>
            {isBuy ? result.verdictStatement : result.sellStatement}
          </p>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.6 }}>
            {isBuy ? result.verdictReason : result.sellReason}
          </p>
        </div>}

        {isBuy && <>
          <div style={{ background: "rgba(200,155,60,0.04)", border: "1px solid rgba(200,155,60,0.12)", borderRadius: 14, padding: "16px 20px", marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
              <div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, letterSpacing: "0.2em", color: "rgba(200,155,60,0.72)", textTransform: "uppercase", marginBottom: 4 }}>{t(lang, "market_range")}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, color: "rgba(255,255,255,0.88)" }}>{result.estimatedMarketRange}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.88)", marginTop: 2, fontStyle: "italic" }}>{result.priceSource}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, letterSpacing: "0.2em", color: "rgba(255,255,255,0.88)", textTransform: "uppercase", marginBottom: 3 }}>{t(lang, "price_context")}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, color: sc?.color }}>{result.delta}</div>
              </div>
            </div>
            {result.priceContext && <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.92)", margin: "10px 0 0", lineHeight: 1.5, fontStyle: "italic" }}>{result.priceContext}</p>}
          {result.valueFactors?.summary && <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 10 }}>
            <span style={{ fontSize: 12 }}>🎨</span>
            <div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
                {result.valueFactors.material && <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(200,155,60,0.8)", background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.15)", borderRadius: 20, padding: "2px 10px" }}>{result.valueFactors.material}</span>}
                {result.valueFactors.colour && <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(200,155,60,0.8)", background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.15)", borderRadius: 20, padding: "2px 10px" }}>{result.valueFactors.colour}</span>}
                {result.valueFactors.size && <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(200,155,60,0.8)", background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.15)", borderRadius: 20, padding: "2px 10px" }}>{result.valueFactors.size}</span>}
                {result.valueFactors.hardware && <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(200,155,60,0.8)", background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.15)", borderRadius: 20, padding: "2px 10px" }}>{result.valueFactors.hardware}</span>}
                {result.valueFactors.rarity && <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "2px 10px" }}>{result.valueFactors.rarity}</span>}
              </div>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.5 }}>{result.valueFactors.summary}</p>
            </div>
          </div>}
          </div>
          {result.trendNote && <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", marginBottom: 12, display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: trendConf?.color }}>{trendConf?.arrow}</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0 }}>{result.trendNote}</p>
          </div>}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px", marginBottom: 12 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 8 }}>{t(lang, "visual_check")}</div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.6 }}>{result.visualAuthCheck}</p>
          </div>
          {!isOwner ? (
            <div style={{ position: "relative", marginBottom: 12 }}>
              <div style={{ filter: "blur(5px)", pointerEvents: "none", userSelect: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 10 }}>{t(lang, "auth_signals")}</div>
                {(result.authDetails || []).map((d, i) => <div key={i} style={{ display: "flex", gap: 10, marginBottom: 7 }}><span style={{ color: "#22c55e" }}>✓</span><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.92)" }}>{d}</span></div>)}
              </div>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(8,8,16,0.78)", borderRadius: 12, gap: 10 }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.92)" }}>{t(lang, "auth_locked")}</div>
                <button onClick={() => document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" })} style={{ background: "linear-gradient(135deg,#c8923a,#f2cc72)", border: "none", borderRadius: 10, padding: "10px 22px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 500, color: "#080810" }}>{t(lang, "join_unlock")}</button>
              </div>
            </div>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px", marginBottom: 12 }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 10 }}>{t(lang, "auth_signals")}</div>
              {(result.authDetails || []).map((d, i) => <div key={i} style={{ display: "flex", gap: 10, marginBottom: 7 }}><span style={{ color: "#22c55e" }}>✓</span><span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.92)" }}>{d}</span></div>)}
            </div>
          )}
          {result.historicalNote && <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", marginBottom: 12, display: "flex", gap: 10 }}>
            <span>📊</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.6 }}>{result.historicalNote}</p>
          </div>}
        </>}

        {!isBuy && <>
          <div style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.12)", borderRadius: 14, padding: "18px 22px", marginBottom: 12 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(34,197,94,0.45)", textTransform: "uppercase", marginBottom: 14 }}>{t(lang, "value_title")}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.92)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{t(lang, "market_mint")}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: "rgba(255,255,255,0.92)" }}>{result.currentMarketRange}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.92)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{t(lang, "your_piece")}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: "rgba(255,255,255,0.88)" }}>{result.conditionAdjustedRange}</div>
              </div>
            </div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.88)", marginTop: 10, fontStyle: "italic" }}>{result.priceSource}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "18px 22px", marginBottom: 12 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.72)", textTransform: "uppercase", marginBottom: 14 }}>{t(lang, "pricing")}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: 10, padding: "14px" }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(34,197,94,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>{t(lang, "quick_sale")}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>{result.quickSaleEstimate}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.92)" }}>{t(lang, "weeks_23")}</div>
              </div>
              <div style={{ background: "rgba(200,155,60,0.05)", border: "1px solid rgba(200,155,60,0.15)", borderRadius: 10, padding: "14px" }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(200,155,60,0.6)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>{t(lang, "optimal")}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, color: "rgba(255,255,255,0.85)", marginBottom: 4 }}>{result.optimalSaleEstimate}</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.92)" }}>{t(lang, "weeks_48")}</div>
              </div>
            </div>
            {result.bestPeriodToSell && <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center" }}>
              <span>📅</span>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.92)", margin: 0 }}>{t(lang, "best_period")}: <strong style={{ color: "rgba(255,255,255,0.92)" }}>{result.bestPeriodToSell}</strong></p>
            </div>}
          </div>
          {result.trendNote && <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", marginBottom: 12, display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: trendConf?.color }}>{trendConf?.arrow}</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0 }}>{result.trendNote}</p>
          </div>}
          {result.conditionTip && <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 16px", marginBottom: 12, display: "flex", gap: 10 }}>
            <span>✨</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.6 }}>{result.conditionTip}</p>
          </div>}
        </>}

        <div style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.88)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>⚠ {result.disclaimer}</p>
        </div>
        <button onClick={() => { setPhase("idle"); setResult(null); setPreview(null); setCondition(null); }} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 24px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.88)" }}>
          {t(lang, isBuy ? "scan_another" : "analyse_another")}
        </button>
      </div>
    );
  }
  return null;
}

/* ─── RESEARCH SECTION ─── */
function ResearchSection({ isOwner, lang }) {
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState("idle");
const [result, setResult] = useState(null);
const [errorMsg, setErrorMsg] = useState("");
  const langName = { en: "English", fr: "French", ja: "Japanese" }[lang] || "English";

  const search = async () => {
    if (!query.trim()) return;
    setPhase("loading"); setResult(null);
    try {
      const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
`You are AURUM, a luxury market intelligence agent. RESPOND ENTIRELY IN ${langName.toUpperCase()}.

Search the web RIGHT NOW for comprehensive market intelligence on: "${query}"

MANDATORY SOURCES TO SEARCH:
- Vestiaire Collective: current pre-owned listings and recent sold prices
- Christie's, Sotheby's, Artcurial: auction results from the last 24 months
- Knight Frank Luxury Investment Index 2024: performance data
- Bain & Company luxury reports: market trend data
- Chrono24 (if watch): current market prices
- The RealReal, Rebag: current resale market data

LEGAL: Present as market observations only. Not financial advice. Not professional authentication. Cite all sources used.

Return ONLY valid JSON — no markdown, no preamble. All text in ${langName}:
{
  "identified": true,
  "house": "brand name",
  "piece": "full model name",
  "category": "Bag|Jewelry|Watch|Clothing|Shoes|Accessory",
  "overview": "2-3 sentences with specific market context in ${langName}",
  "currentMarketRange": "real pre-owned range from current listings e.g. €8,500 – €14,000",
  "newRetailRange": "current retail price if available",
  "trend": "rising|stable|falling",
  "trendNote": "one sentence with specific % or data point citing source",
  "historicalPerformance": "2-3 sentences with specific data e.g. +23% over 3 years per Knight Frank 2024, auction results etc.",
  "keyValueFactors": [
    {"factor": "Material", "impact": "positive|negative|neutral", "note": "specific materials and their price premium e.g. Togo leather +15% vs Epsom"},
    {"factor": "Colour", "impact": "positive|negative|neutral", "note": "specific colours and rarity e.g. Bleu Électrique commands 30-40% premium"},
    {"factor": "Size", "impact": "positive|negative|neutral", "note": "which sizes hold value best and why"},
    {"factor": "Hardware", "impact": "positive|negative|neutral", "note": "specific hardware impact e.g. gold hardware +8-12% vs palladium"},
    {"factor": "Condition", "impact": "positive|negative|neutral", "note": "specific condition impact with % range"},
    {"factor": "Market demand", "impact": "positive|negative|neutral", "note": "current buyer demand with specific data"},
    {"factor": "Rarity", "impact": "positive|negative|neutral", "note": "limited editions or discontinued models — specific impact"},
    {"factor": "Year & provenance", "impact": "positive|negative|neutral", "note": "production year or origin impact with data"}
  ],
  "authenticationGuide": [
    {"element": "authentication point in ${langName}", "description": "what to look for with specific details in ${langName}"}
  ],
  "marketContext": "2-3 sentences with specific market data in ${langName}",
  "sources": ["actual source 1 consulted", "actual source 2 consulted"],
  "dataDate": "${today}",
  "disclaimer": "short disclaimer in ${langName}"
}`
const data = await callClaudeTextJSON(prompt);
setErrorMsg(JSON.stringify(data).substring(0, 500));
setResult(data);
setPhase("result");
} catch (err) { 
  setPhase("error"); 
  setErrorMsg(String(err?.message || err || "Unknown")); 
}
  };

  const trendConf = result ? (TREND[result.trend] || TREND.stable) : null;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && search()}
          placeholder={t(lang, "research_placeholder")}
          style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "14px 18px", fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 300, color: "rgba(255,255,255,0.8)", outline: "none", transition: "border-color 0.3s" }}
          onFocus={e => e.target.style.borderColor = "rgba(200,155,60,0.35)"}
          onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
        <button onClick={search} disabled={!query.trim() || phase === "loading"} style={{ background: "linear-gradient(135deg,#c8923a,#f2cc72)", border: "none", borderRadius: 12, padding: "14px 24px", cursor: query.trim() ? "pointer" : "default", fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, color: "#080810", opacity: query.trim() ? 1 : 0.4, transition: "all 0.3s", boxShadow: "0 4px 16px rgba(200,155,60,0.2)" }}>{t(lang, "research_btn")}</button>
      </div>

      {/* Research bullets - shown only when idle */}
      {phase === "idle" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, marginBottom: 28 }}>
          {[
            { icon: "💰", title: lang === "fr" ? "Fourchette de prix" : lang === "ja" ? "価格レンジ" : "Price range", desc: lang === "fr" ? "Prix actuel, neuf et seconde main" : lang === "ja" ? "新品・中古の現在市場価格" : "Current market price, new & pre-owned" },
            { icon: "📈", title: lang === "fr" ? "Tendance & historique" : lang === "ja" ? "トレンド＆履歴" : "Trend & history", desc: lang === "fr" ? "Cette pièce monte-t-elle ou baisse-t-elle ?" : lang === "ja" ? "値上がり？値下がり？" : "Is this piece rising or falling?" },
            { icon: "⚖️", title: lang === "fr" ? "Ce qui fait la valeur" : lang === "ja" ? "価値を決める要因" : "What drives value", desc: lang === "fr" ? "Matière, couleur, taille, état — ce qui fait vraiment la différence" : lang === "ja" ? "素材、色、サイズ、状態 — 価値に本当に影響する要因" : "Material, colour, size, condition — what truly makes the difference" },
            { icon: "🔒", title: lang === "fr" ? "Guide d'authentification" : lang === "ja" ? "真贋ガイド" : "Authentication guide", desc: lang === "fr" ? "Ce qu'il faut vérifier — membres seulement" : lang === "ja" ? "確認ポイント（会員限定）" : "What to check before buying — members only" },
          ].map((item, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px 16px" }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{item.icon}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.92)", marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 300, color: "rgba(255,255,255,0.92)", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      )}


      {phase === "loading" && (
        <div style={{ textAlign: "center", padding: "48px 24px" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontStyle: "italic", color: "rgba(255,255,255,0.92)", marginBottom: 12 }}>{t(lang, "analysing")}</div>
          <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 16 }}>
            {[0, 0.2, 0.4].map((d, i) => <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(200,155,60,0.6)", animation: `blink 1.4s ease ${d}s infinite` }} />)}
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}>{t(lang, "search_data")}</p>
        </div>
      )}

      {phase === "error" && (
        <div style={{ textAlign: "center", padding: 40 }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(239,68,68,0.7)", marginBottom: 16 }}>{t(lang, "search_fail")}<br/><small style={{wordBreak:"break-all",fontSize:10}}>{errorMsg}</small></p>
          <button onClick={() => setPhase("idle")} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 22px", color: "rgba(255,255,255,0.92)", fontFamily: "'DM Sans',sans-serif", fontSize: 11, cursor: "pointer" }}>{t(lang, "try_again")}</button>
        </div>
      )}

      {phase === "result" && result && (
        <div>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.3em", color: "rgba(200,155,60,0.75)", textTransform: "uppercase", marginBottom: 6 }}>{result.house} · {result.category}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: "rgba(255,255,255,0.9)", marginBottom: 10 }}>{result.piece}</div>
           <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.92)", lineHeight: 1.65, margin: 0 }}>{errorMsg && <p style={{color:"red",fontSize:10,wordBreak:"break-all"}}>{errorMsg}</p>}{result.overview}</p>
          </div>

          <div style={{ background: "rgba(200,155,60,0.04)", border: "1px solid rgba(200,155,60,0.12)", borderRadius: 14, padding: "18px 22px", marginBottom: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 10 }}>
              <div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, letterSpacing: "0.2em", color: "rgba(200,155,60,0.72)", textTransform: "uppercase", marginBottom: 4 }}>{t(lang, "market_mint")}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: "rgba(255,255,255,0.88)" }}>{result.currentMarketRange}</div>
              </div>
              {result.newRetailRange && <div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 8, letterSpacing: "0.2em", color: "rgba(200,155,60,0.72)", textTransform: "uppercase", marginBottom: 4 }}>Retail</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, color: "rgba(255,255,255,0.92)" }}>{result.newRetailRange}</div>
              </div>}
            </div>
            {trendConf && <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ color: trendConf.color }}>{trendConf.arrow}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: trendConf.color }}>{trendConf.label[lang] || trendConf.label.en}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.92)" }}>— {result.trendNote}</span>
            </div>}
          </div>

          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px", marginBottom: 12 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 8 }}>{t(lang, "historical_perf")}</div>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.65 }}>{result.historicalPerformance}</p>
          </div>

          {result.keyValueFactors?.length > 0 && <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px", marginBottom: 12 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 12 }}>{t(lang, "value_factors")}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {result.keyValueFactors.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: f.impact === "positive" ? "#22c55e" : f.impact === "negative" ? "#ef4444" : "#eab308", fontSize: 12, marginTop: 1 }}>{f.impact === "positive" ? "↑" : f.impact === "negative" ? "↓" : "→"}</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.92)", marginBottom: 2 }}>{f.factor}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.92)" }}>{f.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>}

          {!isOwner ? (
            <div style={{ position: "relative", marginBottom: 12 }}>
              <div style={{ filter: "blur(5px)", pointerEvents: "none", userSelect: "none", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px" }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 12 }}>{t(lang, "auth_guide")}</div>
                {(result.authenticationGuide || []).map((g, i) => <div key={i} style={{ marginBottom: 10 }}><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.92)", marginBottom: 2 }}>{g.element}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.92)" }}>{g.description}</div></div>)}
              </div>
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(8,8,16,0.78)", borderRadius: 12, gap: 10 }}>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.92)" }}>{t(lang, "auth_guide_locked")}</div>
                <button onClick={() => document.getElementById("waitlist").scrollIntoView({ behavior: "smooth" })} style={{ background: "linear-gradient(135deg,#c8923a,#f2cc72)", border: "none", borderRadius: 10, padding: "10px 22px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 500, color: "#080810" }}>{t(lang, "join_unlock")}</button>
              </div>
            </div>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px", marginBottom: 12 }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(200,155,60,0.68)", textTransform: "uppercase", marginBottom: 12 }}>{t(lang, "auth_guide")}</div>
              {(result.authenticationGuide || []).map((g, i) => <div key={i} style={{ marginBottom: 10 }}><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 400, color: "rgba(255,255,255,0.92)", marginBottom: 2 }}>✓ {g.element}</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 300, color: "rgba(255,255,255,0.92)" }}>{g.description}</div></div>)}
            </div>
          )}

          {result.marketContext && <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 18px", marginBottom: 12, display: "flex", gap: 10 }}>
            <span>🌍</span>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.6 }}>{result.marketContext}</p>
          </div>}

          {result.sources?.length > 0 && <div style={{ marginBottom: 12 }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.88)", letterSpacing: "0.15em", marginBottom: 6 }}>{t(lang, "sources")}</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 6 }}>
              {result.sources.map((s, i) => <span key={i} style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.88)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: "3px 10px" }}>{s}</span>)}
            </div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.88)", fontStyle: "italic" }}>{t(lang, "data_as_of")} {result.dataDate}</div>
          </div>}

          <div style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.88)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>⚠ {result.disclaimer}</p>
          </div>
          <button onClick={() => { setPhase("idle"); setResult(null); setQuery(""); }} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "12px 24px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.88)" }}>{t(lang, "new_search")}</button>
        </div>
      )}
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function Aurum() {
  const [city, setCity] = useState(CITIES[0]);
  const [lang, setLang] = useState("en");
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [showLangSelector, setShowLangSelector] = useState(false);
  const [isTripMode, setIsTripMode] = useState(false);
  const [rates, setRates] = useState({});
  const [activeTab, setActiveTab] = useState("scan");
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [ownerCode, setOwnerCode] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [accessLabel, setAccessLabel] = useState("OWNER");
  const [maxScansOverride, setMaxScansOverride] = useState(999);
  const [showOwnerInput, setShowOwnerInput] = useState(false);
  const waitlistCount = 2147;
  const year = new Date().getFullYear();

  // Detect language from browser
  useEffect(() => {
    const browserLang = navigator.language?.substring(0, 2);
    if (browserLang === "fr") setLang("fr");
    else if (browserLang === "ja") setLang("ja");
    else setLang("en");
  }, []);

  // Detect city from timezone
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.includes("Tokyo") || tz.includes("Japan")) setCity(CITIES.find(c => c.id === "tokyo") || CITIES[0]);
    else if (tz.includes("London")) setCity(CITIES.find(c => c.id === "london") || CITIES[0]);
    else if (tz.includes("New_York") || tz.includes("Eastern")) setCity(CITIES.find(c => c.id === "newyork") || CITIES[0]);
    else if (tz.includes("Dubai")) setCity(CITIES.find(c => c.id === "dubai") || CITIES[0]);
    else if (tz.includes("Seoul")) setCity(CITIES.find(c => c.id === "seoul") || CITIES[0]);
    else if (tz.includes("Sydney")) setCity(CITIES.find(c => c.id === "sydney") || CITIES[0]);
    else if (tz.includes("Rome") || tz.includes("Milan")) setCity(CITIES.find(c => c.id === "milan") || CITIES[0]);
    else setCity(CITIES[0]);
  }, []);

  useEffect(() => { setTimeout(() => setMounted(true), 100); getExchangeRates().then(setRates); }, []);

  const handleCityChange = (newCity) => { setCity(newCity); setIsTripMode(true); };
  const handleOwnerCode = () => {
    const code = ownerCode.trim().toUpperCase();
    const access = ACCESS_CODES[code];
    if (access) {
      setIsOwner(true);
      setAccessLabel(access.label);
      setMaxScansOverride(access.scans);
      setShowOwnerInput(false);
    }
  };

  const TABS = [
    { id: "scan",     label: t(lang, "tab_scan"),     icon: "📷" },
    { id: "research", label: t(lang, "tab_research"), icon: "🔍" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0c0c16", color: "#e8e0d0", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .bg { position:fixed; inset:0; pointer-events:none; z-index:0; background: radial-gradient(ellipse 80% 50% at 10% -10%,rgba(200,155,60,0.08) 0%,transparent 55%), radial-gradient(ellipse 60% 40% at 90% 110%,rgba(200,155,60,0.05) 0%,transparent 55%); }
        .wrap { position:relative; z-index:2; }
        .nav { display:flex; align-items:center; justify-content:space-between; padding:16px 5%; border-bottom:1px solid rgba(255,255,255,0.05); backdrop-filter:blur(20px); position:sticky; top:0; z-index:50; background:rgba(8,8,16,0.92); opacity:0; transform:translateY(-8px); transition:opacity 0.8s,transform 0.8s; flex-wrap:wrap; gap:8px; }
        .nav.in { opacity:1; transform:none; }
        .logo { font-family:'Playfair Display',serif; font-size:22px; font-style:italic; letter-spacing:0.15em; background:linear-gradient(130deg,#c8923a,#f2cc72,#c8923a); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 4s linear infinite; }
        @keyframes shimmer { to { background-position:200% center; } }
        .hero { min-height:88vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px 8% 60px; opacity:0; transform:translateY(20px); transition:opacity 1s ease 0.2s,transform 1s ease 0.2s; }
        .hero.in { opacity:1; transform:none; }
        .sec { padding:80px 8%; max-width:1100px; margin:0 auto; }
        .sec-label { font-family:'DM Sans',sans-serif; font-size:9px; font-weight:400; letter-spacing:0.45em; text-transform:uppercase; color:rgba(200,155,60,0.45); margin-bottom:12px; }
        .sec-title { font-family:'Playfair Display',serif; font-size:clamp(24px,4vw,40px); font-weight:400; font-style:italic; color:rgba(255,255,255,0.88); margin-bottom:10px; }
        .sec-sub { font-family:'DM Sans',sans-serif; font-size:14px; font-weight:300; color:rgba(255,255,255,0.28); line-height:1.6; max-width:480px; margin-bottom:36px; }
        .divider { border:none; border-top:1px solid rgba(255,255,255,0.05); }
        .grid-2 { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        .card { background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:16px; padding:26px 22px; transition:all 0.3s; }
        .card:hover { border-color:rgba(200,155,60,0.2); background:rgba(200,155,60,0.03); }
        .tab-bar { display:flex; gap:4px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:4px; max-width:280px; margin:0 auto 40px; }
        .tab-btn { flex:1; padding:10px 0; border:none; border-radius:10px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:300; letter-spacing:0.05em; transition:all 0.25s; display:flex; align-items:center; justify-content:center; gap:6px; }
        .tab-btn.active { background:rgba(200,155,60,0.15); color:rgba(200,155,60,0.9); font-weight:400; }
        .tab-btn.inactive { background:transparent; color:rgba(255,255,255,0.35); }
        .cta-btn { background:linear-gradient(135deg,#c8923a,#f2cc72 50%,#c8923a); background-size:200% auto; border:none; border-radius:14px; padding:16px 40px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:12px; font-weight:500; letter-spacing:0.15em; text-transform:uppercase; color:#080810; transition:all 0.3s; box-shadow:0 4px 24px rgba(200,155,60,0.25); }
        .cta-btn:hover { background-position:right center; box-shadow:0 6px 32px rgba(200,155,60,0.4); transform:translateY(-2px); }
        .nav-btn { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:6px 14px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:300; color:rgba(255,255,255,0.55); display:flex; align-items:center; gap:6px; transition:all 0.25s; }
        .nav-btn:hover { border-color:rgba(200,155,60,0.25); color:rgba(200,155,60,0.7); }
        .lang-dropdown { position:absolute; top:100%; right:0; margin-top:6px; background:#0e0e18; border:1px solid rgba(255,255,255,0.1); border-radius:12px; overflow:hidden; z-index:100; min-width:140px; }
        .lang-opt { display:flex; align-items:center; gap:10px; padding:10px 16px; cursor:pointer; fontFamily:'DM Sans',sans-serif; font-size:12px; color:rgba(255,255,255,0.6); transition:background 0.2s; }
        .lang-opt:hover { background:rgba(200,155,60,0.08); color:rgba(200,155,60,0.8); }
        .waitlist-box { background:rgba(200,155,60,0.04); border:1px solid rgba(200,155,60,0.12); border-radius:24px; padding:56px 5%; text-align:center; max-width:580px; margin:0 auto; }
        .email-row { display:flex; gap:10px; max-width:420px; margin:0 auto 14px; }
        .email-in { flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; padding:14px 18px; font-family:'DM Sans',sans-serif; font-size:14px; font-weight:300; color:rgba(255,255,255,0.8); outline:none; transition:border-color 0.3s; }
        .email-in::placeholder { color:rgba(255,255,255,0.2); font-style:italic; }
        .email-in:focus { border-color:rgba(200,155,60,0.35); }
        .email-btn { background:linear-gradient(135deg,#c8923a,#f2cc72 50%,#c8923a); background-size:200% auto; border:none; border-radius:12px; padding:14px 24px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:11px; font-weight:500; letter-spacing:0.1em; text-transform:uppercase; color:#080810; white-space:nowrap; transition:all 0.3s; }
        .email-btn:hover { background-position:right center; transform:translateY(-1px); }
        .footer { border-top:1px solid rgba(255,255,255,0.05); padding:40px 5%; text-align:center; }
        @keyframes blink { 0%,80%,100%{opacity:0.15;transform:scale(0.7)} 40%{opacity:1;transform:scale(1)} }
        @media(max-width:768px) { .grid-2{grid-template-columns:1fr} .email-row{flex-direction:column} }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.06); }
      `}</style>

      <div className="bg" />
      {showCitySelector && <CitySelector currentCity={city} onSelect={handleCityChange} onClose={() => setShowCitySelector(false)} lang={lang} />}

      <div className="wrap">
        {/* NAV */}
        <nav className={`nav ${mounted ? "in" : ""}`}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className="logo">Aurum</div>
            {isOwner && <div style={{ background: "rgba(200,155,60,0.1)", border: "1px solid rgba(200,155,60,0.3)", borderRadius: 20, padding: "3px 10px", fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(200,155,60,0.7)", letterSpacing: "0.2em" }}>{accessLabel}</div>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            {/* Live rates */}
            {Object.keys(rates).length > 0 && (
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(200,155,60,0.55)", display: "flex", gap: 8 }}>
                <span>🇯🇵 ¥{Math.round(rates["JPY"])}</span>
                <span>🇺🇸 ${rates["USD"]?.toFixed(2)}</span>
                <span>🇬🇧 £{rates["GBP"]?.toFixed(2)}</span>
              </div>
            )}
            {/* Language selector */}
            <div style={{ position: "relative" }}>
              <button className="nav-btn" onClick={() => setShowLangSelector(!showLangSelector)}>
                {LANGUAGES.find(l => l.id === lang)?.flag} {LANGUAGES.find(l => l.id === lang)?.label}
                <span style={{ fontSize: 10, opacity: 0.4 }}>▾</span>
              </button>
              {showLangSelector && (
                <div className="lang-dropdown">
                  {LANGUAGES.map(l => (
                    <div key={l.id} className="lang-opt" style={{ fontFamily: "'DM Sans',sans-serif", background: lang === l.id ? "rgba(200,155,60,0.08)" : "transparent", color: lang === l.id ? "rgba(200,155,60,0.8)" : "rgba(255,255,255,0.6)" }}
                      onClick={() => { setLang(l.id); setShowLangSelector(false); }}>
                      {l.flag} {l.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* City selector */}
            <button className="nav-btn" onClick={() => setShowCitySelector(true)}>
              {city.flag} {city.name}
              {isTripMode && <span style={{ background: "rgba(200,155,60,0.1)", border: "1px solid rgba(200,155,60,0.25)", borderRadius: 20, padding: "2px 8px", fontSize: 8, color: "rgba(200,155,60,0.7)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{t(lang, "trip_mode")}</span>}
              <span style={{ fontSize: 10, opacity: 0.4 }}>▾</span>
            </button>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: "rgba(255,255,255,0.88)", letterSpacing: "0.1em" }}>{t(lang, "not_financial")}</div>
          </div>
        </nav>

        {/* TRIP BANNER */}
        {isTripMode && (
          <div style={{ background: "rgba(200,155,60,0.06)", borderBottom: "1px solid rgba(200,155,60,0.1)", padding: "10px 5%", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span>✈️</span>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(200,155,60,0.7)" }}>
                {t(lang, "trip_banner", { city: `${city.flag} ${city.name}` })}
              </div>
            </div>
            <button onClick={() => { setCity(CITIES[0]); setIsTripMode(false); }} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "4px 12px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,0.92)" }}>{t(lang, "home_btn")}</button>
          </div>
        )}

        {/* HERO */}
        <div className={`hero ${mounted ? "in" : ""}`}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 300, letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(200,155,60,0.75)", marginBottom: 22, lineHeight: 2 }}>
            {t(lang, "tagline")}<br />{city.flag} {city.name}
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(36px,7vw,74px)", fontWeight: 400, lineHeight: 1.1, color: "rgba(255,255,255,0.92)", marginBottom: 18 }}>
            {t(lang, "hero_title_1")}<br />
            <em style={{ fontStyle: "italic", background: "linear-gradient(130deg,#c8923a,#f2cc72,#c8923a)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 4s linear infinite" }}>{t(lang, "hero_title_2")}</em>
          </h1>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(13px,1.8vw,16px)", fontWeight: 300, lineHeight: 1.7, color: "rgba(255,255,255,0.92)", maxWidth: 620, margin: "0 auto 14px" }}>
            {t(lang, "hero_sub", { year })}
          </p>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontStyle: "italic", color: "rgba(255,255,255,0.88)", maxWidth: 400, margin: "0 auto 44px", lineHeight: 1.5 }}>
            {t(lang, "hero_legal")}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          {/* Beta badge */}
          <div style={{ background: "rgba(200,155,60,0.08)", border: "1px solid rgba(200,155,60,0.2)", borderRadius: 20, padding: "6px 16px", marginBottom: 8 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: "0.15em", color: "rgba(200,155,60,0.7)", textTransform: "uppercase" }}>
              {lang === "fr" ? "✦ Accès anticipé" : lang === "ja" ? "✦ 早期アクセス" : "✦ Early Access"}
            </span>
          </div>
            <button className="cta-btn" onClick={() => document.getElementById("tools").scrollIntoView({ behavior: "smooth" })}>
              {t(lang, "try_free")}
            </button>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.88)", letterSpacing: "0.08em" }}>
              <strong style={{ color: "rgba(200,155,60,0.55)", fontWeight: 400 }}>{waitlistCount.toLocaleString()}</strong> {t(lang, "waitlist_count", { n: "" }).replace(waitlistCount.toLocaleString(), "").trim()}
            </span>
            
            {showOwnerInput && !isOwner && (
              <div style={{ display: "flex", gap: 8 }}>
                <input value={ownerCode} onChange={e => setOwnerCode(e.target.value)} onKeyDown={e => e.key === "Enter" && handleOwnerCode()} placeholder={t(lang, "owner_placeholder")} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "8px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.92)", outline: "none", width: 140 }} />
                <button onClick={handleOwnerCode} style={{ background: "rgba(200,155,60,0.1)", border: "1px solid rgba(200,155,60,0.2)", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(200,155,60,0.6)" }}>{t(lang, "enter_btn")}</button>
              </div>
            )}
          </div>
        </div>

        <hr className="divider" />

        {/* TOOLS */}
        <div className="sec" id="tools">
          <div className="tab-bar">
            {TABS.map(tab => (
              <button key={tab.id} className={`tab-btn ${activeTab === tab.id ? "active" : "inactive"}`} onClick={() => setActiveTab(tab.id)}>
                <span>{tab.icon}</span><span>{tab.label}</span>
              </button>
            ))}
          </div>

          {activeTab === "scan" && (
            <>
              <div className="sec-label" style={{ textAlign: "center" }}>{t(lang, "scan_label")}<br />{city.flag} {city.name}</div>
              <h2 className="sec-title" style={{ textAlign: "center", whiteSpace: "pre-line" }}>{t(lang, "scan_title")}</h2>
              <p className="sec-sub" style={{ textAlign: "center", margin: "0 auto 36px" }}>
                {t(lang, "scan_sub", { year })}
              </p>
              <ScanSection rates={rates} city={city} isOwner={isOwner} lang={lang} maxScansOverride={maxScansOverride} />
            </>
          )}

          {activeTab === "research" && (
            <>
              <div className="sec-label" style={{ textAlign: "center" }}>{t(lang, "research_label")}</div>
              <h2 className="sec-title" style={{ textAlign: "center" }}>{t(lang, "research_title")}</h2>
              <p className="sec-sub" style={{ textAlign: "center", margin: "0 auto 36px" }}>
                {t(lang, "research_sub")}
              </p>
              <ResearchSection isOwner={isOwner} lang={lang} />
            </>
          )}
        </div>

        <hr className="divider" />
        {/* WAITLIST */}
        <div className="sec" id="waitlist">
          <div className="waitlist-box">
            {!joined ? (
              <>
                <div className="sec-label" style={{ textAlign: "center" }}>{t(lang, "early_access")}</div>
                <h2 className="sec-title" style={{ textAlign: "center", marginBottom: 10 }}>{t(lang, "be_first")}</h2>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.92)", lineHeight: 1.6, marginBottom: 28, textAlign: "center" }}>
                  {t(lang, "waitlist_desc")}
                </p>
                <div className="email-row">
                  <input className="email-in" type="email" placeholder={t(lang, "email_placeholder")} value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && email.includes("@") && setJoined(true)} />
                  <button className="email-btn" onClick={async () => { if(!email.includes("@")) return; try { await fetch("/api/aurum",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"subscribe",email})}); } catch(e){} setJoined(true); }}>{t(lang, "join_btn")}</button>
                </div>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 300, color: "rgba(255,255,255,0.88)", lineHeight: 1.5, maxWidth: 380, margin: "0 auto 16px" }}>
                  {t(lang, "waitlist_legal")}
                </p>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(200,155,60,0.6)", letterSpacing: "0.08em" }}>
                  {t(lang, "waitlist_count", { n: waitlistCount.toLocaleString() })}
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontStyle: "italic", color: "rgba(255,255,255,0.88)", marginBottom: 10 }}>{t(lang, "joined_title")}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.92)", lineHeight: 1.6 }}>
                  {t(lang, "joined_sub").split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
                </p>
              </div>
            )}
          </div>
        </div>


        <hr className="divider" />
        {/* FOOTER */}
        <footer className="footer">
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontStyle: "italic", background: "linear-gradient(130deg,#c8923a,#f2cc72)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 18 }}>Aurum</div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 300, color: "rgba(255,255,255,0.88)", lineHeight: 1.8, maxWidth: 680, margin: "0 auto 28px" }}>
            {t(lang, "footer_legal", { year })}
          </p>
          {!isOwner ? (
            !showOwnerInput
              ? <button onClick={() => setShowOwnerInput(true)} style={{ background: "transparent", border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.25)", letterSpacing: "0.3em", padding: "8px 16px" }}>· · ·</button>
              : <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                  <input
                    value={ownerCode}
                    onChange={e => setOwnerCode(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleOwnerCode()}
                    placeholder={t(lang, "owner_placeholder")}
                    autoFocus
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "10px 16px", fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.85)", outline: "none", width: 180 }}
                  />
                  <button onClick={handleOwnerCode} style={{ background: "rgba(200,155,60,0.12)", border: "1px solid rgba(200,155,60,0.3)", borderRadius: 10, padding: "10px 18px", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(200,155,60,0.85)" }}>
                    {t(lang, "enter_btn")}
                  </button>
                  <button onClick={() => { setShowOwnerInput(false); setOwnerCode(""); }} style={{ background: "transparent", border: "none", cursor: "pointer", fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)" }}>✕</button>
                </div>
          ) : null}
        </footer>
      </div>
    </div>
  );
}
