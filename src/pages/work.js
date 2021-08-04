import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import Article from "./{mdx.frontmatter__category}/article";
import Contact from "./contact";
import { Helmet } from "react-helmet";
const Work = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <main>
        <Article header="Check out our latest projects" data={data}></Article>
        <Contact
          header="Do you want to join forces and help our communities?"
          linkText="Find out More"
        >
          We publishes some of our advice for promoting local tourism in
          different parts of the globe
        </Contact>
      </main>
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: "work" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          category
          author
        }
        id
        slug
      }
    }
  }
`;
export default Work;
