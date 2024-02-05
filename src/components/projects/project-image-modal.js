import { m, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'


const scaleAnimation = {
  initial: { scale: 0 },
  enter: { scale: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0 }, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
}

export const ProjectImageModal = ({ index, projects = [] }) => {
  const motionValue = useMotionValue(index ?? 0)
  const transform = useTransform(motionValue, [0, projects.length - 1], [0, (projects.length - 1) * -100])
  const spring = useSpring(transform, { damping: 20, mass: 1, stiffness: 120 })

  useEffect(() => motionValue.set(index), [index, motionValue])

  return (
    <m.div className="relative h-full w-full overflow-hidden rounded-sm"
           variants={ scaleAnimation }
           initial="initial"
           animate="enter"
           exit="closed">
      <m.div className="absolute h-full w-full" style={ { top: useMotionTemplate`${ spring }%` } }>
        {
          projects.map(({ id, image, title }) => <GatsbyImage image={ image } alt={ title } key={ id } className="h-full w-full"/>)
        }
      </m.div>
    </m.div>
  )
}