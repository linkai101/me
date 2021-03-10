import React from 'react';
import { Box, Grid, Button } from 'theme-ui';
import styles from '../styles/pages/Home.module.css';
import { getLatestPost } from "../lib/posts";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const projects = require('../data/projects.json');

export default function Home({ latestPostData }) {
  return (
    <>
      <Box color="light" bg="dark" className={styles.headerContainer}>
        <header className={styles.header}>
          <span className={styles.title}>Linkai Wu</span>
          <nav className={styles.nav}>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
          </nav>
          <div className={styles.links}>
            <a href="mailto:linkai861@gmail.com">
              <FontAwesomeIcon icon={faEnvelope}/>
            </a>
            <a href="https://www.github.com/linkai101" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.instagram.com/linkaiwu_/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
          </div>
        </header>
      </Box>

      <Box color="text" bg="background" className={styles.main}>
        <Grid gap={2} columns={[ 1, null, 2 ]} className={styles.row}>
          <Box className={styles.gridText}>
            <h1>Hi, I'm Linkai</h1>
            <p>I am a high school sophomore based in Maryland.</p>
            <a href="/about"><Button sx={{ fontFamily: 'body' }}>About Me</Button></a>
          </Box>
          <Box className={styles.gridGraphic}>
            <img width="300" src="https://static.wikia.nocookie.net/6bf30eb9-0ae6-4120-98c3-95b491227fc6"/>
          </Box>
        </Grid>
        <Grid gap={2} columns={[ 1, null, 4 ]} className={styles.row}>
          <Box className={styles.gridText}>
            <h1>Featured Projects</h1>
            <p>Here are a few of the things that I've been working on.</p>
            <a href="/projects"><Button sx={{ fontFamily: 'body' }}>Projects</Button></a>
          </Box>
          { projects.featured.map(project => 
            <Box className={styles.project} key={project.name}>
              <div className={styles.projectInner}>
                <h2 style={{ margin: 0 }}>
                  {project.url ? 
                    <a href={project.url} target="_blank">{project.name}</a> 
                    : project.name
                  }
                </h2>
                <p style={{ margin: 6 }}>{project.description}</p>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg"/>
                </a>
              </div>
            </Box>
          )}
        </Grid>
        <Grid gap={2} columns={[ 1, null, 2 ]} className={styles.row}>
          <Box className={styles.gridText}>
            <h1>Blog</h1>
            <p>Read my thoughts!</p>
            <a href="/blog"><Button sx={{ fontFamily: 'body' }}>Blog</Button></a>
          </Box>
          <Box className={styles.gridText}>
            <h2>Latest Post</h2>
            <div className={styles.preview}>
              <b>{latestPostData.title}</b><br/>
              {latestPostData.excerpt}<br/>
              <a href={"/blog/"+latestPostData.slug}>Read more</a>
            </div>
          </Box>
        </Grid>
        <Grid gap={2} columns={[ 1, null, 2 ]} className={styles.row}>
          <Box className={styles.gridText}>
            <h1>Guestbook</h1>
            <p>Sign my guestbook!</p>
            <a href="/guestbook"><Button sx={{ fontFamily: 'body' }}>Guestbook</Button></a>
          </Box>
          <Box className={styles.gridText}>
            <h2>Latest Signature</h2>
            <div className={styles.preview}>
              <b>Not implemented yet</b><br/>
              The guestbook has not been implemented yet!
            </div>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const latestPostData = getLatestPost();
  return {
    props: {
      latestPostData,
    },
  };
}
