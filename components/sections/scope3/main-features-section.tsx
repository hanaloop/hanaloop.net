import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type FeatureItem = {
    index: string;
    title: string;
    details: Array<{
        lead: string;
        body: string;
    }>;
};

export async function Scope3MainFeaturesSection() {
    const t = await getTranslations('Scope3MainFeatures');
    const items = t.raw('items') as FeatureItem[];

    return (
        <section className="px-5 pb-16 pt-14 md:px-8 md:pt-20 lg:px-0 lg:pb-[120px] lg:pt-[114px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-0 lg:px-11">
                <h2 className="lg:text-center text-black [font-size:clamp(24px,calc(15.70px+2.24vw),48px)] font-bold tracking-[-1px] leading-[1.2]">{t('heading')}</h2>
                <p className="mt-5 lg:text-center text-[var(--color-text-subtle)] [font-size:clamp(18px,calc(16.96px+0.28vw),21px)] font-semibold tracking-[-0.5px] leading-[1.45]">{t('subheading')}</p>
            </div>

            <div className="mx-auto mt-14 w-full max-w-[1440px] lg:hidden">
                <div className="mt-6 overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:mt-[8px] lg:w-[min(957px,49.84vw,50vw)] lg:shrink-0">
                    <Image src="/site/scope3/main-features-bg.png" alt={t('imageAlt')} width={940} height={969} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1200px) 49.84vw, 100vw" />
                </div>
                <div className="space-y-14 md:px-8 mt-10">
                    {items.map((item) => (
                        <article key={item.index}>
                            <p className="text-gradient-brand [font-size:clamp(16px,calc(10.47px+1.50vw),32px)] font-bold leading-[1.15]">{item.index}</p>
                            <h3 className="mt-3 text-gradient-brand [font-size:clamp(24px,calc(17.78px+1.68vw),42px)] font-bold leading-[1.28]">{item.title}</h3>
                            <div className="mt-8 space-y-10">
                                {item.details.map((detail) => (
                                    <div key={detail.lead}>
                                        <p className="[font-size:clamp(16px,calc(13.23px+0.75vw),24px)] font-semibold tracking-[-1px] leading-[1.42]">{detail.lead}</p>
                                        <p className="mt-3 text-[var(--color-text-subtle)] [font-size:clamp(14px,calc(12.62px+0.37vw),18px)] font-medium tracking-[0.5px] leading-[1.58]">{detail.body}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex lg:pl-[calc((100vw-1440px)/2+44px)]">
                <div className="max-w-[640px] flex-1 space-y-24 pt-2 pl-11">
                    {items.map((item) => (
                        <article key={item.index}>
                            <p className="text-gradient-brand text-[42px] font-bold leading-[1.15]">{item.index}</p>
                            <h3 className="mt-3 text-gradient-brand text-[42px] font-bold leading-[1.28]">{item.title}</h3>
                            <div className="mt-14 space-y-12">
                                {item.details.map((detail) => (
                                    <div key={detail.lead}>
                                        <p className="text-[24px] font-medium tracking-[-1px] leading-[1.42]">{detail.lead}</p>
                                        <p className="mt-4 text-[18px] font-medium tracking-[0.5px] leading-[1.58]">{detail.body}</p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image src="/site/scope3/main-features-bg.png" alt={t('imageAlt')} width={940} height={969} className="h-auto w-full object-cover" sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw" />
                </div>
            </div>
        </section>
    );
}
