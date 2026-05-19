import { defaultLocale, locales, withLocalePath, type AppLocale } from '@/lib/locales';

export const siteConfig = {
  title: 'HanaLoop',
  tagline: 'Carbon Management and Climate Compliance Platform',
  url: 'https://www.hanaloop.com',
  image: '/images/hanaloop-social-card_ko.jpg',
};

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function getCanonicalUrl(locale: AppLocale, pathname = '/') {
  const localizedPath = withLocalePath(locale, normalizePathname(pathname));
  return new URL(localizedPath, siteConfig.url).toString();
}

export function getLanguageAlternates(locale: AppLocale, pathname = '/') {
  return {
    canonical: getCanonicalUrl(locale, pathname),
    languages: {
      ...Object.fromEntries(locales.map((locale) => [locale, getCanonicalUrl(locale, pathname)])),
      'x-default': getCanonicalUrl(defaultLocale, pathname),
    },
  };
}

export function getHomeMetadataText() {
  return {
    title: siteConfig.title,
    description: siteConfig.tagline,
  };
}
