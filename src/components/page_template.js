import React from "react";
import PageTitle from "./page_title";
import Container from "react-bootstrap/Container";

/**
 * Common template to be used by all pages of the decision aid.
 * Includes PageTitle component and forces all page content within
 * a container
 */
const PageTemplate = (props) => {
  return (
    <div className="page">
      <PageTitle />
      <Container>
        { props.children }
      </Container>
    </div>
  );
}

export default PageTemplate;
