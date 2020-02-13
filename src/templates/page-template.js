import React from "react";
import { graphql } from "gatsby";
import { setHTML } from "../helpers/helpers";
import Header from "../components/header";

const PageTemplate = ({ data }) => {
  const node = data.nodeDecisionAidPage;
  return (
    <div className="page">
      <Header />
      <h1>{ node.title }</h1>
      <div className="body">
        { setHTML(node.body.processed) }
      </div>
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    nodeDecisionAidPage(id: {eq: $id} ) {
      title
      body {
        processed
      }
    }
  }
`

export default PageTemplate;
