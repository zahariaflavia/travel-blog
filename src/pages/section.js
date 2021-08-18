import * as React from "react";
import { home, link, homeItem, imageHome } from "./layout.module.css";
import { Link } from "gatsby";
const Section = ({ node, sectionClassName }) => {
  return (
    <div className={sectionClassName}>
      {sectionClassName === home ? (
        <>
          <div className={homeItem}>
            <h1>
              <br />
              {node&&node.Section.section_text}
            </h1>
            <Link className={link} to={node&&node.Section.link}>
              {node&&node.Section.button_text}
            </Link>
          </div>
          <div className={homeItem}>
            <img
              className={imageHome}
              src={node &&node.Section.section_image.url}
              alt="poza"
              placeholder="blurred"
            />
          </div>
        </>
      ) : (
        <>
          <div className={homeItem}>
            <img
              className={imageHome}
              src={node&&node.Section.section_image.url}
              alt="poza2"
            />
          </div>
          <div className={homeItem}>
            <h2>{node&&node.Section.section_text}</h2>
            <Link className={link} to={node &&node.Section.link}>
              {node&&node.Section.button_text}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Section;
