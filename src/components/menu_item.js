import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql, Link } from "gatsby";

export const PureMenuItem = ({ data }) => {
  return (
    <Link to={ data.path }>
      { data.name }
    </Link>
  );
}

export const MenuItem = (props) => {
  return (
    <StaticQuery
      query={ graphql`
        query {
          allTaxonomyTermDaSection {
            nodes {
              name
            }
          }
        }
      `}
      render={ data => <PureMenuItem {...props} data={ data } /> }
    />
  );
}

PureMenuItem.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string
}

PureMenuItem.defaultProps = {
  path: "#",
  name: "Menu item"
}

export default MenuItem;
