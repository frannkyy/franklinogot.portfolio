module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    description: `A professional portfolio built with Gatsby.`,
    author: `@yourhandle`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};