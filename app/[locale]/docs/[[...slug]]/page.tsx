import { UnderConstruction } from '@/components/features/under-construction';
import { notFound } from 'next/navigation';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();
  if (slug && slug.length > 0) notFound();

  return <UnderConstruction />;
}

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale, slug: [] as string[] }));
}
