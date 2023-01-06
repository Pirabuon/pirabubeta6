import React from "react";
import RsLinks from "../components/RsLinks";
import FormPirabu from "../components/FormPirabu";

export default function HomePage() {
  return (
    <>
      <div className="page-container ">
        <div className="proContent">
          <h2 className="title">Contact me</h2>
          <ul className="contactLinks">
            <li>Paris</li>
            <li>
              <a href="tel:+33760774934">+33 7 60 77 49 34</a>
            </li>
            <li>
              <a href="mailto:pirabu.chandran@gmail.com">
                pirabu.chandran@gmail.com
              </a>
            </li>
          </ul>
          <FormPirabu />
          <RsLinks />
        </div>
      </div>
    </>
  );
}
