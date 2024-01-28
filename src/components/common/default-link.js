import { Link } from 'gatsby'
import { m } from 'framer-motion'
import { useContext } from 'react'
import { CursorContext } from '../../providers/cursor-provider.js'


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

export const DefaultLink = ({ to, onClick = void 0, children }) => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateOnLinkHover = () => {
    updateCursor({
      props: { width: 70, height: 70, opacity: 0.3 },
    })
  }

  const lineClasses = 'absolute left-0 bottom-1 w-full h-[1px] bg-secondary duration-300'

  return (
    <m.span animate="default"
            whileHover="hover"
            variants={ parentVariants }>
      <Link to={ to } className="relative block overflow-hidden group/default-link"
            onMouseEnter={ updateOnLinkHover }
            onMouseLeave={ resetCursor }
            onClick={ onClick }>
        <m.span className={ lineClasses } variants={ transitionOut } transition={ transition }/>
        <m.span className={ lineClasses } variants={ transitionIn } transition={ transition }/>

        { children }
      </Link>
    </m.span>

  )
}