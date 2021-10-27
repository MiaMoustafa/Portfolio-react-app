import React from "react";
import "../scss/hero.scss";
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
      <div className="heroContainer">
        <h2>My Name is Mia</h2>
        <h3>
          I am a visual Designer who fell <span>in love with code!</span>
        </h3>
      </div>
    </div>
  );
}

export default Home;
