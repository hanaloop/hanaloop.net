import type { CSSProperties } from 'react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import bgImage from '@/public/images/revamp/scope3/strategy-bg.png';
import logoImage from '@/public/images/revamp/scope3/lb.png';

type StrategyColumn = {
    title: string;
    bullets: string[];
};

const titleGradientStyle: CSSProperties = {
    background: 'linear-gradient(97.75deg, rgba(31, 189, 125, 0.7) 37.72%, rgba(1, 148, 255, 0.7) 63.18%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};

export async function Scope3StrategySection() {
    const t = await getTranslations('Scope3Strategy');
    const columns = t.raw('columns') as StrategyColumn[];

    return (
        <section className="px-5 pb-16 pt-12 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[92px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] lg:px-11">
                <h2
                    className="text-black"
                    style={{
                        fontWeight: 700,
                        fontSize: 'clamp(34px, calc(23.81px + 2.12vw), 60px)',
                        letterSpacing: '-0.25px',
                        lineHeight: 1.2,
                    }}
                >
                    {t('heading')}
                </h2>

                <div className="px-11 mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
                    {columns.map((column) => (
                        <article key={column.title} className="min-w-0">
                            <h3
                                style={{
                                    ...titleGradientStyle,
                                    fontWeight: 600,
                                    fontSize: 'clamp(20px, calc(18.43px + 0.33vw), 24px)',
                                    letterSpacing: '-0.25px',
                                    lineHeight: 1.35,
                                }}
                            >
                                {column.title}
                            </h3>
                            <div className="mt-6 h-px bg-black/40" />
                            <ul className="mt-7 list-disc space-y-2 pl-6 text-black">
                                {column.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        style={{
                                            fontWeight: 500,
                                            fontSize: 'clamp(16px, calc(15.22px + 0.16vw), 18px)',
                                            letterSpacing: '-0.25px',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="relative mt-14 overflow-hidden rounded-[20px] lg:mt-[74px]">
                    <div className="relative h-[240px] w-full md:h-[320px] lg:h-[400px]">
                        <Image src={bgImage} alt={t('imageAlt')} fill className="object-cover" sizes="(min-width: 1920px) 1440px, (min-width: 1024px) calc(100vw - 88px), 100vw" />
                    </div>
                    <Image src={logoImage} alt="" aria-hidden="true" className="absolute bottom-6 left-6 h-[34px] w-auto opacity-60 md:bottom-8 md:left-8 md:h-[42px] lg:bottom-10 lg:left-10 lg:h-[53px]" />
                </div>
            </div>
        </section>
    );
}
