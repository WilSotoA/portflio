import styles from '../styles/projects.module.css'
import Image from 'next/image'
import btender from '../assets/btender.gif'
import rickandmorty from '../assets/rickandmorty.gif'
import gelvez from '../assets/gelvez.png'
import dulcepan from '../assets/dulcepan.gif'

function Projects (): JSX.Element {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.title}>Proyectos</h1>
      <article className={styles.containerProjects}>
        <picture>
          <Image className={styles.image} src={btender} alt='Proyecto Btender'/>
        </picture>
        <picture>
        <Image className={styles.image} src={rickandmorty} alt='Proyecto Rick And Morty'/>
        </picture>
        <picture>
        <Image className={styles.image} src={gelvez} alt='Proyecto Gelvez'/>
        </picture>
        <picture>
        <Image className={styles.image} src={dulcepan} alt='Proyecto Dulce Pan'/>
        </picture>
      </article>
    </section>
  )
}

export default Projects
