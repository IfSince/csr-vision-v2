import { useContext } from 'react'
import { Project } from './project.js'
import { ProjectImageModal } from './project-image-modal.js'
import { StaticImage } from 'gatsby-plugin-image'
import { CursorContext } from '../../providers/cursor-provider.js'

const projects = [
  {
    title: 'Erstellen von diversen Assets für Port im Bereich Nachhaltigkeit',
    category: 'Design & Development',
    image: <StaticImage src="../../images/c2montreal.png" alt="montreal" width={ 400 } height={ 300 }/>,
    href: '/montreal',
  },
  {
    title: 'Office Studio',
    category: 'Design & Development',
    image: <StaticImage src="../../images/officestudio.png" alt="office studio" width={ 400 } height={ 300 }/>,
    href: '/office-studio',
  },
  {
    title: 'Locomotive',
    category: 'Design & Development',
    image: <StaticImage src="../../images/locomotive.png" alt="locomotive" width={ 400 } height={ 300 }/>,
    href: '/locomotive',
  },
  {
    title: 'Silencio',
    category: 'Design & Development',
    image: <StaticImage src="../../images/silencio.png" alt="silencio" width={ 400 } height={ 300 }/>,
    href: '/silencio',
  },
]

export const ProjectList = () => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateModal = ({ active, index }) => {
    updateCursor({
      props: { width: 400, height: 300, backgroundColor: 'rgba(0,0,0,0)' },
      element: <ProjectImageModal modal={ { active, index } } projects={ projects } key="image model"/>,
      transition: { backgroundColor: { duration: 0 } },
    })
  }

  return (
    <ul className="flex w-full flex-col items-center justify-center"
        role="none"
        onMouseLeave={ resetCursor }>
      {
        projects.map((project, index) =>
          <Project index={ index } project={ project } setModal={ updateModal } key={ project.title }/>,
        )
      }
    </ul>
  )
}