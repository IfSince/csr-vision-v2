import { Magnetic } from '../../animations/magnetic.js'
import { AnimatePresence, m } from 'framer-motion'

export const SubmitIconButton = ({
  children,
  hasErrors = false,
}) => {
  return (
    <Magnetic multiplier={ hasErrors ? 0 : 35 }>
      {
        position =>
          <m.button
            className={ `group duration-300 transition-colors pointer-events-auto flex aspect-square items-center justify-center rounded-full text-heading-1 h-[1em] w-[1em]
                         border border-secondary/20 hover:border-secondary/80
                         fill-secondary group-focus-visible:fill-secondary group-hover:fill-secondary dark:fill-secondary/80
                         disabled:border-secondary/10 disabled:fill-secondary/10` }
            type="submit"
            disabled={ hasErrors }>
            <m.div style={ position }>
              <AnimatePresence mode="wait">
                { children }
              </AnimatePresence>
            </m.div>
          </m.button>
      }
    </Magnetic>
  )
}