import Head from 'next/head'
import PageLayout from 'layout/PageLayout'
import PageTitle from 'layout/PageTitle'
import PageSection from 'layout/PageSection'

import { pageLayoutData } from 'store/pageConfig'


export default ()=>{
  return(
    <>
      <Head>
        <title>This is page 1 title</title>
      </Head>
      <PageLayout {...pageLayoutData}>
        <PageTitle title="This is page 1 title" />
        <PageSection title="This my section title">
          <div>And here I provide some content</div>
          <p>Another one</p>
        </PageSection>
      </PageLayout>
    </>
  )
}