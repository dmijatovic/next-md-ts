import Link from 'next/link'
import {useRouter} from 'next/router'

export enum eMenuType{
  URL_LINK,
  ROUTE
}

export interface iMenuItem{
  href: string,
  label: string,
  type: eMenuType
}

export interface iHeaderData{
  title:string,
  menu: iMenuItem[] | []
}

function createNavItems(menu:iMenuItem[]){
  if (!menu) return null
  const router = useRouter()
  const innerHtml = menu.map(item => {
    if (item.type === eMenuType.ROUTE){
      let classes="header-menu-item"
      if (item.href === router.pathname){
        classes += " active"
      }
      return (
        <Link
          key={item.href}
          href={item.href}>
          <a href="" className={classes}>{item.label}</a>
        </Link>
      )
    }
  })
  return innerHtml
}

const PageHeader:React.FC<iHeaderData> = ({title="Default app title", menu=[]}) => {
  return(
    <header>
      <h1>{title}</h1>
      <nav>
        {createNavItems(menu)}
      </nav>
    </header>
  )
}

export default PageHeader
