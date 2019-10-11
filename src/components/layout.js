/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Global, css} from '@emotion/core'
import {useStaticQuery, graphql} from 'gatsby'

import {colors} from '../styles/vars'
import Header from './header'

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
        <>
            <Global
                styles={css`
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        margin: 0;
                        background: ${colors.dark};
                        color: ${colors.light};
                    }
                `}
            />
            <Header siteTitle={data.site.siteMetadata.title} />
            {/* <main>{children}</main> */}
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
