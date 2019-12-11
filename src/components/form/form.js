/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import styled from '@emotion/styled'
import {Form, Field} from 'formik'
// import Recaptcha from 'react-google-recaptcha'

const formControl = css`
    margin-bottom: 2.5rem;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0;
    background-image: linear-gradient(black, black);
    background-size: 0 2px;
    background-repeat: no-repeat;
    background-position: center bottom, center calc(100% - 1px);
    transition: background 0.3s ease-out;
    &:focus,
    &:active {
        border: none;
        background-size: 100% 2px;
    }
    &.has-error {
        border-bottom: 1px solid red;
        background-image: linear-gradient(red, red);
        &:focus,
        &:active {
            border: none;
            background-size: 100% 2px;
        }
    }
`

const FormCombinedRow = styled('div')`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .form-group--three {
        width: 30%;
    }
    .form-group--two {
        width: 48%;
    }
`

const FormGroup = styled('div')`
    position: relative;
    margin-bottom: 1rem;
    label {
        &.has-error {
            color: red;
        }
    }

    input,
    textarea {
        &:focus {
            outline: none;
        }
    }

    textarea {
        resize: none;
    }
`

const ErrorMessage = ({touched, errors}) =>
    touched && errors ? (
        <div
            css={css`
                color: red;
                position: absolute;
                bottom: 0;
                right: 0;
            `}
        >
            {errors}
        </div>
    ) : null

const ContactFormInner = ({
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    setFieldValue,
    values,
}) => {
    // const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY

    const getClassNames = (touch, error) => {
        if (touch && error) {
            return 'has-error'
        }
        return ''
    }

    return (
        <Form method="POST" name="contact" acceptCharset="UTF-8">
            <Field type="hidden" name="form-name" />
            <FormCombinedRow>
                <FormGroup className="form-group--two">
                    <label htmlFor="contactName">{'Name'}</label>
                    <Field
                        css={[formControl]}
                        id="contactName"
                        autoFocus
                        type="text"
                        name="name"
                    />
                    <ErrorMessage touched={touched.name} errors={errors.name} />
                </FormGroup>
                <FormGroup className="form-group--two">
                    <label htmlFor="contactEmail">{'Email'}</label>
                    <Field
                        css={[formControl]}
                        id="contactEmail"
                        type="email"
                        name="email"
                    />

                    <ErrorMessage
                        touched={touched.email}
                        errors={errors.email}
                    />
                </FormGroup>
            </FormCombinedRow>
            <FormGroup>
                <label htmlFor="message">{'Message'}</label>
                <textarea
                    css={[
                        formControl,
                        getClassNames(touched.message, errors.message),
                    ]}
                    placeholder="Dear book club..."
                    id="message"
                    type="textarea"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                />
            </FormGroup>
            <div css={{display: 'none'}}>
                <label htmlFor="gotcha">
                    {"leave blank if you're a human"}
                </label>
                <Field name="gotcha" type="text" />
            </div>
            {/* {touched.email && touched.name ? (
                <div css={{marginBottom: '2rem'}}>
                    <Recaptcha
                        sitekey={RECAPTCHA_KEY}
                        onChange={response => {
                            setFieldValue('recaptcha', response)
                        }}
                        theme="dark"
                    />
                </div>
            ) : (
                ''
            )} */}
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </Form>
    )
}

export default ContactFormInner
