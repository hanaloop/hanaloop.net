import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { ListTable } from '@/components/features/list-table';
import { getBlogListItems } from '@/lib/blog-utils';

type InsightCopy = {
    heading: string;
    viewMoreLabel: string;
};

const insightCopy: Record<AppLocale, InsightCopy> = {
    ko: { heading: 'Insight LIST', viewMoreLabel: 'View more' },
    en: { heading: 'Insight LIST', viewMoreLabel: 'View more' },
    es: { heading: 'Insight LIST', viewMoreLabel: 'Ver más' },
};

type HomeInsightSectionProps = {
    locale: AppLocale;
};

export function HomeInsightSection({ locale }: HomeInsightSectionProps) {
    const copy = insightCopy[locale];
    const items = getBlogListItems(locale);

    return (
        <section className="px-4 pb-20 pt-16 text-[var(--color-text-default)] lg:px-6 lg:pb-28 lg:pt-20">
            <div className="mx-auto w-full max-w-[1920px]">
                <ListTable heading={copy.heading} items={items} itemsPerPage={4} viewMoreHref={withLocalePath(locale, '/blog')} viewMoreLabel={copy.viewMoreLabel} />
            </div>
        </section>
    );
}
