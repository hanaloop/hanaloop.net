import { getTranslations } from 'next-intl/server';
import { PlatformHero } from '@/components/features/platform-hero';

export async function Scope3HeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');

    const relatedLinks = [
        { label: tNav('cbam'), href: '/cbam' },
        { label: tNav('pcf'), href: '/pcf' },
        { label: tNav('scope3'), href: '/scope3', current: true },
        { label: tNav('hanaAi'), href: '/hana-ai' },
        { label: tNav('carbonAccounting'), href: '/platform' },
        { label: tNav('climateStrategy'), href: '/solution' },
    ];

    return (
        <PlatformHero
            ariaLabel="Scope 3 Hero"
            backgroundImageUrl="/images/revamp/scope3/hero.png"
            heading={t('heading')}
            description={t('description')}
            navAriaLabel={t('navAriaLabel')}
            relatedLinks={relatedLinks}
        />
    );
}
