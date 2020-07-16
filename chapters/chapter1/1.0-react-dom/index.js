import React from "react";
import ReactDom from "react-dom";

// ReactDom.render(What do i want to render, where do i want to render )

//JSX

ReactDom.render(
  <div>
    <h1>Hello world</h1>
    <p>This is paragraph </p>
  </div>,
  document.getElementById("root")
);

var myNewP = document.createElement("p");
myNewP.innerHTML = "This is a new paragraph";



ReactDom.render(
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>,
  document.getElementById("root")
);