import type { ComponentType } from 'react';

// All legacy imports are disabled to fix build errors
const legacyPages = {} satisfies Record<string, ComponentType>;

// Placeholder components for standalone pages
const PlaceholderPage = (props: any) => {
  return <div>Page content temporarily unavailable</div>;
};

const standalonePages = {
  company_profile_request: {
    component: PlaceholderPage,
    title: '회사소개서 요청',
    description: '회사소개서 요청',
  },
  credits: {
    component: PlaceholderPage,
    title: 'Credits',
    description: 'Credits',
  },
  demo_request: {
    component: PlaceholderPage,
    title: '데모 요청',
    description: '데모 요청',
  },
  privacy: {
    component: PlaceholderPage,
    title: '개인정보 처리방침',
    description: '하나루프 개인정보 처리방침',
  },
  recruit_apply: {
    component: PlaceholderPage,
    title: '지원',
    description: '하나루프 채용 지원',
  },
} satisfies Record<
  string,
  {
    component: ComponentType<any>;
    title: string;
    description: string;
  }
>;

// Placeholder component for home page
const PlaceholderHomePage = () => {
  return <div>Home Page - Legacy content disabled</div>;
};

export const homePage = PlaceholderHomePage;
export const marketingPageSlugs = Object.keys(legacyPages);
export const standalonePageSlugs = Object.keys(standalonePages);
export const routePageSlugs = [...marketingPageSlugs, ...standalonePageSlugs];

export function getMarketingPage(slug: string): ComponentType | undefined {
  return legacyPages[slug as keyof typeof legacyPages];
}

export function getStandalonePage(slug: string) {
  return standalonePages[slug as keyof typeof standalonePages];
}
