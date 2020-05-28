import React from "react";
import Container from "react-bootstrap/Container";

const PageTitle = ({ children }) => {
  return (
    <div className="title-border">
      <div className="title-bkgrd">
        <Container>
          <h1>{ children }</h1>
        </Container>
      </div>
    </div>
  );
}

export default PageTitle;
