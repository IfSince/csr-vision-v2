import { m } from 'framer-motion'

const variants = {
  initial: {
    y: '120%',
    opacity: 0.5,
  },
  enter: i => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: i => ({
    y: '120%',
    opacity: 0.5,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
}

const variantsReducedMotion = {
  initial: {
    y: 0,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
}

export const Reveal = ({ children, ...attributes }) =>
  <m.span variants={ variants }
          initial="initial"
          custom={ [0, 0] }
          { ...attributes }>
    { children }
  </m.span>