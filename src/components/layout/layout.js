import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { SmoothScroll } from './smooth-scroll.js'
import { Header } from './header/header.js'
import { PageTransition } from '../common/page-transition/page-transition.js'
import { CursorProvider } from '../../providers/cursor-provider.js'
import { Footer } from './footer/footer.js'
import { getNextPageUrl } from '../../links.js'

export const Layout = ({ children, path, uri }) =>
  <LazyMotion features={ domAnimation } strict>
    <CursorProvider>
      <Header/>
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <PageTransition key={ path }>
            <main className="grid grid-cols-layout">
              { children }
            </main>
            <Footer currentUrl={ getNextPageUrl(uri) }/>
          </PageTransition>
        </AnimatePresence>
      </SmoothScroll>
    </CursorProvider>
  </LazyMotion>
