import React from "react";
import { graphql } from "gatsby";
import { setHTML } from "../helpers/helpers";
import Header from "../components/header";
import PageTitle from "../components/page-title";
import PageBody from "../components/page-body";

const PageTemplate = ({ data }) => {
  const node = data.nodeDecisionAidPage;
  return (
    <div className="page">
      <Header />
      <PageTitle>
        { node.title }
      </PageTitle>
      <PageBody
        intro={ node.field_intro_text }
        body={ node.body }
        outro={ node.field_outro_text }
        relationships={ node.relationships }
      />
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
      field_outro_text {
        processed
      }
    }
  }
`

export default PageTemplate;
