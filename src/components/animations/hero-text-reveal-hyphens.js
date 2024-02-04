import { Reveal } from './reveal.js'

export const HeroTextRevealHyphens = ({ children, className }) =>
  <Reveal animate="enter" className={ className }>
    { children }
  </Reveal>