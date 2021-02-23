import React from 'react';
import { Box, Grid } from 'theme-ui';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Box color="text" bg="background" className={styles.main}>
        <Grid gap={2} columns={[1, '3fr 4fr']} className={styles.row}>
          <Box className={styles.gridGraphic}>
            <img width="300" src="https://static.wikia.nocookie.net/6bf30eb9-0ae6-4120-98c3-95b491227fc6"/>
          </Box>
          <Box className={styles.gridText}>
            <h1>Hi, I'm Linkai</h1>
            <p>
              I am a high school sophomore based in Maryland, and I am a student, programmer, and gamer.
            </p>
            <p>
              As a STEM student in Montgomery Blair High School, I am very passionate about tech and computer science.
            </p>
          </Box>
        </Grid>
      </Box>
    </>
  )
}
