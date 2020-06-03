import React from "react";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionHeading from "./accordion-heading";
import { setHTML } from "../helpers";

const mapStateToProps = (state) => {
  return {
    cancerType: state.user.cancerType
  }
}

const AccordionContent = ({ accordions, cancerType }) => {
  return accordions && (
    <Accordion>
      { accordions.map( (accordion, i) => {
        const isCancerSpecific = accordion.relationships.field_cancer_type && 
              accordion.relationships.field_cancer_type.name;
        return !(isCancerSpecific && isCancerSpecific !== cancerType) && (
          <Card key={ i }>
            <Accordion.Toggle as={ Card.Header } eventKey={ i }>
              <AccordionHeading
                heading={ accordion.field_accordion_heading }
                subheading={ accordion.field_accordion_subheading }
              />
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

export default connect(mapStateToProps, null)(AccordionContent);
