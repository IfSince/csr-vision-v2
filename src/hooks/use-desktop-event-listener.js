import { useEffect } from 'react'
import { useIsMobile } from './use-is-mobile.js'

export const useDesktopEventListener = (ref, event, callback) => {
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) {
      ref?.current?.addEventListener(event, callback)
    }

    return () => ref?.current?.removeEventListener(event, callback)
  }, [isMobile, ref, event, callback])
}