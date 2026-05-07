import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { ListTable } from '@/components/features/list-table';
import { getBlogListItems } from '@/lib/blog-utils';

export async function HomeInsightSection() {
    const t = await getTranslations('HomeInsight');
    const locale = await getLocale() as AppLocale;
    const items = getBlogListItems(locale);
    const emptyState = locale === 'ko'
        ? {
            title: '아직 표시할 인사이트가 없습니다.',
            description: '최신 인사이트 콘텐츠를 준비 중입니다. 잠시 후 다시 확인해 주세요.',
        }
        : locale === 'es'
            ? {
                title: 'Aún no hay insights para mostrar.',
                description: 'Estamos preparando nuevo contenido de insights. Por favor, vuelve a revisar pronto.',
            }
            : {
                title: 'No insights to show yet.',
                description: 'We are preparing new insight content. Please check back soon.',
            };

    return (
        <section className="px-4 pb-20 pt-16 text-[var(--color-text-default)] lg:px-6 lg:pb-28 lg:pt-20">
            <div className="mx-auto w-full max-w-[1920px]">
                <ListTable
                    heading={t('heading')}
                    items={items}
                    itemsPerPage={4}
                    viewMoreHref={withLocalePath(locale, '/blog')}
                    viewMoreLabel={t('viewMoreLabel')}
                    emptyTitle={emptyState.title}
                    emptyDescription={emptyState.description}
                />
            </div>
        </section>
    );
}
