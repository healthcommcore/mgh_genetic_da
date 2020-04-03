import React from "react";
import Card from "react-bootstrap/Card";
import { setHTML, exists } from "../helpers";

const ContentModuleSegment = ({ segment }) => {
  //console.log(segment.relationships);
  /* This is a good start. Next, need to make components to handle buttons and
   * multiple choices within relationships
   */
  return (
    <>
      { segment.field_content && <Card.Text>{ setHTML(segment.field_content.processed) }</Card.Text> }
    </>
  );
}

export default ContentModuleSegment;
