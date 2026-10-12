import { ExternalLink, Github } from 'lucide-react'
import styles from './Projects.module.css'

const PROJECTS = [
  {
    number: '01',
    title: 'Lit Digital Official Website',
    desc: 'Shopify Web Development Project | LitDigital — built and refined the official website experience for Lit Digital with a polished storefront presence and modern e-commerce design.',
    tags: ['Shopify', 'Web Development', 'UI/UX', 'E-commerce'],
    live: 'https://www.getlit.digital/',
    repo: 'https://www.getlit.digital/',
    featured: true,
  },
  {
    number: '02',
    title: 'Zenith Core Solutions Official Website',
    desc: 'Front-end Development Project | Zenith Core Solutions Corp. — designed and developed the official company website to present services and brand information with a clean, professional front-end experience.',
    tags: ['React', 'Front-end Development', 'Web Design', 'Corporate Website'],
    live: 'https://www.zcs-corp.com',
    repo: 'https://www.zcs-corp.com',
    featured: false,
  },
  {
    number: '03',
    title: 'HarvestGuard',
    desc: 'Agri-tech Project | HarvestGuard — a crop monitoring and planning dashboard focused on practical field insights, scheduling support, and smarter decision-making for growers.',
    tags: ['Agriculture', 'Dashboard', 'Web App', 'Planning'],
    live: '',
    repo: 'https://github.com/natgal15/HarvestGuard',
    featured: false,
  },
]

export default function Projects() {
  const visibleProjects = PROJECTS.slice(0, 3)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>// projects</p>
          <h2 className={styles.heading}>Selected Work</h2>
          <p className={styles.sub}>
            A handful of things I've built and shipped. Each one taught me something new.
          </p>
        </header>

        <div className={styles.grid}>
          {visibleProjects.map(p => (
            <div key={p.number} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.projectNum}>{p.number}</span>
                <div className={styles.cardLinks}>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
