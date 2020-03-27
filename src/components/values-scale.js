import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const SCALE_NUM = [1, 2, 3, 4, 5, 6, 7];
const ValuesScale = ({ num, heading, leftLabel, rightLabel }) => {
  return (
    <div className="number-scale">
      <h3>{ num }. { heading }</h3>
      <ToggleButtonGroup name={ "scale-" + num }>
        { SCALE_NUM.map( (sn, i) => {
          return (
            <ToggleButton key={i} name={ "scale-" + num } value={sn} className="rounded-circle">
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <div className="scale-labels clearfix">
        <div className="scale-label lable-left float-left">{ leftLabel }</div>
        <div className="scale-label lable-right float-right">{ rightLabel }</div>
      </div>
    </div>
  );
}

export default ValuesScale;
