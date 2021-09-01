module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "T1m Wang",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-sourcssssse-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        names:'pages',
        path:'${_dirname}/src/pages/',
      },
    },
      'gatsby-plugin-mdx',
  ],
};
