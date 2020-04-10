import React from "react";
import { connect } from "react-redux";
import { initializeMenu } from "../actions";
import { navigate, graphql, Link } from "gatsby";
import Button from "react-bootstrap/Button";
import NavButton from "../components/nav-button";
import { useDrupalMenu } from "../helpers/use-drupal-menu";
import { setHTML } from "../helpers";

const mapDispatchToProps = (dispatch) => {
  return {
    initializeMenu: (drupalMenu) => {
      dispatch( initializeMenu(drupalMenu) );
    }
  }
}

const Entrance = ({ data, initializeMenu }) => {
  const drupalMenu = useDrupalMenu();
  const fields = data.nodeArticle;
  return (
    <div onLoad={ initializeMenu(drupalMenu) }>
      <h1>{ fields.title }</h1>
      <div className="content">
        { setHTML(fields.body.processed) }
      </div>
      <NavButton path="/welcome">Start</NavButton>
    </div>
  );
}

export const query = graphql`
  query EntranceQuery {
    nodeArticle(drupal_internal__nid: {eq: 20} ) {
      title
      body {
        processed
      }
    }
  }
`
export default connect(null, mapDispatchToProps)(Entrance);
