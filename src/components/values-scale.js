import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ValuesScaleLabels from "./values-scale-labels";

const SCALE_NUM = [1, 2, 3, 4, 5, 6, 7];
const ValuesScale = ({ num, heading, leftLabel, rightLabel }) => {
  return (
    <div className="values-scale">
      <h3>{ num }. { heading }</h3>
      <ToggleButtonGroup name={ "scale-" + num }>
        { SCALE_NUM.map( (sn, i) => {
          return (
            <ToggleButton key={i} name={ "scale-" + num } value={sn} className="rounded-circle">
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <ValuesScaleLabels left={ leftLabel } right={ rightLabel } />
    </div>
  );
}

export default ValuesScale;
