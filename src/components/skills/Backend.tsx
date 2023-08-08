import Image from 'next/image'
import styles from '../../styles/about.module.css'

function Backend (): JSX.Element {
  return (
    <div className={styles.containerText}>
      <h2 className={styles.skillsTitle}>Back End</h2>
      <ul className={styles.window}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <picture className={styles.skillsImages}>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
          alt="PHP"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg"
          alt="Laravel"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
          alt="Java"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="Python"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
          alt="Express.js"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg"
          alt="Sequelize.js"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
          alt="MySQL"
          width={60}
          height={60}
        />
        <Image
          src="https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg"
          alt="MariaDB"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
          alt="Oracle Database"
          width={60}
          height={60}
        />
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
          alt="PostgreSQL"
          width={60}
          height={60}
        />
      </picture>
    </div>
  )
}

export default Backend
