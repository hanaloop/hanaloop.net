'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations, useLocale } from 'next-intl';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './CollaborationSlider.css';

type CollaborationItem = {
    id: string;
    title: string;
    subtitle: string;
    summary: string;
    points: string[];
    cardImage: string;
    logoImage: string;
};

type CollaborationTranslation = {
    subtitle: string;
    summary: string;
    points: string[];
};

type LoopSlide = {
    item: CollaborationItem;
    sourceIndex: number;
    fixedIndex: number;
};

const staticCollaborations = [
    { id: 'sama', title: 'SamA', cardImage: '/site/home/collaboration/sama-img.png', logoImage: '/site/home/collaboration/sama.png' },
    { id: 'daehoal', title: 'DAEHOAL', cardImage: '/site/home/collaboration/daehoal-img.png', logoImage: '/site/home/collaboration/daehoal.png' },
    { id: 'samyang', title: 'SAMYANG', cardImage: '/site/home/collaboration/samyang-img.png', logoImage: '/site/home/collaboration/samyang.png' },
    { id: 'doosan', title: 'DOOSAN', cardImage: '/site/home/collaboration/doosan-img.png', logoImage: '/site/home/collaboration/doosan.png' },
] as const;

function makeSlides(collaborations: CollaborationItem[], sourceIndices: number[]): LoopSlide[] {
    return sourceIndices.map((sourceIndex, fixedIndex) => ({
        item: collaborations[sourceIndex],
        sourceIndex,
        fixedIndex,
    }));
}

export function HomeCollaborationSection() {
    const t = useTranslations('HomeCollaboration');
    const locale = useLocale() as AppLocale;
    const collaborationTranslations = t.raw('collaborations') as CollaborationTranslation[];

    const collaborations: CollaborationItem[] = staticCollaborations.map((item, i) => ({
        ...item,
        subtitle: collaborationTranslations[i]?.subtitle ?? '',
        summary: collaborationTranslations[i]?.summary ?? '',
        points: collaborationTranslations[i]?.points ?? [],
    }));

    const cardSwiperRef = useRef<SwiperType | null>(null);
    const [viewportMode, setViewportMode] = useState<'mobile' | 'lg' | 'desktop'>('desktop');
    const [activeIndex, setActiveIndex] = useState(3);

    const desktopSlides = useMemo(() => makeSlides(collaborations, [0, 1, 2, 3, 0, 1, 2]), [collaborations]);
    const mobileSlides = useMemo(() => makeSlides(collaborations, [0, 1, 2, 3]), [collaborations]);
    const lgSlides = useMemo(() => makeSlides(collaborations, [0, 1, 2, 3, 0]), [collaborations]);

    const visibleSlides = useMemo(() => {
        if (viewportMode === 'mobile') return mobileSlides;
        if (viewportMode === 'lg') return lgSlides;
        return desktopSlides;
    }, [desktopSlides, lgSlides, mobileSlides, viewportMode]);

    const centerIndex = viewportMode === 'mobile' ? 1 : viewportMode === 'lg' ? 2 : 3;

    useEffect(() => {
        const onResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setViewportMode('mobile');
                return;
            }
            if (width < 1280) {
                setViewportMode('lg');
                return;
            }
            setViewportMode('desktop');
        };

        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        setActiveIndex(centerIndex);
        cardSwiperRef.current?.slideTo(centerIndex);
    }, [centerIndex]);

    const handleCardSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex;
        setActiveIndex(currentIndex);
    };

    const handleLogoClick = (targetFixedIndex: number) => {
        const cardSwiper = cardSwiperRef.current;
        if (!cardSwiper) {
            return;
        }

        if (cardSwiper.activeIndex !== targetFixedIndex) {
            cardSwiper.slideTo(targetFixedIndex);
        }
    };

    return (
        <section className="home-collaboration-section px-5 pb-12 pt-10 md:px-8 md:pb-16 md:pt-16 lg:px-[64px] lg:pb-20 lg:pt-18 overflow-hidden">
            <div className="mx-auto w-full max-w-[1440px]">
                <div className="px-11 mx-auto text-center lg:text-left">
                    <div className="mb-5 flex justify-center lg:hidden">
                        <span className="home-collaboration-badge">{t('badge')}</span>
                    </div>
                    <h2 className="mx-auto max-w-[680px] font-medium leading-[1.14] tracking-[-0.02em] text-black [font-size:clamp(22px,calc(13.01px+2.43vw),48px)] lg:mx-0 lg:text-left">
                        {(t.raw('titleLines') as string[]).map((line: string) => (
                            <span key={line} className="block whitespace-nowrap">{line}</span>
                        ))}
                    </h2>
                    <p className="mx-auto mt-4 max-w-[680px] font-medium leading-[1.5] text-[var(--color-text-eyebrow)] lg:mx-0 [font-size:clamp(13px,calc(7.12px+1.59vw),30px)]">{t('description')}</p>
                </div>

                <div className="collaboration-center-stack">
                    <div className="mt-10 lg:mt-16">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            className="collaboration-card-swiper"
                            initialSlide={centerIndex}
                            centeredSlides
                            slidesPerView="auto"
                            spaceBetween={viewportMode === 'mobile' ? -28 : viewportMode === 'lg' ? -60 : -90}
                            effect="coverflow"
                            pagination={{ clickable: true }}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 90,
                                modifier: 0.6,
                                slideShadows: false,
                            }}
                            onSwiper={(swiper) => {
                                cardSwiperRef.current = swiper;
                                setActiveIndex(swiper.activeIndex);
                            }}
                            onSlideChange={handleCardSlideChange}
                        >
                            {visibleSlides.map((slide) => (
                                <SwiperSlide key={`card-${slide.fixedIndex}-${slide.item.id}`}>
                                    <article className="collaboration-card">
                                        <Image src={slide.item.cardImage} alt={slide.item.title} fill className="collaboration-card-bg" sizes="(max-width: 1024px) 82vw, 420px" />
                                        <div className="collaboration-card-overlay" />
                                        <div className="collaboration-card-content">
                                            <Image src={slide.item.logoImage} alt={`${slide.item.title} logo`} width={110} height={34} className="collaboration-card-logo" />
                                            <p className="collaboration-card-subtitle">{slide.item.subtitle}</p>
                                            <div className="collaboration-card-copy">
                                                <p className="collaboration-card-summary">{slide.item.summary}</p>
                                                {slide.item.points.map((point) => (
                                                    <p key={`${slide.fixedIndex}-${point}`} className="collaboration-card-point">
                                                        {point}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="mt-3 lg:mt-14">
                        <div className="collaboration-logo-strip" role="tablist" aria-label="Collaboration logos">
                            {visibleSlides.map((slide) => {
                                const isActive = activeIndex === slide.fixedIndex;
                                return (
                                    <button
                                        key={`logo-${slide.fixedIndex}-${slide.item.id}`}
                                        type="button"
                                        className={`collaboration-logo-button${isActive ? ' is-active' : ''}`}
                                        onClick={() => handleLogoClick(slide.fixedIndex)}
                                        aria-label={`${slide.item.title} slide`}
                                        aria-selected={isActive}
                                        role="tab"
                                    >
                                        <Image src={slide.item.logoImage} alt={slide.item.title} width={148} height={34} className="collaboration-logo-image h-6 w-auto" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mt-18 flex justify-center">
                        <div className="collaboration-cta-group">
                            <Link href={withLocalePath(locale, '/partnership')} className="collaboration-cta-text [font-size:clamp(15px,calc(13.27px+0.47vw),20px)]">
                                <span>{t('viewMore')}</span>
                            </Link>
                            <Link href={withLocalePath(locale, '/partnership')} className="collaboration-cta-arrow" aria-label="Open collaboration">
                                <Image src="/site/icons/ic-arrow-right-black.png" alt="" aria-hidden="true" width={20} height={20} className="h-4 w-4 shrink-0 lg:h-5 lg:w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
