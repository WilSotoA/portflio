import Projects from '@/components/Projects'
import About from '../components/About'
import Banner from '../components/Banner'
import MouseFollower from '../components/MouseFollower'
import Nav from '../components/Nav'
import styles from '../styles/home.module.css'

function Home (): JSX.Element {
  return (
    <>
      <MouseFollower />
      <main className={styles.main} id='home'>
      <Nav />
      <Banner />
      </main>
      <About />
      <Projects />
    </>
  )
}
export default Home
