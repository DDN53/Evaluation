import React from "react";
import "./siteIntro.css";

export default function siteIntro({ children }) {
  return (
    <div className="siteIntro">
      <div className="titleIntro">
        <h1 className="title">MOVIE LIBRARY</h1>
        <div className="intro-container">
          <p className="intro">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.{" "}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
