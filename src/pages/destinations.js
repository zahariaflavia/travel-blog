import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import Contact from "./contact";
import Article from "./{mdx.frontmatter__category}/article";
import { Helmet } from "react-helmet";
const Destinations = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Destinations</title>
      </Helmet>
      <Layout>
        <div>
          <main >
            <Article header="Check out our latest trips" data={data}></Article>
            <div>
              <Contact
                header="Interested in sharing your personal experience?"
                linkText="Find out More"
              >
                These are the latest trips that you definitely want to book
              </Contact>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};
export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: "destinations" } } }
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
export default Destinations;
