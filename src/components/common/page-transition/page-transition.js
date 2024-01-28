import { m } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  enter: {
    opacity: 1,
    transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
}

export const PageTransition = ({ children }) =>
  <m.div variants={ variants }
         initial="initial"
         animate="enter"
         exit="exit">
    { children }
  </m.div>