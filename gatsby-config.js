module.exports = {
    siteMetadata: {
        title: `East Austin Book Club`,
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/static/assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        `gatsby-plugin-theme-ui`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-remark`,
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `gatsby-starter-default`,
        //         short_name: `starter`,
        //         start_url: `/`,
        //         background_color: `#663399`,
        //         theme_color: `#663399`,
        //         display: `minimal-ui`,
        //         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        //     },
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
