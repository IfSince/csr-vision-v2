import { Link } from 'gatsby'
import { DefaultLink } from '../../common/default-link.js'
import { getNextPageUrl, getOtherLinks, getPageLinks, getSocialLinks } from '../../../links.js'
import { useEffect, useState } from 'react'
import { LogoWithClaim } from '../../../svg/logo/logo-with-claim.js'
import { DefaultLinkExternal } from '../../common/default-link-external.js'
import { RowHover } from '../../animations/row-hover.js'
import { useLinkCursor } from '../../../hooks/cursor-hovers/use-link-cursor.js'

export const Footer = ({ currentUrl = '/' }) => {
  const linkCursor = useLinkCursor()

  const [nextPage, setNextPage] = useState(getPageLinks()[0])

  useEffect(() => setNextPage(getNextPageUrl(currentUrl)), [currentUrl])

  return (
    <footer className="pt-64 bg-primary lg:pt-80">
      <div className="grid border-t border-secondary/20 lg:grid-cols-[minmax(650px,1fr)_minmax(0,max(768px,35vw))]">
        <div className="flex grow flex-col horizontal-spacing">
          <Link to="/" className="mt-16 mr-8 max-w-md">
            <LogoWithClaim/>
          </Link>
          <Link className="mt-20 flex w-fit flex-wrap py-4 text-3xl 2xl:mt-[6.5vw]"
                to={ nextPage.to }
                { ...linkCursor }>
            <p>next/</p>
            <p>{ nextPage.title }</p>
          </Link>
        </div>

        <ul className="mt-12 flex w-full flex-col justify-self-end border-t text-h3 border-secondary/20 lg:mt-0 lg:border-t-0 lg:border-l">
          {
            getPageLinks().map(({ to, title }) =>
              <RowHover Tag="li"
                        key={ title }
                        animateOnScroll={ false }
                        first={
                          <Link className="block border-b py-4 horizontal-spacing border-secondary/20 lg:px-8"
                                to={ to }>
                            { title }
                          </Link>
                        }/>,
            )
          }
        </ul>

        <ul className="mt-24 mb-3 flex grow gap-x-8 horizontal-spacing lg:mt-[10vw] lg:mb-0 lg:pb-8">
          {
            getSocialLinks().map(({ to, title }) =>
              <li key={ title }>
                <DefaultLinkExternal to={ to }>{ title }</DefaultLinkExternal>
              </li>,
            )
          }
        </ul>

        <ul className="flex flex-wrap items-end justify-between gap-x-8 gap-y-16 pb-8 border-secondary/20 horizontal-spacing lg:gap-y-0 lg:border-l lg:pl-8">
          <li className="flex grow justify-between gap-x-2 max-w-2xs">
            {
              getOtherLinks().map(({ to, title }) => <DefaultLink to={ to } key={ title }>{ title }</DefaultLink>)
            }
          </li>
          <li>© 2024 csr vision</li>
        </ul>
      </div>
    </footer>
  )
}