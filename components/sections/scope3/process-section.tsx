import type { AppLocale } from '@/lib/locales';
import { AlternatingImageProcessSection } from '@/components/features/alternating-image-process-section';

type Scope3ProcessSectionProps = {
    locale: AppLocale;
};

type Scope3ProcessCopy = {
    sectionAriaLabel: string;
    title: string;
    subtitle: string;
    cards: Array<{
        index: string;
        title: string;
        description: string[];
        imageSrc: string;
        imageAlt: string;
    }>;
};

const koCopy: Scope3ProcessCopy = {
    sectionAriaLabel: 'Scope3 관리 프로세스',
    title: 'Scope3 관리 프로세스',
    subtitle: 'Hana.eco의 Scope3의 관리프로세스를 확인해보세요.',
    cards: [
        {
            index: '01.',
            title: 'Scope3 관리 역량 진단',
            description: ['기업의 내부 역량 분석', '기업이 관리할 수 있는 Scope3', '배출 카테고리 범위 정의'],
            imageSrc: '/images/revamp/scope3-overview-1.png',
            imageAlt: 'Scope3 관리 역량 진단 이미지',
        },
        {
            index: '02.',
            title: 'Scope3 배출량 산정',
            description: ['데이터 수집부터 산정', '산정 결과 검증', '기업 맞춤형 Scope3 배출 산정 프로세스 수립'],
            imageSrc: '/images/revamp/scope3-overview-2.png',
            imageAlt: 'Scope3 배출량 산정 이미지',
        },
        {
            index: '03.',
            title: 'Scope3 배출량 및 리스크 예비 분석',
            description: ['Scope3 배출 집약도 및 주요 배출원 분석', '카테고리별 배출 기여도 평가', '공급망 기반 리스크 예비 분석'],
            imageSrc: '/images/revamp/scope3-overview-3.png',
            imageAlt: 'Scope3 배출량 및 리스크 예비 분석 이미지',
        },
        {
            index: '04.',
            title: '규제 대응 전략, 리스크 관리 방안',
            description: ['고객사 및 이해관계자 요구대응 방안', 'IFRS, CDP 등 글로벌 보고 표준 적용 방안', '리스크 관리 방안'],
            imageSrc: '/images/revamp/scope3-overview-4.png',
            imageAlt: '규제 대응 전략 및 리스크 관리 방안 이미지',
        },
    ],
};

const copy: Record<AppLocale, Scope3ProcessCopy> = {
    ko: koCopy,
    en: koCopy,
    es: koCopy,
};

export function Scope3ProcessSection({ locale }: Scope3ProcessSectionProps) {
    const text = copy[locale];

    return (
        <AlternatingImageProcessSection
            ariaLabel={text.sectionAriaLabel}
            title={text.title}
            subtitle={text.subtitle}
            cards={text.cards}
            className="pb-16 pt-10 md:py-20 lg:pb-24 lg:pt-24"
        />
    );
}
