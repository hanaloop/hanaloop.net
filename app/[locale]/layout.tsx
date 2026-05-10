import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {setRequestLocale, getMessages} from 'next-intl/server';
import type {ReactNode} from 'react';
import {isLocale, locales} from '@/lib/locales';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return <NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider>;
}
