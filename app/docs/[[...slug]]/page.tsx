import { UnderConstruction } from '@/components/features/under-construction';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: [] }];
}

export default function Page() {
  return <UnderConstruction />;
}
