import React from "react";
import { connect } from "react-redux";
import NavMenu from "../components/nav-menu";

const mapStateToProps = ({ currNextPrev, menuItems }) => {
  return { currNextPrev, menuItems };
}

const mapDispatchtoProps = (dispatch) => {
  return {
  }
}
