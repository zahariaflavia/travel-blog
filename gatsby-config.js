require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const {
  CONTENTSTACK_API_KEY,
  CONTENTSTACK_DELIVERY_TOKEN,
  CONTENTSTACK_ENVIRONMENT,
} = process.env
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Travel Blog",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "destination",
        path: `${__dirname}/destinations/`,
      },
      __key: "destinations",
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-source-contentstack",
      options: {
        api_key: CONTENTSTACK_API_KEY,
        delivery_token: CONTENTSTACK_DELIVERY_TOKEN,
        environment: CONTENTSTACK_ENVIRONMENT,
      },
    },
  ],
};
