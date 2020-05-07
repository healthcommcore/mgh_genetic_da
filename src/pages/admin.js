import React, { useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import NavButton from "../components/nav-button";
import AdminModal from "../components/admin-modal";
import EmailSubmitter from "../components/email-submitter";
import { connect } from "react-redux";
import { adminLogin } from "../actions";

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.admin.isLoggedIn,
    showError: state.admin.showError,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (e, value) => {
      e.preventDefault();
      dispatch( adminLogin(value));
    }
  }
}

const getTestDetails = (test) => {
  const type = test.doYouWantGeneticTest.split(" ")[0].toLowerCase().replace(/\W/g, "");
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
      return;
  }
  return (
    <tr>
      <td>{ field }</td>
      <td>{ value }</td>
      <td><NavButton path={ path }>Change</NavButton></td>
    </tr>
  )
}

const Admin = ({ isLoggedIn, showError, user, handleSubmit }) => {
  return (
    <Container>
      <AdminModal 
        showModal={ !isLoggedIn } 
        showAlert={ showError }
        modalSubmit={ (e, value) => handleSubmit(e, value) }
      />
      <Fade in={ isLoggedIn }>
        <Card>
          <Card.Body>
            <Card.Title>Admin area</Card.Title>
            <Card.Text>This is where admins can check participant entries</Card.Text>
            <Table striped>
              <thead>
                <th>Field</th>
                <th>Value</th>
                <th>Edit</th>
              </thead>
              <tbody>
                <tr>
                  <td>User id</td>
                  <td><Form.Control type="text" value={ user.userid } /></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Wants test?</td>
                  <td>{ user.test.doYouWantGeneticTest }</td>
                  <td><NavButton path="/its-your-decision">Change</NavButton></td>
                </tr>
                { getTestDetails(user.test) }
              </tbody>
            </Table>
            <EmailSubmitter />
          </Card.Body>
        </Card>
      </Fade>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
