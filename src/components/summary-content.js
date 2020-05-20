import React from "react";
import { connect } from "react-redux";
import SummaryValue from "./summary-value";
import SummaryTestDecision from "./summary-test-decision";

const mapStateToProps = (state) => {
  return {
    test: state.user.test,
    values: state.user.values
  }
}

const SummaryContent = ({ test, values }) => {
  return (
    <>
      <h2>What's important to you?</h2>
      { values.map( (value, i) => {
        return value && (
          <SummaryValue
            key={ i }
            num={ i + 1 }
            heading={ value.heading }
            leftLabel={ value.leftLabel }
            rightLabel={ value.rightLabel }
            value={ value.value }
          />
        );
      })}
      <h2>Your decision</h2>
      <p>Here's what you decided to do next:</p>
      <SummaryTestDecision test={ test } />
    </>
  );
}

export default connect(mapStateToProps, null)(SummaryContent);
