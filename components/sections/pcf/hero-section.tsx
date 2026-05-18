import { getTranslations } from 'next-intl/server';
import { PlatformHero } from '@/components/features/platform-hero';

export async function PcfHeroSection() {
    const t = await getTranslations('PlatformHero');
    const tNav = await getTranslations('PlatformNav');

    const relatedLinks = [
        { label: tNav('carbonAccounting'), href: '/platform' },
        { label: tNav('cbam'), href: '/cbam' },
        { label: tNav('pcf'), href: '/pcf', current: true },
        { label: tNav('supplyChain'), href: '/supply' },
        { label: tNav('hanaAi'), href: '/hana-ai' },
        { label: tNav('cases'), href: '/cases' },
    ];

    return <PlatformHero ariaLabel="PCF Hero" backgroundImageUrl="/site/pcf/hero.png" heading={t('heading')} description={t('description')} navAriaLabel={t('navAriaLabel')} relatedLinks={relatedLinks} />;
}
