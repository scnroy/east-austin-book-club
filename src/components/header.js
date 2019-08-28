/** @jsx jsx */
import {jsx} from 'theme-ui'
import {css} from '@emotion/core'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

const Header = ({siteTitle}) => (
    <header>
        <div
            css={`
                text-align: center;
            `}
        >
            <h1
                css={`
                    margin: 0;
                    font-size: 11.4vw;
                    margin-top: -4vw;
                    opacity: 0.2;
                `}
            >
                <Link
                    to="/"
                    sx={{
                        variant: 'title',
                        color: 'text',
                    }}
                    css={`
                        text-decoration: none;
                        text-align: center;
                    `}
                >
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
