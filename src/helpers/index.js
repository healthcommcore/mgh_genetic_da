import React from "react";

const setHTML = (data) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}

const getNodeId = (str) => {
  return str.split("/").pop();
}

const urlify = (name) => {
  return name.toLowerCase().replace(/\ /g, "-");
}

const exists = (content) => {
  return content != null && typeof content !== "undefined";
}

const ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}

export { setHTML, getNodeId, urlify, exists, ucFirst };
