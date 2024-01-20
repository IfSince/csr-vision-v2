import { createContext } from 'react'
import { useCursor } from '../hooks/use-cursor.js'
import { useIsMobile } from '../hooks/use-is-mobile.js'

export const CursorContext = createContext(null)

export const CursorProvider = ({ children }) => {
  const isMobile = useIsMobile()
  const [element, updateCursor, resetCursor] = useCursor()

  return (
    <CursorContext.Provider value={ { updateCursor, resetCursor } }>
      { !isMobile && element }
      { children }
    </CursorContext.Provider>
  )
}