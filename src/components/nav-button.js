import React from "react";
import { Link } from "gatsby";

const NavButton = ({ path }) => {
  return (
    <Link path={ path } className="btn btn-lg btn-da" />
  );
}

export default NavButton;
