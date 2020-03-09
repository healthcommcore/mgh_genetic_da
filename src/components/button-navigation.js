import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const ButtonNavigation = ([ buttons ]) => {
  return (
    <div className="d-flex justify-content-between">
    </div>
  );
}

ButtonNavigation.propTypes = {
  buttons: PropTypes.array.isRequired
}

export default ButtonNavigation;

