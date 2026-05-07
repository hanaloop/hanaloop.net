import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import {isLocale} from '@/lib/locales';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return children;
}
