import Image from 'next/image'
import email from '../assets/svg/Emails-bro.svg'
import styles from '../styles/contact.module.css'

export default function Contact () {
  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.title}>Contacto</h1>
      <main className={styles.content}>
        <form className={styles.form}>
          <div className={styles.firstInputs}>
            <div className={styles.containerInputs}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" required />
            </div>
            <div className={styles.containerInputs}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
          </div>
          <div className={styles.containerInputs}>
            <label htmlFor="message">Mensaje</label>
            <textarea className={styles.message} id="message" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
        <picture className={styles.containerImage}>
          <Image src={email} alt="Imagen referente a contactos" />
        </picture>
      </main>
    </section>
  )
}
