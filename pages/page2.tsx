import Head from 'next/head'
import PageLayout from 'layout/PageLayout'
import PageTitle from 'layout/PageTitle'
import PageSection from 'layout/PageSection'

export default ()=>{
  return (
    <>
      <Head>
        <title>This is page title</title>
      </Head>
      <PageLayout>
        <PageTitle title="Provided title for page 2"/>
        <PageSection title="This is section title provided as prop">
          <p>This is text paragraph</p>
          <div>Then I used this div as another child</div>
        </PageSection>
      </PageLayout>
    </>
  )
}