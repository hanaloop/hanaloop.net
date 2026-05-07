import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { ListTable } from '@/components/features/list-table';
import { getBlogListItems } from '@/lib/blog-utils';

export async function InsightListSection() {
    const t = await getTranslations('InsightList');
    const locale = await getLocale() as AppLocale;
    const items = getBlogListItems(locale);
    const emptyState = locale === 'ko'
        ? {
            title: '등록된 인사이트가 아직 없습니다.',
            description: '현재 공개된 인사이트가 없습니다. 새로운 콘텐츠를 곧 업데이트하겠습니다.',
        }
        : locale === 'es'
            ? {
                title: 'Aún no hay insights publicados.',
                description: 'No hay insights publicados por ahora. Pronto compartiremos nuevo contenido.',
            }
            : {
                title: 'No insights yet.',
                description: 'There are no published insights at the moment. Please check back soon.',
            };

    return (
        <section className="px-4 pb-20 pt-16 text-[var(--color-text-default)] lg:px-6 lg:pb-28 lg:pt-20">
            <div className="mx-auto w-full max-w-[1920px]">
                <p className="text-center text-[18px] lg:text-[32px] font-semibold leading-[1.35]">{t('sectionText')}</p>
                <ListTable heading="Insight LIST" items={items} itemsPerPage={10} emptyTitle={emptyState.title} emptyDescription={emptyState.description} />
            </div>
        </section>
    );
}
