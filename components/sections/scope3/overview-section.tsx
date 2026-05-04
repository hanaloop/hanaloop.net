import type { AppLocale } from '@/lib/locales';

type Scope3OverviewSectionProps = {
    locale: AppLocale;
};

type OverviewCard = {
    number: string;
    title: string;
    body: string;
};

type OverviewCopy = {
    sectionAriaLabel: string;
    heading: string;
    subheading: string;
    whyTitle: string;
    whySubheading: string;
    imageAlt: string;
    cards: OverviewCard[];
};

const copy: Record<AppLocale, OverviewCopy> = {
    ko: {
        sectionAriaLabel: 'Scope3 필요성 안내',
        heading: 'Scope3 배출량 산정 솔루션',
        subheading: 'Hana.eco의 Scope3 배출량 산정 솔루션을 통해 체계적으로 관리해보세요.',
        whyTitle: 'Scope3 관리, 왜 필요할까요?',
        whySubheading: 'Scope3 관리가 필요한 이유를 확인해보세요.',
        imageAlt: '발전소와 배출가스 배경',
        cards: [
            {
                number: '01.',
                title: '기후규제와 고객사 대응',
                body: 'IFRS S2, TCFD, CDP, SBTI 등 Scope3 배출량 공개를 요구하는 글로벌 공시 표준이 있습니다. 또한 글로벌 고객사는 납품업체의 Scope3 데이터 제공을 요구하고 있습니다.',
            },
            {
                number: '02.',
                title: '그린워싱 방지 및 투명성 강화',
                body: 'Scope3 배출량을 제대로 관리하지 않으면 불완전하거나 왜곡된 정보로 인해 그린워싱 논란이 발생할 수 있습니다. SBTI, CDP 등 글로벌 평가기관은 Scope3의 공개 여부와 정합성을 기업의 투명성 및 신뢰도 평가의 핵심 기준으로 삼고 있습니다.',
            },
            {
                number: '03.',
                title: '가치사슬에서 발생하는 리스크 관리',
                body: 'Scope3는 공급망 내의 간접배출을 포함하므로 다양한 리스크로 이어질 수 있습니다. 기후 리스크에 선제적으로 대응하기 위해서는 가치사슬 전반의 탄소배출 현황을 체계적으로 파악하고 관리하는 것이 중요합니다.',
            },
        ],
    },
    en: {
        sectionAriaLabel: 'Scope3 Why It Matters',
        heading: 'Scope3 Emissions Accounting Solution',
        subheading: 'Manage Scope3 emissions systematically with Hana.eco.',
        whyTitle: 'Why is Scope3 management important?',
        whySubheading: 'See the reasons why Scope3 management matters.',
        imageAlt: 'Power plant with emission clouds',
        cards: [
            {
                number: '01.',
                title: 'Climate regulation and customer response',
                body: 'Global disclosure standards such as IFRS S2, TCFD, CDP, and SBTI require Scope3 emissions disclosure. Global customers also ask suppliers to provide Scope3 data.',
            },
            {
                number: '02.',
                title: 'Prevent greenwashing and improve transparency',
                body: 'Without proper Scope3 management, incomplete or distorted information can trigger greenwashing concerns. Institutions such as SBTI and CDP treat Scope3 disclosure quality as a key signal of transparency and trust.',
            },
            {
                number: '03.',
                title: 'Manage value-chain risks',
                body: 'Scope3 includes indirect emissions across the supply chain and can become a major risk source. Proactive climate risk response requires a systematic understanding and management of emissions across the full value chain.',
            },
        ],
    },
    es: {
        sectionAriaLabel: 'Importancia de Scope3',
        heading: 'Solucion de calculo de emisiones Scope3',
        subheading: 'Gestione las emisiones Scope3 de forma sistematica con Hana.eco.',
        whyTitle: 'Por que es importante gestionar Scope3?',
        whySubheading: 'Revise las razones por las que Scope3 es necesario.',
        imageAlt: 'Planta de energia con emisiones',
        cards: [
            {
                number: '01.',
                title: 'Regulacion climatica y demanda de clientes',
                body: 'Estandares globales como IFRS S2, TCFD, CDP y SBTI exigen divulgacion de Scope3. Los clientes globales tambien solicitan datos Scope3 a sus proveedores.',
            },
            {
                number: '02.',
                title: 'Prevencion del greenwashing y mayor transparencia',
                body: 'Sin una gestion adecuada de Scope3, la informacion incompleta o distorsionada puede generar controversias de greenwashing. Organismos como SBTI y CDP consideran la calidad de divulgacion de Scope3 como criterio clave de confianza.',
            },
            {
                number: '03.',
                title: 'Gestion de riesgos en la cadena de valor',
                body: 'Scope3 incluye emisiones indirectas de la cadena de suministro y puede derivar en multiples riesgos. Para responder de forma proactiva al riesgo climatico, es clave gestionar las emisiones en toda la cadena de valor.',
            },
        ],
    },
};

export function Scope3OverviewSection({ locale }: Scope3OverviewSectionProps) {
    const text = copy[locale];

    return (
        <section className="pt-14 md:pt-20 lg:pt-[116px]" aria-label={text.sectionAriaLabel}>
            <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-11">
                <h2
                    className="text-black"
                    style={{
                        fontSize: 'clamp(34px, calc(24.54px + 1.97vw), 60px)',
                        fontWeight: 500,
                        letterSpacing: '-1px',
                        lineHeight: 1.13,
                    }}
                >
                    {text.heading}
                </h2>

                <p
                    className="mt-5 text-[var(--color-text-subtle)]"
                    style={{
                        fontSize: 'clamp(16px, calc(13.81px + 0.46vw), 21px)',
                        fontWeight: 600,
                        letterSpacing: '-0.5px',
                        lineHeight: 1.48,
                    }}
                >
                    {text.subheading}
                </p>

                <div className="pb-12 pt-18 text-center md:pb-16 md:pt-24 lg:pb-[62px] lg:pt-[210px]">
                    <h3
                        className="text-black"
                        style={{
                            fontSize: 'clamp(34px, 2.5vw, 48px)',
                            fontWeight: 700,
                            letterSpacing: '-1px',
                            lineHeight: 1.2,
                        }}
                    >
                        {text.whyTitle}
                    </h3>
                    <p
                        className="mt-4 text-[var(--color-text-subtle)]"
                        style={{
                            fontSize: 'clamp(20px, 2.5vw, 29px)',
                            fontWeight: 600,
                            letterSpacing: '-0.5px',
                            lineHeight: 1.45,
                        }}
                    >
                        {text.whySubheading}
                    </p>
                </div>
            </div>

            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
                <div
                    role="img"
                    aria-label={text.imageAlt}
                    className="relative lg:h-[695px]"
                    style={{
                        backgroundImage: "url('/images/revamp/scope3-overview-bg.png')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-5 py-20 md:px-8 lg:px-12">
                        <div className="grid w-full items-stretch gap-5 lg:grid-cols-3">
                            {text.cards.map((card) => (
                                <article
                                    key={card.number}
                                    className="h-full rounded-[18px] border border-white/10 bg-[rgba(0,0,0,0.42)] px-7 py-7 backdrop-blur-[2px] lg:min-h-[376px] lg:px-8 lg:py-10"
                                >
                                    <p
                                        style={{
                                            background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontSize: '39px',
                                            fontWeight: 700,
                                            lineHeight: 1,
                                        }}
                                    >
                                        {card.number}
                                    </p>
                                    <h4
                                        className="mt-2"
                                        style={{
                                            background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontSize: '24px',
                                            fontWeight: 700,
                                            letterSpacing: '-0.25px',
                                            lineHeight: 1.33,
                                        }}
                                    >
                                        {card.title}
                                    </h4>
                                    <div className="mt-7 h-px w-full bg-white/60" />
                                    <p
                                        className="mt-7 text-white"
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            letterSpacing: '-0.25px',
                                            lineHeight: 1.68,
                                        }}
                                    >
                                        {card.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
