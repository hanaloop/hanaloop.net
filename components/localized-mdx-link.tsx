import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { isExternalHref, isStaticAssetPath, type AppLocale, withBasePath, withLocalePath } from '@/lib/locales';

type LocalizedMDXLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: ReactNode;
  href?: string;
  locale: AppLocale;
};

export function LocalizedMDXLink({ children, href, locale, ...props }: LocalizedMDXLinkProps) {
  const target = href ?? '';

  if (!target || isExternalHref(target) || target.startsWith('#') || !target.startsWith('/')) {
    return (
      <a href={target} {...props}>
        {children}
      </a>
    );
  }

  if (isStaticAssetPath(target)) {
    return (
      <a href={withBasePath(target)} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={withLocalePath(locale, target)} {...props}>
      {children}
    </Link>
  );
}
