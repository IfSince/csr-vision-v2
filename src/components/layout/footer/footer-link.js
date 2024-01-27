import { Link } from 'gatsby'

export const FooterLink = ({ to = '', children }) =>
  <li className="relative group">
    <Link className="block border-b py-4 transition-colors duration-[400ms] horizontal-spacing border-secondary/20 hover:text-primary lg:px-8"
          to={ to }>
      { children }
    </Link>

    <div className="absolute top-0 left-0 -z-10 h-full w-full duration-[400ms] bg-secondary clip-path-bg-hidden transition-[clip-path] group-hover:clip-path-bg-open"/>
  </li>