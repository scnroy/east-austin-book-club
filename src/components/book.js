/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import styled from '@emotion/styled'
import Layout from './layout'
import {btn} from './button'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import SEO from './seo'

const Title = styled.h2`
    margin-bottom: 0.5rem;
`

const Description = styled.div`
    padding-left: 1rem;
    border-left: 2px solid black;
    text-align: justify;
    hyphens: auto;
`

const Questions = ({body}) => [
    <h3 key="q-heading">Discussion questions</h3>,
    <div key="q-body" dangerouslySetInnerHTML={{__html: body}} />,
]

export default ({
    path,
    data: {
        markdownRemark: {
            frontmatter: {title, author, cover, link},
            fields: {discussionQuestions},
            html,
        },
    },
}) => (
    <Layout pathname={path}>
        <SEO title={title} />

        <Title>{title}</Title>
        <p>by {author}</p>
        {cover && cover.childImageSharp && cover.childImageSharp.fluid && (
            <Img
                fluid={cover.childImageSharp.fluid}
                css={css`
                    width: calc(100% - 12px);
                    height: calc(100% - 12px);
                    border: 1px solid black;
                    border-radius: 4px;
                    max-width: 50%;
                    float: right;
                    margin-left: 1rem;
                    margin-bottom: 0.5rem;
                `}
            />
        )}
        <Description dangerouslySetInnerHTML={{__html: html}} />
        {link && (
            <a
                href={link}
                css={css`
                    margin: 1rem 0 3rem;
                    ${btn}
                `}
            >
                Check out ⇾
            </a>
        )}
        {discussionQuestions && <Questions body={discussionQuestions} />}
    </Layout>
)

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                author
                link
                cover {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
            fields {
                discussionQuestions
            }
            html
        }
    }
`
