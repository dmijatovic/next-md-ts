import PageHeader, {iHeaderData, eMenuType} from "./PageHeader"
import PageFooter, {iFooterData} from "./PageFooter"
import { JSXElementConstructor } from "react"
import { NextPage } from "next"


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dv4-loader-square-jelly': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export interface iPageLayout {
  header: iHeaderData,
  footer: iFooterData,
  children?: JSXElementConstructor<React.Component>[] | undefined
}

const PageLayout:NextPage = (props:iPageLayout) =>{
  // console.log("PageLayout...props...", props)
  return (
    <>
      <PageHeader {...props.header}/>
      <main>
        {
          props.children ? props.children :
          <dv4-loader-square-jelly>Loading...</dv4-loader-square-jelly>
        }
      </main>
      <PageFooter {...props.footer} />
    </>

  )
}

export default PageLayout