import { m } from 'framer-motion'

const containerVariants = {
  initial: {
    scale: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    scale: 0,
  }
}

const dotVariants = {
  initial: {
    y: '-50%',
  },
  animate: {
    y: '50%',
  },
}
const dotTransition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
}

export const Loading = () =>
  <m.div className="flex gap-[0.1em] p-[0.3em] md:gap-[0.08em]"
         variants={ containerVariants }
         initial="initial"
         animate="animate">
    <m.span className="aspect-square rounded-full h-[0.06em] bg-secondary" variants={ dotVariants } transition={ dotTransition }/>
    <m.span className="aspect-square rounded-full h-[0.06em] bg-secondary" variants={ dotVariants } transition={ dotTransition }/>
    <m.span className="aspect-square rounded-full h-[0.06em] bg-secondary" variants={ dotVariants } transition={ dotTransition }/>
  </m.div>