import { getTranslations } from 'next-intl/server';

type OverviewCard = {
    number: string;
    title: string;
    body: string;
};

export async function Scope3OverviewSection() {
    const t = await getTranslations('Scope3Overview');
    const cards = t.raw('cards') as OverviewCard[];

    return (
        <section className="pt-14 md:pt-20 lg:pt-[116px]" aria-label={t('sectionAriaLabel')}>
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
                    {t('heading')}
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
                    {t('subheading')}
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
                        {t('whyTitle')}
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
                        {t('whySubheading')}
                    </p>
                </div>
            </div>

            <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
                <div
                    role="img"
                    aria-label={t('imageAlt')}
                    className="relative lg:h-[695px]"
                    style={{
                        backgroundImage: "url('/site/scope3/overview-bg.png')",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="mx-auto flex h-full w-full max-w-[1440px] items-center px-5 py-20 md:px-8 lg:px-12">
                        <div className="grid w-full items-stretch gap-5 lg:grid-cols-3">
                            {cards.map((card) => (
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
