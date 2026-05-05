import { SiteShell } from '@/components/layout/site-shell';
import { HanaAiHeroSection } from '@/components/sections/hana-ai/hero-section';
import { HanaAiOverviewSection } from '@/components/sections/hana-ai/overview-section';
import { HanaAiProcessSection } from '@/components/sections/hana-ai/process-section';

export default function Page() {
  return (
    <SiteShell>
      <HanaAiHeroSection locale="ko" />
      <HanaAiOverviewSection locale="ko" />
      <HanaAiProcessSection locale="ko" />
    </SiteShell>
  );
}
