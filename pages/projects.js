import React from 'react';
import { Box, Grid } from 'theme-ui';
import styles from '../styles/pages/Projects.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projects = require('../data/projects.json');

export default function Projects() {
  return (
    <>
      <Box color="text" bg="background" className={styles.main}>
        <Grid gap={2} columns={[ 1, 2, 3, 4 ]}>
          { projects.all.map(project => 
            <Box className={styles.card} key={project.name}>
              <div className={styles.cardInner}>
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
          ) }
        </Grid>
      </Box>
    </>
  )
}
