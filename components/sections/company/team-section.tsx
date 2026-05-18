'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/pagination';

type TeamMember = {
    name: string;
    role: string;
    bio: string;
    imageSrc: string;
};

export function CompanyTeamSection() {
    const t = useTranslations('CompanyTeam');
    const members = t.raw('members') as TeamMember[];

    return (
        <section aria-label={t('title')} className="mt-15 lg:mt-30 pt-18 pb-16 md:pb-30 md:pt-30 xl:pb-[92px] bg-[#1FBD7D] rounded-t-[40px]">
            <div className="mx-auto w-full px-4 lg:px-0">
                <div className="rounded-t-[28px] bg-[#1FBD7D] md:rounded-none md:bg-transparent">
                    <h2 className="text-left [font-size:clamp(24px,calc(21.234px+0.7477vw),32px)] font-semibold leading-[1.1] tracking-[-0.3px] text-white md:text-center md:tracking-normal mb-10">{t('title')}</h2>

                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        centeredSlides
                        loop
                        breakpoints={{
                            1024: {
                                slidesPerView: 1.45,
                                spaceBetween: 24,
                            },
                            1280: {
                                slidesPerView: 1.7,
                                spaceBetween: 28,
                            },
                        }}
                        pagination={{ clickable: true }}
                        className="company-team-swiper mt-10 overflow-visible md:mt-0 [&_.swiper-pagination]:!static [&_.swiper-pagination]:!mt-[16px] md:[&_.swiper-pagination]:!mt-[18px] [&_.swiper-pagination-bullet]:!mx-[6px] [&_.swiper-pagination-bullet]:!h-[10px] [&_.swiper-pagination-bullet]:!w-[10px] [&_.swiper-pagination-bullet]:!bg-[#FFFFFF] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet-active]:!h-[10px] [&_.swiper-pagination-bullet-active]:!w-[76px] [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-[#FFFFFF]"
                    >
                        {members.map((member) => (
                            <SwiperSlide key={member.name}>
                                <article className="rounded-[28px] bg-[#F0FDFF] px-6 pb-[34px] pt-10 text-center md:px-12 md:pb-12 md:pt-[44px]">
                                    <Image src={member.imageSrc} alt={member.name} width={184} height={184} className="mx-auto h-[184px] w-[184px] rounded-full object-cover" sizes="184px" />

                                    <h3 className="mt-7 inline-block text-gradient-brand [font-size:clamp(21px,calc(27.729px-0.4673vw),26px)] font-semibold leading-[1.2] tracking-[-0.02em]">{member.name}</h3>

                                    <p className="mt-3 [font-size:clamp(14px,calc(12.617px+0.3738vw),18px)] font-medium leading-[1.35] tracking-[-0.02em] text-[var(--color-text-subtle)]">{member.role}</p>

                                    <div className="mx-auto mt-5 h-px w-full max-w-[322px] bg-[#9AA3A7] md:mt-6 md:max-w-[460px]" />

                                    <p className="mx-auto mt-5 max-w-[800px] whitespace-pre-line [font-size:clamp(14px,calc(13.309px+0.1869vw),16px)] font-normal leading-[1.7] tracking-[-0.02em] text-[var(--color-text-body)] md:mt-6 h-[120px] md:h-[90px]">
                                        {member.bio}
                                    </p>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
