import React from "react";
import Container from "react-bootstrap/Container";
import ValuesContent from "./values-content";
import VideoContent from "../components/video-content";
import AccordionContent from "../components/accordion-content";
import ContentModule from "./content-module";
import { setHTML, exists, getContent } from "../helpers";

const PageBody = ({ page, video, videoCaption, intro, outro, complexContent }) => {
  const accordions = getContent(complexContent, "field_accordions", "field_accordion_heading");
  const values = getContent(complexContent, "field_values", "field_value_heading");
  const vidUrl = getContent(video, "field_video");
  const vidPlaceholder = getContent(video, "field_video_still_image");
  page = page.slice(1);
  return (
    <Container>
      <VideoContent 
        video={ vidUrl } 
        caption={ videoCaption } 
        placeholder={ vidPlaceholder }
      />
      { exists(intro) ? setHTML(intro.processed) : "" }
      { 
        page === "choose-a-test" ?
          <>
            <AccordionContent accordions={ accordions.slice(0, -1) } />
            <h2>Compare test options</h2>
            <AccordionContent accordions={ accordions.slice(-1) } />
          </>
        :
          <AccordionContent accordions={ accordions } />
      }
      <ContentModule content={ complexContent } />
      <ValuesContent list={ values } />
      { exists(outro) ? setHTML(outro.processed)  : "" }
    </Container>
  );
}

export default PageBody;
