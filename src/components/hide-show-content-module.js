import React from "react";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import { connect } from "react-redux";
import { getContent } from "../helpers";
import ContentModuleSegment from "./content-module-segment";

const mapStateToProps = (state) => {
  return {
    visibility: state.user.test.visibility
  }
}

const HideShowContentModule = ({ pieces, visibility }) => {
  return (
    <Card bsPrefix="card test-choices">
      <Card.Body>
        { pieces.map( (piece, i) => {
          const segments = piece.relationships.field_content_segment;
          const moduleLabel = getContent(piece.relationships, "field_it_s_your_choice_label");
          return (
            <Fade key={i} in={ visibility[moduleLabel.name]}>
              <div className={ "position-absolute " + (visibility[moduleLabel.name] ? "top-layer" : "bottom-layer") }>
                <Card.Title>{ piece.field_module_title }</Card.Title>
                { segments.map( (segment, j) => {
                  return (
                    <ContentModuleSegment 
                      key={ j }
                      segment={ segment }
                    />
                  );
                })}
              </div>
            </Fade>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default connect(mapStateToProps, null)(HideShowContentModule);
