import React from "react";
import ValuesScale from "./values-scale";

const ValuesContent = ({ list }) => {
  return list && (
    list.map( (item, i) => {
      return (
        <ValuesScale
          num={ i + 1 }
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
