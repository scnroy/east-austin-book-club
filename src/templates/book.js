/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import {colors} from '../styles/vars'

const Title = styled.h2`
    margin-bottom: 0.5rem;
`

const Description = styled.div`
    padding-left: 1rem;
    border-left: 2px solid black;
`

export default ({
    path,
    data: {
        markdownRemark: {
            frontmatter: {title, author, description, cover},
            html,
        },
    },
}) => (
    <Layout pathname={path}>
        <Img
            fluid={cover.childImageSharp.fluid}
            css={css`
                width: calc(100% - 8px);
                height: calc(100% - 8px);
                border: 1px solid black;
                border-radius: 4px;
                margin-bottom: 2rem;

                &::after {
                    content: '';
                    position: absolute;
                    left: 6px;
                    top: 6px;
                    border: 1px solid ${colors.dark};
                    border-radius: 2px;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                }
            `}
        />
        <Title>{title}</Title>
        <p>by {author}</p>
        <Description dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
)

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                author
                cover {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
            html
        }
    }
`
