import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { useLinkCursor } from '../../hooks/cursor-hovers/use-link-cursor.js'
import { DefaultImage } from '../animations/default-image.js'

const positionalClassesByPosition = {
  '4': 'lg:col-start-2',
  '5': 'lg:col-start-3',
}

export const TeamMember = ({ name, role, image, slug, position }) => {
  const linkCursor = useLinkCursor()

  return (
    <article className={ `w-full max-w-80 sm:max-w-[26rem] ${ positionalClassesByPosition[position] }` }>
      <Link to={ `/our-team${ slug }` } { ...linkCursor }>
        <div className="w-full overflow-hidden rounded-sm bg-black aspect-[1/1.25]">
          <DefaultImage className="h-full w-full">
            <GatsbyImage alt={ name } image={ image } className="h-full w-full"/>
          </DefaultImage>
        </div>
        <span className="mt-3 block text-sm font-medium ml-0.5 sm:text-base">{ role }</span>
        <h3 className="mt-[0.5em] ml-0.5 text-h3 sm:mt-2">{ name }</h3>
      </Link>
    </article>
  )
}