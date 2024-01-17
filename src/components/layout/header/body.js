import { m } from 'framer-motion'
import { Link } from 'gatsby'
import { characterHover } from './animation.config.js'
import { Reveal } from '../../animations/reveal.js'

export const Body = ({ isActive, links, selectedLink, setSelectedLink, toggleActive }) =>
  <ul className="flex flex-wrap gap-x-[0.1em] gap-y-[0.3em] text-heading-2 lg:max-w-7xl 4xl:max-w-[100rem]">
    {
      links.map(({ title, href }, index) =>
        <li key={ `l_${ index }` }>
          <Link activeClassName="text-accent"
                to={ href }
                onClick={ toggleActive }>
            <m.span className="flex overflow-hidden pr-[0.2em]"
                    variants={ characterHover }
                    animate={ selectedLink.isActive && selectedLink.index !== index ? 'others' : 'hovered' }
                    onMouseEnter={ () => setSelectedLink({ isActive: true, index }) }
                    onMouseLeave={ () => setSelectedLink({ isActive: false, index }) }>
              {
                title.split('').map((char, index) =>
                  <Reveal custom={ [index * 0.02 + 0.3, (title.length - index) * 0.01] }
                          animate={ isActive ? 'enter' : 'exit' }
                          key={ `${ char }${ index }` }>
                    { char !== ' ' ? char : <>&nbsp;</> }
                  </Reveal>,
                )
              }
            </m.span>
          </Link>
        </li>,
      )
    }
  </ul>