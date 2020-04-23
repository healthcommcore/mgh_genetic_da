import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import ConditionalWrapper from "./conditional-wrapper";
import ContentModuleSegment from "./content-module-segment";

const ContentModule = ({ content }) => {
  const [open, setOpen] = useState(false);

  const modules = content.field_content_module;
  return (modules.length > 0 && modules[0].field_module_title) && (
    modules.map( (module, i) => {
      const segments = module.relationships.field_content_segment;
      return (
        <ConditionalWrapper
          condition={ module.field_should_be_hidden }
          wrapper={ children => <Fade in={ open }>{ children }</Fade> }
        >
          <Card key={ i }>
            <Card.Body>
              <Card.Title>{ module.field_module_title }</Card.Title>
              { segments.map( (segment, j) => {
                return (
                  <ContentModuleSegment 
                    key={ j }
                    segment={ segment }
                  />
                );
              })}
            </Card.Body>
          </Card>
        </ConditionalWrapper>
      );
    })
  );
}

export default ContentModule;
