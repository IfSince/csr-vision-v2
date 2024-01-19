import { Reveal } from '../../animations/reveal.js'
import { DefaultLink } from '../../common/default-link.js'

const links = [
  [
    { title: 'Presse', href: '/press' },
  ],
  [
    { title: 'Datenschutz', href: '/privacy' },
    { title: 'Geschäftsbedingungen', href: '/terms-and-conditions' },
  ],
]

export const Footer = ({ isActive }) =>
  <ul className="mt-28 flex flex-wrap items-end justify-between gap-x-2 gap-y-6 text-sm 4xl:text-base">
    {
      links.map((linkGroup, index) =>
        <li className="overflow-hidden" key={ index }>
          <ul>
            {
              linkGroup.map(({ title, href }) =>
                <li className="clip-path" key={ title }>
                  <Reveal className="block"
                          custom={ [0.6, 0] }
                          animate={ isActive ? 'enter' : 'exit' }>
                    <DefaultLink to={ href }>{ title }</DefaultLink>
                  </Reveal>
                </li>,
              )
            }
          </ul>
        </li>,
      )
    }
  </ul>