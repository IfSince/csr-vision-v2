import { LogoWithClaim } from '../../svg/logo/logo-with-claim.js'
import { Link } from 'gatsby'
import { DefaultLink } from '../../common/default-link.js'
import { FooterLink } from './footer-link.js'
import { getOtherLinks, getPageLinks } from '../../../links.js'
import { useContext } from 'react'
import { CursorContext } from '../../../providers/cursor-provider.js'
import { ArrowOutward } from '../../svg/arrow-outward.js'

export const Footer = ({ currentUrl }) => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateOnLinkHover = () => {
    updateCursor({
      props: { width: 125, height: 125, backgroundColor: 'var(--clr-rgb-secondary)' },
      element: <ArrowOutward className="h-12 w-12 fill-primary"/>,
    })
  }

  return (
    <footer className="mt-64 grid border-t border-secondary/20 lg:grid-cols-footer lg:mt-80">
      <div className="flex grow flex-col horizontal-spacing">
        <Link to="/" className="mt-16 mr-8 max-w-md">
          <LogoWithClaim/>
        </Link>
        <Link className="mt-20 flex w-fit flex-wrap py-4 text-heading-2 2xl:mt-[6.5vw]"
              to={ currentUrl.to }
              onMouseEnter={ updateOnLinkHover }
              onMouseLeave={ resetCursor }>
          <p>next/</p>
          <p>{ currentUrl.title }</p>
        </Link>
      </div>

      <ul className="mt-12 flex w-full flex-col justify-self-end border-t text-heading-4 border-secondary/20 lg:mt-0 lg:border-t-0 lg:border-l">
        {
          getPageLinks().map(link => <FooterLink { ...link } key={ link.title }/>)
        }
      </ul>


      <ul className="mt-24 mb-3 flex grow gap-x-8 horizontal-spacing lg:mt-[10vw] lg:mb-0 lg:pb-8">
        <li>
          <DefaultLink to="/">LinkedIn</DefaultLink>
        </li>
      </ul>

      <ul className="flex flex-wrap items-end justify-between gap-x-8 gap-y-16 pb-8 border-secondary/20 horizontal-spacing lg:gap-y-0 lg:border-l lg:pl-8">
        <li className="flex grow justify-between gap-x-2 max-w-2xs">
          {
            getOtherLinks().map(({ to, title }) => <DefaultLink to={ to } key={ title }>{ title }</DefaultLink>)
          }
        </li>
        <li>© 2024 csr vision</li>
      </ul>
    </footer>
  )
}