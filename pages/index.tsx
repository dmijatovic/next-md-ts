import Head from 'next/head'

import PageLayout from '../layout/PageLayout'
import { pageLayoutData } from '../store/pageConfig'


export default function Home() {
  return (
    <>
      <Head>
        <title>This is page title</title>
      </Head>
      <PageLayout {...pageLayoutData}>
        {/* <h2>This is page content title</h2>
        <p>This is text paragraph</p> */}
      </PageLayout>
    </>
  )
}
