import * as React from "react";
import Layout from "./layout";
import Home from "./home";
import { Helmet } from "react-helmet";
const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="Travel blog"/>
        <title>The Wanderer</title>
      </Helmet>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export default IndexPage;
