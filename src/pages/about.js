import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/form'

export default function AboutPage({path}) {
    return (
        <Layout pathname={path}>
            <SEO title="About &amp; Contact" />
            <h2>Get in touch?</h2>
            <ContactForm />
        </Layout>
    )
}
