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
            <Fade key={i} in={ visibility[moduleLabel.name]} >
              <div className="position-absolute">
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
{/*
          <ConditionalWrapper
            condition={ module.field_should_be_hidden && moduleLabel.name }
            wrapper={ children => 
              <Fade in={ visibility[moduleLabel.name] }>
                <div className={ visibility[moduleLabel.name] ? "spacer" : "" }>
                { children }
                </div>
              </Fade> }
          >
            <Card key={ i } bsPrefix={ moduleLabel.name ? "card position-absolute" : "card" }>
              <Card.Body>
              <div className="content-structure">
                <Card.Title>{ module.field_module_title }</Card.Title>
                { segments.map( (segment, j) => {
                  return (
                    <ContentModuleSegment 
                      key={ j }
                      segment={ segment }
                    />
                  );
                })}
              </div>
              </Card.Body>
            </Card>
          </ConditionalWrapper>
          */}


export default connect(mapStateToProps, null)(HideShowContentModule);
