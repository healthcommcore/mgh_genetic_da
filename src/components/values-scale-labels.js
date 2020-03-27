import React from "react";

const ValuesScaleLabels = ({ left, right }) => {
  return (
    <div className="scale-labels clearfix">
      <div className="scale-label lable-left float-left">{ left }</div>
      <div className="scale-label lable-right float-right">{ right }</div>
    </div>
  );
}

export default ValuesScaleLabels;
