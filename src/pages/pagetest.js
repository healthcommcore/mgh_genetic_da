import React from "react";
import { useDrupalMenu } from "../helpers/use-drupal-menu";
import NavManager from "../helpers/nav-manager";

const PageTest = () => {
  const items = useDrupalMenu();
  const nm = new NavManager(items);
  console.log(nm.getCurrent());

  return (
    <h1>This is a page to test things</h1>
  );
}

export default PageTest;
