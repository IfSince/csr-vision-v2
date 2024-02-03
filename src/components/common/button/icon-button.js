import { AnimatePresence, m } from 'framer-motion'
import { Magnetic } from '../../animations/magnetic.js'

export const IconButton = ({ onClick, children }) => {
  return (
    <Magnetic>
      {
        position =>
          <button className="pointer-events-auto flex aspect-square h-12 items-center justify-center rounded-full bg-secondary md:h-14 4xl:h-16"
                  onClick={ onClick }>
            <m.div style={ position }>
              <AnimatePresence mode="wait">
                { children }
              </AnimatePresence>
            </m.div>
          </button>
      }
    </Magnetic>
  )
}
