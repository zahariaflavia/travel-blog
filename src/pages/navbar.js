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
      allContentstackNavelements {
        nodes {
          nav_item {
            Nav_Link {
              title
              url {
                href
              }
            }
          }
          title
          id
        }
      }
    }
  `);

  return (
    <nav className={layout}>
      <ul className={container}>
        <li className={heading}>
          {data.allContentstackNavelements.nodes[0].title}
          <DirectionsWalkIcon style={{ height: "25px" }} />
        </li>
        {data.allContentstackNavelements.nodes[0].nav_item.map(
          (node, index) => {
            return (
              <li className={navListItem} key={index}>
                <Link className={navLinkText} to={node.Nav_Link.url.href}>
                  {node.Nav_Link.title}
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
