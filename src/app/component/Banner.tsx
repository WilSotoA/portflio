import styles from '../styles/banner.module.css'

function Banner (): JSX.Element {
  return (
    <main className={styles.main}>
      <section className={styles.containerInfo}></section>
      <section className={styles.containerImage}></section>
    </main>
  )
}

export default Banner
