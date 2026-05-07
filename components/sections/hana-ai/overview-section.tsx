import { getTranslations } from 'next-intl/server';

export async function HanaAiOverviewSection() {
    const t = await getTranslations('HanaAiOverview');

    return (
        <section className="px-5 pb-20 pt-16 md:px-8 lg:px-0 lg:pb-[170px] lg:pt-[114px]" aria-label={t('sectionAriaLabel')}>
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
                    className="mt-5 max-w-[900px] text-[var(--color-text-subtle)]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {t('subheading')}
                </p>

                <h3 className="mt-20 text-[38px] font-medium leading-[1.2] tracking-[-1px] text-black lg:mt-[120px] lg:text-[48px]">{t('aiHeading')}</h3>

                <div className="mt-16 grid gap-16 lg:mt-[84px] lg:grid-cols-2 lg:gap-12">
                    <article className="max-w-[590px]">
                        <h4 className="text-[30px] font-medium leading-[1.35] tracking-[-0.25px] text-black lg:text-[36px]">{t('leftTitle')}</h4>
                        <p className="mt-6 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[18px]">{t('leftBody')}</p>
                    </article>

                    <article className="max-w-[590px] lg:mt-[304px] lg:justify-self-end">
                        <h4 className="text-[30px] font-medium leading-[1.35] tracking-[-0.25px] text-black lg:text-[36px]">{t('rightTitle')}</h4>
                        <p className="mt-6 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[18px]">{t('rightBody')}</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
