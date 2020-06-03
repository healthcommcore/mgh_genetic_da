import React from "react";
import PropTypes from "prop-types";
import NavButton from "./nav-button.js";
import ContentContainer from "./content-container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "gatsby";
import { ucFirst, urlify } from "../helpers";

const PrevNextButtons = ({ prevNext, isOrphan, advance, retreat }) => {
  const keys = Object.keys(prevNext);
  const count = 1;
  const link = {
    previous: retreat,
    next: advance
  }
  return (
    <div className="prev-next-buttons">
      <ContentContainer>
        <Row>
        { isOrphan ?
          <NavButton path={ prevNext.current.path }>{ "Back to " + prevNext.current.title }</NavButton>
          :
          <>
            { keys.map( (key, i) => {
                if (prevNext[key] && key !== "current") {
                  return (
                    <Col md="6" sm="12" key={ i }>
                      <NavButton 
                        className="btn-prev-next"
                        //className={ "btn-prev-next" + (i === 2 ? " float-right" : "") }
                        path={ prevNext[key].path }
                        onClick={ link[key] }
                      >
                        { ucFirst(key) }
                      </NavButton>
                    </Col>
                  );
                }
              })}
          </>
        }
        </Row>
      </ContentContainer>
    </div>
  );
}

export default PrevNextButtons;
