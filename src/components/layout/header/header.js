import { AnimatePresence, m, useCycle } from 'framer-motion'
import { background } from './animation.config.js'
import { Nav } from './nav.js'
import { Link } from 'gatsby'
import { useContext } from 'react'
import { ThemeContext } from '../../../providers/theme-provider.js'
import { Logo } from '../../../svg/logo/logo.js'
import { Sun } from '../../../svg/icons/theme-toggle/sun.js'
import { Moon } from '../../../svg/icons/theme-toggle/moon.js'
import { Menu } from '../../../svg/icons/menu/menu.js'
import { Close } from '../../../svg/icons/menu/close.js'
import { IconButton } from '../../common/button/icon-button.js'
import { useDefaultLinkCursor } from '../../../hooks/cursor-hovers/use-default-link-cursor.js'
import { BreadCrumbs } from './bread-crumbs.js'

export const Header = ({ path }) => {
  const defaultLinkCursor = useDefaultLinkCursor()
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isActive, toggleActive] = useCycle(false, true)

  const items = [
    {
      key: 'themeToggle',
      onClick: toggleTheme,
      icon: theme === 'light' ? <Sun className="h-6 fill-primary 4xl:h-7"/> : <Moon className="h-5 fill-primary 4xl:h-6"/>,
    },
    {
      key: 'menuToggle',
      onClick: toggleActive,
      icon: !isActive ? <Menu className="h-[0.813rem] 4xl:h-[0.938rem]"/> : <Close className="h-4 4xl:h-[1.125rem]"/>,
    },
  ]
  return (
    <header className={ `fixed w-full pt-5 text-secondary z-[2000] sm:pt-8 md:pt-10 4xl:pt-16 bg-none ${ !isActive && 'pointer-events-none' }` }>
      <div className="relative horizontal-spacing">
        <div className="flex flex-col md:flex-row flex-wrap md:items-center gap-y-6 gap-x-[min(50px,5vw)]">
          <Link to="/" { ...defaultLinkCursor }>
            <Logo className="pointer-events-auto h-10 xs:h-12 sm:h-12 4xl:h-14"/>
          </Link>

          <AnimatePresence mode="wait">
            { isActive && <BreadCrumbs path={ path } toggleActive={ toggleActive }/> }
          </AnimatePresence>
        </div>

        <div className="absolute top-0 right-[var(--horizontal-spacing)] flex gap-3 md:gap-6">
          {
            items.map(({ key, onClick, icon }) => <IconButton onClick={ onClick } key={ key }>{ icon }</IconButton>)
          }
        </div>
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