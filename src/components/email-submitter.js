import React, { useState } from "react";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import PropTypes from "prop-types";

const sendEmail = (data, email = false, notes = false) => {
  const payload = {
    email,
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
    userValues: data.values,
    notes
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

const EmailSubmitter = ({ type, data, children }) => {
  const [email, setEmail] = useState("");
  // Only pass the user notes if the email is going to the user, not to admin
  const notes = (type === "user" ? data.notes : false);
  return (
    <Form>
      <Form.Row>      
        <Col sm="7">
          { type === "user" ? 
            <Form.Control 
              placeholder="Enter email address"
              type="email"
              onChange={ (e) => setEmail(e.target.value) }  
            /> : "" 
          } 
        </Col>
        <Col sm="5">
          <Button className="btn btn-da rounded-pill" onClick={ () => sendEmail(data, email, notes) }>{ children }</Button>
        </Col>
      </Form.Row>      
    </Form>
  )
}

EmailSubmitter.propTypes = {
  type: PropTypes.string,
  userid: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  email: PropTypes.string
}

export default EmailSubmitter;
