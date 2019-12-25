/** @jsx jsx */
import {Fragment, useState, useEffect} from 'react'
import {Global, css, jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
// import Img from 'gatsby-image'

import {lora, montserrat} from '../styles/vars'
import {btn} from '../components/button'

const getCurrentIndex = pathname => {
    if (pathname.includes('about')) {
        return 3
    } else if (pathname === '/') {
        return 1
    }

    return 2
}

const Menu = ({pathname}) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(getCurrentIndex(pathname))
    }, [pathname])

    return (
        <ul
            css={css`
                list-style: none;
                margin: 0 0 3rem;
                display: flex;
                justify-content: space-between;

                @media (max-width: 520px) {
                    flex-direction: column;
                    text-align: center;

                    a {
                        width: 100%;
                        padding: 0.5rem 0.5rem;
                    }
                }

                @media (min-width: 880px) {
                    margin: 0 0 1rem;
                }

                li {
                    margin-right: 1rem;
                    font-size: 1em;

                    @media (min-width: 880px) {
                        font-size: 1.3vw;
                    }

                    &:nth-of-type(${isActive}) {
                        a {
                            background-color: white;
                        }
                    }
                }
            `}
        >
            <li>
                <Link to="/" css={btn}>
                    Upcoming Reads
                </Link>
            </li>
            <li>
                <Link to="/books" css={btn}>
                    Previous Reads
                </Link>
            </li>
            <li>
                <Link to="/about" css={btn}>
                    About &amp; Contact
                </Link>
            </li>
        </ul>
    )
}

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
                Discussing books together, on the third Monday of every month at{' '}
                <a href="https://nativehostels.com/bar">Native Hostel & Bar</a>{' '}
                7pm sharp
            </p>
        </Left>
        <Right>
            <Menu pathname={pathname} />
            {children}
        </Right>
        {/* <Img fluid={image} /> */}
    </Fragment>
)

export default Layout
