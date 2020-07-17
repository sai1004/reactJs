import React from "react";

function Products(props) {
  return (
    <div>
      <h1> {props.product.name} </h1>
      <h4> {props.product.color} </h4>
      <strong> {props.product.price} </strong>
    </div>
  );
}

export default Products;
