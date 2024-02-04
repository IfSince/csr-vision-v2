import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { m } from 'framer-motion'
import { useLinkCursor } from '../../hooks/cursor-hovers/use-link-cursor.js'
import { DefaultImage } from '../animations/default-image.js'

const positionalClassesByPosition = {
  '4': 'lg:col-start-2',
  '5': 'lg:col-start-3',
}

export const TeamMember = ({ name, role, image, slug, position }) => {
  const linkCursor = useLinkCursor()

  return (
    <m.article className={ `w-full max-w-80 sm:max-w-[26rem] ${ positionalClassesByPosition[position] }` }>
      <Link to={ `/our-team${ slug }` } { ...linkCursor }>
        <div className="w-full overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
          <DefaultImage className="h-full w-full">
            <GatsbyImage alt={ name } image={ image } className="h-full w-full"/>
          </DefaultImage>
        </div>
        <span className="mt-2 block font-medium tracking-tight ml-0.5">{ role }</span>
        <h3 className="mt-1 ml-0.5 text-h3 sm:mt-2">{ name }</h3>
      </Link>
    </m.article>
  )
}