import { SectionTitle } from '../layout/section/section-title.js'
import { Magnetic } from '../animations/magnetic.js'
import { scrollRevealAnimation } from '../../animation.config.js'
import { m } from 'framer-motion'
import { ArrowOutward } from '../../svg/icons/arrow-outward.js'
import { DefaultImage } from '../animations/default-image.js'
import { GatsbyImage } from 'gatsby-plugin-image'
import { SectionText } from '../layout/section/section-text.js'
import { Link } from 'gatsby'

const MotionLink = m(Link)
export const AuthorBox = ({ name, role, slug, image, metaDescription }) =>
  <>
    <SectionTitle align="left">
            <span className="flex flex-wrap gap-x-6 md:gap-x-10">
              <span className="flex flex-col">
                <span>{ name }</span>
                <span className="mt-1 text-base font-medium tracking-normal">{ role }</span>
              </span>
              <Magnetic multiplier={ 10 } className="block h-fit w-fit" tag={ 'span' }>
              {
                position =>
                  <MotionLink
                    className="flex h-12 w-12 items-center justify-center rounded-full border p-3 transition-colors duration-300 border-secondary/20 group hover:border-secondary/80 md:p-3.5 md:h-14 md:w-14"
                    to={ `/our-team${ slug }` }
                    { ...scrollRevealAnimation(0.5) }>
                    <m.div style={ position }
                           className="h-full w-full transition-colors duration-300 fill-secondary hover:fill-secondary dark:fill-secondary/80">
                      <ArrowOutward/>
                    </m.div>
                  </MotionLink>
              }
            </Magnetic>
            </span>
    </SectionTitle>

    <div className="flex flex-wrap gap-x-6 gap-y-10 md:gap-x-16">
      <DefaultImage className="max-w-sm rounded-sm min-w-[400px] xs:max-w-[2.25em] 4xl:max-w-[3em]">
        <GatsbyImage alt={ name } image={ image }/>
      </DefaultImage>
      <SectionText align="right">{ metaDescription }</SectionText>
    </div>
  </>