import Banner from './component/Banner'
import MouseFollower from './component/MouseFollower'
import Nav from './component/Nav'
import styles from './styles/home.module.css'

function Home (): JSX.Element {
  return (
    <>
      <MouseFollower />
      <main className={styles.main} id='home'>
      <Nav />
      <Banner />
      </main>
      <div id='about'>
        About
      </div>
    </>
  )
}
export default Home
