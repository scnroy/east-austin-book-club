/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Layout as StyledLayout, Container, Main, css } from "theme-ui"
import { Global } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
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
    <StyledLayout>
      <Global
        styles={css({
          "*": {
            boxSizing: `border-box`,
          },
          body: {
            margin: 0,
            fontFamily: `body`,
          },
        })}
      />

      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        <Container>{children}</Container>
      </Main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </StyledLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
