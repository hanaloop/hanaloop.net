import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { AppLocale } from '@/lib/locales';

export type BlogPostContent = {
  slug: string[];
  title: string;
  description: string;
  dateText: string;
  image?: string;
  content: string;
};

function walkMarkdownFiles(rootDir: string): string[] {
  if (!fs.existsSync(rootDir)) return [];
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(fullPath));
      continue;
    }
    if (!entry.isFile()) continue;
    if (!entry.name.endsWith('.md') && !entry.name.endsWith('.mdx')) continue;
    files.push(fullPath);
  }

  return files;
}

function getDateText(value: unknown, locale: AppLocale): string {
  if (!value) return '';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '';
  const dateLocale = locale === 'ko' ? 'ko-KR' : locale === 'es' ? 'es-ES' : 'en-US';
  return date.toLocaleDateString(dateLocale, { year: 'numeric', month: 'short', day: 'numeric' });
}

function findBlogFile(locale: AppLocale, slug: string[]) {
  const base = path.join(process.cwd(), 'content', locale, 'blog', ...slug);
  const mdxPath = `${base}.mdx`;
  const mdPath = `${base}.md`;

  if (fs.existsSync(mdxPath)) return mdxPath;
  if (fs.existsSync(mdPath)) return mdPath;
  return null;
}

export function getBlogPostSlugs(locale: AppLocale): string[][] {
  const blogRoot = path.join(process.cwd(), 'content', locale, 'blog');
  return walkMarkdownFiles(blogRoot).map((filePath) => {
    const relative = path.relative(blogRoot, filePath).replaceAll('\\', '/');
    const clean = relative.replace(/\.(md|mdx)$/i, '');
    return clean.split('/');
  });
}

export function getBlogPostContent(locale: AppLocale, slug: string[]): BlogPostContent | null {
  const filePath = findBlogFile(locale, slug);
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);

  return {
    slug,
    title: String(parsed.data.title ?? ''),
    description: String(parsed.data.description ?? parsed.data.summary ?? ''),
    dateText: getDateText(parsed.data.date ?? parsed.data.publishedAt, locale),
    image: parsed.data.image ? String(parsed.data.image) : undefined,
    content: parsed.content,
  };
}
