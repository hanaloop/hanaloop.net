import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { siteConfig } from '@/lib/site-config';
import type { AppLocale } from '@/lib/locales';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const ogLocaleMap: Record<AppLocale, string> = {
  ko: 'ko_KR',
  en: 'en_US',
  es: 'es_ES',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as AppLocale;

  return {
    metadataBase: new URL(siteConfig.url),
    manifest: '/images/favicon_io/site.webmanifest',
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.tagline,
    icons: {
      icon: [
        { url: '/images/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/images/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: [{ url: '/images/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      shortcut: ['/images/favicon_io/favicon-32x32.png'],
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.tagline,
      url: siteConfig.url,
      siteName: siteConfig.title,
      images: [siteConfig.image],
      locale: ogLocaleMap[locale] ?? 'ko_KR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.tagline,
      images: [siteConfig.image],
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-800" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
