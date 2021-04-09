import React from 'react'
import {css} from '@emotion/react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {btn} from '../components/button'
import {montserrat} from '../styles/vars'

const Book = ({slug, title, author, date, html, link}) => (
    <li
        css={css`
            margin-bottom: 3rem;
        `}
    >
        <h3
            css={css`
                margin-bottom: 0.5rem;
            `}
        >
            <Link to={slug}>{title}</Link> by {author}
        </h3>
        <p
            css={css`
                ${montserrat}
            `}
        >
            {date}
        </p>
        <div
            css={css`
                padding-left: 1em;
                border-left: 2px solid black;
            `}
            dangerouslySetInnerHTML={{__html: html}}
        />
        {link && (
            <a
                href={link}
                css={css`
                    margin-top: 1rem;
                    ${btn}
                `}
            >
                Check out ⇾
            </a>
        )}
    </li>
)

const IndexPage = ({
    path,
    data: {
        allMarkdownRemark: {edges},
    },
}) => (
    <Layout pathname={path}>
        <SEO title="Upcoming Reads" />
        <ul
            css={css`
                list-style: none;
                margin: 0;
            `}
        >
            {edges.map(({node: {frontmatter, fields, html}}) => (
                <Book
                    {...frontmatter}
                    {...fields}
                    key={fields.slug}
                    html={html}
                />
            ))}
        </ul>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query($futureFilter: MarkdownRemarkFilterInput) {
        allMarkdownRemark(
            filter: $futureFilter
            sort: {fields: frontmatter___date, order: ASC}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        author
                        cover {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: TRACED_SVG
                                    layout: FULL_WIDTH
                                )
                            }
                        }
                        date(formatString: "MMMM DD, YYYY")
                        link
                    }
                    fields {
                        slug
                    }
                    html
                }
            }
        }
    }
`
