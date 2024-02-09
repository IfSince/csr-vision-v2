import { useContext } from 'react'
import { ProjectImageModal } from './project-image-modal.js'
import { CursorContext } from '../../providers/cursor-provider.js'
import { GatsbyImage } from 'gatsby-plugin-image'
import { TableRow } from '../common/table/table-row.js'
import { useIsMobile } from '../../hooks/use-is-mobile.js'

export const ProjectList = ({ projects }) => {
  const isMobile = useIsMobile()
  const { updateCursor, resetCursor } = useContext(CursorContext)

  const updateModal = (index) => {
    updateCursor({
      props: { width: 400, height: 300, backgroundColor: 'rgba(0,0,0,0)' },
      element: <ProjectImageModal index={ index } projects={ projects } key="project-image"/>,
      transition: { backgroundColor: { duration: 0 } },
    })
  }

  return (
    <ul className="grid grid-cols-layout col-full-width" role="none" onMouseLeave={ resetCursor }>
      {
        projects.map(({ slug, title, category, image }, index) =>
          <TableRow to={ `/projects${ slug }` }
                    addition={ category }
                    title={ title }
                    onMouseEnter={ () => updateModal(index) }
                    onClick={ resetCursor }>
            {
              isMobile &&
              <div className="mb-6 max-h-80 w-full max-w-sm md:col-start-4 md:justify-self-end">
                <GatsbyImage alt={ title } image={ image } className="h-full w-full"/>
              </div>
            }
          </TableRow>,
        )
      }
    </ul>
  )
}