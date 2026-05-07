import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const BADGE = 'OUR MISSION';

export async function HomeOurMissionSection() {
    const t = await getTranslations('HomeOurMission');

    const desktopLead = t.raw('desktopLead') as string[];
    const paragraphs = t.raw('paragraphs') as string[];

    return (
        <section className="px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-16 lg:px-[64px] lg:pb-20 lg:pt-28">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="px-11 grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:items-start lg:gap-10">
                    <p className="mx-auto max-w-[680px] font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,4vw,48px)] lg:mx-0 lg:text-left">{BADGE}</p>
                    <div className="space-y-5 lg:space-y-0">
                        <div className="inline-flex items-center rounded-full bg-[var(--gradient-badge)] px-3 py-1.5 text-[18px] font-semibold leading-none text-white lg:hidden">{BADGE}</div>
                        <h2 className="max-w-[660px] text-[42px] font-semibold leading-[1.35] tracking-[-0.02em] text-[var(--color-mission-text)] [font-size:clamp(22px,5vw,42px)] lg:hidden">{t('heading')}</h2>
                        <div className="hidden max-w-[720px] space-y-2 text-[18px] font-medium leading-[1.9] text-[var(--color-text-muted)] lg:block">
                            <h2 className="whitespace-nowrap font-bold">{t('heading')}</h2>
                            {desktopLead.map((line) => (
                                <p key={line} className="whitespace-nowrap">
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-[14px] md:mt-8 md:rounded-[18px] lg:mt-12 lg:h-[446px] lg:rounded-[22px]">
                    <Image
                        src="/images/revamp/home/mission-img.jpg"
                        alt="Wind turbines by a road at sunset"
                        width={2048}
                        height={1152}
                        className="h-auto w-full object-cover object-bottom lg:h-full"
                        sizes="(max-width: 1024px) 100vw, 1440px"
                    />
                    <p className="pointer-events-none absolute bottom-1 left-7 text-[76px] font-medium leading-none tracking-[-0.02em] text-white/45 md:left-10 md:text-[84px] lg:hidden">OUR MISSION</p>
                </div>

                <div className="mt-8 space-y-6 text-[42px] font-medium leading-[1.6] text-[#434343] [font-size:clamp(18px,4vw,44px)] lg:hidden">
                    <p>{paragraphs[0]}</p>
                    <p>{paragraphs[1]}</p>
                </div>
            </div>
        </section>
    );
}
