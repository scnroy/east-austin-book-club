import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
    padding: 4rem;
    background-color: black;
    border-radius: 5px;
    color: white;
`

const Button = styled('button')`
    background-color: white;
    color: black;
`

const FormMessage = ({status, handleClick}) => (
    <Wrapper>
        {status === 'success' ? (
            <div>
                <h4>You did it!</h4>
                <p>
                    Keep an eye on your email—we'll be in touch soon! And by
                    soon, we mean around two weeks.
                </p>
            </div>
        ) : (
            <div>
                <h4>Oh noes!</h4>
                <p>Something went wrong. It's probably our fault. Try again?</p>
                <Button onClick={handleClick}>Try again</Button>
            </div>
        )}
    </Wrapper>
)

export default FormMessage
