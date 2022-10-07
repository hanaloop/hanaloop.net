import Link from "next/link";

export type BackgroundProps = {
  imageUrl?: string
  imageDescription?: string
  solidColor?: string
  gradientFrom?: string
  gradientTo?: string 
}

export type HeroProps = {
  header: any
  tagline?: string
  button?: {
    label: string
    href: string
  }
}

export default function Hero({header, tagline, button, background}: HeroProps & {background: BackgroundProps}) {

  const containerClass = background.imageUrl ? "h-64 bg-cover bg-center text-gray-100" :
    (background.solidColor ? `p-4 h-64 ${background.solidColor} justify-center items-center ` : 
    `p-4 h-64 bg-gradient-to-r ${background.gradientFrom} ${background.gradientTo} justify-center items-center `);
  const containerStyle = background.imageUrl ? `linear-gradient(to top, transparent, #00000030 90%), url(${background.imageUrl})`: '';

  return (
    <div id="hero">
      <div className={containerClass} style={{backgroundImage: containerStyle}}>
      {/* <div className="p-4 h-64 bg-lime-600 justify-center items-center  "> */}
      {/* <div className="p-4 h-64 bg-gradient-to-r from-sky-500 to-lime-500 justify-center items-center text-gray-50 "> */}
        
        <div className="px-8 w-full flex mx-auto" >
          <div id="hero-label" className="pt-16 space-y-2 flex flex-col w-full justify-center items-start text-center md:w-3/5 md:text-left">
            <h1 className="text-4xl font-bold drop-shadow">{header}</h1>
            <div className="text-2xl drop-shadow">{tagline}</div>
            {
              button && <Link href={button.href} passHref><button className="p-3 rounded-md border-2 text-gray-200 font-bold">{button.label}</button></Link>
            }
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
