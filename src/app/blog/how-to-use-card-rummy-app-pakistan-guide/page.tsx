import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'How to Use Card Rummy App in Pakistan – Complete Beginner Guide 2026',
  description: "Complete beginner's guide to Card Rummy Pakistan 2026. Learn how to download, register, deposit via JazzCash/EasyPaisa, play games, and withdraw your winnings step by step.",
  keywords: ['how to use Card Rummy', 'Card Rummy beginner guide Pakistan', 'Card Rummy tutorial 2026', 'Card Rummy deposit withdraw guide', 'Card Rummy app guide'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://cardrummy.pk/blog/how-to-use-card-rummy-app-pakistan-guide' },
  openGraph: {
    title: 'How to Use Card Rummy App in Pakistan – Complete Beginner Guide 2026',
    description: 'Step-by-step guide: download, register, deposit, play, and withdraw on Card Rummy Pakistan.',
    url: 'https://cardrummy.pk/blog/how-to-use-card-rummy-app-pakistan-guide',
    siteName: 'Card Rummy',
    locale: 'en_PK',
    type: 'article',
    images: [{ url: 'https://cardrummy.pk/blogimages/use-card-rummy-app-pakistan.webp', width: 1200, height: 630, alt: 'How to use Card Rummy app in Pakistan 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Use Card Rummy App – Complete Pakistan Guide 2026',
    description: 'Complete beginner guide to download, register, deposit, play and withdraw on Card Rummy Pakistan.',
    images: ['https://cardrummy.pk/blogimages/use-card-rummy-app-pakistan.webp'],
  },
};

export default function HowToUsePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Use Card Rummy App in Pakistan – Complete Beginner Guide 2026',
    description: "Complete beginner's guide to Card Rummy Pakistan. Download, register, deposit, play, and withdraw.",
    image: 'https://cardrummy.pk/blogimages/use-card-rummy-app-pakistan.webp',
    author: { '@type': 'Organization', name: 'Card Rummy', url: 'https://cardrummy.pk' },
    publisher: { '@type': 'Organization', name: 'Card Rummy', logo: { '@type': 'ImageObject', url: 'https://cardrummy.pk/card-rummy.webp' } },
    datePublished: '2026-06-08',
    dateModified: '2026-06-08',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://cardrummy.pk/blog/how-to-use-card-rummy-app-pakistan-guide' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Does Card Rummy work on all Android phones?', acceptedAnswer: { '@type': 'Answer', text: 'Card Rummy works on any Android device running version 5.0 or higher with at least 2 GB RAM. It is optimised for low-end devices and runs smoothly on budget Android phones.' } },
            { '@type': 'Question', name: 'What is the minimum deposit to start playing Card Rummy?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum deposit is PKR 100 via JazzCash or EasyPaisa.' } },
            { '@type': 'Question', name: 'Can I play Card Rummy without depositing money?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Card Rummy has a practice mode where you can play all games using virtual chips without spending real money.' } },
            { '@type': 'Question', name: 'How long does a Card Rummy withdrawal take?', acceptedAnswer: { '@type': 'Answer', text: 'Most withdrawals are processed within 10–30 minutes. During peak hours it may take up to a few hours.' } },
            { '@type': 'Question', name: 'Is there a withdrawal fee on Card Rummy?', acceptedAnswer: { '@type': 'Answer', text: 'Card Rummy does not charge a fee for standard withdrawals to JazzCash or EasyPaisa.' } },
          ],
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cardrummy.pk' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cardrummy.pk/blog' },
            { '@type': 'ListItem', position: 3, name: 'How to Use Card Rummy Pakistan', item: 'https://cardrummy.pk/blog/how-to-use-card-rummy-app-pakistan-guide' },
          ],
        })
      }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">How to Use Card Rummy Pakistan</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How to Use <span className="text-accent">Card Rummy App</span> in Pakistan – Complete Beginner&apos;s Guide 2026
        </h1>
        <p className="text-gray-400 text-sm mb-6">Published June 8, 2026 · 8 min read</p>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src="/blogimages/use-card-rummy-app-pakistan.webp"
            alt="How to use Card Rummy app in Pakistan complete guide 2026"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          If you&apos;re new to Card Rummy and not sure where to begin, this guide is for you. We cover everything a beginner needs to know — from <strong className="text-white">downloading the app and creating an account</strong> to depositing money, choosing your first game, and safely withdrawing your winnings. By the end of this guide, you will know exactly how to use Card Rummy like a pro.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Step 1 – Download &amp; Install Card Rummy</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Card Rummy is not on Google Play Store, so you download it directly from the official website. Here is how:
        </p>
        <ol className="space-y-2 mb-6 text-gray-300 text-sm list-none">
          {[
            "Visit cardrummy.pk on your Android phone's browser.",
            "Tap the Download button — the APK (49 MB) will start downloading.",
            "Go to Settings → Security and enable 'Install from Unknown Sources' for your browser.",
            "Open your Downloads folder, tap the Card Rummy APK, and tap Install.",
            "Once installed, tap Open to launch the app.",
          ].map((step, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="bg-accent text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="flex justify-center my-6">
          <DownloadButton label="DOWNLOAD CARD RUMMY APK" />
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Step 2 – Create Your Account</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Open the app and tap <strong className="text-white">Register</strong>. Enter your Pakistani mobile number, receive an OTP, verify it, and set a password. Your account is created instantly. If a friend referred you, enter their referral code during registration to earn a bonus for both of you. Full guide: <Link href="/blog/create-card-rummy-account-and-login" className="text-accent hover:underline">How to Create a Card Rummy Account</Link>.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Step 3 – Understanding the App Interface</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          After logging in, you will see the main lobby. Here is what the key sections do:
        </p>
        <div className="space-y-3 mb-6">
          {[
            { section: "Home / Lobby", desc: "The main screen where all games are displayed. You can browse by category: Teen Patti, Rummy, Slots, Dragon vs Tiger, Mini Games." },
            { section: "Wallet", desc: "Shows your total balance broken down into Cash Balance, Bonus Balance, and Winnings. You deposit and withdraw from this section." },
            { section: "VIP / Profile", desc: "Shows your current VIP level, XP progress, rebate percentage, and account details." },
            { section: "Invite / Referral", desc: "Your personal referral link and code. Share this with friends to earn commission when they deposit." },
            { section: "Customer Support", desc: "In-app chat and email support available 24/7 for any account or payment issues." },
          ].map(({ section, desc }) => (
            <div key={section} className="bg-white/5 border border-gray-700 rounded-xl p-4">
              <p className="font-semibold text-accent mb-1">{section}</p>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Step 4 – Make Your First Deposit</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          To play real-money games, you need to deposit funds. Card Rummy supports two payment methods:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            { method: "JazzCash", min: "PKR 100", max: "PKR 25,000", time: "Instant" },
            { method: "EasyPaisa", min: "PKR 100", max: "PKR 25,000", time: "Instant" },
          ].map(({ method, min, max, time }) => (
            <div key={method} className="bg-white/5 border border-gray-700 rounded-xl p-4 text-center">
              <p className="font-bold text-accent text-lg mb-2">{method}</p>
              <p className="text-sm text-gray-400">Min: <span className="text-white">{min}</span></p>
              <p className="text-sm text-gray-400">Max: <span className="text-white">{max}</span></p>
              <p className="text-sm text-gray-400">Speed: <span className="text-green-400">{time}</span></p>
            </div>
          ))}
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Go to Wallet → Deposit, select JazzCash or EasyPaisa, enter the amount, confirm with your mobile payment PIN, and the funds appear in your balance within seconds. Full guide: <Link href="/deposit-money-in-card-rummy" className="text-accent hover:underline">How to Deposit Money in Card Rummy</Link>.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Step 5 – Choose and Play Your First Game</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          For beginners, we recommend starting with <strong className="text-white">Teen Patti Classic</strong> at the lowest stake table. This gives you a feel for real-money multiplayer play without risking too much. Here&apos;s a quick overview of the best games for beginners:
        </p>
        <div className="space-y-3 mb-6">
          {[
            { game: "Teen Patti Classic", difficulty: "Beginner", desc: "3-card draw game. Simple rules, fastest to learn." },
            { game: "Dragon vs Tiger", difficulty: "Beginner", desc: "Bet on Dragon or Tiger — the higher card wins. Pure simplicity." },
            { game: "Andar Bahar", difficulty: "Beginner", desc: "Predict which side the matching card lands on. 50/50 probability." },
            { game: "Classic Rummy (13 Card)", difficulty: "Intermediate", desc: "Form sequences and sets. Requires more strategy but better skill advantage." },
          ].map(({ game, difficulty, desc }) => (
            <div key={game} className="bg-white/5 border border-gray-700 rounded-xl p-4 flex gap-4 items-start">
              <div>
                <p className="font-semibold text-white">{game} <span className="text-xs text-accent ml-2 bg-accent/10 px-2 py-0.5 rounded-full">{difficulty}</span></p>
                <p className="text-sm text-gray-400 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 6 */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Step 6 – Withdraw Your Winnings</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Once you have won money, go to Wallet → Withdraw, enter the amount (minimum PKR 100), select JazzCash or EasyPaisa, confirm the payment, and the money is transferred to your mobile wallet. Processing typically takes a few minutes to a few hours depending on traffic. Full guide: <Link href="/withdraw-money-from-card-rummy" className="text-accent hover:underline">How to Withdraw Money from Card Rummy</Link>.
        </p>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-3 mb-10">
          {[
            { q: "Does Card Rummy work on all Android phones?", a: "Card Rummy works on any Android device running version 5.0 or higher with at least 2 GB RAM. It is optimized for low-end devices." },
            { q: "What is the minimum deposit to start playing?", a: "The minimum deposit is PKR 100 via JazzCash or EasyPaisa." },
            { q: "Can I play without depositing money?", a: "Yes. Card Rummy has a practice mode where you can play all games using virtual chips without spending real money." },
            { q: "How long does a withdrawal take?", a: "Most withdrawals are processed within 10–30 minutes. During peak hours, it may take up to a few hours." },
            { q: "Is there a withdrawal fee?", a: "Card Rummy does not charge a fee for standard withdrawals to JazzCash or EasyPaisa." },
          ].map(({ q, a }) => (
            <details key={q} className="bg-white/5 border border-gray-700 rounded-xl p-4 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}<span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-sm text-gray-400 mt-3">{a}</p>
            </details>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Start Your Card Rummy Journey Today</h2>
          <p className="text-gray-300 mb-6">Download the app, follow this guide, and claim your welcome bonus. (18+ only.)</p>
          <DownloadButton label="DOWNLOAD CARD RUMMY" />
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/blog" className="text-accent hover:underline">← All Blogs</Link>
          <Link href="/" className="text-accent hover:underline">← Home</Link>
        </div>
      </div>
    </article>
  );
}
