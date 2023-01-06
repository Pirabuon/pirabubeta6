import React from "react";
import insta from "../components/images/insta.png";
import linkedin from "../components/images/linkedin.png";
import facebook from "../components/images/facebook.png";

const RsLinks = () => {
  return (
    <ul className="rsLinks">
      <li>
        <a
          href="https://www.instagram.com/pirabu.on/"
          rel="noreferrer"
          crossOrigin="anonymous"
          target="_blank"
        >
          <img className="insta" src={insta} alt="insta" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/pirabu/"
          rel="noreferrer"
          crossOrigin="anonymous"
          target="_blank"
        >
          <img className="linkedin" src={linkedin} alt="linkedin" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/pirabu.design"
          rel="noreferrer"
          crossOrigin="anonymous"
          target="_blank"
        >
          <img className="facebook" src={facebook} alt="facebook" />
        </a>
      </li>
    </ul>
  );
};

export default RsLinks;
