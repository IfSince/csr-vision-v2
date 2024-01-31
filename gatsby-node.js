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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const projectsQuery = await graphql(`
    query {
      allMdx(filter: {fields: {sourceName: {eq: "projects"}}}) {
        edges {
          node {
            id
            fields {
              slug
              sourceName
            }
          }
        }
      }
    }
  `)

  if (projectsQuery.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query')
  }

  const projects = projectsQuery.data.allMdx.edges

  projects.forEach(({ node }, index) => {
    createPage({
      path: `${ node.fields.sourceName }${ node.fields.slug }`,
      component: path.resolve('./src/templates/project.js'),
      context: { id: node.id },
    })
  })

}