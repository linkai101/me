import React from 'react';
import { Box } from 'theme-ui';
import styles from '../styles/Guestbook.module.css';

export default function Guestbook() {
  return (
    <Box color="text" bg="background" className={styles.main}>
      <span><b>The guestbook has not been implemented yet! Check back soon!</b></span>
    </Box>
  )
}
