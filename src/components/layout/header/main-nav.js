import { m } from 'framer-motion'
import { Link } from 'gatsby'
import { characterHover } from './animation.config.js'
import { Reveal } from '../../animations/reveal.js'
import { getPageLinks } from '../../../links.js'
import { useLinkCursor } from '../../../hooks/cursor-hovers/use-link-cursor.js'

export const MainNav = ({ isActive, selectedLink, setSelectedLink, toggleActive }) => {
  const linkCursor = useLinkCursor()

  return <ul className="flex flex-wrap text-3xl gap-x-[0.1em] gap-y-[0.3em] lg:max-w-7xl 4xl:max-w-[100rem]">
    {
      getPageLinks().map(({ title, to }, index) =>
        <li key={ `l_${ index }` }>
          <Link activeClassName="text-accent"
                to={ to }
                onClick={ toggleActive }
                { ...linkCursor }>
            <m.span className="flex lowercase pr-[0.2em]"
                    variants={ characterHover }
                    animate={ selectedLink.isActive && selectedLink.index !== index ? 'others' : 'hovered' }
                    onMouseEnter={ () => setSelectedLink({ isActive: true, index }) }
                    onMouseLeave={ () => setSelectedLink({ isActive: false, index }) }>
              <Reveal custom={ [0.3, 0] }
                      animate={ isActive ? 'enter' : 'exit' }>
                { title }
              </Reveal>
            </m.span>
          </Link>
        </li>,
      )
    }
  </ul>
}