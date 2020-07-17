import React from "react";
import Joke from "./Joke";
import jokesData from "./JokesData";

var productsData = [
  {
    id: 1,
    name: "cycle",
    color: "red",
    price: 3999,
  },
  {
    id: 2,
    name: "bike",
    color: "red",
    price: 3999,
  },
  {
    id: 3,
    name: "car",
    color: "red",
    price: 3999,
  },
  {
    id: 4,
    name: "auto",
    color: "red",
    price: 3999,
  },
];

function App() {
  // Mapping Components
  const jokeComponents = jokesData.map((joke, index) => {
    return <Joke key={index} question={joke.question} ans={joke.ans} />;
  });

  const productComponents = productsData.map((product, i) => {
    return <Products key={i} product={product} />;
  });

  return (
    <div>
      {jokeComponents}

      {productComponents}
    </div>
  );
}

export default App;
