import React from "react";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import { getContent } from "../helpers";
import { connect } from "react-redux";
import ConditionalWrapper from "./conditional-wrapper";
import ContentModuleSegment from "./content-module-segment";

const mapStateToProps = (state) => {
  return {
    visibility: state.user.test.visibility
  }
}

const ContentModule = ({ content, visibility }) => {
  const modules = content.field_content_module;
  return (modules.length > 0 && modules[0].field_module_title) && (
    modules.map( (module, i) => {
      const segments = module.relationships.field_content_segment;
      const moduleLabel = getContent(module.relationships, "field_it_s_your_choice_label");
      return (
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
      );
    })
  );
}

export default connect(mapStateToProps, null)(ContentModule);
