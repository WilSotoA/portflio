'use client'
import parse from 'html-react-parser'
import Image from 'next/image'
import styles from '../styles/banner.module.css'
import developer from '../assets/svg/programming.svg'
import { useEffect, useState, useContext } from 'react'
import { LangContext } from '@/context/lang'

function Banner () {
  const { lang, changeLanguage } = useContext(LangContext)
  const [text, setText] = useState('')
  const originalText = lang.banner.message

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
          <article className={styles.bannerHeader} onClick={changeLanguage}>
            <p>{lang.banner.greeting} <span>👋</span></p>
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
