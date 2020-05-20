import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    test: state.user.test,
    values: state.user.values
  }
}

const SummaryContent = ({ test, values }) => {
  return (
    <>
      <h1>This is the summary content component</h1>
    </>
  );
}

export default connect(mapStateToProps, null)(SummaryContent);
