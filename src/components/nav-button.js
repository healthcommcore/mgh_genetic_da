import React from "react";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";

const NavButton = ({ path, classes, onClick, children }) => {
  return (
    <Button
      to={ path }
      as={ Link }
      onClick={ onClick }
      className={ classes }
    >
    { children }
    </Button>
  );
}

export default NavButton;
