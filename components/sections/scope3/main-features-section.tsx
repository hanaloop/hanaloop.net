import type { CSSProperties } from 'react';
import Image from 'next/image';
import type { AppLocale } from '@/lib/locales';

const GRADIENT_TEXT_STYLE: CSSProperties = {
    background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
};

type Scope3MainFeaturesSectionProps = {
    locale: AppLocale;
};

type FeatureItem = {
    index: string;
    title: string;
    details: Array<{
        lead: string;
        body: string;
    }>;
};

type MainFeaturesCopy = {
    sectionAriaLabel: string;
    heading: string;
    subheading: string;
    items: FeatureItem[];
    imageAlt: string;
};

const koCopy: MainFeaturesCopy = {
    sectionAriaLabel: 'Scope3 솔루션 주요 기능',
    heading: 'Scope3 솔루션 주요 기능',
    subheading: 'Hana.eco의 Scope3 솔루션의 주요기능을 확인해보세요.',
    items: [
        {
            index: '01.',
            title: '대량의 활동데이터 간편한 관리',
            details: [
                {
                    lead: '활동데이터 일괄 업데이트',
                    body: '대량의 활동 데이터에 대해 범주 분류, 배출계수 매핑, 단위 변환, 배출량 산정을 지원합니다.',
                },
                {
                    lead: '유사활동 그룹화 관리',
                    body: '유사활동 항목을 그룹화하여 배출계수 관리 및 추적을 효율화합니다.',
                },
            ],
        },
        {
            index: '02.',
            title: '다양한 기준의 배출량 추이 시각화',
            details: [
                {
                    lead: '직관적인 탄소배출 흐름 파악',
                    body: '활동데이터 그룹, 산정 방식, 공급사별 배출량 등 다양한 분석 기준으로 시각화하여 탄소배출의 흐름을 손쉽게 파악할 수 있습니다.',
                },
                {
                    lead: '고배출 파트 식별과 감축 전략 도출',
                    body: 'SCOPE3 배출 통계를 통해 공급망 전반의 탄소 배출 경향과 고배출 파트를 식별하고 감축활동을 도출할 수 있습니다.',
                },
            ],
        },
    ],
    imageAlt: 'Scope3 기능 대시보드 예시 배경 이미지',
};

const copy: Record<AppLocale, MainFeaturesCopy> = {
    ko: koCopy,
    en: koCopy,
    es: koCopy,
};

export function Scope3MainFeaturesSection({ locale }: Scope3MainFeaturesSectionProps) {
    const text = copy[locale];

    return (
        <section className="px-5 pb-16 pt-14 md:px-8 md:pt-20 lg:px-0 lg:pb-[120px] lg:pt-[114px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-0 lg:px-11">
                <h2 className="text-center text-black" style={{ fontSize: 'clamp(34px, 2.5vw, 48px)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.2 }}>
                    {text.heading}
                </h2>
                <p className="mt-5 text-center text-[var(--color-text-subtle)]" style={{ fontSize: 'clamp(18px, 2.5vw, 21px)', fontWeight: 600, letterSpacing: '-0.5px', lineHeight: 1.45 }}>
                    {text.subheading}
                </p>
            </div>

            <div className="mx-auto mt-14 w-full max-w-[1440px] lg:hidden">
                <div className="space-y-14 px-5 md:px-8">
                    {text.items.map((item) => (
                        <article key={item.index}>
                            <p style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1.15, ...GRADIENT_TEXT_STYLE }}>{item.index}</p>
                            <h3 className="mt-3" style={{ fontSize: 'clamp(32px, calc(22.55px + 1.97vw), 42px)', fontWeight: 700, lineHeight: 1.28, ...GRADIENT_TEXT_STYLE }}>
                                {item.title}
                            </h3>
                            <div className="mt-8 space-y-10">
                                {item.details.map((detail) => (
                                    <div key={detail.lead}>
                                        <p style={{  fontSize: 'clamp(20px, calc(16.23px + 0.79vw), 24px)', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1.42 }}>
                                            {detail.lead}
                                        </p>
                                        <p className="mt-3 text-[#4C4C4C]" style={{ fontSize: 'clamp(16px, calc(14.12px + 0.39vw), 18px)', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                                            {detail.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-10 overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:mt-[8px] lg:w-[min(957px,49.84vw,50vw)] lg:shrink-0">
                    <Image
                        src="/images/revamp/scope3/main-features-bg.png"
                        alt={text.imageAlt}
                        width={940}
                        height={969}
                        className="h-auto w-full object-cover"
                        sizes="(min-width: 1920px) 957px, (min-width: 1200px) 49.84vw, 100vw"
                    />
                </div>
            </div>

            <div className="mt-18 hidden items-center justify-between gap-10 lg:flex lg:pl-[calc((100vw-1440px)/2+44px)]">
                <div className="max-w-[640px] flex-1 space-y-24 pt-2 pl-11">
                    {text.items.map((item) => (
                        <article key={item.index}>
                            <p style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.15, ...GRADIENT_TEXT_STYLE }}>{item.index}</p>
                            <h3 className="mt-3" style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.28, ...GRADIENT_TEXT_STYLE }}>
                                {item.title}
                            </h3>
                            <div className="mt-14 space-y-12">
                                {item.details.map((detail) => (
                                    <div key={detail.lead}>
                                        <p style={{ fontSize: '24px', fontWeight: 500, letterSpacing: '-1px', lineHeight: 1.42 }}>
                                            {detail.lead}
                                        </p>
                                        <p className="mt-4" style={{ fontSize: '18px', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.58 }}>
                                            {detail.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="overflow-hidden rounded-tl-[18px] rounded-br-[18px] lg:w-[min(957px,50vw)] lg:shrink-0">
                    <Image
                        src="/images/revamp/scope3/main-features-bg.png"
                        alt={text.imageAlt}
                        width={940}
                        height={969}
                        className="h-auto w-full object-cover"
                        sizes="(min-width: 1920px) 957px, (min-width: 1024px) 50vw, 100vw"
                    />
                </div>
            </div>
        </section>
    );
}
