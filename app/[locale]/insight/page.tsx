import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { InsightHeroSection } from '@/components/sections/insight/hero-section';
import { InsightListSection } from '@/components/sections/insight/list-section';
import { isLocale, locales } from '@/lib/locales';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <SiteShell>
      <InsightHeroSection />
      <InsightListSection />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
