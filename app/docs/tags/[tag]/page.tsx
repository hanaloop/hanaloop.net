import { UnderConstruction } from '@/components/features/under-construction';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ tag: '__placeholder__' }];
}

export default function Page() {
  return <UnderConstruction />;
}
