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

export { setHTML, getNodeId, urlify, exists, ucFirst };
