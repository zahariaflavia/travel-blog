import * as React from "react";
import { contact, section1, section2, title } from "./layout.module.css";
import { Link } from "gatsby";
const Contact = ({ header, linkText, children }) => {
  return (
    <div className={contact}>
      <h1 className={title}>{header}</h1>
      <div className={section1}>
        <h2>{children}</h2>
      </div>
      <div className={section2}>
        <Link to="/about">Find out More</Link>
      </div>
    </div>
  );
};
export default Contact;
