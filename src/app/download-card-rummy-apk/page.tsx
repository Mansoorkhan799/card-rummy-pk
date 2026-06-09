import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'Download Card Rummy APK & 3 Patti Card Rummy – Free for Android 2026',
  description: 'Download Card Rummy APK free for Android. Play Classic Rummy, 3 Patti Card Rummy, 7-card & 10-card rummy online. V1.230, 49 MB, Android 5.0+. Earn real cash via JazzCash & EasyPaisa Pakistan.',
  keywords: [
    'Download Card Rummy',
    'Card Rummy APK download',
    '3 Patti Card Rummy APK',
    'Card Rummy online',
    'Card Rummy APK free download',
    '7 card rummy rules',
    '10 card rummy rules',
    'Card Rummy APK Pakistan',
    'Card Rummy V1.230',
    'Teen Patti download Pakistan',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://cardrummy.pk/download-card-rummy-apk",
  },
  openGraph: {
    title: 'Download Card Rummy APK & 3 Patti Card Rummy – Free for Android 2026',
    description: 'Download Card Rummy APK free. Play Classic Rummy, 3 Patti Card Rummy, earn real cash with JazzCash & EasyPaisa. 500K+ downloads!',
    url: "https://cardrummy.pk/download-card-rummy-apk",
    siteName: "Card Rummy",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://cardrummy.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Download Card Rummy APK – Pakistan's #1 Card Game",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Download Card Rummy APK & 3 Patti Card Rummy Free for Android',
    description: 'Download Card Rummy APK free. Play 3 Patti Card Rummy, Classic Rummy, earn real cash. 500K+ downloads Pakistan!',
    images: ["https://cardrummy.pk/feature/twitter-card.webp"],
  },
};

export default function DownloadPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Card Rummy",
    "operatingSystem": "Android 5.0+",
    "applicationCategory": "GameApplication",
    "applicationSubCategory": "CardGame",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PKR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "200000",
      "bestRating": "5"
    },
    "downloadUrl": "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272",
    "softwareVersion": "V1.230",
    "fileSize": "49 MB",
    "datePublished": "2026-06-08",
    "dateModified": "2026-06-08",
    "description": "Card Rummy is Pakistan's leading card gaming app. Play Classic Rummy, 3 Patti Card Rummy, 7-card rummy, 10-card rummy, Teen Patti, Dragon vs Tiger and 30+ games. Earn real cash via JazzCash & EasyPaisa.",
    "image": "https://cardrummy.pk/card-rummy.webp",
    "author": { "@type": "Organization", "name": "ErioCardRummy Dev" },
    "inLanguage": ["en", "ur"],
    "countriesSupported": "PK"
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cardrummy.pk" },
              { "@type": "ListItem", "position": 2, "name": "Download Card Rummy", "item": "https://cardrummy.pk/download-card-rummy-apk" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Download and Install Card Rummy APK on Android",
            "description": "Step-by-step guide to download and install the official Card Rummy APK on any Android device running Android 5.0 or higher.",
            "image": "https://cardrummy.pk/card-rummy.webp",
            "totalTime": "PT5M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "PKR", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Android device (Android 5.0+)" },
              { "@type": "HowToSupply", "name": "500 MB free storage" },
              { "@type": "HowToSupply", "name": "Active internet connection (3G/4G/Wi-Fi)" }
            ],
            "tool": [
              { "@type": "HowToTool", "name": "Android browser (Chrome/Firefox)" }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Visit Official Site",
                "text": "Open your browser and go to cardrummy.pk. Tap the Download button on the homepage.",
                "url": "https://cardrummy.pk/download-card-rummy-apk#step1"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Download the APK",
                "text": "The APK file (49 MB) will begin downloading. Keep your screen on and wait for it to finish.",
                "url": "https://cardrummy.pk/download-card-rummy-apk#step2"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Enable Unknown Apps",
                "text": "Go to Settings → Security → Install Unknown Apps and enable it for your browser or file manager.",
                "url": "https://cardrummy.pk/download-card-rummy-apk#step3"
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Install the APK",
                "text": "Open your Downloads folder, tap the Card Rummy APK file, then tap Install. Installation takes under 30 seconds.",
                "url": "https://cardrummy.pk/download-card-rummy-apk#step4"
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Open and Register",
                "text": "Tap Open, create your account with your mobile number, verify via OTP, and claim your welcome bonus.",
                "url": "https://cardrummy.pk/download-card-rummy-apk#step5"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Card Rummy APK safe to download?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Download only from the official website cardrummy.pk to ensure you get the genuine APK without malware or security risks." }
              },
              {
                "@type": "Question",
                "name": "Is Card Rummy free to download?",
                "acceptedAnswer": { "@type": "Answer", "text": "Completely free. The APK is PKR 0. You deposit money only if you want to play real-cash games; practice mode costs nothing." }
              },
              {
                "@type": "Question",
                "name": "How do you play cards on rummy?",
                "acceptedAnswer": { "@type": "Answer", "text": "In rummy, each player is dealt a set number of cards. The goal is to create valid sets or sequences from the cards in your hand. Players draw and discard cards in turns until one player forms the required hand and makes a valid declaration. The player who declares first with a valid hand wins the round." }
              },
              {
                "@type": "Question",
                "name": "What are the rules of 7 card rummy?",
                "acceptedAnswer": { "@type": "Answer", "text": "In 7-card rummy, each player receives 7 cards. The goal is to form sets (3 or 4 cards of the same rank) and sequences (3 or more consecutive cards of the same suit). The first player to meld all their cards into valid combinations and discard their final card wins. It is faster than 13-card rummy and ideal for quick sessions." }
              },
              {
                "@type": "Question",
                "name": "What are the rules of 10 card rummy?",
                "acceptedAnswer": { "@type": "Answer", "text": "10-card rummy deals 10 cards to each player. Similar to 13-card rummy, you must form sets and sequences. With fewer cards, games are shorter and require quicker decision-making. Popular choice for intermediate players who want a balance of strategy and pace." }
              },
              {
                "@type": "Question",
                "name": "Is gin rummy 7 or 10 cards?",
                "acceptedAnswer": { "@type": "Answer", "text": "Gin Rummy is traditionally played with 10 cards per player. Each player draws and discards to form melds (sets and runs). The game ends when a player 'knocks' or achieves 'gin' with all cards melded. Card Rummy's app offers a similar 10-card rummy mode." }
              },
              {
                "@type": "Question",
                "name": "What is the latest version of Card Rummy?",
                "acceptedAnswer": { "@type": "Answer", "text": "V1.230, updated June 8, 2026. Always download the latest version for best performance and security." }
              },
              {
                "@type": "Question",
                "name": "Why do I need to enable Unknown Apps to install Card Rummy?",
                "acceptedAnswer": { "@type": "Answer", "text": "Because Card Rummy is not on Google Play, Android requires manual permission to install APK files from outside the Play Store. This is a standard Android security feature." }
              }
            ]
          })
        }}
      />

      {/* Hero */}
      <section className="py-10 md:py-16 px-4 max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-5">
          <Image
            src="/card-rummy.webp"
            alt="Card Rummy App – Download APK for Android"
            width={96}
            height={96}
            className="rounded-2xl shadow-lg"
            priority
            fetchPriority="high"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Download <span className="text-accent">3 Patti Card Rummy</span> APK Free for Android
        </h1>
        <p className="text-gray-400 text-lg mb-2">V1.230 · 49 MB · Android 5.0+ · Updated June 8, 2026</p>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          The official Card Rummy APK for Android — Pakistan&apos;s most engaging card game combining Classic Rummy, 3 Patti Card Rummy, 7-card &amp; 10-card rummy modes, and 30+ live multiplayer games. Withdraw winnings instantly to JazzCash or EasyPaisa. Free to download.
        </p>

        <DownloadButton label="DOWNLOAD CARD RUMMY APK" />

        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm">
          {["⚡ Fast Download", "✅ 100% Free", "🔒 Safe & Official", "🤖 Android Only"].map(t => (
            <span key={t} className="bg-white/5 border border-gray-700 px-4 py-1 rounded-full text-gray-300">{t}</span>
          ))}
        </div>

        <div className="mt-4 bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-3 max-w-lg mx-auto text-xs text-yellow-300">
          ⚠️ 18+ only. Real-money play involves financial risk. Play responsibly.
        </div>
      </section>

      {/* What is Card Rummy Online */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-5">What is Card Rummy Online?</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Card Rummy online is a multiplayer card game that combines strategy and skill. Unlike casino-based card games, rummy requires careful planning, memory, and decision-making. The game allows you to play live matches with real players and win real cash, which you can withdraw directly to your JazzCash or EasyPaisa account.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          With rising demand across Pakistan, Card Rummy online has become one of the most downloaded card game apps in the country. The app supports multiple rummy game modes — including 13-card, 10-card, and 7-card rummy — as well as popular Pakistani favourites like Teen Patti, Andar Bahar, and Dragon vs Tiger.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          You can also download the <strong className="text-white">3 Patti Card Rummy APK</strong>, which combines elements of Teen Patti with traditional rummy for a more versatile gaming experience. This version is particularly popular among players looking for variety and faster gameplay all within one application.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          {[
            { mode: "Classic Rummy", cards: "13 cards" },
            { mode: "10-Card Rummy", cards: "10 cards" },
            { mode: "7-Card Rummy", cards: "7 cards" },
            { mode: "Teen Patti", cards: "3 cards" },
            { mode: "3 Patti Rummy", cards: "Hybrid" },
            { mode: "Dragon vs Tiger", cards: "1 card each" },
          ].map(({ mode, cards }) => (
            <div key={mode} className="bg-white/5 border border-gray-700 rounded-xl p-3 text-center">
              <p className="font-semibold text-white text-sm">{mode}</p>
              <p className="text-xs text-gray-400 mt-1">{cards}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Info Table */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-5 text-center">App Information</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-700 max-w-2xl mx-auto">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["App Name", "Card Rummy"],
                ["Developer", "ErioCardRummy Dev"],
                ["Latest Version", "V1.230"],
                ["File Size", "49 MB"],
                ["Required OS", "Android 5.0+"],
                ["Last Updated", "June 8, 2026"],
                ["Total Downloads", "500K+"],
                ["Rating", "4.8 / 5 ⭐ (200K+ reviews)"],
                ["Languages", "English, Urdu"],
                ["Price", "Free (PKR 0)"],
                ["Category", "Cards, Casino, Game"],
              ].map(([label, value], i) => (
                <tr key={label} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                  <td className="px-4 py-3 font-semibold text-gray-400 w-40">{label}</td>
                  <td className="px-4 py-3 text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* App screenshot */}
      <section className="py-6 px-4 max-w-5xl mx-auto text-center">
        <Image
          src="/card-rummy-game-pakistan.webp"
          alt="Card Rummy game interface – Teen Patti, Dragon vs Tiger, and 30+ games"
          width={800}
          height={450}
          className="rounded-2xl mx-auto shadow-lg w-full max-w-2xl"
          loading="lazy"
        />
        <p className="text-xs text-gray-500 mt-2">Card Rummy V1.230 – Game interface preview</p>
      </section>

      {/* How to Download */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-6 text-center">How to Download &amp; Install Card Rummy APK</h2>

        <div className="space-y-4 max-w-2xl mx-auto mb-8">
          {[
            { color: "border-accent", title: "Step 1 — Visit Official Site", desc: "Open your browser and go to cardrummy.pk. Tap the Download button on the homepage." },
            { color: "border-green-500", title: "Step 2 — Download the APK", desc: "The APK file (49 MB) will begin downloading. Keep your screen on and wait for it to finish." },
            { color: "border-blue-400", title: "Step 3 — Enable Unknown Apps", desc: "Go to Settings → Security → Install Unknown Apps and enable it for your browser or file manager. This is required for any APK not from Google Play." },
            { color: "border-orange-400", title: "Step 4 — Install the APK", desc: "Open your Downloads folder, tap the Card Rummy APK file, then tap Install. The installation takes under 30 seconds." },
            { color: "border-purple-400", title: "Step 5 — Open &amp; Register", desc: "Tap Open, create your account with your mobile number, verify via OTP, and claim your welcome bonus." },
          ].map(({ color, title, desc }) => (
            <div key={title} className={`bg-white/5 border-l-4 ${color} rounded-xl p-5`}>
              <h3 className="font-bold text-white mb-1" dangerouslySetInnerHTML={{ __html: title }} />
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <DownloadButton label="DOWNLOAD NOW — FREE" />
        </div>
      </section>

      {/* Games Image */}
      <section className="py-6 px-4 max-w-5xl mx-auto text-center">
        <Image
          src="/Games-in-card-rummy-app.webp"
          alt="30+ games in Card Rummy – Teen Patti, Rummy, Dragon vs Tiger, slots and more"
          width={800}
          height={450}
          className="rounded-2xl mx-auto shadow-lg w-full max-w-2xl"
          loading="lazy"
        />
      </section>

      {/* System Requirements */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-5 text-center">System Requirements</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-700 max-w-2xl mx-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent/10 border-b border-gray-700">
                <th className="px-4 py-3 text-left text-accent font-semibold">Component</th>
                <th className="px-4 py-3 text-left text-accent font-semibold">Minimum</th>
                <th className="px-4 py-3 text-left text-accent font-semibold">Recommended</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["OS", "Android 5.0", "Android 8.0+"],
                ["RAM", "2 GB", "4 GB+"],
                ["Storage", "500 MB free", "1 GB+ free"],
                ["Processor", "Quad-core 1.5 GHz", "Octa-core 2.0 GHz"],
                ["Internet", "Stable 3G", "4G / Wi-Fi"],
              ].map(([comp, min, rec], i) => (
                <tr key={comp} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                  <td className="px-4 py-3 font-semibold text-gray-400">{comp}</td>
                  <td className="px-4 py-3 text-gray-300">{min}</td>
                  <td className="px-4 py-3 text-green-400">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What's New */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-5">What&apos;s New in V1.230</h2>
        <ul className="space-y-2 text-sm text-gray-300 max-w-2xl list-none">
          {[
            "New card and slot games added to the library",
            "Smoother graphics and faster load times across all devices",
            "Improved JazzCash and EasyPaisa transaction speed",
            "Two-factor authentication option for stronger security",
            "Bug fixes and general stability improvements",
            "New VIP perks and seasonal bonus events",
          ].map(item => (
            <li key={item} className="flex gap-2">
              <span className="text-accent">🆕</span>{item}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Download */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-6 text-center">Why Download Card Rummy?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "💰", title: "Real Money Earning", desc: "Win real PKR playing Teen Patti, Rummy, and 30+ other games." },
            { icon: "🃏", title: "30+ Games", desc: "Multiplayer, skill-based, and slots all in one lightweight app." },
            { icon: "⚡", title: "Fast Withdrawals", desc: "JazzCash & EasyPaisa payouts in minutes, not days." },
            { icon: "🎁", title: "Daily Bonuses", desc: "Login daily for free chips, spins, and cashback rewards." },
            { icon: "🔒", title: "Safe & Secure", desc: "SSL encryption, RNG-certified fair play, anti-cheat system." },
            { icon: "📱", title: "Runs on Low-End Phones", desc: "Optimized for 2 GB RAM devices with no lag or crashes." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-gray-700 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="font-bold text-white mb-1">{title}</h3>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-5">Download Troubleshooting</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-700 max-w-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent/10 border-b border-gray-700">
                <th className="px-4 py-3 text-left text-accent font-semibold">Problem</th>
                <th className="px-4 py-3 text-left text-accent font-semibold">Solution</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["APK won't download", "Switch between Wi-Fi and mobile data. Free up 500 MB+ storage and retry."],
                ["\"Install blocked\" error", "Enable 'Install Unknown Apps' for your browser in phone Settings."],
                ["App won't open after install", "Restart your phone, then tap the Card Rummy icon again."],
                ["App crashes on launch", "Clear the app cache or reinstall the latest V1.230 APK."],
                ["Download very slow", "Move to a stronger Wi-Fi or 4G signal and retry."],
              ].map(([prob, sol], i) => (
                <tr key={prob} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                  <td className="px-4 py-3 text-red-300 font-semibold">{prob}</td>
                  <td className="px-4 py-3 text-gray-300">{sol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3 Patti Card Rummy Section */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-5">3 Patti Card Rummy Download</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          The 3 Patti Card Rummy download is ideal for players who enjoy both rummy and Teen Patti. This hybrid mode allows you to switch between two of the most popular card games in South Asia — offering more variety and excitement without needing multiple apps. You get classic rummy sequences combined with the fast-paced betting dynamics of Teen Patti.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          This version is particularly popular in Pakistan because it blends local card game culture with traditional rummy rules. The localized themes, familiar language options, and faster gameplay make 3 Patti Card Rummy one of the standout modes in the app.
        </p>
        <div className="bg-white/5 border border-gray-700 rounded-xl p-5 mb-6 max-w-2xl">
          <p className="font-bold text-accent mb-3">Card Rummy APK Free Download Features</p>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Seamless multiplayer gameplay with real-time opponents from across Pakistan",
              "High-quality graphics and intuitive controls — works on low-end phones",
              "Daily bonus chips and in-game rewards on every login",
              "Guest login or OTP mobile verification-based registration",
              "Compatible with Android 5.0+ including budget-range devices",
              "Offline practice mode for new players to learn without risk",
              "3 Patti Card Rummy mode: play both Teen Patti and Rummy in one app",
            ].map(f => (
              <li key={f} className="flex gap-2 items-start">
                <span className="text-accent mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-accent mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3 max-w-2xl">
          {[
            { q: "Is Card Rummy APK safe to download?", a: "Yes. Download only from the official website (cardrummy.pk) to ensure you get the genuine APK without malware." },
            { q: "Is Card Rummy free to download?", a: "Completely free. The APK is PKR 0. You deposit money only if you want to play real-cash games; practice mode costs nothing." },
            { q: "How do you play cards on rummy?", a: "In rummy, each player is dealt a set number of cards. The goal is to create valid sets or sequences from the cards in your hand. Players draw and discard cards in turns until one player forms the required hand and makes a valid declaration. The player who declares first with a valid hand wins the round." },
            { q: "What are the rules of 7 card rummy?", a: "In 7-card rummy, each player receives 7 cards. The goal is to form sets (3 or 4 cards of the same rank) and sequences (3 or more consecutive cards of the same suit). The first player to meld all their cards into valid combinations and discard their final card wins. It is faster than 13-card rummy and ideal for quick sessions." },
            { q: "What are the rules of 10 card rummy?", a: "10-card rummy deals 10 cards to each player. Similar to 13-card rummy, you must form sets and sequences. With fewer cards than the 13-card variant, games are shorter and require quicker decision-making. It is a popular choice for intermediate players who want a balance of strategy and pace." },
            { q: "Is gin rummy 7 or 10 cards?", a: "Gin Rummy is traditionally played with 10 cards per player. Each player draws and discards to form melds (sets and runs). The game ends when a player 'knocks' with a low enough unmatched card value or achieves 'gin' (all cards melded). Card Rummy's app offers a similar 10-card rummy mode." },
            { q: "What is the latest version?", a: "V1.230, updated June 8, 2026. Always download the latest version for best performance and security." },
            { q: "Why do I need to enable Unknown Apps?", a: "Because Card Rummy is not on Google Play, Android requires manual permission to install APK files from outside the Play Store." },
          ].map(({ q, a }) => (
            <details key={q} className="bg-white/5 border border-gray-700 rounded-xl p-4 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-gray-400 mt-3">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 px-4 max-w-5xl mx-auto text-center">
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-accent mb-3">Ready to Play?</h2>
          <p className="text-gray-300 mb-6">Download the latest Card Rummy APK V1.230 and claim your 100% welcome bonus today. (18+ only.)</p>
          <DownloadButton label="DOWNLOAD CARD RUMMY APK" />
          <p className="text-xs text-gray-500 mt-4">Version V1.230 · 49 MB · Free · Android 5.0+</p>
        </div>
        <div className="mt-6">
          <Link href="/" className="text-accent hover:underline text-sm">← Back to Home</Link>
        </div>
      </section>
    </article>
  );
}
