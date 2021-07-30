import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Frontend",
          "React Developer",
          "React Native Developer",
          "MongoDB, MySQL, Java y Docker",
        ],
        autoStart: true,
        loop: true,
        delay: 30,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
