import { UnderConstruction } from '@/components/features/under-construction';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/lib/locales';

const slugs = ['company', 'partnership', 'platform', 'recruit', 'privacy', 'credits', 'recruit_apply', 'docs'];

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export default async function Page({ params }: Props) {
    const { locale } = await params;
    if (!isLocale(locale)) notFound();
    return <UnderConstruction locale={locale} />;
}

export function generateStaticParams() {
    return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}
