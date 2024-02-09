import { m } from 'framer-motion'
import { viewport } from '../../../animation.config.js'

const transition = { duration: 0.75, delay: 0.25, ease: [.16, .99, .41, .99] }

const dotReveal = {
  initial: { scale: 0, transition },
  inView: { scale: 1, transition },
}

const textReveal = {
  initial: { opacity: 0, x: -15, transition },
  inView: { opacity: 1, x: 0, transition },
}

export const SectionDotTitle = ({ children, Type = 'h3' }) =>
  <m.div className="mb-12 flex h-fit items-center gap-4 lg:col-[content-start/span_3]"
         initial="initial"
         whileInView="inView"
         viewport={ { ...viewport, once: false } }>
    <m.div className="block rounded-full h-3.5 w-3.5 mb-0.5 bg-secondary" variants={ dotReveal }/>
    <m.div variants={ textReveal }>
      <Type className="text-base font-medium lg:text-lg">{ children }</Type>
    </m.div>
  </m.div>