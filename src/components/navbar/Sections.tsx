import { useContext } from 'react'
import { LangContext } from '@/context/lang'
import styles from '../../styles/nav.module.css'
import { type SectionsProps } from '@/app/types'
import { AboutIcon, ContactIcon, HomeIcon, WorkIcon } from '../Icons'

function Sections ({ onUpdateLink, activeLink }: SectionsProps) {
  const { lang } = useContext(LangContext)
  return (
    <ul className={styles.sections}>
      <a
        href="#home"
        className={`${styles.sectionItem} ${
          activeLink === 'home' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('home')
        }}
      >
        <HomeIcon />
        <span>{lang.navbar.home}</span>
      </a>
      <a
        href="#about"
        className={`${styles.sectionItem} ${
          activeLink === 'about' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('about')
        }}
      >
        <AboutIcon />
        <span>{lang.navbar.about}</span>
      </a>
      <a
        href="#projects"
        className={`${styles.sectionItem} ${
          activeLink === 'projects' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('projects')
        }}
      >
        <WorkIcon />
        <span>{lang.navbar.projects}</span>
      </a>
      <a
        href="#contact"
        className={`${styles.sectionItem} ${
          activeLink === 'contact' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('contact')
        }}
      >
        <ContactIcon />
        <span>{lang.navbar.contact}</span>
      </a>
    </ul>
  )
}

export default Sections
