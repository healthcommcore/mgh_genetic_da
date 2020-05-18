import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import AdminModal from "../components/admin-modal";
import AdminTable from "../components/admin-table";
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
        <Card>
          <Card.Body>
            <Card.Title>Admin area</Card.Title>
            <Card.Text>This is where admins can check participant entries</Card.Text>
            <AdminTable 
              userid={ user.userid }
              cancerType={ user.cancerType }
              site={ user.site }
              data={ user.test }
            />
            <EmailSubmitter 
              type="admin"
              userid={ user.userid }
              data={ user.test }
            >
              Submit user data
            </EmailSubmitter>
          </Card.Body>
        </Card>
      </Fade>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
