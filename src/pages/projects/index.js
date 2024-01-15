import { SeoHead } from '../../components/seo-head.js'
import { HeroLayout } from '../../components/layout/hero/hero-layout.js'

const ProjectsPage = () => {
  return (
    <>
      <main>
        <HeroLayout>
          <span className="text-heading-1 *:block">
            <span>take a look</span>
            <span className="pl-[2ch]">at our</span>
          </span>

          <span className="flex justify-end text-heading-1">
            <span className="flex flex-col">
              <span className="text-accent">sustainable</span>
              <span className="pl-[1ch]">projects</span>
            </span>
          </span>
        </HeroLayout>
      </main>


      <div className="flex h-screen items-center justify-center">Projects</div>
      <div className="flex h-screen items-center justify-center">Projects</div>
      <div className="flex h-screen items-center justify-center">Projects</div>
    </>
  )
}

export default ProjectsPage

export const Head = () => <SeoHead title="our projects"/>