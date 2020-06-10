import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import AdminModal from "../components/admin-modal";
import AdminTable from "../components/admin-table";
import ContentContainer from "../components/content-container";
import SummaryValue from "../components/summary-value";
import EmailSubmitter from "../components/email-submitter";
import Footer from "../components/footer";
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
    <>
    <Container bsPrefix="container mt-5">
      <AdminModal 
        showModal={ !isLoggedIn } 
        showAlert={ showError }
        modalSubmit={ (e, value) => handleSubmit(e, value) }
      />
      <Fade in={ isLoggedIn }>
        <>
        <div className="blue-bkgrd mb-5">
          <h1 className="ml-3">Admin area</h1>
        </div>
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
        <ContentContainer>
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
        </ContentContainer>
        <div className="text-center my-5 pb-4 pt-3">
        <EmailSubmitter 
          type="admin"
          data={ user }
        >
          Submit user data
        </EmailSubmitter>
        </div>
      </>
      </Fade>
    </Container>
    <Footer className="mt-5" />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
