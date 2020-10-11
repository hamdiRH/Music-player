import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <FontAwesomeIcon icon={faMusic} className="logo" />
        <span className="span-logo">Music player</span>
      </div>
    </nav>
  );
};

export default Nav;
