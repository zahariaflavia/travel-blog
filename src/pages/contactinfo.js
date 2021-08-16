import * as React from "react";
import EmailIcon from "@material-ui/icons/Email";
import ContactsIcon from "@material-ui/icons/Contacts";
import FacebookIcon from "@material-ui/icons/Facebook";
import { info, icons, infoSection } from "./layout.module.css";
const ContactInfo = ({ data }) => {
  return (
    <div>
      <h3 className={infoSection}>{data.title}</h3>
      <div className={info}>
        <div className={icons}>
          <EmailIcon />
          {data.email}
        </div>
        <div className={icons}>
          <ContactsIcon />
          {data.phone_number}
        </div>
        <div className={icons}>
          <FacebookIcon />
          {data.social_media}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
