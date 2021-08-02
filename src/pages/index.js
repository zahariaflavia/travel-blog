import * as React from "react";
import Layout from './layout'
import Home from './home'
const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Travel with us"><Home/></Layout>
    </div>
  );
};

export default IndexPage;
