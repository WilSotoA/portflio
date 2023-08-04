import styles from '../../styles/nav.module.css'
import { type AsideBarProps } from '@/app/types'
import { AboutIcon, ContactIcon, HomeIcon, WorkIcon } from '../Icons'

function AsideBar ({ activeLink, onUpdateLink }: AsideBarProps): JSX.Element {
  return (
    <aside className={`${styles.asideBar}`}>
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
      </a>
    </aside>
  )
}

export default AsideBar
