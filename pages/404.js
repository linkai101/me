import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css';

import { Box } from 'theme-ui';

export default function Custom404() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>404 - Linkai Wu</title>
      </Head>
      
      <Box color='white' bg='secondary' className={styles.container}>
        <main className={styles.main}>
          <span style={{ marginRight:8 }}><strong>{router.asPath}</strong> was not found.</span>
          <Link href="/" style={{ color: 'inherit' }}>Go home</Link>
        </main>
      </Box>
      
    </div>
  )
}