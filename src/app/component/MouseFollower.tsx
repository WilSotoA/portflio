'use client'
import { useState, useEffect } from 'react'
import styles from '../styles/mouse.module.css'

const MouseFollower = (): JSX.Element => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY })
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
