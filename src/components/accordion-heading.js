import React from "react";

const AccordionHeading = ({ heading, subheading }) => {
  return (
    <div className="d-flex accordion-header-content">
      <div className="icon-wrapper d-flex align-items-center">
        <div className="icon icon-open">more</div>
      </div>
      <div className="heading-wrapper">
        <h3>{ heading }</h3>
        { subheading ? <h4>{ subheading }</h4> : "" }
      </div>
    </div>
  );
}

export default AccordionHeading;
