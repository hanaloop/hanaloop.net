export const siteConfig = {
  title: 'HanaLoop',
  tagline: 'Carbon Management and Climate Compliance Platform',
  url: 'https://www.hanaloop.com',
  image: '/images/hanaloop-social-card_ko.jpg',
};

export function getHomeMetadataText() {
  return {
    title: siteConfig.title,
    description: siteConfig.tagline,
  };
}
