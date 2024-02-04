import { Reveal } from '../../animations/reveal.js'
import { DefaultLink } from '../../common/default-link.js'
import { getOtherLinks, getSocialLinks } from '../../../links.js'
import { DefaultLinkExternal } from '../../common/default-link-external.js'

export const SubNav = ({ isActive, toggleActive }) =>
  <div className="mt-20 flex flex-wrap items-end justify-between gap-x-2 gap-y-6 text-sm md:mt-28 xl:text-base">
    <ul className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 lg:gap-x-8">
      {
        getSocialLinks().map(({ to, title }) =>
          <li key={ title } className="flex">
            <Reveal animate={ isActive ? 'enter' : 'exit' }
                    custom={ [0.6, 0] }>
              <DefaultLinkExternal to={ to } onClick={ toggleActive }>{ title }</DefaultLinkExternal>
            </Reveal>
          </li>,
        )
      }
    </ul>

    <ul className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 lg:gap-x-8">
      <li className="flex justify-between gap-x-2 max-w-2xs">
        {
          getOtherLinks().map(({ to, title }) =>
            <Reveal key={ title }
                    animate={ isActive ? 'enter' : 'exit' }
                    custom={ [0.6, 0] }>
              <DefaultLink to={ to } onClick={ toggleActive }>{ title }</DefaultLink>
            </Reveal>)
        }
      </li>
      <li>
        <Reveal animate={ isActive ? 'enter' : 'exit' }
                custom={ [0.6, 0] }>
          © 2024 csr vision
        </Reveal>
      </li>
    </ul>
  </div>