import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { SeoHead } from '../components/seo-head.js'
import { TeamMemberList } from '../components/our-team/team-member-list.js'
import { Headline } from '../components/layout/section/headline.js'
import { SectionHeading } from '../components/layout/section/section-heading.js'
import { Section } from '../components/layout/section/section.js'
import { SectionText } from '../components/layout/section/section-text.js'
import { SectionTitle } from '../components/layout/section/section-title.js'
import { SectionDotTitle } from '../components/layout/section/section-dot-title.js'
import { HeroTextReveal } from '../components/animations/hero-text-reveal.js'

const OurTeamPage = ({ data }) => {
  const teamMembers = data.allMdx.nodes.map(({ id, frontmatter, fields }) => ({
    id,
    name: frontmatter.name,
    role: frontmatter.role,
    skills: frontmatter.skills,
    slug: fields.slug,
    image: getImage(frontmatter.image),
    position: frontmatter.position,
  }))

  return (
    <>
      <section className="pt-hero-min md:pt-hero-max">
        <h1 className="grid">
          <HeroTextReveal>meet our</HeroTextReveal>
          <HeroTextReveal className="pl-[2ch] mb-[12vh] text-accent lg:mb-[8vh]">creative</HeroTextReveal>

          <HeroTextReveal className="justify-self-end">team of</HeroTextReveal>
          <HeroTextReveal className="justify-self-end text-accent">specialists</HeroTextReveal>
        </h1>
      </section>

      <Section>
        <Headline/>
        <SectionDotTitle>who we are</SectionDotTitle>

        <SectionTitle align="left">
          Kreativität, Engagement und Nachhaltigkeit – die treibende Kraft hinter unseren innovativen Lösungen.
        </SectionTitle>

        <SectionText align="right">
          Unser dynamisches Team bei csr vision ist eine vielfältige Gruppe von kreativen Köpfen und Fachleuten, die sich leidenschaftlich für Nachhaltigkeit
          und Design engagieren. Jedes Mitglied bringt einzigartige Fähigkeiten und Erfahrungen mit, um unseren Kunden dabei zu helfen, sich durch ansprechendes
          Design und die Aufarbeitung von CSR-Berichten als nachhaltige Marktführer zu präsentieren. Entdecken Sie die Menschen hinter den innovativen Lösungen,
          die uns auszeichnen.
        </SectionText>
      </Section>

      <Section>
        <SectionHeading>the team</SectionHeading>
        <Headline/>
        <TeamMemberList teamMembers={ teamMembers }/>
      </Section>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {fields: {sourceName: {eq: "team-members"}}}
      sort: {frontmatter: {position:ASC}}
    ) {
      nodes {
        id
        frontmatter {
          name
          role
          skills
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          position
        }
        fields {
          slug
        }
      }
    }
  }
`

export default OurTeamPage

export const Head = () => <SeoHead title="our team"/>