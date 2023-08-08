import styles from '../styles/about.module.css'
import Backend from './skills/Backend'
import Frontend from './skills/Frontend'
import Others from './skills/Others'

function Skills (): JSX.Element {
  return (
    <article className={styles.skills}>
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.containerText}>
        <ul className={styles.window}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <Frontend />
      </div>
      <div className={styles.containerText}>
        <ul className={styles.window}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <Backend />
      </div>
      <div className={styles.containerText}>
        <ul className={styles.window}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <Others />
      </div>
    </article>
  )
}

export default Skills
