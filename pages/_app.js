import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from "theme-ui";
import MDXProvider from "../components/MDXProvider";
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Fixes icon size inheriting from another css class

import theme from '../lib/theme';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Linkai Wu</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The personal website of Linkai Wu."
        />
      </Head>
      
      <ThemeProvider theme={theme}>
        <MDXProvider>
          <div style={{ minHeight: '100vh' }}>
            {
              router.pathname !== '/' 
              && router.pathname !== '/404' 
              ? <Nav/> : null
            }
            <Component {...pageProps}/>
          </div>
          <Footer/>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
