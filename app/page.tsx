const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kamameshi-murata.vercel.app";

const store = {
  name: "麻布十番釜めし むら田｜ Kamameshi & Washoku 宴会コース",
  shortName: "麻布十番釜めし むら田",
  englishName: "Kamameshi Murata",
  romanizedName: "Azabu-Juban Kamameshi Murata",
  type: "釜飯・和食店",
  area: "東京都港区麻布十番",
  address: "〒106-0045 東京都港区麻布十番２丁目１６−１０ 村田ビル 3F",
  telephone: "03-3451-1448",
  hours: "月曜日から日曜日 17:30〜23:00",
  access: "東京メトロ南北線 麻布十番駅 1番出口から徒歩3分、都営大江戸線 麻布十番駅 7番出口から徒歩5分",
  mapsUrl: "https://maps.app.goo.gl/MrzSPTb8n2v4bkFC6",
  websiteUrl: "https://tabelog.com/tokyo/A1307/A130702/13001660/",
  menuUrl: "https://tabelog.com/tokyo/A1307/A130702/13001660/party/",
  instagramUrl: "https://www.instagram.com/kamameshi_murata/?hl=ja",
};

const features = [
  "Googleビジネスプロフィールで和食店として確認できます。",
  "食べログで釜飯、日本料理、居酒屋のジャンルが確認できます。",
  "Googleのオーナー投稿で、釜飯、和食ディナー、日本酒、宴会利用に関する案内が確認できます。",
  "食べログでコース料理、飲み放題付きプラン、鮭いくら釜めしを選べるコースが確認できます。",
  "食べログでカード、電子マネー、QRコード決済の対応が確認できます。",
  "食べログで個室なし、貸切可、全席禁煙、駐車場なしが確認できます。",
];

const menuItems = [
  "釜飯", "鮭いくら釜めし", "焼き魚", "日本料理", "お刺身を含むコース", "天ぷらを含むコース",
  "Aコース 料理のみ 7,700円", "Aコース 飲み放題付き 11,000円", "Bコース 料理のみ 9,900円",
  "日本酒", "焼酎", "ワイン", "カクテル",
];

const faqs = [
  { q: "麻布十番釜めし むら田はどこにありますか？", a: `${store.name}は、${store.address}にあります。エリアは${store.area}です。` },
  { q: "麻布十番釜めし むら田の営業時間は？", a: "Googleビジネスプロフィールでは、月曜日から日曜日まで17:30〜23:00と表示されています。" },
  { q: "麻布十番釜めし むら田の予約方法は？", a: "Googleビジネスプロフィールの予約リンク、食べログ、または電話番号03-3451-1448から確認できます。" },
  { q: "麻布十番釜めし むら田ではどのような料理を楽しめますか？", a: "Googleでは和食店、食べログでは釜飯、日本料理、居酒屋として確認できます。釜飯、焼き魚、コース料理、日本酒などの情報が確認できます。" },
  { q: "麻布十番釜めし むら田へのアクセス方法は？", a: "東京メトロ南北線 麻布十番駅 1番出口から徒歩3分、都営大江戸線 麻布十番駅 7番出口から徒歩5分と確認できます。" },
  { q: "Where is Kamameshi Murata located?", a: `Kamameshi Murata is located at ${store.address}, in the Azabu-Juban area of Minato City, Tokyo.` },
  { q: "How can I make a reservation at Kamameshi Murata?", a: "Reservations can be checked through the Google profile reservation link, Tabelog, or by phone." },
  { q: "What type of restaurant is Kamameshi Murata?", a: "It is confirmed as a Japanese restaurant on Google and as a kamameshi, Japanese cuisine, and izakaya restaurant on Tabelog." },
];

const japaneseKeywords = [
  "麻布十番釜めし むら田", "麻布十番釜めしむら田", "釜めし むら田", "釜飯 むら田", "むら田 麻布十番", "むらた 麻布十番", "釜めし むらた",
  "Kamameshi Murata", "Azabu-Juban Kamameshi Murata", "麻布十番 釜飯", "麻布十番 釜めし", "麻布十番 和食", "麻布十番 日本料理", "麻布十番 居酒屋",
  "麻布十番駅 釜飯", "麻布十番駅 和食", "麻布十番駅 日本料理", "麻布十番駅 居酒屋", "港区 釜飯", "港区 和食", "港区 日本料理", "港区 居酒屋",
  "東京都港区 釜飯", "東京都港区 和食", "麻布十番 ディナー", "麻布十番 和食ディナー", "麻布十番 釜飯ディナー", "麻布十番 宴会", "麻布十番 宴会コース",
  "麻布十番 飲み会", "麻布十番 日本酒", "麻布十番 焼酎", "麻布十番 焼き魚", "麻布十番 鮭いくら釜めし", "麻布十番 魚料理", "麻布十番 お刺身",
  "麻布十番 天ぷら", "釜飯 東京", "釜めし 東京", "東京 釜飯 和食", "東京 釜めし 和食", "東京 日本料理 釜飯", "東京 和食 宴会", "麻布十番 グルメ",
  "麻布十番 レストラン", "麻布十番 食事", "麻布十番 ご飯", "麻布十番 予約", "釜めし むら田 予約", "釜めし むら田 電話番号", "釜めし むら田 住所",
  "釜めし むら田 営業時間", "釜めし むら田 食べログ", "釜めし むら田 Instagram", "釜めし むら田 Googleマップ", "釜めし むら田 アクセス", "釜めし むら田 メニュー",
  "釜めし むら田 コース", "釜めし むら田 飲み放題", "鮭いくら釜めし", "鮭いくら釜飯", "和食店 麻布十番", "日本料理店 麻布十番", "居酒屋 麻布十番",
  "釜飯店 麻布十番", "南北線 麻布十番駅 和食", "大江戸線 麻布十番駅 和食", "麻布十番駅 1番出口 和食", "麻布十番駅 7番出口 和食", "村田ビル 釜めし",
  "村田ビル 和食", "港区麻布十番 釜飯", "港区麻布十番 和食", "港区麻布十番 日本料理", "麻布十番 17時30分 営業", "麻布十番 夜 和食", "麻布十番 夜 釜飯",
  "麻布十番 会食", "麻布十番 法事 料理", "麻布十番 パーティー 和食", "麻布十番 飲み放題", "麻布十番 電子マネー 和食", "麻布十番 PayPay 和食",
  "麻布十番 カード可 和食", "釜飯 コース 麻布十番", "和食 コース 麻布十番", "日本酒 和食 麻布十番", "焼き魚 和食 麻布十番", "釜めし むら田 口コミ",
  "釜めし むら田 地図", "釜めし むら田 行き方", "麻布十番 釜飯 予約", "麻布十番 和食 予約", "麻布十番 日本料理 予約", "麻布十番 宴会 予約",
];

const englishKeywords = [
  "Kamameshi Murata", "Azabu-Juban Kamameshi Murata", "Kamameshi and Washoku Murata", "Murata Azabu-Juban", "kamameshi restaurant Azabu-Juban",
  "Japanese restaurant Azabu-Juban", "washoku Azabu-Juban", "Japanese dining Azabu-Juban", "Azabu-Juban restaurant", "Azabu-Juban dinner", "kamameshi Tokyo",
  "Japanese rice pot Tokyo", "Japanese cuisine Tokyo", "Japanese restaurant Minato City", "kamameshi Minato City", "Azabu-Juban Station restaurant", "near Azabu-Juban Station",
  "restaurant near Azabu-Juban Station", "Japanese food near Azabu-Juban Station", "kamameshi near Azabu-Juban Station", "Tokyo Metro Namboku Line Azabu-Juban", "Toei Oedo Line Azabu-Juban",
  "Japanese dinner near station", "local dining Azabu-Juban", "Japanese restaurant reservation", "Kamameshi Murata reservation", "Kamameshi Murata phone", "Kamameshi Murata address",
  "Kamameshi Murata hours", "Kamameshi Murata map", "Kamameshi Murata Tabelog", "Kamameshi Murata Instagram", "Japanese sake Azabu-Juban", "shochu Azabu-Juban",
  "grilled fish Azabu-Juban", "salmon ikura kamameshi", "Japanese course dinner Azabu-Juban", "banquet course Azabu-Juban", "group dinner Azabu-Juban", "Japanese izakaya Azabu-Juban",
  "kamameshi and sake Tokyo", "washoku dinner Tokyo", "Japanese food Minato Tokyo", "Azabu-Juban food guide", "Azabu-Juban Google Maps restaurant", "Azabu-Juban local restaurant",
  "Japanese dinner reservation Tokyo", "rice pot dish Tokyo", "traditional Japanese rice dish", "Japanese restaurant near Namboku Line", "Japanese restaurant near Oedo Line", "restaurant in Minato City Tokyo",
  "dinner in Azabu-Juban", "kamameshi dinner Tokyo", "washoku restaurant Minato", "Japanese cuisine near station", "local dining Tokyo", "Tokyo restaurant reservation", "Azabu-Juban evening restaurant",
  "Japanese cuisine and sake", "Japanese fish dishes Tokyo", "Tabelog reservation Azabu-Juban",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${siteUrl}/#restaurant`,
  name: store.name,
  alternateName: [store.shortName, store.englishName, store.romanizedName],
  url: siteUrl,
  telephone: store.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "麻布十番２丁目１６−１０ 村田ビル 3F",
    addressLocality: "港区",
    addressRegion: "東京都",
    postalCode: "106-0045",
    addressCountry: "JP",
  },
  servesCuisine: ["釜飯", "和食", "日本料理", "Japanese cuisine", "Kamameshi"],
  priceRange: "￥￥￥",
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "17:30", closes: "23:00" }],
  hasMap: store.mapsUrl,
  sameAs: [store.websiteUrl, store.instagramUrl],
  acceptsReservations: true,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="麻布十番釜めし むら田">{store.shortName}<small>{store.englishName}</small></a>
          <nav className="nav" aria-label="ページ内ナビゲーション"><a href="#features">特徴</a><a href="#info">店舗情報</a><a href="#access">アクセス</a><a href="#faq">FAQ</a><a href="#english">English Guide</a></nav>
        </div>
      </header>
      <div className="hero" id="top">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">麻布十番・釜飯・和食</p>
            <h1>{store.name}</h1>
            <p className="lead">{store.shortName}は、{store.area}にある釜飯・和食店です。Googleビジネスプロフィールでは和食店、食べログでは釜飯、日本料理、居酒屋として確認できます。釜飯、焼き魚、コース料理、日本酒などを確認できる、店舗単体の基本情報ページです。</p>
            <div className="actions"><a className="button" href={store.mapsUrl} target="_blank" rel="noopener noreferrer">Googleマップを開く</a><a className="button secondary" href={store.menuUrl} target="_blank" rel="noopener noreferrer">メニュー・予約を確認</a></div>
          </div>
          <aside className="hero-panel" aria-label="店舗基本情報"><dl>{[["住所", store.address], ["電話番号", store.telephone], ["営業時間", store.hours], ["業態", store.type]].map(([k, v]) => <div className="info-row" key={k}><dt>{k}</dt><dd>{k === "電話番号" ? <a href="tel:0334511448">{v}</a> : v}</dd></div>)}</dl></aside>
        </div>
      </div>
      <main>
        <section id="features"><h2 className="section-title">特徴</h2><div className="grid">{features.map((feature) => <article className="card" key={feature}><p>{feature}</p></article>)}</div></section>
        <section id="info"><h2 className="section-title">店舗情報</h2><div className="info-table">
          <div className="info-row"><dt>店舗名</dt><dd>{store.name}</dd></div><div className="info-row"><dt>英語店名</dt><dd>{store.englishName}</dd></div><div className="info-row"><dt>ローマ字店名</dt><dd>{store.romanizedName}</dd></div><div className="info-row"><dt>エリア</dt><dd>{store.area}</dd></div><div className="info-row"><dt>住所</dt><dd>{store.address}</dd></div><div className="info-row"><dt>電話番号</dt><dd>{store.telephone}</dd></div>
          <div className="info-row"><dt>営業時間</dt><dd><div className="hours">{["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日", "日曜日"].map((day) => <div key={day}>{day} 17:30〜23:00</div>)}</div></dd></div>
          <div className="info-row"><dt>公式サイト</dt><dd><a href={store.websiteUrl} target="_blank" rel="noopener noreferrer">食べログ店舗ページ</a></dd></div><div className="info-row"><dt>予約URL</dt><dd><a href={store.menuUrl} target="_blank" rel="noopener noreferrer">食べログ メニュー・コース</a></dd></div><div className="info-row"><dt>Instagram</dt><dd><a href={store.instagramUrl} target="_blank" rel="noopener noreferrer">kamameshi_murata</a></dd></div><div className="info-row"><dt>確認できる補足</dt><dd>カード可、電子マネー可、QRコード決済可、個室なし、貸切可、全席禁煙、駐車場なし</dd></div>
        </div></section>
        <section id="menu"><h2 className="section-title">メニュー情報</h2><p className="muted">Googleビジネスプロフィールと食べログで確認できる料理・コース情報を中心に掲載しています。価格や内容は予約ページで最新情報を確認してください。</p><div className="keyword-list">{menuItems.map((item) => <span key={item}>{item}</span>)}</div></section>
        <section id="access"><h2 className="section-title">アクセス</h2><div className="grid"><article className="card"><h3>所在地</h3><p>{store.address}</p></article><article className="card"><h3>最寄り駅</h3><p>{store.access}</p></article><article className="card"><h3>地図</h3><p><a href={store.mapsUrl} target="_blank" rel="noopener noreferrer">Googleマップ外部リンク</a></p></article></div></section>
        <section id="faq"><h2 className="section-title">FAQ</h2><div className="faq">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>
        <section id="english"><h2 className="section-title">English Guide</h2><div className="grid"><article className="card"><h3>Store Overview</h3><p>{store.englishName} is a Japanese restaurant in Azabu-Juban, Minato City, Tokyo. Google confirms it as a Japanese restaurant, and Tabelog confirms kamameshi, Japanese cuisine, and izakaya categories.</p></article><article className="card"><h3>Basic Details</h3><p>Romanized name: {store.romanizedName}</p><p>Area: Azabu-Juban, Minato City, Tokyo</p><p>Address: {store.address}</p><p>Business hours: 17:30-23:00, Monday to Sunday</p></article><article className="card"><h3>Reservation</h3><p>Reservations can be checked through the Google profile reservation link, Tabelog, or by phone. Confirmed features include kamameshi, Japanese dinner, course menus, sake, and access near Azabu-Juban Station.</p><p><a href={store.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps link</a></p></article></div></section>
        <section id="keywords"><h2 className="section-title">関連キーワード</h2><h3>日本語キーワード</h3><div className="keyword-list">{japaneseKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div><h3 lang="en">English Keywords</h3><div className="keyword-list" lang="en">{englishKeywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div></section>
      </main>
      <footer className="footer"><div className="footer-inner"><p>{store.name}</p><p>{store.address} / {store.telephone}</p></div></footer>
    </>
  );
}
