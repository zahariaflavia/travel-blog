import * as React from "react";
import Layout from "./layout";
import Team from "./team";
import ContactInfo from "./contactinfo";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Layout>
        <Team />
        <ContactInfo
          email="thewanderer@gmail.com"
          phone="7834778402"
          fb="The Wanderer"
        />
      </Layout>
    </div>
  );
};

export default About;
