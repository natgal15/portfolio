import { ArrowDown, Github, Linkedin } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Glow orb */}
      <div className={styles.orb} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.greeting}>
          <span className={styles.dot} />
          Available for work
        </p>

        <h1 className={styles.headline}>
          <span className={styles.headlineSub}>Hi, I'm</span>
          <br />
          <span className={styles.name}>Natasha Gallego</span>
          <br />
          <em className={styles.title}>Software Engineer</em>
        </h1>

        <p className={styles.desc}>
          iOS Developer with a background in Web Development. I build clean,
          user-focused mobile and web experiences — Magna Cum Laude graduate
          of PUP San Pedro, based in the Philippines.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Get in Touch
          </a>
        </div>

        <div className={styles.social}>
          <a href="https://github.com/natgal15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/natasha-gallego/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <a href="#about" className={styles.scroll} aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>

      {/* Floating year tag */}
      <span className={styles.yearTag}>© 2025</span>
    </section>
  )
}
