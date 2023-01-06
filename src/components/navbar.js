import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import hello from "./images/hello.png";

import ShareButton from "./share";
import NavFooter from "./NavFooter";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className={"menu"}>
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <MobileNav />
        <li className="noPad">
          <a href="tel:0033760774934">
            <img className="hello" src={hello} alt="hello" />
          </a>
        </li>
        <li className="hsShare"></li>
      </ul>
      <NavFooter />
    </nav>
  );
};

export default Navbar;
