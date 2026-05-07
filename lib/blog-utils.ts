import type { ListTableItem } from '@/components/features/list-table';
import { getBlogPosts, getBlogSlug, resolveAuthors } from '@/lib/blog';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

const FALLBACK_THUMBNAIL = '/images/revamp/home-feature-bg-01.png';

function formatBlogDate(value: unknown, locale: AppLocale): string {
  if (!value) return '';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '';

  const dateLocale = locale === 'ko' ? 'ko-KR' : locale === 'es' ? 'es-ES' : 'en-US';
  return date.toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function getBlogListItems(locale: AppLocale): ListTableItem[] {
  const posts = getBlogPosts(locale);

  return posts.map((post, index) => {
    const slug = getBlogSlug(post);
    const href = withLocalePath(locale, `/blog/${slug.join('/')}`);
    const authors = resolveAuthors(locale, post.authors as string | string[] | undefined);
    const primaryAuthor = authors[0];
    const authorName = String(
      (primaryAuthor as Record<string, unknown>)?.name_alt ??
      (primaryAuthor as Record<string, unknown>)?.name ??
      'HanaLoop'
    );
    const dateText = formatBlogDate(post.date ?? post.publishedAt, locale);

    return {
      id: `blog-${index}-${slug.join('-')}`,
      title: String(post.title ?? ''),
      dateText,
      author: authorName,
      thumbnail: String(post.image ?? FALLBACK_THUMBNAIL),
      href,
    };
  });
}
