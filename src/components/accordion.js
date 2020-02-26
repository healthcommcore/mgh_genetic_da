import React from "react";
import { setHTML } from "../helpers/helpers";

const Accordion = ({ heading, body }) => {
  return (
    <>
      <h2>{ heading }</h2>
      { setHTML(body) }
    </>
  );
}

export default VideoContent;
