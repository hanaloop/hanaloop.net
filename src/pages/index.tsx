import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';
import Hero from '../components/hanaloop/Hero';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero background={{
          imageUrl: useBaseUrl('/images/bg-hero_jungle_coast.jpg'),
        }} 
        header="맞춤형 탄소관리 플랫폼"
        tagline="스코프 1, 2, 3 기업의 니즈에 맞추어 탄소 중립의 여정을 함께합니다."
        button={
          {href: '/demo_request', label: '데모 요청'}
        }
      />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
