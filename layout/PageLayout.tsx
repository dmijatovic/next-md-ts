import PageHeader, {iHeaderData, eMenuType} from "./PageHeader"
import PageFooter, {iFooterData} from "./PageFooter"

import { pageLayoutData } from 'store/pageConfig'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dv4-loader-square-jelly': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export interface iPageLayout {
  header?: iHeaderData,
  footer?: iFooterData,
  children?: React.ReactNode
}

const PageLayout:React.FC<iPageLayout|undefined> = ({
  header=pageLayoutData.header,
  children,
  footer=pageLayoutData.footer}) =>{
  // console.log("PageLayout...header...", header)
  return (
    <>
      <PageHeader {...header}/>
      <main className="page-main-body">
        {
          children ? children :
          <dv4-loader-square-jelly>Loading...</dv4-loader-square-jelly>
        }
      </main>
      <PageFooter {...footer} />
    </>
  )
}

export default PageLayout