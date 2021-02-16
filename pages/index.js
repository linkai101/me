import styles from '../styles/Home.module.css';

import Footer from '../components/Footer';

import { Box, Grid, Button } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Box color="light" bg="dark" className={styles.headerContainer}>
        <header className={styles.header}>
          <span className={styles.title}>Linkai Wu</span>
          <nav className={styles.nav}>
            <a href="https://iam.linkaiwu.com">About</a>
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
            <a href="https://www.tiktok.com/@linkaiwu_" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTiktok}/>
            </a>
          </div>
        </header>
      </Box>

      <Box color="text" bg="background" className={styles.main}>
        <Grid gap={2} columns={[ 1, null, 2 ]} className={styles.row}>
          <Box className={styles.gridText}>
            <h1>Hi, I am Linkai</h1>
            <p>I am a sophomore at Montgomery Blair High School.</p>
            <a href="https://iam.linkaiwu.com"><Button sx={{ fontFamily: 'body' }}>About Me</Button></a>
          </Box>
          <Box className={styles.gridGraphic}>
            <img width="300" src="https://i2-prod.dailyrecord.co.uk/incoming/article18989706.ece/ALTERNATES/s615/0_JS164998846.jpg"/>
          </Box>
        </Grid>
        <Grid gap={2} columns={[ 1, null, 4 ]} className={styles.row}>
          <Box className={styles.gridText}>
            <h1>Featured Projects</h1>
            <p>Here are a few of my featured projects.</p>
            <a href="/projects"><Button sx={{ fontFamily: 'body' }}>Projects</Button></a>
          </Box>
          <Box className={styles.gridGraphic}>
            <img width="200" src="https://i1.sndcdn.com/artworks-000400124934-13zk66-t500x500.jpg"/>
          </Box>
          <Box className={styles.gridGraphic}>
            <img width="200" src="https://memesgifsandtrends.files.wordpress.com/2016/04/screen-shot-2016-02-01-at-6-01-10-am.png?w=640"/>
          </Box>
          <Box className={styles.gridGraphic}>
            <img width="200" src="https://i.pinimg.com/originals/bc/45/b7/bc45b72c1266bdbbb08035536f8f9e4d.jpg"/>
          </Box>
        </Grid>
        <Grid gap={2} columns={[ 1, null, 2 ]} className={styles.row}>
          <Box className={styles.gridText}>
            <h1>Blog</h1>
            <p>Read my thoughts!</p>
            <a href="/blog"><Button sx={{ fontFamily: 'body' }}>Blog</Button></a>
          </Box>
          <Box className={styles.gridText}>
            <h2>Latest Post</h2>
            <p style={{border: "2px solid #eaeaea"}}>
              <b>Example post</b><br/>
              This is an example post<br/>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Read more</a>
            </p>
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
            <p style={{border: "2px solid #eaeaea"}}>
              <b>Iaknil Uw</b><br/>
              lol hi u suck
            </p>
          </Box>
        </Grid>
      </Box>

      <Footer/>
    </>
  )
}
