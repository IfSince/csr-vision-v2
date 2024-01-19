import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { SmoothScroll } from './smooth-scroll.js'
import { Header } from './header/header.js'
import { PageTransition } from '../common/page-transition/page-transition.js'

export const Layout = ({ children, path }) =>
  <LazyMotion features={ domAnimation } strict>
    <Header/>
    <SmoothScroll>
      <AnimatePresence mode="wait">
        <PageTransition key={ path }>
          { children }
        </PageTransition>
      </AnimatePresence>
    </SmoothScroll>
  </LazyMotion>
