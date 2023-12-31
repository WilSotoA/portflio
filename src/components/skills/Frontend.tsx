import Image from 'next/image'
import styles from '../../styles/about.module.css'

function Frontend () {
  return (
    <div className={styles.containerText}>
      <h2 className={styles.skillsTitle}>Front End</h2>
      <ul className={styles.window}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <picture className={styles.skillsImages}>
        <div className={styles.imageContainer}>
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="HTML"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>HTML</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="CSS"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>CSS</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>JavaScript</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original-wordmark.svg"
            alt="jQuery"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>jQuery</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="React"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>React</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
            alt="Redux"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>Redux</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg"
            alt="Next.js"
            width={60}
            height={60}
          />
          <div className={styles.tooltip}>Next.js</div>
        </div>
      </picture>
    </div>
  )
}

export default Frontend
