import Head from 'next/head';
import { ThemeProvider } from "theme-ui";
import MDXProvider from "../components/MDXProvider";
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Fixes icon size inheriting from another css class

import theme from '../theme';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Linkai Wu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ThemeProvider theme={theme}>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
