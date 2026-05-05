import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/locales';

export const dynamicParams = false;

export default function Page() {
  notFound();
}

export async function generateStaticParams() {
  // Return at least one param for each locale to satisfy static export requirements
  // These pages will all return 404, but Next.js requires at least one param
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({
      locale,
      slug: ['__placeholder__'],
    }));
}
