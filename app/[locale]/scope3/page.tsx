import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { Scope3HeroSection } from '@/components/sections/scope3/hero-section';
import { Scope3MainFeaturesSection } from '@/components/sections/scope3/main-features-section';
import { Scope3OverviewSection } from '@/components/sections/scope3/overview-section';
import { Scope3ProcessSection } from '@/components/sections/scope3/process-section';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();
  return (
    <SiteShell>
      <Scope3HeroSection locale={locale} />
      <Scope3OverviewSection locale={locale} />
      <Scope3ProcessSection locale={locale} />
      <Scope3MainFeaturesSection locale={locale} />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((locale) => ({ locale }));
}
