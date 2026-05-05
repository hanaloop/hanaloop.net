import { SiteShell } from '@/components/layout/site-shell';
import { InsightHeroSection } from '@/components/sections/insight/hero-section';
import { InsightListSection } from '@/components/sections/insight/list-section';

export default function Page() {
  return (
    <SiteShell>
      <InsightHeroSection locale="ko" />
      <InsightListSection locale="ko" />
    </SiteShell>
  );
}
