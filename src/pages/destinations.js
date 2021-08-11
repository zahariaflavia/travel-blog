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
                header={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.header}
                linkText={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.button_text}
                content={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.contact_promo}
                url={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.url.href}
              />
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};
export const query = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "Destination" } }) {
      nodes {
        modular_blocks {
          Contact {
            button_text
            header
            contact_promo
            url {
              href
            }
          }
        }
      }
    }
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
