import * as React from "react";
import Layout from "./layout";
import Team from "./team";
import ContactInfo from "./contactinfo";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
const About = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Layout>
        <Team data={data}/>
        <ContactInfo data={data} />
      </Layout>
    </div>
  );
};

export const query = graphql`
  query {
    allContentstackPage(filter: {title: {eq: "About"}}) {
      nodes {
        modular_blocks {
          Team {
            header
            image {
              url
              uid
            }
            job
            name
          }
        }
      }
    }
    allContentstackContactsection {
      nodes {
        title
        social_media
        phone_number
        email
      }
    }
  }
`;
export default About;
