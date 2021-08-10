import * as React from "react";
import { Link } from "gatsby";
import { listItem, posts } from "./layout.module.css";

const Article = ({ header, data }) => {
  return (
    <div className={posts}>
      <h1>{header}</h1>
      <ul>
        {data &&
          data.allContentstackBlogEntry.nodes.map((destination) => {
            return (
              <li key={destination.id}>
                <Link
                  className={listItem}
                  to={`/${destination.category}${destination.url}`}
                >
                  {destination.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Article;
