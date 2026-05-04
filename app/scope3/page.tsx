import { SiteShell } from '@/components/layout/site-shell';
import { Scope3HeroSection } from '@/components/sections/scope3/hero-section';
import { Scope3MainFeaturesSection } from '@/components/sections/scope3/main-features-section';
import { Scope3OverviewSection } from '@/components/sections/scope3/overview-section';
import { Scope3ProcessSection } from '@/components/sections/scope3/process-section';

export const dynamicParams = false;

export default function Page() {
  return (
    <SiteShell>
      <Scope3HeroSection locale="ko" />
      <Scope3OverviewSection locale="ko" />
      <Scope3ProcessSection locale="ko" />
      <Scope3MainFeaturesSection locale="ko" />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return [];
}
