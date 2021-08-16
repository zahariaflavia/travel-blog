import * as React from "react";
import { home, link, work, homeItem, imageHome } from "./layout.module.css";
import { Link } from "gatsby";
import Contact from "./contact";
const Home = ({ data }) => {
  return (
    <main>
      <div className={home}>
        <div className={homeItem}>
          <h1>
            <br />
            {
              data.allContentstackPage.nodes[0].modular_blocks[0].Section
                .section_text
            }
          </h1>
          <Link
            className={link}
            to={
              data.allContentstackPage.nodes[0].modular_blocks[0].Section.url
                .href
            }
          >
            {
              data.allContentstackPage.nodes[0].modular_blocks[0].Section
                .button_text
            }
          </Link>
        </div>
        <div className={homeItem}>
          <img
            className={imageHome}
            src={
              data.allContentstackPage.nodes[0].modular_blocks[0].Section
                .section_image.url
            }
            alt="poza"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className={work}>
        <div className={homeItem}>
          <img
            className={imageHome}
            src={
              data.allContentstackPage.nodes[0].modular_blocks[1].Section
                .section_image.url
            }
            alt="poza2"
          />
        </div>
        <div className={homeItem}>
          <h2>
            {
              data.allContentstackPage.nodes[0].modular_blocks[1].Section
                .section_text
            }
          </h2>
          <Link
            className={link}
            to={
              data.allContentstackPage.nodes[0].modular_blocks[1].Section.url
                .href
            }
          >
            {
              data.allContentstackPage.nodes[0].modular_blocks[1].Section
                .button_text
            }
          </Link>
        </div>
      </div>

      <Contact
        header={
          data.allContentstackPage.nodes[0].modular_blocks[2].Contact.header
        }
        linkText={
          data.allContentstackPage.nodes[0].modular_blocks[2].Contact
            .button_text
        }
        content={
          data.allContentstackPage.nodes[0].modular_blocks[2].Contact
            .contact_promo
        }
        url={
          data.allContentstackPage.nodes[0].modular_blocks[2].Contact.url.href
        }
      />
    </main>
  );
};

export default Home;
