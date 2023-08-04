import styles from '../../styles/nav.module.css'

interface BurguerMenuProps {
  updateMenu: () => void
  burguerClass: string
}

function BurguerMenu ({
  updateMenu,
  burguerClass
}: BurguerMenuProps): JSX.Element {
  return (
    <div className={styles.burguerMenu} onClick={updateMenu}>
      <div className={`${styles.burguerItem} ${styles[burguerClass]}`}></div>
      <div className={`${styles.burguerItem} ${styles[burguerClass]}`}></div>
      <div className={`${styles.burguerItem} ${styles[burguerClass]}`}></div>
    </div>
  )
}

export default BurguerMenu
