const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const result = await graphql(`
    query {
      allContentstackBlogEntry {
        nodes {
          title
          url
          category
        }
      }
    }
  `)
  const createNewPage = (path, comp, title) => {
    createPage({
      path: `${path}`,
      component: comp,
      context: {
        title: title,
      },
    })
  }
  result.data.allContentstackBlogEntry.nodes.forEach(node => { 
      const newUrl=`/${node.category}${node.url}`
    createNewPage(newUrl, blogPostTemplate, node.title)
  })
}