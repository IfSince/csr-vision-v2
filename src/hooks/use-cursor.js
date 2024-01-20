import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { useMousePosition } from './use-mouse-position.js'

const DEFAULT_ELEMENT = <></>
const DEFAULT_SIZE = { width: 16, height: 16 }
const DEFAULT_STYLES = {
  ...DEFAULT_SIZE,
  backgroundColor: 'rgb(65 124 94)',
}

export const useCursor = () => {
  const [transition, setTransition] = useState({})
  const [styles, setStyles] = useState(DEFAULT_STYLES)
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

  return [cursorElement, update, reset]
}