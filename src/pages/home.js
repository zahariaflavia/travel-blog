import * as React from "react";
import { home, work } from "./layout.module.css";

import Contact from "./contact";
import Section from "./section";
const Home = ({ data }) => {
  const sections = data.allContentstackPage.nodes[0].modular_blocks;
  return (
    <main>
      {sections
        .filter((node) => node.Section !== null)
        .map((node, index) => {
          const sectionClassName =
            sections.indexOf(node) % 2 === 0 ? home : work;
          return (
            <Section
              node={node}
              sectionClassName={sectionClassName}
              key={index}
            />
          );
        })}

      <Contact
        header={sections[sections.length - 1].Contact.header}
        linkText={sections[sections.length - 1].Contact.button_text}
        content={sections[sections.length - 1].Contact.contact_promo}
        url={sections[sections.length - 1].Contact.link}
      />
    </main>
  );
};

export default Home;
