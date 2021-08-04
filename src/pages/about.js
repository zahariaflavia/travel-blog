import * as React from "react";
import Layout from "./layout";
import Team from "./team";
import ContactInfo from "./contactinfo";
const About = () => {
  return (
    <Layout pageTitle="About Us">
      <Team />
      <ContactInfo
        email="thewanderer@gmail.com"
        phone="7834778402"
        fb="The Wanderer"
      />
    </Layout>
  );
};

export default About;
