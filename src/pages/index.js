/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {colors} from '../styles/vars'
import {Button} from '../components/button'

const Book = ({date, title, author, description, cover, link}) => (
    <section>
        <h2
            css={css`
                line-height: 1.4;
                font-size: 3em;
            `}
        >
            {date}
        </h2>
        <div
            css={css`
                background-color: ${colors.light};
                padding: 4rem;
                color: ${colors.dark};
                border-radius: 2px;
                display: flex;
            `}
        >
            <div
                css={css`
                    flex-basis: 100%;
                `}
            >
                <img
                    src={cover}
                    alt=""
                    css={css`
                        max-width: 100%;
                        height: auto;
                    `}
                />
                <Button label="Check out library book" href={link} />
            </div>
            <div
                css={css`
                    flex-shrink: 2;
                `}
            >
                <h3>{title}</h3>
                <p>
                    <em>{author}</em>
                </p>
                <p>{description}</p>
            </div>
        </div>
    </section>
)

const IndexPage = ({
    pageContext,
    data: {
        allMarkdownRemark: {edges},
    },
}) => (
    <Layout>
        <SEO title="Home" />
        <section>
            <h1
                css={css`
                    line-height: 1.4;
                    font-size: 3em;
                    margin: 15vh 0;
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
                <br /> around 7pm
            </h1>
        </section>
        <hr />
        {edges.map(({node: {frontmatter}}) => {
            return <Book {...frontmatter} />
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
                        cover
                        date(formatString: "MMMM DD")
                        link
                    }
                }
            }
        }
    }
`
