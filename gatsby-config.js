const path = require("path");

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://forxtu.space",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "FORXTU Blog",
    description: "Блог о фронт-енд разработке и программировании - FORXTU",
    siteUrl,
    author: "Dennis FORXTU Merkulov"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-webpack-bundle-analyzer",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }]
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
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
        dsn: "https://dbb69766a0934405bcd6a8fbe2d0942b@sentry.io/1448427"
      }
    },
    {
      resolve: "gatsby-plugin-nprogress"
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "FORXTU Blog about programming",
        short_name: "FORXTU",
        start_url: "/",
        background_color: "#000",
        theme_color: "#aeaeae",
        display: "standalone",
        icons: [
          {
            src: "/favicons/android-forxtu-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicons/android-forxtu-512x512.png",
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
