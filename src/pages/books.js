/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({
    pageContext,
    location: {pathname},
    data: {
        allMarkdownRemark: {edges},
    },
}) => (
    <Layout pathname={pathname}>
        <SEO title="Previous Reads" />
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
                        {frontmatter.date}
                    </h3>
                    <p>
                        <Link to={fields.slug}>{frontmatter.title}</Link> by{' '}
                        {frontmatter.author}
                    </p>
                </li>
            ))}
        </ul>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query($pastFilter: MarkdownRemarkFilterInput) {
        allMarkdownRemark(
            filter: $pastFilter
            sort: {fields: frontmatter___date, order: DESC}
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
                        date(formatString: "MMMM DD YYYY")
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
