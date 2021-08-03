import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
const Destinations = ({ data }) => {
  return (
    <Layout pageTitle="Destinations">
      <ul>
        {data.allMdx.nodes.filter((destination)=>destination.frontmatter.category==="Destination").map((destination) => {
          return (
            <li key={destination.id}>
              {destination.frontmatter.date}
              {destination.frontmatter.title}
              <MDXRenderer>{destination.body}</MDXRenderer>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
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
export default Destinations;
