import { Link } from 'gatsby'
import { RowHover } from '../../animations/row-hover.js'

export const FooterLink = ({ to = '', title }) =>
  <RowHover Tag="li">
    <Link className="block border-b py-4 horizontal-spacing border-secondary/20 lg:px-8"
          to={ to }>
      { title }
    </Link>
  </RowHover>
