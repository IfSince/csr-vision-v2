import { m } from 'framer-motion'
import { scrollRevealAnimation } from '../../../animation.config.js'

export const SectionList = ({ align = 'right', children }) => {
  const alignmentClasses = {
    left: '',
    right: 'justify-self-end lg:col-start-4',
  }

  return (
    <m.ol
      className={ `ps-10 list-decimal [margin-block-start:1em] mb-[calc(1em+1.5rem)] lg:mb-[calc(1em+2rem)] space-y-5 w-full max-w-lg text-xl md:max-w-xl lg:max-w-2xl 2xl:max-w-3xl ${ alignmentClasses[align] }` }
      { ...scrollRevealAnimation(0.3) }>
      { children }
    </m.ol>
  )
}