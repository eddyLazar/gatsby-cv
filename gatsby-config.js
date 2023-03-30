// width="720" height="405" viewBox="0 0 720 405"

module.exports = {
  siteMetadata: {
    title: `Eduard Lazar CV | Software Engineer`,
    description: `A seasoned developer with 10 years of full stack experience. I've been working in different areas and with different technologies. I'm passionate about my work if it's interesting. I like architecting new things. I'm always keen on learning and exploring something new also ready to help others if needed. Excited about exchanging and discussing new ideas with others.`,
    author: `eddy.lazar@gmail.com`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Steinbeck'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `confs`,
        path: `${__dirname}/src/data/confs.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `education`,
        path: `${__dirname}/src/data/education.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bio`,
        path: `${__dirname}/src/data/bio/bio.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience`,
        path: `${__dirname}/src/data/experience`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-remark-source-name`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eduard Lazar CV`,
        short_name: `Eddy CV`,
        start_url: `/`,
        background_color: '#D3D1CA',
        theme_color: '#D3D1CA',
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-pdf',
      options: {
        paths: ['/'],
        // allPages: true,
        // styleTagOptions: {},
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
