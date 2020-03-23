import React from "react";
import { useDrupalMenu } from "../helpers/use-drupal-menu";

const PageTest = () => {
  const items = useDrupalMenu();
  //const nm = new NavManager(items);
  //console.log(nm.getMenuItems());

  return (
    <h1>This is a page to test things</h1>
  );
}

export default PageTest;
