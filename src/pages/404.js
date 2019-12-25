import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({path}) => (
    <Layout pathname={path}>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>
            We haven't read that book yet. It's probably good, we just haven't
            read it.
        </p>
    </Layout>
)

export default NotFoundPage
