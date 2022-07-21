import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Main from '../src/components';

type AppPropsTypes = AppProps;

function App(props: AppPropsTypes) {
  return (
    <>
      <Head>
        <title>Pluang Financial</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
        <Main {...props} />
    </>
  );
}

export default App;