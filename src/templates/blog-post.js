import * as React from "react";
import Layout from "../pages/layout";
import { graphql } from "gatsby";
import {
  article,
  articleContainer,
  articleChildren,
  imageHome
} from "../pages/layout.module.css";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle="Articles">
      <div className={article}>
        <h1>{data.contentstackBlogEntry.title}</h1>
        <h3>
          {data.contentstackBlogEntry.date}|{data.contentstackBlogEntry.author}
        </h3>

        <div className={articleContainer}>
          <div className={articleChildren}>
            <p>{data.contentstackBlogEntry.content}</p>
          </div>
          <div className={articleChildren}>
            <img
            className={imageHome}
              src={data.contentstackBlogEntry.image.url}
              alt="img"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogPost;
export const postQuery = graphql`
  query MyQuery($title: String) {
    contentstackBlogEntry(title: { eq: $title }) {
      url
      title
      date(formatString: "MMMM D, YYYY")
      content
      author
      image {
        id
        url
      }
    }
  }
`;
