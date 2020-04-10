import React from "react";
import Container from "react-bootstrap/Container";
import ValuesContent from "./values-content";
import VideoContent from "../components/video-content";
import AccordionContent from "../components/accordion-content";
import ContentModule from "./content-module";
import { setHTML, exists } from "../helpers";

const PageBody = ({ video, intro, outro, complexContent }) => {
  return (
    <Container>
      <VideoContent video={ video } />
      { exists(intro) ? setHTML(intro.processed) : "" }
      <ContentModule content={ complexContent } />
      <AccordionContent content={ complexContent } />
      <ValuesContent values={ complexContent } />
      { exists(outro) ? setHTML(outro.processed)  : "" }
    </Container>
  );
}

export default PageBody;
