import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

function GradientHeading({ children }: { children: string }) {
    return (
        <h3
            className="inline-block"
            style={{
                background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: 'clamp(32px, calc(27.64px + 0.91vw), 42px)',
                lineHeight: 1.2,
                letterSpacing: '-0.5px',
            }}
        >
            {children}
        </h3>
    );
}

export async function PcfWhyNeededSection() {
    const t = await getTranslations('PcfWhyNeeded');

    return (
        <section className="px-5 pb-20 pt-8 md:px-8 lg:px-10 lg:pb-[132px] lg:pt-[46px] xl:px-0" aria-label={t('title')}>
            <div className="mx-auto w-full max-w-[1440px]">
                <h2
                    className="text-black"
                    style={{
                        fontWeight: 700,
                        fontSize: 'clamp(34px, 2.5vw, 48px)',
                        letterSpacing: '-1px',
                        lineHeight: 1.2,
                    }}
                >
                    {t('title')}
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-[68px] lg:gap-12 min-[1440px]:grid-cols-[1fr_724px] min-[1440px]:gap-[56px]">
                    <div className="flex flex-col justify-center gap-12 lg:gap-[86px]">
                        <article>
                            <p
                                className="text-[#1BAFA5]"
                                style={{
                                    fontWeight: 700,
                                    fontSize: 'clamp(34px, calc(30.95px + 0.63vw), 42px)',
                                    lineHeight: 1,
                                    letterSpacing: '-0.5px',
                                }}
                            >
                                {t('itemOneNumber')}
                            </p>
                            <div className="mt-2">
                                <GradientHeading>{t('itemOneTitle')}</GradientHeading>
                            </div>
                            <p
                                className="mt-5 whitespace-pre-line text-[#2f2f2f]"
                                style={{
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    letterSpacing: '0.5px',
                                    lineHeight: 1.6,
                                }}
                            >
                                {t('itemOneBody')}
                            </p>
                        </article>

                        <article>
                            <p
                                className="text-[#1BAFA5]"
                                style={{
                                    fontWeight: 700,
                                    fontSize: 'clamp(34px, calc(30.95px + 0.63vw), 42px)',
                                    lineHeight: 1,
                                    letterSpacing: '-0.5px',
                                }}
                            >
                                {t('itemTwoNumber')}
                            </p>
                            <div className="mt-2">
                                <GradientHeading>{t('itemTwoTitle')}</GradientHeading>
                            </div>
                            <p
                                className="mt-5 whitespace-pre-line text-[#2f2f2f]"
                                style={{
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    letterSpacing: '0.5px',
                                    lineHeight: 1.6,
                                }}
                            >
                                {t('itemTwoBody')}
                            </p>
                        </article>
                    </div>

                    <div className="relative mx-auto w-full max-w-[724px] overflow-hidden rounded-[18px] min-[1440px]:h-[676px] min-[1440px]:w-[724px] min-[1440px]:max-w-none">
                        <Image
                            src="/site/pcf/why-right.png"
                            alt={t('imageAlt')}
                            width={724}
                            height={676}
                            className="h-auto w-full object-cover min-[1440px]:h-full"
                            sizes="(min-width: 1920px) 724px, (min-width: 1440px) 724px, (min-width: 768px) 80vw, calc(100vw - 40px)"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
