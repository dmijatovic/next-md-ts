import { ReactChildren } from "react"


export interface iPageSection{
  title?:string,
  children?:any
}

export type TPageSection = React.FC<iPageSection>

/**
 * Page section with optional h3 title.
 * @param {String} props.title
 * @param {ReactChildren} props.children
 */
const PageSection:TPageSection=({title, children})=>{
  return (
    <section>
      {title ? <h3>{title}</h3>:null}
      {children}
    </section>
  )
}

export default PageSection