import React from "react";

function Joke(props) {
  // console.log(props)
  return (
    <div>
      {/* <h4 style={{ display: props.question ? "block" : "none" }}> 
      Question: {props.question} </h4> */}
      <h4 style={{ display: !props.question && "none" }}>
        Question: {props.question}
      </h4>
      <p style={{ color: "blue" }}> Answer: {props.ans}</p>
    </div>
  );
}

export default Joke;
