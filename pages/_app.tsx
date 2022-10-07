import '../styles/globals.css'
import '../styles/prism.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import SiteContext from '../components/SiteContext'
import * as siteConfig from '../next-portal.config'

const members = require ('../content/members.json');
const sitContext = { ...siteConfig, authors: members };

function MyApp({ Component, pageProps }: AppProps & { pageProps: any }) {

  return (
    <SiteContext.Provider value={sitContext}>
      <Layout meta={pageProps?.frontMatter}>
        <Component {...pageProps} />  
      </Layout>
    </SiteContext.Provider>
  )
}

export default MyApp
