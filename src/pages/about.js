/** @jsx jsx */
import {jsx} from '@emotion/core'
// import {Link} from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/form'

const IndexPage = ({pageContext, location: {pathname}}) => (
    <Layout pathname={pathname}>
        <SEO title="About &amp; Contact" />
        <h2>Get in touch?</h2>
        <ContactForm />
    </Layout>
)

export default IndexPage
