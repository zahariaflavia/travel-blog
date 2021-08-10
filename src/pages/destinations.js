import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import Contact from "./contact";
import Article from "./article";
import { Helmet } from "react-helmet";
const Destinations = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>Destinations</title>
      </Helmet>
      <Layout>
        <div>
          <main>
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
    allContentstackBlogEntry(
      sort: { fields: date, order: DESC }
      filter: { category: { eq: "destinations" } }
    ) {
      nodes {
        id
        title
        author
        category
        url
        date
        content
        created_at
      }
    }
  }
`;
export default Destinations;
