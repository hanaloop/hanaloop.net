import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { CaseDetailContentSection } from '@/components/sections/case-detail/content-section';
import { CasesHeroSection } from '@/components/sections/cases/hero-section';
import { CtaSection } from '@/components/sections/home/cta-section';
import { isLocale, locales } from '@/lib/locales';

type Props = { params: Promise<{ locale: string }> };
type SearchParams = { id?: string | string[] };

export default async function Page({ params, searchParams }: Props & { searchParams: Promise<SearchParams> }) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    const { id } = await searchParams;
    const rawId = Array.isArray(id) ? id[0] : id;
    const caseId = Number(rawId);
    if (!Number.isInteger(caseId) || caseId < 1) notFound();

    return (
        <SiteShell>
            <CasesHeroSection />
            <CaseDetailContentSection caseId={caseId} />
            <CtaSection />
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
