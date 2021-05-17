import React from 'react'
import {css} from '@emotion/react'
import styled from '@emotion/styled'
import Layout from './layout'
import {btn} from './button'
import {graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'
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

const QuestionsBody = styled.div`
    font-size: 0.8rem;
    padding-left: 1rem;
    border-left: 2px solid black;

    hr {
        width: 6rem;
    }
`

const Questions = ({body}) => (
    <>
        <h3>Discussion questions</h3>
        <QuestionsBody dangerouslySetInnerHTML={{__html: body}} />
    </>
)

export default function Book({
    path,
    data: {
        markdownRemark: {
            frontmatter: {title, author, cover, link},
            fields: {discussionQuestions},
            html,
        },
    },
}) {
    return (
        <Layout pathname={path}>
            <SEO title={title} />

            <Title>{title}</Title>
            <p>by {author}</p>
            {cover?.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                    image={cover.childImageSharp.gatsbyImageData}
                    alt={`Cover artwork for ${title}`}
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
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                author
                link
                cover {
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: TRACED_SVG
                            layout: FULL_WIDTH
                        )
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
