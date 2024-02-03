import { m } from 'framer-motion'
import { viewport } from '../../../animation.config.js'

export const Headline = ({ marginTop = false }) =>
  <m.hr className={ `mb-4 w-0 col-full-width border-secondary/20 md:mb-6 xl:mb-8 ${ marginTop && 'mt-14 lg:mt-16 xl:mt-20' }` }
        initial={ { width: 0 } }
        whileInView={ { width: '100%' } }
        viewport={ { ...viewport, once: false } }
        transition={ { duration: 1, ease: [0.76, 0, 0.24, 1] } }/>