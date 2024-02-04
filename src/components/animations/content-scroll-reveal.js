import { m } from 'framer-motion'

const scrollRevealVariants = {
  initial: {
    clipPath: 'inset(0% 0% 100% 0%)',
  },
  inView: delay => ({
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      clipPath: { duration: 1, delay, ease: [.73, 0, .1, 1] },
    },
  }),
}

export const ContentScrollReveal = ({ className, children }) => {

  return (
    <m.div className={ `overflow-hidden ${ className }` }
           variants={ scrollRevealVariants }
           custom={ 0.3 }
           initial="initial"
           whileInView="inView"
           viewport={ { once: true, margin: '0px 0px -150px 0px' } }>
      { children }
    </m.div>
  )
}