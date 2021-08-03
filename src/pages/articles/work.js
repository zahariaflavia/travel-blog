import * as React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
import Article from './article'
import Contact from '../contact'
const Work = ({ data }) => {
  return (
    <Layout pageTitle="Work">
      <main >
      <Article header="Check out our latest projects" data={data} category="Work"></Article>
      <Contact header="Do you want to join forces and help our communities?" linkText="Find out More">ilfjrijthngnjemefskdawlmefjlnkrgh</Contact>
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
export default Work;
