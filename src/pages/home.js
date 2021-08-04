import * as React from "react";
import { home, link, work, about } from "./layout.module.css";
import { Link } from "gatsby";
import Contact from "./contact";
const Home = () => {
  return (
    <main>
      <div className={home}>
        <div>
          <p>
            No idea where to go next?
            <br />
            Let us wander together around the world
          </p>
          <Link className={link} to="articles/destinations">
            See our Destinations
          </Link>
        </div>
        <img
          src="https://miro.medium.com/max/2980/1*8DYexSqTmp0dAVuZjvSHIQ.jpeg"
          alt="poza"
        />
      </div>
      <div className={work}>
        <img
          src="https://pcer.ac.in/wp-content/uploads/2020/01/community-service-navjeevan-centre-murbad-2-565x423.jpg"
          alt="poza2"
        />
        <div>
          <p>
            We help local communities promote their family business...see
            how you can help them too. Learn more about all the process that
            lays behind a successful, eco-friendly accomodation.
          </p>
          <Link className={link} to="articles/work">
            Check our Work
          </Link>
        </div>
      </div>
      <div className={about}>
        <Contact
          header="Interested in joining our team?"
          linkText="Meet the Members"
        >
          {" "}
          Meet our members and see if our community is what you are looking for.
          Schedule an interview with our HR, find all the contact details
          riiight here.
        </Contact>
      </div>
    </main>
  );
};

export default Home;
