import { m, useCycle } from 'framer-motion'
import { LogoWithClaim } from '../../svg/logo/logo-with-claim.js'
import { background } from './animation.config.js'
import { Nav } from './nav.js'


export const Header = () => {
  const [isActive, toggleActive] = useCycle(false, true)

  return (
    <header className="fixed w-full py-5 text-secondary z-[1000] sm:pt-8 md:pt-10 4xl:pt-16">
      <div className="flex items-center justify-between horizontal-spacing">
        <LogoWithClaim className="h-8 sm:h-10 lg:h-10 4xl:h-12"/>
        <button className="aspect-square h-14 rounded-full bg-secondary text-primary sm:h-16 lg:h-16 4xl:h-20"
                onClick={ toggleActive }>menu</button>
      </div>

      <m.div variants={ background }
             initial="initial"
             animate={ isActive ? 'open' : 'closed' }
             className="absolute top-0 left-0 -z-10 h-full w-full cursor-pointer bg-accent"
             onClick={ toggleActive }></m.div>

      <Nav isActive={ isActive }
           toggleActive={ toggleActive }/>
    </header>
  )
}