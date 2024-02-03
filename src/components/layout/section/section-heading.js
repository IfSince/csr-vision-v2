import { m } from 'framer-motion'
import { viewport } from '../../../animation.config.js'
import { Reveal } from '../../animations/reveal.js'

export const SectionHeading = ({ align = 'left', children }) => {
  const alignmentClasses = {
    left: '',
    right: 'justify-self-end',
  }

  return (
    <m.h2 className={ `mb-[0.4em] mt-[0.75em] hyphens-auto xs:hyphens-none ${ alignmentClasses[align] }` }
          initial="initial"
          whileInView="enter"
          viewport={ viewport }>
      <Reveal initial={ undefined }>
        { children }
      </Reveal>
    </m.h2>
  )
}