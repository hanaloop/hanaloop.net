import type { AppLocale } from '@/lib/locales';
import { AlternatingImageProcessSection } from '@/components/features/alternating-image-process-section';

type CbamCertifiedSectionProps = {
    locale: AppLocale;
};

type CertifiedCopy = {
    sectionAriaLabel: string;
    title: string;
    subtitle: string;
    cards: Array<{
        index: string;
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
    }>;
};

const koCopy: CertifiedCopy = {
    sectionAriaLabel: '적합성 인증받은 CBAM 솔루션',
    title: '적합성 인증받은 CBAM 솔루션',
    subtitle: '로이드인증원(LRQA)으로부터 배출권거래제와 EU 탄소국경조정제도 적합성 국내 첫 검증의견서 획득',
    cards: [
        {
            index: '01.',
            title: '제품 및 전구물질 관리(CN 코드 관리)',
            description: '제품과 전구물질을 통합적으로 관리하고, CBAM 규제 대상 품목에 필요한 CN 코드를 체계적으로 등록 및 추적할 수 있습니다. 이를 통해 제품별 탄소배출 분석 및 보고에 필요한 기초 데이터를 손쉽게 확보할 수 있습니다.',
            imageSrc: '/images/revamp/cbam/certified-1.png',
            imageAlt: '제품 및 전구물질 관리 시각화 이미지',
        },
        {
            index: '02.',
            title: 'Installation 설정, 공정 관리',
            description: '각 제조시설의 정보와 생산 공정 흐름을 설정하고 관리할 수 있습니다. 이는 CBAM 보고서에 요구되는 배출 정보 및 공정별 배출 산정의 정확성을 높이는 데 중요한 역할을 합니다.',
            imageSrc: '/images/revamp/cbam/certified-2.png',
            imageAlt: 'Installation 설정 및 공정 관리 시각화 이미지',
        },
        {
            index: '03.',
            title: '제품 내재배출 산정 및 분석',
            description: '제품 생산 과정에서 발생하는 직접 및 간접 배출량을 제품 단위로 산정합니다. 산정 결과를 바탕으로 제품별 탄소 집약도, 고배출 요소, 개선 포인트 등을 분석할 수 있어, 규제 대응은 물론 탄소감축 전략 수립에도 유용합니다.',
            imageSrc: '/images/revamp/cbam/certified-3.png',
            imageAlt: '제품 내재배출 산정 및 분석 시각화 이미지',
        },
        {
            index: '04.',
            title: 'CBAM 보고서 생성',
            description: '수집된 활동 데이터와 배출 정보를 기반으로, CBAM 규정에 맞는 보고서를 자동 생성할 수 있습니다. 복잡한 규정 해석과 수작업 없이, 유럽 수출 기업의 CBAM 보고 의무 이행을 효율적으로 지원합니다.',
            imageSrc: '/images/revamp/cbam/certified-4.png',
            imageAlt: 'CBAM 보고서 생성 시각화 이미지',
        },
    ],
};

const enCopy: CertifiedCopy = {
    sectionAriaLabel: 'LRQA-Certified CBAM Solution',
    title: 'LRQA-Certified CBAM Solution',
    subtitle: 'First in Korea to receive a verification statement of conformity for the EU Emissions Trading System and the EU Carbon Border Adjustment Mechanism from Lloyd\'s Register Quality Assurance (LRQA)',
    cards: [
        {
            index: '01.',
            title: 'Product & Precursor Management (CN Code Management)',
            description: 'Manage products and precursors in an integrated manner, and systematically register and track the CN codes required for CBAM-regulated goods. This enables you to easily obtain the foundational data needed for carbon emission analysis and reporting by product.',
            imageSrc: '/images/revamp/cbam/certified-1.png',
            imageAlt: 'Product and precursor management visualization',
        },
        {
            index: '02.',
            title: 'Installation Setup & Process Management',
            description: 'Configure and manage information for each manufacturing facility and the production process flow. This plays a key role in improving the accuracy of emission data and process-level emission calculations required for CBAM reports.',
            imageSrc: '/images/revamp/cbam/certified-2.png',
            imageAlt: 'Installation setup and process management visualization',
        },
        {
            index: '03.',
            title: 'Embedded Emissions Calculation & Analysis',
            description: 'Calculate direct and indirect emissions generated during product manufacturing on a per-product basis. The results allow you to analyze carbon intensity, high-emission factors, and areas for improvement by product — useful not only for regulatory compliance but also for developing carbon reduction strategies.',
            imageSrc: '/images/revamp/cbam/certified-3.png',
            imageAlt: 'Embedded emissions calculation and analysis visualization',
        },
        {
            index: '04.',
            title: 'CBAM Report Generation',
            description: 'Automatically generate reports compliant with CBAM regulations based on collected activity data and emission information. Efficiently support European exporters in meeting their CBAM reporting obligations — without complex regulatory interpretation or manual effort.',
            imageSrc: '/images/revamp/cbam/certified-4.png',
            imageAlt: 'CBAM report generation visualization',
        },
    ],
};

const esCopy: CertifiedCopy = {
    sectionAriaLabel: 'Solución CBAM Certificada por LRQA',
    title: 'Solución CBAM Certificada por LRQA',
    subtitle: 'Primera empresa en Corea en obtener una declaración de verificación de conformidad para el Sistema de Comercio de Emisiones de la UE y el Mecanismo de Ajuste en Frontera por Carbono de Lloyd\'s Register Quality Assurance (LRQA)',
    cards: [
        {
            index: '01.',
            title: 'Gestión de Productos y Precursores (Gestión de Códigos CN)',
            description: 'Gestione productos y precursores de forma integrada, y registre y rastree sistemáticamente los códigos CN requeridos para los bienes regulados por CBAM. Esto le permite obtener fácilmente los datos fundamentales necesarios para el análisis y reporte de emisiones de carbono por producto.',
            imageSrc: '/images/revamp/cbam/certified-1.png',
            imageAlt: 'Visualización de gestión de productos y precursores',
        },
        {
            index: '02.',
            title: 'Configuración de Instalaciones y Gestión de Procesos',
            description: 'Configure y gestione la información de cada instalación de fabricación y el flujo del proceso de producción. Esto desempeña un papel clave en mejorar la precisión de los datos de emisiones y los cálculos de emisiones por proceso requeridos para los informes CBAM.',
            imageSrc: '/images/revamp/cbam/certified-2.png',
            imageAlt: 'Visualización de configuración de instalaciones y gestión de procesos',
        },
        {
            index: '03.',
            title: 'Cálculo y Análisis de Emisiones Incorporadas',
            description: 'Calcule las emisiones directas e indirectas generadas durante la fabricación del producto por unidad de producto. Los resultados le permiten analizar la intensidad de carbono, los factores de alta emisión y las áreas de mejora por producto, útiles tanto para el cumplimiento normativo como para desarrollar estrategias de reducción de carbono.',
            imageSrc: '/images/revamp/cbam/certified-3.png',
            imageAlt: 'Visualización del cálculo y análisis de emisiones incorporadas',
        },
        {
            index: '04.',
            title: 'Generación de Informes CBAM',
            description: 'Genere automáticamente informes conformes con las regulaciones CBAM basándose en datos de actividad e información de emisiones recopilados. Apoye eficientemente a los exportadores europeos en el cumplimiento de sus obligaciones de reporte CBAM, sin interpretación normativa compleja ni esfuerzo manual.',
            imageSrc: '/images/revamp/cbam/certified-4.png',
            imageAlt: 'Visualización de generación de informes CBAM',
        },
    ],
};

const copy: Record<AppLocale, CertifiedCopy> = {
    ko: koCopy,
    en: enCopy,
    es: esCopy,
};

export function CbamCertifiedSection({ locale }: CbamCertifiedSectionProps) {
    const text = copy[locale];

    return (
        <AlternatingImageProcessSection
            ariaLabel={text.sectionAriaLabel}
            title={text.title}
            subtitle={text.subtitle}
            cards={text.cards}
        />
    );
}
