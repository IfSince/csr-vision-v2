import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export const useMousePosition = () => {
  const mouse = {
    x: useMotionValue(-50),
    y: useMotionValue(-50),
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  }

  const manageMouseMove = ({ clientX, clientY }) => {
    mouse.x.set(clientX)
    mouse.y.set(clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
  })

  return smoothMouse
}