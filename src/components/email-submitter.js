import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types";

const sendEmail = (id, data) => {
  const user = {
    id,
    decision: data.doYouWantGeneticTest,
    test: data.testTypes || "no test selected",
    nextSteps: data.notReadyToDecide.length > 0 && data.notReadyToDecide.join(", ")
  };

  fetch("http://api.geneticda.hccstaging.com/sendmail.php",
    {
      method: "post",
      headers: { 
        "Content-Type" : "application/json",
        "Accept" : "application/json" 
      },
      body: JSON.stringify(user)
    })
    .then( (response) => {
      console.log(response);
    })
    .catch( (err) => {
      console.error("Error:", err);
    });
}

const EmailSubmitter = ({ type, userid, data, email = null, children }) => {
  return (
      <Button onClick={ () => sendEmail(userid, data) }>{ children }</Button>
  )
}

EmailSubmitter.propTypes = {
  type: PropTypes.string,
  userid: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  email: PropTypes.string
}

export default EmailSubmitter;
