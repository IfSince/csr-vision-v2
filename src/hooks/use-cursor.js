import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { useMousePosition } from './use-mouse-position.js'

const DEFAULT_ELEMENT = <></>
const DEFAULT_SIZE = { width: 16, height: 16 }
const DEFAULT_STYLES = {
  ...DEFAULT_SIZE,
  backgroundColor: 'var(--clr-rgb-accent)',
}

export const useCursor = () => {
  const [transition, setTransition] = useState({})
  const [styles, setStyles] = useState({ ...DEFAULT_STYLES })
  const [element, setElement] = useState(DEFAULT_ELEMENT)

  const mouse = useMousePosition()

  const update = ({
    props = null,
    element = DEFAULT_ELEMENT,
    transition = {},
  } = {}) => {
    setStyles(props ? { ...DEFAULT_STYLES, ...props } : null)
    setElement(element)
    setTransition(transition)
  }

  const reset = () => {
    setTransition({})
    setStyles(DEFAULT_STYLES)
    setElement(DEFAULT_ELEMENT)
  }

  const cursorElement =
    <m.div className="pointer-events-none fixed flex origin-center -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center rounded-full z-[9999]"
           style={ {
             left: mouse.x,
             top: mouse.y,
           } }
           animate={ styles }
           transition={ transition }>
      <AnimatePresence mode="wait">
        { element }
      </AnimatePresence>
    </m.div>


  const handleMouseLeave = () => setStyles({ width: 0, height: 0 })
  const handleMouseEnter = () => setStyles(current => current.width === 0 && current.height === 0 ? DEFAULT_STYLES : current)

  useEffect(() => {
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.documentElement.removeEventListener('mouseleave', () => handleMouseLeave)
      document.documentElement.removeEventListener('mouseenter', () => handleMouseEnter)
    }
  }, [])

  return [cursorElement, update, reset]
}