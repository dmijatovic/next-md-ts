import {eMenuType} from '../layout/PageHeader'
import {iPageLayout} from '../layout/PageLayout'

export const pageLayoutData:iPageLayout={
  header:{
    title:'Page title loaded from Store',
    menu:[
      {href:'/',label:'Home',type: eMenuType.ROUTE},
      {href:'/page1',label:'Link to page 1',type: eMenuType.ROUTE},
      {href:'/page2',label:'Link to page 2',type: eMenuType.ROUTE},
      {href:'/page3',label:'Link to page 3',type: eMenuType.URL_LINK}
    ]
  },
  footer:{
    titleLeft:'This is left from store initial data',
    titleRight:'This is on the rights side from store'
  }
}