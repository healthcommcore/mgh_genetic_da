import React from "react";

const ContentContainer = ({ className, children }) => {
  return (
    <div className={ "content-container " + className }>
      { children }
    </div>
  );
}

export default ContentContainer;
