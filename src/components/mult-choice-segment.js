import React from "react";
import Form from "react-bootstrap/Form";
import { setTestInput } from "../actions";
import { connect } from "react-redux";
import { urlify, toCamelCase } from "../helpers";

const mapDispatchToProps = (dispatch) => {
  return {
    setTestInput: (e) => {
      dispatch( setTestInput(toCamelCase(e.target.name), e.target.value, e.target.type) );
    }
  }
}

const MultChoiceSegment = ({ content, setTestInput }) => {
  const type = content.field_can_choose_multiple ? "checkbox" : "radio";
  const name = content.relationships.field_relevance.name;
  return (
    <Form>
      { content.field_intro_to_options && <p>{ content.field_intro_to_options }</p> }
      { content.field_option_name.map( (option, i) => {
        return (
          <Form.Check 
            type={ type } 
            label={ option } 
            key={ i } 
            name={ urlify(name) }
            value={ option }
            onChange={ setTestInput }
          />
        );
      })}
    </Form>
  );
}

export default connect(null, mapDispatchToProps)(MultChoiceSegment);
