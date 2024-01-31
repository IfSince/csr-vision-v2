import { useContext, useRef } from 'react'
import { m } from 'framer-motion'
import { Benefit } from './benefit.js'
import { CursorContext } from '../../providers/cursor-provider.js'
import { Drag } from '../../svg/icons/drag.js'

export const BenefitsList = ({ benefits }) => {
  const { updateCursor, resetCursor } = useContext(CursorContext)
  const containerRef = useRef()

  const updateOnLinkHover = () => updateCursor({
    props: { width: 125, height: 125, backgroundColor: 'var(--clr-rgb-secondary)' },
    element: <Drag className="h-12 w-12 fill-primary"/>,
  })

  return (
    <div className="flex overflow-hidden col-full-width" ref={ containerRef }>
      <m.div drag="x"
             dragConstraints={ containerRef }>
        <div className="flex gap-4 mx-[var(--horizontal-spacing)] md:mx-[250px] lg:mx-[500px] 2xl:mx-[1000px]"
             role="none"
             onMouseEnter={ updateOnLinkHover }
             onMouseLeave={ resetCursor }>
          {
            benefits.map(benefit => <Benefit { ...benefit } key={ benefit.id }/>)
          }
        </div>
      </m.div>
    </div>
  )
}