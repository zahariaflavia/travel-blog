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
        <Team />
        <ContactInfo data={data} />
      </Layout>
    </div>
  );
};

export const query = graphql`
  query {
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
