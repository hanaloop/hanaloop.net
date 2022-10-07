import { useContext } from 'react';
import type { NextPage } from 'next'
import SiteContext from '../components/SiteContext';
import Link from 'next/link';
import { useScrollPosition } from '../libs/hooks';
import Hero from '../components/Hero';

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 text-blue-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
    heading: "Simple",
    text: "Next-Dev-Portal was designed with simplicity in mind. Leverage your existing markdown authoring knowledge." 
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 text-orange-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
    heading: "Collaborative",
    text: "Based the Document-as-Code philosophy. Let your team collaborate in building the documentation."
  },
  {
    icon: <img className="h-12" src="/images/nextjs-logo.png" />,
    heading: "Based on Nextjs",
    text: "Based on a popular Nextjs React Framework. Fast, with large ecosystem of tools."
  }
]

const Home: NextPage = () => {

  const siteContext = useContext(SiteContext);

  
  return (
    <>
      <Hero background={{
          imageUrl: '/images/bg-hero_jungle_coast.jpg',
        }} 
        header={siteContext.title || 'Welcome'}
        tagline={siteContext.tagline} 
        button={
          {href: '/docs', label: 'Get Started'}
        }
      />

      <div className="my-5 grid lg:grid-cols-3 grid-cols-1 gap-2  ">
        {
          features.map(item => 
            <div className="text-center" key={item.heading}>
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold py-2">{item.heading}</h3>
              <div>{item.text}</div>
            </div>)
        }
      </div>
    </>
  )
}

export default Home;
