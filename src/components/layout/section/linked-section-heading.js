import { m } from 'framer-motion'
import { viewport } from '../../../animation.config.js'
import { Reveal } from '../../animations/reveal.js'
import { ArrowOutward } from '../../../svg/icons/arrow-outward.js'
import { navigate } from 'gatsby'
import { IconButton } from '../../common/button/icon-button.js'

export const LinkedSectionHeading = ({ to = '/', Type = 'h2', children }) =>
  <m.div className="mt-[1em] text-heading-1 mb-[max(4rem,0.5em)] flex flex-wrap sm:flex-nowrap justify-between items-center gap-4"
         initial="initial"
         whileInView="enter"
         viewport={ viewport}>
    <Reveal initial={ undefined }>
      <Type className="text-h2">{ children }</Type>
    </Reveal>

    <IconButton className="hidden sm:block !p-0"
                size="lg"
                theme="dark"
                magneticMultiplier={ 35 }
                onClick={ () => navigate(to) } scrollAnimation={ true }>
      <ArrowOutward className="h-full w-full p-[0.25em]"/>
    </IconButton>
  </m.div>