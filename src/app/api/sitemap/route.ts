import { NextResponse } from 'next/server';
import { APP_LAST_UPDATED_ISO, APP_VERSION } from '@/lib/app-version';

export async function GET() {
  const baseUrl = 'https://cardrummy.pk';

  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{ loc: string; title: string; caption: string }>;
  };

  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: APP_LAST_UPDATED_ISO,
      changeFreq: 'weekly',
      priority: 1.0,
      images: [
        {
          loc: '/card-rummy.webp',
          title: 'Card Rummy App Icon',
          caption: "Card Rummy – Pakistan's #1 card game app. Play Teen Patti, Rummy, Dragon vs Tiger."
        },
        {
          loc: '/card-rummy-game-pakistan.webp',
          title: 'Card Rummy Game Interface Pakistan',
          caption: 'Card Rummy game interface showing Teen Patti and Dragon vs Tiger'
        },
        {
          loc: '/Games-in-card-rummy-app.webp',
          title: '30+ Games in Card Rummy App',
          caption: 'All 30+ games available in Card Rummy including Teen Patti, Rummy, and slots'
        },
        {
          loc: '/how-to-add-money-in-card-rummy.webp',
          title: 'How to Add Money in Card Rummy',
          caption: 'Step-by-step deposit guide via JazzCash and EasyPaisa'
        },
        {
          loc: '/how-to-withdraw-money-from-card-rummy.webp',
          title: 'How to Withdraw Money from Card Rummy',
          caption: 'Withdrawal guide for Card Rummy via JazzCash and EasyPaisa'
        },
        {
          loc: '/refer-and-earn-program-in-card-rummy.webp',
          title: 'Card Rummy Refer and Earn Program',
          caption: 'Earn referral commissions by inviting friends to Card Rummy'
        },
        {
          loc: '/recharge-rebate-explained-in-card-rummy.webp',
          title: 'Recharge Rebate Explained in Card Rummy',
          caption: 'Card Rummy recharge rebate bonus structure explained'
        },
        {
          loc: '/invite-friends-and-earn-1000-in-card-rummy.webp',
          title: 'Invite Friends and Earn 1000 in Card Rummy',
          caption: 'Invite friends to Card Rummy and earn up to PKR 1000 bonus'
        },
        {
          loc: '/how-to-bind-mail-in-card-rummy.webp',
          title: 'How to Bind Email in Card Rummy',
          caption: 'Secure your Card Rummy account by binding your email'
        },
      ]
    },
    {
      url: '/download-card-rummy-apk',
      lastMod: APP_LAST_UPDATED_ISO,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/card-rummy.webp',
          title: 'Download Card Rummy APK',
          caption: `Download Card Rummy APK ${APP_VERSION} free for Android`
        },
        {
          loc: '/card-rummy-game-pakistan.webp',
          title: 'Card Rummy Game Interface',
          caption: `Card Rummy ${APP_VERSION} game interface preview`
        }
      ]
    },
    {
      url: '/deposit-money-in-card-rummy',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.8,
      images: [
        {
          loc: '/blogimages/deposit-money-card-rummy-pakistan.webp',
          title: 'Deposit Money in Card Rummy Pakistan',
          caption: 'How to deposit money in Card Rummy via JazzCash and EasyPaisa in Pakistan'
        }
      ]
    },
    {
      url: '/withdraw-money-from-card-rummy',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.8,
      images: [
        {
          loc: '/blogimages/withdraw-money-card-rummy-pakistan.webp',
          title: 'Withdraw Money from Card Rummy Pakistan',
          caption: 'How to withdraw money from Card Rummy to JazzCash or EasyPaisa in Pakistan'
        }
      ]
    },
    {
      url: '/card-rummy-for-pc',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/card-rummy-game-pakistan.webp',
          title: 'Card Rummy for PC via Emulator',
          caption: 'Card Rummy running on PC via Android emulator'
        }
      ]
    },
    {
      url: '/about-us',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.5
    },
    {
      url: '/blog',
      lastMod: '2026-06-08',
      changeFreq: 'weekly',
      priority: 0.7
    },
    {
      url: '/contact-us',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.5
    },
    {
      url: '/privacy',
      lastMod: '2026-06-08',
      changeFreq: 'yearly',
      priority: 0.3
    },
    {
      url: '/disclaimer',
      lastMod: '2026-06-08',
      changeFreq: 'yearly',
      priority: 0.3
    }
  ];

  const blogPosts: PageType[] = [
    {
      url: '/blog/fix-ip-limit-exceeds',
      lastMod: '2026-07-07',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [{ loc: '/blogimages/create-card-rummy-account-and-login.webp', title: 'Fix Card Rummy IP Limit Exceeds', caption: 'How to fix IP limit exceeds error in Card Rummy' }]
    },
    {
      url: '/blog/is-card-rummy-real-or-fake',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [{ loc: '/blogimages/is-card-rummy-real-or-fake.webp', title: 'Is Card Rummy Real or Fake', caption: 'Truth about Card Rummy legitimacy and payment proofs' }]
    },
    {
      url: '/blog/create-card-rummy-account-and-login',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [{ loc: '/blogimages/create-card-rummy-account-and-login.webp', title: 'Create Card Rummy Account and Login', caption: 'How to create and log in to your Card Rummy account' }]
    },
    {
      url: '/blog/tips-to-win-big-in-card-rummy',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [{ loc: '/blogimages/tips-and-tricks-to-win-big-in-card-rummy.webp', title: 'Tips to Win Big in Card Rummy', caption: 'Expert tips and strategies to win more in Card Rummy' }]
    },
    {
      url: '/blog/how-to-use-card-rummy-app-pakistan-guide',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [{ loc: '/blogimages/use-card-rummy-app-pakistan.webp', title: 'How to Use Card Rummy App Pakistan', caption: 'Complete guide on how to use Card Rummy app in Pakistan 2026' }]
    },
    {
      url: '/blog/card-rummy-bonuses-vip-guide',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [{ loc: '/blogimages/card-rummy-all-bonuses-explained.webp', title: 'Card Rummy All Bonuses Explained', caption: 'Complete guide to Card Rummy bonuses, VIP rebate and referral program' }]
    },
    {
      url: '/blog/card-rummy-old-version-features-review',
      lastMod: '2026-06-08',
      changeFreq: 'monthly',
      priority: 0.7,
      images: [{ loc: '/blogimages/card-rummy-old-versions.webp', title: 'Card Rummy Old Versions Review', caption: 'Card Rummy old version features and review 2026' }]
    },
  ];

  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${page.images?.map(img => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('') || ''}
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
