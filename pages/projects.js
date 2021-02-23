import React from 'react';
import { Box, Grid } from 'theme-ui';
import styles from '../styles/Projects.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  return (
    <>
      <Box color="text" bg="background" className={styles.main}>
        <Grid gap={2} columns={[ 1, 2, 3, 4 ]}>
          <Box className={styles.card}>
            <div className={styles.cardInner}>
              <h2 style={{ margin: 0 }}>
                me
              </h2>
              <p style={{ margin: 6 }}>My personal website. (this one!)</p>
              <a href="https://github.com/linkai101/me" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg"/>
              </a>
            </div>
          </Box>
          <Box className={styles.card}>
            <div className={styles.cardInner}>
              <h2 style={{ margin: 0 }}>
                <a href="https://classes.linkaiwu.com" target="_blank">Class Manager</a>
              </h2>
              <p style={{ margin: 6 }}>A virtual class management app</p>
              <a href="https://github.com/linkai101/class-manager" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg"/>
              </a>
            </div>
          </Box>
        </Grid>
      </Box>
    </>
  )
}
