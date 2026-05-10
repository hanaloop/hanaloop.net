import { getTranslations } from 'next-intl/server';

export async function HanaAiOverviewSection() {
    const t = await getTranslations('HanaAiOverview');

    return (
        <section className="px-4 pb-16 pt-14 sm:px-6 md:px-8 lg:pb-[120px] lg:pt-[108px] lg:px-11" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px]">
                <h2 className="text-black font-bold [font-size:clamp(28px,calc(16.94px+2.99vw),60px)] tracking-[-1px]">{t('heading')}</h2>
                <p className="mt-5 font-semibold text-[#4c4c4c] [font-size:clamp(16px,calc(13.23px+0.75vw),24px)] tracking-[-0.5px]">{t('subheading')}</p>

                <h3 className="mt-20 [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] font-bold leading-[1.2] tracking-[-1px] text-black lg:mt-[120px]">{t('aiHeading')}</h3>

                <div className="mt-16 grid gap-16 lg:mt-[84px] lg:grid-cols-2 lg:gap-12">
                    <article className="max-w-[590px]">
                        <h4 className="[font-size:clamp(24px,calc(19.86px+1.12vw),36px)] font-medium leading-[1.35] tracking-[-0.25px] text-black">{t('leftTitle')}</h4>
                        <p className="mt-6 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)]">{t('leftBody')}</p>
                    </article>

                    <article className="max-w-[590px] lg:mt-[304px] lg:justify-self-end">
                        <h4 className="[font-size:clamp(24px,calc(19.86px+1.12vw),36px)] font-medium leading-[1.35] tracking-[-0.25px] text-black">{t('rightTitle')}</h4>
                        <p className="mt-6 [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)]">{t('rightBody')}</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
