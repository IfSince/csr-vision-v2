import { m } from 'framer-motion'
import { scrollRevealAnimation } from '../../../animation.config.js'

export const SectionText = ({ align = 'left', children }) => {
  const alignmentClasses = {
    left: '',
    right: 'justify-self-end lg:col-start-4',
  }

  return (
    <m.p className={ `mb-6 lg:mb-8 w-full max-w-lg text-heading-4 md:max-w-xl lg:max-w-2xl 2xl:max-w-3xl ${ alignmentClasses[align] }` }
         { ...scrollRevealAnimation(0.3) }>
      { children }
    </m.p>
  )
}