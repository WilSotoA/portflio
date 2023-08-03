'use client'
import { useState, useEffect } from 'react'
import styles from '../styles/nav.module.css'
import Logo from './navbar/Logo'
import Sections from './navbar/Sections'
import Links from './navbar/Links'
import BurguerMenu from './navbar/BurguerMenu'
import AsideBar from './navbar/AsideBar'

function Nav (): JSX.Element {
  const [activeLink, setActiveLink] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [burguerClass, setBurguerClass] = useState('unclicked')
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [menuClass, setMenuClass] = useState('disabled')

  const updateMenu = (): void => {
    if (!isMenuClicked) {
      setBurguerClass('clicked')
      setMenuClass('')
    } else {
      setBurguerClass('unclicked')
      setMenuClass('disabled')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  useEffect(() => {
    const onScroll = (): void => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    }
    window.addEventListener('scroll', onScroll)
    return (): void => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onUpdateLink = (value: string): void => {
    setActiveLink(value)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Logo scrolled={scrolled} />
      <Sections onUpdateLink={onUpdateLink} activeLink={activeLink} />
      <Links />
      <BurguerMenu burguerClass={burguerClass} updateMenu={updateMenu} />
      {menuClass === 'disabled' || (
        <AsideBar
          menuClass={menuClass}
          onUpdateLink={onUpdateLink}
          activeLink={activeLink}
        />
      )}
    </nav>
  )
}

export default Nav
