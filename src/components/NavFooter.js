import React from "react";
import { Link } from "react-router-dom";
import home from "./images/home.png";

const NavFooter = () => {
  return (
    <nav className="NavFooter">
      <div className="backBtn">
        <ul>
          <li className="homeBtn">
            <Link to="/">
              <img className="naviIcon" src={home} alt="naviIcon" />
            </Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavFooter;
