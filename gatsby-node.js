/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {createFilePath} = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions
    if (
        node.internal.type === 'MarkdownRemark' &&
        node.fileAbsolutePath.includes('books')
    ) {
        const slug = createFilePath({node, getNode, basePath: 'content/books'})
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        })
    }
}

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/books/"}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/book.js'),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}
