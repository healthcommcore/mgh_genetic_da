import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import { urlify, getNodeId } from "../helpers/helpers";
import Nav from "react-bootstrap/Nav";

const MenuItem = ({ name, url }) => {
  const path = urlify(name);
  const nodeId = getNodeId(url);
  return (
    <Nav.Item>
      <Nav.Link as={ Link } to={ path } nodeid={ nodeId }>
        { name }
      </Nav.Link>
    </Nav.Item>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}

MenuItem.defaultProps = {
  name: "Menu item",
  url: "#"
}

export default MenuItem;
