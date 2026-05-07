import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type ProcessItem = {
    badge: string;
    title: string;
    body: string | string[];
    extraTitle?: string;
    extraBody?: string[];
    bgSrc: string;
    bgAlt: string;
};

export async function HanaAiProcessSection() {
    const t = await getTranslations('HanaAiProcess');
    const items = t.raw('items') as ProcessItem[];
    const splitByPeriod = (value: string) => value.split(/(?<=\.)\s+/).filter(Boolean);

    return (
        <section className="px-5 pb-20 pt-8 md:px-8 lg:px-0 lg:pb-[140px] lg:pt-[56px]" aria-label={t('sectionAriaLabel')}>
            <div className="mx-auto w-full max-w-[1440px] px-0 lg:px-11">
                <h2
                    className="text-black"
                    style={{
                        fontSize: 'clamp(34px, calc(24.54px + 1.97vw), 60px)',
                        fontWeight: 700,
                        letterSpacing: '-1px',
                        lineHeight: 1.2,
                    }}
                >
                    {t('heading')}
                </h2>

                <div className="mt-12 space-y-[100px] sm:space-y-[120px] md:space-y-[140px] lg:mt-[78px] lg:space-y-[108px]">
                    {items.map((item, index) => {
                        const imageLeft = index % 2 === 0;

                        return (
                            <article key={`${item.badge}-${index}`} className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-[74px]">
                                <div className={imageLeft ? 'order-1' : 'order-1 lg:order-2'}>
                                    <div className="relative w-full overflow-visible rounded-[24px] [aspect-ratio:700/410]">
                                        <Image src={item.bgSrc} alt={item.bgAlt} fill className="rounded-[24px] object-cover" sizes="(min-width: 1920px) 700px, (min-width: 1024px) calc((100vw - 220px) / 2), 100vw" />
                                        <Image
                                            src="/images/revamp/hana-ai/pc.png"
                                            alt=""
                                            aria-hidden
                                            width={940}
                                            height={418}
                                            className="absolute bottom-[-14%] left-1/2 z-[3] h-auto w-[92%] -translate-x-1/2"
                                            sizes="(min-width: 1920px) 700px, (min-width: 1024px) calc((100vw - 220px) / 2), 90vw"
                                        />
                                    </div>
                                </div>

                                <div className={imageLeft ? 'order-2 px-11 pt-8 lg:pt-0' : 'order-2 lg:order-1 px-11 pt-8 lg:pt-0'}>
                                    <span
                                        className="inline-flex h-[46px] items-center rounded-full px-[18px] text-[21px] font-semibold leading-none text-white"
                                        style={{ background: 'linear-gradient(106.7deg, rgba(31, 189, 125, 0.7) 26.33%, rgba(1, 148, 255, 0.7) 75.4%)' }}
                                    >
                                        {item.badge}
                                    </span>
                                    <h3 className="mt-5 text-[30px] font-bold leading-[1.35] tracking-[-0.25px] text-black lg:text-[36px]">{item.title}</h3>
                                    <div className="mt-6 space-y-1 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[20px]">
                                        {(Array.isArray(item.body) ? item.body : [item.body])
                                            .flatMap((block) => splitByPeriod(block))
                                            .map((line) => (
                                                <p key={line}>{line}</p>
                                            ))}
                                    </div>

                                    {item.extraTitle ? <h4 className="mt-10 text-[30px] font-bold leading-[1.35] tracking-[-0.25px] text-black lg:mt-[72px] lg:text-[36px]">{item.extraTitle}</h4> : null}
                                    {item.extraBody ? (
                                        <div className="mt-6 space-y-1 text-[17px] font-normal leading-[1.9] tracking-[-0.25px] text-[var(--color-text-subtle)] lg:text-[20px]">
                                            {item.extraBody
                                                .flatMap((block) => splitByPeriod(block))
                                                .map((line) => (
                                                    <p key={line}>{line}</p>
                                                ))}
                                        </div>
                                    ) : null}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
