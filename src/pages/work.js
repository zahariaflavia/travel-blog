import * as React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";
import Article from "./article";
import Contact from "./contact";
import { Helmet } from "react-helmet";
const Work = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <div>
        <Article header="Check out our latest projects" data={data}></Article>
      </div>
      <div>
        <Contact
          header={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.contact_header}
          linkText={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.button_text}
          content={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.contact_promo}
          url={data.allContentstackPage.nodes[0].modular_blocks[0].Contact.url.href}
        />
      </div>
    </Layout>
  );
};
export const query = graphql`
  query {
    allContentstackPage(filter: {title: {eq: "Work"}}) {
      nodes {
        modular_blocks {
          Contact {
            button_text
            contact_header
            contact_promo
            url {
              href
            }
          }
        }
      }
    }
    allContentstackBlogEntry(
      sort: {fields: date, order: DESC}
      filter: {category: {eq: "work"}}
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

export default Work;
