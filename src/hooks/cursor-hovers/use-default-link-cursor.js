import { useContext } from 'react'
import { CursorContext } from '../../providers/cursor-provider.js'

export const useDefaultLinkCursor = () => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateOnLinkHover = () => updateCursor({
    props: { width: 70, height: 70, opacity: 0.3 },
  })

  return {
    onMouseEnter: updateOnLinkHover,
    onMouseLeave: resetCursor,
  }
}