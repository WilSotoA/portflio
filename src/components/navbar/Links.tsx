import { useContext } from 'react'
import { LangContext } from '@/context/lang'
import styles from '../../styles/nav.module.css'
import { CvIcon, GithubIcon, LangIcon, LinkedinIcon } from '../Icons'

function Links () {
  const { changeLanguage } = useContext(LangContext)
  return (
    <div className={styles.links}>
      <button className={styles.icons} onClick={changeLanguage}>
        <LangIcon />
      </button>
      <a
        href="https://github.com/WilSotoA"
        target="__blank"
        className={styles.icons}
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/wilmer-soto/"
        target="__blank"
        className={styles.icons}
      >
        <LinkedinIcon />
      </a>
      <a
        href="CV_Wilmer_Andres_Soto_Almeida.pdf"
        target="__blank"
        className={styles.icons}
      >
        <CvIcon />
      </a>
    </div>
  )
}

export default Links
