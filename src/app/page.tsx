import Nav from './component/Nav'
import styles from './styles/home.module.css'

function Home (): JSX.Element {
  return (
    <div>
      <main className={styles.main}>
      <Nav />
      <h1>Home</h1>
      </main>
    </div>
  )
}
export default Home
