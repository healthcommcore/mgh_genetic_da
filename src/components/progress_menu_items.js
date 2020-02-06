import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import MenuItem from "./menu_item";
import Nav from "react-bootstrap/Nav";

/**
 * Accepts data param obtained as result from ProgressMenuItems' StaticQuery
 * component, iterates through data, uses MenuItem component to create UI
 * progress bar menu items
 */
const MenuItems = ({ data }) => {
  const items = data.allMenuLinkContentMenuLinkContent.edges;
  return (
    <Nav>
    { items.map( (item, i) => {
        return (
          <MenuItem 
            name={ item.node.title }
            url={ item.node.link.uri }
          />
        );
      })
    }
    </Nav>
  );
}

/** 
 * Use Gatsby's StaticQuery component to pull all the menu item
 * names and paths from Drupal and pass them as props to the MenuItems
 * component above
 */
const ProgressMenuItems = (props) => {
  return (
    <StaticQuery
      query={ graphql`
        query MenuQuery {
          allMenuLinkContentMenuLinkContent {
            edges {
              node {
                title
                link {
                  uri
                }
              }
            }
          }
        }
      `}
      render={ (data) => {
        return (
          <MenuItems data={ data } { ...props } />
        )
      }}
    />
  );
}

export default ProgressMenuItems;
