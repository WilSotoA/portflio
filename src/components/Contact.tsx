import { useContext, useRef, useState } from 'react'
import { LangContext } from '@/context/lang'
import Image from 'next/image'
import email from '../assets/svg/Emails-bro.svg'
import styles from '../styles/contact.module.css'
import emailjs from '@emailjs/browser'

export default function Contact () {
  const { lang } = useContext(LangContext)
  const [sucess, setSucess] = useState(false)
  const [error, setError] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current !== null) {
      emailjs
        .sendForm(
          'service_3d04un5',
          'template_x70mgkp',
          form.current,
          'Dm3XhbnkgGj94Sk6y'
        )
        .then((result) => {
          setSucess(true)
          setError(false)
        })
        .catch((error) => {
          console.error(error.text)
          setError(true)
          setSucess(false)
        })
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <h1 className={styles.title}>{lang.contact.title}</h1>
      <main className={styles.content}>
        <form
          className={styles.form}
          ref={form}
          onSubmit={handleSubmit}
          placeholder=""
        >
          <div className={styles.firstInputs}>
            <div className={styles.containerInputs}>
              <label htmlFor="name">{lang.contact.name}</label>
              <input type="text" id="name" name="name" required min={5} />
            </div>
            <div className={styles.containerInputs}>
              <label htmlFor="email">{lang.contact.email}</label>
              <input type="email" id="email" name="email" required min={5} />
            </div>
          </div>
          <div className={styles.containerInputs}>
            <label htmlFor="message">{lang.contact.message}</label>
            <textarea
              className={styles.message}
              id="message"
              name="message"
              required
            />
          </div>
          <button type="submit">{lang.contact.send}</button>
          {
            <p className={`${styles.sucess} ${sucess ? styles.active : ''}`}>
              {lang.contact.sucess}
            </p>
          }
          {
            <p className={`${styles.error} ${error ? styles.active : ''}`}>
              {lang.contact.failure}
            </p>
          }
        </form>
        <picture className={styles.containerImage}>
          <Image src={email} alt="Imagen referente a contactos" />
        </picture>
      </main>
    </section>
  )
}
