/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {btn} from '../components/button'
import {montserrat} from '../styles/vars'

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
            {edges.map(({node: {frontmatter, fields}}) => (
                <li>
                    <h3
                        css={css`
                            margin-bottom: 0.5rem;
                        `}
                    >
                        <Link to={fields.slug}>{frontmatter.title}</Link> by{' '}
                        {frontmatter.author}
                    </h3>
                    <p
                        css={css`
                            ${montserrat}
                        `}
                    >
                        {frontmatter.date}
                    </p>
                    <p
                        css={css`
                            padding-left: 1em;
                            border-left: 2px solid black;
                        `}
                    >
                        {frontmatter.description}
                        <br />
                        <a
                            href={frontmatter.link}
                            css={css`
                                margin-top: 1rem;
                                ${btn}
                            `}
                        >
                            RSVP ⇾
                        </a>
                    </p>
                </li>
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
                        description
                        cover {
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                        date(formatString: "MMMM DD, YYYY")
                        link
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
