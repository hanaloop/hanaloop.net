import { getTranslations, getLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';
import { ListTable } from '@/components/features/list-table';
import { getInsightListItems } from '@/lib/insight-utils';

export async function HomeInsightSection() {
    const t = await getTranslations('HomeInsight');
    const locale = (await getLocale()) as AppLocale;
    const items = getInsightListItems(locale);
    const topItems = items.slice(0, 4);
    const insightHref = withLocalePath(locale, '/insight');
    const emptyState =
        locale === 'ko'
            ? {
                  title: '아직 표시할 인사이트가 없습니다.',
                  description: '최신 인사이트 콘텐츠를 준비 중입니다. 잠시 후 다시 확인해 주세요.',
              }
            : locale === 'es'
              ? {
                    title: 'Aún no hay insights para mostrar.',
                    description: 'Estamos preparando nuevo contenido de insights. Por favor, vuelve a revisar pronto.',
                }
              : {
                    title: 'No insights to show yet.',
                    description: 'We are preparing new insight content. Please check back soon.',
                };

    return (
        <section className="px-4 pb-20 pt-16 lg:px-6 lg:pb-28 lg:pt-20">
            <div className="mx-auto w-full max-w-[1920px]">
                <div className="lg:hidden">
                    <div className="mx-auto ">
                        <div className="px-[10px] pb-6 pt-8 text-center">
                            <p className="[font-size:clamp(13px,4vw,15px)] font-medium tracking-[-0.25px]">다양한 탄소중립 인사이트를 확인해보세요.</p>
                            <h3 className="mt-1 [font-size:clamp(28px,5vw,48px)] font-medium leading-[1.15] tracking-[-1px]">Check out Carbon Neutral Insights.</h3>
                        </div>

                        <div className="border-t border-[#545454] px-[10px] py-5 mt-4">
                            <div className="flex items-center justify-between">
                                <h4 className="[font-size:clamp(16px,4vw,20px)] font-medium leading-none">Insight LIST</h4>
                                <Image src="/site/icons/up.png" alt="Expand" width={17} height={9} />
                            </div>
                        </div>

                        {topItems.length > 0 ? (
                            <>
                                {topItems.map((item) => (
                                    <article key={item.id} className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-[#d0d0d0] px-[10px] py-8">
                                        <div className="min-w-0">
                                            <h5 className="[font-size:clamp(14px,4vw,18px)] font-medium leading-[1.3]">
                                                <Link href={item.href} className="hover:underline">
                                                    {item.title}
                                                </Link>
                                            </h5>
                                            <p className="mt-2 [font-size:clamp(14px,4vw,18px)] font-normal leading-none text-[#6a6a6a]">
                                                {item.dateText}, by {item.author}
                                            </p>
                                        </div>
                                        <Link href={item.href} className="block overflow-hidden rounded-[8px]">
                                            <Image src={item.thumbnail} alt={item.title} width={160} height={96} className="h-[96px] w-[96px] object-cover" />
                                        </Link>
                                    </article>
                                ))}

                                <div className="border-t border-[#545454] px-[10px] py-6 text-center">
                                    <Link href={insightHref} className="mx-auto inline-flex h-[44px] min-w-[168px] items-center justify-center gap-2 rounded-full bg-black px-6 text-[14px] font-medium leading-none text-white">
                                        <span>{t('viewMoreLabel')}</span>
                                        <Image src="/site/icons/ic-arrow-up-right.png" alt="" width={16} height={16} />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className="border-t border-[#d0d0d0] px-[10px] py-14 text-center">
                                <p className="[font-size:clamp(16px,4vw,18px)] font-medium leading-[1.4]">{emptyState.title}</p>
                                <p className="mt-3 [font-size:clamp(13px,4vw,15px)] leading-[1.6] text-[#6a6a6a]">{emptyState.description}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden lg:block">
                    <ListTable heading={t('heading')} items={items} itemsPerPage={4} viewMoreHref={insightHref} viewMoreLabel={t('viewMoreLabel')} emptyTitle={emptyState.title} emptyDescription={emptyState.description} />
                </div>
            </div>
        </section>
    );
}
