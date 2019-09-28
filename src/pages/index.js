/** @jsx jsx */
import {jsx} from 'theme-ui'
import {graphql} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import SEO from '../components/seo'

// const Paper = styled.div`

// `

const IndexPage = ({
    data: {
        allMarkdownRemark: {edges},
    },
}) => {
    const {
        title,
        author,
        description,
        cover,
        date,
        link,
    } = edges[0].node.frontmatter
    return (
        <Layout>
            <SEO title="Home" />
            <h1 sx={{variant: 'title'}}>Reading together</h1>
            <p>Join us on the third Monday of every month</p>
            <div>
                <div>
                    <p>Next month:</p>
                    <h2>{title}</h2>
                    <p>
                        <em>{author}</em>
                    </p>
                    <p>{description}</p>
                </div>
                <div>
                    <img src={cover} alt="" />
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {fileAbsolutePath: {regex: "/books/"}}
            limit: 1
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        author
                        description
                        cover
                        date
                        link
                    }
                }
            }
        }
    }
`
