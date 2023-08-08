import Image from 'next/image'
import styles from '../../styles/about.module.css'

function Others (): JSX.Element {
  return (
    <picture className={styles.skillsImages}>
      <Image
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        alt="Git"
        width={60}
        height={60}
      />
      <Image
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
        alt="Docker"
        width={60}
        height={60}
      />
      <Image
        src="https://d33wubrfki0l68.cloudfront.net/f1f475a6fda1c2c4be4cac04033db5c3293032b4/513a4/assets/images/markdown-mark-white.svg"
        alt="Markdown"
        width={60}
        height={60}
      />
      <Image
        src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1-1.svg"
        alt="Visual Studio Code"
        width={60}
        height={60}
      />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
        alt="Figma"
        width={60}
        height={60}
      />
    </picture>
  )
}

export default Others
