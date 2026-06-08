import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'How to Create a Card Rummy Account and Login – Step-by-Step 2026',
  description: 'Step-by-step guide to create your Card Rummy account in 2026. Learn how to register, verify your number, login, and claim your welcome bonus on Card Rummy Pakistan.',
  keywords: ['create Card Rummy account', 'Card Rummy registration', 'Card Rummy login', 'Card Rummy sign up Pakistan', 'Card Rummy OTP verification'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: 'https://cardrummy.pk/blog/create-card-rummy-account-and-login' },
  openGraph: {
    title: 'How to Create a Card Rummy Account and Login – Step-by-Step 2026',
    description: 'Create your Card Rummy account in minutes. Step-by-step registration, OTP verification, and first login guide for Pakistan players.',
    url: 'https://cardrummy.pk/blog/create-card-rummy-account-and-login',
    siteName: 'Card Rummy',
    locale: 'en_PK',
    type: 'article',
    images: [{ url: 'https://cardrummy.pk/blogimages/create-card-rummy-account-and-login.webp', width: 1200, height: 630, alt: 'How to create Card Rummy account and login' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Create a Card Rummy Account and Login',
    description: 'Step-by-step Card Rummy registration and login guide for Pakistan 2026.',
    images: ['https://cardrummy.pk/blogimages/create-card-rummy-account-and-login.webp'],
  },
};

export default function CreateAccountPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Create a Card Rummy Account and Login',
    description: 'Step-by-step guide to create a Card Rummy account, verify your mobile number, and login to start playing.',
    image: 'https://cardrummy.pk/blogimages/create-card-rummy-account-and-login.webp',
    author: { '@type': 'Organization', name: 'Card Rummy', url: 'https://cardrummy.pk' },
    publisher: { '@type': 'Organization', name: 'Card Rummy', logo: { '@type': 'ImageObject', url: 'https://cardrummy.pk/card-rummy.webp' } },
    datePublished: '2026-06-08',
    dateModified: '2026-06-08',
    step: [
      { '@type': 'HowToStep', name: 'Download the app', text: 'Download Card Rummy APK from cardrummy.pk and install it on your Android device.' },
      { '@type': 'HowToStep', name: 'Open and tap Register', text: 'Launch the app and tap the "Register" or "Sign Up" button on the welcome screen.' },
      { '@type': 'HowToStep', name: 'Enter your mobile number', text: 'Enter your active Pakistani mobile number (Zong, Jazz, Telenor, Ufone, or Warid).' },
      { '@type': 'HowToStep', name: 'Verify with OTP', text: 'You will receive a 6-digit OTP via SMS. Enter it in the verification screen within 60 seconds.' },
      { '@type': 'HowToStep', name: 'Set your password and claim bonus', text: 'Create a secure password, complete your profile, and your welcome bonus will be credited automatically.' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can I create multiple Card Rummy accounts?', acceptedAnswer: { '@type': 'Answer', text: 'No. Each mobile number can be linked to only one account. Creating multiple accounts violates the terms of service and will result in a ban.' } },
      { '@type': 'Question', name: "What if I don't receive the OTP?", acceptedAnswer: { '@type': 'Answer', text: "Tap 'Resend OTP' after 60 seconds. Ensure your phone has signal. Check that your number is active and not in DND (Do Not Disturb) mode." } },
      { '@type': 'Question', name: 'How do I reset my Card Rummy password?', acceptedAnswer: { '@type': 'Answer', text: "Tap 'Forgot Password' on the login screen, enter your registered mobile number, receive an OTP, and set a new password." } },
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cardrummy.pk' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cardrummy.pk/blog' },
            { '@type': 'ListItem', position: 3, name: 'Create Card Rummy Account', item: 'https://cardrummy.pk/blog/create-card-rummy-account-and-login' },
          ],
        })
      }} />

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Create Account & Login</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How to Create a <span className="text-accent">Card Rummy Account</span> and Login in 2026
        </h1>
        <p className="text-gray-400 text-sm mb-6">Published June 8, 2026 · 5 min read</p>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src="/blogimages/create-card-rummy-account-and-login.webp"
            alt="How to create Card Rummy account and login guide"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
          Getting started with Card Rummy is quick and simple. In less than 5 minutes, you can download the app, create your account, verify your number, and start playing. This guide walks you through <strong className="text-white">every step of the Card Rummy registration and login process</strong> so you don&apos;t miss a thing — including how to claim your welcome bonus automatically.
        </p>

        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Before You Start: Download the App</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Card Rummy is not available on Google Play. You must download the APK directly from the official website. Visit <Link href="/" className="text-accent hover:underline">cardrummy.pk</Link>, tap the Download button, and install the APK after enabling &quot;Unknown Sources&quot; in your Android settings. The app is 49 MB and compatible with Android 5.0 and above.
        </p>
        <div className="flex justify-center my-6">
          <DownloadButton label="DOWNLOAD CARD RUMMY APK" />
        </div>

        <h2 className="text-2xl font-bold text-accent mt-10 mb-5">Step-by-Step Registration Guide</h2>
        <div className="space-y-4 mb-8">
          {[
            { step: "Step 1", color: "border-accent", title: "Open the App and Tap Register", desc: "Launch Card Rummy. On the welcome screen you will see two options: Login and Register. Tap Register to create a new account. If you already have an account, tap Login instead." },
            { step: "Step 2", color: "border-green-500", title: "Enter Your Mobile Number", desc: "Type in your active Pakistani mobile number — this works with Jazz, Zong, Telenor, Ufone, and Warid. Make sure the number is currently active and can receive SMS messages." },
            { step: "Step 3", color: "border-blue-400", title: "Receive and Enter Your OTP", desc: "An SMS with a 6-digit One-Time Password (OTP) will be sent to your number within 30 seconds. Enter it in the verification box. If you don't receive it, tap 'Resend OTP' after 60 seconds." },
            { step: "Step 4", color: "border-orange-400", title: "Set a Secure Password", desc: "Choose a strong password (at least 8 characters, mixing letters and numbers). Write it down somewhere safe — you will use it every time you log in. Avoid using your phone number as your password." },
            { step: "Step 5", color: "border-purple-400", title: "Complete Your Profile", desc: "Enter your display name and optional referral code if a friend invited you. Both you and your friend earn a bonus when a referral code is used during registration." },
            { step: "Step 6", color: "border-yellow-400", title: "Claim Your Welcome Bonus", desc: "After completing registration, a welcome bonus is automatically credited to your account. Head to the Wallet section to check your bonus balance and start using it in games." },
          ].map(({ step, color, title, desc }) => (
            <div key={title} className={`bg-white/5 border-l-4 ${color} rounded-xl p-5`}>
              <p className="text-xs text-gray-500 mb-1">{step}</p>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">How to Login to Card Rummy</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Once your account is created, login is straightforward. Open the app, tap <strong className="text-white">Login</strong>, enter your registered mobile number and password, then tap Sign In. The app keeps you logged in on your device, so you won&apos;t need to repeat this process every session.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          For security, the app will automatically log you out after a period of inactivity or if you log in from a new device. This protects your account and wallet balance.
        </p>

        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">How to Reset Your Password</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Forgot your password? No problem. On the login screen, tap <strong className="text-white">Forgot Password</strong>. Enter the mobile number you registered with, and an OTP will be sent. Enter the OTP, then create a new password. The reset process takes under 2 minutes.
        </p>

        <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Tips for Account Security</h2>
        <ul className="space-y-2 mb-8 text-gray-300 text-sm">
          {[
            "Never share your password or OTP with anyone, including people claiming to be Card Rummy support.",
            "Enable two-factor authentication (2FA) in the app settings for extra security.",
            "Use a unique password not used on other platforms.",
            "Log out of the app if you share your device with others.",
            "If you notice unusual activity, change your password immediately and contact support.",
          ].map(tip => (
            <li key={tip} className="flex gap-2 items-start">
              <span className="text-accent mt-1">🔒</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-accent mt-10 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-3 mb-10">
          {[
            { q: "Can I create multiple Card Rummy accounts?", a: "No. Each mobile number can only be linked to one account. Creating multiple accounts violates the terms of service and results in a permanent ban." },
            { q: "What if I don't receive the OTP?", a: "Tap 'Resend OTP' after 60 seconds. Ensure your phone has signal. Check that your number is active and not in DND mode." },
            { q: "How do I reset my Card Rummy password?", a: "Tap 'Forgot Password' on the login screen, enter your registered mobile number, receive an OTP, and set a new password." },
            { q: "Can I log in on two devices at the same time?", a: "No. Card Rummy only allows one active session per account at a time for security purposes. Logging in on a new device will log out the previous session." },
            { q: "Is there a guest login option?", a: "Some versions offer a guest mode for practice. However, guest accounts cannot withdraw money or receive bonuses. A full registration is required for real-money play." },
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Create Your Account?</h2>
          <p className="text-gray-300 mb-6">Download Card Rummy, register in 5 minutes, and claim your welcome bonus today. (18+ only.)</p>
          <DownloadButton label="DOWNLOAD & REGISTER NOW" />
        </div>

        <div className="mt-8 flex gap-4 text-sm">
          <Link href="/blog" className="text-accent hover:underline">← All Blogs</Link>
          <Link href="/" className="text-accent hover:underline">← Home</Link>
        </div>
      </div>
    </article>
  );
}
