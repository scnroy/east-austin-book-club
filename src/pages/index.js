/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({
    pageContext,
    data: {
        allMarkdownRemark: {edges},
    },
}) => (
    <Layout>
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
                            margin: 0;
                        `}
                    >
                        <Link to={fields.slug}>{frontmatter.title}</Link> by{' '}
                        {frontmatter.author}
                    </h3>
                    <p
                        css={css`
                            /* font-style: italic; */
                            /* margin-bottom: 0; */
                        `}
                    ></p>
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
                                display: inline-block;
                                margin-top: 0.5rem;
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
                        date(formatString: "MMMM DD")
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
