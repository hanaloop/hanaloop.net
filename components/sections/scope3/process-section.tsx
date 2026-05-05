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
            imageSrc: '/images/revamp/scope3/overview-1.png',
            imageAlt: 'Scope3 관리 역량 진단 이미지',
        },
        {
            index: '02.',
            title: 'Scope3 배출량 산정',
            description: ['데이터 수집부터 산정', '산정 결과 검증', '기업 맞춤형 Scope3 배출 산정 프로세스 수립'],
            imageSrc: '/images/revamp/scope3/overview-2.png',
            imageAlt: 'Scope3 배출량 산정 이미지',
        },
        {
            index: '03.',
            title: 'Scope3 배출량 및 리스크 예비 분석',
            description: ['Scope3 배출 집약도 및 주요 배출원 분석', '카테고리별 배출 기여도 평가', '공급망 기반 리스크 예비 분석'],
            imageSrc: '/images/revamp/scope3/overview-3.png',
            imageAlt: 'Scope3 배출량 및 리스크 예비 분석 이미지',
        },
        {
            index: '04.',
            title: '규제 대응 전략, 리스크 관리 방안',
            description: ['고객사 및 이해관계자 요구대응 방안', 'IFRS, CDP 등 글로벌 보고 표준 적용 방안', '리스크 관리 방안'],
            imageSrc: '/images/revamp/scope3/overview-4.png',
            imageAlt: '규제 대응 전략 및 리스크 관리 방안 이미지',
        },
    ],
};

const enCopy: Scope3ProcessCopy = {
    sectionAriaLabel: 'Scope 3 Management Process',
    title: 'Scope 3 Management Process',
    subtitle: 'Explore the Scope 3 management process powered by Hana.eco.',
    cards: [
        {
            index: '01.',
            title: 'Scope 3 Capability Assessment',
            description: ['Internal capability analysis', 'Defining manageable Scope 3 categories', 'Establishing emission category scope'],
            imageSrc: '/images/revamp/scope3/overview-1.png',
            imageAlt: 'Scope 3 capability assessment image',
        },
        {
            index: '02.',
            title: 'Scope 3 Emission Calculation',
            description: ['Data collection through calculation', 'Verification of calculation results', 'Building a company-tailored Scope 3 emission calculation process'],
            imageSrc: '/images/revamp/scope3/overview-2.png',
            imageAlt: 'Scope 3 emission calculation image',
        },
        {
            index: '03.',
            title: 'Scope 3 Emission & Risk Preliminary Analysis',
            description: ['Analysis of Scope 3 emission intensity and key sources', 'Assessment of emission contribution by category', 'Preliminary risk analysis based on supply chain data'],
            imageSrc: '/images/revamp/scope3/overview-3.png',
            imageAlt: 'Scope 3 emission and risk preliminary analysis image',
        },
        {
            index: '04.',
            title: 'Regulatory Response Strategy & Risk Management',
            description: ['Response plans for customer and stakeholder requirements', 'Application of global reporting standards such as IFRS and CDP', 'Risk management strategies'],
            imageSrc: '/images/revamp/scope3/overview-4.png',
            imageAlt: 'Regulatory response strategy and risk management image',
        },
    ],
};

const esCopy: Scope3ProcessCopy = {
    sectionAriaLabel: 'Proceso de Gestión de Alcance 3',
    title: 'Proceso de Gestión de Alcance 3',
    subtitle: 'Explore el proceso de gestión de Alcance 3 impulsado por Hana.eco.',
    cards: [
        {
            index: '01.',
            title: 'Evaluación de Capacidades de Alcance 3',
            description: ['Análisis de capacidades internas', 'Definición de categorías de Alcance 3 gestionables', 'Establecimiento del alcance de categorías de emisiones'],
            imageSrc: '/images/revamp/scope3/overview-1.png',
            imageAlt: 'Imagen de evaluación de capacidades de Alcance 3',
        },
        {
            index: '02.',
            title: 'Cálculo de Emisiones de Alcance 3',
            description: ['Recopilación de datos hasta el cálculo', 'Verificación de los resultados del cálculo', 'Construcción de un proceso de cálculo de emisiones de Alcance 3 personalizado'],
            imageSrc: '/images/revamp/scope3/overview-2.png',
            imageAlt: 'Imagen de cálculo de emisiones de Alcance 3',
        },
        {
            index: '03.',
            title: 'Análisis Preliminar de Emisiones y Riesgos de Alcance 3',
            description: ['Análisis de la intensidad de emisiones y principales fuentes de Alcance 3', 'Evaluación de la contribución de emisiones por categoría', 'Análisis preliminar de riesgos basado en datos de la cadena de suministro'],
            imageSrc: '/images/revamp/scope3/overview-3.png',
            imageAlt: 'Imagen de análisis preliminar de emisiones y riesgos de Alcance 3',
        },
        {
            index: '04.',
            title: 'Estrategia de Respuesta Regulatoria y Gestión de Riesgos',
            description: ['Planes de respuesta a los requisitos de clientes y partes interesadas', 'Aplicación de estándares globales de reporte como IFRS y CDP', 'Estrategias de gestión de riesgos'],
            imageSrc: '/images/revamp/scope3/overview-4.png',
            imageAlt: 'Imagen de estrategia de respuesta regulatoria y gestión de riesgos',
        },
    ],
};

const copy: Record<AppLocale, Scope3ProcessCopy> = {
    ko: koCopy,
    en: enCopy,
    es: esCopy,
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
