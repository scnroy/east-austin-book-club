/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {
  ThemeProvider,
  Layout as StyledLayout,
  Container,
  Main,
  Footer,
  css,
} from "theme-ui"
import { toTheme } from "@theme-ui/typography"
import { Global } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import typography from "../utils/typography"
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
    <>
      <ThemeProvider theme={toTheme(typography)}>
        <Global
          styles={css({
            "*": {
              boxSizing: `border-box`,
            },
            body: {
              margin: 0,
              background: 'linear-gradient(212deg, rgba(140,69,119,1) 0%, rgba(135,110,172,1) 33%, rgba(119,150,209,1) 66%, rgba(112,188,231,1) 100%)'
            },
          })}
        />
        <StyledLayout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>
            <Container>{children}</Container>
          </Main>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </StyledLayout>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
