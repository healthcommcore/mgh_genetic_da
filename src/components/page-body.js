import React from "react";
import Container from "react-bootstrap/Container";
import VideoContent from "./video-content";
import ValuesContent from "./values-content";
import { setHTML, exists } from "../helpers";

const PageBody = ({ intro, body, outro, complexContent }) => {
  return (
    <Container>
      { exists(intro) ? setHTML(intro.processed) : "" }
      <VideoContent video={ complexContent } />
      <ValuesContent values={ complexContent } />
      { exists(body) ? setHTML(body.processed) : "" }
      { exists(outro) ? setHTML(outro.processed)  : "" }
    </Container>
  );
}

export default PageBody;
