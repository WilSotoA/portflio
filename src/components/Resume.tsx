import styles from '../styles/about.module.css'
import { resume } from '@/utils/data'
import { ResumeCategory } from '@/app/const'
import ResumeItem from './resume/ResumeItem'

function Resume () {
  return (
    <article className={styles.skills}>
      <h2 className={styles.subtitle}>Experiencia &amp; Educación</h2>
      <div className={styles.resumeContainer}>
        <div className={styles.resume}>
          {resume.map((re) => {
            if (re.category === ResumeCategory.EXPERIENCE) {
              return <ResumeItem key={re.id} {...re} />
            }
            return null
          })}
        </div>
        <div className={styles.resume}>
          {resume.map((re) => {
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
