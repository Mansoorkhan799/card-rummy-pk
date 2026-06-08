import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'Card Rummy Bonuses Explained: Welcome Bonus, VIP Rebate & Referral 2026',
  description: 'Complete Card Rummy bonuses guide 2026. Welcome bonus, first deposit bonus, daily login rewards, VIP level rebates, referral commission, and tips to maximize every bonus.',
  keywords: ['Card Rummy bonuses', 'Card Rummy welcome bonus', 'Card Rummy VIP levels', 'Card Rummy referral commission', 'Card Rummy rebate Pakistan'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://cardrummy.pk/blog/card-rummy-bonuses-vip-guide' },
  openGraph: {
    title: 'Card Rummy Bonuses Explained: Welcome Bonus, VIP Rebate & Referral 2026',
    description: 'Every Card Rummy bonus explained — welcome, daily login, VIP rebate, referral commission, and how to maximize them.',
    url: 'https://cardrummy.pk/blog/card-rummy-bonuses-vip-guide',
    siteName: 'Card Rummy',
    locale: 'en_PK',
    type: 'article',
    images: [{ url: 'https://cardrummy.pk/blogimages/card-rummy-all-bonuses-explained.webp', width: 1200, height: 630, alt: 'Card Rummy all bonuses explained' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Card Rummy Bonuses: Welcome Bonus, VIP & Referral Guide',
    description: 'Complete Card Rummy bonuses guide for Pakistan players 2026.',
    images: ['https://cardrummy.pk/blogimages/card-rummy-all-bonuses-explained.webp'],
  },
};

export default function BonusesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Card Rummy Bonuses Explained: Welcome Bonus, VIP Rebate & Referral 2026',
    description: 'Complete guide to every Card Rummy bonus type — welcome bonus, daily login, VIP rebates, and referral commissions.',
    image: 'https://cardrummy.pk/blogimages/card-rummy-all-bonuses-explained.webp',
    author: { '@type': 'Organization', name: 'Card Rummy', url: 'https://cardrummy.pk' },
    publisher: { '@type': 'Organization', name: 'Card Rummy', logo: { '@type': 'ImageObject', url: 'https://cardrummy.pk/card-rummy.webp' } },
    datePublished: '2026-06-08',
    dateModified: '2026-06-08',
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://cardrummy.pk/blog/card-rummy-bonuses-vip-guide' },
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Can I withdraw my Card Rummy welcome bonus directly?', acceptedAnswer: { '@type': 'Answer', text: 'Welcome bonus funds typically have wagering requirements — you must play through the bonus a certain number of times before withdrawing. Check the in-app terms for the exact requirement.' } },
            { '@type': 'Question', name: 'How often is Card Rummy VIP rebate credited?', acceptedAnswer: { '@type': 'Answer', text: 'Rebates are usually calculated and credited weekly based on your net loss during that period.' } },
            { '@type': 'Question', name: 'How many people can I refer on Card Rummy?', acceptedAnswer: { '@type': 'Answer', text: 'There is no limit. The more active players you refer, the more commission you earn on every deposit they make.' } },
            { '@type': 'Question', name: 'Do Card Rummy bonuses expire?', acceptedAnswer: { '@type': 'Answer', text: 'Most bonuses have an expiry date — typically 7 days for welcome bonuses and daily bonuses reset every 24 hours. Always use your bonuses promptly.' } },
            { '@type': 'Question', name: 'What is the Card Rummy referral commission rate?', acceptedAnswer: { '@type': 'Answer', text: 'Card Rummy offers a percentage commission on every deposit made by players you refer. The exact rate is shown in the Invite section of the app and increases as your VIP level rises.' } },
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
            { '@type': 'ListItem', position: 3, name: 'Card Rummy Bonuses Guide', item: 'https://cardrummy.pk/blog/card-rummy-bonuses-vip-guide' },
          ],
        })
      }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Bonuses & VIP Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Card Rummy Bonuses Explained: <span className="text-accent">Welcome Bonus, VIP Rebate &amp; Referral</span> 2026
        </h1>
        <p className="text-gray-400 text-sm mb-6">Published June 8, 2026 · 7 min read</p>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src="/blogimages/card-rummy-all-bonuses-explained.webp"
            alt="Card Rummy all bonuses explained – welcome bonus, VIP rebate, referral commission"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          One of the biggest advantages of playing on Card Rummy is the generous bonus system. Beyond winning money in games, the platform rewards you with <strong className="text-white">multiple types of bonuses</strong> — from the moment you sign up to every day you log in, every friend you refer, and every level you reach as a VIP member. This guide explains every bonus type and tells you exactly how to claim and maximize each one.
        </p>

        {/* Welcome Bonus */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">1. Welcome Bonus (New Player Bonus)</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          When you register a new Card Rummy account, you are eligible for a <strong className="text-white">welcome bonus</strong>. This bonus is credited automatically to your wallet after completing registration and is designed to give new players a head start without requiring an initial deposit.
        </p>
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
          <p className="font-bold text-accent mb-2">Welcome Bonus Details:</p>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• Credited: Automatically after registration is complete</li>
            <li>• Can be used: In any game on the platform</li>
            <li>• Wagering: Check in-app terms for wagering requirements</li>
            <li>• Expiry: Must be used within 7 days of registration</li>
          </ul>
        </div>

        {/* First Deposit Bonus */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">2. First Deposit Bonus (Recharge Bonus)</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Your first deposit triggers a recharge bonus — the platform matches a percentage of your deposit up to a set limit. For example, if you deposit PKR 1,000 and the recharge bonus is 100%, you receive PKR 2,000 in your wallet. This is the most valuable single bonus for new players and significantly extends your playing time.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Subsequent recharges also earn recharge bonuses, though at slightly lower percentages. The percentage increases as your VIP level rises — a major incentive to become a regular player.
        </p>

        {/* Daily Login Bonus */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">3. Daily Login Bonus</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Simply opening the app and logging in every day earns you free chips or bonus credits. The daily login bonus follows a <strong className="text-white">streak system</strong> — the longer your consecutive login streak, the bigger the daily reward.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-700 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent/10 border-b border-gray-700">
                <th className="px-4 py-3 text-left text-accent font-semibold">Login Day</th>
                <th className="px-4 py-3 text-left text-accent font-semibold">Reward</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Day 1", "Basic chips / small bonus"],
                ["Day 3", "2× Day 1 reward"],
                ["Day 7", "Weekly streak mega bonus"],
                ["Day 14", "2-week streak reward"],
                ["Day 30", "Monthly loyalty bonus"],
              ].map(([day, reward], i) => (
                <tr key={day} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                  <td className="px-4 py-3 text-gray-300">{day}</td>
                  <td className="px-4 py-3 text-white">{reward}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* VIP System */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">4. VIP Levels &amp; Rebate System</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Card Rummy has a <strong className="text-white">tiered VIP system</strong>. As you deposit and play more, you earn VIP experience points (XP) that progress you through levels — from Bronze all the way to Platinum and Diamond. Each level unlocks higher rebate percentages, bigger withdrawal limits, and exclusive bonuses.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-700 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-accent/10 border-b border-gray-700">
                <th className="px-4 py-3 text-left text-accent font-semibold">VIP Level</th>
                <th className="px-4 py-3 text-left text-accent font-semibold">Rebate Rate</th>
                <th className="px-4 py-3 text-left text-accent font-semibold">Perks</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bronze", "0.5%", "Basic rebate on losses"],
                ["Silver", "1.0%", "Higher rebate, priority support"],
                ["Gold", "1.5%", "Exclusive tournaments, higher limits"],
                ["Platinum", "2.0%", "VIP tournaments, personal manager"],
                ["Diamond", "3.0%+", "Maximum rebate, all perks unlocked"],
              ].map(([level, rebate, perks], i) => (
                <tr key={level} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                  <td className="px-4 py-3 font-semibold text-yellow-400">{level}</td>
                  <td className="px-4 py-3 text-green-400">{rebate}</td>
                  <td className="px-4 py-3 text-gray-300">{perks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The rebate is calculated on your net losses within a week and credited to your wallet automatically. Even if you have a bad week, you get a percentage back — softening the blow and letting you keep playing.
        </p>

        {/* Referral Bonus */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">5. Referral Commission</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Card Rummy&apos;s referral program is one of the most lucrative passive income features on the platform. When you share your unique referral code and a friend uses it to register and deposit, <strong className="text-white">you earn a commission</strong> on their deposits — indefinitely for as long as they play.
        </p>
        <div className="space-y-3 mb-6">
          {[
            { step: "Share your code", desc: "Find your referral code in the Invite section of the app. Share it via WhatsApp, social media, or messaging apps." },
            { step: "Friend registers & deposits", desc: "Your friend uses your code during registration and makes their first deposit." },
            { step: "You earn commission", desc: "A percentage of every deposit your referred friend makes is credited to your account as commission — a permanent passive income stream." },
          ].map(({ step, desc }) => (
            <div key={step} className="bg-white/5 border border-gray-700 rounded-xl p-4">
              <p className="font-semibold text-accent mb-1">→ {step}</p>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        {/* Tips */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">How to Maximize All Your Bonuses</h2>
        <ul className="space-y-2 mb-8 text-gray-300 text-sm">
          {[
            "Log in every single day — even if you don't play — to maintain your daily streak.",
            "Make your first deposit as large as you're comfortable with to maximize the first deposit bonus.",
            "Always check the current promotion page for limited-time bonuses before depositing.",
            "Refer active players (people who will deposit regularly) for the highest referral income.",
            "Focus on reaching Gold VIP or higher to unlock meaningful rebate percentages.",
            "Use bonus balance for higher-risk games and real cash balance for conservative play.",
          ].map(tip => (
            <li key={tip} className="flex gap-2 items-start">
              <span className="text-accent mt-0.5">💡</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-accent mt-10 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-3 mb-10">
          {[
            { q: "Can I withdraw my welcome bonus directly?", a: "Welcome bonus funds typically have wagering requirements — you must play through the bonus a certain number of times before withdrawing. Check the in-app terms for the exact requirement." },
            { q: "How often is VIP rebate credited?", a: "Rebates are usually calculated and credited weekly based on your net loss during that period." },
            { q: "How many people can I refer?", a: "There is no limit. The more active players you refer, the more commission you earn." },
            { q: "Do bonuses expire?", a: "Most bonuses have an expiry date — typically 7 days for welcome bonuses and daily bonuses reset every 24 hours. Always use your bonuses promptly." },
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
          <h2 className="text-2xl font-bold text-white mb-3">Claim Your Bonuses Today</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy and start collecting your welcome bonus, daily rewards, and VIP perks. (18+ only.)</p>
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
