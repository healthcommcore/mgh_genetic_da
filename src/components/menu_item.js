import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import { urlify, getNodeId } from "../helpers/helpers";

const MenuItem = ({ name, url }) => {
  const path = urlify(name);
  const nodeId = getNodeId(url);
  return (
    <li>
      <Link to={ path } nodeId={ nodeId }>
        { name }
      </Link>
    </li>
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
