import { getTranslations } from 'next-intl/server';
import { PlatformHero } from '@/components/features/platform-hero';

export async function CasesHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');

    const relatedLinks = [
        { label: tNav('carbonAccounting'), href: '/platform' },
        { label: tNav('cbam'), href: '/cbam' },
        { label: tNav('pcf'), href: '/pcf' },
        { label: tNav('supplyChain'), href: '/supply' },
        { label: tNav('hanaAi'), href: '/hana-ai' },
        { label: tNav('cases'), href: '/cases', current: true },
    ];

    return <PlatformHero ariaLabel="Cases Hero" backgroundImageUrl="/site/cases/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
