import React from "react";
import { Link } from "react-router-dom";

import "components/Header/Header.scss";
import { ReactComponent as Logo } from "assets/Logo.svg";

function Header({ currentUser }) {
  return (
    <div className="header container">
      <Link className="header__logo" to={"/"}>
        <Logo />
      </Link>
      <div className="header__nav-links">
        <Link className="nav-link" to={"/shop"}>
          Link1
        </Link>
        <Link className="nav-link" to={"/contact"}>
          Link2
        </Link>
        {currentUser ? (
          <div className="nav-link" onClick={() => {console.log("write logout code....")}}>
            SIGNOUT
          </div>
        ) : (
          <Link className="nav-link" to={"/login"}>
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
