import React from "react";

const setHTML = (data) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}

const getNodeId = (str) => {
  return str.split("/").pop();
}

const urlify = (name) => {
  const toArr = name.split(" ").map( (segment) => {
    return segment.toLowerCase().replace(/\W/g, "");
  });
  return toArr.join("-");
}

const exists = (content) => {
  return content != null && typeof content !== "undefined";
}

const ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}

const hasValidField2 = (obj, field1, field2) => {
  const component = obj[field1];
  if (Array.isArray(component)) {
    return component[0].hasOwnProperty(field2) && component[0][field2];
  }
  else if (component.hasOwnProperty(field2)) {
    return Array.isArray(component[field2]) && component[field2][0];
  }
  else {
    return false;
  }
}

const hasContent = (obj, field1, field2) => {
  const hasField1 = obj.hasOwnProperty(field1) && obj[field1] != null;
  return hasField1 && hasValidField2(obj, field1, field2);
}

const getContent = (obj, field1, field2) => {
  return hasContent(obj, field1, field2) && obj[field1];
}

export { setHTML, getNodeId, urlify, exists, ucFirst, getContent };
