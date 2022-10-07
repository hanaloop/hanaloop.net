import Link from "next/link"

export type NavLinkProps = {
  item: {
    type?: string // 'doc',
    docId?: string // 'intro',
    href?: string // 'https://gitlab.com/hanaloop/next-dev-portal',
    to?: string // '/about', 
    label: string // 'About', 
    position: string // 'left'
  }
}

export default function NavLink({item}: NavLinkProps) {
  // Either doc or href or to
  const link = item.type == 'docs' ? `/${item.type}/${item.docId} `
    : ( (item.href) ? item.href : item.to);

  return <Link href={link!} passHref><a>{item.label}</a></Link>
}