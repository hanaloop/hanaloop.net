import { getTranslations } from 'next-intl/server';
import { PlatformHero } from '@/components/features/platform-hero';

export async function PlatformHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');

    const relatedLinks = [
        { label: tNav('carbonAccounting'), href: '/platform', current: true },
        { label: tNav('cbam'), href: '/cbam' },
        { label: tNav('pcf'), href: '/pcf' },
        { label: tNav('supplyChain'), href: '/supply' },
        { label: tNav('hanaAi'), href: '/hana-ai' },
        { label: tNav('cases'), href: '/cases' },
    ];

    return <PlatformHero ariaLabel="Platform Hero" backgroundImageUrl="/site/platform/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
