import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoMark}>&lt;</span>
        NG
        <span className={styles.logoMark}>/&gt;</span>
      </a>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} className={styles.link} onClick={close}>
            {label}
          </a>
        ))}
        <a href="#contact" className={styles.ctaBtn} onClick={close}>
          Hire Me
        </a>
      </nav>

      <button
        className={styles.menuBtn}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  )
}
