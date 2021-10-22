import React, { Component } from "react";

import Image from "../assets/img/mountains.jpg";

const heroStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${Image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function Home() {
  return (
    <div style={heroStyle}>
      <h2>My Name is Mia</h2>
      <p>
        I am a visual Designer who fell <span>in love with code!</span>
      </p>
    </div>
  );
}

export default Home;
