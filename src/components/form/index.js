import {useState} from 'react'
import {css} from '@emotion/react'
import {Formik} from 'formik'
import axios from 'axios'
import FormMessages from './messages'
import Form from './form'
import {object, string} from 'yup'

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
}

const ContactForm = () => {
    const [submit, setSubmit] = useState(null)

    const resetForm = () => {
        setSubmit(false)
    }

    const handleSubmit = (data) => {
        const {recaptcha, gotcha, ...rest} = data

        axios({
            method: 'post',
            url: 'https://formcarry.com/s/BrxvdbZt1DE',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: encode({...rest}),
        })
            .then(() => setSubmit('success'))
            .catch((error) => {
                setSubmit('fail')
                throw new Error(error)
            })
    }

    const schema = object().shape({
        name: string().required('required'),
        email: string().email('invalid email address').required('required'),
        message: string().required(),
        recaptcha: string().required('you must perform the robot test'),
    })

    return (
        <div
            css={css`
                padding-right: 2rem;
            `}
        >
            {submit !== null ? (
                <FormMessages status={submit} handleClick={resetForm} />
            ) : (
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                        gotcha: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={schema}
                >
                    {(props) => <Form {...props} />}
                </Formik>
            )}
        </div>
    )
}

export default ContactForm
