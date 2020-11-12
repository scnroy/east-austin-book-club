/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {createFilePath} = require('gatsby-source-filesystem')
const remark = require('remark')
const remarkHTML = require('remark-html')
const moment = require('moment')
const path = require('path')

exports.onCreatePage = ({page, actions}) => {
    const {createPage, deletePage} = actions
    deletePage(page)
    createPage({
        ...page,
        context: {
            ...page.context,
            futureFilter: {
                frontmatter: {
                    date: {ne: null, gte: moment().format()},
                },
            },
            pastFilter: {
                frontmatter: {
                    date: {ne: null, lte: moment().format()},
                },
            },
        },
    })
}

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

        const discussionQuestions = node.frontmatter.discussion_questions
        if (discussionQuestions) {
            const html = remark()
                .use(remarkHTML)
                .processSync(discussionQuestions)
                .toString()
            createNodeField({
                node,
                name: `discussionQuestions`,
                value: html,
            })
        }
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
            component: path.resolve('./src/components/book.js'),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}
