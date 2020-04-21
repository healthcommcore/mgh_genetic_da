import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { setHTML } from "../helpers";

const AccordionContent = ({ accordions }) => {
  return accordions && (
    <Accordion>
      { accordions.map( (accordion, i) => {
        return (
          <Card key={ i }>
            <Accordion.Toggle as={ Card.Header } eventKey={ i }>
              <h3>{ accordion.field_accordion_heading }</h3>
              { accordion.field_accordion_subheading ? 
                  <h4>{ accordion.field_accordion_subheading }</h4> 
                : "" 
              }
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
