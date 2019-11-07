/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {colors} from '../../styles/vars'

const inner = css`
    width: 40px;
    height: 4px;
    background-color: ${colors.light};
    border-radius: 1px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
`

const MenuBox = styled.span`
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
`

const MenuBoxInner = styled.span`
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    display: block;
    top: 50%;
    margin-top: -2px;
    ${inner}

    &::before, &::after {
        content: '';
        display: block;
        ${inner}
    }

    &::before {
        top: -10px;
        transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }
    &::after {
        bottom: -10px;
        transition: bottom 0.1s 0.25s ease-in,
            transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    ${({isActive}) =>
        isActive &&
        css`
            transform: rotate(225deg);
            transition-delay: 0.12s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

            &::before {
                top: 0;
                opacity: 0;
                transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
            }

            &::after {
                bottom: 0;
                transform: rotate(-90deg);
                transition: bottom 0.1s ease-out,
                    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
            }
        `}
`

const MenuButton = styled.button`
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    &:hover {
        opacity: 0.7;
    }

    ${({isActive}) =>
        isActive &&
        css`
            &:hover {
                opacity: 0.7;
            }
        `}
`

export default ({handleClick, isActive}) => (
    <MenuButton onClick={() => handleClick(!isActive)} isActive={isActive}>
        <MenuBox isActive={isActive}>
            <MenuBoxInner isActive={isActive} />
        </MenuBox>
    </MenuButton>
)
