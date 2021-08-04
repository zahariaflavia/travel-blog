import * as React from "react";
import { Link } from "gatsby";
import { listItem, posts } from "../layout.module.css";

const Article = ({ header, data }) => {
  return (
    <div className={posts}>
      <h1>{header}</h1>
      <ul>
        {data &&
          data.allMdx.nodes.map((destination) => {
            return (
              <li key={destination.id}>
                <Link
                  className={listItem}
                  to={`/${destination.frontmatter.category}/${destination.slug}`}
                >
                  {destination.frontmatter.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Article;
