import React from "react";


const TestDecision = ({ test, children }) => {
  const resp = test.doYouWantGeneticTest;
  const type = resp.split(" ")[0].toLowerCase().replace(/\W/g, "");
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
      field = "Next steps";
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
