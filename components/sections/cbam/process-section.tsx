import Image from 'next/image';
import type { CSSProperties } from 'react';
import { getTranslations } from 'next-intl/server';

type ProcessStep = {
    heading: string;
    items: string[];
};

const TITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(28px, 2.5vw, 48px)',
    fontWeight: 500,
    letterSpacing: '-1px',
    lineHeight: 'normal',
    fontFamily: 'inherit',
};

const ITEM_STYLE: CSSProperties = {
    fontSize: 'clamp(14px, 0.9375vw, 18px)',
    fontWeight: 500,
    letterSpacing: '-0.25px',
    lineHeight: 'normal',
    fontFamily: 'inherit',
};

const STEP_TITLE_STYLE: CSSProperties = {
    fontSize: 'clamp(16px, 1.25vw, 24px)',
    fontWeight: 500,
    letterSpacing: '-0.25px',
    lineHeight: 'normal',
    fontFamily: 'inherit',
};


export async function CbamProcessSection() {
    const t = await getTranslations('CbamProcess');
    const steps = t.raw('steps') as ProcessStep[];

    return (
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden" aria-label={t('sectionAriaLabel')}>
            <div className="relative w-full lg:hidden">
                <Image src="/images/revamp/cbam/process-bg.png" alt="" aria-hidden="true" fill className="object-cover" sizes="100vw" priority />
                <div className="relative px-5 py-10 sm:px-8 md:py-14">
                    <h2 className="text-center text-white" style={TITLE_STYLE}>
                        {t('title')}
                    </h2>

                    <div className="mx-auto mt-8 w-full rounded-[12px] bg-black/38 px-4 py-5 sm:px-6 md:mt-10 md:px-8 md:py-7">
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
                            {steps.map((step) => (
                                <div key={`${step.heading}-mobile`}>
                                    <p className="text-white" style={STEP_TITLE_STYLE}>
                                        {step.heading}
                                    </p>
                                    <div className="-mt-1">
                                        <Image src="/images/revamp/cbam/process-line.png" alt="" aria-hidden="true" width={340} height={22} className="h-auto w-full max-w-[260px] object-contain" sizes="260px" />
                                    </div>
                                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-white marker:text-[16px] md:space-y-2">
                                        {step.items.map((item) => (
                                            <li key={`${step.heading}-${item}`} style={ITEM_STYLE}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative hidden w-full lg:block lg:aspect-[1920/673]">
                <Image src="/images/revamp/cbam/process-bg.png" alt="" aria-hidden="true" fill className="object-cover" sizes="100vw" priority />
                <div className="absolute inset-0 px-5 pt-10 sm:px-8 md:pt-14 lg:px-[8.4375vw] lg:pt-[6vw]">
                    <h2 className="text-center text-white" style={TITLE_STYLE}>
                        {t('title')}
                    </h2>

                    <div className="mx-auto mt-8 w-full rounded-[12px] bg-black/38 px-4 py-5 sm:px-8 lg:mt-[2vw] lg:px-[2.7083vw] lg:py-[2.1875vw]">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-9">
                            {steps.map((step) => (
                                <div key={step.heading}>
                                    <p className="text-white" style={STEP_TITLE_STYLE}>
                                        {step.heading}
                                    </p>
                                    <div className="-mt-1 hidden lg:block">
                                        <Image src="/images/revamp/cbam/process-line.png" alt="" aria-hidden="true" width={340} height={22} className="h-auto w-full max-w-[17vw] object-contain" sizes="(min-width: 1920px) 326px, 17vw" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-[0.9375vw] lg:grid-cols-4 lg:gap-9">
                            {steps.map((step) => (
                                <ul key={`${step.heading}-items`} className="list-disc space-y-2 pl-5 text-white marker:text-[18px]">
                                    {step.items.map((item) => (
                                        <li key={item} style={ITEM_STYLE}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
