import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { InsightHeroSection } from '@/components/sections/insight/hero-section';
import { InsightListSection } from '@/components/sections/insight/list-section';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();

  return (
    <SiteShell>
      <InsightHeroSection locale={locale} />
      <InsightListSection locale={locale} />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}
