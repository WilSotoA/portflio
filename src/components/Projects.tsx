import styles from '../styles/projects.module.css'
import Image from 'next/image'
import btender from '../assets/btender.gif'
import rickandmorty from '../assets/rickandmorty.gif'
function Projects (): JSX.Element {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.title}>Proyectos</h1>
      <article className={styles.containerProjects}>
        <picture>
          <Image className={styles.image} src={btender} alt='Pagina Btender'/>
        </picture>
        <picture>
        <Image className={styles.image} src={rickandmorty} alt='Pagina Rick And Morty'/>
        </picture>
        <picture></picture>
        <picture></picture>
      </article>
    </section>
  )
}

export default Projects
