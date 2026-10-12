import styles from './About.module.css'

const STATS = [
  { value: 'iOS',  label: 'Current Focus'     },
  { value: 'Web',  label: 'Background'         },
  { value: 'Repo',  label: 'GitHub'    },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Left: text */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>// about me</p>
          <h2 className={styles.heading}>
            Engineer by degree,<br />
            <em>developer</em> at heart.
          </h2>
          <p className={styles.body}>
            I'm a Software Engineer based in the Philippines, currently focused
            on iOS Development. I build native mobile experiences that are fast,
            intuitive, and polished — with a strong foundation in Web Development.
          </p>
          <p className={styles.body}>
            I graduated <strong>Magna Cum Laude</strong> from the Polytechnic
            University of the Philippines – San Pedro Campus.
          </p>
          <a href="/Gallego_Natasha_CV.pdf" download="Gallego_Natasha_CV.pdf" className={styles.resumeBtn}>
            Download CV →
          </a>
        </div>

        {/* Right: stats + photo placeholder */}
        <div className={styles.aside}>
          <div className={styles.photoWrap}>
            <img
              src="/natasha-gallego-portrait.png"
              alt="Natasha Gallego"
              className={styles.photo}
              draggable={false}
              loading="eager"
              onContextMenu={e => e.preventDefault()}
              onDragStart={e => e.preventDefault()}
            />
            <div className={styles.photoBorder} />
          </div>

          <div className={styles.stats}>
            {STATS.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
