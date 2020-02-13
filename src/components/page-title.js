import React from "react";
import Container from "react-bootstrap/Container";

const PageTitle = ({ children }) => {
  return (
    <div className="title-border">
      <Container>
        <h1>{ children }</h1>
      </Container>
    </div>
  );
}

export default PageTitle;
