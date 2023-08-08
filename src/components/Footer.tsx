import styles from '../styles/footer.module.css'

function Footer (): JSX.Element {
  return (
    <footer className={styles.footer}>
      Hecho con <span className={styles.hearth}> ❤ </span> por WilSotoA &copy;2023.
    </footer>
  )
}

export default Footer
