import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/layout/site-shell';
import { InsightHeroSection } from '@/components/sections/insight/hero-section';
import { InsightListSection } from '@/components/sections/insight/list-section';
import { getInsightPostContent, getInsightPostSlugs } from '@/lib/insight-content';
import { isLocale, locales, withLocalePath } from '@/lib/locales';
import CaptionedImage from '@/components/mdx/captioned-image';
import SectionBlock from '@/components/mdx/section-block';

type Props = {
    params: Promise<{
        locale: string;
        slug?: string[];
    }>;
};

export const dynamicParams = false;

export default async function Page({ params }: Props) {
    const { locale, slug } = await params;
    if (!isLocale(locale)) notFound();

    if (!slug || slug.length === 0) {
        return (
            <SiteShell>
                <InsightHeroSection />
                <InsightListSection />
            </SiteShell>
        );
    }

    const post = getInsightPostContent(locale, slug);
    if (!post) notFound();

    return (
        <SiteShell headerDark>
            <article className="mx-auto w-full max-w-[980px] px-4 pb-24 pt-20 lg:px-6 lg:pt-32">
                <Link href={withLocalePath(locale, '/insight')} className="font-medium text-[#616161] hover:underline">
                    Back to insight
                </Link>
                <h1 className="mt-5 text-3xl font-semibold leading-tight text-[var(--color-text-default)] lg:text-5xl">{post.title}</h1>
                <p className="mt-3 text-base text-[#757575]">{post.dateText}</p>

                {post.image ? (
                    <div className="relative mt-8 overflow-hidden rounded-lg border border-[#e0e0e0]">
                        <Image src={post.image} alt={post.title} width={1600} height={840} className="h-auto w-full object-cover" />
                    </div>
                ) : null}

                <div className="prose prose-gray mt-10 max-w-none prose-headings:text-[var(--color-text-default)] prose-a:text-[#1d4ed8]">
                    <MDXRemote source={post.content} components={{ CaptionedImage, SectionBlock }} />
                </div>
            </article>
        </SiteShell>
    );
}

export function generateStaticParams() {
    return locales.flatMap((locale) => [{ locale, slug: [] as string[] }, ...getInsightPostSlugs(locale).map((slug) => ({ locale, slug }))]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    if (!isLocale(locale)) notFound();

    if (!slug || slug.length === 0) {
        return {
            title: 'HanaLoop Insight',
            description: 'HanaLoop insight and research updates.',
        };
    }

    const post = getInsightPostContent(locale, slug);
    if (!post) notFound();

    return {
        title: post.title,
        description: post.description || post.title,
        openGraph: {
            title: post.title,
            description: post.description || post.title,
            images: post.image ? [post.image] : undefined,
        },
    };
}
