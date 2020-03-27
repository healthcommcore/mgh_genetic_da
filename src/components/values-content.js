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
  );
}

export default ValuesContent;
