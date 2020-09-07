module.exports = {
  siteMetadata: {
    title: `Lyžiarsky club victory`,
    description: `ski club vicotry`,
    author: `@bystran`,
  },
  plugins: [
    "gatsby-plugin-react-svg",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://104.248.27.11`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`clen`, `uspech`],
        //If using single types place them in this array.
        singleTypes: [`domov-prva-stranka`, `domov-stan-sa-viktorakom`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
