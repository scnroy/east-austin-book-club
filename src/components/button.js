/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {Link} from 'gatsby'
import {anton, colors} from '../styles/vars'

const btn = css`
    text-transform: uppercase;
    border: 2px solid ${colors.dark};
    display: inline-block;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    font-size: 0.8em;
    letter-spacing: 0.3em;
    text-decoration: none;
    color: ${colors.dark};
    ${anton};
`

const Button = ({label, href, to, ...rest}) => {
    if (to) {
        return (
            <Link to={to} css={btn}>
                {label}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} css={btn}>
                {label}
            </a>
        )
    }

    return (
        <Button css={btn} {...rest}>
            {label}
        </Button>
    )
}

export {Button}
