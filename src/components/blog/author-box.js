import { SectionTitle } from '../layout/section/section-title.js'
import { ArrowOutward } from '../../svg/icons/arrow-outward.js'
import { DefaultImage } from '../animations/default-image.js'
import { GatsbyImage } from 'gatsby-plugin-image'
import { SectionText } from '../layout/section/section-text.js'
import { navigate } from 'gatsby'
import { IconButton } from '../common/button/icon-button.js'

export const AuthorBox = ({ name, role, slug, image, metaDescription }) =>
  <>
    <SectionTitle align="left">
            <span className="flex flex-wrap gap-x-6 md:gap-x-10">
              <span className="flex flex-col">
                <span>{ name }</span>
                <span className="mt-1 text-base font-medium tracking-normal">{ role }</span>
              </span>
              <IconButton theme="dark"
                          magneticMultiplier={ 10 }
                          className="h-fit w-fit"
                          onClick={ () => navigate(`/our-team${ slug }`) }
                          scrollAnimation={ true }>
                <ArrowOutward className="h-full w-full"/>
              </IconButton>

            </span>
    </SectionTitle>

    <div className="flex flex-wrap gap-x-6 gap-y-10 md:gap-x-16">
      <DefaultImage className="max-w-sm rounded-sm min-w-[400px] xs:max-w-[2.25em] 4xl:max-w-[3em]">
        <GatsbyImage alt={ name } image={ image }/>
      </DefaultImage>
      <SectionText align="right">{ metaDescription }</SectionText>
    </div>
  </>