import { m } from 'framer-motion'
import { scrollRevealAnimation } from '../../../animation.config.js'

export const SectionTitle = ({ align = 'left', Type = 'p', hyphens = 'off', children }) => {
  const alignmentClasses = {
    left: '',
    center: 'md:col-start-5',
    right: 'justify-self-end lg:col-start-4',
  }

  return (
    <m.div className={ `mb-14 max-w-sm text-2xl sm:mb-16 md:mb-20 md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl
                      ${ hyphens === 'on' && 'hyphens-auto xs:hyphens-none' } ${ alignmentClasses[align] }` }
         { ...scrollRevealAnimation(0.3) }>
      <Type>{ children }</Type>
    </m.div>
  )
}