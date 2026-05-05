import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { CbamCertifiedSection } from '@/components/sections/cbam/cbam-certified-section';
import { CbamHeroSection } from '@/components/sections/cbam/hero-section';
import { CbamInsightCardsSection } from '@/components/sections/cbam/insight-cards-section';
import { CbamOverviewSection } from '@/components/sections/cbam/overview-section';
import { CbamPlanSection } from '@/components/sections/cbam/cbam-plan-section';
import { CbamProcessSection } from '@/components/sections/cbam/process-section';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();
  return (
    <SiteShell>
      <CbamHeroSection locale={locale} />
      <CbamOverviewSection locale={locale} />
      <CbamProcessSection locale={locale} />
      <CbamCertifiedSection locale={locale} />
      <CbamPlanSection locale={locale} />
      <CbamInsightCardsSection locale={locale} />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((locale) => ({ locale }));
}
