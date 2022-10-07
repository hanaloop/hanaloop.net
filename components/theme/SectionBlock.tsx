

type SectionBlockProp ={
  title: string
  containerStyle?: string
  children: JSX.Element
}

export default function SectionBlock({title, containerStyle, children}: SectionBlockProp) {
  return (
    <div className={`py-10 text-center ${containerStyle}`}>
      <div className="flex items-center justify-center">
        <img className="h-6 mr-2 inline" src="/images/icon-leaves.png"></img>
        <h2 className="el-heading inline">{title}</h2>
      </div>
      <div className="p-4 text-gray-700">
        {children}
      </div>
    </div>
  )
}
