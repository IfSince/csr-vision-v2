import { useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { m, useScroll, useTransform } from 'framer-motion'

export const ImageIntro = ({ children }) => {
  const background = useRef(null)

  const { scrollYProgress } = useScroll({ target: background })
  const transform = useTransform(scrollYProgress, [0, 0.5], ['inset(20%)', 'inset(0%)'])
  const transformBrightness = useTransform(scrollYProgress, [0, 0.5], ['brightness(40%)', 'brightness(70%)'])

  return (
    <div className="relative grid col-full-width grid-cols-layout lg:h-[120vh] lg:-z-10" data-scroll data-scroll-speed="-0.7">
      <m.div className="absolute w-full col-full-width lg:h-[140vh]"
             initial={ { scale: 0.3, filter: 'brightness(0%)' } }
             animate={ { scale: 1, filter: 'brightness(100%)' } }
             transition={ { duration: 1.75, ease: [.43, .83, .4, .98] } }>
        {
          <m.div className="hidden h-full w-full lg:block"
                 ref={ background }
                 style={ {
                   clipPath: transform,
                   filter: transformBrightness,
                 } }>
            <StaticImage loading="eager" src="../../../images/background.png" alt="background image"
                         className="pointer-events-none h-full w-full"/>
          </m.div>
        }
      </m.div>

      { children }
    </div>
  )
}