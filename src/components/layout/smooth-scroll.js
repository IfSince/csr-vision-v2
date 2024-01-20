import { useCallback, useEffect, useRef, useState } from 'react'
import { m, useScroll, useSpring, useTransform } from 'framer-motion'
import { useIsMobile } from '../../hooks/use-is-mobile.js'

export const SmoothScroll = ({ children }) => {
  const isMobile = useIsMobile()

  const scrollRef = useRef(null)
  const [height, setHeight] = useState(0)
  const resizePageHeight = useCallback(entries => entries?.forEach(entry => setHeight(entry.contentRect?.height)), [])

  const { scrollY } = useScroll()
  const transform = useTransform(scrollY, [0, height], [0, -height])
  const spring = useSpring(transform, { damping: 15, mass: 0.2, stiffness: 70 })

  useEffect(() => {
    if (!isMobile) {
      const resizeObserver = new ResizeObserver(resizePageHeight)
      scrollRef && resizeObserver?.observe(scrollRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [scrollRef, resizePageHeight, isMobile])

  return (
    <>
      <m.div ref={ scrollRef }
             style={ { y: spring } }
             className={ `will-change-transform ${ !isMobile ? 'fixed top-0 left-0 w-full overflow-hidden' : '!translate-y-0 !transition-none' }` }>
        { children }
      </m.div>
      <div style={ { height } }
           className={ `${ !isMobile ? 'block' : 'hidden' }` }/>
    </>
  )
}