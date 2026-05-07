import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { Scope3HeroSection } from '@/components/sections/scope3/hero-section';
import { Scope3MainFeaturesSection } from '@/components/sections/scope3/main-features-section';
import { Scope3OverviewSection } from '@/components/sections/scope3/overview-section';
import { Scope3ProcessSection } from '@/components/sections/scope3/process-section';
import { isLocale, locales } from '@/lib/locales';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <SiteShell>
      <Scope3HeroSection />
      <Scope3OverviewSection />
      <Scope3ProcessSection />
      <Scope3MainFeaturesSection />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
