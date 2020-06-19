import Link from 'next/link'
import { ReactElement } from 'react'

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
  const innerHtml = menu.map(item => {
    if (item.type === eMenuType.ROUTE){
      return (
        <Link
          key={item.href}
          href={item.href}>
          <a href="" className="header-menu-item">{item.label}</a>
        </Link>
      )
    }
  })
  return innerHtml
}

const PageHeader = (props:iHeaderData) => {
  const {title, menu} = props
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
