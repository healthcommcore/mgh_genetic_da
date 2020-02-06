import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

const PageTitle = (props) => {
  return (
    <div className="title-border">
      <Container>
        <h1>{ props.title }</h1>
      </Container>
    </div>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string
}

PageTitle.defaultProps = {
  title: "Page title"
}

export default PageTitle;
