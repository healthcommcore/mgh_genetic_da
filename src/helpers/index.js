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

const hasContent = (obj, field1, field2) => {
  const hasField1 = obj.hasOwnProperty(field1);
  const hasField2 = Array.isArray(obj[field1]) && obj[field1][0].hasOwnProperty(field2) && obj[field1][0][field2];
  return hasField1 && hasField2;
}

const getContent = (obj, field1, field2) => {
  return hasContent(obj, field1, field2) && obj[field1];
}

export { setHTML, getNodeId, urlify, exists, ucFirst, getContent };
