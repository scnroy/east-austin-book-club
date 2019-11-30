/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Book from '../components/book'
import {colors, bp} from '../styles/vars'

const IndexPage = ({
    pageContext,
    data: {
        allMarkdownRemark: {edges},
    },
}) => (
    <Layout>
        <SEO title="Home" />
        <section
            css={css`
                min-height: 70vh;
            `}
        >
            <h1
                css={css`
                    line-height: 1.4;
                    margin: 20vh 0 0;
                    font-size: 2em;

                    @media (min-width: ${bp.sm}) {
                        font-size: 3rem;
                    }

                    a {
                        color: ${colors.light};
                    }
                `}
            >
                Discussing books together,
                <br />
                on the third Monday
                <br />
                of every month at <br />
                <a href="https://nativehostels.com/bar">Native Hostel & Bar</a>
                <br />
                7pm sharp
            </h1>
        </section>
        <hr />
        {edges.map(({node: {frontmatter, fields}}) => {
            return <Book {...frontmatter} {...fields} />
        })}
    </Layout>
)

export default IndexPage

export const query = graphql`
    query($filter: MarkdownRemarkFilterInput) {
        allMarkdownRemark(
            filter: $filter
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
