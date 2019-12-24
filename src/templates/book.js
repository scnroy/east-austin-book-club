import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export default ({
    location: {pathname},
    data: {
        markdownRemark: {
            frontmatter: {title, description, cover},
        },
    },
}) => (
    <Layout pathname={pathname}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={cover} alt="" />
    </Layout>
)

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                description
                cover {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`
