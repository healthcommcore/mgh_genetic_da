import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { setNotes } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    notes: state.user.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch( setNotes(e.target.value));
    }
  }
}

const NotesArea = ({ notes, handleChange }) => {
  const placeholder = "Write your questions or comments here, you can see or print them later"
  return (
    <div className="notes-area">
      <Container>
        <Card>
          <Card.Header>Notes</Card.Header>
          <Card.Body>
          <Form.Control 
            as="textarea" 
            rows="7" 
            value={ notes }
            onChange={ handleChange }
            placeholder={ notes ? "" : placeholder }
          />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesArea);
