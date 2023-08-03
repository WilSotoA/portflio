import styles from '../../styles/nav.module.css'
import Image from 'next/image'
import home from '../../assets/svg/Home.svg'
import about from '../../assets/svg/about.svg'
import work from '../../assets/svg/work.svg'
import contact from '../../assets/svg/contact.svg'
import { type AsideBarProps } from '@/app/types'

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
        <Image src={home} alt="Icon Home" />
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
        <Image src={about} alt="Icon About" />
      </a>
      <a
        href="#work"
        className={`${styles.sectionItem} ${
          activeLink === 'Work' ? styles.activeLink : ''
        }`}
        onClick={() => {
          onUpdateLink('Work')
        }}
      >
        <Image src={work} alt="Icon Work" />
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
        <Image src={contact} alt="Icon Contact" />
      </a>
    </aside>
  )
}

export default AsideBar
