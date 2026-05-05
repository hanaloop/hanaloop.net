import { SiteShell } from '@/components/layout/site-shell';
import { HanaAiHeroSection } from '@/components/sections/hana-ai/hero-section';
import { HanaAiOverviewSection } from '@/components/sections/hana-ai/overview-section';
import { HanaAiProcessSection } from '@/components/sections/hana-ai/process-section';
import { defaultLocale, isLocale, locales } from '@/lib/locales';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    const resolvedLocale = isLocale(locale) ? locale : defaultLocale;

    return (
        <SiteShell>
            <HanaAiHeroSection locale={resolvedLocale} />
            <HanaAiOverviewSection locale={resolvedLocale} />
            <HanaAiProcessSection locale={resolvedLocale} />
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales
        .filter((locale) => locale !== defaultLocale)
        .map((locale) => ({ locale }));
}
