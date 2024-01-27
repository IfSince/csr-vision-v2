import { Link } from 'gatsby'
import { useIsMobile } from '../../hooks/use-is-mobile.js'
import { m } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import { scrollRevealConfig } from '../../animation.config.js'

export const Project = ({ index, project: { category, title, slug, image, image_alt }, setModal }) => {
  const isMobile = useIsMobile()

  return (
    <m.li className="w-full border-b border-secondary/20 group first:border-t"
          { ...scrollRevealConfig(0.15) }>
      <Link className="block py-5 horizontal-spacing"
            to={ `/projects/${ slug }` }
            onMouseEnter={ () => setModal(index) }
            onMouseLeave={ () => setModal(index) }>
        <div className="grid w-full items-start justify-between md:grid-cols-3 lg:grid-cols-10 *:lg:row-start-1 min-h-20">
          <div className="row-start-2 h-fit md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-3">
            <div className="flex items-center gap-4 mb-2.5">
              <div className="hidden lg:block mb-1 h-4 w-4 rounded-full border transition-colors duration-500 border-secondary/20
                              group-hover:bg-secondary group-hover:border-secondary dark:border-2"></div>
              <span className="font-medium">{ category }</span>
            </div>
          </div>
          <div className="row-start-3 md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-4">
            <div className="mb-8 max-w-sm md:max-lg:mt-10 md:mr-4 md:mb-0 md:max-w-md lg:ml-10 lg:max-w-lg">
              <h3 className="transition-transform duration-300 text-heading-4">{ title }</h3>
            </div>
          </div>
          <div className="row-start-1 lg:col-span-3">
            <div className="mb-6 flex justify-end lg:mb-0">
              {
                isMobile &&
                <div className="max-h-80 max-w-sm">
                  <GatsbyImage alt={ image_alt } image={ image } className="h-full w-full"/>
                </div>
              }
            </div>
          </div>
        </div>
      </Link>
    </m.li>
  )
}