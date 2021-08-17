import * as React from "react";
import Layout from "./layout";
import Team from "./team";
import ContactInfo from "./contactinfo";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
const About = ({ data }) => {
  const teamDetails = data&&data.allContentstackPage.nodes[0].modular_blocks;
  const contactInfo = data&&data.allContentstackContactsection.nodes[0];
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Layout>
        <Team data={teamDetails} />
        <ContactInfo data={contactInfo} />
      </Layout>
    </div>
  );
};

export const query = graphql`
  query {
    allContentstackPage(filter: { title: { eq: "About" } }) {
      nodes {
        modular_blocks {
          Team {
            header
            image {
              url
            }
            job
            name
          }
        }
      }
    }
    allContentstackContactsection {
      nodes {
        phone_number
        social_media
        email
        title
      }
    }
  }
`;
export default About;
