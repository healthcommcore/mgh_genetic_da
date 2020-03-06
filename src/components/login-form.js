import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FieldInput from "./field-input";
import { Field, reduxForm } from "redux-form";

let LoginForm = ({ cancers, sites, handleSubmit }) => {
  return (
    <Container>
      <Form className="login" onSubmit={ handleSubmit }>
        <Form.Group controlId="patientID">
          <Form.Label>Enter patient ID</Form.Label>
          <Field name="userid" component={ FieldInput } />

        </Form.Group>
        <Form.Group controlId="cancerType">
          <Form.Label>Select cancer type</Form.Label>
          <Field name="cancerType" size="lg" as="select" component={ FieldInput }>
            <option>--Select cancer--</option>
            { cancers.map( (cancer, i) => {
              return (
                <option key={ i }>{ cancer.node.name }</option>
              )
            })}
          </Field>
         </Form.Group>
         <Form.Group controlId="sites">
          <Form.Label>Select site</Form.Label>
          <Field name="site" size="lg" as="select" component={ FieldInput }>
            <option>--Select site--</option>
            { sites.map( (site, i) => {
              return (
                <option key={ i }>{ site.node.name }</option>
              )
            })}
          </Field>
        </Form.Group>
       <Button variant="primary" size="lg" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

LoginForm = reduxForm({ form: "login_form" })(LoginForm);

export default LoginForm;
