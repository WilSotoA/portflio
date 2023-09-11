import Projects from '@/components/Projects'
import About from '../components/About'
import Banner from '../components/Banner'
import MouseFollower from '../components/MouseFollower'
import Nav from '../components/Nav'
import styles from '../styles/home.module.css'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import { LangProvider } from '@/context/lang'

function Home () {
  return (
    <LangProvider>
      <>
        <MouseFollower />
        <section className={styles.main} id="home">
          <Nav />
          <Banner />
        </section>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </>
    </LangProvider>
  )
}
export default Home
