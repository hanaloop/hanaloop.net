import { DisplayItem } from "../libs/types"

export const content = {
  section1_title: "Data-driven decision-making is essential for success",
  section1_body: <>Climate change is the greatest crisis facing humanity. <br />
  Greenhouse gases are the culprit, but they are invisible. <br />
  Hana Eco can help us to visualize them and take action.<br />
  </>,
  section1_quote: <>If You Can't Measure It, You Can't Improve It</>,
  section1_highlight: <><span className="font-bold text-lg">Hana.eco, the Cloud-based Climate Compliance Platform</span>,<br /> 
    efficiently oversees carbon emission activities, 
    conducts comprehensive calculations, and 
    analyzes emissions data. 
    <br />
    This platform empowers corporations to adhere to climate-related regulations, 
    mitigate climate risks, lower energy consumption, and enhance their ESG portfolio. 
    <br />
    Ultimately, it plays a pivotal role in reducing carbon footprints and contributing to the global effort to address the climate crisis.

</>,
  section2_title: "Hana.eco Features",
  section3_title: "Standard supported by Hana.eco",
  section4_title: "Benefits",
}

export const features: DisplayItem[] = [
  {
    title: "Carbon Accounting",
    subtitle: "Flexible, Easy, Accurate",
    imageUrl: "/images/platform/ecoloop_accounting_scrn.png",
    description: <>
      Hana.eco simplifies the entire process of managing carbon emissions by providing a user-friendly platform that facilitates effortless collection, precise calculation, rigorous verification, and streamlined reporting. 
        <ul>
        <li>Compliance Assurance</li>
        <li>AI-assisted data analytics. Bring climate insight to your fingertips</li>
        <li>Automation and Integration</li>
        </ul>
      </>
  },
  {
    title: "Collaboration",
    subtitle: "Increasing Team Productivity",
    imageUrl: "/images/platform/ecoloop_collab_scrn.png",
    description: <>
      Personnel across diverse units and hierarchical levels can effortlessly exchange and convey climate insights and strategies, fostering collaborative action.
      <ul>
      <li>Role and permission management</li>
      <li>Communication tool</li>
      <li>Customizable tools and options</li>
      </ul>
      </>
  },
  {
    title: "Strategy",
    subtitle: "Decarbonization",
    imageUrl: "/images/platform/ecoloop_strategy_scrn.png",
    description: <>
      Hana.eco facilitates companies on their path to carbon neutrality by leveraging advanced data analysis. Our platform enables the efficient implementation of reduction projects for a more effective and sustainable impact.
      <ul>
      <li>Energy consumption and carbon emission prediction</li>
      <li>Climate Risk management</li>
      <li>What-if scenario analysis</li>
      </ul>
    </>
  },
  {
    title: "Value Chain Management",
    subtitle: "Scope 3 well-managed",
    imageUrl: "/images/platform/ecoloop_valuechain_scrn.png",
    description: <>We establish links across the value chain by analyzing emission intensity with industry average data. Our platform's multilingual support ensures seamless usability for overseas partners.    </>
  }
]

export const benefits: DisplayItem[] = [
  {
    title: "Cost Reduction",
    subtitle: "1",
    description: <>
      <ul>
      <li>Up to ~70% operational efficiency managing climate data</li>
      <li>Up to ~15% energy savings</li>
      </ul>
    </>
  },
  {
    title: "Risk Reduction",
    subtitle: "2",
    description: <>
      <ul>
      <li>Responsive agility in addressing climate regulations</li>
      <li>Optimized strategies for buying and selling emissions permits</li>
      </ul>
    </>
  }, 
  {
    title: "Enhanced corporate image",
    subtitle: "3",
    description: <>
      <ul>
      <li>Higher ESG level</li>
      <li>Better partner management</li>
      </ul>
    </>
  },
]
