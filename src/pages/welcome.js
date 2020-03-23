import React from "react";
import NavManager from "../helpers/nav-manager";
import { useDrupalMenu } from "../helpers/use-drupal-menu";

const Welcome = ({ data }) => {
  const items = useDrupalMenu();
  const nm = new NavManager();
  nm.initialize(items);
  console.log(nm.getMenuItems());

  return (
    <h1>This is the welcome page</h1>
  );
}

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: {eq: $id} ) {
      title
      body {
        processed
      }
    }
  }
`
export default Welcome;
