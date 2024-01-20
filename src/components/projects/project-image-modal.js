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
    <m.div className="pointer-events-none relative flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-secondary"
           variants={ scaleAnimation }
           initial="initial"
           animate="enter"
           exit="closed">
      <m.div className="absolute h-full w-full"
             style={ { top: useMotionTemplate`${ spring }%` } }>
        {
          projects.map(({ id, image, image_alt }) =>
            <div className="flex h-full w-full items-center justify-center" key={ id }>
              <GatsbyImage alt={ image_alt } image={ image } className="h-full w-full"/>
            </div>,
          )
        }
      </m.div>
    </m.div>
  )
}