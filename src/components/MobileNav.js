import React, { useState } from "react";
import naviIcon from "./images/naviIcon.png";
import close from "./images/close.png";

import { Link } from "react-router-dom";
import RsLinks from "./RsLinks";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`mobile-nav ${isOpen ? "animate" : ""} `}
      style={{
        position: "absolute",
        left: isOpen ? 0 : "-300px",
        maxWidth: "300px"
      }}
    >
      {!isOpen && (
        <button onClick={toggleNav}>
          <img className="naviIcon" src={naviIcon} alt="naviIcon" />
        </button>
      )}
      {isOpen && (
        <div className="MobileNav">
          <button onClick={toggleNav}>
            <img className="naviIcon" src={close} alt="close" />
          </button>
          <ul>
            <li onClick={toggleNav}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/work">My Work</Link>
            </li>
            <li onClick={toggleNav}>
              <Link to="/contact">Contact</Link>
            </li>
            <RsLinks />
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
