import React from "react";

function getAlet() {
  return alert("Alert is Invoked!");
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.toggle ? "HI" : "Hello"} Home Page!! </h1>
        <button onClick={this.clickHandler}> Hit Me </button>
      </div>
    );
  }
}

export default Home;
