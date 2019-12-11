/** @jsx jsx */
import {useState} from 'react'
import {jsx, css} from '@emotion/core'
import {Link} from 'gatsby'

import {anton, bp, colors} from '../../styles/vars'
import MenuButton from './menu-button'

const Menu = () => (
    <ul
        css={css`
            position: absolute;
            margin-left: 0;
            top: 100%;

            &:before {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                content: '';
                background: ${colors.dark};
                z-index: -1;
            }

            font-style: italic;
            font-weight: 600;
            line-height: 1.4;
            font-size: 2em;

            @media (min-width: ${bp.sm}) {
                font-size: 3rem;
            }

            a {
                display: block;
            }
        `}
    >
        <Link to="/">Upcoming Reads</Link>
        <Link to="/books">Previous Reads</Link>
        <Link to="/about">About &amp; Contact</Link>
    </ul>
)

const Header = ({siteTitle}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header
            css={css`
                display: grid;
                grid-template-columns: 1fr 6fr 1fr;
                grid-template-areas: '. main .';
                margin: 1rem 0;
            `}
        >
            <div
                css={css`
                    position: relative;
                    grid-area: main;
                    display: flex;
                    align-items: flex-start;
                `}
            >
                <Link
                    to="/"
                    css={css`
                        ${anton}
                        text-decoration: none;
                        font-size: 0.8em;
                        text-align: left;
                        text-transform: uppercase;
                        letter-spacing: 0.6em;
                        line-height: 1.8;
                        word-spacing: 100vw;
                        color: white;
                    `}
                >
                    {siteTitle}
                </Link>
                <MenuButton isActive={isOpen} handleClick={setIsOpen} />
                <Menu isOpen={isOpen} />
            </div>
        </header>
    )
}

export default Header
