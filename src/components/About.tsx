'use client'
import { useContext } from 'react'
import { LangContext } from '@/context/lang'
import styles from '../styles/about.module.css'
import Resume from './Resume'
import Skills from './Skills'

function About () {
  const { lang } = useContext(LangContext)
  return (
    <section className={styles.about} id="about">
      <h1 className={styles.title}>{lang.about.title}</h1>
      <article className={styles.containerText}>
        <ul className={styles.window}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>{lang.about.firstParagraph}</p>
        <p>{lang.about.secondParagraph}</p>
      </article>
      <Resume />
      <Skills />
    </section>
  )
}

export default About
