import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ProgressMenuItems from "./progress_menu_items";

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        background: `rebeccapurple`,
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <ProgressMenuItems />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
