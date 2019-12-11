import {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const useImageFilter = () => {
    const [currentImage, setCurrentImage] = useState(null)

    const images = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            cover {
                                relativePath
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const image = images.allMarkdownRemark.edges.filter(
        ({
            node: {
                frontmatter: {
                    cover: {relativePath},
                },
            },
        }) => relativePath === currentImage
    ).node.frontmatter.cover.childImageSharp.fluid

    return {image, setCurrentImage}
}

export default useImageFilter
