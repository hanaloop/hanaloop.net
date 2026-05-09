import Image from 'next/image';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { RoundedArrowButton } from '@/components/ui/rounded-arrow-button';
import bgImage from '@/public/site/solution/climate-management-bg.png';

export async function SolutionClimateManagementSection() {
    const t = await getTranslations('SolutionClimateManagement');
    const locale = await getLocale() as AppLocale;
    const [messageFirstLine, messageSecondLine] = t('message').split('\n');

    return (
        <section className="px-5 pb-16 pt-14 md:px-8 lg:px-0 lg:pb-[120px] lg:pt-[114px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-0 lg:px-11">
                <h2
                    className="text-black"
                    style={{
                        fontSize: 'clamp(34px, calc(24.54px + 1.97vw), 60px)',
                        fontWeight: 500,
                        letterSpacing: '-1px',
                        lineHeight: 1.13,
                    }}
                >
                    {t('heading')}
                </h2>
                <p
                    className="mt-5 text-[var(--color-text-subtle)]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {t('subheading')}
                </p>

                <p
                    className="mt-20 text-black"
                    style={{
                        fontWeight: 700,
                        fontSize: 'clamp(34px, 2.5vw, 48px)',
                        letterSpacing: '-1px',
                        lineHeight: 1.28,
                    }}
                >
                    {messageFirstLine}
                    <br />
                    {messageSecondLine}
                </p>
            </div>

            <div className="mx-auto mt-14 w-full max-w-[1440px] lg:hidden">
                <div className="space-y-14 px-5 md:px-8">
                    <article>
                        <h3 className="text-gradient-brand" style={{ fontSize: 'clamp(32px, calc(22.55px + 1.97vw), 42px)', fontWeight: 700, lineHeight: 1.28 }}>{t('itemOneTitle')}</h3>
                        <p className="mt-4" style={{ fontSize: 'clamp(16px, calc(14.12px + 0.39vw), 18px)', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {t('itemOneBody')}
                        </p>
                    </article>

                    <article>
                        <h3 className="text-gradient-brand" style={{ fontSize: 'clamp(32px, calc(22.55px + 1.97vw), 42px)', fontWeight: 700, lineHeight: 1.28 }}>{t('itemTwoTitle')}</h3>
                        <p className="mt-4" style={{ fontSize: 'clamp(16px, calc(14.12px + 0.39vw), 18px)', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {t('itemTwoBody')}
                        </p>
                    </article>

                    <RoundedArrowButton
                        href={withLocalePath(locale, '/partnership')}
                        label={t('contactLabel')}
                        className="w-full max-w-[320px] px-8 md:w-[279px] md:px-12"
                    />
                </div>

                <div className="mt-10 overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,49.84vw,50vw)] lg:shrink-0">
                    <Image src={bgImage} alt={t('imageAlt')} width={957} height={707} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1200px) 49.84vw, 100vw" />
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex lg:pl-[calc((100vw-1440px)/2)]">
                <div className="max-w-[640px] flex-1 space-y-24 pt-2 pl-11">
                    <article>
                        <h3 className='text-gradient-brand' style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.28,  }}>{t('itemOneTitle')}</h3>
                        <p className="mt-6" style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {t('itemOneBody')}
                        </p>
                    </article>

                    <article>
                        <h3 className='text-gradient-brand' style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.28,  }}>{t('itemTwoTitle')}</h3>
                        <p className="mt-6" style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                            {t('itemTwoBody')}
                        </p>
                    </article>

                    <RoundedArrowButton href={withLocalePath(locale, '/partnership')} label={t('contactLabel')} />
                </div>

                <div className="overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image src={bgImage} alt={t('imageAlt')} width={957} height={707} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
