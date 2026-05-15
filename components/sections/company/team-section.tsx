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
        <section aria-label={t('title')} className="mt-15 lg:mt-30 pb-[72px] pt-[44px] md:pb-[84px] md:pt-0 xl:pb-[92px]">
            <div className="mx-auto w-full max-w-[1440px] md:px-10 xl:px-[108px]">
                <div className="rounded-t-[28px] bg-[#1FBD7D] px-5 pb-[42px] pt-[56px] md:rounded-none md:bg-transparent md:px-0 md:pb-0 md:pt-0">
                    <h2 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:hidden">{t('title')}</h2>

                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        className="company-team-swiper mt-10 overflow-visible md:mt-0 [&_.swiper-pagination]:!static [&_.swiper-pagination]:!mt-[16px] md:[&_.swiper-pagination]:!mt-[18px] [&_.swiper-pagination-bullet]:!mx-[6px] [&_.swiper-pagination-bullet]:!h-[10px] [&_.swiper-pagination-bullet]:!w-[10px] [&_.swiper-pagination-bullet]:!bg-[#D9D9D9] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet-active]:!h-[10px] [&_.swiper-pagination-bullet-active]:!w-[76px] [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-[#D9D9D9]"
                    >
                        {members.map((member) => (
                            <SwiperSlide key={member.name}>
                                <article className="rounded-[28px] bg-[#F0FDFF] px-6 pb-[34px] pt-10 text-center md:px-12 md:pb-12 md:pt-[44px]">
                                    <Image src={member.imageSrc} alt={member.name} width={184} height={184} className="mx-auto h-[184px] w-[184px] rounded-full object-cover" sizes="184px" />

                                    <h3 className="mt-7 inline-block text-gradient-brand [font-size:clamp(21px,calc(27.729px-0.4673vw),26px)] font-semibold leading-[1.2] tracking-[-0.02em]">
                                        {member.name}
                                    </h3>

                                    <p className="mt-3 [font-size:clamp(14px,calc(12.617px+0.3738vw),18px)] font-medium leading-[1.35] tracking-[-0.02em] text-[var(--color-text-subtle)]">{member.role}</p>

                                    <div className="mx-auto mt-5 h-px w-full max-w-[322px] bg-[#9AA3A7] md:mt-6 md:max-w-[460px]" />

                                    <p className="mx-auto mt-5 max-w-[800px] whitespace-pre-line [font-size:clamp(14px,calc(13.309px+0.1869vw),16px)] font-normal leading-[1.7] tracking-[-0.02em] text-[var(--color-text-body)] md:mt-6">{member.bio}</p>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
