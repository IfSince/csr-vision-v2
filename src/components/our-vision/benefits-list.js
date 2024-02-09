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
      <m.div className="origin-bottom" drag="x"
             dragConstraints={ containerRef }
             dragTransition={ { timeConstant: 200, power: 0.3 } }
             whileDrag={ { scale: 0.93 } }
             transition={{ duration: 0.75, ease: [.3, .67, .32, .96] }}>
        <m.div className="flex gap-4 mx-[var(--horizontal-spacing)] md:mx-[250px] lg:mx-[500px] 2xl:mx-[1000px] cursor-grab"
               role="none"
               onMouseEnter={ updateOnLinkHover }
               onMouseLeave={ resetCursor }>
          {
            benefits.map(benefit => <Benefit { ...benefit } key={ benefit.id }/>)
          }
        </m.div>
      </m.div>
    </div>
  )
}