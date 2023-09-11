import { useContext } from 'react'
import { LangContext } from '@/context/lang'
import styles from '../styles/footer.module.css'

function Footer () {
  const { lang } = useContext(LangContext)
  return (
    <footer className={styles.footer}>
      {lang.footer.made} <span className={styles.hearth}> ❤ </span> {lang.footer.for} &copy;{lang.footer.year}.
    </footer>
  )
}

export default Footer
