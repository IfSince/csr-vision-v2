import { useContext, useRef, useState } from 'react'
import { CursorContext } from '../../providers/cursor-provider.js'
import { useIsMobile } from '../../hooks/use-is-mobile.js'
import { Play } from '../../svg/icons/play.js'
import { Pause } from '../../svg/icons/pause.js'
import { AnimatePresence, m } from 'framer-motion'
import { IconButton } from '../common/button/icon-button.js'
import { Fullscreen } from '../../svg/icons/fullscreen.js'

const btnVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  exit: { scale: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
}


export const CustomVideo = ({ children }) => {
  const isMobile = useIsMobile()
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const updateOnEnter = () => updateCursorByPlayingState(isPlaying)

  const updateCursorByPlayingState = playing => updateCursor({
    props: { width: 125, height: 125, backgroundColor: 'var(--clr-rgb-secondary)' },
    element: playing ? <Pause className="h-12 w-12 fill-primary"/> : <Play className="h-14 w-14 fill-primary"/>,
  })

  const toggleVideoPlaying = () => {
    isPlaying ? videoRef.current.pause() : videoRef.current.play()
    updateCursorByPlayingState(!isPlaying)
    setIsPlaying(curr => !curr)
  }

  const openFullscreen = () => {
    if (videoRef.current.requestFullscreen)
      videoRef.current.requestFullscreen()
    else if (videoRef.current.webkitRequestFullscreen)
      videoRef.current.webkitRequestFullscreen()
    else if (videoRef.current.msRequestFullScreen)
      videoRef.current.msRequestFullScreen()
  }

  return (
    <div className="relative flex w-full items-center justify-center col-full-width bg-primary">
      <video ref={ videoRef }
             controls={ false }
             onContextMenu={ e => e.preventDefault() }
             onMouseEnter={ updateOnEnter }
             onMouseLeave={ resetCursor }
             onClick={ toggleVideoPlaying }
             preload="none">
        { children }
      </video>

      <AnimatePresence mode="wait">
        {
          isPlaying &&
          <m.div className="absolute bottom-[var(--horizontal-spacing)] z-[1000] right-[var(--horizontal-spacing)]"
                 variants={ btnVariants }
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 whileHover="whileHover"
                 whileTap="whileTap">
            <IconButton onMouseEnter={ resetCursor }
                        onClick={ openFullscreen }
                        size="custom"
                        theme="custom"
                        themeClassName="bg-secondary/30 hover:bg-secondary text-heading-1 h-[0.75em] w-[0.75em] fill-primary/70 hover:fill-primary"
                        description="In Vollbild wechseln">
              <Fullscreen className="h-[min(2.7rem,0.3em)] w-[min(2.7rem,0.3em)] "/>
            </IconButton>
          </m.div>
        }
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {
          (isMobile && !isPlaying) &&
          <m.div className="absolute z-[1000]"
                 variants={ btnVariants }
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 whileHover="whileHover"
                 whileTap="whileTap">
            <IconButton onMouseEnter={ resetCursor }
                        onClick={ toggleVideoPlaying }
                        size="custom"
                        theme="custom"
                        themeClassName="bg-secondary/80 hover:bg-secondary text-heading-1 h-[1.25em] w-[1.25em] fill-primary/70 hover:fill-primary"
                        description="Video abspielen">
              <Play className="h-[min(3rem,0.6em)] w-[min(3rem,0.6em)]"/>
            </IconButton>
          </m.div>
        }
      </AnimatePresence>
    </div>
  )
}