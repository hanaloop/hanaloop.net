import type { AppLocale } from '@/lib/locales';

export type MenuItem = {
    label: string;
    href: string;
    external?: boolean;
};

export type MenuGroup = {
    label: string;
    items: MenuItem[];
};

export function buildMenus(locale: AppLocale, t: (key: string) => string): MenuGroup[] {
    return [
        {
            label: t('platform'),
            items: [
                { label: t('items.CBAM'), href: '/cbam' },
                { label: t('items.ProductCarbonFootprint'), href: '/pcf' },
                { label: t('items.Scope3'), href: '/scope3' },
                { label: t('items.HanaecoAI'), href: '/hana-ai' },
                { label: t('items.CarbonAccounting'), href: '/platform' },
                { label: t('items.ClimateManagement'), href: '/solution' },
            ],
        },
        {
            label: t('insight'),
            items: [
                { label: t('items.Insight'), href: '/insight' },
                { label: t('items.Blog'), href: '/blog' },
            ],
        },
        {
            label: t('about'),
            items: [
                { label: t('items.Partnership'), href: '/partnership' },
                { label: t('items.Company'), href: '/company' },
                { label: t('items.Recruit'), href: '/recruit' },
            ],
        },
    ];
}
