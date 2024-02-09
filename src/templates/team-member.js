import { graphql } from 'gatsby'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'
import { Section } from '../components/layout/section/section.js'
import { Headline } from '../components/layout/section/headline.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SeoHead } from '../components/seo-head.js'
import { SectionHeading } from '../components/layout/section/section-heading.js'
import { sortAlphabetically } from '../util/sort-alphabetically.js'
import { RowHover } from '../components/animations/row-hover.js'
import { AdvancedPostProduction } from '../svg/icons/skills/advanced-post-production.js'
import { slugify } from '../util/slugify.js'
import { BusinessDevelopment } from '../svg/icons/skills/business-development.js'
import { Consulting } from '../svg/icons/skills/consulting.js'
import { Copy } from '../svg/icons/skills/copy.js'
import { CreativeAiOperator } from '../svg/icons/skills/creative-ai-operator.js'
import { DroneOperator } from '../svg/icons/skills/drone-operator.js'
import { FilmProduction } from '../svg/icons/skills/film-production.js'
import { GraphicDesign } from '../svg/icons/skills/graphic-design.js'
import { OnlineMarketing } from '../svg/icons/skills/online-marketing.js'
import { Photography } from '../svg/icons/skills/photography.js'
import { UiUxDesigner } from '../svg/icons/skills/ui-ux-designer.js'
import { VfxSpecialist } from '../svg/icons/skills/vfx-specialist.js'
import { WebDevelopment } from '../svg/icons/skills/web-development.js'
import { DefaultImage } from '../components/animations/default-image.js'
import { LinkedSectionHeading } from '../components/layout/section/linked-section-heading.js'
import { SectionTitle } from '../components/layout/section/section-title.js'

const TeamMemberTemplate = ({ data, children }) => {
  const teamMember = { ...data.mdx.frontmatter, image: getImage(data.mdx.frontmatter.image) }

  const skillIcons = {
    'advanced-post-production': <AdvancedPostProduction className="stroke-primary"/>,
    'business-development': <BusinessDevelopment className="stroke-primary"/>,
    'consulting': <Consulting className="stroke-primary"/>,
    'copy': <Copy className="stroke-primary"/>,
    'creative-ai-operator': <CreativeAiOperator className="stroke-primary"/>,
    'drone-operator': <DroneOperator className="stroke-primary"/>,
    'film-production': <FilmProduction className="stroke-primary"/>,
    'graphic-design': <GraphicDesign className="stroke-primary"/>,
    'online-marketing': <OnlineMarketing className="stroke-primary"/>,
    'photography': <Photography className="stroke-primary"/>,
    'ui-ux-designer': <UiUxDesigner className="stroke-primary"/>,
    'vfx-specialist': <VfxSpecialist className="stroke-primary"/>,
    'web-development': <WebDevelopment className="stroke-primary"/>,
  }

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <div className="flex flex-wrap justify-between gap-x-4 gap-y-[6vh] mb-[6vh] md:mb-[12vh]">
            <span className="*:block break-words lg:pt-[0.25em]">
              <HeroTextReveal>{ teamMember.firstName }</HeroTextReveal>
              <HeroTextReveal>{ teamMember.lastName }</HeroTextReveal>
            </span>

            <div className="flex grow justify-end lg:justify-around">
              <span></span>
              <DefaultImage className="max-w-sm rounded-sm min-w-[300px] xs:max-w-[2.25em] 4xl:max-w-[3em]">
                <GatsbyImage alt={ teamMember.name } image={ teamMember.image }/>
              </DefaultImage>
            </div>
          </div>

          <HeroTextReveal className="justify-self-end">{ teamMember.role }</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionDotTitle Type="h2">About</SectionDotTitle>
        { children }
      </Section>

      <Section>
        <SectionHeading Type="h2">skills</SectionHeading>
        <div className="text-heading-3 mt-[2em] col-full-width">
          {
            sortAlphabetically(teamMember.skills).map(skill =>
              <RowHover
                key={ skill }
                className="first:border-t border-b border-secondary/20"
                first={
                  <div className="grid grid-cols-1 items-center text-heading-3 horizontal-spacing">
                    <h3 className="col-start-1 row-start-1 py-10 text-3xl">{ skill }</h3>
                  </div>
                }
                second={
                  <div className="grid grid-cols-1 items-center text-heading-3 horizontal-spacing">
                    <h3 className="col-start-1 row-start-1 py-10 text-3xl">{ skill }</h3>
                    <div className="col-start-1 row-start-1 justify-self-end bg-white py-2 pl-24">
                      <div className="flex aspect-square items-center justify-center bg-white w-[3.5em] text-heading-3">
                        {
                          skillIcons[slugify(skill)]
                        }
                      </div>
                    </div>
                  </div>
                }/>,
            )
          }
        </div>
      </Section>

      <Section>
        <LinkedSectionHeading to="/contact" Type="h2" mobileDescription="Kontakt aufnehmen">get in touch</LinkedSectionHeading>
        <Headline/>
        <SectionTitle align="center">Mit deinem Report gestalten wir gemeinsam den Weg zur Nachhaltigkeit.</SectionTitle>
      </Section>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
        firstName
        lastName
        role
        skills
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        metaDescription
      }
    }
  }
`

export default TeamMemberTemplate

export const Head = ({ data }) => <SeoHead title={ `${ data.mdx.frontmatter.name.toLowerCase() }` }
                                           description={ `${ data.mdx.frontmatter.metaDescription }` }/>