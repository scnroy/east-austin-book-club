/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Global, css, jsx} from '@emotion/core'
import {lora} from '../styles/vars'
import {useStaticQuery, graphql} from 'gatsby'

import {colors} from '../styles/vars'
import Header from './header/header'

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Fragment>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        margin: 0;
                        background: ${colors.dark};
                        color: ${colors.light};
                        ${lora}
                    }
                    h1,
                    h2,
                    h3,
                    h4,
                    h5 {
                        font-style: italic;
                    }
                    a {
                        color: inherit;
                    }
                `}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            <main
                css={css`
                    display: grid;
                    grid-template-columns: 1fr 6fr 1fr;
                    grid-template-areas: '. main .';

                    @media (min-width: '') {
                    }
                `}
            >
                <div
                    css={css`
                        grid-area: main;
                        overflow: auto;
                    `}
                >
                    {children}
                </div>
            </main>
        </Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
