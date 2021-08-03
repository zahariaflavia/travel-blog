import * as React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { posts,listItem } from "../layout.module.css";
const Work = ({ data }) => {
  return (
    <Layout pageTitle="Work">
      <main className={posts}>
        <h1>Check out our latest trips</h1>
        <ul>
          {data.allMdx.nodes
            .filter(
              (work) =>
                work.frontmatter.category === "Work"
            )
            .map((work) => {
              return (
                <li key={work.id}>
                  <Link
                    className={listItem}
                    to={`/articles/${work.slug}`}
                  >
                    {work.frontmatter.title}
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
export default Work;
