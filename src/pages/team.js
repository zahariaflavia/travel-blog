import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { picture, image, about, gallery } from "./layout.module.css";
const Team = () => {
  return (
    <div className={about}>
      <h1>Meet our team.</h1>
      <div className={gallery}>
        <div className={picture}>
          <StaticImage
            className={image}
            src="../images/person-icon.png"
            alt="picture1"
          />
          <h5>James Parker | Author2</h5>
        </div>

        <div className={picture}>
          <StaticImage
            className={image}
            src="../images/person-icon.png"
            alt="picture2"
          />
          <h5>Jane Doe | Author1</h5>
        </div>

        <div className={picture}>
          <StaticImage
            className={image}
            src="../images/person-icon.png"
            alt="picture3"
          />
          <h5>John Doe | Volunteer</h5>
        </div>
      </div>
    </div>
  );
};
export default Team;
