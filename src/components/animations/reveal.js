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

export const Reveal = ({ className = '', children, ...attributes }) =>
  <span className={ `inline-block [clip-path:polygon(0%_-5%,0%_105%,105%_105%,105%_-5%)] ${ className }` }>
    <m.span variants={ variants }
            className="block"
            initial="initial"
            custom={ [0, 0] }
            { ...attributes }>
      { children }
    </m.span>
  </span>