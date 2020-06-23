import React from "react";
import { connect } from "react-redux";
import { setNewCurrent } from "../actions";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import NavButton from "../components/nav-button";

const mapStateToProps = (state) => {
  return {
    current: state.navigation.navPaths.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNewCurrent: (path) => {
      return dispatch( setNewCurrent(path) );
    }
  }
}

const Restricted = ({ current, setNewCurrent }) => {
  console.log(current);
  return (
    <Container bsPrefix="container mt-5">
      <div className="blue-bkgrd mb-5">
        <h1 className="ml-3">Access denied</h1>
      </div>
      <Card>
        <Card.Body>
          <Card.Text>You need a password to enter the admin area. To return to the admin login, click the <strong>Admin</strong> button below.</Card.Text>
            <NavButton className="mb-5" path="/admin">Admin</NavButton>
          <Card.Text>If you went to the admin area by accident click the <strong>Back</strong> button below to return to the decision aid</Card.Text>
            <NavButton onClick={ () => setNewCurrent(current.path) } path={ current.path }>Back</NavButton>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Restricted);
