import { domAnimation, LazyMotion } from 'framer-motion'
import { SmoothScroll } from './smooth-scroll.js'

export const Layout = ({ children }) =>
  <LazyMotion features={ domAnimation } strict>
    <SmoothScroll>
      { children }
    </SmoothScroll>
  </LazyMotion>
