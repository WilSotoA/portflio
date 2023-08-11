import styles from '../../styles/nav.module.css'
import { type AsideBarProps } from '@/app/types'
import { AboutIcon, ContactIcon, HomeIcon, WorkIcon } from '../Icons'

function AsideBar ({ activeLink, onUpdateLink }: AsideBarProps) {
  return (
    <aside className={`${styles.asideBar}`}>
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
      </a>
    </aside>
  )
}

export default AsideBar
