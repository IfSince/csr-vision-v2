import { m } from 'framer-motion'
import { Link } from 'gatsby'
import { characterHover } from './animation.config.js'
import { Reveal } from '../../animations/reveal.js'
import { getPageLinks } from '../../../links.js'

export const Body = ({ isActive, selectedLink, setSelectedLink, toggleActive }) =>
  <ul className="flex flex-wrap gap-x-[0.1em] gap-y-[0.3em] text-heading-2 lg:max-w-7xl 4xl:max-w-[100rem]">
    {
      getPageLinks().map(({ title, to }, index) =>
        <li key={ `l_${ index }` }>
          <Link activeClassName="text-accent"
                to={ to }
                onClick={ toggleActive }>
            <m.span className="flex clip-path-overflow pr-[0.2em] lowercase"
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