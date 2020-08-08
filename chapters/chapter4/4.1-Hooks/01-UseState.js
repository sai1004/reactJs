import React, { useState } from "react";

function Home() {
  const [color, setColor] = useState("red");
  const [bgColor, setbgColor] = useState("blue");

  function changeStyles() {
    setColor("green");
    setbgColor("cyan");
  }
  return (
    <div>
      <h1> Manipulating CSS using Hooks </h1>

      <h3 style={{ color: color }}> Ronaldo </h3>
      <h3 style={{ backgroundColor: bgColor }}> Football </h3>

      <button onClick={changeStyles}> change Color </button>
    </div>
  );
}

export default Home;
