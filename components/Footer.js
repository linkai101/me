import styles from '../styles/components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <section>
          <a href="/">Home</a>
          <a href="https://iam.linkaiwu.com">About</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
        </section>
        <section>
          <a href="/guestbook">Guestbook</a>
        </section>
        <section>
          <a href="mailto:linkai861@gmail.com">Email</a>
          <a href="https://www.github.com/linkai101" target="_blank" rel="noreferrer">Github</a>
          <a href="https://www.instagram.com/linkaiwu_/" target="_blank" rel="noreferrer">Insta</a>
          <a href="https://www.tiktok.com/@linkaiwu_" target="_blank" rel="noreferrer">TikTok</a>
        </section>
      </div>
      <p>&copy; 2005-2021 Linkai Wu</p>
    </footer>
  )
}
