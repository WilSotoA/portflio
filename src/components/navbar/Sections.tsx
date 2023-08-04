import styles from '../../styles/nav.module.css'
import { type SectionsProps } from '@/app/types'
import { AboutIcon, ContactIcon, HomeIcon, WorkIcon } from '../Icons'

function Sections ({ onUpdateLink, activeLink }: SectionsProps): JSX.Element {
  return (
    <ul className={styles.sections}>
      <a
        href="#home"
        className={`${styles.sectionItem} ${
          activeLink === 'Home' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('Home')
        }}
      >
        <HomeIcon />
        <span>Inicio</span>
      </a>
      <a
        href="#about"
        className={`${styles.sectionItem} ${
          activeLink === 'About' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('About')
        }}
      >
        <AboutIcon />
        <span>Sobre Mí</span>
      </a>
      <a
        href="#projects"
        className={`${styles.sectionItem} ${
          activeLink === 'Work' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('Work')
        }}
      >
        <WorkIcon />
        <span>Proyectos</span>
      </a>
      <a
        href="#contact"
        className={`${styles.sectionItem} ${
          activeLink === 'Contact' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('Contact')
        }}
      >
        <ContactIcon />
        <span>Contacto</span>
      </a>
    </ul>
  )
}

export default Sections
