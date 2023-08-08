import styles from '../styles/about.module.css'
import Backend from './skills/Backend'
import Frontend from './skills/Frontend'
import Others from './skills/Others'

function Skills (): JSX.Element {
  return (
    <article className={styles.skills}>
      <h2 className={styles.title}>Habilidades</h2>
      <Frontend />
      <Backend />
      <Others />
    </article>
  )
}

export default Skills
