import styles from '../../styles/nav.module.css'
import { CvIcon, GithubIcon, LinkedinIcon } from '../Icons'

function Links (): JSX.Element {
  return (
    <div className={styles.links}>
      <a
        href="https://github.com/WilSotoA"
        target="__blank"
        className={styles.icons}
      >
       <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/wilmer-soto-73b360272/"
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
