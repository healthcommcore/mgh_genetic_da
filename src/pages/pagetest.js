import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useDrupalMenu } from "../helpers/use-drupal-menu";

const PageTest = () => {
  const items = useDrupalMenu();
  console.log(items);
{/*
  const items = useStaticQuery(
    graphql`
      query {
        allMenuLinkContentMenuLinkContent {
          edges {
            node {
              title
              weight
              link {
                uri
              }
            }
          }
        }
      }
    `
  );
*/}
  return (
    <h1>This is a page to test things</h1>
  );
}

export default PageTest;
