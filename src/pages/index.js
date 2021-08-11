import * as React from "react";
import Layout from "./layout";
import Home from "./home";
import { Helmet } from "react-helmet";
import {graphql} from 'gatsby'
const IndexPage = ({data}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta description="Travel blog"/>
        <title>The Wanderer</title>
      </Helmet>
      <Layout>
        <Home  data={data}/>
      </Layout>
    </div>
  );
};
export const query=graphql`
query{
  allContentstackPage {
    nodes {
      modular_blocks {
        Contact {
          button_text
          contact_promo
          header
          url {
            href
          }
        }
        Destination {
          button_text
          destination_promo
          image_promo {
            url
          }
          url {
            href
          }
        }
        Work {
          button_text
          image_promo {
            url
          }
          url {
            href
          }
          work_promo
        }
      }
    }
  }
}
`

export default IndexPage;
