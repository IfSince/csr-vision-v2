import { m, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useDesktopEventListener } from '../../hooks/use-desktop-event-listener.js'

export const Magnetic = ({ multiplier = 15, children, className }) => {
  const ref = useRef(0)

  const mapRange = (
    inputLower,
    inputUpper,
    outputLower,
    outputUpper,
  ) => {
    const INPUT_RANGE = inputUpper - inputLower
    const OUTPUT_RANGE = outputUpper - outputLower

    return value => outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  const setTransform = ({ currentTarget: item, clientX, clientY }, x, y) => {
    const bounds = item.getBoundingClientRect()
    const relativeX = clientX - bounds.left
    const relativeY = clientY - bounds.top

    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX)
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY)

    x.set(xRange * multiplier)
    y.set(yRange * multiplier)
  }

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const config = { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }
  const xSpring = useSpring(x, config)
  const ySpring = useSpring(y, config)

  const reset = () => {
    x.set(0)
    y.set(0)
  }
  const handlePointerMove = (e) => setTransform(e, x, y)

  useDesktopEventListener(ref, 'pointermove', handlePointerMove)
  useDesktopEventListener(ref, 'pointerleave', reset)

  return (
    <m.div className={ className }
           ref={ ref }
           style={ { x: xSpring, y: ySpring } }>
      { children({ x: xSpring, y: ySpring }) }
    </m.div>
  )
}