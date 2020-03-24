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

export { setHTML, getNodeId, urlify, exists };
