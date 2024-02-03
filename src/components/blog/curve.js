import { m } from 'framer-motion'

export const Curve = () => {
  const initialPath = `M100 0 L100 ${ window.innerHeight } Q200 ${ window.innerHeight / 2 } 100 0`
  const targetPath = `M100 0 L100 ${ window.innerHeight } Q100 ${ window.innerHeight / 2 } 100 0`
  const exitPath = `M100 0 L100 ${ window.innerHeight } Q0 ${ window.innerHeight / 2 } 100 0`

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: exitPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  }

  return (
    <svg className="absolute top-0 h-full fill-primary right-[-200px] stroke-secondary/20">
      <m.path variants={ curve } initial="initial" animate="enter" exit="exit"></m.path>
    </svg>
  )
}