import { useState } from 'react'
import { m } from 'framer-motion'
import { height } from './animation.config.js'
import { Body } from './body.js'
import { Footer } from './footer.js'

const links = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'our vision',
    href: '/our-vision',
  },
  {
    title: 'projects',
    href: '/projects',
  },
]

export const Nav = ({ isActive, toggleActive }) => {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 })

  return (
    <m.div variants={ height }
           initial="initial"
           animate={ isActive ? 'enter' : 'exit' }
           className="absolute top-0 left-0 -z-10 w-full overflow-hidden horizontal-spacing bg-primary">
      <nav className="mt-32 mb-6 sm:mt-40 sm:mb-10 4xl:mt-48">
        <Body isActive={ isActive } links={ links } selectedLink={ selectedLink } setSelectedLink={ setSelectedLink } toggleActive={ toggleActive }/>
        <Footer isActive={ isActive }/>
      </nav>
    </m.div>
  )
}