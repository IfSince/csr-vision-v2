import { m } from 'framer-motion'
import { Link } from 'gatsby'
import { useDefaultLinkCursor } from '../../../hooks/cursor-hovers/use-default-link-cursor.js'
import { getBreadcrumbs } from '../../../util/get-breadcrumbs.js'

const liReveal = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.3 },
}

const staggerVariants = {
  animate: {
    transition: { delayChildren: 0.9, staggerChildren: 0.1 },
  },
  exit: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
}

export const BreadCrumbs = ({ path = '/', toggleActive }) => {
  const defaultLinkCursor = useDefaultLinkCursor()

  return (
    <m.ol className="flex flex-row flex-wrap gap-x-2 md:gap-x-3"
          variants={ staggerVariants }
          initial="initial"
          animate="animate"
          exit="exit">
      <m.li key="Home" variants={ liReveal } className="origin-left space-x-2 md:space-x-3">
        <div className="inline-block rounded-full mb-[0.15rem] h-1.5 w-1.5 bg-secondary"/>
        <Link className="text-sm font-medium lowercase lg:text-base"
              to={ '/' }
              onClick={ toggleActive }
              { ...defaultLinkCursor }>
          home
        </Link>
      </m.li>
      {
        getBreadcrumbs(path).map(({ label, to }) =>
          <m.li key={ label } variants={ liReveal } className="origin-left space-x-2 md:space-x-3">
            <div className="inline-block rounded-full mb-[0.15rem] h-1.5 w-1.5 bg-secondary"/>
            <Link className="text-sm font-medium lowercase lg:text-base"
                  to={ to }
                  onClick={ toggleActive }
                  { ...defaultLinkCursor }>
              { label }
            </Link>
          </m.li>,
        )
      }
    </m.ol>
  )
}