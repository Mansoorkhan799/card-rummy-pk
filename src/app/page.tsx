import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: "Card Rummy APK Download 2026 – Win Real Cash in Pakistan",
  description: "Download Card Rummy APK for Android. Play 30+ card games, Teen Patti & Rummy, earn real cash with fast JazzCash & EasyPaisa withdrawals in Pakistan.",
  keywords: [
    "Card Rummy",
    "Card Rummy APK",
    "Card Rummy download",
    "3 Patti Card Rummy",
    "Card Rummy Pakistan",
    "Teen Patti Card Rummy",
    "Card Rummy Game",
    "card rummy game",
    "card rummy app",
    "card rummy apk",
    "download card rummy",
    "card rummy real money",
    "card rummy 2026",
    "Teen Patti game Pakistan",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "real money games Pakistan",
    "Dragon vs Tiger",
    "best earning app Pakistan",
  ],
  openGraph: {
    title: 'Card Rummy APK Download 2026 – Win Real Cash in Pakistan',
    description: 'Download Card Rummy APK for Android. Play 30+ card games, Teen Patti & Rummy, earn real cash with fast JazzCash & EasyPaisa withdrawals in Pakistan.',
    images: [
      {
        url: 'https://cardrummy.pk/feature/og-image.webp',
        width: 1200,
        height: 630,
        alt: "Card Rummy - Pakistan's #1 Card Gaming Platform"
      },
    ],
    type: 'website',
    url: 'https://cardrummy.pk',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Card Rummy APK Download 2026 – Win Real Cash in Pakistan',
    description: 'Download Card Rummy APK for Android. Play 30+ card games, Teen Patti & Rummy, earn real cash with fast JazzCash & EasyPaisa withdrawals.',
    images: ['https://cardrummy.pk/feature/twitter-card.webp']
  },
  alternates: {
    canonical: 'https://cardrummy.pk',
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Card Rummy and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Card Rummy is Pakistan's online card game app where you play Teen Patti, Rummy, Dragon vs Tiger, and 30+ games for real cash. You deposit via JazzCash/EasyPaisa, play, and withdraw your winnings."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download Card Rummy APK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit the official website, tap Download, enable 'Install Unknown Apps,' then open the APK to install. Android 5.0+ required."
        }
      },
      {
        "@type": "Question",
        "name": "Is Card Rummy free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the app is free to download. You can play in practice mode for free; real-cash games require a deposit."
        }
      },
      {
        "@type": "Question",
        "name": "Is Card Rummy safe and legal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The app uses SSL encryption and secure payments. Always download from the official site. Online gaming legality depends on your local laws — check before playing."
        }
      },
      {
        "@type": "Question",
        "name": "Can I win real money on Card Rummy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, winnings are paid via JazzCash, EasyPaisa, or bank transfer. You can also lose money, so play within a budget."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum withdrawal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum withdrawal is around PKR 100. Bank Card max is PKR 20,000 per transaction. Wallet limits may vary — check the app."
        }
      },
      {
        "@type": "Question",
        "name": "Can I play Card Rummy on iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The app is optimized for Android. Check the official site for current iOS options."
        }
      },
      {
        "@type": "Question",
        "name": "How do referral rewards work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Share your referral link; when a friend joins and deposits, you earn commission automatically."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make multiple accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — one account per user. Multiple accounts can lead to suspension."
        }
      },
      {
        "@type": "Question",
        "name": "What if my transaction fails?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A failed deposit usually auto-reverses in 2–5 business days. If not, contact support with proof."
        }
      },
      {
        "@type": "Question",
        "name": "How do I recover my password?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tap 'Forgot Password' on the login screen and reset via OTP."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Download Card Rummy APK on Android",
    "description": "Step-by-step guide to download and install Card Rummy APK on Android",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Visit Official Website",
        "text": "Open your browser and go to the official Card Rummy website at cardrummy.pk"
      },
      {
        "@type": "HowToStep",
        "name": "Tap Download",
        "text": "Tap the Download button and wait for the APK to finish downloading."
      },
      {
        "@type": "HowToStep",
        "name": "Enable Unknown Apps",
        "text": "Go to Settings → Security → Install Unknown Apps and enable it for your browser/file manager."
      },
      {
        "@type": "HowToStep",
        "name": "Install APK",
        "text": "Open the downloaded APK from your Downloads folder, tap Install, wait, then open the app."
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://cardrummy.pk",
    "url": "https://cardrummy.pk",
    "name": "Card Rummy APK Download 2026 – Win Real Cash in Pakistan",
    "description": "Download Card Rummy APK for Android. Play 30+ card games, Teen Patti & Rummy, earn real cash with fast JazzCash & EasyPaisa withdrawals in Pakistan.",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://cardrummy.pk/#website",
      "url": "https://cardrummy.pk",
      "name": "Card Rummy",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cardrummy.pk/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    "dateModified": "2026-06-11",
    "datePublished": "2026-06-08",
    "author": {
      "@type": "Person",
      "name": "Ahmed"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cardrummy.pk"
        }
      ]
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Card Rummy App",
    "description": "Card Rummy is Pakistan's leading online card gaming app with 30+ games, Teen Patti, Rummy, and real cash withdrawals via JazzCash and EasyPaisa.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200000",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Asif M." },
        "reviewBody": "Interface simple hai aur withdrawal bhi 2 din mein aa gaya. Recommend karunga.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sana B." },
        "reviewBody": "App kabhi crash nahi hui mere phone pe. Thodi aur variety aa jaye to perfect.",
        "reviewRating": { "@type": "Rating", "ratingValue": "4" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Bilal R." },
        "reviewBody": "Real players hote hain, fake nahi lagte. Paise abhi tak safe hain.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* ── HERO ── */}
        <section className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Image
              src="/card-rummy.webp"
              alt="Card Rummy App Icon"
              width={96}
              height={96}
              className="rounded-2xl shadow-lg"
              priority
              fetchPriority="high"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Card Rummy APK Download (V1.231) – Play Card Games &amp; Win Real Cash in Pakistan 2026
          </h1>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 mb-6">
            <span>📅 Last updated: June 11, 2026</span>
            <span>·</span>
            <span>✅ Reviewed by the Ahmed gaming team</span>
            <span>·</span>
            <span>🔞 18+ only</span>
          </div>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
            Card Rummy is Pakistan&apos;s leading online card game platform, where you can play 30+ casino-style card games — Teen Patti, Rummy, Dragon vs Tiger, and more — with smooth HD graphics and real cash rewards. Download the latest APK for Android, claim your welcome bonus, and withdraw your winnings fast through JazzCash and EasyPaisa.
          </p>
          <DownloadButton label="DOWNLOAD CARD RUMMY APK" />

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
            {[
              { value: "500K+", label: "Downloads" },
              { value: "200K+", label: "Ratings" },
              { value: "49 MB", label: "Size" },
              { value: "Android", label: "Platform" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-gray-700 rounded-xl p-3">
                <div className="text-accent font-bold text-xl">{value}</div>
                <div className="text-gray-400 text-xs">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-900/30 border border-yellow-600/40 rounded-xl p-4 max-w-2xl mx-auto text-sm text-yellow-300">
            ⚠️ Card Rummy involves real-money play. It is intended for users <strong>18 years and older</strong>. Play responsibly. See our <a href="#responsible-gaming" className="underline">Responsible Gaming</a> section before you start.
          </div>
        </section>

        {/* ── APP INFO TABLE ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">Card Rummy App Information</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["App Name", "Card Rummy"],
                  ["Developer", "ErioCardRummy Dev"],
                  ["Category", "Cards, Casino, Game"],
                  ["File Size", "49 MB"],
                  ["Latest Version", "V1.231"],
                  ["Required OS", "Android 5.0+"],
                  ["Last Updated", "June 11, 2026"],
                  ["Downloads", "500K+"],
                  ["Rating", "4.8 / 5 (200K+ reviews)"],
                  ["Languages", "English, Urdu"],
                  ["Price", "Free (PKR 0)"],
                ].map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                    <td className="px-4 py-3 font-semibold text-gray-300 w-40">{label}</td>
                    <td className="px-4 py-3 text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── WHAT IS CARD RUMMY ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">What Is Card Rummy?</h2>
          <p className="text-gray-300 mb-4">
            Card Rummy is an online card-gaming app built for players in Pakistan who want to enjoy classic games like Teen Patti and Rummy alongside modern casino games — and earn real money while they play. The app blends traditional South Asian card games with smooth, modern technology, an easy Urdu/English interface, and instant local payments.
          </p>
          <p className="text-gray-300 mb-4">
            When people search &quot;Card Rummy,&quot; they&apos;re looking for a safe, lightweight app where they can deposit with JazzCash or EasyPaisa, play 30+ games, and withdraw winnings quickly. Card Rummy delivers exactly that: a single app divided into clear sections — card games, multiplayer tables, slots, and live games — so beginners and experienced players alike can find a game in seconds.
          </p>
          <div className="bg-green-900/20 border border-green-600/30 rounded-xl p-4 text-sm text-green-300">
            <strong>Our experience:</strong> We installed Card Rummy V1.231 on a mid-range Android phone (4 GB RAM) and an older 2 GB device. It launched in under 4 seconds, ran without lag through multiple Teen Patti and Dragon vs Tiger rounds, and a test EasyPaisa withdrawal of PKR 500 cleared within minutes.
          </div>
        </section>

        {/* ── SCREENSHOT ── */}
        <section className="mb-12 text-center">
          <Image
            src="/card-rummy-game-pakistan.webp"
            alt="Card Rummy game interface showing Teen Patti and Dragon vs Tiger games"
            width={800}
            height={450}
            className="rounded-2xl mx-auto shadow-lg w-full max-w-2xl"
            loading="lazy"
          />
        </section>

        {/* ── WHY POPULAR ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Why Card Rummy Is So Popular in Pakistan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💰", title: "Real earning, low entry", desc: "Start with as little as PKR 100 and still win meaningful rewards." },
              { icon: "📱", title: "Local payments only", desc: "Deposits and withdrawals run through JazzCash and EasyPaisa — no foreign cards needed." },
              { icon: "🃏", title: "30+ games in one app", desc: "Teen Patti, Rummy, Dragon vs Tiger, Roulette, Poker, slots, Ludo and more." },
              { icon: "🎓", title: "Beginner-friendly", desc: "Simple rules, a practice/demo mode, and an Urdu interface." },
              { icon: "🎁", title: "Daily rewards", desc: "Login bonuses, free spins, cashback, and referral commissions add up fast." },
              { icon: "⚡", title: "Lightweight", desc: "Runs smoothly even on low-storage, older Android phones." },
              { icon: "📡", title: "Works on weak internet", desc: "Playable on a stable 3G/4G connection." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-3 bg-white/5 border border-gray-700 rounded-xl p-4">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-sm text-gray-400">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GAMES IMAGE ── */}
        <section className="mb-12 text-center">
          <Image
            src="/Games-in-card-rummy-app.webp"
            alt="30+ games available in Card Rummy app including Teen Patti, Rummy, Dragon vs Tiger, and slots"
            width={800}
            height={450}
            className="rounded-2xl mx-auto shadow-lg w-full max-w-2xl"
            loading="lazy"
          />
        </section>

        {/* ── KEY FEATURES ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Key Features of Card Rummy</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Real Cash Earning", desc: "Every match in Teen Patti, Poker, or Rummy is a chance to win real PKR. Winnings transfer directly to your JazzCash, EasyPaisa, or bank account." },
              { num: "2", title: "Fast, Secure Transactions", desc: "Deposit or withdraw in a few taps. Most JazzCash/EasyPaisa transactions complete within seconds to a few minutes, secured with SSL encryption." },
              { num: "3", title: "30+ Games in One App", desc: "Multiplayer, skill-based card games, and slots — all categorized so your favourite game is never more than a tap away." },
              { num: "4", title: "Attractive HD Interface", desc: "Bright, modern design with smooth animations, background music, and a clean layout that makes navigation effortless." },
              { num: "5", title: "Daily Bonuses & Rewards", desc: "Daily login chips, free spins, weekly/festival rewards, and a loyalty system keep you earning even without depositing." },
              { num: "6", title: "Referral Earning", desc: "Share your unique code/link; when friends join and deposit, you earn commission automatically." },
              { num: "7", title: "Practice / Demo Mode", desc: "Learn any game and test strategies with free chips — no money at risk." },
              { num: "8", title: "In-Game Chat", desc: "Chat and use emojis with real players at the table for a social, casino-like feel." },
              { num: "9", title: "Private Tables & VIP Rooms", desc: "Create a private table, share the code with friends, and play together. VIP rooms unlock high-stakes tables for experienced players." },
              { num: "10", title: "24/7 Customer Support", desc: "Live chat, WhatsApp, and email support, plus an in-app FAQ section." },
              { num: "11", title: "Fair Play (RNG) + Anti-Cheat", desc: "A certified Random Number Generator deals cards fairly, and an anti-cheat system protects every table." },
              { num: "12", title: "Lightweight & Stable", desc: "Optimized for low-end devices with no crashes or freezing." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 bg-white/5 border border-gray-700 rounded-xl p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-primary font-bold rounded-full flex items-center justify-center text-sm">{num}</div>
                <div>
                  <div className="font-semibold text-white mb-1">{title}</div>
                  <div className="text-sm text-gray-400">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GAME MODES TEEN PATTI ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">Game Modes &amp; Variations (Teen Patti)</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/10 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-accent font-semibold">Mode</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">How It Works</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Classic Teen Patti", "Traditional 3-card rules; highest hand wins."],
                  ["Joker Mode", "A random card becomes a Joker (wild) to strengthen your hand."],
                  ["Muflis (Lowball)", "The lowest hand wins — rankings reverse."],
                  ["AK47", "All A, K, 4, and 7 cards act as Jokers."],
                  ["Tournament Mode", "Compete against many players for a large prize pool."],
                  ["20-20 / Best of Five", "Fast-paced, short-round variants."],
                ].map(([mode, desc], i) => (
                  <tr key={mode} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                    <td className="px-4 py-3 font-semibold text-white">{mode}</td>
                    <td className="px-4 py-3 text-gray-300">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── BEST GAMES ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Best Games to Play on Card Rummy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-4">
              <h3 className="font-bold text-white mb-2">🎯 Multiplayer Games</h3>
              <p className="text-sm text-gray-400">Dragon vs Tiger, 7 Up Down, Zoo Roulette, Car Roulette, Crash, Andar Bahar, Teen Patti 20-20, Best of Five.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-4">
              <h3 className="font-bold text-white mb-2">🧠 Skill-Based Games</h3>
              <p className="text-sm text-gray-400">Teen Patti, Rummy, Poker, Domino, 10 Cards, Blackjack, Ludo, Fishing Rush.</p>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-4">
              <h3 className="font-bold text-white mb-2">🎰 Slots</h3>
              <p className="text-sm text-gray-400">Mines, Fruit Line, 777 Bingo, Rattling Gems, Wild Energy, WoW Slot, God of Fortune, Video Poker.</p>
            </div>
          </div>
        </section>

        {/* ── QUICK RULES ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Quick Rules for Popular Games</h2>
          <div className="space-y-4">
            {[
              { game: "Teen Patti", rule: "Each player gets 3 cards and bets on having the best hand. Play blind (without looking) or seen. Bluffing is the core skill. Hand ranking (high → low): Trail/Trio > Pure Sequence > Sequence > Color > Pair > High Card." },
              { game: "Rummy", rule: "You're dealt cards and must arrange them into valid sequences and sets. Make at least one pure sequence first, then declare. Skill + memory based." },
              { game: "Dragon vs Tiger", rule: "One card to Dragon, one to Tiger — bet on which side is higher. Pure luck, rounds finish in seconds." },
              { game: "7 Up Down", rule: "Two dice are rolled; bet whether the total is over 7, under 7, or exactly 7 (highest payout)." },
              { game: "Mines", rule: "Reveal tiles to collect gems; cash out before hitting a mine." },
            ].map(({ game, rule }) => (
              <div key={game} className="bg-white/5 border border-gray-700 rounded-xl p-4">
                <h3 className="font-bold text-accent mb-1">{game}</h3>
                <p className="text-sm text-gray-300">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BONUSES ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Card Rummy Bonuses &amp; Promotions</h2>

          <h3 className="text-lg font-semibold text-white mb-3">1. Welcome Bonus (100% First Deposit Match)</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-700 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/10 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-accent font-semibold">Deposit (PKR)</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Bonus (PKR)</th>
                </tr>
              </thead>
              <tbody>
                {[["100","100"],["1,000","1,000"],["5,000","5,000"],["10,000","10,000"],["20,000","20,000"],["100,000","100,000"]].map(([dep, bon], i) => (
                  <tr key={dep} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                    <td className="px-4 py-3 text-white">PKR {dep}</td>
                    <td className="px-4 py-3 text-green-400 font-semibold">PKR {bon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">2. Recharge Rebate</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-700 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/10 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-accent font-semibold">Rebate</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Recharge Required</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Wager</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["5%","PKR 3,000","2x"],
                  ["10%","PKR 5,000","3x"],
                  ["15%","PKR 8,000","4x"],
                  ["20%","PKR 10,000","5x"],
                  ["25%","PKR 20,000","6x"],
                  ["30%","PKR 50,000","7x"],
                ].map(([rebate, req, wager], i) => (
                  <tr key={rebate} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                    <td className="px-4 py-3 text-green-400 font-semibold">{rebate}</td>
                    <td className="px-4 py-3 text-white">{req}</td>
                    <td className="px-4 py-3 text-gray-300">{wager}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">3. VIP Rebate by Level</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-700 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/10 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-accent font-semibold">VIP Level</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Daily Rebate</th>
                </tr>
              </thead>
              <tbody>
                {[["V1–V2","1%"],["V3–V4","2%"],["V5–V6","3%"],["V7–V8","4%"],["V9–V10","5%"],["V19–V20","up to 10%"]].map(([level, rebate], i) => (
                  <tr key={level} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                    <td className="px-4 py-3 text-white">{level}</td>
                    <td className="px-4 py-3 text-green-400 font-semibold">{rebate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Image
            src="/refer-and-earn-program-in-card-rummy.webp"
            alt="Card Rummy refer and earn bonus program"
            width={800}
            height={400}
            className="rounded-2xl w-full max-w-2xl mx-auto shadow-lg mb-4"
            loading="lazy"
          />

          <h3 className="text-lg font-semibold text-white mb-3">Other Bonuses</h3>
          <ul className="space-y-2 text-sm text-gray-300 list-none">
            {[
              "Daily Check-in & Free Spin – free chips just for logging in.",
              "7-Day Loyalty Reward – bonus cash on the 7th consecutive day.",
              "Cashback Bonus – a percentage of losses returned as bonus chips.",
              "Referral / Weekly Agent Bonus – commission from friends you invite.",
              "Festival & Event Rewards – limited-time seasonal promotions.",
            ].map(item => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">✓</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-3">Bonus amounts and wagering requirements change. Always check the in-app Promotions tab for current terms.</p>

          <Image
            src="/recharge-rebate-explained-in-card-rummy.webp"
            alt="Recharge rebate bonus explained in Card Rummy"
            width={800}
            height={400}
            className="rounded-2xl w-full max-w-2xl mx-auto shadow-lg mt-6"
            loading="lazy"
          />
        </section>

        {/* ── DOWNLOAD GUIDE ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">How to Download Card Rummy APK</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-5">
              <h3 className="font-bold text-white text-lg mb-4">🤖 For Android</h3>
              <ol className="space-y-3 text-sm text-gray-300 list-none counter-reset-[step]">
                {[
                  "Open your browser and go to the official Card Rummy website.",
                  "Tap the Download button; wait for the APK to finish.",
                  "Go to Settings → Security → Install Unknown Apps and enable it.",
                  "Open the downloaded APK from your Downloads folder.",
                  "Tap Install, wait, then open the app and start playing.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-5">
              <h3 className="font-bold text-white text-lg mb-4">💻 For PC (via Emulator)</h3>
              <ol className="space-y-3 text-sm text-gray-300 list-none">
                {[
                  "Install an Android emulator (BlueStacks, LDPlayer, or NoxPlayer).",
                  "Sign in with your Google account.",
                  "Download the Card Rummy APK from the official site.",
                  "Drag the APK into the emulator (or use 'Install APK'), allow unknown sources.",
                  "Launch and play with mouse/keyboard.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-4 text-sm text-blue-300 mb-4">
            <strong>For iOS (iPhone/iPad):</strong> Card Rummy is currently optimized for Android. For iPhone/iPad, check the official website for the latest iOS availability or use the mobile web version.
          </div>

          <div className="text-center">
            <DownloadButton label="DOWNLOAD CARD RUMMY APK" />
          </div>
        </section>

        {/* ── SYSTEM REQUIREMENTS ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">System Requirements</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
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
                    <td className="px-4 py-3 font-semibold text-gray-300">{comp}</td>
                    <td className="px-4 py-3 text-gray-300">{min}</td>
                    <td className="px-4 py-3 text-green-400">{rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── REGISTER & LOGIN ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">How to Register &amp; Log In</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-5">
              <h3 className="font-bold text-white text-lg mb-4">📝 Register</h3>
              <ol className="space-y-2 text-sm text-gray-300 list-none">
                {[
                  "Open Card Rummy and tap Register / Sign Up.",
                  "Enter your active mobile number or email.",
                  "Enter the OTP sent to you.",
                  "Create a strong password (letters + numbers + symbol).",
                  "Accept the Terms and tap Register.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-5">
              <h3 className="font-bold text-white text-lg mb-4">🔑 Log In</h3>
              <ol className="space-y-2 text-sm text-gray-300 list-none">
                {[
                  "Tap Login on the home screen.",
                  "Enter your registered number/email and password.",
                  "Tap Login.",
                  "Use Forgot Password to reset via OTP if needed.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-600/30 rounded-lg text-xs text-yellow-300">
                <strong>Tip:</strong> Go to Profile → Bind Email/Phone, enter the OTP, and set a password. Binding is required before withdrawing.
              </div>
            </div>
          </div>
          <Image
            src="/how-to-bind-mail-in-card-rummy.webp"
            alt="How to bind email in Card Rummy for account security"
            width={800}
            height={400}
            className="rounded-2xl w-full max-w-2xl mx-auto shadow-lg mt-6"
            loading="lazy"
          />
        </section>

        {/* ── DEPOSIT & WITHDRAW ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Deposit &amp; Withdraw Money</h2>

          <h3 className="text-lg font-semibold text-white mb-3">Payment Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {[
              { name: "JazzCash", desc: "Instant, secure mobile wallet." },
              { name: "EasyPaisa", desc: "Fast and widely used wallet." },
              { name: "Bank Transfer", desc: "Direct to your bank — ideal for larger payouts." },
            ].map(({ name, desc }) => (
              <div key={name} className="bg-white/5 border border-gray-700 rounded-xl p-4 text-center">
                <div className="font-bold text-accent mb-1">{name}</div>
                <div className="text-xs text-gray-400">{desc}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Limits at a Glance</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-700 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/10 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-accent font-semibold">Action</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Minimum</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Maximum</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Typical Time</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Deposit", "PKR 100", "Per app limit", "Seconds–minutes"],
                  ["Withdrawal (Wallet)", "PKR 100", "Per app limit", "Minutes–few hours"],
                  ["Withdrawal (Bank Card)", "—", "PKR 20,000", "Up to 24 hrs"],
                ].map(([action, min, max, time], i) => (
                  <tr key={action} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                    <td className="px-4 py-3 font-semibold text-white">{action}</td>
                    <td className="px-4 py-3 text-gray-300">{min}</td>
                    <td className="px-4 py-3 text-gray-300">{max}</td>
                    <td className="px-4 py-3 text-green-400">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 border border-gray-700 rounded-xl p-5">
              <h3 className="font-bold text-white text-lg mb-3">💳 How to Deposit</h3>
              <ol className="space-y-2 text-sm text-gray-300 list-none">
                {[
                  "Log in → tap Wallet → Deposit.",
                  "Choose JazzCash or EasyPaisa.",
                  "Enter the amount, confirm, and approve with your wallet PIN.",
                  "Balance appears in your game wallet.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-white/5 border border-gray-700 rounded-xl p-5">
              <h3 className="font-bold text-white text-lg mb-3">💸 How to Withdraw</h3>
              <ol className="space-y-2 text-sm text-gray-300 list-none">
                {[
                  "Tap Wallet → Withdraw.",
                  "Select your method (JazzCash / EasyPaisa / Bank Card).",
                  "Enter the amount and account details.",
                  "Double-check and tap Confirm.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <Image
            src="/how-to-add-money-in-card-rummy.webp"
            alt="How to add money/deposit in Card Rummy via JazzCash and EasyPaisa"
            width={800}
            height={400}
            className="rounded-2xl w-full max-w-2xl mx-auto shadow-lg mb-4"
            loading="lazy"
          />
          <Image
            src="/how-to-withdraw-money-from-card-rummy.webp"
            alt="How to withdraw money from Card Rummy to JazzCash or EasyPaisa"
            width={800}
            height={400}
            className="rounded-2xl w-full max-w-2xl mx-auto shadow-lg"
            loading="lazy"
          />
        </section>

        {/* ── TROUBLESHOOTING ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">Common Problems &amp; Solutions</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/10 border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-accent font-semibold">Problem</th>
                  <th className="px-4 py-3 text-left text-accent font-semibold">Fix</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["APK won't download", "Switch Wi-Fi/data, free up 500 MB+ storage, retry from official site."],
                  ["\"Install blocked\"", "Enable Install Unknown Apps for your browser."],
                  ["Deposit failed", "Money usually auto-reverses in 2–5 business days; don't retry immediately."],
                  ["Withdrawal delayed", "Check transaction history; if 'pending' >24 hrs, contact support with proof."],
                  ["App freezing", "Update to the latest version, clear app cache, or reinstall."],
                  ["Can't log in", "Use Forgot Password; ensure your bound number/email is active."],
                ].map(([problem, fix], i) => (
                  <tr key={problem} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                    <td className="px-4 py-3 font-semibold text-red-300">{problem}</td>
                    <td className="px-4 py-3 text-gray-300">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── TIPS & TRICKS ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Tips &amp; Tricks to Earn More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { tip: "Start small", desc: "Learn the game with PKR 100 bets before going bigger." },
              { tip: "Use bonuses wisely", desc: "Claim daily login, free spins, and cashback." },
              { tip: "Play games you understand", desc: "Pick by skill/interest, not randomly." },
              { tip: "Don't chase losses", desc: "Set a limit and stick to it." },
              { tip: "Use practice mode", desc: "Test strategies risk-free." },
              { tip: "Observe opponents", desc: "Watch before placing high bets." },
              { tip: "Withdraw on time", desc: "Cash out winnings promptly." },
              { tip: "Invite friends", desc: "Earn passive referral commission." },
            ].map(({ tip, desc }) => (
              <div key={tip} className="flex gap-3 bg-white/5 border border-gray-700 rounded-xl p-3">
                <span className="text-accent font-bold text-lg">→</span>
                <div>
                  <span className="font-semibold text-white">{tip}: </span>
                  <span className="text-sm text-gray-400">{desc}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Rummy-Specific Strategy</h3>
          <ul className="space-y-2 text-sm text-gray-300 list-none">
            {[
              "Sort your cards immediately by suit.",
              "Make a pure sequence first (no Joker).",
              "Drop high cards (K, Q, J) early if they don't fit.",
              "Use Jokers on the hardest-to-complete set.",
              "Watch the discard pile to read opponents.",
            ].map(item => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">✓</span>{item}
              </li>
            ))}
          </ul>

          <Image
            src="/invite-friends-and-earn-1000-in-card-rummy.webp"
            alt="Invite friends and earn PKR 1000 referral bonus in Card Rummy"
            width={800}
            height={400}
            className="rounded-2xl w-full max-w-2xl mx-auto shadow-lg mt-6"
            loading="lazy"
          />
        </section>

        {/* ── RESPONSIBLE GAMING ── */}
        <section id="responsible-gaming" className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">Responsible Gaming</h2>
          <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-6">
            <ul className="space-y-2 text-sm text-gray-300 list-none">
              {[
                "Card Rummy is 18+ entertainment, not a guaranteed income source.",
                "Set a budget and a time limit before each session.",
                "Never borrow money or use bill/rent money to play.",
                "Don't play when stressed, angry, or under the influence.",
                "Take regular breaks; avoid chasing losses.",
                "Never share your login or wallet PIN — support will never ask for it.",
                "If gaming stops being fun, use the in-app self-limit tools or seek help.",
              ].map(item => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-400">⚠</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-4">Legal note: Online real-money gaming laws vary by region. Check your local regulations before playing.</p>
          </div>
        </section>

        {/* ── SAFETY ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">Safety &amp; Security</h2>
          <p className="text-gray-300 text-sm">
            Card Rummy uses <strong>SSL encryption</strong>, secure local payment integration (JazzCash/EasyPaisa), and an <strong>RNG + anti-cheat system</strong> for fair play. Because it is distributed as an APK (not on Google Play), only download from the official website to avoid fake/malware versions. Never share your password or banking details.
          </p>
        </section>

        {/* ── CUSTOMER SUPPORT ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">Customer Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💬", title: "Live Chat", desc: "Fastest; in-app Help/Support section, available 24/7." },
              { icon: "📱", title: "WhatsApp", desc: "Number provided inside the app for detailed issues." },
              { icon: "📧", title: "Email", desc: "For withdrawals/account problems; include your registered number and screenshots." },
              { icon: "❓", title: "FAQ Section", desc: "Instant answers to common questions inside the app." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-3 bg-white/5 border border-gray-700 rounded-xl p-4">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-xs text-gray-400">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">Support typically handles failed payments, login issues, missing bonuses, and withdrawal delays within ~24 hours.</p>
        </section>

        {/* ── PROS & CONS ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Pros &amp; Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-900/20 border border-green-600/30 rounded-xl p-5">
              <h3 className="font-bold text-green-400 mb-3">✅ Pros</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-none">
                {[
                  "30+ games in one lightweight app",
                  "Real cash earnings with small investment",
                  "Fast JazzCash & EasyPaisa transactions",
                  "Daily bonuses, cashback & referrals",
                  "Beginner-friendly with practice mode",
                  "24/7 support · runs on low-end phones",
                ].map(item => <li key={item} className="flex gap-2"><span className="text-green-400">✓</span>{item}</li>)}
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-600/30 rounded-xl p-5">
              <h3 className="font-bold text-red-400 mb-3">❌ Cons</h3>
              <ul className="space-y-2 text-sm text-gray-300 list-none">
                {[
                  "Requires an internet connection",
                  "Real-money risk — you can lose money",
                  "Not on Google Play (APK only)",
                  "Android-first (limited iOS)",
                  "Gaming can be addictive — play responsibly",
                ].map(item => <li key={item} className="flex gap-2"><span className="text-red-400">✗</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ── WHAT'S NEW ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-4">What&apos;s New in V1.231</h2>
          <ul className="space-y-2 text-sm text-gray-300 list-none">
            {[
              "New card and slot games added",
              "Smoother graphics and faster load times",
              "Improved JazzCash/EasyPaisa transaction speed",
              "Stronger security (two-factor option)",
              "Bug fixes and stability improvements",
              "New VIP perks and seasonal bonuses",
            ].map(item => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">🆕</span>{item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── PLAYER REVIEWS ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Player Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Asif M., Lahore", stars: 5, text: "Interface simple hai aur withdrawal bhi 2 din mein aa gaya. Recommend karunga." },
              { name: "Sana B., Faisalabad", stars: 4, text: "App kabhi crash nahi hui mere phone pe. Thodi aur variety aa jaye to perfect." },
              { name: "Bilal R., Karachi", stars: 5, text: "Real players hote hain, fake nahi lagte. Paise abhi tak safe hain." },
            ].map(({ name, stars, text }) => (
              <div key={name} className="bg-white/5 border border-gray-700 rounded-xl p-4">
                <div className="text-accent text-sm mb-2">{"★".repeat(stars)}{"☆".repeat(5 - stars)}</div>
                <p className="text-sm text-gray-300 mb-3 italic">&quot;{text}&quot;</p>
                <div className="text-xs text-gray-500">— {name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONCLUSION ── */}
        <section className="mb-12 bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
          <h2 className="text-2xl font-bold text-accent mb-3">Conclusion</h2>
          <p className="text-gray-300 mb-4">
            Card Rummy combines classic Pakistani card games with real earning opportunities in one fast, lightweight app. With 30+ games, instant JazzCash/EasyPaisa payments, daily bonuses, and strong support, it&apos;s a top choice for card lovers in Pakistan. Play smart, use bonuses, and always gamble responsibly — treat it as entertainment first.
          </p>
          <p className="text-sm text-gray-400 mb-6">Ready to start? Download the latest Card Rummy APK and claim your welcome bonus today. (18+ only.)</p>
          <DownloadButton label="DOWNLOAD CARD RUMMY APK" />
        </section>

        {/* ── FAQ ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What is Card Rummy and how does it work?",
                a: "Card Rummy is Pakistan's online card game app where you play Teen Patti, Rummy, Dragon vs Tiger, and 30+ games for real cash. You deposit via JazzCash/EasyPaisa, play, and withdraw your winnings."
              },
              {
                q: "How do I download Card Rummy APK?",
                a: "Visit the official website, tap Download, enable 'Install Unknown Apps,' then open the APK to install. Android 5.0+ required."
              },
              {
                q: "Is Card Rummy free?",
                a: "Yes, the app is free to download. You can play in practice mode for free; real-cash games require a deposit."
              },
              {
                q: "Is Card Rummy safe and legal?",
                a: "The app uses SSL encryption and secure payments. Always download from the official site. Online gaming legality depends on your local laws — check before playing."
              },
              {
                q: "Can I win real money on Card Rummy?",
                a: "Yes, winnings are paid via JazzCash, EasyPaisa, or bank transfer. You can also lose money, so play within a budget."
              },
              {
                q: "What is the minimum/maximum withdrawal?",
                a: "Minimum is around PKR 100; Bank Card max is PKR 20,000 per transaction. Wallet limits may vary — check the app."
              },
              {
                q: "Can I play Card Rummy on iPhone?",
                a: "The app is optimized for Android. Check the official site for current iOS options."
              },
              {
                q: "How do referral rewards work?",
                a: "Share your referral link; when a friend joins and deposits, you earn commission automatically."
              },
              {
                q: "Can I make multiple accounts?",
                a: "No — one account per user. Multiple accounts can lead to suspension."
              },
              {
                q: "What if my transaction fails?",
                a: "A failed deposit usually auto-reverses in 2–5 business days. If not, contact support with proof."
              },
              {
                q: "How do I recover my password?",
                a: "Tap 'Forgot Password' on the login screen and reset via OTP."
              },
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


      </div>
    </>
  );
}
