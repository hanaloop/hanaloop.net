import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { SolutionClimateManagementSection } from '@/components/sections/solution/climate-management-section';
import { SolutionHeroSection } from '@/components/sections/solution/hero-section';
import { Scope3StrategySection } from '@/components/sections/solution/scope3-strategy-section';
import { isLocale, locales } from '@/lib/locales';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <SiteShell>
      <SolutionHeroSection />
      <SolutionClimateManagementSection />
      <Scope3StrategySection />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
