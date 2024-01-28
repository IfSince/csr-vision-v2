import { transform, useMotionValue, useSpring } from 'framer-motion'
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

  const morph = {
    scaleX: useMotionValue(1),
    scaleY: useMotionValue(1),
    rotate: useMotionValue(1),
  }

  const smoothMorph = {
    scaleX: useSpring(morph.scaleX, smoothOptions),
    scaleY: useSpring(morph.scaleY, smoothOptions),
    rotate: useSpring(morph.rotate, { duration: 0 }),
  }

  const manageMouseMove = ({ clientX, clientY }) => {
    const differenceX = clientX - mouse.x.get()
    const differenceY = clientY - mouse.y.get()

    const absX = Math.abs(differenceX)
    const absY = Math.abs(differenceY)
    const absMax = Math.max(absX, absY)
    const angle = Math.atan2(differenceY, differenceX)

    console.log(angle)


    morph.scaleX.set(transform(absX, [0, 7], [1, 5]))
    morph.scaleY.set(transform(absY, [0, 7], [1, 0.5]))
    morph.rotate.set(angle)

    mouse.x.set(clientX)
    mouse.y.set(clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
  })

  return { ...smoothMouse, ...smoothMorph }
}