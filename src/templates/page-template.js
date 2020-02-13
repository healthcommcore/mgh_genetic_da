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
      { getTextContent(node.field_intro_content) }
      { getContent(node.body) }
      { getTextContent(node.field_outro_content) }
    </div>
  );
}

const getContent = (content) => {
  return (content !== null ? setHTML(content.processed) : "" );
}

const getTextContent = (content) => {
  return (typeof content !== "undefined" ? setHTML(content.processed) : "" );
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
