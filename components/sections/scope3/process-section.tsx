import { getTranslations } from 'next-intl/server';
import { AlternatingImageProcessSection } from '@/components/features/alternating-image-process-section';

type Scope3ProcessCard = {
    index: string;
    title: string;
    description: string[];
    imageSrc: string;
    imageAlt: string;
};

export async function Scope3ProcessSection() {
    const t = await getTranslations('Scope3Process');
    const cards = t.raw('cards') as Scope3ProcessCard[];

    return (
        <AlternatingImageProcessSection
            ariaLabel={t('sectionAriaLabel')}
            title={t('title')}
            subtitle={t('subtitle')}
            cards={cards}
            className="pb-16 pt-10 md:py-20 lg:pb-24 lg:pt-24"
        />
    );
}
