import { m } from 'framer-motion'
import { viewport } from '../../../animation.config.js'

const dotReveal = {
  initial: { scale: 0 },
  inView: { scale: 1 },
}

const textReveal = {
  initial: { opacity: 0, x: -15 },
  inView: { opacity: 1, x: 0 },
}

const transition = { duration: 0.75, delay: 0.25, ease: [.16, .99, .41, .99] }

export const SectionHeading = ({ children }) =>
  <m.div className="mb-8 flex h-fit items-center gap-4 md:mb-10 lg:col-[content-start/span_2] xl:mb-12"
         initial="initial"
         whileInView="inView"
         viewport={ viewport }>
    <m.div className="rounded-full h-3.5 w-3.5 mb-0.5 bg-secondary"
           variants={ dotReveal }
           transition={ transition }/>
    <m.h3 className="font-medium lg:text-lg"
          variants={ textReveal }
          transition={ transition }>{ children }</m.h3>
  </m.div>