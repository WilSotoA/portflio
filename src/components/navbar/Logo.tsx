import styles from '../../styles/nav.module.css'
import Image from 'next/image'
import logo from '../../assets/svg/Logo Wil.svg'
import logoBlack from '../../assets/svg/Logo Wil Black.svg'

function Logo ({ scrolled }: { scrolled: boolean }) {
  return (
    <div className={styles.containerLogo}>
      {scrolled
        ? (
        <Image
          src={logoBlack}
          alt="Logo de Wilmer S., con las letras < Wilmer S. /> y un icono de programador"
        />
          )
        : (
        <Image
          src={logo}
          alt="Logo de Wilmer S., con las letras < Wilmer S. /> y un icono de programador"
        />
          )}
    </div>
  )
}

export default Logo
