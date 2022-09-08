import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Main from '../src/components';
import Layout from 'src/components/Layout';

type AppPropsTypes = AppProps;

function App(props: AppPropsTypes) {
  return (
    <>
      <Head>
        <title>ravi dwivedi</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
         <Main {...props} />
      </Layout>
    </>
  );
}

export default App;