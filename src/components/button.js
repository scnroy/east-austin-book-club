/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {Link} from 'gatsby'
import {anton, colors} from '../styles/vars'

const btn = css`
    background-color: ${colors.contrast};
    text-transform: uppercase;
    border: none;
    display: inline-block;
    border-radius: 2px;
    padding: 1rem 2rem;
    font-size: 0.8em;
    letter-spacing: 0.3em;
    text-decoration: none;
    color: ${colors.light};
    ${anton};
`

const Button = ({label, href, type, to, onClick}) => {
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
        <Button onClick={onClick} type={type} css={btn}>
            {label}
        </Button>
    )
}

export {Button}
