import React from 'react';
import { useRouter } from 'next/router';
import { Box } from 'theme-ui';
import styles from '../styles/components/Nav.module.css';


export default function Nav() {
  const router = useRouter();

  function getNavStyles(path) {
    if (router.pathname == '/'+path || router.pathname.startsWith('/'+path+'/')) return styles.active;
    return null;
  }

  return (
    <Box color="light" bg="dark" className={styles.headerContainer}>
      <header className={styles.header}>
        <a href="/" style={{ textDecoration: 'none' }}><span className={styles.title}>Linkai Wu</span></a>
        <nav className={styles.nav}>
          <a href="/about" className={getNavStyles('about')}>About</a>
          <a href="/projects" className={getNavStyles('projects')}>Projects</a>
          <a href="/blog" className={getNavStyles('blog')}>Blog</a>
        </nav>
      </header>
    </Box>
  )
}
