import * as React from "react";
import Layout from "../pages/layout";
import { graphql } from "gatsby";
import {
  article,
  articleContainer,
  articleChildren,
  imageHome,
} from "../pages/layout.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
            <ReactMarkdown
              children={data.contentstackBlogEntry.content}
              remarkPlugins={[remarkGfm]}
            />
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
