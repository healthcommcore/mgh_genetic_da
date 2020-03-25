import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import { ucFirst, urlify } from "../helpers";

const PrevNextButtons = ({ prevNext, advance, retreat }) => {
  const keys = Object.keys(prevNext);
  const link = {
    previous: retreat,
    next: advance
  }
  return (
    <Container>
      <Row>
        { keys.map( (key) => {
            if (prevNext[key] && key !== "current") {
              return (
                <Col md="6" sm="12">
                  <Button 
                    as={ Link } 
                    className="btn-prev-next"
                    to={ prevNext[key].path }
                    onClick={ link[key] }
                  >
                    { ucFirst(key) }
                  </Button>
                </Col>
              );
            }
          })}
      </Row>
    </Container>
  );
}

export default PrevNextButtons;
