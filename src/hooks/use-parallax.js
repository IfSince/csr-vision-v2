import { useMotionTemplate, useScroll, useSpring, useTransform } from 'framer-motion'
import { useIsMobile } from './use-is-mobile.js'

export const useParallax = (target, range = [0, 50]) => {
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], range)
  const springY = useSpring(y, { damping: 15, mass: 0.2, stiffness: 70 })

  return useMotionTemplate`${ isMobile ? y : springY }%`
}