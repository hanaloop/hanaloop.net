import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { AppLocale } from '@/lib/locales';

export type InsightPostContent = {
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

function findInsightFile(locale: AppLocale, slug: string[]) {
  const base = path.join(process.cwd(), 'content', locale, 'docs', ...slug);
  const mdxPath = `${base}.mdx`;
  const mdPath = `${base}.md`;

  if (fs.existsSync(mdxPath)) return mdxPath;
  if (fs.existsSync(mdPath)) return mdPath;
  return null;
}

function stripMdxImports(content: string): string {
  return content
    .replace(/^import\s+.*?from\s+['"][^'"]+['"]\s*;?\s*$/gm, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trimStart();
}

export function getInsightPostSlugs(locale: AppLocale): string[][] {
  const docsRoot = path.join(process.cwd(), 'content', locale, 'docs');
  const excluded = new Set(['glossary', 'intro', 'meta', '_meta', 'current']);

  return walkMarkdownFiles(docsRoot)
    .filter((filePath) => {
      const baseName = path.basename(filePath, path.extname(filePath));
      return !excluded.has(baseName) && !filePath.endsWith('.data.mdx');
    })
    .map((filePath) => {
      const relative = path.relative(docsRoot, filePath).replaceAll('\\', '/');
      return relative.replace(/\.(md|mdx)$/i, '').split('/');
    });
}

export function getInsightPostContent(locale: AppLocale, slug: string[]): InsightPostContent | null {
  const filePath = findInsightFile(locale, slug);
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);

  return {
    slug,
    title: String(parsed.data.title ?? ''),
    description: String(parsed.data.description ?? parsed.data.summary ?? ''),
    dateText: getDateText(parsed.data.date ?? parsed.data.publishedAt, locale),
    image: parsed.data.image ? String(parsed.data.image) : undefined,
    content: stripMdxImports(parsed.content),
  };
}
