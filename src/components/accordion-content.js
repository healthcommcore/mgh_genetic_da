import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { setHTML } from "../helpers";

const AccordionContent = ({ content }) => {
  console.log(content);
  const hasAccordion = content.field_accordions && content.field_accordions[0].field_accordion_heading;
  return hasAccordion && (
    <Accordion>
      { content.field_accordions.map( (accordion, i) => {
        return (
          <Card key={ i }>
            <Accordion.Toggle as={ Card.Header } eventKey={ i }>
              { accordion.field_accordion_heading }
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={ i }>
              <Card.Body>
                { setHTML(accordion.field_accordion_body.processed) }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}

export default AccordionContent;
