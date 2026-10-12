import styles from './Skills.module.css'

const SKILL_GROUPS = [
  {
    category: 'iOS Development',
    items: ['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'Core Data', 'Combine'],
  },
  {
    category: 'Web Development',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    category: 'Others',
    items: ['Git', 'REST APIs', 'Figma', 'MVVM', 'Vercel', 'Firebase', 'Agile / Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>// skills</p>
          <h2 className={styles.heading}>My Tech Stack</h2>
          <p className={styles.sub}>
            Tools I reach for to build fast, scalable, and delightful products.
          </p>
        </header>

        <div className={styles.groups}>
          {SKILL_GROUPS.map(({ category, items }) => (
            <div key={category} className={styles.group}>
              <h3 className={styles.groupLabel}>{category}</h3>
              <div className={styles.tags}>
                {items.map(skill => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
