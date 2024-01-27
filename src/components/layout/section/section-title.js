import { m } from 'framer-motion'
import { scrollRevealConfig } from '../../../animation.config.js'

export const SectionTitle = ({ align = 'left', children }) => {
  const alignmentClasses = {
    left: '',
    center: 'md:col-start-5',
    right: 'justify-self-end lg:col-start-4',
  }
  return (
    <m.p className={ `mb-14 max-w-sm text-heading-3 sm:mb-16 md:mb-20 md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl ${ alignmentClasses[align] }` }
         { ...scrollRevealConfig(0.3) }>
      { children }
    </m.p>
  )
}