import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import Contact from "./contact";
import Article from "./article";
import { Helmet } from "react-helmet";
const Destinations = ({ data }) => {
  const blogEntries = data&&data.allContentstackBlogEntry.nodes;
  const contactSection = data&&data.allContentstackPage.nodes[0].modular_blocks[1];
  const title =
    data&& data.allContentstackPage.nodes[0].modular_blocks[0].Section.section_text;
  return (
    <div>
      <Helmet>
        <title>Destinations</title>
      </Helmet>
      <Layout>
        <div>
          <main>
            <Article header={title} data={blogEntries}></Article>
            <div>
              <Contact
                header={contactSection.Contact.header}
                linkText={contactSection.Contact.button_text}
                content={contactSection.Contact.contact_promo}
                url={contactSection.Contact.link}
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
          Section {
            section_text
          }
          Contact {
            button_text
            link
            contact_promo
            header
            
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
      
      }
    }
  }
`;
export default Destinations;
