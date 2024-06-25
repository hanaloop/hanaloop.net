import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import SectionBlock from "../components/theme/SectionBlock";
import useGlobalData from "@docusaurus/useGlobalData";
import { motion } from "framer-motion";
// import { customers, elements, features, partners, reasons } from '../data/index.data';

// let announcement: any | undefined;
const announcement = {
  initialOpen: true,
  title: "2023년 12월 '하나루프와 기후 인사이트 수요일' 등록하기",
  link: "https://docs.google.com/forms/d/e/1FAIpQLSev-ubKKT32aD-gqLHy0k56xyv-iBwiA5Z6jnMtqekdYmIcdA/viewform",
  image: "/images/blog/HanaLoop_climate_insight_wednesdays.jpg",
  dimensions: `w-[500px] md:w-[600px]`,
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
        {/* 1 */}
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
        >
          <SectionBlock title={data.content.section1_title}>
            <div className="w-full flex justify-center mt-10">
              <div className="lg:w-[80%] flex gap-10 lg:flex-row flex-col md:w-[60%]">
                <div className="px-1 flex flex-col items-start">
                  <div className="font-bold flex flex-col items-start gap-3 text-left ">
                    <p className="text-2xl font-semibold lg:text-4xl">
                      기업활동 중 발생하는 온실가스
                      <br />{" "}
                      <span className="text-[#0094ff] font-bold">하나에코</span>
                      로 간편하게 관리하세요!
                    </p>
                    <p className="text-gray-400">
                      우리는 산업과 기업 환경에 필요한 맞춤형 제안과 안정적인
                      탄소 중립 매니지먼트 핵심 기술로 지속 가능한 생태계 구축을
                      위해 디지털 환경을 구현합니다.
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center my-8 w-full lg:justify-start">
                    <button className="hover:no-underline border border-primary-500 rounded-xl px-3 py-3 bg-[#0094ff] ">
                      <Link href={data.content.section1_href}>
                        <a className="hover:no-underline">
                          {data.content.section1_link1}
                        </a>
                      </Link>
                    </button>
                    <button className="border border-primary-500 rounded-xl px-3 py-3 bg-[#0094ff] ">
                      <Link href={data.content.section1_href}>
                        <a className="no-underline">
                          {data.content.section1_link2}
                        </a>
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <div className="flex flex-col text-left shadow-lg rounded-md items-center">
                    <div className="">
                      <img
                        src="https://www.hana.eco/images/hanaeco_dashboard1.png"
                        width={800}
                        height={500}
                        alt="hanaeco"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
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
          <SectionBlock title={data.content.section2_title}>
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
                  <div className="flex flex-col items-center px-10 my-4 text-left shadow-lg rounded-md p-10 h-full gap-10">
                    <div>
                      <img
                        src="/images/figma.svg"
                        width={400}
                        height={500}
                        alt="hanaeco"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full justify-start gap-3">
                      <h1 className="font-semibold text-3xl">Sub Heading</h1>
                      <ul>
                        <li>
                          1. Lorem ipsum dolor sit amet consectetur adipisicing
                        </li>
                        <li></li>
                        <li>
                          3. Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                        <li>
                          4. Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SectionBlock>
        </motion.div>
        {/* 3 */}
        <SectionBlock title={data.content.section3_title}>
          <div className="px-10 mt-10">
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
              <div className="lg:grid lg:grid-cols-2 lg:gap- flex flex-col gap-3 w-[75%]">
                {data.elements.map((item, ndx) => {
                  const lines = item.description as string[];
                  return (
                    <div
                      className="group rounded-lg hover:border-primary-700 flex justify-center mb-4"
                      key={ndx}
                    >
                      <div className="lg:w-[500px] flex-none mb-2 flex flex-col items-center">
                        <div className="lg:w-3 lg:h-3 w-2 h-2 flex justify-center items-center font-bold text-white bg-[#0094ff] rounded-full text-[10px]"></div>
                        <div className="lg:text-xl text-lg font-bold">
                          <div className="flex mr-1 items-baseline group-hover:text-primary-700 justify-center">
                            <h3 className="py-2 inline">{item.title}</h3>
                          </div>
                        </div>
                        <div className="[word-break:keep-all] w-full">
                          <h4 className="pb-2 text-md font-semibold text-gray-400 ">
                            {item.subtitle}
                          </h4>
                          <ul className="ml-3 list-none lg:text-md text-sm">
                            {lines.map((line, ndx: number) => (
                              <li key={ndx}>{line}</li>
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

        {/* 4. Features */}

        <SectionBlock title={data.content.section4_title}>
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
            <div className="px-10">
              <h2 className="text-4xl font-extrabold text-center text-gray-400 hover:text-sky-700 duration-200">
                {/* <Link href={'/platform'}><a>SaaS형 지속가능성 플랫폼 Hana.eco</a></Link> */}
              </h2>
              {/* <h3 className="text-5xl font-bold text-black leading-[60px] mb-8">
                Feature Heading
              </h3> */}
              <div className="w-full flex justify-center ">
                <div className="lg:w-[50%] w-[80%]">
                  <div className="flex  flex-wrap gap-5 justify-center">
                    {data.features.map((item, index) => (
                      // bg-blue-400
                      <div
                        className={`flex flex-col items-start justify-center sm:w-[400px] lg:w-[250px] max-h-[200px] ${
                          index === 0 || index === 3
                            ? "bg-teal-400"
                            : "bg-[#0094ff]"
                        }  p-10 rounded-xl text-white`}
                        key={item.title}
                      >
                        <div className="flex w-full justify-center items-center">
                          <div className="flex mr-1">{item.icon}</div>
                          <h3 className="text-xl text-center font-semibold py-2 ">
                            {item.title}
                          </h3>
                        </div>
                        <div className="text-xs [word-break:keep-all]">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </SectionBlock>
        {/* 5. 인증서 */}
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
          <SectionBlock
            title={data.content.section5_title}
            containerStyle="bg-whie"
          >
            <div className="w-full justify-center flex">
              <div className="flex flex-col my-10 text-left shadow-lg rounded-xl pt-10 pb-10 w-[500px]">
                <div className="lg:flex-none">
                  <img
                    className="w-64 mx-auto"
                    src="/images/partners/lrqa-logo.png"
                  />
                </div>
                <div className="w-full space-y-2 text-center">
                  <h2 className="text-xl font-bold text-center">
                    로이드인증원(LRQA)
                  </h2>
                  <p className="font-semibold text-gray-500">
                    배출권거래제 및 EU 탄소국경조정제도 플랫폼 적합성
                    <br />
                    국내 첫 검증의견서 획득
                  </p>
                </div>
              </div>
            </div>
          </SectionBlock>
        </motion.div>

        {/*6. 고객사 */}
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
          <SectionBlock
            title={data.content.section6_title}
            containerStyle="my-20"
          >
            <div className="space-y-10">
              <div className="mt-4 text-center items-center space-y-8 ">
                {/* CUSTOMERS */}
                <div className="flex justify-center gap-12">
                  {data.customers.map((item) => (
                    <span className="group" key={item.title}>
                      <Link href={item.sourceUrl!}>
                        <a target="_blank">
                          <img
                            className="h-8 duration-200"
                            src={useBaseUrl(item.imageUrl!)}
                            alt={item.title}
                          />
                        </a>
                      </Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-50 border-lime-700 hidden group-hover:block absolute tooltip-text">
                        {item.description}
                      </span>
                    </span>
                  ))}
                </div>
                {/* PARTNERS */}
                <div className="flex justify-center gap-16">
                  {data.partners.map((item) => (
                    <div className="group" key={item.title}>
                      <Link href={item.sourceUrl!}>
                        <a target="_blank">
                          <img
                            className="h-8 rounded-md duration-200"
                            src={useBaseUrl(item.imageUrl!)}
                            alt={item.title}
                          />
                        </a>
                      </Link>
                      <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex justify-center gap-12">
                    {data.programs.map((item) => (
                      <div className="group" key={item.title}>
                        <Link href={item.sourceUrl!}>
                          <a target="_blank">
                            <img
                              className="h-8 rounded-md duration-200"
                              src={useBaseUrl(item.imageUrl!)}
                              alt={item.title}
                            />
                          </a>
                        </Link>
                        <span className="p-2 -mt-20 -ml-6 rounded text-xs text-white text-left bg-black bg-opacity-60 border-lime-700 hidden group-hover:block absolute tooltip-text">
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs">
                    {data.content.section2_subtitle}
                  </div>
                </div>
              </div>
            </div>
          </SectionBlock>
        </motion.div>
        <div className="w-full flex justify-center my-20">
          <div className="lg:w-[800px]  bg-blue-100 rounded-lg flex items-center flex-col p-10 gap-3 w-[400px] ">
            <span className="font-bold lg:text-4xl text-3xl">
              Feature Heading
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, sint.
            </p>
            <div className="flex gap-3 justify-center  w-full ">
              <button className="hover:no-underline border border-primary-500 rounded-xl px-3 py-3 bg-[#0094ff] ">
                <Link href={data.content.section1_href}>
                  <a className="hover:no-underline">
                    {data.content.section1_link1}
                  </a>
                </Link>
              </button>
              <button className="border border-primary-500 rounded-xl px-3 py-3 bg-[#0094ff] ">
                <Link href={data.content.section1_href}>
                  <a className="no-underline">{data.content.section1_link2}</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
