import React from "react";
import "../scss/hero.scss";
import Image from "../assets/img/mountains.jpg";
import AnimatedText from "./animatedText";

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
        <AnimatedText />
      </div>
    </div>
  );
}

export default Home;
