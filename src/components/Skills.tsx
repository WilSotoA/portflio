import { useContext } from 'react'
import { LangContext } from '@/context/lang'
import styles from '../styles/about.module.css'
import Backend from './skills/Backend'
import Frontend from './skills/Frontend'
import Others from './skills/Others'

function Skills () {
  const { lang } = useContext(LangContext)
  return (
    <article className={styles.skills}>
      <h2 className={styles.subtitle}>{lang.skills.title}</h2>
      <Frontend />
      <Backend />
      <Others />
    </article>
  )
}

export default Skills
