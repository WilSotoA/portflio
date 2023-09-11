import { useContext } from 'react'
import { LangContext } from '@/context/lang'
import styles from '../styles/about.module.css'
import { ResumeCategory } from '@/app/const'
import ResumeItem from './resume/ResumeItem'

function Resume () {
  const { lang } = useContext(LangContext)
  return (
    <article className={styles.skills}>
      <h2 className={styles.subtitle}>{lang.resume.title}</h2>
      <div className={styles.resumeContainer}>
        <div className={styles.resume}>
          {lang.resume.resumeItem.map((re) => {
            if (re.category === ResumeCategory.EXPERIENCE) {
              return <ResumeItem key={re.id} {...re} />
            }
            return null
          })}
        </div>
        <div className={styles.resume}>
          {lang.resume.resumeItem.map((re) => {
            if (re.category === ResumeCategory.EDUCATION) {
              return <ResumeItem key={re.id} {...re} />
            }
            return null
          })}
        </div>
      </div>
    </article>
  )
}

export default Resume
