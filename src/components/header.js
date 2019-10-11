/** @jsx jsx */
import {useState} from 'react'
import {jsx, css} from '@emotion/core'

import {Link} from 'gatsby'
import {anton} from '../styles/vars'
import MenuButton from './menu-button'
import PropTypes from 'prop-types'

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
                    grid-area: main;
                    display: flex;
                `}
            >
                <Link
                    to="/"
                    css={css`
                        ${anton}
                        text-decoration: none;
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
            </div>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
