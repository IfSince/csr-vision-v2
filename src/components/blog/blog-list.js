import { Blog } from './blog.js'

export const BlogList = ({ blogs }) =>
  <ul className="grid grid-cols-layout col-full-width">
    {
      blogs.map(blog => <Blog { ...blog } key={ blog.id }/>)
    }
  </ul>