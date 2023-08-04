import Image from 'next/image'
import styles from '../styles/projects.module.css'
import btender from '../assets/btender.gif'

function Projects (): JSX.Element {
  return (
    <section id='projects' className={styles.projects}>
      <h1 className={styles.title}>Proyectos</h1>
      <article className={styles.containerProjects}>
        <picture>
          <Image src={btender} alt='btender page'></Image>
        </picture>
        <picture>hola 2</picture>
        <picture>hola 3</picture>
        <picture>hola 4</picture>
      </article>
    </section>
  )
}

export default Projects
