import React, { useState} from "react";
import AdminModal from "../components/admin-modal";
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
      <AdminModal 
        showModal={ !isLoggedIn } 
        showAlert={ showError }
        modalSubmit={ (e, value) => handleSubmit(e, value) }
      />
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
