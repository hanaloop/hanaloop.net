import { UnderConstruction } from '@/components/features/under-construction';
import { notFound } from 'next/navigation';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return <UnderConstruction />;
}

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale, tag: '__placeholder__' }));
}
