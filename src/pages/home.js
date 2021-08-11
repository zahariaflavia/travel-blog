import * as React from "react";
import { home, link, work, homeItem, imageHome } from "./layout.module.css";
import { Link } from "gatsby";
import Contact from "./contact";
const Home = ({data}) => {
  console.log(data);
  return (
    <main>
      <div className={home}>
        <div className={homeItem}>
          <h1>
            <br />
            {data.allContentstackPage.nodes[0].modular_blocks[0].Destination.destination_promo}
          </h1>
          <Link className={link} to={data.allContentstackPage.nodes[0].modular_blocks[0].Destination.url.href}>
            {data.allContentstackPage.nodes[0].modular_blocks[0].Destination.button_text}
          </Link>
        </div>
        <div className={homeItem}>
          <img
            className={imageHome}
            src={data.allContentstackPage.nodes[0].modular_blocks[0].Destination.image_promo.url}
            alt="poza"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className={work}>
        <div className={homeItem}>
          <img
            className={imageHome}
            src={data.allContentstackPage.nodes[0].modular_blocks[1].Work.image_promo.url}
            alt="poza2"
          />
        </div>
        <div className={homeItem}>
          <h2>
            {data.allContentstackPage.nodes[0].modular_blocks[1].Work.work_promo}
          </h2>
          <Link className={link} to={data.allContentstackPage.nodes[0].modular_blocks[1].Work.url.href}>
            {data.allContentstackPage.nodes[0].modular_blocks[1].Work.button_text}
          </Link>
        </div>
      </div>

      <Contact
        header={data.allContentstackPage.nodes[0].modular_blocks[2].Contact.contact_header}
        linkText={data.allContentstackPage.nodes[0].modular_blocks[2].Contact.button_text}
        content={data.allContentstackPage.nodes[0].modular_blocks[2].Contact.contact_promo}
        url={data.allContentstackPage.nodes[0].modular_blocks[2].Contact.url.href}
      />
    </main>
  );
};

export default Home;

