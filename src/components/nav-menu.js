import React from "react";
import PropTypes from "prop-types";
import { urlify } from "../helpers";
import MenuItem from "./menu-item";
import Nav from "react-bootstrap/Nav";

const NavMenu = ({ menuItems }) => {
  return (
    <Nav>
      { menuItems.map( (item, i) => {
        return (
          <MenuItem
            name={ item.title }
            url={ urlify(item.title) }
            key={ i }
          />
        );
      })}
    </Nav>
  );
}

NavMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
};

export default NavMenu;
