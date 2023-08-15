import { type ResumeItem } from '@/app/types'
import { ResumeCategory } from '@/app/const'

export const resume: ResumeItem[] = [
  {
    id: 1,
    category: ResumeCategory.EXPERIENCE,
    date: 'Oct 2022 - May 2023',
    title: 'Analista y desarrollador de software <span>BTENDER</span>',
    desc: 'Desarrollo, mantenimiento y despliegue de aplicación web para cotizaciones del servicio ofrecido por la compañia BTENDER'
  },
  {
    id: 2,
    category: ResumeCategory.EXPERIENCE,
    date: 'Oct 2022 - Abr 2023',
    title:
      'Analista y desarrollador de software <span>Gelvez Distribuciones SAS</span>',
    desc: 'Desarrollo e implementacion de aplicación web para intranet de la empresa, consultas SQL complejas a base de datos HANA'
  },
  {
    id: 3,
    category: ResumeCategory.EDUCATION,
    date: 'May 2023 - Act',
    title: 'Desarrollador Full Stack <span>SoyHenry</span>',
    desc: 'Bootcamp virtual SoyHenry en el cual aprendi y fortaleci tecnologias tales como: JavaScript, React, Redux, Node.js, Express.js, Sequelize, entre otras.'
  },
  {
    id: 4,
    category: ResumeCategory.EDUCATION,
    date: 'Oct 2022 - May 2023',
    title: 'Analista y desarrollador de software <span>SENA</span>',
    desc: 'Estudio tecnologico, en el cual adquiri conocimientos desde documentación, recolección de requerimientos, negociación y tecnologias como HTML, CSS, JavaScript, jQuery, PHP, JAVA, SQL.'
  }
]
