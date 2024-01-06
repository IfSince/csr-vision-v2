import { domAnimation, LazyMotion } from 'framer-motion'

export const Layout = ({ children }) =>
  <LazyMotion features={ domAnimation } strict>
    { children }
  </LazyMotion>
