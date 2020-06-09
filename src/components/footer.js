import React from "react";
import MghLogo from "../images/mgh_logo_footer.svg";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between">
      <img src={ MghLogo } alt="MGH logo" />
      <p>&copy;2020<br />
      Massachusetts General Hospital</p>
    </footer>
  );
}

export default Footer;
