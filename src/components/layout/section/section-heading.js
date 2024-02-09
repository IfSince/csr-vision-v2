import { m } from 'framer-motion'
import { viewport } from '../../../animation.config.js'
import { Reveal } from '../../animations/reveal.js'

export const SectionHeading = ({ align = 'left', Type = 'h2', children }) => {
  const alignmentClasses = {
    left: '',
    right: 'justify-self-end',
  }

  return (
    <m.div className={ `mb-[0.4em] mt-[0.75em] hyphens-auto xs:hyphens-none text-h2 ${ alignmentClasses[align] }` }
          initial="initial"
          whileInView="enter"
          viewport={ viewport }>
      <Reveal initial={ undefined }>
        <Type>{ children }</Type>
      </Reveal>
    </m.div>
  )
}