import React from "react";
import PropTypes from "prop-types";
import { urlify } from "../helpers";
import MenuItem from "./menu-item";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavButton from "./nav-button";

const NavMenu = ({ menuItems, isAdminLoggedIn }) => {
  return (
    <div className="nav-bkgrd">
      <Container>
        <Nav justify>
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
        { isAdminLoggedIn && <div className="text-center"><NavButton className="btn-admin mx-auto" path="/admin">Back to admin area</NavButton></div> } 
      </Container>
    </div>
  );
}

NavMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  isAdminLoggedIn: PropTypes.bool.isRequired,
};

export default NavMenu;
