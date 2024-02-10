import { useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { m, useScroll, useTransform } from 'framer-motion'

export const ImageIntro = ({ children }) => {
  const background = useRef(null)

  const { scrollYProgress } = useScroll({ target: background })
  const transform = useTransform(scrollYProgress, [0, 0.5], ['inset(15%)', 'inset(0%)'])

  return (
    <div className="relative -z-10 grid col-full-width h-[120vh] grid-cols-layout" data-scroll data-scroll-speed="-0.7">
      <m.div className="absolute w-full h-[140vh] col-full-width"
             initial={ { scale: 0.5 } }
             animate={ { scale: 1 } }
             transition={ { duration: 1.75, ease: [.43, .83, .4, .98] } }>
        <m.div className="h-full w-full"
               ref={ background }
               style={ {
                 clipPath: transform,
                 borderRadius: transform,
               } }>
          <StaticImage loading="eager" src="../../../images/background.png" alt="background image" className="pointer-events-none h-full w-full [filter:brightness(60%)]"/>
        </m.div>
      </m.div>

      { children }
    </div>
  )
}