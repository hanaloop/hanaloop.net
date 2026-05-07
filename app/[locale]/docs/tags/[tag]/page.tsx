import { UnderConstruction } from '@/components/features/under-construction';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <UnderConstruction />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale, tag: '__placeholder__' }));
}
