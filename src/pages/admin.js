import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import AdminModal from "../components/admin-modal";
import AdminTable from "../components/admin-table";
import SummaryValue from "../components/summary-value";
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



const Admin = ({ isLoggedIn, showError, user, handleSubmit }) => {
  return (
    <Container>
      <AdminModal 
        showModal={ !isLoggedIn } 
        showAlert={ showError }
        modalSubmit={ (e, value) => handleSubmit(e, value) }
      />
      <Fade in={ isLoggedIn }>
        <>
        <h1>Admin area</h1>
        <h2>User info and test data</h2>
        <Card>
          <Card.Body>
            <AdminTable 
              userid={ user.userid }
              cancerType={ user.cancerType }
              site={ user.site }
              test={ user.test }
            />
          </Card.Body>
        </Card>
        <h2>Responses to What's important to you</h2>
        { user.values.map( (value, i) => {
          return value && (
            <SummaryValue
              key={ i }
              num={ i + 1 }
              heading={ value.heading }
              leftLabel={ value.leftLabel }
              rightLabel={ value.rightLabel }
              value={ value.value }
            />
          );
        })}
        <EmailSubmitter 
          type="admin"
          userid={ user.userid }
          data={ user.test }
        >
          Submit user data
        </EmailSubmitter>
      </>
      </Fade>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
