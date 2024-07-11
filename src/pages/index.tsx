import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import SectionBlock from "../components/theme/SectionBlock";
import useGlobalData from "@docusaurus/useGlobalData";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import ArrowIcon from "../../static/svg/Arrow.svg";
import { directory } from "../data/index_ko.data";
import StrategyIcon from "../../static/svg/Strategy.svg";
import ChartIcon from "../../static/svg/Chart.svg";
import Chain from "../../static/svg/Chain.svg";
import Board from "../../static/svg/Board.svg";
import ClipboardCheckIcon from "../../static/svg/ClipboardCheck.svg"; 
import FileCheckIcon from "../../static/svg/FileCheck.svg"; 
import ListCheckIcon from "../../static/svg/ListCheck.svg"; 
import LayerIcon from "../../static/svg/Layer.svg"; 
import SearchIcon from "../../static/svg/Search.svg"; 
import GlobeIcon from "../../static/svg/Globe.svg"; 
import FlagIcon from "../../static/svg/Flag.svg"; 
import SproutIcon from "../../static/svg/Sprout.svg"; 
import HandshakeIcon from "../../static/svg/Handshake.svg"; 
// import { customers, elements, features, partners, reasons } from '../data/index.data';

// let announcement: any | undefined;
const announcement = {
  initialOpen: true,
  title: "2023년 12월 '하나루프와 기후 인사이트 수요일' 등록하기",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSev-ubKKT32aD-gqLHy0k56xyv-iBwiA5Z6jnMtqekdYmIcdA/viewform",
  image: "/images/blog/HanaLoop_climate_insight_wednesdays.jpg",
  dimensions: `w-[500px] md:w-[600px]`,
};

const section2_svgs = {
  section2_svg_1 : <ClipboardCheckIcon/>,
  section2_svg_2 : <FileCheckIcon/>,
  section2_svg_3 : <ListCheckIcon/>,
  section2_svg_4: <LayerIcon />,
  section2_svg_5: <SearchIcon />,
}

const section3_svgs = {
  section3_svg_1: <GlobeIcon />,
  section3_svg_2: <FlagIcon />,
  section3_svg_3: <HandshakeIcon />,
  section3_svg_4: <SproutIcon />,
};

const section5_svgs = {
  section5_svg_1: <ChartIcon />,
  section5_svg_2: <StrategyIcon />,
  section5_svg_3: <Board />,
  section5_svg_4: <Chain />,
};

export default function Home(): JSX.Element {
  const { siteConfig, i18n } = useDocusaurusContext();
  const globalData = useGlobalData();

  // console.log(JSON.stringify(globalData, null, 2));
  const data = require(`../data/index_${i18n.currentLocale}.data`);

  return (
    <Layout
      wrapperClassName="text-black dark:text-red-400"
      title={`${siteConfig.title} | ${translate({
        message: "index.meta_title",
      })}`}
      description={translate({ message: "index.meta_description" })}
    >
      <main>
        <div className={styles.mainBanner}>
          <img src="/images/bg-hero-main.jpg" className="w-full h-full " />
        </div>
        <div className="w-screen h-[1500px] absolute top-0 left-0  -z-50"></div>
        {/* 1. Hero Section */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <div className="w-screen h-screen flex justify-center items-center ">
            <div className="lg:w-[80%] flex gap-10 lg:flex-row flex-col w-[70%]">
              <div className="px-1 flex flex-col items-start ">
                <div className="font-bold flex flex-col gap-3 lg:text-left text-center">
                  <p className="text-2xl md:text-3xl font-bold lg:text-4xl text-white">
                    기업활동 중 발생하는 온실가스
                    <br />{" "}
                    <span className="text-[#0094ff] font-bold">
                      <a href="https://www.hana.eco/">하나에코</a>
                    </span>
                    로 간편하게 관리하세요!
                  </p>
                  <p className="text-white whitespace-normal break-keep">
                    오늘날 체계적인 탄소 관리는 기업의 경쟁력입니다.<br/>
                    EU CBAM, IFRS ISSB S1 S2 규제, EU 배터리 규제, ESG 공시 의무 등
                    지속적으로 강화되고 있는 국내외 기후 규제와 공시 의무를 신속히 준수하며
                    에너지 비용을 감축하고 기후 리스크를 완화시킬 수 있습니다.
                  </p>
                </div>
                <div className="flex gap-3 justify-center my-8 w-full lg:justify-start">
                  <button className="hover:no-underline  rounded-lg px-3 py-3 bg-[#0094ff] ">
                    <Link href={data.content.section1_href}>
                      <a>{data.content.section1_link1}</a>
                    </Link>
                  </button>
                  <button className=" rounded-lg px-3 py-3 bg-[#0094ff] ">
                    <Link href={data.content.section1_href}>
                      <a>{data.content.section1_link2}</a>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-col text-left shadow-lg rounded-md items-center">
                  <div className="">
                    <img src="https://www.hana.eco/images/hanaeco_dashboard1.png" width={800} height={500} alt="hanaeco" className="rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. PARTNERS Section */}
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 80 }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={data.content.section6_title}>
            <div className="">
              <div className="text-center items-center w-full flex flex-col gap-4 justify-center">
                {/* CUSTOMERS */}
                <div className="flex justify-center gap-6 flex-wrap">
                  {data.customers.map((item) => (
                    <span className="group flex justify-center" key={item.title}>
                      <div className=" flex justify-center items-center border border-gray-200 p-3 rounded-lg shadow-sm md:w-[100px] md:h-[70px] w-[80px] h-[45px]">
                        <Link href={item.sourceUrl!}>
                          <a target="_blank">
                            <img className="lg:h-7 duration-200 h-5" src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                          </a>
                        </Link>
                      </div>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-50 border-lime-700 hidden group-hover:block absolute tooltip-text">
                        {item.description}
                      </span>
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-6 flex-wrap">
                  {data.partners.map((item) => (
                    <div className="group" key={item.title}>
                      <div className=" flex justify-center items-center border border-gray-200 p-3 rounded-lg shadow-sm md:w-[100px] md:h-[70px] w-[80px] h-[45px]">
                        <Link href={item.sourceUrl!}>
                          <a target="_blank">
                            <img className="h-8 rounded-md duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                          </a>
                        </Link>
                      </div>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-6 flex-wrap">
                  {data.programs.map((item) => (
                    <div className="group" key={item.title}>
                      <div className=" flex justify-center items-center border border-gray-200 p-3 rounded-lg shadow-sm md:w-[100px] md:h-[70px] w-[80px] h-[45px]">
                        <Link href={item.sourceUrl!}>
                          <a target="_blank">
                            <img className="h-8 rounded-md duration-200" src={useBaseUrl(item.imageUrl!)} alt={item.title} />
                          </a>
                        </Link>
                      </div>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-xs">{data.content.section2_subtitle}</div>
              </div>
            </div>
          </SectionBlock>
        </motion.div>
        {/* 2 */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <div className="w-screen flex justify-center">
            <SectionBlock title={data.content.section2_title}>
              <div className="px-10 ">
                <div className="lg:grid lg:grid-cols-2 gap-10 ">
                  {data.elements.map((item, ndx) => {
                    const svgKey = `section3_svg_${ndx + 1}`;
                    const SvgComponent = section3_svgs[svgKey];

                    const lines = item.description as string[];
                    return (
                      <div
                        className="group rounded-xl hover:border-primary-700 mb-4 py-7 bg-gray-50 shadow-sm lg:h-[300px] flex justify-center"
                        key={ndx}
                      >
                        <div className="mb-2 flex flex-col justify-start items-start text-left gap-3 h-full w-[80%]">
                          <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                          <div className="lg:text-xl text-lg font-bold">
                            <div className="flex mr-1 items-baseline group-hover:text-primary-700 justify-center">
                              <h3 className="py-2 inline ">{item.title}</h3>
                            </div>
                          </div>
                          <div className="[word-break:keep-all] w-full">
                            <h4 className="pb-2 text-md font-semibold text-gray-500 text-left">{item.subtitle}</h4>
                            <ul className="list-none lg:text-md text-sm text-left">
                              {lines.map((line, ndx: number) => (
                                <li className="flex items-center gap-2" key={ndx}><div className="w-1 h-1 rounded-full bg-blue-500"></div><div>{line}</div></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionBlock>
          </div>
        </motion.div>

        <div className="w-screen bg-gray-50 justify-center flex">
          <SectionBlock title={data.content.section3_title}>
            <div className="px-10">
              <div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  {/* <h3 className="text-5xl font-bold text-black mb-8">
                  Feature Heading
                </h3> */}
                </motion.div>
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                className="flex justify-center"
              >
                {/* <div className="lg:grid lg:grid-cols-2 gap-10 "> */}
                <div className="flex flex-wrap gap-10 justify-center w-[85%]">
                  {data.elements_2.map((item, ndx) => {
                    const svgKey = `section2_svg_${ndx + 1}`;
                    const SvgComponent = section2_svgs[svgKey];

                    const lines = item.description as string[];
                    return (
                      <div
                        className="group rounded-xl hover:border-primary-700 mb-4 py-7 bg-white shadow-sm lg:h-[300px] w-[400px] flex justify-center"
                        key={ndx}
                      >
                        <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full w-[80%]">
                          <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                          <div className="lg:text-xl text-lg font-bold">
                            <div className="flex mr-1 items-baseline group-hover:text-primary-700 justify-center">
                              <h3 className="py-2 inline">{item.title}</h3>
                            </div>
                          </div>
                          <div className="[word-break:keep-all] w-full">
                            <h4 className="pb-2 text-md font-semibold text-gray-500 text-left">{item.subtitle}</h4>
                            <ul className="list-none lg:text-md text-sm text-left">
                              {lines.map((line, ndx: number) => (
                                <li className="flex items-center gap-2" key={ndx}><div className="w-1 h-1 rounded-full bg-[#10B981]"></div><div>{line}</div></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </SectionBlock>
        </div>

        {/* 3 */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={""}>
            <div className="px-1">
              <div className="w-full flex flex-col items-center justify-center">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  <div className="flex flex-col items-center w-full justify-center gap-10">
                    <div className="flex w-[80%] text-left gap-5 flex-col lg:flex-row">
                      <div className="lg:w-[40%] h-full flex-shrink-0 w-full">
                        <h1 className="lg:text-3xl text-2xl font-semibold lg:leading-12 leading-8 ">차근차근 준비해가는 탄소중립 여정에 <br/> 하나루프가 함께 합니다.</h1>
                      </div>
                      <p className="text-lg sm:text-lg">
                        지속적으로 강화되고 있는 기후환경규제와 공시 요구. 겁내지 마세요!  <br/>
                        하나루프의 산업 디지털 전환 전문팀과 환경 전문가 네트워크가 함께 기업의 형편에 맞게 <br/> 
                        지속가능성을 내재화하실 수 있도록 힘을 실어드리겠습니다.
                      </p>
                    </div>
                    <div className="w-[80%] grid lg:grid-cols-3 gap-5 md:grid-cols-2">
                      {directory.map((item, ndx) => {
                        return (
                          <div className="bg-gray-50 p-5 rounded-lg flex flex-col justify-between gap-5" key={ndx}>
                            <div className="flex items-center justify-around flex-1">
                              <div className="text-left w-[80%] h-full">
                                <div className="text-2xl font-semibold text-start mb-1">{item.title}</div>
                                <p className="text-md text-gray-500">{item.subtitle}</p>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center hover:bg-[#0094ff] hover:cursor-pointer transition duration-500 ease-in-out">
                                <Link href={item.link}><ArrowIcon width={15} height={15} /></Link>
                              </div>
                            </div>
                            <div className="w-full h-[200px] bg-white rounded-lg">
                              <img src={item.img} className="w-full h-full rounded-lg" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SectionBlock>
        </motion.div>

        {/* 4. Features */}

        <div className="w-screen bg-gray-50">
          <SectionBlock title={data.content.section4_title}>
            <div className="px-10">
              <div>
                <motion.div
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                >
                  {/* <h3 className="text-5xl font-bold text-black mb-8">
                  Feature Heading
                </h3> */}
                </motion.div>
              </div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1 },
                }}
                className="w-full justify-center flex"
              >
                <div className="lg:grid lg:grid-cols-2 gap-10">
                  {data.features.map((item, ndx) => {
                    const svgKey = `section5_svg_${ndx + 1}`;
                    const SvgComponent = section5_svgs[svgKey];

                    const lines = item.description as string[];
                    return (
                      <div
                        className="group rounded-xl hover:border-primary-700 mb-4 py-8 bg-white shadow-sm flex w-[350px] h-[300px] justify-center items-start"
                        key={ndx}
                      >
                        <div className="mb-2 flex flex-col justify-start items-start gap-3 h-full w-[80%]">
                          <div className="w-12 h-12 rounded-md p-2">{SvgComponent}</div>
                          <div className="flex flex-col mr-1 items-baseline group-hover:text-primary-700 ">
                            <h3 className="py-2 inline font-bold">{item.title}</h3>
                            <span className="text-md text-left">{item.description}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </SectionBlock>
        </div>
      </main>
    </Layout>
  );
}
