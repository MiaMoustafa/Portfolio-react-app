import React from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "reactstrap";
import "../scss/hero.scss";

const AnimatedText = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <animated.div style={fade}>
      <h2>My Name is Mia</h2>
      <h3>
        I am a visual Designer who fell <span>in love with code!</span>
      </h3>
      <Button className="btnHome">Explore</Button>
    </animated.div>
  );
};
export default AnimatedText;
