import { Link } from 'gatsby'
import { m } from 'framer-motion'
import { useDefaultLinkCursor } from '../../hooks/cursor-hovers/use-default-link-cursor.js'


const parentVariants = {
  default: {
    transition: { staggerChildren: 0.15, staggerDirection: -1 },
  },
  hover: {
    transition: { staggerChildren: 0.15 },
  },
}

const transitionOut = {
  default: { x: 0 },
  hover: { x: '110%' },
}

const transitionIn = {
  default: { x: '-110%' },
  hover: { x: 0 },
}

const transition = { duration: 0.2, ease: [1, 0, .85, .83] }

export const DefaultLink = ({ to, onClick, children }) => {
  const defaultLinkCursor = useDefaultLinkCursor()
  
  return (
    <m.span animate="default"
            whileHover="hover"
            variants={ parentVariants }>
      <Link className="relative block overflow-hidden group/default-link"
            to={ to }
            onClick={ onClick }
            { ...defaultLinkCursor }>
        <m.span className="absolute bottom-1 left-0 w-full duration-300 h-[1px] bg-secondary" variants={ transitionOut } transition={ transition }/>
        <m.span className="absolute bottom-1 left-0 w-full duration-300 h-[1px] bg-secondary" variants={ transitionIn } transition={ transition }/>
        { children }
      </Link>
    </m.span>
  )
}