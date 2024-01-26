import { m, useCycle } from 'framer-motion'
import { LogoWithClaim } from '../../svg/logo/logo-with-claim.js'
import { background } from './animation.config.js'
import { Nav } from './nav.js'
import { Link } from 'gatsby'


export const Header = () => {
  const [isActive, toggleActive] = useCycle(false, true)

  const toggleHeader = () => {
    document.documentElement.classList.toggle('overflow-hidden')

    toggleActive()
  }

  return (
    <header className={ `fixed w-screen py-5 text-secondary z-[1000] sm:pt-8 md:pt-10 4xl:pt-16 bg-none ${!isActive && 'pointer-events-none'}` }>
      <div className="flex items-center justify-between horizontal-spacing">
        <Link to="/">
          <LogoWithClaim className="pointer-events-auto h-8 sm:h-10 lg:h-10 4xl:h-12"/>
        </Link>
        <button className="pointer-events-auto aspect-square h-14 rounded-full bg-secondary text-primary sm:h-16 lg:h-16 4xl:h-20"
                onClick={ toggleHeader }>
          menu
        </button>
      </div>

      <m.div variants={ background }
             initial="initial"
             animate={ isActive ? 'open' : 'closed' }
             className="absolute top-0 left-0 -z-10 h-full w-full cursor-pointer bg-accent"
             onClick={ toggleHeader }></m.div>

      <Nav isActive={ isActive }
           toggleActive={ toggleHeader }/>
    </header>
  )
}