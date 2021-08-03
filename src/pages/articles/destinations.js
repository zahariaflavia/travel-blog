import * as React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { posts, listItem } from "../layout.module.css";
import { Link } from "gatsby";
const Destinations = ({ data }) => {
  return (
    <Layout pageTitle="Destinations">
      <main className={posts}>
        <h1>Check out our latest trips</h1>
        <ul>
          {data.allMdx.nodes
            .filter(
              (destination) =>
                destination.frontmatter.category === "Destination"
            )
            .map((destination) => {
              return (
                <li key={destination.id}>
                  <Link
                    className={listItem}
                    to={`/articles/${destination.slug}`}
                  >
                    {destination.frontmatter.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </main>
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
        slug
      }
    }
  }
`;
export default Destinations;
