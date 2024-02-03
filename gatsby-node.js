const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    const parent = getNode(node.parent)

    createNodeField({
      name: 'slug',
      node,
      value: `${ value }`,
    })
    createNodeField({
      name: `sourceName`,
      node,
      value: parent.sourceInstanceName,
    })
  }
}

const path = require('path')
const postTemplate = path.resolve(`./src/templates/team-member.js`)
const blogTemplate = path.resolve('./src/templates/blog.js')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  /* ---------- Projects ---------- */
  const projectsQuery = await graphql(`
    query {
      allMdx(filter: {fields: {sourceName: {eq: "projects"}}}) {
        nodes {
          id
          fields {
            slug
            sourceName
          }
        }
      }
    }
  `)

  if (projectsQuery.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" projects query')
  }

  const projects = projectsQuery.data.allMdx.nodes

  projects.forEach(project => {
    createPage({
      path: `${ project.fields.sourceName }${ project.fields.slug }`,
      component: path.resolve('./src/templates/project.js'),
      context: { id: project.id },
    })
  })

  /* ---------- Team Members ---------- */
  const teamMembersQuery = await graphql(`
    query {
      allMdx(filter: {fields: {sourceName: {eq: "team-members"}}}) {
        nodes {
          id
          fields {
            slug
            sourceName
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (teamMembersQuery.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" team-members query')
  }

  const teamMembers = teamMembersQuery.data.allMdx.nodes

  teamMembers.forEach(teamMember => {
    createPage({
      path: `our-team${ teamMember.fields.slug }`,
      component: `${ postTemplate }?__contentFilePath=${ teamMember.internal.contentFilePath }`,
      context: { id: teamMember.id },
    })
  })

  /* ---------- Blogs ---------- */
  const blogsQuery = await graphql(`
    query {
      allMdx(filter: {fields: {sourceName: {eq: "blogs"}}}) {
        nodes {
          id
          fields {
            slug
            sourceName
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (blogsQuery.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" blogs query')
  }

  const blogs = blogsQuery.data.allMdx.nodes

  blogs.forEach(blog => {
    createPage({
      path: `blog${ blog.fields.slug }`,
      component: `${ blogTemplate }?__contentFilePath=${ blog.internal.contentFilePath }`,
      context: { id: blog.id },
    })
  })

}