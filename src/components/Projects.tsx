import { useContext } from 'react'
import { LangContext } from '@/context/lang'
import styles from '../styles/projects.module.css'
import Image from 'next/image'
import btender from '../assets/btender.gif'
import rickandmorty from '../assets/rickandmorty.gif'
import pokemon from '../assets/pokemon.gif'
import gelvez from '../assets/gelvez.png'
import dulcepan from '../assets/dulcepan.gif'
import greenland from '../assets/greenland.gif'
import { LinkIcon, GithubIcon } from './Icons'

function Projects () {
  const { lang } = useContext(LangContext)
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.title}>{lang.projects.title}</h1>
      <article className={styles.containerProjects}>
        <div className={styles.mansoryItem}>
          <div className={styles.links}>
            <a href="https://btender.com.co/" target="_blank" rel="noreferrer">
              <LinkIcon />
            </a>
          </div>
          <Image
            className={styles.image}
            src={btender}
            alt="Proyecto Btender"
          />
          <div className={styles.content}>
            <h3>BTENDER</h3>
            <p>{lang.projects.descriptions[0]}</p>
            <p className={styles.skills}>
              <span>HTML &amp; CSS</span>
              <span>PHP</span>
              <span>JavaScript</span>
              <span>jQuery</span>
              <span>MySQL</span>
            </p>
          </div>
        </div>
        <div className={styles.mansoryItem}>
          <div className={styles.links}>
            <a
              href="https://rick-and-morty-wilsotoa.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon />
            </a>
            <a
              href="https://github.com/WilSotoA/rick-and-morty"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
          <Image
            className={styles.image}
            src={rickandmorty}
            alt="Proyecto Rick And Morty"
          />
          <div className={styles.content}>
            <h3>Rick and Morty</h3>
            <p>{lang.projects.descriptions[1]}</p>
            <p className={styles.skills}>
              <span>HTML &amp; CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>React</span>
              <span>Express.js</span>
              <span>Sequelize</span>
              <span>PostgreSQL</span>
            </p>
          </div>
        </div>
        <div className={styles.mansoryItem}>
          <div className={styles.links}>
            <a
              href="https://pokemon-wilsotoa.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon />
            </a>
            <a
              href="https://github.com/WilSotoA/pokemon"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
          <Image
            className={styles.image}
            src={pokemon}
            alt="Proyecto Pokemon"
          />
          <div className={styles.content}>
            <h3>Pokemon</h3>
            <p>{lang.projects.descriptions[2]}</p>
            <p className={styles.skills}>
              <span>HTML &amp; CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>React</span>
              <span>Express.js</span>
              <span>Sequelize</span>
              <span>PostgreSQL</span>
            </p>
          </div>
        </div>
        <div className={styles.mansoryItem}>
          <div className={styles.links}>
            <a
              href="https://greenland-client.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon />
            </a>
            <a
              href="https://github.com/edisonrmedina/greenland"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
          <Image
            className={styles.image}
            src={greenland}
            alt="Proyecto GreenLand"
          />
          <div className={styles.content}>
            <h3>GreenLand</h3>
            <p>{lang.projects.descriptions[3]}</p>
            <p className={styles.skills}>
              <span>HTML &amp; CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>React</span>
              <span>Express.js</span>
              <span>Sequelize</span>
              <span>PostgreSQL</span>
            </p>
          </div>
        </div>
        <div className={styles.mansoryItem}>
          <div className={styles.links}>
            <a
              href="https://github.com/WilSotoA/Panaderia"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
          <Image
            className={styles.image}
            src={dulcepan}
            alt="Proyecto Dulce Pan"
          />
          <div className={styles.content}>
            <h3>Dulce Pan</h3>
            <p>{lang.projects.descriptions[4]}</p>
            <p className={styles.skills}>
              <span>HTML &amp; CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>jQuery</span>
              <span>MySQL</span>
            </p>
          </div>
        </div>
        <div className={styles.mansoryItem}>
          <Image className={styles.image} src={gelvez} alt="Proyecto Gelvez" />
          <div className={styles.content}>
            <h3>Gelvez intranet</h3>
            <p>{lang.projects.descriptions[5]}</p>
            <p className={styles.skills}>
              <span>HTML &amp; CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>Laravel</span>
              <span>PostgreSQL</span>
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Projects
