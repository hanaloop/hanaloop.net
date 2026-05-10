import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

export async function PcfMainFeaturesSection() {
    const t = await getTranslations('PcfMainFeatures');

    return (
        <section className="px-4 pb-20 pt-20 sm:px-6 md:px-8 lg:pb-[128px] lg:pt-[146px] xl:px-0" aria-label={t('title')}>
            <div className="mx-auto w-full max-w-[1440px]">
                <h2 className="text-center text-black [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] font-medium tracking-[-1px] leading-[1.2]">{t('title')}</h2>

                <p className="mx-auto mt-7 max-w-[1096px] text-center text-[#4c4c4c] [font-size:clamp(16px,calc(14.27px+0.47vw),21px)] lg:font-semibold tracking-[0.5px] leading-[1.55]">{t('body')}</p>

                <div className="mt-16 overflow-hidden rounded-[18px] lg:mt-[74px]">
                    <Image src="/site/pcf/main-features-example.png" alt={t('imageAlt')} width={1440} height={786} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 1440px, (min-width: 1440px) 75vw, 100vw" />
                </div>

                <p className="mt-4 text-[14px] font-medium tracking-[-0.2px] text-[#7f7f7f]">{t('caption')}</p>
            </div>
        </section>
    );
}
