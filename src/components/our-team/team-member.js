import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { useContext } from 'react'
import { CursorContext } from '../../providers/cursor-provider.js'
import { ArrowOutward } from '../../svg/icons/arrow-outward.js'
import { m } from 'framer-motion'

const positionalClassesByPosition = {
  '4': 'lg:col-start-2',
  '5': 'lg:col-start-3',
}

export const TeamMember = ({ name, role, image, slug, position }) => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateOnLinkHover = () => updateCursor({
    props: { width: 125, height: 125, backgroundColor: 'var(--clr-rgb-secondary)' },
    element: <ArrowOutward className="h-12 w-12 fill-primary"/>,
  })

  return (
    <m.article className={ `w-full max-w-80 sm:max-w-[26rem] ${ positionalClassesByPosition[position] }` }>
      <Link to={ `/our-team${ slug }` }
            onMouseEnter={ updateOnLinkHover }
            onMouseLeave={ resetCursor }
            onClick={ resetCursor }>
        <div className="w-full overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
          <m.div className="h-full w-full"
                 variants={ {
                   zoom: { scale: 1.05 },
                 } }
                 whileHover="zoom"
                 transition={ { duration: 0.5, ease: [.29, .41, .33, 1] } }>
            <GatsbyImage alt={ name } image={ image } objectFit="cover" className="pointer-events-none h-full w-full"/>
          </m.div>

        </div>
        <span className="mt-2 block font-medium tracking-tight ml-0.5">{ role }</span>
        <h3 className="mt-1 ml-0.5 text-h3 sm:mt-2">{ name }</h3>
      </Link>
    </m.article>
  )
}