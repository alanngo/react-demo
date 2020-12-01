import "./About.css";
import React from "react";
import tabs from "./tabs.jpg"

function template() {
  return (
    <div className="about">
      <h1>6627 favorite game</h1>
      <img src={tabs} alt="totally accurate battle simulator"></img>
    </div>
  );
};

export default template;
