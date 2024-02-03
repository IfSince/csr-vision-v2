import { useContext } from 'react'
import { CursorContext } from '../../providers/cursor-provider.js'
import { ArrowOutward } from '../../svg/icons/arrow-outward.js'

export const useLinkCursor = () => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateOnLinkHover = () => updateCursor({
    props: { width: 125, height: 125, backgroundColor: 'var(--clr-rgb-secondary)' },
    element: <ArrowOutward className="h-12 w-12 fill-primary"/>,
  })

  return {
    onMouseEnter: updateOnLinkHover,
    onMouseLeave: resetCursor,
  }
}