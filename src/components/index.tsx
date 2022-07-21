import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import theme, { globalStyle } from '../theme';

type AppPropsTypes = AppProps;

const Main = ({ Component, pageProps }: AppPropsTypes) => { 
  return (
    <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={globalStyle} />
          <Component {...pageProps} />
        </ThemeProvider>
    </>
  );
};

export default Main;