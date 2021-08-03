import * as React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
import Contact from '../contact'
import Article from "./article";
const Destinations = ({ data }) => {
  return (
    <Layout pageTitle="Destinations">
      <main >
        <Article header="Check out our latest trips" data={data} category="Destination"></Article>
       <Contact header="Interested in sharing your personal experience?" linkText="Find out More">ilfjrijthngnjemefskdawlmefjlnkrgh</Contact>
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
          author
        }
        id
        slug
      }
    }
  }
`;
export default Destinations;
