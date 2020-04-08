import React from "react";
import Card from "react-bootstrap/Card";
import MultChoiceSegment from "./mult-choice-segment";
import ButtonSegment from "./button-segment";
import { setHTML } from "../helpers";

const ContentModuleSegment = ({ segment }) => {
  const MULT_CHOICE = "field_multiple_choice";
  const BUTTON = "field_button_with_text";
  /* This is a good start. Next, need to make components to handle buttons and
   * multiple choices within relationships
   */
  const components = segment.relationships;
  return (
    <>
      { segment.field_content && <Card.Text>{ setHTML(segment.field_content.processed) }</Card.Text> }
      { Object.keys(components).map( (type, i) => {
        switch(type) {
          case MULT_CHOICE:
            const multChoice = components[MULT_CHOICE];
            const isMultChoice = (multChoice && multChoice.hasOwnProperty("field_option_name")) && 
              multChoice.field_option_name.length > 0;
            return isMultChoice && <MultChoiceSegment content={ multChoice } />;
          case BUTTON:
            const buttons = components[BUTTON];
            const isButton = (buttons[0] && buttons[0].hasOwnProperty("field_button_text")) && 
              buttons[0].field_button_text;
            return isButton && (
              buttons.map( (button, i) => {
                return <ButtonSegment key={ i } content={ button } />;
              }));
          default:
            return <></>;
        }
      })}
    </>
  );
}

export default ContentModuleSegment;