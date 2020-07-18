import React, { Component } from "react";

class FakeComp extends Component {
  state = {
    name: "Mukul",
  };

  render() {
    return (
      <div>
        <h1> Hello I Am {this.state.name}! </h1>
      </div>
    );
  }
}

const FakeFunction = () => {
  let name = "Mukul";
  console.log(`Hey ${name}`);
};

export default FakeComp;
