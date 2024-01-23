import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { SmoothScroll } from './smooth-scroll.js'
import { Header } from './header/header.js'
import { PageTransition } from '../common/page-transition/page-transition.js'
import { CursorProvider } from '../../providers/cursor-provider.js'

export const Layout = ({ children, path }) =>
  <LazyMotion features={ domAnimation } strict>
    <CursorProvider>
      <Header/>
      <SmoothScroll>
        <AnimatePresence mode="wait">
          <PageTransition key={ path }>
            <main>
              { children }
            </main>
          </PageTransition>
        </AnimatePresence>
      </SmoothScroll>
    </CursorProvider>
  </LazyMotion>
