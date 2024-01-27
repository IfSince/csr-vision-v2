import { LogoWithClaim } from '../../svg/logo/logo-with-claim.js'
import { Link } from 'gatsby'
import { DefaultLink } from '../../common/default-link.js'
import { FooterLink } from './footer-link.js'

const links = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/our-vision',
    title: 'Our Vision',
  },
  {
    to: '/projects',
    title: 'Projects',
  },
  {
    to: '/services',
    title: 'Services',
  },
  {
    to: '/our-team',
    title: 'Our Team',
  },
  {
    to: '/blog',
    title: 'Blog',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
]

export const Footer = () =>
  <footer className="grid border-t border-secondary/20 lg:grid-cols-footer">
    <div className="flex grow flex-col horizontal-spacing">
      <Link to="/">
        <LogoWithClaim className="mt-16 max-w-md"/>
      </Link>
      <Link className="mt-24 flex w-fit flex-wrap text-heading-2 2xl:mt-[6.5vw]"
            to="/our-vision">
        <p>next/</p>
        <p>our vision</p>
      </Link>
    </div>

    <ul className="mt-12 flex w-full flex-col justify-self-end border-t text-heading-4 border-secondary/20 lg:mt-0 lg:border-t-0 lg:border-l">
      {
        links.map(({ to, title }) => <FooterLink to={ to }>{ title }</FooterLink>)
      }
    </ul>


    <ul className="mt-24 mb-3 flex grow gap-x-8 horizontal-spacing lg:mt-[10vw] lg:mb-0 lg:pb-8">
      <li>
        <DefaultLink to="/">LinkedIn</DefaultLink>
      </li>
    </ul>

    <ul className="flex flex-wrap items-end justify-between gap-x-8 gap-y-16 pb-8 border-secondary/20 horizontal-spacing lg:gap-y-0 lg:border-l lg:pl-8">
      <li className="flex grow justify-between gap-x-2 max-w-2xs">
        <DefaultLink to="/press">Presse</DefaultLink>
        <DefaultLink to="/imprint">Impressum</DefaultLink>
        <DefaultLink to="privacy">Datenschutz</DefaultLink>
      </li>
      <li>© 2024 csr vision</li>
    </ul>
  </footer>