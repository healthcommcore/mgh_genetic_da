import React from "react";
import ValuesScale from "./values-scale";

const ValuesContent = ({ values }) => {
  const list = values.field_values;
  return list[0].field_value_heading && (
    list.map( (item, i) => {
      return (
        <ValuesScale
          num={ i }
          key={ i }
          heading={ item.field_value_heading }
          leftLabel={ item.field_l } 
          rightLabel={ item.field_r } 
        />
      );
    })
      /*
        <>
          <p>{ item.field_value_heading }</p>
          <ul>
            <li>{ item.field_l }</li>
            <li>{ item.field_r }</li>
          </ul>
        </>
      */
  );
}

export default ValuesContent;
