import { m } from 'framer-motion'
import { scrollRevealAnimation, viewport } from '../../../animation.config.js'
import { Reveal } from '../../animations/reveal.js'
import { ArrowOutward } from '../../../svg/icons/arrow-outward.js'
import { Link, navigate } from 'gatsby'
import { IconButton } from '../../common/button/icon-button.js'

const MotionLink = m(Link)

export const LinkedSectionHeading = ({ to = '/', Type = 'h2', mobileDescription = 'Mehr ansehen', children }) =>
  <m.div className="mt-[1.25em] text-heading-1 mb-[max(2.5rem,0.5em)] flex flex-wrap sm:flex-nowrap justify-between items-center gap-y-[min(5vw,24px)] gap-x-4"
         initial="initial"
         whileInView="enter"
         viewport={ viewport }>
    <Reveal initial={ undefined }>
      <Type className="text-h2">{ children }</Type>
    </Reveal>

    <IconButton className="hidden sm:block"
                size="lg"
                theme="dark"
                magneticMultiplier={ 35 }
                onClick={ () => navigate(to) } scrollAnimation={ true }>
      <ArrowOutward className="h-full w-full p-[0.25em]"/>
    </IconButton>

    <MotionLink
      className="flex w-full items-center justify-center rounded-full border py-3 text-base max-w-[275px] border-secondary/20 font-overpass sm:hidden"
      { ...scrollRevealAnimation(0.2) }
      to={ to }>
      <span className="font-medium tracking-normal">{ mobileDescription }</span>
    </MotionLink>
  </m.div>