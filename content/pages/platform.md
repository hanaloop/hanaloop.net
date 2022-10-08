---
title: "에코르프 플랫폼"
description: "온시라스 관리 플랫폼 에코르프"
keywords: "온시라스 관리, 탄소 관리"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/bg-hero_platform.jpeg"
hero:
  header: "EcoLoop 플랫폼"
  tagline: "데이터기반 지속가능성(탄소 및 오염물질 관리)"
---
import SectionBlock from "../components/theme/SectionBlock";
import data from "../content/pages/platform.data";


<SectionBlock title='데이터가 보이면 감축이 보인다!' containerStyle='bg-gray-100'>
<div className="text-left">
  인류가 대면하고 있는 가장 큰 위기, 기후변화, 그의 주범인 온실가스, 
  하지만 눈에 보이지 않는 온실가스를, 저희 하나루프의 SaaS형 플랫폼 에코루프가 보여드리겠습니다.

  <span className="text-2xl text-primary-600 italic">“측정할 수 없으면 관리할 수 없고, 
  관리할 수 없으면 개선시킬 수도 없다”</span>
  <span className="text-sm text-gray-600 whitespace-nowrap">- 피터 드러커 (Peter Drucker)</span>

  SaaS형 온실가스 관리 플랫폼 에코루프는 온실가스 배출활동을 관리하며, 배출량을 계산하고 분석합니다. 에코루프를 통해 기관, 기업은 기후관련 규제에 대응하고, 기후 리스크를 줄이며, 에너지 소비를 줄이고, ESG 포트폴리오를 향상시킬 수 있습니다. 궁극적으로 기관, 기업은 탄소발자국을 줄이며, 기후위기 완화에 기여할 수 있습니다.
  
  <div className="flex justify-center ">
    <img className="w-96 " src="/images/ecoloop-markitecture.png" />
  </div>
</div>
</SectionBlock>

<SectionBlock title='EcoLoop Features' >
<div className="text-left space-y-2">
  {data.features.map(feature => 
  <div className="border-l border-l-4 pl-2 border-primary" key={feature.title}>
    <h3 className="el-heading inline">{feature.title}</h3>
    <span className="ml-1 inline text-gray-600 text-sm">{feature.subtitle}</span>
    <div className="text-sm text-gray-600">
      {feature.description}
    </div>
  </div>
  )}
</div>
</SectionBlock>

<SectionBlock title='기대 효과' containerStyle='bg-gray-100'>
<div className="text-left flex justify-center">
  <div className="space-y-2 ">
  {data.benefits.map(benefit => 
  <div className="block relative w-[38rem] "> 
    <div className="p-2 min-w-0 rounded-l-full rounded-r-lg bg-primary-600 flex  z-50 items-center">
      <div className="pl-24 text-2xl w-64 flex-none text-white ">{benefit.title}</div>
      <div className="flex-1 rounded-md bg-white text-left">
        {benefit.description}
      </div>
    </div>
    <div className="absolute left-1 top-1 w-20 h-20 rounded-full bg-secondary text-4xl font-bold text-gray-50 items-center inline-block align-middle text-center z-0"><div>{benefit.subtitle}</div></div>
  </div>
  )}
  </div>
</div>
</SectionBlock>

