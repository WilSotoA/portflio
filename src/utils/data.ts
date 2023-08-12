import { type ResumeItem } from '@/app/types'
import { ResumeCategory } from '@/app/const'
import { WorkIcon, AboutIcon } from '../components/Icons'

export const resume: ResumeItem[] = [
  {
    id: 1,
    category: ResumeCategory.EXPERIENCE,
    date: 'Oct 2022 - May 2023',
    title: 'Analista y desarrollador de software',
    desc: 'Hola Mundo 2'
  },
  {
    id: 2,
    category: ResumeCategory.EXPERIENCE,
    date: 'Oct 2022 - Abr 2023',
    title: 'Analista y desarrollador de software',
    desc: 'Hola Mundo'
  },
  {
    id: 3,
    category: ResumeCategory.EDUCATION,
    date: 'May 2023 - Act',
    title: 'Analista y desarrollador de software <span>SENA</span>',
    desc: 'Hola mundo'
  },
  {
    id: 4,
    category: ResumeCategory.EDUCATION,
    date: 'Oct 2022 - May 2023',
    title: 'Desarrollador Full Stack <span>SoyHenry</span>',
    desc: 'Hola Mundo 2'
  }
]
