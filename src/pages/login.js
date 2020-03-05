import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FieldInput from "../components/field-input";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (e) => {
      e.preventDefault();
      console.log(e.target.value);
      //dispatch()
    }
  }
}

let Login = ({ data, setUser }) => {
  const cancers = data.allTaxonomyTermCancerType.edges;
  const sites = data.allTaxonomyTermSites.edges;
  return (
    <Container>
      <Form className="login" onSubmit={ setUser }>
        <Form.Group controlId="patientID">
          <Form.Label>Enter patient ID</Form.Label>
          <Field name="userid" component={ FieldInput } />
          {/*<Form.Control size="lg" type="text" />*/}

        </Form.Group>
        <Form.Group controlId="cancerType">
          <Form.Label>Select cancer type</Form.Label>
          <Field name="cancer_type" size="lg" as="select" component={ FieldInput }>
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

Login = reduxForm({ form: "login" })(Login);

export const query = graphql`
  query {
    allTaxonomyTermCancerType {
      edges {
        node {
          name
        }
      }
    }
    allTaxonomyTermSites {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default connect(mapDispatchToProps)(Login);
