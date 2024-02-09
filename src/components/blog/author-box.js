import { SectionTitle } from '../layout/section/section-title.js'
import { DefaultImage } from '../animations/default-image.js'
import { GatsbyImage } from 'gatsby-plugin-image'
import { SectionText } from '../layout/section/section-text.js'

export const AuthorBox = ({ name, role, image, metaDescription }) =>
  <>
    <SectionTitle align="left" Type="div">
      <div className="flex flex-col">
        <h3>{ name }</h3>
        <span className="mt-1 text-base font-medium tracking-normal">{ role }</span>
      </div>
    </SectionTitle>

    <div className="flex flex-wrap gap-x-6 gap-y-10 md:gap-x-16">
      <DefaultImage className="max-w-sm rounded-sm xs:min-w-[400px] xs:max-w-[2.25em] 4xl:max-w-[3em]">
        <GatsbyImage alt={ name } image={ image }/>
      </DefaultImage>
      <SectionText align="right">{ metaDescription }</SectionText>
    </div>
  </>