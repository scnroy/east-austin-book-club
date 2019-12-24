/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {Link} from 'gatsby'
import {montserrat, colors} from '../styles/vars'

const btn = css`
    text-transform: uppercase;
    border: 1px solid ${colors.dark};
    display: inline-block;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    font-size: 0.8em;
    letter-spacing: 0.3em;
    text-decoration: none;
    background-color: ${colors.light};
    color: ${colors.dark};
    ${montserrat};
    position: relative;

    &::after {
        content: '';
        position: absolute;
        left: 4px;
        top: 4px;
        border: 1px solid ${colors.dark};
        border-radius: 2px;
        width: 100%;
        height: 100%;
        z-index: -1;
        transition: transform 0.5s ease-in-out;
    }

    &:hover {
        &::after {
            transform: translate(-4px, -4px);
        }
    }
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

export {Button, btn}
