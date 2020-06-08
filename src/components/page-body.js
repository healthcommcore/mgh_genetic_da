import React from "react";
import Container from "react-bootstrap/Container";
import ValuesContent from "./values-content";
import VideoContent from "../components/video-content";
import SummaryContent from "./summary-content";
import AccordionContent from "../components/accordion-content";
import ContentModule from "./content-module";
import ContentContainer from "./content-container";
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
      <ContentContainer>
        { exists(intro) ? <div className="intro-outro-content-margin">{ setHTML(intro.processed) } </div> : "" }
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
        { 
          page === "summary" ?
            <SummaryContent />
          : ""
        }
        <ContentModule content={ complexContent } />
      </ContentContainer>
      <ValuesContent list={ values } />
      <ContentContainer>
      { exists(outro) ? <div className="intro-outro-content-margin">{ setHTML(outro.processed) } </div> : "" }
      </ContentContainer>
    </Container>
  );
}

export default PageBody;
