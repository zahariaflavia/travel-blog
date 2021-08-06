import * as React from "react";
import {
  contact,
  section,
  title,
  contactDetails,
  link,
} from "./layout.module.css";
import { Link } from "gatsby";
const Contact = ({ header, linkText, children }) => {
  return (
    <div className={contact}>
      <div className={title}>
        <h2 className={title}>{header}</h2>
      </div>
      <div className={contactDetails}>
        <div className={section}>
          <h3>{children}</h3>
        </div>
        <div className={section}>
          <Link className={link} to="/about">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
