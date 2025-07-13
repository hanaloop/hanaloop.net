import { DisplayItem, PageSection } from "../libs/types"

export const content: PageSection = {
  title: "Asociaciones",
  items: [{
      title: "Programa de Socios de Soluciones SaaS",
      description: <><b>Contenido -</b> &nbsp;
        Un programa que permite a las empresas ofrecer la solución SaaS de Hana.eco a sus clientes y recibir comisiones por ventas.<br />
        <b>Dirigido a -</b> &nbsp;
        Proveedores de servicios de consultoría como consultoras de negocios y medio ambiente, firmas contables y legales.
      </>,
    }, {
      title: "Programa de Socios Tecnológicos",
      description: <><b>Contenido -</b> &nbsp;
        Un programa que permite a las empresas ofrecer el sistema OnPrem de Hana.eco a sus clientes como una solución independiente o como parte de un paquete de soluciones.<br />
        <b>Dirigido a -</b> &nbsp;
        Proveedores de soluciones que desean integrar Hana.eco en su suite de productos TI.
      </>,
    }]
}

export const partners_tech: PageSection = {
  title: "",
  items: [{
    title: "Chemtopia",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-chemtopia_logo.png",
    description: "Socio | Consultoría total de soluciones ambientales | Investigación de políticas, reducción de GEI, gestión de activos de carbono, energías renovables y consultoría para la acción climática"
  }]
}

export const partners_saas: PageSection = {
  title: "",
  items: [{
    title: "Roen Consulting",
    sourceUrl: "http://www.roenconsulting.com/main/index.html",
    imageUrl: "/images/partners/partner-roen_logo.png",
    description: "Socio | Consultoría total de soluciones ambientales | Investigación de políticas, reducción de GEI, gestión de activos de carbono, energías renovables y consultoría para la acción climática"
  },
  {
    title: "Han Consulting Group",
    sourceUrl: "https://hcg.kr",
    imageUrl: "/images/partners/partner-hanconsulting_logo.png",
    description: "Socio | Partner de éxito en gestión ESG | Consultoría ESG diferenciada y consultoría de carbono neutral"
  }]
}

export const alliances: PageSection = {
  title: "Alianzas Estratégicas",
  items: [{
    title: "Proyecto de Carbono de Corea (Proyecto organizado por SNU y patrocinado por KEITI)",
    // sourceUrl: "http://www.roenconsulting.com/main/index.html",
    description: "Proyecto nacional de inventario de GEI en Corea"
  },
  {
    title: "Fundación Climática Net Zero 2050",
    sourceUrl: "http://netzero2050.or.kr/",
    imageUrl: "/images/partners/netzero2050_climatefoundation-logo.png",
    description: "Socio colaborador | Apoya activamente y motiva los esfuerzos internacionales, gubernamentales, corporativos y ciudadanos globales para eliminar completamente las emisiones de CO₂ y lograr la neutralidad de carbono para 2050."
  },
  {
    title: "Centro Internacional para la Hidroelectricidad (ICH)",
    sourceUrl: "https://ich.no/",
    description: "El propósito de ICH es elevar los estándares de competencia del personal de la industria y promover el desarrollo sostenible de la hidroelectricidad."
  }]
}
