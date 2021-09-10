import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Web",
          "React Developer",
          "Node.js Developer",
          "SQL, Javascript y Phython",
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
