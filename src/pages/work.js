import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
const Work = ({data}) => {
  return <Layout pageTitle="Work">
   <ul>
        {data.allMdx.nodes.filter((work)=>work.frontmatter.category==="Work").map((work) => {
          return (
            <li key={work.id}>
              {work.frontmatter.date}
              {work.frontmatter.title}
              <MDXRenderer>{work.body}</MDXRenderer>
            </li>
          );
        })}
      </ul>
  </Layout>;
};
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          category
         }
        id
        body
      }
    }
  }
`;
export default Work;
