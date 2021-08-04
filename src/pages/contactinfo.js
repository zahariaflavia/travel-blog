import * as React from "react";
import EmailIcon from "@material-ui/icons/Email";
import ContactsIcon from "@material-ui/icons/Contacts";
import FacebookIcon from "@material-ui/icons/Facebook";
import { info, icons, infoSection } from "./layout.module.css";
const ContactInfo = ({ email, phone, fb }) => {
  return (
    <div>
      <h1 className={infoSection}>You know where to find us</h1>
      <div className={info}>
        <div className={icons}>
          <EmailIcon />
          {email}
        </div>
        <div className={icons}>
          <ContactsIcon />
          {phone}
        </div>
        <div className={icons}>
          <FacebookIcon />
          {fb}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
