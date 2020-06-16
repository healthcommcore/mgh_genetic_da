import React from "react";
import PropTypes from "prop-types";
import NavButton from "./nav-button.js";
import Container from "react-bootstrap/Container";
import { Link } from "gatsby";
import { ucFirst, urlify } from "../helpers";

const PrevNextButtons = ({ prevNext, isOrphan, advance, retreat }) => {
  const keys = Object.keys(prevNext);
  const link = {
    previous: retreat,
    next: advance
  }
  return (
    <div className="prev-next-buttons">
      <Container>
        <div className="buttons-container d-flex justify-content-around flex-wrap">
        { isOrphan ?
          <NavButton path={ prevNext.current.path }>{ "Back to " + prevNext.current.title }</NavButton>
          :
          <>
            { keys.map( (key, i) => {
                if (prevNext[key] && key !== "current") {
                  return (
                      <NavButton 
                        className="btn-prev-next"
                        path={ prevNext[key].path }
                        onClick={ link[key] }
                      >
                        { prevNext[key].title === "End" ? "Finish" : ucFirst(key) }
                      </NavButton>
                  );
                }
              })}
          </>
        }
        </div>
      </Container>
    </div>
  );
}

export default PrevNextButtons;
