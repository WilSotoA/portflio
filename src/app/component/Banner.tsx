'use client'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from '../styles/banner.module.css'
import developer from '../assets/svg/programming.svg'
import { useEffect, useState } from 'react'

function Banner (): JSX.Element {
  const [text, setText] = useState('')
  const originalText = `Mi nombre es <span>Wilmer Andres Soto Almeida</span> y soy
  un desarrollador Full Stack`

  useEffect(() => {
    let index = 0

    const interval = setInterval(() => {
      setText(originalText.substr(0, index))
      index++

      if (index > originalText.length) {
        clearInterval(interval)
      }
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [originalText])

  return (
    <main className={styles.main}>
      <section className={styles.containerInfo}>
        <div>
          <article className={styles.bannerHeader}>
            <p>Hey, ¿que tal? <span>👋</span></p>
          </article>
        </div>
        <article className={styles.bannerInfo}>
          <p>
            {parse(text)}
            <span className={styles.cursor}></span>
          </p>
        </article>
      </section>
      <section className={styles.containerImage}>
        <Image src={developer} className={styles.image} alt="Developer Image" />
      </section>
    </main>
  )
}

export default Banner
