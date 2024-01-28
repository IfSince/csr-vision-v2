import { useState } from 'react'
import { m } from 'framer-motion'
import { height } from './animation.config.js'
import { MainNav } from './main-nav.js'
import { SubNav } from './sub-nav.js'

export const Nav = ({ isActive, toggleActive }) => {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 })

  return (
    <m.div variants={ height }
           initial="initial"
           animate={ isActive ? 'enter' : 'exit' }
           className="absolute top-0 left-0 -z-10 w-full overflow-hidden horizontal-spacing bg-primary">
      <nav className="mt-32 mb-6 sm:mt-40 sm:mb-10 4xl:mt-48">
        <MainNav isActive={ isActive } selectedLink={ selectedLink } setSelectedLink={ setSelectedLink } toggleActive={ toggleActive }/>
        <SubNav isActive={ isActive } toggleActive={ toggleActive }/>
      </nav>
    </m.div>
  )
}