import { useContext } from 'react';
import type { NextPage } from 'next'
import SiteContext from '../components/SiteContext';
import Link from 'next/link';
import Hero from '../components/Hero';
import SectionBlock from '../components/theme/SectionBlock';

type DisplayItems = {
  icon?: any,
  title: string,
  subtitle?: string
  description?: string
}

// https://icons.getbootstrap.com/
const features: DisplayItems[] = [
  {
    icon: <svg className="h-12 text-orange-600 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 5H7V7H17V5Z" fill="currentColor" /><path d="M7 9H9V11H7V9Z" fill="currentColor" /><path d="M9 13H7V15H9V13Z" fill="currentColor" /><path d="M7 17H9V19H7V17Z" fill="currentColor" /><path d="M13 9H11V11H13V9Z" fill="currentColor" /><path d="M11 13H13V15H11V13Z" fill="currentColor" /><path d="M13 17H11V19H13V17Z" fill="currentColor" /><path d="M15 9H17V11H15V9Z" fill="currentColor" /><path d="M17 13H15V19H17V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z" fill="currentColor" /></svg>,
    title: "탄소 어카운팅",
    description: "에코루프는 기업의 사업활동으로 인해 발생하는 온실가스 배출량과 감축량을 탄소로 환산합니다. 기업의 직접 활동에 따른 직접 배출(스코프1)과 구매한 전기, 가스 등에 따른 간접 배출(스코프2), 가까운 시일 안에 원자재의 생산부터 유통, 폐기까지 모든 가치사슬 상에서 발생하는 배출(스코프3)까지 고려합니다. 데이터 수집은 가능한 자동화, 휴먼오류 방지 등 실무자 편의를 제공합니다." 
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 text-orange-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
    title: "협업",
    description: "에코루프는 기업의 환경안전팀, ESG 전략팀 등 관리자와 실무자, 컨설턴트과 검증심사관과의 원활한 협업을 가능하게 합니다."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 text-orange-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
    title: "전략",
    description: "에코루프는 온실가스 배출량의 전략적 시각화와 통계 모델, AI를 통해 목표를 관리합니다. 경제성 분석에 따른 감축전략 추천 및 실행 상황을 모니터링합니다."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 text-orange-600 " fill="none" viewBox="0 0 16 16" stroke="currentColor">
    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
  </svg>,
    title: "가치사슬 관리",
    description: "공급방으로부터 간접적인 배출 측정"
  }
]

const reasons: DisplayItems[] = [
  {
    title: '환경규제'
  },
  {
    title: '소비자의식'
  },
  {
    title: '에너지가격과 보험료'
  }
]

const Home: NextPage = () => {

  const siteContext = useContext(SiteContext);

  
  return (
    <>
      <Hero background={{
          imageUrl: '/images/bg-hero_jungle_coast.jpg',
        }} 
        header={["자원은 유한하지만", <br key="1" />, "잠재력은 무한합니다"]}
        tagline={siteContext.tagline} 
        button={
          {href: '/docs', label: '에코루프 데모 요청'}
        }
      />

      <div className="px-20 py-10">
        <div className="border-2 border-secondary rounded-lg p-8 my-5 grid lg:grid-cols-4 grid-cols-1 gap-4  ">
          {
            features.map(item => 
              <div className="text-center" key={item.title}>
                <div className="flex  justify-center items-center">
                  <div className="flex ">{item.icon}</div>
                  <h3 className="text-xl font-semibold py-2 ">{item.title}</h3>
                </div>
                <div className="text-xs text-gray-700">{item.description}</div>
              </div>)
          }
        </div>
      </div>

      {/* 에게 기후 전략은 필수입니다 */}
      <SectionBlock title='에게 기후 전략은 필수입니다!' containerStyle='bg-gray-100'>
        <div className="px-20  my-5 grid lg:grid-cols-3 grid-cols-1 gap-4  ">
          {
            reasons.map(item => 
              <div className="border border-green-600 rounded-lg text-center text-gray-700" key={item.title}>
                <div className="flex justify-center ">
                  <div className="flex">{item.icon}</div>
                  <h3 className="text-xl py-2">{item.title}</h3>
                </div>
              </div>)
          }
        </div>
      </SectionBlock>

      {/* 에게 기후 전략은 필수입니다 */}
      <SectionBlock title='자료' containerStyle='bg-gray-100'>
        <div></div>
      </SectionBlock>
    </>
  )
}

export default Home;
