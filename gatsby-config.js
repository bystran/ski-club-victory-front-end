require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Victory Lyžiarsky klub`,
    description: `Lyžiarsky klub Victory je jedným z bratislavských lyžiarskych oddielov. Venuje sa športovej a lyžiarskej príprave detí a mládeže`,
    author: `Adam Bystran`,
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
        name: `Sky Club Victory`,
        short_name: `Victory`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#253D80`,
        display: `minimal-ui`,
        icon: `src/assets/images/victory_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_BACKEND_SERVER,
        queryLimit: 10000, // Default to 100
        contentTypes: [`clen`, `uspech`],
        //If using single types place them in this array.
        singleTypes: [`domov-prva-stranka`, `domov-stan-sa-viktorakom`, `domov-3-videa`, `kontakt`, `clenovia-stranka`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
