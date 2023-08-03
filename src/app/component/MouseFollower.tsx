'use client'
import { useState, useEffect } from 'react'
import styles from '../styles/mouse.module.css'

const MouseFollower = (): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      const { clientX, clientY } = event
      const div = document.querySelector(
        `.${styles.mouseFollower}`
      ) as HTMLElement
      const rect = div.getBoundingClientRect()

      const x = clientX - rect.width / 2
      const y = clientY - rect.height / 2

      setPosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className={styles.mouseFollower}
      style={{ left: position.x, top: position.y }}
    ></div>
  )
}

export default MouseFollower
