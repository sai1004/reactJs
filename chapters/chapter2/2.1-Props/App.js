import React from "react";
import Profiles from "./Porfiles";
import Products from "./Products";

function App() {
  return (
    <div>
      <Profiles
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgwOSsFUjCmSEls-83nQCJz9I7BDLOICoWNA&usqp=CAU"
        name="test"
        email="abc@xyz.com"
        mobile="(111) 222-222-555"
      />
      <Profiles
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgwOSsFUjCmSEls-83nQCJz9I7BDLOICoWNA&usqp=CAU"
        name="test2"
        email="abc2@xyz.com"
        mobile="(111) 222-222-555"
      />
  
      <Products product={{ name: "cycle", color: "red", price: 3999 }} />
      <Products product={{ name: "bike", color: "black", price: 38999 }} />
      <Products product={{ name: "car", color: "blue", price: 300999 }} />
      <Products product={{ name: "auto", color: "mategrey", price: 333999 }} />
    </div>
  );
}

export default App;
