import React from "react";
import Form from "react-bootstrap/Form";
import { urlify } from "../helpers";

const MultChoiceSegment = ({ content }) => {
  console.log(content);
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
          />
        );
      })}
    </Form>
  );
}

export default MultChoiceSegment;
