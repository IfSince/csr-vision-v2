import { m } from 'framer-motion'
import { scrollRevealAnimation } from '../../../animation.config.js'

export const SectionText = ({ align = 'left', children }) => {
  const alignmentClasses = {
    left: '',
    right: 'justify-self-end lg:col-start-4',
  }

  return (
    <m.p className={ `mb-[1em] w-full max-w-lg text-xl md:max-w-xl lg:max-w-2xl 2xl:max-w-3xl ${ alignmentClasses[align] }` }
         { ...scrollRevealAnimation(0.3) }>
      { children }
    </m.p>
  )
}