import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
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

const Login = ({ data, setUser }) => {
  const cancers = data.allTaxonomyTermCancerType.edges;
  const sites = data.allTaxonomyTermSites.edges;
  return (
    <Container>
      <Form className="login" onSubmit={ setUser }>
        <Form.Group controlId="patientID">
          <Form.Label>Enter patient ID</Form.Label>
          <Form.Control size="lg" type="text" />
        </Form.Group>
        <Form.Group controlId="cancerType">
          <Form.Label>Select cancer type</Form.Label>
          <Form.Control size="lg" as="select">
            <option>--Select cancer--</option>
            { cancers.map( (cancer, i) => {
              return (
                <option key={ i }>{ cancer.node.name }</option>
              )
            })}
          </Form.Control>
         <Form.Group controlId="sites">
          <Form.Label>Select site</Form.Label>
          <Form.Control size="lg" as="select">
            <option>--Select site--</option>
            { sites.map( (site, i) => {
              return (
                <option key={ i }>{ site.node.name }</option>
              )
            })}
          </Form.Control>
        </Form.Group>
       </Form.Group>
       <Button variant="primary" size="lg" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

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
