import { m, useCycle } from 'framer-motion'
import { LogoWithClaim } from '../../svg/logo/logo-with-claim.js'
import { background } from './animation.config.js'
import { Nav } from './nav.js'
import { Link } from 'gatsby'


export const Header = () => {
  const [isActive, toggleActive] = useCycle(false, true)

  return (
    <header className={ `fixed w-full py-5 text-secondary z-[1000] sm:pt-8 md:pt-10 4xl:pt-16 bg-none ${ !isActive && 'pointer-events-none' }` }>
      <div className="flex items-center justify-between horizontal-spacing">
        <Link to="/">
          <LogoWithClaim className="pointer-events-auto h-8 sm:h-10 lg:h-10 4xl:h-12"/>
        </Link>
        <button
          className="pointer-events-auto flex aspect-square h-14 flex-col items-center justify-center rounded-full gap-1.5 bg-secondary text-primary group sm:h-16 lg:h-16 4xl:h-20
                     *:w-5 *:transition-transform *:duration-300 *:h-0.5 *:bg-primary"
          onClick={ toggleActive }>
          <span className={ `${ isActive ? '-translate-x-[15%]' : 'translate-x-[15%]' } group-hover:-translate-x-[15%]` }></span>
          <span className={ `${ isActive ? 'translate-x-[15%]' : '-translate-x-[15%]' } -translate-x-[15%] group-hover:translate-x-[15%]` }></span>
        </button>
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