import styles from '../styles/about.module.css'
import Skills from './Skills'

function About () {
  return (
    <section className={styles.about} id="about">
      <h1 className={styles.title}>Sobre Mí</h1>
      <article className={styles.containerText}>
        <ul className={styles.window}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>
          En mi proyecto de vida, no tenía una idea clara de mi dirección
          profesional hasta que descubrí la programación. Quedé cautivado por el
          constante crecimiento que este campo ofrece.
        </p>
        <p>
          Lo que más me entusiasma acerca del desarrollo de aplicaciones web es
          la emoción de resolver problemas, el continuo proceso de adquirir
          nuevos conocimientos y la adhesión a las mejores prácticas con el fin
          de proporcionar a los clientes una experiencia excepcional. Aunque mi
          enfoque principal se centra en el backend debido a mi afinidad por el
          manejo de datos, también disfruto trabajando en el frontend, donde
          implemento patrones de diseño, optimización para SEO y otras áreas
          relacionadas.
        </p>
      </article>
      <Skills />
    </section>
  )
}

export default About
