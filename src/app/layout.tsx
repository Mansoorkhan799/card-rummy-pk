import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cardrummy.pk'),
  title: {
    default: "Card Rummy APK Download 2026 – Win Real Cash in Pakistan",
    template: "%s | Card Rummy"
  },
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
    "card rummy online",
    "download card rummy",
    "card rummy real money",
    "how to play card rummy",
    "card rummy 2026",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan",
    "rummy card game",
    "play rummy online",
    "rummy game download"
  ],
  authors: [{ name: "Ahmed Gaming Team" }],
  creator: "Card Rummy",
  publisher: "Card Rummy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/card-rummy.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/card-rummy.webp', type: 'image/webp', sizes: '1024x1024' }
    ],
    apple: [
      { url: '/card-rummy.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://cardrummy.pk",
  },
  openGraph: {
    title: "Card Rummy APK Download 2026 – Win Real Cash in Pakistan",
    description: "Download Card Rummy APK for Android. Play 30+ card games, Teen Patti & Rummy, earn real cash with fast JazzCash & EasyPaisa withdrawals in Pakistan.",
    url: "https://cardrummy.pk",
    siteName: "Card Rummy",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "https://cardrummy.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Card Rummy - Pakistan's #1 Card Gaming Platform",
      },
      {
        url: "https://cardrummy.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Card Rummy - Pakistan's #1 Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Card Rummy APK Download 2026 – Win Real Cash in Pakistan",
    description: "Download Card Rummy APK for Android. Play 30+ card games, Teen Patti & Rummy, earn real cash with fast JazzCash & EasyPaisa withdrawals in Pakistan.",
    creator: "@cardrummy",
    images: [
      {
        url: "https://cardrummy.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Card Rummy - Pakistan's #1 Card Gaming Platform",
      }
    ],
  },
  applicationName: "Card Rummy",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/card-rummy.webp" type="image/webp" sizes="192x192" />
        <link rel="apple-touch-icon" href="/card-rummy.webp" sizes="180x180" />
        
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(10, 16, 41, 0.4) 0%, rgba(6, 9, 31, 0.01) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Card Rummy",
              "alternateName": "CarDrummy PK",
              "url": "https://cardrummy.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://cardrummy.pk/card-rummy.webp",
                "width": 512,
                "height": 512
              },
              "description": "Card Rummy is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and 30+ card games with real cash rewards via JazzCash & EasyPaisa.",
              "foundingYear": "2023",
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "knowsAbout": ["Teen Patti", "Rummy", "Card Games", "Online Gaming", "JazzCash", "EasyPaisa"],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "email": "support@cardrummy.pk",
                  "availableLanguage": ["English", "Urdu"],
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/share/1at8tjJcje/",
                "https://facebook.com/cardrummy",
                "https://twitter.com/cardrummy"
              ]
            })
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Card Rummy",
              "url": "https://cardrummy.pk",
              "description": "Download Card Rummy APK for Android. Play Teen Patti, Rummy, Dragon vs Tiger and 30+ games. Earn real cash via JazzCash & EasyPaisa in Pakistan.",
              "inLanguage": ["en", "ur"],
              "publisher": {
                "@type": "Organization",
                "name": "Card Rummy",
                "url": "https://cardrummy.pk"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://cardrummy.pk/blog?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "Card Rummy",
              "operatingSystem": "Android 5.0+",
              "applicationCategory": "GameApplication",
              "applicationSubCategory": "CardGame",
              "description": "Card Rummy is Pakistan's leading online card game platform. Play 30+ card games including Teen Patti, Classic Rummy, 3 Patti Card Rummy, Dragon vs Tiger and earn real cash via JazzCash & EasyPaisa.",
              "url": "https://cardrummy.pk",
              "downloadUrl": "https://pkcardrummy.com/?from_gameid=6191689&channelCode=6113272",
              "installUrl": "https://cardrummy.pk/download-card-rummy-apk",
              "softwareVersion": "V1.231",
              "fileSize": "49 MB",
              "datePublished": "2023-01-01",
              "dateModified": "2026-06-11",
              "inLanguage": ["en", "ur"],
              "countriesSupported": "PK",
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
                "reviewCount": "200000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Asif M." },
                  "reviewBody": "Best card game app in Pakistan. Withdrawals are fast and reliable via JazzCash."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Bilal R." },
                  "reviewBody": "Teen Patti and Rummy in one app, and I've already cashed out PKR 5,000. Totally real."
                },
                {
                  "@type": "Review",
                  "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
                  "author": { "@type": "Person", "name": "Sana B." },
                  "reviewBody": "Great bonuses and daily rewards. Smooth gameplay even on my budget Android phone."
                }
              ],
              "author": {
                "@type": "Organization",
                "name": "ErioCardRummy Dev"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
