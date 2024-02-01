import { SeoHead } from '../components/seo-head.js'

const ProjectTemplate = (data) => {
  console.log(data)

  return <div>Ich bin ein project</div>
}

export default ProjectTemplate

export const Head = ({ data }) => <SeoHead title={ `dummy head TODO change` }/>