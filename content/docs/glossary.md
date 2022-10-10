---
title: "용어"
description: "환경 용어"
publishedAt: "2022-10-10"
summary: "환경 용어"
author: "hykim"
tags:
  - 용어
image: /images/bg-hero_book.jpeg
---

import data from "../content/docs/glossary.data";

## 환경 관련 용어

<div className="[word-break:keep-all]">

<div className="text-left space-y-4 text-sm ">
{data.termsKo.map(term => 
  <div className="flex align-top bg-gray-100 border hover:border-lime-600" key={term.title}>
    <div className="p-2 flex-initial w-64">{term.title}</div>
    <div className="p-2 flex-1 bg-white">{term.description}
      {term.source && <span className="text-xs">
      [출저: <a href={term.sourceUrl}>{term.source}</a>]
      </span>} 
    </div>
  </div>
)}
</div>

<div className="mt-4 text-left space-y-4 text-sm ">
{data.terms.map(term => 
  <div className="flex align-top bg-gray-100 border hover:border-lime-600" key={term.title}>
    <div className="p-2 flex-initial w-64">{term.title}</div>
    <div className="p-2 flex-1 bg-white">{term.description}
      {term.source && <span className="text-xs">
      [출저: <a href={term.sourceUrl}>{term.source}</a>]
      </span>} 
    </div>
  </div>
)}
</div>

</div>
