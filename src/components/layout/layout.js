import { AnimatePresence, domMax, LazyMotion } from 'framer-motion'
import { Header } from './header/header.js'
import { PageTransition } from '../common/page-transition/page-transition.js'
import { CursorProvider } from '../../providers/cursor-provider.js'
import { Footer } from './footer/footer.js'
import { useEffect } from 'react'

export const Layout = ({ children, path, uri }) => {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        new LocomotiveScroll({
          lenisOptions: {
            smoothWheel: true,
            smoothTouch: false,
          },
        })
      }
    )()
  }, [])

  return (
    <LazyMotion features={ domMax } strict>
      <CursorProvider>
        <Header/>
        <AnimatePresence mode="wait">
          <PageTransition key={ path }>
            <main className="grid grid-cols-layout">
              { children }
            </main>
            <Footer currentUrl={ uri }/>
          </PageTransition>
        </AnimatePresence>
      </CursorProvider>
    </LazyMotion>
  )
}