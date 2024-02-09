import { m } from 'framer-motion'
import { scrollRevealAnimation } from '../../../animation.config.js'
import { Link } from 'gatsby'

export const TableRow = ({ to, addition, title, onMouseEnter, onClick, children }) =>
  <m.li className="border-b col-full-width border-secondary/20 group first:border-t" { ...scrollRevealAnimation(0.15) }>
    <Link className="grid pt-4 pb-14 min-h-28 md:py-5 *:col-content grid-cols-content-table grid-flow-dense"
          to={ to }
          onMouseEnter={ onMouseEnter }
          onClick={ onClick }>
      { children }
      <div className="flex items-center gap-4 self-start mb-2.5 md:col-end-4 md:row-start-1 lg:col-end-2">
        <div className="rounded-full border mb-1 h-3 w-3 sm:h-3.5 sm:w-3.5 border-secondary/20 transition-[border,background-color] duration-500
                          group-hover:bg-secondary group-hover:border-secondary dark:border-2"/>
        <p className="text-sm font-medium sm:text-base">{ addition }</p>
      </div>

      <h3 className="max-w-sm text-h3 md:max-lg:mt-10 md:col-end-4 md:row-start-1 md:max-w-lg lg:col-end-[content] lg:col-start-3 lg:max-w-xl
                       lg:group-hover:-translate-x-4 duration-500 transition-transform">
        { title }
      </h3>
    </Link>
  </m.li>