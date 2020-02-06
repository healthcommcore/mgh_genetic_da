import React from "react"
import { Link, graphql } from "gatsby"
import { setHTML, getNodeId } from "../helpers/helpers";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProgressMenuItems from "../components/progress_menu_items";
import Welcome from "./welcome";

const IndexPage = ({ data }) => {
  const items = data.allMenuLinkContentMenuLinkContent.edges;
  return (
    <Layout>
      <SEO title="Welcome" />
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query {
    allMenuLinkContentMenuLinkContent {
      edges {
        node {
          title
          link {
            uri
          }
        }
      }
    }
  }
`

