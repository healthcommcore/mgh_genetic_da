import React from "react";
import { connect } from "react-redux";
import { setValue } from "../actions";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ValuesScaleLabels from "./values-scale-labels";

const SCALE_NUM = [1, 2, 3, 4, 5, 6, 7];

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (e) => {
      dispatch( setValue(e) );
    }
  }
}


const ValuesScale = ({ num, heading, leftLabel, rightLabel, setValue }) => {
  return (
    <div className="values-scale">
      <h3>{ num }. { heading }</h3>
      <ToggleButtonGroup name={ "scale-" + num }>
        { SCALE_NUM.map( (sn, i) => {
          return (
            <ToggleButton 
              key={i} 
              name={ "scale-" + num } 
              value={sn} 
              className="rounded-circle"
              onChange={ setValue }>
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <ValuesScaleLabels left={ leftLabel } right={ rightLabel } />
    </div>
  );
}


export default connect(null, mapDispatchToProps)(ValuesScale);
