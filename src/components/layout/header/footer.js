import { Reveal } from '../../animations/reveal.js'
import { DefaultLink } from '../../common/default-link.js'
import { getOtherLinks, getSocialLinks } from '../../../links.js'

const links = [
  [
    { title: 'Presse', href: '/press' },
  ],
  [
    { title: 'Datenschutz', href: '/privacy' },
    { title: 'Impressum', href: '/imprint' },
  ],
]

export const Footer = ({ isActive }) =>
  <div className="mt-28 flex flex-wrap items-end justify-between gap-x-2 gap-y-6 text-sm xl:text-base">
    <ul>
      {
        getSocialLinks().map(({ to, title }) =>
          <li className="clip-path-overflow" key={ title }>
            <Reveal className="block"
                    custom={ [0.6, 0] }
                    animate={ isActive ? 'enter' : 'exit' }>
              <DefaultLink to={ to }>{ title }</DefaultLink>
            </Reveal>
          </li>,
        )
      }
    </ul>

    <ul className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-secondary/20 lg:gap-x-8">
      <li className="flex justify-between gap-x-2 clip-path-overflow max-w-2xs">
        {
          getOtherLinks().map(({ to, title }) =>
            <Reveal className="block"
                    custom={ [0.6, 0] }
                    animate={ isActive ? 'enter' : 'exit' }>
              <DefaultLink to={ to }>{ title }</DefaultLink>
            </Reveal>)
        }
      </li>
      <li className="clip-path-overflow">
        <Reveal className="block"
                custom={ [0.6, 0] }
                animate={ isActive ? 'enter' : 'exit' }>
          © 2024 csr vision
        </Reveal>
      </li>
    </ul>
  </div>