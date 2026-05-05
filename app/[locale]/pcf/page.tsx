import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { PcfHeroSection } from '@/components/sections/pcf/hero-section';
import { PcfMainFeaturesSection } from '@/components/sections/pcf/main-features-section';
import { PcfOverviewSection } from '@/components/sections/pcf/overview-section';
import { PcfWhyNeededSection } from '@/components/sections/pcf/why-needed-section';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = { params: Promise<{ locale: string }> };

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === defaultLocale) notFound();
  return (
    <SiteShell>
      <PcfHeroSection locale={locale} />
      <PcfOverviewSection locale={locale} />
      <PcfWhyNeededSection locale={locale} />
      <PcfMainFeaturesSection locale={locale} />
    </SiteShell>
  );
}

export function generateStaticParams() {
  return locales.filter((l) => l !== defaultLocale).map((locale) => ({ locale }));
}
