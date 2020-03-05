import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import LoginForm from "../components/login-form";
import { setUser } from "../actions";

const mapStateToProps = (state) => {
  return { user: state.user };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (values) => {
      //console.log(dispatch);
      dispatch( setUser(values) );
    }
  }
}

let Login = ({ data, setUser }) => {
  const cancers = data.allTaxonomyTermCancerType.edges;
  const sites = data.allTaxonomyTermSites.edges;
  return (
    <LoginForm
      cancers={ cancers }
      sites={ sites }
      onSubmit={ setUser }
    />
  );
}

// GraphQL querty to grab all cancer types and sites from DB, pass to component
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

// Use redux's connect method to map Login's form values to the action dispatcher using
// mapDispatchToProps
Login =  connect(mapStateToProps, mapDispatchToProps)(Login);

// Export the connected component, decorating it with reduxForm to connect the redux form
// to redux
export default reduxForm({ form: "login_page" })(Login);
