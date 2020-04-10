import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavButton from "./nav-button";
import { connect } from "react-redux";
import { setNewCurrent } from "../actions";
import { setHTML } from "../helpers";

const mapDispatchToProps = (dispatch) => {
  return {
    setNewCurrent: (path) => {
      dispatch( setNewCurrent(path) );
    }
  }
}

const ButtonSegment = ({ content, setNewCurrent }) => {
  const path = content.relationships.field_button_destination && 
    content.relationships.field_button_destination.path.alias;
  return (
    <div className="button-segment">
      <Row>
        <Col sm={ 8 }>
          <div className="button-segment-text">
            { setHTML(content.field_text_leading_to_button.processed) }
          </div>
        </Col>
        <Col sm={ 4 }>
          <NavButton
            className="btn-segment"
            path={ path }
            onClick={ () => setNewCurrent(path) }
          >
            { content.field_button_text }
          </NavButton>
        </Col>
      </Row>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ButtonSegment);
