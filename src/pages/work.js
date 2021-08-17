import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import Article from "./article";
import Contact from "./contact";
import { Helmet } from "react-helmet";
const Work = ({ data }) => {
  const contactSection = data&&data.allContentstackPage.nodes[0].modular_blocks[1];
  const title =
    data&&data.allContentstackPage.nodes[0].modular_blocks[0].Section.section_text;
  const blogEntries = data&&data.allContentstackBlogEntry.nodes;

  return (
    <Layout>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <div>
        <Article header={title} data={blogEntries}></Article>
      </div>
      <div>
        <Contact
          header={contactSection.Contact.header}
          linkText={contactSection.Contact.button_text}
          content={contactSection.Contact.contact_promo}
          url={contactSection.Contact.link}
        />
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "Work" } }) {
      nodes {
        modular_blocks {
          Section {
            section_text
          }
          Contact {
            button_text
            link
            header
            contact_promo
            
          }
        }
      }
    }
    allContentstackBlogEntry(
      sort: { fields: date, order: DESC }
      filter: { category: { eq: "work" } }
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

export default Work;
