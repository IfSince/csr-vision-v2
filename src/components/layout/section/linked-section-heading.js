import { m } from 'framer-motion'
import { scrollRevealAnimation, viewport } from '../../../animation.config.js'
import { Reveal } from '../../animations/reveal.js'
import { Magnetic } from '../../animations/magnetic.js'
import { ArrowOutward } from '../../../svg/icons/arrow-outward.js'
import { Link } from 'gatsby'

const MotionLink = m(Link)

export const LinkedSectionHeading = ({ to = '/', children }) =>
  <div className="mt-[1em] text-heading-1 mb-[max(4rem,0.5em)] flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
    <m.h2 initial="initial"
          whileInView="enter"
          viewport={ viewport }>
      <Reveal initial={ undefined }>
        { children }
      </Reveal>
    </m.h2>

    <Magnetic multiplier={ 35 } className="hidden sm:block">
      {
        position =>
          <MotionLink
            className="flex items-center justify-center rounded-full border transition-colors duration-300 p-[0.25em] h-[1em] w-[1em] border-secondary/20 group hover:border-secondary/80"
            to={ to }
            { ...scrollRevealAnimation(0.5) }>
            <m.div style={ position } className="h-full w-full transition-colors duration-300 fill-secondary hover:fill-secondary dark:fill-secondary/80">
              <ArrowOutward/>
            </m.div>
          </MotionLink>
      }
    </Magnetic>
  </div>