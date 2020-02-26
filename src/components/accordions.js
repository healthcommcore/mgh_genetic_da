import React from "react";
import { exists } from "../helpers/helpers";

const Accordions = ({ content }) => {
  return (
    <>
      { exists(content.field_accordions[0].field_accordion_heading) ?
        content.field_accordions.map( (acc, i) +> {
          return (
            <Accordion 
              heading={ acc.field_accordion_heading }
              body={ acc.field_accordion_body.processed }
            />
          )
        })
        : ""
      }
    </>
  );
}

export default Accordions;
