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

const getOrder = (items) => {
  const order = []
  items.forEach( (item) => {
    order.push(item.node.weight);
  });
  return order.sort().reverse();
}

const reOrder = (order, items) => {
  const reordered = [];
  order.forEach( (num) => {
    items.forEach( (item) => {
      if(item.node.weight === num) {
        reordered.push(item);
      }
    });
  });
  return reordered;
}

export { setHTML, getNodeId, urlify, exists, getOrder, reOrder };
