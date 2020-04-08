import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { urlify, getNodeId } from "../helpers";
import { connect } from "react-redux";
import { setNewCurrent } from "../actions";
import Nav from "react-bootstrap/Nav";

const mapDispatchToProps = (dispatch) => {
  return {
    setNewCurrent: (path) => {
      return dispatch( setNewCurrent(path) );
    }
  }
}

const MenuItem = ({ name, url, setNewCurrent }) => {
  const path = urlify(name);
  const nodeId = getNodeId(url);
  return (
    <Nav.Item>
      <Nav.Link 
        as={ Link } 
        to={ path } 
        nodeid={ nodeId }
        onClick={ () => setNewCurrent("/" + path) }
    >
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

export default connect(null, mapDispatchToProps)(MenuItem);
