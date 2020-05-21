import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types";

const sendEmail = (data) => {
  const payload = {
    userBasic: {
      id: data.userid,
      cancerType: data.cancerType,
      site: data.site
    },
    userTest : {
      decision: data.test.doYouWantGeneticTest,
      test: data.test.testTypes || "no test selected",
      nextSteps: data.test.notReadyToDecide && data.test.notReadyToDecide.length > 0 && data.test.notReadyToDecide.join(", ")
    },
    userValues: data.values
  };
  const json = JSON.stringify(payload);
  fetch("http://api.geneticda.hccstaging.com/sendmail.php",
    {
      method: "post",
      headers: { 
        "Content-Type" : "application/json",
        "Accept" : "application/json" 
      },
      body: json
    })
    .then( (response) => {
      console.log(response);
    })
    .catch( (err) => {
      console.error("Error:", err);
    });
}

const EmailSubmitter = ({ type, data, email = null, children }) => {
  return (
      <Button onClick={ () => sendEmail(data) }>{ children }</Button>
  )
}

EmailSubmitter.propTypes = {
  type: PropTypes.string,
  userid: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  email: PropTypes.string
}

export default EmailSubmitter;
