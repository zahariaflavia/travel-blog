import * as React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { article } from "../layout.module.css";

const Articles = ({ data }) => {
  return (
    <Layout>
      <div className={article}>
        <div>
          <h1>{data.mdx.frontmatter.title}</h1>
          <h3>
            {data.mdx.frontmatter.date}|{data.mdx.frontmatter.author}
          </h3>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
      body
    }
  }
`;
export default Articles;
