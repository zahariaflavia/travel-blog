import * as React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
const Articles = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <h1>{data.mdx.frontmatter.title}</h1>
      <h3>{data.mdx.frontmatter.date}|author</h3>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;
export default Articles;
