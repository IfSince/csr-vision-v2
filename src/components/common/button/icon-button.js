import { AnimatePresence, m } from 'framer-motion'
import { Magnetic } from '../../animations/magnetic.js'
import { scrollRevealAnimation } from '../../../animation.config.js'

export const IconButton = ({
  theme = 'light',
  themeClassName = '',
  size = 'sm',
  type = 'button',
  magneticMultiplier = 15,
  scrollAnimation = false,
  onClick,
  children,
  className,
  description,
}) => {
  const scrollRevealConfig = {
    ...(scrollAnimation && { ...scrollRevealAnimation(0.3) }),
  }

  const sizeClasses = {
    sm: 'h-12 md:h-14 4xl:h-16 p-3 md:p-3.5',
    lg: 'text-heading-1 h-[1em] w-[1em]',
    custom: '',
  }

  const themeClasses = {
    light: 'bg-secondary',
    dark: 'border border-secondary/20 hover:border-secondary/80 fill-secondary',
    custom: themeClassName,
  }

  const iconThemeClasses = {
    light: '',
    dark: 'transition-colors duration-300 fill-secondary group-focus-visible:fill-secondary group-hover:fill-secondary dark:fill-secondary/80',
  }

  return (
    <Magnetic className={ className } multiplier={ magneticMultiplier }>
      {
        position =>
          <m.button
            className={ `group duration-300 transition-colors pointer-events-auto flex aspect-square items-center justify-center rounded-full ${ themeClasses[theme] } ${ sizeClasses[size] }` }
            onClick={ onClick }
            type={ type }
            { ...scrollRevealConfig }>
            <m.div style={ position } className={ iconThemeClasses[theme] }>
              <AnimatePresence mode="wait">
                { children }
              </AnimatePresence>
              <span className="sr-only">{ description }</span>
            </m.div>
          </m.button>
      }
    </Magnetic>
  )
}
