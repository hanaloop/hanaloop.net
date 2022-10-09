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
  /* v2.1 */
  const containerStyle = background.imageUrl ? `linear-gradient(to top, transparent, #00000030 90%), url(${background.imageUrl})`: '';

  return (
    <div id="hero" className="relative [word-break:keep-all]">
      <div className={containerClass} style={{backgroundImage: containerStyle}}>
      {/* <div className="p-4 h-64 bg-lime-600 justify-center items-center  "> */}
      {/* <div className="p-4 h-64 bg-gradient-to-r from-sky-500 to-lime-500 justify-center items-center text-gray-50 "> */}
        
        <div className="px-8 w-full flex mx-auto" >
          <div id="hero-label" className="pt-16 space-y-2  w-full justify-center items-start text-center md:w-4/5 md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold drop-shadow">{header}</h1>
            <span className="text-xl md:text-2xl drop-shadow ">{tagline}</span>
            {
              button && <div className="pt-5 flex justify-center md:justify-start"><Link href={button.href} passHref><button className="p-2 rounded-md border-2 text-gray-200 font-bold">{button.label}</button></Link></div>
            }
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* v2.1 */}
      {
        background.imageDescription && 
          <div className="group absolute bottom-10 right-10 ">
            <div className="group-hover:hidden absolute bottom-0 right-1 p-2 rounded border border-orange-200 text-xs text-gray-100 bg-black bg-opacity-30 whitespace-nowrap">사진 정보</div>
            <div className="hidden group-hover:flex w-48 p-2 rounded border border-orange-200 text-xs text-gray-100 bg-black bg-opacity-30">{background.imageDescription}</div>
          </div>
      }

      {/* <div className="p-2 w-48 rounded border border-orange-200 text-xs text-gray-100 bg-black bg-opacity-30 absolute bottom-10 right-10 ">{background.imageDescription}</div> */}
    </div>
  )
}
