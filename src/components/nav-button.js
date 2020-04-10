import React from "react";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";

const NavButton = ({ path, className, onClick, children }) => {
  return (
    <Button
      to={ path }
      as={ Link }
      onClick={ onClick }
      variant={ "da rounded-pill " + className  }
    >
    { children }
    </Button>
  );
}

export default NavButton;
