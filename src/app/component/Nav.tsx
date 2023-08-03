'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/nav.module.css'
import logo from '../assets/svg/Logo Wil.svg'
import logoBlack from '../assets/svg/Logo Wil Black.svg'
import home from '../assets/svg/Home.svg'
import about from '../assets/svg/about.svg'
import work from '../assets/svg/work.svg'
import contact from '../assets/svg/contact.svg'

function Nav (): JSX.Element {
  const [activeLink, setActiveLink] = useState('Home')
  const [scrolled, setScrolled] = useState(false)

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
      <ul className={styles.sections}>
        <a
          href="#home"
          className={`${styles.sectionItem} ${
            activeLink === 'Home' ? styles.activeLink : ''
          }`}
          onClick={() => {
            onUpdateLink('Home')
          }}
        >
          <Image src={home} alt="Icon Home" />
          <span>Home</span>
        </a>
        <a
          href="#about"
          className={`${styles.sectionItem} ${
            activeLink === 'About' ? styles.activeLink : ''
          }`}
          onClick={() => {
            onUpdateLink('About')
          }}
        >
          <Image src={about} alt="Icon About" />
          <span>Skills</span>
        </a>
        <a
          href="#work"
          className={`${styles.sectionItem} ${
            activeLink === 'Work' ? styles.activeLink : ''
          }`}
          onClick={() => {
            onUpdateLink('Work')
          }}
        >
          <Image src={work} alt="Icon Work" />
          <span>Work</span>
        </a>
        <a
          href="#contact"
          className={`${styles.sectionItem} ${
            activeLink === 'Contact' ? styles.activeLink : ''
          }`}
          onClick={() => {
            onUpdateLink('Contact')
          }}
        >
          <Image src={contact} alt="Icon Contact" />
          <span>Contact</span>
        </a>
      </ul>
      <div className={styles.links}>
        <a
          href="https://github.com/WilSotoA"
          target="__blank"
          className={styles.icons}
        >
          <svg
            width="56"
            height="51"
            viewBox="0 0 56 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="github">
              <path
                id="Vector"
                d="M28 4.25C24.9358 4.25 21.9016 4.79965 19.0707 5.86756C16.2397 6.93547 13.6675 8.50074 11.5008 10.474C7.12495 14.4591 4.66663 19.8641 4.66663 25.5C4.66663 34.8925 11.3633 42.8612 20.6266 45.6875C21.7933 45.8575 22.1666 45.1987 22.1666 44.625C22.1666 44.1362 22.1666 42.7975 22.1666 41.0337C15.7033 42.3088 14.3266 38.1862 14.3266 38.1862C13.2533 35.7212 11.7366 35.0625 11.7366 35.0625C9.61329 33.745 11.9 33.7875 11.9 33.7875C14.2333 33.9362 15.47 35.9762 15.47 35.9762C17.5 39.2062 20.93 38.25 22.26 37.74C22.47 36.3587 23.0766 35.4237 23.73 34.8925C18.55 34.3612 13.1133 32.5338 13.1133 24.4375C13.1133 22.0788 14 20.1875 15.5166 18.6788C15.2833 18.1475 14.4666 15.9375 15.75 13.0688C15.75 13.0688 17.71 12.495 22.1666 15.2362C24.01 14.7688 26.0166 14.535 28 14.535C29.9833 14.535 31.99 14.7688 33.8333 15.2362C38.29 12.495 40.25 13.0688 40.25 13.0688C41.5333 15.9375 40.7166 18.1475 40.4833 18.6788C42 20.1875 42.8866 22.0788 42.8866 24.4375C42.8866 32.555 37.4266 34.34 32.2233 34.8713C33.0633 35.53 33.8333 36.8263 33.8333 38.8025C33.8333 41.65 33.8333 43.945 33.8333 44.625C33.8333 45.1987 34.2066 45.8787 35.3966 45.6875C44.66 42.84 51.3333 34.8925 51.3333 25.5C51.3333 22.7094 50.7298 19.9461 49.5572 17.368C48.3845 14.7898 46.6658 12.4472 44.4991 10.474C42.3324 8.50074 39.7602 6.93547 36.9292 5.86756C34.0983 4.79965 31.0641 4.25 28 4.25Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/wilmer-soto-73b360272/"
          target="__blank"
          className={styles.icons}
        >
          <svg
            width="56"
            height="51"
            viewBox="0 0 56 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="linkedin">
              <path
                id="Vector"
                d="M43.2034 6.24487C44.6356 6.24487 46.0093 6.76879 47.022 7.70137C48.0348 8.63395 48.6038 9.8988 48.6038 11.2177V46.0272C48.6038 47.3461 48.0348 48.6109 47.022 49.5435C46.0093 50.4761 44.6356 51 43.2034 51H5.40042C3.96814 51 2.59452 50.4761 1.58175 49.5435C0.568971 48.6109 0 47.3461 0 46.0272V11.2177C0 9.8988 0.568971 8.63395 1.58175 7.70137C2.59452 6.76879 3.96814 6.24487 5.40042 6.24487H43.2034ZM41.8532 44.784V31.6061C41.8532 29.4563 40.9258 27.3946 39.275 25.8745C37.6242 24.3544 35.3852 23.5004 33.0506 23.5004C30.7554 23.5004 28.0822 24.7934 26.7861 26.7328V23.9729H19.2525V44.784H26.7861V32.5261C26.7861 30.6115 28.4602 29.0451 30.5394 29.0451C31.542 29.0451 32.5035 29.4119 33.2124 30.0647C33.9214 30.7175 34.3197 31.6029 34.3197 32.5261V44.784H41.8532ZM10.4768 20.0692C11.6799 20.0692 12.8338 19.6291 13.6845 18.8458C14.5352 18.0624 15.0132 16.9999 15.0132 15.8921C15.0132 13.5797 12.988 11.6901 10.4768 11.6901C9.26654 11.6901 8.10583 12.1328 7.25003 12.9208C6.39424 13.7088 5.91346 14.7776 5.91346 15.8921C5.91346 18.2044 7.96562 20.0692 10.4768 20.0692ZM14.2301 44.784V23.9729H6.75052V44.784H14.2301Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
        <a href="CV_Wilmer_Andres_Soto_Almeida.pdf" target="__blank" className={styles.icons}>
          <svg
            width="56"
            height="51"
            viewBox="0 0 56 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="cv">
              <path
                id="Vector"
                d="M19.7868 15.7027C21.8774 15.7027 23.5574 14.4948 23.5574 12.9916C23.5574 11.4885 21.8774 10.2806 19.7868 10.2806C17.6961 10.2806 16.0161 11.4885 16.0161 12.9916C16.0161 14.4948 17.6961 15.7027 19.7868 15.7027Z"
                fill="white"
              />
              <path
                id="Vector_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.3652 21.6079C27.3652 18.7089 23.9679 16.6153 19.7866 16.6153C15.6052 16.6153 12.2079 18.7089 12.2079 21.6079V22.9768C12.2079 23.2184 12.3572 23.46 12.5812 23.6211C12.8052 23.7821 13.1412 23.8895 13.4772 23.8895H26.0959C26.4319 23.8895 26.7679 23.7821 26.9919 23.6211C27.2159 23.46 27.3652 23.2184 27.3652 22.9768V21.6079Z"
                fill="white"
              />
              <path
                id="Vector_3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1334 29.5263C12.1334 28.4145 13.387 27.5132 14.9334 27.5132H41.0668C42.6131 27.5132 43.8668 28.4145 43.8668 29.5263C43.8668 30.6381 42.6131 31.5395 41.0668 31.5395H14.9334C13.387 31.5395 12.1334 30.6381 12.1334 29.5263Z"
                fill="white"
              />
              <path
                id="Vector_4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1334 37.579C12.1334 36.4672 13.387 35.5658 14.9334 35.5658H41.0668C42.6131 35.5658 43.8668 36.4672 43.8668 37.579C43.8668 38.6908 42.6131 39.5921 41.0668 39.5921H14.9334C13.387 39.5921 12.1334 38.6908 12.1334 37.579Z"
                fill="white"
              />
              <path
                id="Vector_5"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5.36842C0 2.40967 3.35149 0 7.46667 0H32.4427C34.5401 0 36.518 0.639288 37.912 1.69441L37.9348 1.71156L54.0325 14.3329C55.3728 15.3627 56 16.7076 56 17.9842V45.6316C56 48.5904 52.6486 51 48.5333 51H7.46667C3.35149 51 0 48.5904 0 45.6316V5.36842ZM32.4389 5.36842H7.46667V45.6316H48.5333V17.9842C48.5333 17.9774 48.5326 17.9699 48.5307 17.9623L32.4934 5.38834L32.4845 5.38345C32.4766 5.37956 32.4681 5.37602 32.4591 5.3732C32.4483 5.36987 32.4389 5.36842 32.4389 5.36842Z"
                fill="white"
              />
              <path
                id="Vector_6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.4423 0C34.5042 0 36.1757 1.20176 36.1757 2.68421V15.3H52.2663C54.3282 15.3 55.9997 16.5018 55.9997 17.9842C55.9997 19.4666 54.3282 20.6684 52.2663 20.6684H32.4423C30.3804 20.6684 28.709 19.4666 28.709 17.9842V2.68421C28.709 1.20176 30.3804 0 32.4423 0Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Nav
