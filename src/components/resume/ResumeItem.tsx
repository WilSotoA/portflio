import styles from '../../styles/about.module.css'
import { type ResumeItemProps } from '@/app/types'
import parse from 'html-react-parser'
import { ResumeCategory } from '@/app/const'
import { WorkIcon, AboutIcon } from '../Icons'

function ResumeItem ({ category, date, title, desc }: ResumeItemProps) {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeIcon}>
        {category === ResumeCategory.EXPERIENCE ? <WorkIcon /> : <AboutIcon />}
      </div>
      <span className={styles.resumeDate}>{date}</span>
      <h3 className={styles.resumeSubtitle}>{parse(title)}</h3>
      <p className={styles.resumeDescription}>{desc}</p>
    </div>
  )
}

export default ResumeItem
