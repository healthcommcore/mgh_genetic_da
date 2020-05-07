import React from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const sendEmail = (user) => {
  const test = user.test;
  const data = {
    id: user.userid,
    decision: test.doYouWantGeneticTest,
    test: test.testTypes || "no test selected",
    notReady: test.notReadyToDecide.length > 0 && test.notReadyToDecide.join(", ")
  };

  fetch("http://api.geneticda.hccstaging.com/sendmail.php",
    {
      method: "post",
      headers: { 
        "Content-Type" : "application/json",
        "Accept" : "application/json" 
      },
      body: JSON.stringify(data)
    })
    .then( (response) => {
      console.log(response);
    })
    .catch( (err) => {
      console.error("Error:", err);
    });
}

const EmailSubmitter = ({ type, email = null, user }) => {
  return (
      <Button onClick={ () => sendEmail(user) }>Submit</Button>
  )
}

export default connect(mapStateToProps, null)(EmailSubmitter);
