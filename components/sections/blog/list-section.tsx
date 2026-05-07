import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { ListTable } from '@/components/features/list-table';
import { getBlogListItems } from '@/lib/blog-utils';

export async function BlogListSection() {
    const t = await getTranslations('BlogList');
    const locale = await getLocale() as AppLocale;
    const items = getBlogListItems(locale);
    const emptyState = locale === 'ko'
        ? {
            title: '등록된 블로그 글이 아직 없습니다.',
            description: '현재 게시된 콘텐츠가 없습니다. 곧 유용한 업데이트로 찾아오겠습니다.',
        }
        : locale === 'es'
            ? {
                title: 'Aún no hay publicaciones en el blog.',
                description: 'No hay contenido publicado por ahora. Volveremos pronto con nuevas actualizaciones.',
            }
            : {
                title: 'No blog posts yet.',
                description: 'There are no published posts at the moment. Please check back soon.',
            };

    return (
        <section className="px-4 pb-20 pt-16 text-[var(--color-text-default)] lg:px-6 lg:pb-28 lg:pt-20">
            <div className="mx-auto w-full max-w-[1920px]">
                <p className="text-center text-[18px] lg:text-[32px] font-semibold leading-[1.35]">{t('sectionText')}</p>
                <ListTable heading="Blog LIST" items={items} itemsPerPage={10} emptyTitle={emptyState.title} emptyDescription={emptyState.description} />
            </div>
        </section>
    );
}
