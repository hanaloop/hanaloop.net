import { DisplayItem } from "../../libs/types"

const termsKo: DisplayItem[] = [
  {
    title: "탄소 어카운팅",
    description: "온실가스 회계"
  },
  {
    title: "배출권거래제",
    description: "온실가스 회계"
  },
];

const terms: DisplayItem[] = [
  {
    title: "Intergovernmental Panel on Climate Change (IPCC)",
    description: "기후 변화에 관한 정부간 협의체",
    sourceUrl: "https://ko.wikipedia.org/wiki/기후_변화에_관한_정부간_협의체"
  },
  {
    title: "Representative Concentration Pathways (RCPs)",
    description: "",
    sourceUrl: ""
  },
  {
    title: "Business as Usual (BAU) / 온실가스 배출 전망치",
    description: "특별한 조치를 취하지 않을 경우 배출될 것으로 예상되는 미래 온실가스 배출전망치로, 감축목표 산정의 기준이 된다. 우리나라는 2015년 파리 기후변화회의를 앞두고 2015년 6월, 2030년 BAU(약 85천만톤) 대비 37%의 온실가스를 줄이겠다는 자발적 감축 목표를 UN 기후변화협약 사무국에 제출했다.",
    source: "환경부",
    sourceUrl: "https://me.go.kr/home/web/dictionary/read.do?pagerOffset=0&maxPageItems=10&maxIndexPages=10&searchKey=%E3%85%82&searchValue=&menuId=10448&orgCd=&condition.createDeptName=%EB%B0%B0%EC%B6%9C&boardMasterId=&dicSeq=8&decorator="
  }
]



module.exports = {
  termsKo: termsKo.sort((a, b) => (a.title.localeCompare(b.title))),
  terms: terms.sort((a, b) => (a.title.localeCompare(b.title)))
}
