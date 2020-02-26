import React from "react";
import Container from "react-bootstrap/Container";
import VideoContent from "./video-content";
import { setHTML, exists } from "../helpers/helpers";

const PageBody = ({ intro, body, outro, complexContent }) => {
  return (
    <Container>
      { exists(intro) ? setHTML(intro.processed) : "" }
      <VideoContent video={ complexContent } />
      { exists(body) ? setHTML(body.processed) : "" }
      { exists(outro) ? setHTML(outro.processed)  : "" }
    </Container>
  );
}

export default PageBody;
