import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export default ({
    data: {
        markdownRemark: {
            frontmatter: {title, description, cover},
        },
    },
}) => (
    <Layout>
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
                cover
            }
        }
    }
`
