import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      allContentstackFooter {
        nodes {
          title
        }
      }
    }
  `);
  return <footer>{data&&data.allContentstackFooter.nodes[0].title}</footer>;
};

export default Footer;
