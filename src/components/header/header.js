/** @jsx jsx */
import {useState} from 'react'
import {jsx, css} from '@emotion/core'
import {Link} from 'gatsby'
import Modal from 'react-modal'

import {anton} from '../../styles/vars'
import MenuButton from './menu-button'

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
                <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                    <Link to="/">Upcoming Reads</Link>
                    <Link to="/books">Previous Reads</Link>
                    <Link to="/about">About &amp; Contact</Link>
                </Modal>
            </div>
        </header>
    )
}

export default Header
