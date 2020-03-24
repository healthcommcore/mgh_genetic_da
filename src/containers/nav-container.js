import React from "react";
import { connect } from "react-redux";
import NavMenu from "../components/nav-menu";

const mapStateToProps = (state) => {
  return { menuItems: state.navigation.menuItems };
}

/*
const mapDispatchtoProps = (dispatch) => {
  return {
  }
}
*/

export default connect(mapStateToProps, null)(NavMenu);
