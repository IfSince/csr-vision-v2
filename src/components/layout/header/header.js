import { m, useCycle } from 'framer-motion'
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

export const Header = () => {
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
    <header className={ `fixed w-full py-5 text-secondary z-[1000] sm:pt-8 md:pt-10 4xl:pt-16 bg-none ${ !isActive && 'pointer-events-none' }` }>
      <div className="flex items-center justify-between horizontal-spacing">
        <Link to="/" { ...defaultLinkCursor }>
          <Logo className="pointer-events-auto h-8 sm:h-10 lg:h-10 4xl:h-12"/>
        </Link>

        <div className="flex gap-3 md:gap-6">
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