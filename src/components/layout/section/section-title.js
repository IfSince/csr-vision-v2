import { m } from 'framer-motion'
import { scrollRevealAnimation } from '../../../animation.config.js'

export const SectionTitle = ({ align = 'left', Type = 'p', hyphens = 'off', marginTop = false, children }) => {
  const alignmentClasses = {
    left: '',
    center: 'md:col-start-5',
    right: 'justify-self-end lg:col-start-4',
  }

  return (
    <m.div className={ `mb-[1.5em] max-w-sm text-2xl md:max-w-lg lg:max-w-2xl 2xl:max-w-4xl
                      ${ hyphens === 'on' && 'hyphens-auto xs:hyphens-none' } ${ alignmentClasses[align] } ${ marginTop && 'mt-[0.5em]' }` }
           { ...scrollRevealAnimation(0.3) }>
      <Type>{ children }</Type>
    </m.div>
  )
}