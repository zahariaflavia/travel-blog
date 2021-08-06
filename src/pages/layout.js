import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navListItem,
  navLinkText,
  layout,
} from "./layout.module.css";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
const Layout = ({ children }) => {
  return (
    <div>
      <nav className={layout}>
        <ul className={container}>
          <li className={heading}>
            The Wanderer <DirectionsWalkIcon />
          </li>
          <li className={navListItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navListItem}>
            <Link className={navLinkText} to="/destinations">
              Destinations
            </Link>
          </li>
          <li className={navListItem}>
            <Link className={navLinkText} to="/work">
              Work
            </Link>
          </li>
          <li className={navListItem}>
            <Link className={navLinkText} to="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      {children}
      <footer>You reached the end of the page</footer>
    </div>
  );
};
export default Layout;
