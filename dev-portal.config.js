/**
 * Inspired by Docusaurus' config
 */
const config = {
    title: 'My Dev Portal',
    tagline: 'Developing is fun',
    url: 'https://your-portal-site.com',
    baseUrl: '/',
    favicon: '/ecoloop-ico.png',
    organizationName: 'hanaloop', // Usually your GitHub org/user name.
    projectName: 'next-dev-portal', // Usually your repo name.
    projectImage: 'https://images.unsplash.com/photo-1616408826319-f42dd3cefcad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80',

    contentRoot: 'content',
    contentTypes: ['blog', 'docs', 'products'],
 
    editUrl: 'https://gitlab.com/hanaloop/projects/tools/next-dev-portal/-/edit/main/',

    themeConfig:
    ({
      navbar: {
        logo: {
          alt: 'My Portal Logo',
          src: '/images/logo.png',
          // component: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
        },
        items: [
          {
            to: '/about', 
            label: 'About', 
            position: 'left'
          },
          {
            type: 'docs',
            docId: '',
            label: 'Documentation',
            position: 'left',
          },
          {
            to: '/products', 
            label: 'Products',
            position: 'left',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://gitlab.com/hanaloop/next-dev-portal',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/creasoft',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Search',
                to: '/search',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/creasoftdev/fundamenty',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy',
                to: '/privacy',
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hanaloop Inc. Built with Next-Dev-Portal.`,
      }
    }),
}

module.exports = config;
