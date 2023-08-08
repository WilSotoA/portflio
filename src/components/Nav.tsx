'use client'
import { useState, useEffect } from 'react'
import styles from '../styles/nav.module.css'
import Logo from './navbar/Logo'
import Sections from './navbar/Sections'
import Links from './navbar/Links'
import BurguerMenu from './navbar/BurguerMenu'
import AsideBar from './navbar/AsideBar'

function Nav (): JSX.Element {
  const [activeLink, setActiveLink] = useState('home')
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

      // Find the active section based on scroll position
      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveLink(section.id)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onUpdateLink = (value: string): void => {
    setActiveLink(value)
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <Logo scrolled={scrolled} />
        <Sections onUpdateLink={onUpdateLink} activeLink={activeLink} />
        <Links />
        <BurguerMenu burguerClass={burguerClass} updateMenu={updateMenu} />
      </nav>
      {menuClass === 'disabled' || (
        <AsideBar onUpdateLink={onUpdateLink} activeLink={activeLink} />
      )}
      {menuClass === 'disabled' || (
        <footer className={styles.linkFooter}>
          <Links />
        </footer>
      )}
    </>
  )
}

export default Nav
