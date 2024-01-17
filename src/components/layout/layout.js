import { domAnimation, LazyMotion } from 'framer-motion'
import { SmoothScroll } from './smooth-scroll.js'
import { Header } from './header/header.js'

export const Layout = ({ children }) =>
  <LazyMotion features={ domAnimation } strict>
    <Header/>
    <SmoothScroll>
      { children }
    </SmoothScroll>
  </LazyMotion>
