import React from "react";
import Card from "react-bootstrap/Card";
import { setHTML } from "../helpers";

const ContentModuleSegment = ({ segments }) => {
  return (
    <>
      { segments.map( (segment, i) => {
        return segment.field_content && (
          <Card.Text key={ i }>{ setHTML(segment.field_content.processed) }</Card.Text>
        )
      })}
    </>
  );
}

export default ContentModuleSegment;
