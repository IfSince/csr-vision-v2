import { Link } from 'gatsby'
import { useIsMobile } from '../../hooks/use-is-mobile.js'
import { m } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import { scrollRevealAnimation } from '../../animation.config.js'

export const Project = ({ index, project: { category, title, slug, image, image_alt }, setModal, resetCursor }) => {
  const isMobile = useIsMobile()

  return (
    <m.li className="border-b col-full-width border-secondary/20 group first:border-t"
          { ...scrollRevealAnimation(0.15) }>
      <Link className="grid pt-4 pb-14 min-h-28 md:py-5 *:col-content grid-cols-project-list"
            to={ `/projects${ slug }` }
            onMouseEnter={ () => setModal(index) }
            onClick={ resetCursor }>
        {
          isMobile &&
          <div className="mb-6 max-h-80 w-full max-w-sm md:col-start-4 md:justify-self-end">
            <GatsbyImage alt={ image_alt } image={ image } className="h-full w-full"/>
          </div>
        }

        <div className="flex items-center gap-4 self-start mb-2.5 md:col-end-4 md:row-start-1 lg:col-end-2">
          <div className="rounded-full border mb-1 h-3.5 w-3.5 border-secondary/20 transition-[border,background-color] duration-500
                          group-hover:bg-secondary group-hover:border-secondary dark:border-2"/>
          <p className="font-medium">{ category }</p>
        </div>

        <h3 className="max-w-sm text-h3 md:max-lg:mt-10 md:col-end-4 md:row-start-1 md:max-w-lg lg:col-end-[content] lg:col-start-3 lg:max-w-xl
                       lg:group-hover:-translate-x-4 duration-500 transition-transform">
          { title }
        </h3>
      </Link>
    </m.li>
  )
}