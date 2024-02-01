import { useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { m, useScroll, useSpring, useTransform } from 'framer-motion'
import { useParallax } from '../../../hooks/use-parallax.js'

export const ImageIntro = ({ children }) => {
  const background = useRef(null)

  const { scrollYProgress } = useScroll({ target: background })
  const spring = useSpring(scrollYProgress, { damping: 15, mass: 0.2, stiffness: 70 })
  const transform = useTransform(spring, [0, 0.5], ['inset(15%)', 'inset(0%)'])

  const parallaxY = useParallax(background, [0, 70])

  return (
    <div className="relative -z-10 grid col-full-width h-[140vh] grid-cols-layout">
      <m.div className="absolute w-full h-[140vh] col-full-width"
             initial={ { scale: 0.5 } }
             animate={ { scale: 1 } }
             transition={ { duration: 1.75, ease: [.43, .83, .4, .98] } }
      >
        <m.div className="h-full w-full"
               ref={ background }
               style={ {
                 clipPath: transform,
                 borderRadius: spring,
                 y: parallaxY,
               } }>
          <StaticImage src="../../../images/background.png" alt="background image" className="pointer-events-none h-full w-full [filter:brightness(60%)]"/>
        </m.div>
      </m.div>

      { children }
    </div>
  )
}