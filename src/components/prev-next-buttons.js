import React from "react";
import PropTypes from "prop-types";
import NavButton from "./nav-button.js";
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
                  <NavButton 
                    className="btn-da btn-prev-next"
                    path={ prevNext[key].path }
                    onClick={ link[key] }
                  >
                    { ucFirst(key) }
                  </NavButton>
                </Col>
              );
            }
          })}
      </Row>
    </Container>
  );
}

export default PrevNextButtons;
