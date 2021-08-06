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
            src="https://miro.medium.com/max/2980/1*8DYexSqTmp0dAVuZjvSHIQ.jpeg"
            alt="poza"
          />
        </div>
      </div>
      <div className={work}>
        <div className={homeItem}>
          <StaticImage
            className={imageHome}
            src="https://pcer.ac.in/wp-content/uploads/2020/01/community-service-navjeevan-centre-murbad-2-565x423.jpg"
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
