import Image from 'next/image'
import styles from '../../styles/about.module.css'

function Others () {
  return (
    <div className={styles.containerText}>
      <h2 className={styles.skillsTitle}>Otros</h2>
      <ul className={styles.window}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <picture className={styles.skillsImages}>
        <div className={styles.imageContainer}>
          <Image
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="Git"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>Git</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
            alt="Docker"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>Docker</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://d33wubrfki0l68.cloudfront.net/f1f475a6fda1c2c4be4cac04033db5c3293032b4/513a4/assets/images/markdown-mark-white.svg"
            alt="Markdown"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>Markdown</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1-1.svg"
            alt="Visual Studio Code"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>Visual Studio Code</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>Figma</div>
        </div>
      </picture>
    </div>
  )
}

export default Others
