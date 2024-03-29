import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/theme.js';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    setCusomVh();
    window.addEventListener('resize', setCusomVh);

    return ()=>window.removeEventListener('resize', setCusomVh);
  }, [])

  /*
  * create custom '--vh' unit which based on windows.innerHeight
  * to make sure link bar on mobile devices height is also calculated
  * when a container height unit is vh
  */
  const setCusomVh = () => {
    const vh = window?window.innerHeight * 0.01:0;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Frontend Exam</title>
        <meta 
          name='viewport' 
          content='minimum-scale=1, initial-scale=1, width=device-width' 
        />
      </Head>
      <ThemeProvider theme={theme}>       
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
