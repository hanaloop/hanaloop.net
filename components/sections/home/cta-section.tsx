import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import type { AppLocale } from '@/lib/locales';
import { withLocalePath } from '@/lib/locales';

function CtaButton({ href, label, locale }: { href: string; label: string; locale: AppLocale }) {
    return (
        <Link
            href={withLocalePath(locale, href)}
            className="inline-flex h-[36px] lg:h-[50px] w-full items-center justify-center gap-2 lg:gap-4 rounded-full lg:px-6 text-[12px] lg:text-[16px] font-medium leading-none text-white transition hover:opacity-90 lg:w-auto lg:min-w-[170px] lg:px-8"
            style={{ background: 'linear-gradient(90deg, #1FBD7D 0%, #0194FF 100%)' }}
        >
            <span>{label}</span>
            <Image src="/site/icons/ic-arrow-up-right.png" alt="" aria-hidden="true" width={20} height={20} className="h-[20px] w-[20px]" />
        </Link>
    );
}

export async function HomeCtaSection() {
    const t = await getTranslations('HomeCta');
    const locale = (await getLocale()) as AppLocale;

    const mobileHeadingLines = t.raw('mobileHeadingLines') as string[];

    return (
        <section className="px-5 pb-[80px] pt-[72px] md:px-8 md:pb-[100px] md:pt-[90px] lg:px-[64px] lg:pb-[140px] lg:pt-[120px]">
            <div className="mx-auto w-full max-w-[1440px] text-center">
                <p className="text-[16px] lg:font-semibold leading-[1.3] tracking-[-0.01em] text-[#222222] lg:hidden">{t('eyebrow')}</p>
                <h2
                    className="mx-auto mt-5 font-medium leading-[1.06] tracking-[-0.03em] text-[#202124] [font-size:clamp(28px,8vw,72px)] lg:mt-0 lg:tracking-[-0.02em]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, letterSpacing: '-0.25px' }}
                >
                    {mobileHeadingLines.map((line) => (
                        <span key={line} className="block lg:hidden">
                            {line}
                        </span>
                    ))}
                    <span className="hidden lg:inline lg:text-[42px]">{t('heading')}</span>
                </h2>

                <div className="mx-auto mt-12 flex w-full max-w-[720px] flex-col gap-4 flex-row justify-center lg:mt-16 lg:max-w-none lg:gap-6">
                    <CtaButton href="/solution" label={t('solutionLabel')} locale={locale} />
                    <CtaButton href="/partnership" label={t('contactLabel')} locale={locale} />
                </div>
            </div>
        </section>
    );
}
