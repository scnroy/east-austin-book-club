/** @jsx jsx */
import {Fragment} from 'react'
import {Global, css, jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'

import Menu from './menu'
import {lora, montserrat} from '../styles/vars'

const Left = styled.div`
    height: 100%;
    position: relative;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    font-size: 8vw;

    @media (min-aspect-ratio: 534/277) and (orientation: landscape) {
        font-size: 11vh;
    }

    @media (min-width: 880px) {
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

    @media (min-width: 880px) {
        width: 50%;
        margin-left: 50%;
    }
`

const Layout = ({pathname, children}) => (
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
                    ${montserrat}
                    font-size: 8vw;
                    line-height: 1.2;
                    font-weight: 400;
                    margin-bottom: 6.185vw;

                    @media (min-width: 720px) {
                        font-size: 6vw;
                    }

                    a {
                        text-transform: uppercase;
                        text-decoration: none;
                    }
                `}
            >
                <Link to="/">East&nbsp;Austin Book&nbsp;Club</Link>
            </h1>
            <p>
                Discussing books together, on the third Monday of every month{' '}
                <strike>
                    at
                    <a href="https://nativehostels.com/bar">
                        {' '}
                        Native Hostel & Bar
                    </a>
                </strike>{' '}
                on Zoom, 7pm sharp
            </p>
        </Left>
        <Right>
            <Menu pathname={pathname} />
            {children}
        </Right>
    </Fragment>
)

export default Layout
