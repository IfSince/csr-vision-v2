import { useEffect } from 'react'
import { useIsMobile } from './use-is-mobile.js'

export const useDesktopEventListener = (ref, event, callback) => {
  const isMobile = useIsMobile()

  useEffect(() => {
    const target = ref?.current
    if (!isMobile) {
      target?.addEventListener(event, callback)
    }

    return () => target?.removeEventListener(event, callback)
  }, [isMobile, ref, event, callback])
}