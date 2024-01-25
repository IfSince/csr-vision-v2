import { useContext } from 'react'
import { Project } from './project.js'
import { ProjectImageModal } from './project-image-modal.js'
import { CursorContext } from '../../providers/cursor-provider.js'

export const ProjectList = ({ projects }) => {
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateModal = (index) => {
    updateCursor({
      props: { width: 400, height: 300, backgroundColor: 'rgba(0,0,0,0)' },
      element: <ProjectImageModal index={index} projects={ projects } key="image model"/>,
      transition: { backgroundColor: { duration: 0 } },
    })
  }

  return (
    <ul className="flex w-full flex-col items-center justify-center col-full-width"
        role="none"
        onMouseLeave={ resetCursor }>
      {
        projects.map((project, index) =>
          <Project index={ index } project={ project } setModal={ updateModal } key={ project.id }/>,
        )
      }
    </ul>
  )
}