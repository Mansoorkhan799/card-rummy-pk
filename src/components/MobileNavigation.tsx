'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/* ─── Icons ─────────────────────────────────────────────────────────── */
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 3v13m0 0-4-4m4 4 4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);
const MonitorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8m-4-4v4" />
  </svg>
);
const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10m-2.5-7.5h3.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3h4" />
  </svg>
);
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.25C16.5 22.15 20 17.25 20 12V6L12 2z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const WalletIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
    <path d="M16 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
    <path d="M16 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
  </svg>
);
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3z" />
  </svg>
);
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v.01M12 11v5" />
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);
const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gray-500">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/* ─── Nav structure ──────────────────────────────────────────────────── */
const sections = [
  {
    label: 'MAIN',
    items: [
      { href: '/', label: 'Home', Icon: HomeIcon },
      { href: '/download-card-rummy-apk', label: 'Download', Icon: DownloadIcon },
      { href: '/card-rummy-for-pc', label: 'PC Version', Icon: MonitorIcon },
    ],
  },
  {
    label: 'GUIDES',
    items: [
      { href: '/deposit-money-in-card-rummy', label: 'Deposit Guide', Icon: DollarIcon },
      { href: '/blog/is-card-rummy-real-or-fake', label: 'Is It Real?', Icon: ShieldIcon },
      { href: '/withdraw-money-from-card-rummy', label: 'Withdrawal Proof', Icon: WalletIcon },
      { href: '/blog', label: 'Blog', Icon: BookIcon },
    ],
  },
  {
    label: 'INFO',
    items: [
      { href: '/about-us', label: 'About Us', Icon: InfoIcon },
      { href: '/contact-us', label: 'Contact Us', Icon: MailIcon },
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────────────── */
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const openMenu = () => startTransition(() => setIsOpen(true));
  const closeMenu = () => startTransition(() => setIsOpen(false));

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  /* SSR placeholder */
  if (!mounted) {
    return (
      <div className="md:hidden">
        <button className="flex items-center text-accent p-1" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={openMenu}
        className="flex items-center text-accent p-1"
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-[#0e1122] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >

        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="/card-rummy.webp"
                alt="Card Rummy Logo"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-accent text-lg font-bold leading-tight">Card Rummy</span>
          </Link>

          <button
            onClick={closeMenu}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav */}
        <nav className="flex-1 overflow-y-auto overscroll-contain py-3 px-4 space-y-5">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mb-1 px-1">
                {section.label}
              </p>
              <ul>
                {section.items.map(({ href, label, Icon }) => {
                  const active = isActive(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={closeMenu}
                        className={`flex items-center gap-3 px-2 py-3 rounded-lg transition-colors group ${active ? 'text-accent bg-accent/10' : 'text-white hover:bg-white/5'}`}
                      >
                        <span className={`flex-shrink-0 transition-colors ${active ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}`}>
                          <Icon />
                        </span>
                        <span className="flex-1 text-sm font-medium">{label}</span>
                        <ChevronRight />
                      </Link>
                      {/* thin divider (not after last item) */}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

      </div>
    </div>
  );
}
