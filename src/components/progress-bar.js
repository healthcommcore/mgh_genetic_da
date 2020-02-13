import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";
import MenuItem from "./menu-item";
import Nav from "react-bootstrap/Nav";

/**
 * Accepts data param obtained as result from ProgressMenuItems' StaticQuery
 * component, iterates through data, uses MenuItem component to create UI
 * progress bar menu items
 */
const MenuItems = ({ data }) => {
  const items = data.allMenuLinkContentMenuLinkContent.edges;
  const order = getOrder(items);
  const reordered = reOrder(order, items);
  return (
    <Nav>
    { reordered.map( (item, i) => {
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
                weight
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
