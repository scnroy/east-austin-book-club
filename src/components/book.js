/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import styled from '@emotion/styled'
import {useState, useRef, useEffect} from 'react'
import {Button} from '../components/button'
import {colors, bp} from '../styles/vars'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

const detailsWithButtonExpanded = css`
    &::after {
        max-height: 0;
    }
    transition: max-height 0.5s ease-in-out;
    max-height: 100rem;
`

const Details = styled('div')`
    position: relative;
    & > div {
        position: relative;
        ${props => (props.expanded ? detailsWithButtonExpanded : '')}
    }
`

const Description = ({description}) => {
    const descriptionRef = useRef(null)

    const [expanded, updateExpanded] = useState(false)
    const [withButton, updateWithButton] = useState(false)

    const defaultHeight = 400

    const detailsWithButton = css`
        max-height: ${defaultHeight}px;
        overflow: hidden;
        transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 100px;
            max-height: 100px;
            background: linear-gradient(
                0deg,
                ${colors.light} 0,
                rgba(255, 255, 255, 0) 100%
            );
            transition: max-height 0.2s linear;
        }
    `

    useEffect(() => {
        if (descriptionRef.current.clientHeight > defaultHeight) {
            updateWithButton(true)
        }
    }, [])

    return (
        <Details expanded={expanded}>
            <div
                css={withButton && detailsWithButton}
                ref={descriptionRef}
                dangerouslySetInnerHTML={{__html: description}}
            />
            {withButton && (
                <button
                    css={css`
                        display: block;
                        text-align: left;
                        width: 100%;
                        background: none;
                        border: none;
                        padding: 0;
                        margin: 0;
                        cursor: pointer;
                        color: ${colors.dark};

                        &:focus,
                        &:active {
                            outline: none;
                        }
                    `}
                    onClick={() => {
                        updateExpanded(!expanded)
                    }}
                >
                    {expanded ? '↑↑↑' : '↓↓↓'}
                </button>
            )}
        </Details>
    )
}

const Book = ({date, title, author, description, cover, slug, link}) => {
    const formattedDescription = description
        .split('\n')
        .map(paragraph => `<p>${paragraph}</p>`)
        .join('')
    return (
        <section
            css={css`
                display: flex;
                flex-direction: column;
                margin: 4rem 0 10rem;

                @media (min-width: ${bp.lg}) {
                    flex-direction: row;
                }
            `}
        >
            <h2
                css={css`
                    line-height: 1.4;
                    flex-basis: 30%;
                    font-size: 2em;

                    @media (min-width: ${bp.sm}) {
                        font-size: 3rem;
                    }
                `}
            >
                {date}
            </h2>
            <div
                css={css`
                    background-color: ${colors.light};
                    color: ${colors.dark};
                    padding: 2rem;
                    border-radius: 2px;
                    display: flex;
                    flex-direction: column;

                    @media (min-width: 1200px) {
                        padding: 4rem;
                        flex-basis: 70%;
                        flex-direction: row;
                    }
                `}
            >
                <div
                    css={css`
                        margin-bottom: 2rem;
                        display: flex;
                        flex-direction: column;
                        @media (min-width: 1200px) {
                            margin-bottom: 0;
                            flex-basis: 80%;
                        }
                    `}
                >
                    <Img fluid={cover.childImageSharp.fluid} />
                    <div
                        css={css`
                            margin-top: 1rem;
                        `}
                    >
                        <Button label="View on Meetup" href={link} />
                    </div>
                </div>
                <div
                    css={css`
                        flex-shrink: 2;
                        @media (min-width: 1200px) {
                            margin-left: 2rem;
                        }
                    `}
                >
                    <Link to={slug}>
                        <h3>{title}</h3>
                    </Link>
                    <p>
                        <em>{author}</em>
                    </p>
                    <Description description={formattedDescription} />
                </div>
            </div>
        </section>
    )
}

export default Book
