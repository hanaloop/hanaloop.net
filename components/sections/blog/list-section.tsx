import { ListTable } from '@/components/features/list-table';
import type { AppLocale } from '@/lib/locales';
import { getBlogListItems } from '@/lib/blog-utils';

type BlogListSectionProps = {
    locale: AppLocale;
};

const sectionText: Record<AppLocale, string> = {
    ko: '🗞️ 하나루프의 다양하고 유익한 최신 소식을 확인해보세요.',
    en: "🗞️ Check out HanaLoop's latest useful updates.",
    es: '🗞️ Consulta las ultimas novedades utiles de HanaLoop.',
};

export function BlogListSection({ locale }: BlogListSectionProps) {
    const items = getBlogListItems(locale);

    return (
        <section className="px-4 pb-20 pt-16 text-[var(--color-text-default)] lg:px-6 lg:pb-28 lg:pt-20">
            <div className="mx-auto w-full max-w-[1920px]">
                <p className="text-center text-[18px] lg:text-[32px] font-semibold leading-[1.35]">{sectionText[locale]}</p>
                <ListTable heading="Blog LIST" items={items} itemsPerPage={10} />
            </div>
        </section>
    );
}
