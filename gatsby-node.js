const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/posts/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/post-template.js"),
      context: { slug: node.frontmatter.slug }, // pass $slug to query in post-template
    })
  })
}
