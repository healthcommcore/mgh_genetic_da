import React from "react";
import Container from "react-bootstrap/Container";
import VideoContent from "./video-content";
import ValuesContent from "./values-content";
import ContentModule from "./content-module";
import { setHTML, exists } from "../helpers";

const PageBody = ({ intro, outro, complexContent }) => {
  return (
    <Container>
      { exists(intro) ? setHTML(intro.processed) : "" }
      <VideoContent video={ complexContent } />
      <ContentModule content={ complexContent } />
      <ValuesContent values={ complexContent } />
      { exists(outro) ? setHTML(outro.processed)  : "" }
    </Container>
  );
}

export default PageBody;
