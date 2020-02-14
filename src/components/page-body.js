import React from "react";
import Container from "react-bootstrap/Container";
import { setHTML, exists } from "../helpers/helpers";

const PageBody = ({ intro, body, outro, relationships }) => {
  return (
    <Container>
      { exists(intro) ? setHTML(intro.processed) : "" }
      { exists(body) ? setHTML(body.processed) : "" }
      { exists(outro) ? setHTML(outro.processed)  : "" }
    </Container>
  );
}

const getContent = (content) => {
  return ( exists(content) ? setHTML(content.processed) : "" );
}

export default PageBody;
