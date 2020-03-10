import React, { Component } from "react";
import { connect } from "react-redux";

class AppSetup extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch( setAllPages());
  }

  render() {
    return <></>;
  }
}
