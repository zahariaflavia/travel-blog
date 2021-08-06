import * as React from "react";
import { home, link, work, homeItem, imageHome } from "./layout.module.css";
import { Link } from "gatsby";
import Contact from "./contact";
import { StaticImage } from "gatsby-plugin-image";
const Home = () => {
  return (
    <main>
      <div className={home}>
        <div className={homeItem}>
          <h1>
            No idea where to go next?
            <br />
            Let us wander together around the world
          </h1>
          <Link className={link} to="/destinations">
            See our Destinations
          </Link>
        </div>
        <div className={homeItem}>
          <StaticImage
            className={imageHome}
            src="../images/travel.jpeg"
            alt="poza"
            placeholder="blurred"
          />
        </div>
      </div>
      <div className={work}>
        <div className={homeItem}>
          <StaticImage
            className={imageHome}
            src="../images/community.jpeg"
            alt="poza2"
          />
        </div>
        <div className={homeItem}>
          <h2>
            We help local communities promote their business. Learn more about
            the process.
          </h2>
          <Link className={link} to="/work">
            Check our Work
          </Link>
        </div>
      </div>

      <Contact
        header="Interested in joining our team?"
        linkText="Meet the Members"
      >
        {" "}
        Meet our members and see if our community is what you are looking for.
      </Contact>
    </main>
  );
};

export default Home;
