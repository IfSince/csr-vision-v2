import { m } from 'framer-motion'
import { Link } from 'gatsby'
import { characterHover } from './animation.config.js'
import { Reveal } from '../../animations/reveal.js'
import { getPageLinks } from '../../../links.js'
import { useContext } from 'react'
import { CursorContext } from '../../../providers/cursor-provider.js'
import { ArrowOutward } from '../../../svg/icons/arrow-outward.js'

export const MainNav = ({ isActive, selectedLink, setSelectedLink, toggleActive }) => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateOnLinkHover = () => {
    updateCursor({
      props: { width: 125, height: 125, backgroundColor: 'var(--clr-rgb-secondary)' },
      element: <ArrowOutward className="h-12 w-12 fill-primary"/>,
    })
  }

  return <ul className="flex flex-wrap gap-x-[0.1em] gap-y-[0.3em] text-3xl lg:max-w-7xl 4xl:max-w-[100rem]">
    {
      getPageLinks().map(({ title, to }, index) =>
        <li key={ `l_${ index }` }>
          <Link activeClassName="text-accent"
                to={ to }
                onClick={ toggleActive }
                onMouseEnter={ updateOnLinkHover }
                onMouseLeave={ resetCursor }>
            <m.span className="flex lowercase pr-[0.2em]"
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
}