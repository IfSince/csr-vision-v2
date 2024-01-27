import { m } from 'framer-motion'
import { scrollRevealConfig } from '../../../animation.config.js'

export const SectionText = ({ align = 'left', children }) => {
  const alignmentClasses = {
    left: '',
    right: 'justify-self-end lg:col-start-4',
  }

  return (
    <m.p className={ `mb-6 lg:mb-8 w-full max-w-sm text-heading-4 md:max-w-lg lg:max-w-xl 2xl:max-w-2xl ${ alignmentClasses[align] }` }
         { ...scrollRevealConfig(0.3) }>
      { children }
    </m.p>
  )

}