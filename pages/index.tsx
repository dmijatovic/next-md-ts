import Head from 'next/head'
import { NextPage } from "next"

import PageLayout from '../layout/PageLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>This is page title</title>
      </Head>
      <PageLayout>
        {/* <h2>This is page content title</h2>
        <p>This is text paragraph</p> */}
      </PageLayout>
    </>
  )
}
