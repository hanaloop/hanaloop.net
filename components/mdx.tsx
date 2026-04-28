import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Children, Fragment, isValidElement, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import IFrame from '@/src/components/IFrame';
import CBAMBanner from '@/src/components/theme/CBAMBanner';
import CaptionedImage from '@/src/components/theme/CaptionedImage';
import SectionBlock from '@/src/components/theme/SectionBlock';
import { withBasePath } from '@/lib/locales';

function flattenTableNodes(children: ReactNode): ReactNode[] {
  const nodes = Children.toArray(children);
  const flattened: ReactNode[] = [];

  for (const node of nodes) {
    if (isValidElement(node) && node.type === Fragment) {
      flattened.push(...flattenTableNodes((node.props as { children?: ReactNode }).children));
      continue;
    }

    flattened.push(node);
  }

  return flattened;
}

function normalizeTableChildren(children: ReactNode) {
  const nodes = flattenTableNodes(children);
  const normalized: ReactNode[] = [];
  let pendingRows: ReactNode[] = [];

  const flushPendingRows = () => {
    if (pendingRows.length === 0) return;
    normalized.push(<tbody key={`tbody-${normalized.length}`}>{pendingRows}</tbody>);
    pendingRows = [];
  };

  for (const node of nodes) {
    if (isValidElement(node) && node.type === 'tbody') {
      flushPendingRows();
      normalized.push(node);
      continue;
    }

    if (isValidElement(node) && node.type === 'tr') {
      pendingRows.push(node);
      continue;
    }

    flushPendingRows();
    normalized.push(node);
  }

  flushPendingRows();
  return normalized;
}

function normalizeBlockquoteChildren(children: ReactNode) {
  return Children.map(children, (node, index) => {
    if (!isValidElement(node) || node.type !== 'p') return node;

    const paragraphChildren = flattenTableNodes((node.props as { children?: ReactNode }).children);
    const hasBlockChild = paragraphChildren.some(
      (child) =>
        isValidElement(child) &&
        typeof child.type === 'string' &&
        ['div', 'table', 'section', 'article', 'blockquote', 'ul', 'ol', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(child.type),
    );

    if (!hasBlockChild) return node;

    return (
      <div key={`blockquote-block-${index}`} className="space-y-3">
        {paragraphChildren}
      </div>
    );
  });
}

function normalizeParagraphChildren(children: ReactNode) {
  const nodes = flattenTableNodes(children);
  const hasBlockChild = nodes.some(
    (child) =>
      isValidElement(child) &&
      typeof child.type === 'string' &&
      ['div', 'table', 'section', 'article', 'blockquote', 'ul', 'ol', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(child.type),
  );

  return {
    hasBlockChild,
    nodes,
  };
}

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    IFrame,
    CBAMBanner,
    CaptionedImage,
    SectionBlock,
    p: ({ children, ...props }) => {
      const { hasBlockChild, nodes } = normalizeParagraphChildren(children);
      if (hasBlockChild) {
        return <div {...props}>{nodes}</div>;
      }

      return <p {...props}>{children}</p>;
    },
    table: ({ children, ...props }) => <table {...props}>{normalizeTableChildren(children)}</table>,
    tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
    blockquote: ({ children, ...props }) => <blockquote {...props}>{normalizeBlockquoteChildren(children)}</blockquote>,
    img: ({ src, ...props }: ComponentPropsWithoutRef<'img'>) => (
      <img src={typeof src === 'string' ? withBasePath(src) : src} {...props} />
    ),
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
