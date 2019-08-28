/** @jsx jsx */
import {jsx} from 'theme-ui'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1 sx={{variant: 'title'}}>Reading together</h1>
        <p>Join us on the third Monday of every month</p>
    </Layout>
)

export default IndexPage
