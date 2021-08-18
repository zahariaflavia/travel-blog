import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  container,
  heading,
  navListItem,
  navLinkText,
  layout,
} from "./layout.module.css";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
const Navbar = () => {
  const data = useStaticQuery(graphql`
    query Nav {
      allContentstackNavbarelements {
        nodes {
          navelements {
            title
            url
          }
          title
        }
      }
    }
  `);

  return (
    <nav className={layout}>
      <ul className={container}>
        <li className={heading}>
          {data.allContentstackNavbarelements.nodes[0].title}
          <DirectionsWalkIcon style={{ height: "25px" }} />
        </li>
        {data.allContentstackNavbarelements.nodes[0].navelements.map(
          (node, index) => {
            return (
              <li className={navListItem} key={index}>
                <Link className={navLinkText} to={node.url}>
                  {node.title}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
