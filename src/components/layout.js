/** @jsx jsx */
import {Fragment} from 'react'
import {Global, css, jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
// import Img from 'gatsby-image'

import {lora} from '../styles/vars'

const Menu = () => (
    <ul
        css={css`
            list-style: none;
            margin: 0;
            display: flex;

            li {
                margin-right: 1rem;
                font-size: 1.2rem;
            }

            a {
                text-decoration: none;
            }
        `}
    >
        <li>
            <Link to="/">Upcoming Reads</Link>
        </li>
        <li>
            <Link to="/books">Previous Reads</Link>
        </li>
        <li>
            <Link to="/about">About &amp; Contact</Link>
        </li>
    </ul>
)

const Left = styled.div`
    position: relative;
    font-style: italic;
    font-size: 2rem;
    padding: 0.5rem;

    @media (min-aspect-ratio: 534/277) and (orientation: landscape) {
        font-size: 11vh;
    }

    @media (min-width: 720px) {
        font-size: 4vw;
        position: fixed;
        top: 0;
        left: 0;
        width: 50%;
    }
`

const Right = styled.div`
    min-height: 100%;
    padding: 1rem;

    @media (min-width: 720px) {
        width: 50%;
        margin-left: 50%;
    }
`

const Layout = ({children}) => (
    <Fragment>
        <Global
            styles={css`
                * {
                    box-sizing: border-box;
                }
                body {
                    margin: 0;
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
        <Left>
            <h1
                css={css`
                    font-size: inherit;
                `}
            >
                <Link to="/">East Austin Bookclub</Link>
            </h1>
            <p>
                Discussing books together, on the third Monday of every month at{' '}
                <a href="https://nativehostels.com/bar">Native Hostel & Bar</a>{' '}
                7pm sharp
            </p>
        </Left>
        <Right>
            <Menu />
            {children}
        </Right>
        {/* <Img fluid={image} /> */}
    </Fragment>
)

export default Layout
