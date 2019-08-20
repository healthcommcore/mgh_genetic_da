import React from "react"
import { Link, graphql } from "gatsby"
import { setHTML } from "../helpers/helpers";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const pageElements = data.allNodeLandingPage.nodes[0];
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{ pageElements.title }</h1>
      <p>Welcome to your new Gatsby site.</p>
      <h2>Key facts</h2>
      { setHTML(pageElements.field_key_facts.processed) }
      <h2>Introduction</h2>
      { setHTML(pageElements.body.processed) }
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query {
    allNodeLandingPage(filter: {
      relationships: {
        field_da_section: {
          name: {
            eq: "Introduction"
          }
        }
      }
    }) {
      nodes {
        title
        field_key_facts {
          processed
          value
        }
        body {
          processed
        }
      }
    }
  }
`

