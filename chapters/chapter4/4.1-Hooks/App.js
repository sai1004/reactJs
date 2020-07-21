/* ---------------------  useState ------------------------ */

import React, { useState } from "react";

function App() {
  // useState is simillar to this.state
  const [player, setPlayer] = useState("Shachin");

  return (
    <div>
      <h1> The Declared player is {player}</h1>
    </div>
  );
}

export default App;

/* ---------------------- Manipulating ------------------------ */

import React, { useState } from "react";

function App() {
  // useState is simillar to this.state
  // player takes the value of useState
  const [player, setPlayer] = useState("Shachin");

  // clickHandler Manipulating the value
  function changePlayer() {
    setPlayer("Dhoni");
  }

  return (
    <div>
      <h1> The Declared player is {player}</h1>
      <button onClick={changePlayer}> ClickMe </button>
    </div>
  );
}

export default App;

/* ---------------------- Manipulating ------------------------ */

import React, { useState } from "react";

function App() {
  // useState is simillar to this.state
  // player takes the value of useState
  const [player, setPlayer] = useState("Shachin");

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // clickHandler Manipulating the value
  function changePlayer() {
    setPlayer("Dhoni");
    setNumbers([2, 5, 6, 7, 9, 1]);
  }

  return (
    <div>
      <h1> The Declared player is {player}</h1>
      <h1> The Declared numbers are {numbers}</h1>
      <button onClick={changePlayer}> ClickMe </button>
    </div>
  );
}

export default App;
