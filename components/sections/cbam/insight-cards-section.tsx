import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';

type InsightItem = {
    id: string;
    title: string;
    subtitle: string;
    body: string;
    href: string;
};

const HEADING_STYLE: CSSProperties = {
    fontSize: '48px',
    fontWeight: 500,
    letterSpacing: '-1px',
    lineHeight: 1.25,
};

const CARD_TITLE_STYLE: CSSProperties = {
    fontSize: '21px',
    fontWeight: 600,
    letterSpacing: '-0.25px',
    lineHeight: 1.45,
};

const CARD_BODY_STYLE: CSSProperties = {
    fontSize: '18px',
    fontWeight: 500,
    letterSpacing: '-0.25px',
    lineHeight: 1.45,
};

const BODY_CLAMP_STYLE: CSSProperties = {
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

export async function CbamInsightCardsSection() {
    const t = await getTranslations('CbamInsightCards');
    const locale = await getLocale() as AppLocale;
    const items = t.raw('items') as InsightItem[];

    return (
        <section className="px-5 pb-16 pt-16 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[92px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-11">
                <h2 className="text-center text-black" style={HEADING_STYLE}>
                    {t('heading')}
                </h2>

        <div className="mt-20 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-[28px]">
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={withLocalePath(locale, item.href)}
              className="group relative flex h-[320px] w-full flex-col rounded-[14px] bg-[#07090c] px-[22px] pb-[26px] pt-[28px] transition hover:brightness-110"
                        >
                            <h3 className="text-white" style={CARD_TITLE_STYLE}>
                                {item.title}
                            </h3>
                            <p className="mt-[2px] text-white" style={CARD_TITLE_STYLE}>
                                {item.subtitle}
                            </p>

                            <div className="mt-[16px] h-px w-full bg-white/80" />

                            <p className="mt-[22px] pr-6 text-white/78" style={{ ...CARD_BODY_STYLE, ...BODY_CLAMP_STYLE }}>
                                {item.body}
                            </p>

                            <Image src="/icons/revamp/right.png" alt="" aria-hidden="true" width={10} height={20} className="absolute bottom-[24px] right-[16px] h-[20px] w-[10px] object-contain transition group-hover:translate-x-[1px]" />
                        </Link>
                    ))}
                </div>

                <div className="mt-[34px] flex justify-center">
                    <RoundedArrowButton href={withLocalePath(locale, '/blog')} label={t('moreInsightLabel')} />
                </div>
            </div>
        </section>
    );
}
