import Head from 'next/head'
import PageLayout from 'layout/PageLayout'
import PageTitle from 'layout/PageTitle'
import PageSection from 'layout/PageSection'
import { useEffect, useState, ReactChildren } from 'react'

export default ()=>{
  const [content, setContent] = useState(null)
  useEffect(()=>{
    setTimeout(()=>{
      setContent(
      <>
      <PageTitle title="Provided title for page 3"/>
      <PageSection title="The content is loaded after 2 seconds">
        <p>This page demostrates delayed loading of the content.</p>
        <div>
          While to content is loaded we show loader which is part of page section component.
          If there is no content the loader is shown. When the content is provided
          to PageSection component the loader is replaced with the content.
        </div>
      </PageSection>
      </>
      )
    },2000)
  },[])

  return (
    <>
      <Head>
        <title>Page 3 Title</title>
      </Head>
      <PageLayout>
        {content}
      </PageLayout>
    </>
  )
}