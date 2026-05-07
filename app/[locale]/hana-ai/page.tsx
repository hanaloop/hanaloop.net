import { SiteShell } from '@/components/layout/site-shell';
import { HanaAiHeroSection } from '@/components/sections/hana-ai/hero-section';
import { HanaAiOverviewSection } from '@/components/sections/hana-ai/overview-section';
import { HanaAiProcessSection } from '@/components/sections/hana-ai/process-section';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/locales';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();

    return (
        <SiteShell>
            <HanaAiHeroSection />
            <HanaAiOverviewSection />
            <HanaAiProcessSection />
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
