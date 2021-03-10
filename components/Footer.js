import styles from '../styles/components/Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <section>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
        </section>
        <section>
          <a href="/guestbook">Guestbook</a>
        </section>
        <section>
          <a href="mailto:linkai861@gmail.com">
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
          <a href="https://www.github.com/linkai101" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href="https://www.instagram.com/linkaiwu_/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </section>
      </div>
      <p>&copy; 2005-{new Date().getFullYear()} Linkai Wu</p>
    </footer>
  )
}
