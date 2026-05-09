import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const processItems = [
    { label: 'Extraction', icon: '/site/pcf/process-icon-1.png' },
    { label: 'Production', icon: '/site/pcf/process-icon-2.png' },
    { label: 'Transportation', icon: '/site/pcf/process-icon-3.png' },
    { label: 'Use', icon: '/site/pcf/process-icon-4.png' },
    { label: 'Disposal', icon: '/site/pcf/process-icon-5.png' },
];

export async function PcfOverviewSection() {
    const t = await getTranslations('PcfOverview');

    return (
        <section className="px-4 pb-16 pt-14 sm:px-6 md:px-8 lg:pb-[120px] lg:pt-[108px] xl:px-0" aria-label={t('title')}>
            <div className="mx-auto w-full max-w-[1440px]">
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
                    className="mt-5 text-[#4c4c4c]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {t('subheading')}
                </p>

                <h3 className="mt-20 lg:mt-30 text-[32px] font-bold leading-[1.22] tracking-[-0.25px] text-black lg:text-[48px]">{t('title')}</h3>

                <div className="relative mt-[26px] hidden w-full overflow-hidden rounded-t-[14px] xl:block">
                    <Image src="/site/pcf/overview-bg.png" alt={t('imageAlt')} width={1440} height={240} className="h-[240px] w-full object-cover" sizes="(min-width: 1440px) 1440px, 100vw" />

                    <div className="absolute inset-0 flex items-center justify-center px-[20px] py-5">
                        <div className="flex w-full items-center justify-center gap-[14px]">
                            {processItems.map((item, index) => (
                                <div key={item.label} className="flex items-center gap-[14px]">
                                    <div
                                        className="flex h-[104px] w-[232px] items-center rounded-[12px] px-5"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid #FFFFFF',
                                            background: 'rgba(255, 255, 255, 0.4)',
                                        }}
                                    >
                                        <Image src={item.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                                        <span className="flex-1 text-center text-[18px] font-semibold leading-[1.2] tracking-[-0.25px] text-white">{item.label}</span>
                                    </div>
                                    {index < processItems.length - 1 && <Image src="/site/pcf/process-right.png" alt="" width={6} height={19} className="h-[19px] w-[6px] shrink-0" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mt-[26px] w-full overflow-hidden rounded-[14px] xl:hidden">
                    <Image src="/site/pcf/overview-bg.png" alt={t('imageAlt')} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 flex flex-col justify-center px-3 py-5 sm:px-4 sm:py-6 md:px-8 md:py-8">
                        {processItems.map((item, index) => (
                            <div key={`mobile-${item.label}`} className="flex flex-col items-center">
                                <div
                                    className="flex h-[88px] w-[min(92%,420px)] items-center rounded-[12px] px-4"
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid #FFFFFF',
                                        background: 'rgba(255, 255, 255, 0.4)',
                                    }}
                                >
                                    <Image src={item.icon} alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
                                    <span className="flex-1 text-center text-[18px] font-semibold leading-[1.2] tracking-[-0.25px] text-white">{item.label}</span>
                                </div>
                                {index < processItems.length - 1 && <Image src="/site/pcf/process-right.png" alt="" width={6} height={19} className="my-2 h-[19px] w-[6px] rotate-90 shrink-0" />}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-[34px] whitespace-pre-line text-[21px] font-bold leading-[1.5] tracking-[-0.25px] text-[#1f1f1f]">{t('lead')}</p>
                <p className="mt-[22px] whitespace-pre-line text-[21px] font-medium leading-[1.5] tracking-[-0.25px] text-[#3f3f3f]">{t('body')}</p>
            </div>
        </section>
    );
}
