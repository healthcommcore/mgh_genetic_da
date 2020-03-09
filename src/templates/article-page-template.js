import React from "react";
import { graphql } from "gatsby";
import { setHTML } from "../helpers";
import PageTitle from "../components/page-title";

const ArticlePageTemplate = ({ data }) => {
  const node = data.nodeArticle;
  return (
    <div className="article-page">
      <PageTitle>
        { node.title }
      </PageTitle>
      { setHTML(node.body.processed) }
    </div>
  );
}


export const query = graphql`
  query($id: String!) {
    nodeArticle(id: {eq: $id} ) {
      title
      body {
        processed
      }
    }
  }
`

export default ArticlePageTemplate;
