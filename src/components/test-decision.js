import React from "react";
import { abbreviate } from "../helpers";


const TestDecision = ({ test, children }) => {
  const resp = test.doYouWantGeneticTest;
  const type = resp && abbreviate(resp);
  let field, value, path;
  switch (type) {
    case "yes":
      if (!test.testTypes && test.notSureWhichTest.length > 0) {
        field = "Reasons not ready to choose test";
        value = test.notSureWhichTest.join(", ");
      }
      else {
        field = "Test type";
        value = test.testTypes || "no test selected";
      }
      path = "/choose-a-test";
    break;
    case "im":
      field = "Instead, you would like to";
      value = test.notReadyToDecide.length > 0 && test.notReadyToDecide.join(", ");
      path = "/its-your-decision";
    break;
    default:
  }
  return (
    <>
      { children(resp, field, value, path) }
    </>
  );
}

export default TestDecision;
