import React from "react";
import imageMe from "./imagesvg/mrme.png";

function AboutMe() {
  return (
    <div className="about" id="about-section">
      <img src={imageMe} className="messi" />
      <div className="about-text">
        <h4>Who am i ?</h4>
        <h2>About me</h2>
        <p>
          I'm a web designer / developer based in Lagos, Nigeria. I have a
          passion for web design and love to create for web and mobile devices.
        </p>
        <button className="lightbutton">View my CV</button>
      </div>
    </div>
  );
}

export default AboutMe;
