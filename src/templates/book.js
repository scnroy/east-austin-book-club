import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

const Title = styled.h2`
    margin-bottom: 0.5rem;
`

const Description = styled.p`
    padding-left: 1rem;
    border-left: 2px solid black;
`

export default ({
    path,
    data: {
        markdownRemark: {
            frontmatter: {title, author, description, cover},
        },
    },
}) => (
    <Layout pathname={path}>
        <Title>{title}</Title>
        <p>by {author}</p>
        <Description>{description}</Description>
        <Img fluid={cover.childImageSharp.fluid} />
    </Layout>
)

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                description
                author
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
