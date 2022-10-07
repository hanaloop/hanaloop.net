import {useContext} from 'react';
import Head from 'next/head';
import SiteContext from './SiteContext';
import NavBar from './NavBar';
import { useScrollPosition } from '../libs/hooks';
import Link from 'next/link';

type LayoutProps = {
    meta?: any,
    frontMatter?: any,
    children: JSX.Element
}

export default function Layout({ children, meta }: LayoutProps) {

  const pageYOffset = useScrollPosition();

  const siteContext = useContext(SiteContext);

  return (
    <>
      <Head>
        <title>{meta && meta.title || siteContext.title}</title>
        <meta name="description" content={meta && meta.description || siteContext.tagline} />
        <meta name="keywords" content={meta && meta.keywords || siteContext.keywords} />
        <link rel="icon" href={siteContext.favicon} />
      </Head>

      <div className="">
        <NavBar pageYOffset={pageYOffset}/>

        {/* <!-- Content | SideLayout --> */}
        <div className="content ">
            {children}
        </div>

        <footer className="p-4 items-center bg-gray-700 text-gray-50 -z-20">
          <div className="flex">
            {
              siteContext?.themeConfig.footer?.links.map( (link: any, index: number) => {
                return (
                  <div key={index} className="flex-auto">
                    <div className='font-bold'>{link.title}</div>
                    {
                      link.items.map( (linkItem: any) => 
                      <Link href={linkItem.href || linkItem.to} key={linkItem.label} passHref>
                        <a className="block text-gray-400 hover:underline" >{linkItem.label}</a>
                      </Link>)
                    }
                  </div>
                )
              })
            }
          </div>
          <div className="py-2 flex justify-center text-gray-100">
            {siteContext.themeConfig.footer.copyright}
          </div>
        </footer>
      </div>
    </>
  )
}
