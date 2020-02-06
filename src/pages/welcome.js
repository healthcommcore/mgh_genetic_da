import React from "react";
import { graphql } from "gatsby";
import PageTemplate from "../components/page_template";

const Welcome = () => {
  return (
    <PageTemplate>
      <div className="body">
        This is body text
      </div>
    </PageTemplate>
  );
}

export default Welcome;
