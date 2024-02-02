import { Section } from './section.js'
import { Link } from 'gatsby'
import { useContext } from 'react'
import { CursorContext } from '../../../providers/cursor-provider.js'
import { ArrowOutward } from '../../../svg/icons/arrow-outward.js'
import { m } from 'framer-motion'
import { SectionDotTitle } from './section-dot-title.js'
import { Headline } from './headline.js'
import { viewport } from '../../../animation.config.js'
import { Reveal } from '../../animations/reveal.js'

export const FeaturedInternalLinkSection = ({ to = '/', children }) => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateOnLinkHover = () => updateCursor({
    props: { width: 125, height: 125, backgroundColor: 'var(--clr-rgb-primary)' },
    element: <ArrowOutward className="h-12 w-12 fill-secondary"/>,
  })

  return (
    <Section>
      <m.div className="col-full-width mt-[0.75em] text-heading-1"
             whileHover="hover">
        <Link className="grid grid-cols-layout"
              to={ to }
              onMouseEnter={ updateOnLinkHover }
              onMouseLeave={ resetCursor }
              onClick={ resetCursor }>

          <Headline/>
          <SectionDotTitle>what do we offer</SectionDotTitle>
          <div className="mt-10 mb-[max(4rem,0.5em)] grid grid-cols-layout col-full-width">
            <m.h2 className="lg:col-start-4"
                  variants={ {
                    hover: { x: '4vw' },
                  } }
                  initial="initial"
                  whileInView="enter"
                  viewport={ viewport }
                  transition={ { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }>
              <Reveal initial={ undefined }>
                { children }
              </Reveal>
            </m.h2>
          </div>

          <hr className="col-full-width border-secondary/20"/>
        </Link>
      </m.div>
    </Section>
  )
}