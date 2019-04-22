const path = require("path");

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "FORXTU Blog",
    description: "Блог о фронт-енд разработке и программировании - FORXTU",
    siteUrl: "https://forxtu.space",
    author: "Dennis FORXTU Merkulov"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-webpack-bundle-analyzer",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        api: path.join(__dirname, "src/api"),
        components: path.join(__dirname, "src/components"),
        pages: path.join(__dirname, "src/pages"),
        styles: path.join(__dirname, "src/styles"),
        templates: path.join(__dirname, "src/templates")
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              showLineNumbers: true
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/layouts/Layout/Layout.js")
      }
    },
    {
      resolve: "gatsby-plugin-sitemap"
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://fe988b5e96fc4634babe220e23464e15@sentry.io/1274827"
      }
    },
    {
      resolve: "gatsby-plugin-nprogress"
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "FORXTU Blog",
        short_name: "FORXTU",
        start_url: "/",
        background_color: "#ededed",
        theme_color: "#384f7c",
        display: "standalone",
        icons: [
          {
            src: "/favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-offline", // put this after gatsby-plugin-manifest
    "gatsby-plugin-netlify" // make sure to put last in the array
  ]
};
