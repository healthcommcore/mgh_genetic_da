import React from "react";
import { setHTML } from "../helpers/helpers";

const Entrance = ({ data }) => {
  const content = data.nodeArticle.body.processed; 
  return (
    <>
      <h1>Entrance</h1>
      { setHTML(content) }
    </>
  );
}

export const query = graphql`
  query {
    nodeArticle(drupal_internal__nid: { eq: 20 }) {
      body {
        processed
      }
    }
  }
`

export default Entrance;
