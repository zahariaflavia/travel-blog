import * as React from "react";
import Layout from "./layout";
import Home from "./home";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
const IndexPage = ({ data }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="Travel blog" />
        <title>The Wanderer</title>
      </Helmet>
      <Layout>
        <Home data={data}/>
      </Layout>
    </div>
  );
};
export const query = graphql`
query{
  allContentstackPage(filter: {title: {eq: "HomePage"}}) {
    nodes {
      modular_blocks {
        Section {
          button_text
          link
          section_image {
            url
          }
          section_text
          url {
            href
          }
        }
        Contact {
          button_text
          link
          contact_promo
          header
          url {
            href
          }
        }
      }
    }
  }
}
`;

export default IndexPage;
