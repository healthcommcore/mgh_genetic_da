import React from "react";
import { connect } from "react-redux";
import SummaryValue from "./summary-value";
import TestDecision from "./test-decision";
import EmailSubmitter from "./email-submitter";

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const SummaryContent = ({ user }) => {
  const test = user.test;
  const values = user.values;
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
      <TestDecision test={ test }>
        { (resp, field, value, path) => {
          return (
            <>
              <p>Do you want genetic testing?<br />
              <strong>{ resp }</strong></p>
              <p>{ field }<br />
              <strong>{ value }</strong></p>
            </>
          );
        }}
      </TestDecision>
      <p>Provide your email address to receive a copy of your responses and notes:</p>
      <EmailSubmitter type="user" data={ user }>
        Email summary to myself
      </EmailSubmitter>
    </>
  );
}

export default connect(mapStateToProps, null)(SummaryContent);
