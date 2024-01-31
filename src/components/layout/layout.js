import { AnimatePresence, domMax, LazyMotion } from 'framer-motion'
import { SmoothScroll } from './smooth-scroll.js'
import { Header } from './header/header.js'
import { PageTransition } from '../common/page-transition/page-transition.js'
import { CursorProvider } from '../../providers/cursor-provider.js'
import { Footer } from './footer/footer.js'

export const Layout = ({ children, path, uri }) =>
  <LazyMotion features={ domMax } strict>
    <CursorProvider>
      <Header/>
      <AnimatePresence mode="wait">
        <PageTransition key={ path }>
          <SmoothScroll>
            <main className="grid grid-cols-layout">
              { children }
            </main>
            <Footer currentUrl={ uri }/>
          </SmoothScroll>
        </PageTransition>
      </AnimatePresence>
    </CursorProvider>
  </LazyMotion>