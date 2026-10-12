import { Github, Linkedin } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          <span className={styles.mark}>&lt;</span>NG<span className={styles.mark}>/&gt;</span>
        </span>

        <p className={styles.copy}>
          © 2026 - Natasha Gallego
        </p>

        <div className={styles.social}>
          <a href="https://github.com/natgal15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href="https://www.linkedin.com/in/natasha-gallego/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
