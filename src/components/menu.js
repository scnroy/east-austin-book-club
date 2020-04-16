/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {useState, useEffect} from 'react'
import {btn} from './button'
import {Link} from 'gatsby'

const getCurrentIndex = (pathname) => {
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

export default Menu
