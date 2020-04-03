import React from "react";
import Card from "react-bootstrap/Card";
import ContentModuleSegment from "./content-module-segment";

const ContentModule = ({ content }) => {
  const modules = content.field_content_module;
  return modules[0].field_module_title && (
    modules.map( (module, i) => {
      const segments = module.relationships.field_content_segment;
      return (
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
      );
    })
  );
}

export default ContentModule;
