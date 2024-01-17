import { Link } from 'gatsby'

export const DefaultLink = ({ to, children }) => {
  return (
    <Link to={ to } className="underline">
      { children }
    </Link>
  )
}