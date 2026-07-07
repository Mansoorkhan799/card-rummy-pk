import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Card Rummy Blog – Guides, Tips, Reviews & Tutorials 2026',
  description: 'Card Rummy blog 2026: App reviews, deposit & withdrawal guides, tips & tricks, bonuses, account setup, and responsible gaming. Everything you need to know about Card Rummy Pakistan.',
  keywords: [
    'Card Rummy blog',
    'Card Rummy guide',
    'Card Rummy review',
    'Card Rummy tips',
    'Card Rummy tutorial',
    'Card Rummy bonuses',
    'Card Rummy safe',
    'Card Rummy Pakistan 2026'
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
    canonical: "https://cardrummy.pk/blog",
  },
  openGraph: {
    title: 'Card Rummy Blog – Guides, Tips, Reviews & Tutorials 2026',
    description: 'Card Rummy blog 2026: App reviews, deposit & withdrawal guides, tips & tricks, bonuses, account setup, and responsible gaming.',
    url: 'https://cardrummy.pk/blog',
    images: [{ url: 'https://cardrummy.pk/feature/og-image.webp', width: 1200, height: 630 }],
  },
};

const blogPosts = [
  {
    slug: "fix-ip-limit-exceeds",
    title: "Fix IP Limit Exceeds Error in Card Rummy",
    description: "Getting IP limit exceeds on Card Rummy? Step-by-step fixes for VPN issues, multiple accounts, device limits, and login errors.",
    image: "/blogimages/create-card-rummy-account-and-login.webp",
    imageAlt: "Fix Card Rummy IP limit exceeds error guide",
    date: "July 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "is-card-rummy-real-or-fake",
    title: "Is Card Rummy Real or Fake to Earn Money?",
    description: "Discover the truth about Card Rummy legitimacy, payment methods, and how to identify fake apps. Complete guide for 2026.",
    image: "/blogimages/is-card-rummy-real-or-fake.webp",
    imageAlt: "Is Card Rummy real or fake - truth revealed",
    date: "June 2026",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "create-card-rummy-account-and-login",
    title: "How to Create a Card Rummy Account and Login",
    description: "Step-by-step guide to create your Card Rummy account, verify it, and log in to start playing and earning real money.",
    image: "/blogimages/create-card-rummy-account-and-login.webp",
    imageAlt: "How to create Card Rummy account and login guide",
    date: "June 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "tips-to-win-big-in-card-rummy",
    title: "Tips to Win Big in Card Rummy – Expert Strategies 2026",
    description: "Discover expert strategies and tips to maximize your winnings in Teen Patti, Rummy, and other card games on Card Rummy.",
    image: "/blogimages/tips-and-tricks-to-win-big-in-card-rummy.webp",
    imageAlt: "Tips and tricks to win big in Card Rummy",
    date: "June 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "how-to-use-card-rummy-app-pakistan-guide",
    title: "How to Use Card Rummy App in Pakistan – Complete Beginner's Guide 2026",
    description: "Full beginner guide: Download, register, deposit, play, and withdraw. Everything a new Card Rummy player in Pakistan needs.",
    image: "/blogimages/use-card-rummy-app-pakistan.webp",
    imageAlt: "How to use Card Rummy app in Pakistan complete guide 2026",
    date: "June 2026",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "card-rummy-bonuses-vip-guide",
    title: "Card Rummy Bonuses Explained: Welcome Bonus, Rebate & VIP Rewards",
    description: "Complete bonuses guide: Welcome bonus, recharge rebate, VIP levels, referral commission and tips to maximize your rewards.",
    image: "/blogimages/card-rummy-all-bonuses-explained.webp",
    imageAlt: "Card Rummy all bonuses explained - welcome bonus, VIP rebate, referral",
    date: "June 2026",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "card-rummy-old-version-features-review",
    title: "Card Rummy Old Version: Features, Review & Details 2026",
    description: "Classic features, legacy games, UI comparison, and why some players prefer older versions. Complete features and details.",
    image: "/blogimages/card-rummy-old-versions.webp",
    imageAlt: "Card Rummy old version features review and details 2026",
    date: "June 2026",
    readTime: "9 min read",
    featured: false,
  },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Card Rummy Blog – Guides, Tips, Reviews & Tutorials 2026',
  description: 'Card Rummy blog 2026: App reviews, deposit & withdrawal guides, tips & tricks, bonuses, account setup, and responsible gaming.',
  url: 'https://cardrummy.pk/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Card Rummy',
    logo: { '@type': 'ImageObject', url: 'https://cardrummy.pk/card-rummy.webp' },
    url: 'https://cardrummy.pk',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Card Rummy Blog Articles',
  url: 'https://cardrummy.pk/blog',
  numberOfItems: 7,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Fix IP Limit Exceeds Error in Card Rummy', url: 'https://cardrummy.pk/blog/fix-ip-limit-exceeds', image: 'https://cardrummy.pk/blogimages/create-card-rummy-account-and-login.webp' },
    { '@type': 'ListItem', position: 2, name: 'Is Card Rummy Real or Fake to Earn Money?', url: 'https://cardrummy.pk/blog/is-card-rummy-real-or-fake', image: 'https://cardrummy.pk/blogimages/is-card-rummy-real-or-fake.webp' },
    { '@type': 'ListItem', position: 3, name: 'How to Create a Card Rummy Account and Login', url: 'https://cardrummy.pk/blog/create-card-rummy-account-and-login', image: 'https://cardrummy.pk/blogimages/create-card-rummy-account-and-login.webp' },
    { '@type': 'ListItem', position: 4, name: 'Tips to Win Big in Card Rummy – Expert Strategies 2026', url: 'https://cardrummy.pk/blog/tips-to-win-big-in-card-rummy', image: 'https://cardrummy.pk/blogimages/tips-and-tricks-to-win-big-in-card-rummy.webp' },
    { '@type': 'ListItem', position: 5, name: 'How to Use Card Rummy App in Pakistan – Complete Beginner\'s Guide 2026', url: 'https://cardrummy.pk/blog/how-to-use-card-rummy-app-pakistan-guide', image: 'https://cardrummy.pk/blogimages/use-card-rummy-app-pakistan.webp' },
    { '@type': 'ListItem', position: 6, name: 'Card Rummy Bonuses Explained: Welcome Bonus, Rebate & VIP Rewards', url: 'https://cardrummy.pk/blog/card-rummy-bonuses-vip-guide', image: 'https://cardrummy.pk/blogimages/card-rummy-all-bonuses-explained.webp' },
    { '@type': 'ListItem', position: 7, name: 'Card Rummy Old Version: Features, Review & Details 2026', url: 'https://cardrummy.pk/blog/card-rummy-old-version-features-review', image: 'https://cardrummy.pk/blogimages/card-rummy-old-versions.webp' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cardrummy.pk' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cardrummy.pk/blog' },
  ],
};

export default function Blog() {
  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-accent">Card Rummy Blog</h1>
      <p className="text-gray-400 mb-10 text-base">
        Latest guides, tips, and tutorials for Card Rummy Pakistan — updated June 2026.
      </p>

      {/* Featured post */}
      {featured && (
        <div className="mb-10">
          <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
            ⭐ FEATURED
          </div>
          <Link href={`/blog/${featured.slug}`} className="group block bg-white/5 border-2 border-accent rounded-2xl overflow-hidden hover:border-yellow-400 transition-all">
            <div className="md:flex">
              <div className="md:w-2/5 relative h-52 md:h-auto">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{featured.title}</h2>
                <p className="text-gray-400 mb-4 text-sm">{featured.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                  <span>📅 {featured.date}</span>
                  <span>·</span>
                  <span>⏱ {featured.readTime}</span>
                </div>
                <span className="text-accent font-semibold text-sm group-hover:underline">Read More →</span>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid of remaining posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white/5 border border-gray-700 hover:border-accent rounded-2xl overflow-hidden transition-all flex flex-col"
          >
            <div className="relative h-44">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h2>
              <p className="text-xs text-gray-400 mb-4 flex-1">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>📅 {post.date}</span>
                <span>⏱ {post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
