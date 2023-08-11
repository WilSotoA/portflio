import styles from '../../styles/nav.module.css'
import { type SectionsProps } from '@/app/types'
import { AboutIcon, ContactIcon, HomeIcon, WorkIcon } from '../Icons'

function Sections ({ onUpdateLink, activeLink }: SectionsProps) {
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
        <span>Inicio</span>
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
        <span>Sobre Mí</span>
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
        <span>Proyectos</span>
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
        <span>Contacto</span>
      </a>
    </ul>
  )
}

export default Sections
