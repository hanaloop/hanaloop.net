---
title: "EcoLoop by 하나루프 | 데이터기반 지속가능성 솔루션 | 에코루프"
description: "EcoLoop 데이터기반 지속가능성 솔루션, 데이터를 통해 전략적 인사이트를 제공하는 솔루션, 온실가스 관리 플랫폼 EcoLoop, 데이터 수집 자동화 및 분석, 가치사슬망 관리, 공급망 관리, 스코프3 관리, 중소기업을 위한 지속가능성 솔루션, OpenAPI 제공으로 지속가능성 생태계 가속화"
keywords: "온실가스 관리 플랫폼 EcoLoop, EcoLoop 데이터기반 지속가능성 솔루션, 데이터 자동화 및 분석, 가치사슬망 관리, 공급망 관리, 스코프3 관리, 중소기업을 위한 지속가능성 솔루션, 탄소관리 OpenAPI, Carbon Accounting OpenAPI"

publishedAt: "2022-10-06"

headerBackground:
  imageUrl: "/images/bg-hero_mangrove.jpeg"
  imageDescription: "사진: Mangrove. Termed “blue carbon” ecosystems (BCE), these habitats occupy a relatively small area of the global ocean (∼0.2%), but are major contributors to marine sediment organic carbon burial"
hero:
  header: "솔루션"
  tagline: ["자원은 유한하지만 잠재력은 무한합니다"]
---
import SectionBlock from "../components/theme/SectionBlock";
import { contextualPath } from "../libs/content.util"
import data from "../content/pages/solution.data";

<SectionBlock title='데이터가 보이면 전략이 보입니다!' containerStyle='bg-gray-100'>
  <div className="my-5 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-2">
    {data.benefits.map(benefit => 
    <div className="text-center" key={benefit.title}> 
      <div className="font-extrabold text-lg text-secondary text-left">{benefit.title}</div>
      <div className="h-32 text-gray-600 bg-white text-left border border-secondary-100 rounded-b-md">
        {benefit.description}
      </div>
    </div>
    )}
  </div>
</SectionBlock>

<div className="flex justify-center" >
<img src={contextualPath(siteConfig,"/images/banner-carbon_disclosure.jpeg")} />
</div>
